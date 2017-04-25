Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c batch.bat"
oShell.Run strArgs, 0, false