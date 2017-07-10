on error resume next
Set WshShell = CreateObject("WScript.Shell")
strCurDir    = WshShell.CurrentDirectory
set exobj = createobject("Excel.application")
exobj.DisplayAlerts = False
set exwbk2 = exobj.workbooks.open(strCurDir&"\BulkCDRGeneration\refwb.xlsx")
set exwbk2sh1 = exwbk2.sheets("OPCO")
set opcorowdict = CreateObject("Scripting.Dictionary")
for i = 2 to exwbk2sh1.usedrange.rows.count
	opcorowdict.add trim(exwbk2sh1.cells(i,4)),i
	
next
'For Each elem In opcorowdict
'MsgBox elem & " - " _
'& opcorowdict(elem)
'Next

set opcocoldict = CreateObject("Scripting.Dictionary")
for j = 1 to exwbk2sh1.usedrange.columns.count
	if exwbk2sh1.cells(1,j) <> "" then
		opcocoldict.add trim(exwbk2sh1.cells(1,j)),j
		'msgbox exwbk2sh1.cells(1,j)
	End if
next
'set exwbk3 = exobj.workbooks.open(strCurDir&"\BulkCDRGeneration\usage_mo_mt_roaming.xls")
set exwbk3sh1 = exwbk2.sheets("usage_mo_mt_roaming")
set roamrowdict = CreateObject("Scripting.Dictionary")
for i = 2 to exwbk3sh1.usedrange.rows.count
	roamrowdict.add trim(exwbk3sh1.cells(i,1)),i
next
set roamcoldict = CreateObject("Scripting.Dictionary")
for j = 1 to exwbk3sh1.usedrange.columns.count
	if exwbk3sh1.cells(1,j) <> "" then
		roamcoldict.add trim(exwbk3sh1.cells(1,j)),j
	End if
next
'set exwbk4 = exobj.workbooks.open(strCurDir&"\BulkCDRGeneration\usage_type.xls")
set exwbk4sh1 = exwbk2.sheets("usage_type")
set usagerowdict = CreateObject("Scripting.Dictionary")
for i = 2 to exwbk4sh1.usedrange.rows.count
if not usagerowdict.Exists(trim(exwbk4sh1.cells(i,10))) then
	usagerowdict.add trim(exwbk4sh1.cells(i,10)),i
end if	
next
set usagecoldict = CreateObject("Scripting.Dictionary")
for j = 1 to exwbk4sh1.usedrange.columns.count
	if exwbk4sh1.cells(1,j) <> "" then
		usagecoldict.add trim(exwbk4sh1.cells(1,j)),j
	End if
next
'set exwbk5 = exobj.workbooks.open(strCurDir&"\BulkCDRGeneration\vge_network_code.xls")
set exwbk5sh1 = exwbk2.sheets("vge_network_code")
set countrycoderowdict = CreateObject("Scripting.Dictionary")
set countryrowdict = CreateObject("Scripting.Dictionary")
for i = 2 to exwbk5sh1.usedrange.rows.count
	if not countrycoderowdict.Exists(Trim(exwbk5sh1.cells(i,6))) then
		'msgbox exwbk5sh1.cells(i,6)
		countrycoderowdict.add trim(exwbk5sh1.cells(i,6)),i
	end if
	if not countryrowdict.Exists(Trim(exwbk5sh1.cells(i,2))&trim(exwbk5sh1.cells(i,3))) then
		countryrowdict.add trim(exwbk5sh1.cells(i,2))&trim(exwbk5sh1.cells(i,3)),i
	End if
next
set networkcodecoldict = CreateObject("Scripting.Dictionary")
for j = 1 to exwbk5sh1.usedrange.columns.count
	if exwbk5sh1.cells(1,j) <> "" then
		networkcodecoldict.add trim(exwbk5sh1.cells(1,j)),j
	End if
