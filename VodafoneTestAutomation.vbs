'on error resume next
Set oShell = CreateObject ("WScript.Shell")
'msgbox(oShell.CurrentDirectory)
nodepath = oShell.CurrentDirectory&"\NodeJSPortable\App\NodeJS\node"
serverpath = oShell.CurrentDirectory&"\server.js"
strv =chr(34)&nodepath & chr(34)& chr(34) & serverpath &chr(34)
'oShell.run chr(34)& nodepath & serverpath &chr(34)
oShell.run strv
set oshell = nothing
Set oShell1 = CreateObject ("WScript.Shell")
'oShell1.Exec oShell1.CurrentDirectory&"\Postgresql\PostgreSQLPortable.exe"
set oShell1 = nothing
Set oShell2 = CreateObject ("WScript.Shell")
'basepth = oShell2.CurrentDirectory&"\BPF\FormatBPF.vbs"
strv2 = chr(34)&basepth & chr(34)
'msgbox strv2
'oShell2.run strv2
set oShell2 = nothing
Set oShell2 = CreateObject ("WScript.Shell")
basepth = oShell2.CurrentDirectory&"\phpCollab-xampp\xampp_start.exe"
strv2 = chr(34)&basepth & chr(34)
'msgbox strv2
oShell2.run strv2
set oShell2 = nothing
Set oShell2 = CreateObject ("WScript.Shell")
'basepth = oShell2.CurrentDirectory&"\BulkCDRGeneration\generateannotation-xls.vbs"
'strv2 = chr(34)&basepth & chr(34)
'msgbox strv2
'oShell2.run strv2
set oShell2 = nothing
set oshell = nothing
Set oShell1 = CreateObject ("WScript.Shell")
basepth =  oShell1.CurrentDirectory&"\phpCollab-xampp\mysql_start.bat"
strv2 = chr(34)&basepth & chr(34)
oShell1.run strv2
Set objFSO = CreateObject("Scripting.FileSystemObject")
'msgbox CurrentDirectory&"\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt"
Set objFile = objFSO.OpenTextFile(oShell1.CurrentDirectory&"\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt", 2)


objFile.Write ""
objFile.Write "Status"

objFile.Close

'iURL = "http://localhost:8081/"
'set objShell3 = CreateObject("Shell.Application")
'objShell3.ShellExecute "chrome.exe",iURL, "", "", 1

