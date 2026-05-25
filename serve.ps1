$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$address = [Net.IPAddress]::Parse("127.0.0.1")
$server = [Net.Sockets.TcpListener]::new($address, 8080)
$server.Start()

function Get-ContentType($path) {
  $extension = [IO.Path]::GetExtension($path).ToLowerInvariant()
  switch ($extension) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "text/javascript; charset=utf-8" }
    default { "text/plain; charset=utf-8" }
  }
}

try {
  while ($true) {
    $client = $server.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = [IO.StreamReader]::new($stream, [Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      while ($reader.Peek() -gt -1) {
        $line = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($line)) { break }
      }

      $path = "index.html"
      if ($requestLine -match "^[A-Z]+\s+/(?<path>[^\s?]*)") {
        $path = [Uri]::UnescapeDataString($Matches.path)
        if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }
      }

      $fullPath = Join-Path $root $path
      $resolvedRoot = (Resolve-Path $root).Path
      $ok = (Test-Path $fullPath) -and ((Resolve-Path $fullPath).Path.StartsWith($resolvedRoot))

      if ($ok) {
        $bytes = [IO.File]::ReadAllBytes($fullPath)
        $header = "HTTP/1.1 200 OK`r`nContent-Type: $(Get-ContentType $fullPath)`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
      } else {
        $bytes = [Text.Encoding]::UTF8.GetBytes("Not found")
        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
      }

      $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      $stream.Write($bytes, 0, $bytes.Length)
    } finally {
      $client.Close()
    }
  }
} finally {
  $server.Stop()
}