next
'set exwbk6 = exobj.workbooks.open(strCurDir&"\BulkCDRGeneration\annotation_spec_t.xls")
set exwbk6sh1 = exwbk2.sheets("annotation_spec_t")
set annotrowdict = CreateObject("Scripting.Dictionary")
for i = 2 to exwbk6sh1.usedrange.rows.count
if not annotrowdict.Exists(trim(exwbk6sh1.cells(i,2))&trim(exwbk6sh1.cells(i,3))&trim(exwbk6sh1.cells(i,4))) then
	annotrowdict.add trim(exwbk6sh1.cells(i,2))&trim(exwbk6sh1.cells(i,3))&trim(exwbk6sh1.cells(i,4)),i
end if
next
set annotcoldict = CreateObject("Scripting.Dictionary")
for j = 1 to exwbk6sh1.usedrange.columns.count
	if trim(exwbk6sh1.cells(1,j)) <> "" then
		annotcoldict.add trim(exwbk6sh1.cells(1,j)),j
	End if
next

x = 10
y = 10
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
						vgecode = trim(exwbk4sh1.cells(usagerowdict.item(currusage),usagecoldict.item("vge_codes")))
						opcoshort = trim(exwbk2sh1.cells(opcorowdict.item(opco),opcocoldict.item("OPCO_NAME")))
						opcoshortarr = split(opcoshort,"_")
						fopcoval = opcoshortarr(1)
						codedesc = trim(exwbk4sh1.cells(usagerowdict.item(currusage),usagecoldict.item("kenan_usg_description")))
						kenan_type_id_usg = currusage
						momtindicator = trim(exwbk3sh1.cells(roamrowdict.item(vgecode),roamcoldict.item("vge_item_mobile")))
						
						roamingindi = trim(exwbk3sh1.cells(roamrowdict.item(vgecode),roamcoldict.item("vge_item_roaming")))
						callingnumber = trim(exwbk1sh1.cells(i,2))
						callednumber = trim(exwbk1sh1.cells(i,3))
						callingcountry = exwbk1sh1.cells(i,4)
						callingnetwork = exwbk1sh1.cells(i,5)
						calledcountry = exwbk1sh1.cells(i,6)
						callednetwork = exwbk1sh1.cells(i,7)
						if momtindicator = "MT" then
							'tempno = callingnumber
							'callingnumber = callednumber
							'callednumber = tempno
							callingcountry = exwbk1sh1.cells(i,6)
							callingnetwork = exwbk1sh1.cells(i,7)
							calledcountry = exwbk1sh1.cells(i,4)
							callednetwork = exwbk1sh1.cells(i,5)
						End if
						callingnumbercc = mid(callingnumber,1,6)
						callednumbercc =mid(callednumber,1,6)
						numite = 6
						if  trim(callingcountry)	= "" then
							do until numite<=0
								if countrycoderowdict.Exists(callingnumbercc) Then
									srccountry = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("country"))) 
									srccnetwork = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("country"))) 
									plmncode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("plmn_code"))) 
									mccmnc = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("mcc_mnc")))
									srccountrycode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("country_code")))
									mnc = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("mnc")))
									vfukroamingcode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("vf_uk_roaming_code")))
									vfptroamingcode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("vf_pt_roaming_code")))
									vfczroamingcode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("vf_cz_roaming_code")))
									vfhuroamingcode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("vf_hu_roaming_code")))
									vfderoamingcode = trim(exwbk5sh1.cells(countrycoderowdict.item(callingnumbercc),networkcodecoldict.item("vf_de_roaming_code")))
									exit do
								else
									numite = numite-1
									callingnumbercc = mid(callingnumber,1,numite)
								End if
							loop
						else
							searchvalue = trim(callingcountry)&trim(callingnetwork)
							srccountry = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("country"))) 
							srccnetwork = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("country"))) 
							plmncode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("plmn_code"))) 
							mccmnc = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("mcc_mnc")))
							srccountrycode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("country_code")))
							mnc = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("mnc")))
							vfukroamingcode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("vf_uk_roaming_code")))
							vfptroamingcode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("vf_pt_roaming_code")))
							vfczroamingcode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("vf_cz_roaming_code")))
							vfhuroamingcode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("vf_hu_roaming_code")))
							vfderoamingcode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("vf_de_roaming_code")))
						end if
						numite = 6
						if  trim(calledcountry)	= "" then
							do until numite<=0
								if countrycoderowdict.Exists(callednumbercc) Then
									tgtcountry = trim(exwbk5sh1.cells(countrycoderowdict.item(callednumbercc),networkcodecoldict.item("country"))) 
									tgtntwrk = trim(exwbk5sh1.cells(countrycoderowdict.item(callednumbercc),networkcodecoldict.item("country"))) 
									tgtcountrycode = trim(exwbk5sh1.cells(countrycoderowdict.item(callednumbercc),networkcodecoldict.item("country_code")))
									exit do
								else
									numite = numite-1
									callednumbercc = mid(callednumber,1,numite)
								End if
							loop
						else
							searchvalue = trim(calledcountry)&trim(callednetwork)
							tgtcountry = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("country")))
							tgtntwrk = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("country"))) 
							tgtcountrycode = trim(exwbk5sh1.cells(countryrowdict.item(searchvalue),networkcodecoldict.item("country_code")))
						end if
						
						if  momtindicator = "MT" then
							tempcde = tgtcountrycode 
							tgtcountrycode = srccountrycode
							srccountrycode = tempcde
						end if
						annotationsrc = CDR_Ref(2)
						annotsearchval = trim(fopcoval)&trim(vgecode)&trim(codedesc)
						if annotrowdict.exists(annotsearchval) then
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("orig_type_id_usg"))) = "TYPE_ID_USG" Then
							annotationorig_type_id_usg = kenan_type_id_usg
						elseif	trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("orig_type_id_usg"))) = "VGE_CODE" Then
							annotationorig_type_id_usg = vgecode
						else
							annotationorig_type_id_usg = ""
						End if	
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("tadig"))) ="PLMN_CODE" Then
							annottadig = plmncode
						elseif	trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("tadig"))) ="NULL" Then
							annottadig = ""
						else
							annottadig = ""
						end if
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("mccmnc"))) ="MCC_MNC" Then
							annotmccmnc = mccmnc
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("mccmnc"))) ="21670" Then
							annotmccmnc = "21670"
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("mccmnc"))) ="NULL" Then
							annotmccmnc = ""
						else
							annotmccmnc = ""
						end if
						annotcallingnocountrycode = srccountrycode
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "VF_UK_ROAMING_CODE" Then
							annotsrcntwrk = vfukroamingcode
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "VF_PT_ROAMING_CODE" Then
							annotsrcntwrk = vfptroamingcode
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "VF_CZ_ROAMING_CODE" Then
							annotsrcntwrk = vfczroamingcode	
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "VF_HU_ROAMING_CODE" Then
							annotsrcntwrk = vfhuroamingcode
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "MCC_MNC" Then
							annotsrcntwrk = mccmnc	
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "MNC" Then
							annotsrcntwrk = mnc		
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network"))) = "NULL" Then	
							annotsrcntwrk = ""
						else
							annotsrcntwrk = trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("source_network")))
						end if
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_country"))) = "NULL" or trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_country"))) = "Called Number COUNTRY_CODE (NOTE: Expected to be NULL)" Then	
							annottargetcntrycode = ""
						else
							annottargetcntrycode = tgtcountrycode
						end if
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_country"))) = "491722270333"  Then	
							annottargetcntrycode = 49
						end if
						if trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "VF_DE_ROAMING_CODE" Then
							annottgtntwrk = vfderoamingcode
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "VF_PT_ROAMING_CODE" Then
							annottgtntwrk = vfptroamingcode
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "VF_CZ_ROAMING_CODE" Then
							annottgtntwrk = vfczroamingcode	
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "VF_HU_ROAMING_CODE" Then
							annottgtntwrk = vfhuroamingcode
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "MCC_MNC" Then
							annottgtntwrk = mccmnc	
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "MNC" Then
							annottgtntwrk = mnc		
						elseif trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network"))) = "NULL" Then	
							annottgtntwrk = ""
						else
							annottgtntwrk = trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("target_network")))
						end if
							momtflag = trim(exwbk6sh1.cells(annotrowdict.item(annotsearchval),annotcoldict.item("mo_mt_flag")))
						end if
						if roamingindi = "I" then 
							annotroamindicator = "1"
						elseif roamingindi = "N" then 
							annotroamindicator = "1"
						elseif roamingindi = "D" then 
							annotroamindicator = "0"
						end if
						
						if	momtflag = "yes" then
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
							annotamt = exwbk1sh1.cells(i,12)
						end if 
						annotamt = opco_annotation_amt_formatter(opco,annotamt)
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
exwbk2.close
'exwbk3.close
'exwbk4.close
'exwbk5.close
'exwbk6.close
exobj.quit
If Err.Number <> 0 Then
	Temp_content = LoadStringFromFile(strCurDir & "\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt")
				Temp_content = Replace(Temp_content, Current_line, CDR_Ref(0)&"|"&CDR_Ref(1)&"|"&CDR_Ref(2)&"|Complete")
				Set objFile = fso.OpenTextFile(strCurDir & "\BulkCDRGeneration\Master_Temp_to_Store_cdr_Formatting_Status.txt", 2)
				objFile.WriteLine Temp_content
				objFile.Close	
