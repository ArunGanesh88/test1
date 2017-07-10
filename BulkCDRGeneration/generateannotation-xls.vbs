Set WshShell = CreateObject("WScript.Shell")
strCurDir    = WshShell.CurrentDirectory
set exobj = createobject("Excel.application")
exobj.DisplayAlerts = False
x = 10
y = 10
msgbox strCurDir
Set DBEngine = CreateObject("ADODB.Connection")
DBConnectionStr = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source="&strCurDir&"\BulkCDRGeneration\refwb.xlsx;Extended Properties="&chr(34)&"Excel 12.0 Xml;HDR=YES"&chr(34)&";"
DBEngine.Open DBConnectionStr
'do until x<>y
	Set fso = CreateObject("Scripting.FileSystemObject")
	Set f = fso.OpenTextFile(strCurDir & "\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt",1)
	Temp_content = f.ReadAll
	f.close
	Set f = fso.OpenTextFile(strCurDir & "\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt",1)
	'MsgBox Temp_content	
	if(instr(1,Temp_content,"New")>0) then
		Do Until f.AtEndOfStream
			'msgbox("conditionvalid")
			 Current_line= f.ReadLine
			if(instr(1,Current_line,"New")>0) then
				CDR_Ref = split(Current_line,"|")
				'msgbox(CDR_Ref(0))
				filename = CDR_Ref(0) & ".xlsx"
				set exwbk1 = exobj.workbooks.open(strCurDir&"\BulkCDRGeneration\"&filename)
				set exwbk1sh1 = exwbk1.sheets("UsageSpecification")
				for i = 2to exwbk1sh1.usedrange.rows.count
					if trim(exwbk1sh1.cells(i,1)) <> "" then
						opco  = CDR_Ref(1)
						currusage = trim(exwbk1sh1.cells(i,1))
						Set BatchRS1 = CreateObject("ADODB.recordset")
						BatchQuery1 = "select distinct OPCO_NAME FROM [OPCO$] where OPCO_Description= '"& opco &"' and Status = 'Active'"
						BatchRS1.Open BatchQuery1, DBEngine
						Do until BatchRS1.EOF
							opcoshort = BatchRS1.fields("OPCO_NAME").value
							opcoshortarr = split(opcoshort,"_")
							fopcoval =  opcoshortarr(1)
							'msgbox fopcoval
							'msgbox opcoshort	
							exit do
						Loop
						Set BatchRS2 = CreateObject("ADODB.recordset")
						BatchQuery2 = "select distinct vge_codes,kenan_usg_description,kenan_type_id_usg FROM [usage_type$] where kenan_type_id_usg  = "&currusage
						BatchRS2.Open BatchQuery2, DBEngine
						Do until BatchRS2.EOF
							'msgbox BatchRS2.fields("kenan_type_id_usg").value
							'msgbox BatchRS2.fields("vge_codes").value
							'msgbox BatchRS2.fields("kenan_usg_description").value
							vgecode = BatchRS2.fields("vge_codes").value
							codedesc = BatchRS2.fields("kenan_usg_description").value
							kenan_type_id_usg =currusage
							BatchRS2.movenext
						Loop
						Set BatchRS6 = CreateObject("ADODB.recordset")
						BatchQuery6 = "select distinct * FROM [usage_mo_mt_roaming$] where vge_code  = "&vgecode
						BatchRS6.Open BatchQuery6, DBEngine
						Do until BatchRS6.EOF
							'msgbox BatchRS2.fields("kenan_type_id_usg").value
							'msgbox BatchRS2.fields("vge_codes").value
							'msgbox BatchRS2.fields("kenan_usg_description").value
							momtindicator = BatchRS6.fields("vge_item_mobile").value
							roamingindi = BatchRS6.fields("vge_item_roaming").value
							BatchRS6.movenext
						Loop
						if  trim(exwbk1sh1.cells(i,4))	= "" then
							callingnumber = trim(exwbk1sh1.cells(i,2))
							callingnumbercc = mid(callingnumber,1,6)
							Set BatchRS4 = CreateObject("ADODB.recordset")
							BatchQuery4 = "select distinct * from [vge_network_code$] where country_code = "&callingnumbercc
							BatchRS4.Open BatchQuery4, DBEngine
							numite = 6
							do until numite<=0
							if not BatchRS4.eof then
								do until BatchRS4.eof
									srccountry = BatchRS4.fields("country").value
									srccnetwork = BatchRS4.fields("network").value
									plmncode = BatchRS4.fields("plmn_code").value
									mccmnc = BatchRS4.fields("mcc_mnc").value
									srccountrycode = BatchRS4.fields("country_code").value
									mnc = BatchRS4.fields("mnc").value
									vfukroamingcode = BatchRS4.fields("vf_uk_roaming_code").value
									vfptroamingcode = BatchRS4.fields("vf_pt_roaming_code").value
									vfczroamingcode = BatchRS4.fields("vf_cz_roaming_code").value
									vfhuroamingcode = BatchRS4.fields("vf_hu_roaming_code").value
									vfderoamingcode = BatchRS4.fields("vf_de_roaming_code").value
									mnc = BatchRS4.fields("mnc").value
									exit do
								loop
								set BatchRS4 = nothing
								exit do
							else
								set BatchRS4 = nothing
								numite = numite-1
								callingnumbercc = mid(callingnumber,1,numite)
								Set BatchRS4 = CreateObject("ADODB.recordset")
								BatchQuery4 = "select distinct * from [vge_network_code$] where country_code ="&callingnumbercc
								BatchRS4.Open BatchQuery4, DBEngine
							End if
							loop
						elseif trim(exwbk1sh1.cells(i,4))<> "" and trim(exwbk1sh1.cells(i,5)) <> "" then
							Set BatchRS4 = CreateObject("ADODB.recordset")
							BatchQuery4 = "select distinct * from [vge_network_code$] where country ='"&exwbk1sh1.cells(i,4)&"' and network ='"&exwbk1sh1.cells(i,5)&"'"
							BatchRS4.Open BatchQuery4, DBEngine
							do until BatchRS4.eof
									srccountry = BatchRS4.fields("country").value
									srccnetwork = BatchRS4.fields("network").value
									plmncode = BatchRS4.fields("plmn_code").value
									mccmnc = BatchRS4.fields("mcc_mnc").value
									srccountrycode = BatchRS4.fields("country_code").value
									mnc = BatchRS4.fields("mnc").value
									vfukroamingcode = BatchRS4.fields("vf_uk_roaming_code").value
									vfptroamingcode = BatchRS4.fields("vf_pt_roaming_code").value
									vfczroamingcode = BatchRS4.fields("vf_cz_roaming_code").value
									vfhuroamingcode = BatchRS4.fields("vf_hu_roaming_code").value
									vfderoamingcode = BatchRS4.fields("vf_de_roaming_code").value
									mnc = BatchRS4.fields("mnc").value
									exit do
							loop
						elseif exwbk1sh1.cells(i,4) <> "" then
							Set BatchRS4 = CreateObject("ADODB.recordset")
							BatchQuery4 = "select distinct * from [vge_network_code$] where country ='"&exwbk1sh1.cells(i,4)&"'"
							BatchRS4.Open BatchQuery4, DBEngine
							do until BatchRS4.eof
									srccountry = BatchRS4.fields("country").value
									srccnetwork = BatchRS4.fields("network").value
									plmncode = BatchRS4.fields("plmn_code").value
									mccmnc = BatchRS4.fields("mcc_mnc").value
									srccountrycode = BatchRS4.fields("country_code").value
									mnc = BatchRS4.fields("mnc").value
									vfukroamingcode = BatchRS4.fields("vf_uk_roaming_code").value
									vfptroamingcode = BatchRS4.fields("vf_pt_roaming_code").value
									vfczroamingcode = BatchRS4.fields("vf_cz_roaming_code").value
									vfhuroamingcode = BatchRS4.fields("vf_hu_roaming_code").value
									vfderoamingcode = BatchRS4.fields("vf_de_roaming_code").value
									mnc = BatchRS4.fields("mnc").value
									exit do
							loop
						end if
						if  exwbk1sh1.cells(i,6) = "" then
							callingnumber = trim(exwbk1sh1.cells(i,3))
							callingnumbercc = mid(callingnumber,1,6)
							Set BatchRS4 = CreateObject("ADODB.recordset")
							BatchQuery4 = "select distinct * from [vge_network_code$] where country_code ="&callingnumbercc
							BatchRS4.Open BatchQuery4, DBEngine
							numite = 6
							do until numite<=0
							if not BatchRS4.eof then
								do until BatchRS4.eof
									tgtcountry = BatchRS4.fields("country").value
									tgtntwrk = BatchRS4.fields("network").value
									tgtcountrycode = BatchRS4.fields("country_code").value
									exit do
								loop
								exit do
							else
								set BatchRS4 = nothing
								numite = numite-1
								callingnumbercc = mid(callingnumber,1,numite)
								Set BatchRS4 = CreateObject("ADODB.recordset")
								BatchQuery4 = "select distinct * from [vge_network_code$] where country_code ="&callingnumbercc
								BatchRS4.Open BatchQuery4, DBEngine
							End if
							loop
						elseif exwbk1sh1.cells(i,6) <> "" and exwbk1sh1.cells(i,7) <> "" then
							Set BatchRS4 = CreateObject("ADODB.recordset")
							BatchQuery4 = "select distinct * from [vge_network_code$] where country ='"&exwbk1sh1.cells(i,6)&"' and network ='"&exwbk1sh1.cells(i,7)&"'"
							BatchRS4.Open BatchQuery4, DBEngine
							do until BatchRS4.eof
								tgtcountry = BatchRS4.fields("country").value
								tgtntwrk = BatchRS4.fields("network").value
								tgtcountrycode = BatchRS4.fields("country_code").value
								exit do
							loop
						elseif exwbk1sh1.cells(i,6) <> "" then
							Set BatchRS4 = CreateObject("ADODB.recordset")
							BatchQuery4 = "select distinct * from [vge_network_code$] where country ='"&exwbk1sh1.cells(i,6)&"'"
							BatchRS4.Open BatchQuery4, DBEngine
							do until BatchRS4.eof
								tgtcountry = BatchRS4.fields("country").value
								tgtntwrk = BatchRS4.fields("network").value
								tgtcountrycode = BatchRS4.fields("country_code").value
								exit do
							loop
						end if
						Set BatchRS3 = CreateObject("ADODB.recordset")
						BatchQuery3 = "select distinct * from [annotation_spec_t$] where country = '"&fopcoval&"' and vge_code = "&vgecode&" and vge_item_name = '"&codedesc&"'"			
						BatchRS3.Open BatchQuery3, DBEngine
						Do until BatchRS3.EOF
							'msgbox BatchRS2.fields("vge_codes").value
							'msgbox BatchRS3.fields("tadig").value
							annotationsrc = CDR_Ref(2)
							if BatchRS3.fields("orig_type_id_usg").value = "TYPE_ID_USG" Then
								annotationorig_type_id_usg = kenan_type_id_usg
							elseif	BatchRS3.fields("orig_type_id_usg").value = "VGE_CODE" Then
								annotationorig_type_id_usg = vgecode
							else
								annotationorig_type_id_usg = ""
							End if
							if BatchRS3.fields("tadig").value ="PLMN_CODE" Then
								annottadig = plmncode
							elseif	BatchRS3.fields("tadig").value ="NULL" Then
								annottadig = ""
							else
								annottadig = ""
							end if
							if BatchRS3.fields("mccmnc").value ="MCC_MNC" Then
								annotmccmnc = mccmnc
							elseif BatchRS3.fields("mccmnc").value ="21670" Then
								annotmccmnc = "21670"
							elseif BatchRS3.fields("mccmnc").value ="NULL" Then
								annotmccmnc = ""
							else
								annotmccmnc = ""
							end if
							annotcallingnocountrycode = srccountrycode
							if BatchRS3.fields("source_network").value = "VF_UK_ROAMING_CODE" Then
								annotsrcntwrk = vfukroamingcode
							elseif BatchRS3.fields("source_network").value = "VF_PT_ROAMING_CODE" Then
								annotsrcntwrk = vfptroamingcode
							elseif BatchRS3.fields("source_network").value = "VF_CZ_ROAMING_CODE" Then
								annotsrcntwrk = vfczroamingcode	
							elseif BatchRS3.fields("source_network").value = "VF_HU_ROAMING_CODE" Then
								annotsrcntwrk = vfhuroamingcode
							elseif BatchRS3.fields("source_network").value = "MCC_MNC" Then
								annotsrcntwrk = mccmnc	
							elseif BatchRS3.fields("source_network").value = "MNC" Then
								annotsrcntwrk = mnc		
							elseif BatchRS3.fields("source_network").value = "NULL" Then	
								annotsrcntwrk = ""
							else
								annotsrcntwrk = BatchRS3.fields("source_network").value
							end if
							annottargetcntrycode = tgtcountrycode
							if BatchRS3.fields("target_network").value = "VF_DE_ROAMING_CODE" Then
								annottgtntwrk = vfderoamingcode
							elseif BatchRS3.fields("target_network").value = "VF_PT_ROAMING_CODE" Then
								annottgtntwrk = vfptroamingcode
							elseif BatchRS3.fields("target_network").value = "VF_CZ_ROAMING_CODE" Then
								annottgtntwrk = vfczroamingcode	
							elseif BatchRS3.fields("target_network").value = "VF_HU_ROAMING_CODE" Then
								annottgtntwrk = vfhuroamingcode
							elseif BatchRS3.fields("target_network").value = "MCC_MNC" Then
								annottgtntwrk = mccmnc	
							elseif BatchRS3.fields("target_network").value = "MNC" Then
								annottgtntwrk = mnc		
							elseif BatchRS3.fields("target_network").value = "NULL" Then	
								annottgtntwrk = ""
							else
								annottgtntwrk = BatchRS3.fields("target_network").value
							end if
							if roamingindi = "I" then 
								annotroamindicator = "1"
							elseif roamingindi = "N" then 
								annotroamindicator = "1"
							elseif roamingindi = "D" then 
								annotroamindicator = "0"
							end if
							if	annotroamindicator = "1" then
								annotmomt = momtindicator
							else
								annotmomt = ""
							end if
							if annotationsrc = "CSA" then
								annotservicetype = ""
							END IF
							annotvgecode = 	vgecode
							if trim(exwbk1sh1.cells(i,12)) = "" then
								annotamt = 0
							else
								annotamt = trim(exwbk1sh1.cells(i,12))	
							end if 
							finalannot = 	annotationsrc&"|"&annotationorig_type_id_usg&"|"&annottadig&"|"&annotmccmnc&"|"&annotcallingnocountrycode&"|"&annotsrcntwrk&"|"&annottargetcntrycode&"|"&annottgtntwrk&"|"&annotroamindicator&"|"&annotmomt&"|"&annotservicetype&"|"&annotamt&"|"&annotvgecode&"||"
							'msgbox finalannot
							exit do
							BatchRS3.movenext
						Loop
						finalannot = 	annotationsrc&"|"&annotationorig_type_id_usg&"|"&annottadig&"|"&annotmccmnc&"|"&annotcallingnocountrycode&"|"&annotsrcntwrk&"|"&annottargetcntrycode&"|"&annottgtntwrk&"|"&annotroamindicator&"|"&annotmomt&"|"&annotservicetype&"|"&annotamt&"|"&annotvgecode&"||"
						 exwbk1sh1.cells(i,15) = finalannot
					end if
				next
				exwbk1.save
				exwbk1.close
				Temp_content = LoadStringFromFile(strCurDir & "\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt")
				Temp_content = Replace(Temp_content, Current_line, CDR_Ref(0)&"|"&CDR_Ref(1)&"|"&CDR_Ref(2)&"|Complete")
				Set objFile = fso.OpenTextFile(strCurDir & "\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt", 2)
				objFile.WriteLine Temp_content
				objFile.Close	
				exit do
			end if
		Loop
	End if
'Loop
exobj.quit
Function LoadStringFromFile(filename)
	Const fsoForReading = 1
    Dim fso, f
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set f = fso.OpenTextFile(filename, fsoForReading)
    Temp_content = f.ReadAll
	f.Close
	LoadStringFromFile = Temp_content
End Function