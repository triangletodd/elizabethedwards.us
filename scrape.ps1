$ErrorActionPreference = "Stop"

$url = "http://localhost:9222/json"
$pages = Invoke-RestMethod -Uri $url
$linkedinPage = $pages | Where-Object { $_.url -match "linkedin.com" }

if (-not $linkedinPage) {
    Write-Host "LinkedIn page not found in open tabs. Searching for the first page..."
    $linkedinPage = $pages[0]
}

$wsUrl = $linkedinPage.webSocketDebuggerUrl

$ws = New-Object System.Net.WebSockets.ClientWebSocket
$uri = New-Object System.Uri($wsUrl)
$ct = [System.Threading.CancellationToken]::None

Write-Host "Connecting to $wsUrl..."
$ws.ConnectAsync($uri, $ct).Wait()

# We will send Runtime.evaluate to get document.body.innerText
$msg = '{"id":1,"method":"Runtime.evaluate","params":{"expression":"document.body.innerText"}}'
$bytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
$segment = New-Object System.ArraySegment[byte] -ArgumentList @(,$bytes)
$ws.SendAsync($segment, [System.Net.WebSockets.WebSocketMessageType]::Text, $true, $ct).Wait()

$buffer = New-Object byte[] (10 * 1024 * 1024) # 10MB buffer
$segment2 = New-Object System.ArraySegment[byte] -ArgumentList @(,$buffer)

$ms = New-Object System.IO.MemoryStream
do {
    $result = $ws.ReceiveAsync($segment2, $ct).Result
    $ms.Write($buffer, 0, $result.Count)
} while (-not $result.EndOfMessage)

$resp = [System.Text.Encoding]::UTF8.GetString($ms.ToArray())
$ws.CloseAsync([System.Net.WebSockets.WebSocketCloseStatus]::NormalClosure, "", $ct).Wait()

Write-Host $resp
