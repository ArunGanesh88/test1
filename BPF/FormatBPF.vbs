'on error resume next 
x = 10
y = 10

Const fsoForReading = 1
Const fsoForWriting = 2
Dim fso, f, Temp_content, Current_line ,BPF_Ref,objFile
Set WshShell = CreateObject("WScript.Shell")
strCurDir    = WshShell.CurrentDirectory
set objFso = CreateObject("Scripting.FilesystemObject")
do until x<>y

	Set fso = CreateObject("Scripting.FileSystemObject")
	Set f = fso.OpenTextFile(strCurDir & "\BPF\Master_Temp_to_Store_Bpf_Formatting_Status.txt",1)
	Temp_content = f.ReadAll
	f.close
	Set f = fso.OpenTextFile(strCurDir & "\BPF\Master_Temp_to_Store_Bpf_Formatting_Status.txt",1)
	'MsgBox Temp_content	
	if(instr(1,Temp_content,"New")>0) then
		Do Until f.AtEndOfStream
		  'msgbox("conditionvalid")
		  Current_line= f.ReadLine
		  if(instr(1,Current_line,"New")>0) then
			BPF_Ref = split(Current_line,"$")
			'msgbox(BPF_Ref(0))
			filename = BPF_Ref(0) & ".xlsm"
			objFso.CopyFile strCurDir&"\BPF\BPF.xlsm",strCurDir&"\BPF\"&filename
			initfilename = split(filename,".")
			afname = initfilename(0)
			set exobj = createobject("Excel.application")
			exobj.visible = false
			set wbk = exobj.Workbooks.open(strCurDir&"\BPF\"&filename)
			set wbk2 = exobj.Workbooks.open(strCurDir&"\BPF\"&afname&"_archive.xlsm")
			for each ws in wbk2.worksheets
			if  (ws.Name <> "Cover" and ws.Name <> "RD") and ws.Name <> "Instructions" then
				if ws.cells(6,2) <> "" then
					usedrow = ws.UsedRange.Row + ws.UsedRange.Rows.Count - 1 'ws.usedrange.rows.count
					sheetname = ws.Name
					if sheetname = "ACCOUNT_CREATE" then
						rng = "B6:AO"&usedrow
					Elseif sheetname = "ACCOUNT_MODIFY" then
						rng = "B6:AM"&usedrow
					Elseif sheetname = "ACCOUNT_CEASE" then
						rng = "B6:F"&usedrow
					Elseif sheetname = "SERVICE_CREATE" then
						rng = "B6:N"&usedrow
					Elseif sheetname = "SERVICE_MODIFY" then
						rng = "B6:N"&usedrow
					Elseif sheetname = "SERVICE_CEASE" then
						rng = "B6:C"&usedrow
					Elseif sheetname = "MISC_CHARGE_CREATE" then
						rng = "B6:W"&usedrow
					Elseif sheetname = "MISC_CHARGE_MODIFY" then
						rng = "B6:X"&usedrow
					Elseif sheetname = "MISC_CHARGE_CEASE" then
						rng = "B6:J"&usedrow	
					Elseif sheetname = "ADDITIONAL_CHARGE_CREATE" then
						rng = "B6:S"&usedrow
					Elseif sheetname = "ADDITIONAL_CHARGE_CEASE" then
						rng = "B6:I"&usedrow	
					End if
					ws.Range(rng).copy
					wbk.sheets(sheetname).Range(rng).Pastespecial -4163
					
				End if
			End if
			Next
			wbk2.save
			wbk2.close
			wbk.save
			wbk.close
			set exobj = nothing
			objFso.deleteFile strCurDir&"\BPF\"&afname&"_archive.xlsm"
			f.close
			'find and replace the string in file (staus update as complete)
			Temp_content = LoadStringFromFile(strCurDir & "\BPF\Master_Temp_to_Store_Bpf_Formatting_Status.txt")
			Temp_content = Replace(Temp_content, Current_line, BPF_Ref(0)&"$Complete")
			Set objFile = fso.OpenTextFile(strCurDir & "\BPF\Master_Temp_to_Store_Bpf_Formatting_Status.txt", 2)
			objFile.WriteLine Temp_content
			objFile.Close
			exit do
		  end if
		Loop
	end if
	if(instr(1,Temp_content,"ZIP_in")>0) then
		Do Until f.AtEndOfStream
		  'msgbox("conditionvalid")
		  Current_line= f.ReadLine
		  if(instr(1,Current_line,"ZIP_in")>0) then
			Zip_Ref = split(Current_line,"$")
			'msgbox(BPF_Ref(0))
			foldername = Zip_Ref(0)		  
			ArchiveFolder strCurDir & "\macTestData\"& foldername &".zip", strCurDir & "\macTestData\"& foldername 
			Temp_content = LoadStringFromFile(strCurDir & "\BPF\Master_Temp_to_Store_Bpf_Formatting_Status.txt")
			Temp_content = Replace(Temp_content, Current_line, foldername&"$Complete")
			Set objFile = fso.OpenTextFile(strCurDir & "\BPF\Master_Temp_to_Store_Bpf_Formatting_Status.txt", 2)
			objFile.WriteLine Temp_content
			objFile.Close			
			exit do
		  end if
		Loop
	end if
		
loop

Function LoadStringFromFile(filename)
    Dim fso, f
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set f = fso.OpenTextFile(filename, fsoForReading)
    Temp_content = f.ReadAll
	f.Close
	LoadStringFromFile = Temp_content
End Function

Sub ArchiveFolder (zipFile, sFolder)

    With CreateObject("Scripting.FileSystemObject")
        zipFile = .GetAbsolutePathName(zipFile)
        sFolder = .GetAbsolutePathName(sFolder)

        With .CreateTextFile(zipFile, True)
			'msgbox zipFile
            .Write Chr(80) & Chr(75) & Chr(5) & Chr(6) & String(18, chr(0))
        End With
    End With

    With CreateObject("Shell.Application")
        .NameSpace(zipFile).CopyHere .NameSpace(sFolder).Items

        Do Until .NameSpace(zipFile).Items.Count = _
                 .NameSpace(sFolder).Items.Count
            WScript.Sleep 1000 
        Loop
    End With

End Sub