end if
Function LoadStringFromFile(filename)
	Const fsoForReading = 1
    dim fso, f
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set f = fso.OpenTextFile(filename, fsoForReading)
    Temp_content = f.ReadAll
	f.Close
	LoadStringFromFile = Temp_content
End Function

function opco_annotation_amt_formatter(opco,amount_val)
		if opco="United Kingdom" and amount_val<>""  then
							amount_val = round(amount_val,3)
							if amount_val="0" then
								output = "0"
								opco_annotation_amt_formatter  = output	
							end if						
							 
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = (cint(Amount))*1000
							elseif instr(Amount,".")<>0 then
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								'msgbox amount_container(1)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = (cint(Amount_prefix))*1000		
								elseif n=1 then
								
									if amount_container(1)="0" then
									 output = (cint(Amount_prefix))*1000
									else
									output = cint(cdbl((Float_Amount*1000)))
									end if
								elseif n=2 or n=3  then
								
									output = cint(cdbl((Float_Amount*1000)))
								elseif n>3 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							end if						
					opco_annotation_amt_formatter = output		

		elseif opco="Germany" and amount_val<>"" then
							'amount_val = round(amount_val,6)
							if amount_val="0" then 
								
								output = "+0000000.000000"
								opco_annotation_amt_formatter = output
							end if

							 
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								if len(Amount)>7 then
								
									output = "Invalid Amount format for current OPCO, please provide the same .!!" 
									opco_annotation_amt_formatter = output
								end if
								output = pad(cint(Amount),7)
								output = "+"&output&".000000"
							elseif instr(Amount,".")<>0 then
							
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = pad(cint(Amount),7)
									output = "+"+output+".000000"	
								elseif n=1 or n<=6 then
								
									 decimal = pad_end((amount_container(1)),6)
									 intpart = pad(cint(Amount_prefix),7)
									output ="+"+intpart+"."+decimal
								elseif n>6 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							end if						
					opco_annotation_amt_formatter  = output			
		
		elseif opco="Netherland" and amount_val<>"" then
							amount_val = round(amount_val,3)
							if amount_val="0" then
							
								output = "0.0"
								opco_annotation_amt_formatter = output	
							end if 

							 
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output+".0"
							elseif instr(Amount,".")<>1 then
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+".0"	
								elseif n=1 or n<=3 then
								
									 decimal = amount_container(1)
									 intpart = Amount_prefix
									output =intpart+"."+decimal
								elseif n>3 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							end if						
					opco_annotation_amt_formatter = output	
			
		elseif opco="Ireland" and amount_val<>"" then
							amount_val = round(amount_val,4)
							if amount_val="0" then
							
								output = "0.0000"
								opco_annotation_amt_formatter =output	
							end if

							
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output+".0000"
							elseif instr(Amount,".") <> 0 then
							
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+".0"	
								elseif n=1 or n<=4 then
								
									 decimal = pad_end(amount_container(1),4)
									 intpart = Amount_prefix
									output =intpart+"."+decimal
									
							 	elseif n>4 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							end if						
					opco_annotation_amt_formatter = output	
		
		elseif opco="Spain" and amount_val<>"" then
							amount_val = round(amount_val,4)
							if amount_val="0" then 
							
								output = "0.0"
								opco_annotation_amt_formatter =output	
							end if

							
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output+".0"
							elseif instr(Amount,".") <> 0 then
							
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+".0"	
								elseif n=1 or n<=4 then
								
									 decimal = amount_container(1)
									 intpart = Amount_prefix
									output =intpart+"."+decimal
								
								elseif n>4 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							end if						
					opco_annotation_amt_formatter = output	
		
		elseif opco="Italy" and  amount_val<>"" then
							amount_val = round(amount_val,4)
							if amount_val="0" then
							
								output = "0,0000"
								opco_annotation_amt_formatter = output	
							End if

							
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output&",0000"
							elseif instr(Amount,".")<>0 then
						
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+",0000"	
								elseif n=1 or n<=4 then
								
									 decimal = pad_end(amount_container(1),4)
									 intpart = Amount_prefix
									output =intpart+","+decimal
								elseif n>4 then 
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							
							end if						
					opco_annotation_amt_formatter  = output	
		
		elseif opco="Portugal" and amount_val<>"" then
							amount_val = round(amount_val,2)
							if amount_val="0" then 
							
								output = "0"
								opco_annotation_amt_formatter  = output	
							end if

							 
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output&""
							elseif instr(Amount,".") <> 0 then
							
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+""	
								elseif n=1 or n<=2 then
								
									 decimal =amount_container(1)
									 intpart = Amount_prefix
									if intpart="0" then 
										intpart=""
									end if
									output =intpart+"."+decimal
								elseif n>2 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							End if			
					opco_annotation_amt_formatter  = output	
		
		elseif opco="Czech Republic" and  amount_val<>"" then
							amount_val = round(amount_val,2)
							if amount_val="0" then 
							
								output = "0.00"
								opco_annotation_amt_formatter  = output	
							end if

							
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output&".00"
							elseif instr(Amount,".") <> 0 then
							
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+".00"	
								elseif n=1 or n<=2 then
								
									 decimal =pad_end((amount_container(1)),2)
									 intpart = Amount_prefix
									output =intpart+"."+decimal
								elseif n>2 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								End if
							End if						
					opco_annotation_amt_formatter  = output	
		
		elseif opco="Hungary" and amount_val<>"" then
						amount_val = round(amount_val,2)
							if amount_val="0" then
							
								output = "0"
								opco_annotation_amt_formatter  = output	
							end if

							
							Amount = amount_val
							Float_Amount = cdbl(amount_val)
							if instr(Amount,".") = 0 then
							
								output = Amount
								output = output&""
							elseif instr(Amount,".") <> 0 then
							
								 amount_container = split(Amount,".")
								Amount_prefix = amount_container(0)
								 n = len(cstr(amount_container(1)))
								if n=0 then
								
									output = Amount
									output = output+""	
								elseif n=1 or n<=2 then
								
									 decimal =amount_container(1)
									 intpart = Amount_prefix
									if intpart="0" then intpart="" end if
									output =intpart+"."+decimal
								elseif n>2 then
								  output = "Invalid Amount format for current OPCO, please provide the same .!!"
								end if
							end if						
					opco_annotation_amt_formatter  = output	
		
		elseif opco="Malaysia" and amount_val<>"" then
			output = amount_val
			opco_annotation_amt_formatter  = output		
		end if
end function
function pad(num, size) 
     s = num&""
    do while len(s) < size 
		s = "0" & s 
	loop
    pad = s
end function

function pad_end(num, size) 
     s = num&""
    do while (len(s) < size) 
	s =  s & "0" 
	loop
    pad_end = s
end function
