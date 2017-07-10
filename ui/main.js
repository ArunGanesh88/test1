function updateuser()
{
	var oReq2 = new XMLHttpRequest();
		oReq2.open("POST", '/updateuserDB');
		oReq2.onreadystatechange = function () 
		{
			if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) 
			{
				var rettxt = oReq2.responseText;
				var jsonstr = JSON.parse(rettxt);
				{	
					for(var i = 0;i<jsonstr.length;i++)
					{	
						if(jsonstr[i].usr1 === null)
						{
							var oReq3 = new XMLHttpRequest();
							var senddat = 'insert|'+JSON.stringify(jsonstr[i])
							oReq3.open("POST", '/updateuserDBag?retval='+senddat);
							oReq3.onreadystatechange = function () 
							{
								if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) 
								{
									frame = document.getElementById("frame");	
									frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=user_details"	
								}
							}
							oReq3.send();
						}
						else if(jsonstr[i].password !='')
						{	
							var oReq3 = new XMLHttpRequest();
							var senddat = 'update|'+JSON.stringify(jsonstr[i])
							oReq3.open("POST", '/updateuserDBag?retval='+senddat);
							oReq3.onreadystatechange = function () 
							{
								if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) 
								{
									frame = document.getElementById("frame");	
									frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=user_details"	
									console.log('done');
								}
							}
							oReq3.send();
						
						}
						else if(jsonstr[i].username === null)
						{
								
							var oReq3 = new XMLHttpRequest();
							var senddat = 'delete|'+JSON.stringify(jsonstr[i])
							oReq3.open("POST", '/updateuserDBag?retval='+senddat);
							oReq3.onreadystatechange = function () 
							{
								if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) 
								{
									frame = document.getElementById("frame");	
									frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=user_details"
									console.log('done');
								}
							}
							oReq3.send();
						
						}
					}
				}
			}
		}
		oReq2.send();	
}
$(document).ready(function() {
$('input').blur(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}

});
$('select').blur(function() {
  $(this).attr('title', $(this).val());
});
$('select').change(function() {
  $(this).attr('title', $(this).val());
});
$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});

});
function checkusecase(objid)
{
	var opco = document.getElementById('OPCOsel_Mac').value
	if(opco === 'United Kingdom')
	{
	if(objid.indexOf('BAN')> -1)
	{
		//alert(objid.indexOf('BAN'))
		var splitarr = objid.split('BAN');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('MSISDN')> -1)
	{
		var splitarr = objid.split('MSISDN');
		var rowid = splitarr[1];
		//alert(rowid);
		var targetid = 'type_of_mod'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('Email_add')> -1)
	{
		var splitarr = objid.split('Email_add');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('Mod_date')> -1)
	{
		var splitarr = objid.split('Mod_date');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('No_of_Rec_Mac')> -1)
	{
		var splitarr = objid.split('No_of_Rec_Mac');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	}
	if(opco === 'Germany')
	{
	if(objid.indexOf('DE_BAN')> -1)
	{
		var splitarr = objid.split('DE_BAN');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_MSISDN')> -1)
	{
		var splitarr = objid.split('DE_MSISDN');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_Name1')> -1)
	{
		var splitarr = objid.split('DE_Name1');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_Name2')> -1)
	{
		var splitarr = objid.split('DE_Name2');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_cre_date')> -1)
	{
		var splitarr = objid.split('DE_cre_date');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_eff_date')> -1)
	{
		var splitarr = objid.split('DE_eff_date');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_Old_value')> -1)
	{
		var splitarr = objid.split('DE_Old_value');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('DE_No_of_Rec_Mac')> -1)
	{
		var splitarr = objid.split('DE_No_of_Rec_Mac');
		var rowid = splitarr[1];
		var targetid = 'DE_use_case'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	}
	if(opco === 'Netherland')
	{
		if(objid.indexOf('BAN_NL')> -1)
	{
		var splitarr = objid.split('BAN_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('MSISDN_NL')> -1)
	{
		var splitarr = objid.split('MSISDN_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('Mod_date_NL')> -1)
	{
		var splitarr = objid.split('Mod_date_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('MAC_NL')> -1)
	{
		var splitarr = objid.split('MAC_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('Name_NL')> -1)
	{
		var splitarr = objid.split('Name_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('Desc_NL')> -1)
	{
		var splitarr = objid.split('Desc_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('ADD_ON_CON_DISCON_NL')> -1)
	{
		var splitarr = objid.split('ADD_ON_CON_DISCON_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('No_of_Rec_NL')> -1)
	{
		var splitarr = objid.split('No_of_Rec_NL');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_NL'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	}
	if(opco === 'Ireland')
	{
		if(objid.indexOf('BAN_IE')> -1)
	{
		var splitarr = objid.split('BAN_IE');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_IE'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('MSISDN_IE')> -1)
	{
		var splitarr = objid.split('MSISDN_IE');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_IE'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('Mod_date_IE')> -1)
	{
		var splitarr = objid.split('Mod_date_IE');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_IE'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	else if(objid.indexOf('No_of_Rec_IE')> -1)
	{
		var splitarr = objid.split('No_of_Rec_IE');
		var rowid = splitarr[1];
		var targetid = 'type_of_mod_IE'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Use Case and Proceed')
		}
	}
	
	}
}

function logout()
{
	var oReq2 = new XMLHttpRequest();
		oReq2.open("GET", '/logout');
		oReq2.onreadystatechange = function () 
		{
			//document.getElementById('logout').href = '/Index.html';
			//document.getElementById('logout').click();
			console.log('loggedout');
		}
		oReq2.send();	

}

function getusername()
{
		var oReq2 = new XMLHttpRequest();
		oReq2.open("GET", '/getusername');
		oReq2.onreadystatechange = function () 
		{
			if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) 
			{
				var rettxt = oReq2.responseText;
				var spltrettxt = rettxt.split('|');
				var usrname = spltrettxt[0];
				var rights = spltrettxt[1];
				document.getElementById("usernamediv").innerText = 'Welcome '+usrname;
				if(rights === 'admin')
				{
					//document.getElementById("adminlnk").style.display = 'inline';
				}
				else
				{
					document.getElementById("adminlnk").style.display = 'none'
					if (document.body.contains(document.getElementById("ADMIN_User_Manual_guide")))
					{
						document.getElementById("ADMIN_User_Manual_guide").style.display = 'none'
					}	
				}
			}
		}
		oReq2.send();	
}

function LoadTemplates()
{
	//templatedisplay();
	getusername();
	
	var oReq2 = new XMLHttpRequest();
	oReq2.open("GET", '/admin');
	oReq2.onreadystatechange = function () 
	{
		if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) 
		{
			console.log(oReq2.responseText);
			reponsetxt1 = oReq2.responseText
			var divid = document.getElementById("templatediv");
			var oReq = new XMLHttpRequest();
			oReq.open("POST", '/gettemplates');
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
				{
					console.log(oReq.responseText);
					reponsetxt = oReq.responseText
					responseJson = JSON.parse(reponsetxt);
					var divstr = '<table>'
					var sno=1;
					//alert(responseJson.length);	
					for(var currtem = 0; currtem<responseJson.length;currtem++)
					{
						//alert(reponsetxt1)
						if(reponsetxt1==='done')           
						{
							divstr = divstr+'<tr><td>&nbsp&nbsp&nbsp'+sno+'.</td> <td>&nbsp&nbsp&nbsp<a href = "#" id = "'+responseJson[currtem].TemplateName+'" onClick = "Dwntemplates(this.id);">'+responseJson[currtem].TemplateName+'</a>&nbsp&nbsp&nbsp</td><td><button id = "delete'+responseJson[currtem].TemplateName+'" onClick = "Deletetemplate(this.id)"> Delete Template </button></td></tr>'
						}
						else
						{
								
							divstr = divstr+'<tr><td>&nbsp&nbsp&nbsp'+sno+'.</td> <td>&nbsp&nbsp&nbsp<a href = "#" id = "'+responseJson[currtem].TemplateName+'" onClick = "Dwntemplates(this.id);">'+responseJson[currtem].TemplateName+'</a>&nbsp&nbsp&nbsp</td></tr>'	
						}
						sno = sno+1;
					}
					divstr = divstr+'</table>'
					divid.innerHTML = divstr;
					getopcomainjs_bulkupload();
				}
			};
			oReq.send();	
			if(reponsetxt1==='done')           
				{
					document.getElementById("templatesupload").style.display = 'inline';
				}
				else
				{
					document.getElementById("templatesupload").style.display = 'none';
				}
		}
	};
	oReq2.send();
}


function LoadTemplates_mac()
{
	//templatedisplay();
	getusername();
	var oReq2 = new XMLHttpRequest();
	oReq2.open("GET", '/admin');
	oReq2.onreadystatechange = function () 
	{
		if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) 
		{
			console.log(oReq2.responseText);
			reponsetxt1 = oReq2.responseText
			var divid = document.getElementById("templatediv_mac");  //templatediv
			var oReq = new XMLHttpRequest();
			oReq.open("post", '/gettemplates_mac');
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
				{
					console.log(oReq.responseText);
					reponsetxt = oReq.responseText
					responseJson = JSON.parse(reponsetxt);
					var divstr = '<table>'
					var sno=1;	
					for(var currtem = 0; currtem<responseJson.length;currtem++)
					{
						if(reponsetxt1==='done')           
						{
							divstr = divstr+'<tr><td>&nbsp&nbsp&nbsp'+sno+'.</td> <td>&nbsp&nbsp&nbsp<a href = "#" id = "'+responseJson[currtem].template_name+'" onClick = "Dwntemplates_mac(this.id);">'+responseJson[currtem].template_name+'</a>&nbsp&nbsp&nbsp</td><td><button id = "delete'+responseJson[currtem].template_name+'" onClick = "Deletetemplate_mac(this.id)"> Delete Template </button></td></tr>'
						}
						else
						{
							divstr = divstr+'<tr><td>&nbsp&nbsp&nbsp'+sno+'.</td> <td>&nbsp&nbsp&nbsp<a href = "#" id = "'+responseJson[currtem].template_name+'" onClick = "Dwntemplates_mac(this.id);">'+responseJson[currtem].template_name+'</a>&nbsp&nbsp&nbsp</td></tr>'	
						}
						sno = sno+1;
					}
					divstr = divstr+'</table>'
					divid.innerHTML = divstr;
					//getopcomainjs_bulkupload();
				}
			};
			oReq.send();	
			if(reponsetxt1==='done')           
				{
					document.getElementById("templatesupload").style.display = 'inline';
				}
				else
				{
					document.getElementById("templatesupload").style.display = 'none';
				}
		}
	};
	oReq2.send();
}



function getopcomainjs_bulkupload()
{
	//getproposition();
	//getservicetype();
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getopco');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById('OPCOsel');
	
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].OPCO_Description;
				newOption.innerText = responseJson[currele].OPCO_Description;
				opcodropdown.appendChild(newOption);
			}
        }
    };
	oReq.send();
}
function Deletetemplate(delid)
{
	var oReq = new XMLHttpRequest();
	var butsplit = delid.split("delete");
	var tempname = butsplit[1];
	oReq.open("post", '/deltemplates?retval='+tempname);
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            LoadTemplates();
        }
    };
	oReq.send();

}

function Deletetemplate_mac(delid)
{
	var oReq = new XMLHttpRequest();
	var butsplit = delid.split("delete");
	var tempname = butsplit[1];
	oReq.open("post", '/deltemplates_mac?retval='+tempname);
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            LoadTemplates_mac();
        }
    };
	oReq.send();

}




function Dwntemplates(lnkid)
{
	//alert(lnkid);
	document.getElementById(lnkid).href = '/dwntemplates?retval='+lnkid
	document.getElementById(lnkid).click();
		
}
function downloadusermanu(lnkid)
{
	//alert(lnkid);
	document.getElementById(lnkid).href = '/dwnusermanual?retval='+lnkid
	document.getElementById(lnkid).click();
		
}

function Dwntemplates_mac(lnkid)
{
	//alert(lnkid);
	document.getElementById(lnkid).href = '/dwntemplates_mac?retval='+lnkid
	document.getElementById(lnkid).click();
		
}

function loadframe(lnkid)
{
	var frame = document.getElementById("frame");
	switch(lnkid) {
    case "opco":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=opco"
        break;
    case "Account Category":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_account_category_t"
        break;
	case "Bill Period":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_bill_period_t"
        break;
	case "Country Code":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_country_code_t"
        break;
	case "Currency Code":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_currency_code_t"
        break;
	case "Language":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_input_language_t"
        break;
	case "Propositionk":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_proposition_t"
        break;
	case "Price Plan":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=mac_price_plan_t"
        break;
	case "Proposition CDR":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=proposition_category"
        break;
	case "Proposition BPF":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=proposition_t"
        break;
	case "Usage Type Roaming":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=usage_mo_mt_roaming"
        break;
	case "Usage Types":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=usage_type"
        break;
	case "User Details":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=user_details"
        break;	
	case "VGE Network codes":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=vge_network_code"
        break;		
	case "UK Price Plans":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=mac_price_ref_t"
        break;
	case "Germany Use Case":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=germany_usecase_t"
        break;
	case "IreLand Price Plans":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=ie_price_plan_t"
        break;
    case "BPF Price Plan":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=bpf_price_plan_t"
        break;
    case "BPF Flat Charge":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=bpf_flat_charge_t"
        break;
    case "BPF Device Type":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=bpf_device_type_t"
        break;		
	case "Annotation Spec":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=annotation_spec_t"
        break;
	case "Statecountrymapping":
        frame.src = "http://localhost/Adminer/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=add_countrycode_vgenetcode"
        break;		
    default:
		frame.src =  "";
        
}



}

function loadrefframe(lnkid)
{
	var frame = document.getElementById("frame");
	switch(lnkid) {
    case "opco":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=opco"
        break;
    case "Account Category":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_account_category_t"
        break;
	case "Bill Period":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_bill_period_t"
        break;
	case "Country Code":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_country_code_t"
        break;
	case "Currency Code":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_currency_code_t"
        break;
	case "Language":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_input_language_t"
        break;
	case "Propositionk":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=kenan_proposition_t"
        break;
	case "Price Plan":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=mac_price_plan_t"
        break;
	case "Proposition CDR":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=proposition_category"
        break;
	case "Proposition BPF":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=proposition_t"
        break;
	case "Usage Type Roaming":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=usage_mo_mt_roaming"
        break;
	case "Usage Types":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=usage_type"
        break;
	case "User Details":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=user_details"
        break;	
	case "VGE Network codes":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=vge_network_code"
        break;		
	case "UK Price Plans":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=mac_price_ref_t"
        break;
	case "Germany Use Case":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=germany_usecase_t"
        break;
	case "IreLand Price Plans":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=ie_price_plan_t"
        break;
    case "BPF Price Plan":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=bpf_price_plan_t"
        break;
    case "BPF Flat Charge":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=bpf_flat_charge_t"
        break;
    case "BPF Device Type":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=bpf_device_type_t"
        break;		
	case "Annotation Spec":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=annotation_spec_t"
        break;
	case "Statecountrymapping":
        frame.src = "http://localhost/Userefdata/adminer-4.3.0.php?server=localhost%3A3306&username=root&db=vge_cdrgeneration&select=add_countrycode_vgenetcode"
        break;		
    default:
		frame.src =  "";
        
}



}
function admin()
{
	var oReq2 = new XMLHttpRequest();
	oReq2.open("GET", '/admin');
	oReq2.onreadystatechange = function () {
	if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {
		console.log(oReq2.responseText);
		reponsetxt1 = oReq2.responseText
		if(reponsetxt1==='done')           
            {
                window.location.href="/admin.html";
            }
			else
			{
				alertify.alert('The User does not have admin rights')
			}
		}
		};
		oReq2.send();


}
/*function templatedisplay()
{
	var oReq2 = new XMLHttpRequest();
	oReq2.open("GET", '/admin');
	oReq2.onreadystatechange = function () {
	if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {
		console.log(oReq2.responseText);
		reponsetxt1 = oReq2.responseText
		if(reponsetxt1==='done')           
            {
                document.getElementById("templatesupload").style.display = 'inline';
            }
			else
			{
				document.getElementById("templatesupload").style.display = 'none';
			}
		}
		};
		oReq2.send();
		

}*/


function loaddropdowns()
{


	var oReq = new XMLHttpRequest();

	oReq.open("GET", '/getkenanPropositionTYPE');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);



			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			 var proplist = document.createElement("DATALIST");
			proplist.setAttribute("id", "propositiontype");
			document.getElementById("kenancontent").appendChild(proplist);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].proposition_type;
				newOption.innerText = responseJson[currele].proposition_type;
				proplist.appendChild(newOption);
			}
        }
    };
	oReq.send();
	var oReq1 = new XMLHttpRequest();
	oReq1.open("GET", '/getkenanAccCategory');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	oReq1.onreadystatechange = function () {
        if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
            console.log(oReq1.responseText);
			reponsetxt = oReq1.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			 var proplist = document.createElement("DATALIST");
			proplist.setAttribute("id", "kenanacccategory");
			document.getElementById("kenancontent").appendChild(proplist);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].display_value;
				newOption.innerText = responseJson[currele].display_value;
				proplist.appendChild(newOption);
			}
        }
    };
	oReq1.send();
	var oReq2 = new XMLHttpRequest();
	oReq2.open("GET", '/getkenancountry');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	oReq2.onreadystatechange = function () {
        if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {
            console.log(oReq2.responseText);
			reponsetxt = oReq2.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			 var proplist = document.createElement("DATALIST");
			proplist.setAttribute("id", "kenancountry");
			document.getElementById("kenancontent").appendChild(proplist);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].display_value;
				newOption.innerText = responseJson[currele].display_value;
				proplist.appendChild(newOption);
			}
        }
    };
	oReq2.send();
	var oReq3 = new XMLHttpRequest();
	oReq3.open("GET", '/getkenanlanguage');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	oReq3.onreadystatechange = function () {
        if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
            console.log(oReq3.responseText);
			reponsetxt = oReq3.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			 var proplist = document.createElement("DATALIST");
			proplist.setAttribute("id", "kenanlang");
			document.getElementById("kenancontent").appendChild(proplist);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].display_value;
				newOption.innerText = responseJson[currele].display_value;
				proplist.appendChild(newOption);
			}
        }
    };
	oReq3.send();
	var oReq4 = new XMLHttpRequest();
	oReq4.open("GET", '/kenanbillcycle');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	oReq4.onreadystatechange = function () {
        if(oReq4.readyState === XMLHttpRequest.DONE && oReq4.status === 200) {
            console.log(oReq4.responseText);
			reponsetxt = oReq4.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			 var proplist = document.createElement("DATALIST");
			proplist.setAttribute("id", "kenanbillcycle");
			document.getElementById("kenancontent").appendChild(proplist);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].display_value;
				newOption.innerText = responseJson[currele].display_value;
				proplist.appendChild(newOption);
			}
        }
    };
	oReq4.send();
	var oReq5 = new XMLHttpRequest();
	oReq5.open("GET", '/getcurrency');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	oReq5.onreadystatechange = function () {
        if(oReq5.readyState === XMLHttpRequest.DONE && oReq5.status === 200) {
            console.log(oReq5.responseText);
			reponsetxt = oReq5.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			 var proplist = document.createElement("DATALIST");
			proplist.setAttribute("id", "kenancurrency");
			document.getElementById("kenancontent").appendChild(proplist);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].display_value;
				newOption.innerText = responseJson[currele].display_value;
				proplist.appendChild(newOption);
			}
        }
    };
	oReq5.send();
}

function sendkenandata(idval)
{
	var kenanvar =  document.getElementsByClassName("Kenan_Acc_creation");
	var jsonstr = '[{';
	for(var currele = 0;currele<kenanvar.length;currele++)
	{
		//alert(kenanvar[currele].id);
		if(kenanvar[currele].id.indexOf('OPCOsel') != -1)
		{
			jsonstr = jsonstr+'"OPCOsel":"'+kenanvar[currele].value+'",';
		}

		if(kenanvar[currele].id.indexOf('custaccprop') != -1)
		{




			jsonstr = jsonstr+'"custaccprop":"'+kenanvar[currele].value+'",';
		}

		if(kenanvar[currele].id.indexOf('Custactdate') != -1)
		{




			jsonstr = jsonstr+'"Custactdate":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('custacccat') != -1)
		{
			jsonstr = jsonstr+'"custacccat":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustName') != -1)
		{
			jsonstr = jsonstr+'"CustName":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustAdd1') != -1)
		{
			jsonstr = jsonstr+'"CustAdd1":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustAdd2') != -1)
		{
			jsonstr = jsonstr+'"'+kenanvar[currele].id+'":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustAdd3') != -1)
		{
			jsonstr = jsonstr+'"CustAdd2":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustCity') != -1)
		{
			jsonstr = jsonstr+'"CustCity":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustZip') != -1)
		{
			jsonstr = jsonstr+'"CustZip":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustCountry') != -1)
		{
			jsonstr = jsonstr+'"CustCountry":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustLegalentyty') != -1)
		{
			jsonstr = jsonstr+'"CustLegalentyty":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('ContactPer') != -1)
		{
			jsonstr = jsonstr+'"ContactPer":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustcountyCode') != -1)
		{
			jsonstr = jsonstr+'"CustcountyCode":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustPhone') != -1)
		{
			jsonstr = jsonstr+'"CustPhone":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustMail') != -1)
		{
			jsonstr = jsonstr+'"CustMail":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Custlang') != -1)
		{
			jsonstr = jsonstr+'"Custlang":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustBillcycle') != -1)
		{
			jsonstr = jsonstr+'"CustBillcycle":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('CustCurr') != -1)
		{
			jsonstr = jsonstr+'"CustCurr":"'+kenanvar[currele].value+'","Billingaccount":[';
		}
		if(kenanvar[currele].id.indexOf('billaccproptyp') != -1)
		{
			if(kenanvar[currele].id.indexOf('bill1') == -1)
			{
				jsonstr = jsonstr+']}]},';
			}
			jsonstr = jsonstr+'{"billaccproptyp":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billactdate') != -1)
		{
			jsonstr = jsonstr+'"billactdate":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billactcat') != -1)
		{
			jsonstr = jsonstr+'"billactcat":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billactname') != -1)
		{
			jsonstr = jsonstr+'"billactname":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billadd1') != -1)
		{
			jsonstr = jsonstr+'"billadd1":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billadd2') != -1)
		{
			jsonstr = jsonstr+'"billadd2":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billadd3') != -1)
		{
			jsonstr = jsonstr+'"billadd3":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcity') != -1)
		{
			jsonstr = jsonstr+'"billcity":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billzipcode') != -1)
		{
			jsonstr = jsonstr+'"billzipcode":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcountry') != -1)
		{
			jsonstr = jsonstr+'"billcountry":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billlegalentyty') != -1)
		{
			jsonstr = jsonstr+'"billlegalentyty":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcontactperson') != -1)
		{
			jsonstr = jsonstr+'"billcontactperson":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcountycode') != -1)
		{
			jsonstr = jsonstr+'"billcountycode":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billphonenum') != -1)
		{
			jsonstr = jsonstr+'"billphonenum":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcontactmail') != -1)
		{
			jsonstr = jsonstr+'"billcontactmail":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcycle') != -1)
		{
			jsonstr = jsonstr+'"billcycle":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcurrency') != -1)
		{
			jsonstr = jsonstr+'"billcurrency":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billsapaccno') != -1)
		{
			jsonstr = jsonstr+'"billsapaccno":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billopcoban') != -1)
		{
			jsonstr = jsonstr+'"billopcoban":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billpaymentterms') != -1)
		{
			jsonstr = jsonstr+'"billpaymentterms":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billpurchasorder') != -1)
		{
			jsonstr = jsonstr+'"billpurchasorder":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billprofitcenter') != -1)
		{
			jsonstr = jsonstr+'"billprofitcenter":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billcntryserv') != -1)
		{
			jsonstr = jsonstr+'"billcntryserv":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billregno') != -1)
		{
			jsonstr = jsonstr+'"billregno":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billVAT') != -1)
		{
			jsonstr = jsonstr+'"billVAT":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('billSimilaracc') != -1)
		{
			jsonstr = jsonstr+'"billSimilaracc":"'+kenanvar[currele].value+'","Billingchildaccount":[';
		}
		if(kenanvar[currele].id.indexOf('Siteprop') != -1)
		{
			if(kenanvar[currele].id.indexOf('site1') == -1)
			{
				jsonstr = jsonstr+']},';
			}
			jsonstr = jsonstr+'{"Siteprop":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteactdat') != -1)
		{
			jsonstr = jsonstr+'"Siteactdat":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitename') != -1)
		{
			jsonstr = jsonstr+'"Sitename":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteadd1') != -1)
		{
			jsonstr = jsonstr+'"Siteadd1":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteadd2') != -1)
		{
			jsonstr = jsonstr+'"Siteadd2":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteadd3') != -1)
		{
			jsonstr = jsonstr+'"Siteadd3":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitecity') != -1)
		{
			jsonstr = jsonstr+'"Sitecity":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitezip') != -1)
		{
			jsonstr = jsonstr+'"Sitezip":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitecntry') != -1)
		{
			jsonstr = jsonstr+'"Sitecntry":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitecontact') != -1)
		{
			jsonstr = jsonstr+'"Sitecontact":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitecontycode') != -1)
		{
			jsonstr = jsonstr+'"Sitecontycode":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitephinenum') != -1)
		{
			jsonstr = jsonstr+'"Sitephinenum":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitemailid') != -1)
		{
			jsonstr = jsonstr+'"Sitemailid":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteid') != -1)
		{
			jsonstr = jsonstr+'"Siteid":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Sitepriceplan') != -1)
		{
			jsonstr = jsonstr+'"Sitepriceplan":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteflatchr1') != -1)
		{
			jsonstr = jsonstr+'"Siteflatchr1":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteflatchr2') != -1)
		{
			jsonstr = jsonstr+'"Siteflatchr2":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('Siteflatchr3') != -1)
		{
			jsonstr = jsonstr+'"Siteflatchr3":"'+kenanvar[currele].value+'","Sitechildaccount":[';
		}
		if(kenanvar[currele].id.indexOf('userprop') != -1)
		{
			if(kenanvar[currele].id.indexOf('user1') == -1)
			{	
				

				jsonstr = jsonstr+',';
			}
			jsonstr = jsonstr+'{"userprop":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('useractdate') != -1)
		{




			jsonstr = jsonstr+'"useractdate":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('username') != -1)
		{
			jsonstr = jsonstr+'"username":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('usercontperson') != -1)
		{
			jsonstr = jsonstr+'"usercontperson":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('usercntycode') != -1)
		{
			jsonstr = jsonstr+'"usercntycode":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('userphonenum') != -1)
		{
			jsonstr = jsonstr+'"userphonenum":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('usermailid') != -1)
		{
			jsonstr = jsonstr+'"usermailid":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('userid') != -1)
		{
			jsonstr = jsonstr+'"userid":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('usertype') != -1)
		{
			jsonstr = jsonstr+'"usertype":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('userpriceplan') != -1)
		{
			jsonstr = jsonstr+'"userpriceplan":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('userfcharge1') != -1)
		{
			jsonstr = jsonstr+'"userfcharge1":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('userfcharge2') != -1)
		{
			jsonstr = jsonstr+'"userfcharge2":"'+kenanvar[currele].value+'",';
		}
		if(kenanvar[currele].id.indexOf('userfcharge3') != -1)
		{
			jsonstr = jsonstr+'"userfcharge3":"'+kenanvar[currele].value+'"}';
		}
	}
	var numpar =checkParanthesis(jsonstr);
	for(var curr =0; curr<numpar; curr++)
	{
		if(curr == 0)
		{
			jsonstr = jsonstr+']';
		}
		else if (curr %2 == 0)
		{
			jsonstr = jsonstr+']';
		}
		else
		{
			jsonstr = jsonstr+'}';
		}
	}
	//alert(jsonstr);
	console.log(jsonstr)
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/createBPFAccounts?retval='+jsonstr);
	oReq.onreadystatechange = function () 
	{
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
		{
			reponsetxt = oReq.responseText;
			console.log(reponsetxt); 
		}
	};
	oReq.send();	
}

function DeletuserAccount(currid)
{
	var	spltarr = currid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var noofbill = document.getElementsByClassName("usrcc");
	var usraccount =0;
	var	spltarr = currid.split("_");
	var spltarr2 = spltarr[spltarr.length-1].split("userdel");
	var currusr = parseInt(spltarr2[1]);
	var spltarr3 = spltarr[1].split("site");
	var	currsiteacc =  parseInt(spltarr3[1]);
	if(currid.indexOf('site') > 0)
	{
		$('#bill'+currbillacc+'_Site'+currsiteacc+'_User'+currusr).remove();
	}
	else
	{
		$('#bill'+currbillacc+'_User'+currusr).remove();
	}
}
function DeletSiteAccount(butid)
{
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var spltarr3 = spltarr[1].split("site");
	var currsiteacc =  parseInt(spltarr3[1]);
	var sitecount = 0;
	$('#bill'+currbillacc+'_Site'+currsiteacc).remove();

}
function DeletbillAccount(butid)
{	
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	$('#billingacc'+currbillacc).remove();

}

function checkParanthesis(str){
  var stack=[];
  for(var i=0; i<str.length; i++){
    if(str[i] == "(" || str[i] == "{" || str[i] == "[")
      stack.push(str[i]);
    else if(str[i] == ")") {
        if(stack.pop() != "(") { return false; }
    }
    else if(str[i] == "}") {
        if(stack.pop() != "{") { return false; }
    }
    else if(str[i] == "]") {
        if(stack.pop() != "[") { return false; }
    } 
  }

  return stack.length;
}

function copybillaccount(butid)
{
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var noofbill = document.getElementsByClassName("billingacc").length;
	var nextbill = noofbill+1;
	//var divtest = document.createElement("div");
	//divtest.innerHTML = document.getElementById("billingacc"+currbillacc).innerHTML;
	var maindiv = document.getElementById("kenancontent");
	var divtest = $('#billingacc'+currbillacc).clone(true).attr('id','billingacc'+nextbill);
	divtest.appendTo("#kenancontent");
	$(divtest).find("[id]").add(divtest).each(function() {
        this.id = this.id.replace('bill'+currbillacc,'bill'+nextbill);
    })
}

function copysiteacc(butid)
{
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var spltarr3 = spltarr[1].split("site");
	currsiteacc =  parseInt(spltarr3[1]);
	var sitecount = 0;
	var noofbill = document.getElementsByClassName("sitecc");
	for(var currdiv = 0;currdiv<noofbill.length;currdiv++)
	{
		if(noofbill[currdiv].id.indexOf('bill'+currbillacc)>=0)
		{
			sitecount =sitecount+1
		}
	}
	var fsiteacc = sitecount+1;
	var maindiv = document.getElementById("bill"+currbillacc+"_modalcontent");
	var divtest = $('#bill'+currbillacc+'_Site'+currsiteacc).clone(true).attr('id','bill'+currbillacc+'_Site'+fsiteacc);
	$( divtest ).insertBefore( $( "#bill"+currbillacc+"_modal_close" ) );
	$(divtest).find("[id]").add(divtest).each(function() {
        this.id = this.id.replace('site'+currsiteacc,'site'+fsiteacc);
    })
}

function copyusraccount(currid)
{
	var	spltarr = currid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var noofbill = document.getElementsByClassName("usrcc");
	var usraccount =0;
	var	spltarr = currid.split("_");
	var spltarr2 = spltarr[spltarr.length-1].split("usercpy");
	var currusr = parseInt(spltarr2[1]);	
	var userdiv;
	var currsiteacc;
	if(currid.indexOf('site') > 0)
	{
		var spltarr3 = spltarr[1].split("site");
		currsiteacc =  parseInt(spltarr3[1]);
		userdiv = 'bill'+currbillacc+'_Site'+currsiteacc+'_User'+currusr
		var maindiv = document.getElementById('bill'+currbillacc+'_Site'+currsiteacc);
		for(var currdiv = 0;currdiv<noofbill.length;currdiv++)
		{
			if(noofbill[currdiv].id.indexOf('bill'+currbillacc+'_Site'+currsiteacc)>=0)
			{
				usraccount =usraccount+1;
			}
		}
		var fusr = usraccount+1;
		var divtest = $('#bill'+currbillacc+'_Site'+currsiteacc+'_User'+currusr).clone(true).attr('id','bill'+currbillacc+'_Site'+currsiteacc+'_User'+fusr);
		divtest.appendTo('#bill'+currbillacc+'_Site'+currsiteacc);
	}
	else
	{
		for(var currdiv = 0;currdiv<noofbill.length;currdiv++)
		{
			if(noofbill[currdiv].id.indexOf('bill'+currbillacc)>=0)
			{
				usraccount =usraccount+1;
			}
		}
		var fusr = usraccount+1;
		userdiv = "bill"+currbillacc+"_modalcontent"
		var divtest = $('#bill'+currbillacc+'_User'+currusr).clone(true).attr('id','bill'+currbillacc+'_User'+fusr);
		$( divtest ).insertBefore( $( "#bill"+currbillacc+"_modal_close" ) );
	}
	$(divtest).find("[id]").add(divtest).each(function() {
        this.id = this.id.replace('useradd'+currusr,'useradd'+fusr);
		this.id = this.id.replace('usercpy'+currusr,'usercpy'+fusr);
		this.id = this.id.replace('user'+currusr,'user'+fusr);
    })

}

function addusraccount(currid)
{
	var	spltarr = currid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var currsiteacc;
	var userdiv;
	var delbut;
	var divtest = document.createElement("div");
	var maindiv = document.getElementById("bill"+currbillacc+"_modalcontent");
	document.getElementById('bill'+currbillacc+'_SiteCreate').style.display = 'none';
	document.getElementById('bill'+currbillacc+'_UserCreate').style.display = 'none';
	document.getElementById("bill"+currbillacc+"_modal_close").style.display = 'inline';
	var nxtbut
	var currusr;
	var idbase;
	if(currid.indexOf('UserCreate') > 0)
	{
		currusr =1
		document.getElementById(currid).disabled  = 'true';
		document.getElementById(currid).style.color = 'grey';
	}
	else
	{
		var	spltarr = currid.split("_");
		var spltarr2 = spltarr[spltarr.length-1].split("useradd");
		currusr = parseInt(spltarr2[1])+1;	
		 divtest.innerHTML = '';
	}
	if(currid.indexOf('site') > 0)
	{
		var spltarr3 = spltarr[1].split("site");
		currsiteacc =  parseInt(spltarr3[1]);
		userdiv = 'bill'+currbillacc+'_Site'+currsiteacc
		nxtbut = 'bill'+currbillacc+'_site'+currsiteacc+'_useradd'+currusr
		cpybut = 'bill'+currbillacc+'_site'+currsiteacc+'_usercpy'+currusr
		delbut = 'bill'+currbillacc+'_site'+currsiteacc+'_userdel'+currusr
		idbase = 'bill'+currbillacc+'_site'+currsiteacc+'_user'+currusr
	}
	else
	{
		userdiv = "bill"+currbillacc+"_modalcontent"
		nxtbut = 'bill'+currbillacc+'_useradd'+currusr
		cpybut = 'bill'+currbillacc+'_usercpy'+currusr
		delbut = 'bill'+currbillacc+'_userdel'+currusr
		idbase = 'bill'+currbillacc+'_user'+currusr
	}
	document.getElementById('bill'+currbillacc+'_SiteCreate').style.display = 'none';
	document.getElementById('bill'+currbillacc+'_UserCreate').style.display = 'none';
	var maindiv = document.getElementById(userdiv);
	
		divtest.innerHTML = '<H4 style = "Background-color:grey ;color:White"> User Account '+currusr+'</H4>'+
		'<table class = "modaltable">'+
		'<tbody>'+
		'<tr>'+
		'<td>Proposition Type<br><Input type = "text" list = "propositiontype" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userprop"></td>'+
		'<td>Active Date<br><input type = "date" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_useractdate"></td>'+
		'<td>User Name<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_username"></td>'+
		'<td>Contact Person<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_usercontperson"></td>'+
		'<td>Contact Country Code<br><input type = "text"  style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_usercntycode"></td>'+
		'<td>Phone Number<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userphonenum"></td>'+
		'<td>Contact e-Mail<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_usermailid"></td>'+
		'<td>User ID<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userid"></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Type of User<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_usertype"></td>'+
		'<td>Price Plan<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userpriceplan"></td>'+
		'<td>Flat Charge1<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userfcharge1"></td>'+
		'<td>Flat Charge2<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userfcharge2"></td>'+
		'<td>Flat Charge3<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id = "'+idbase+'_userfcharge3"></td>'+
		'<td style= "Background-color:white"><Button class = "button1" style = "width:95%" id = "'+nxtbut+'"  onclick = "addusraccount(this.id);">Add User Account</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" style = "width:100%" id = "'+cpybut+'"onclick = "copyusraccount(this.id)">Copy User Account</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" style = "width:100%" id = "'+delbut+'" onclick="DeletuserAccount(this.id)">Delete User Account</Button></td>'+
		'</tr>'+
		'<tbody>'+
		'</table>'
	if(currid.indexOf('site') > 0)
	{	
		divtest.id = 'bill'+currbillacc+'_Site'+currsiteacc+'_User'+currusr
		divtest.className  = 'usrcc'
		maindiv.appendChild(divtest)
	}
	else
	{
		divtest.id ='bill'+currbillacc+'_User'+currusr
		$( divtest ).insertBefore( $( "#bill"+currbillacc+"_modal_close" ) );
		divtest.className  = 'usrcc'
	}
		
}

function addbillingaccount(currid)
{
	var butid = currid;
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];
	var noofbill = document.getElementsByClassName("billingacc").length;
	var nxtbill = noofbill+1;
	var maindiv = document.getElementById("kenancontent");
	var divtest = document.createElement("div");
    divtest.innerHTML = '<H4 style = "Background-color:black ;color:White"> Billing Account '+nxtbill+'</H4>'+
		'<table class = "kenantable">'+
		'<tbody>'+
		'<tr>'+
		'<td>Proposition Type<br><input type = "text" list = "propositiontype" style = "width:100%" id ="bill'+nxtbill+'_billaccproptyp" class = "Kenan_Acc_creation"></td>'+
		'<td>Active Date<br><input type = "date" style = "width:100%" id ="bill'+nxtbill+'_billactdate" class = "Kenan_Acc_creation"></td>'+
		'<td>Account Category<br><input type = "text" list = "kenanacccategory" style = "width:100%" id ="bill'+nxtbill+'_billactcat" class = "Kenan_Acc_creation"></td>'+
		'<td>Billing Name<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billactname" class = "Kenan_Acc_creation"></td>'+
		'<td>Billing Address 1<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billadd1" class = "Kenan_Acc_creation"></td>'+
		'<td>Billing Address 2<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billadd2" class = "Kenan_Acc_creation"></td>'+
		'<td>Billing Address 3<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billadd3" class = "Kenan_Acc_creation"></td>'+
		'<td>Billing City<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billcity" class = "Kenan_Acc_creation"></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Billing Zip Code<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billzipcode" class = "Kenan_Acc_creation"></td>'+
		'<td>Billing Country<br><input type = "text"  list = "kenancountry" style = "width:100%" id ="bill'+nxtbill+'_billcountry" class = "Kenan_Acc_creation"></td>'+
		'<td>Legal Entity<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billlegalentyty" class = "Kenan_Acc_creation"></td>'+
		'<td>Contact Person<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billcontactperson" class = "Kenan_Acc_creation"></td>'+
		'<td>Contact Country Code<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billcountycode" class = "Kenan_Acc_creation"></td>'+
		'<td>Contact Phone Number<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billphonenum" class = "Kenan_Acc_creation"></td>'+
		'<td>Contact e-Mail<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billcontactmail" class = "Kenan_Acc_creation"></td>'+
		'<td>Language<br><input type = "text" list = "kenanlang" style = "width:100%" id ="bill'+nxtbill+'_billlang" class = "Kenan_Acc_creation"></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Bill Cycle<br><input type = "text" style = "width:100%" list = "kenanbillcycle" id ="bill'+nxtbill+'_billcycle" class = "Kenan_Acc_creation"></td>'+
		'<td>Currency<br><input type = "text" list = "kenancurrency" style = "width:100%" id ="bill'+nxtbill+'_billcurrency" class = "Kenan_Acc_creation"></td>'+
		'<td>SAP Account Number<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billsapaccno" class = "Kenan_Acc_creation"></td>'+
		'<td>Opco BAN<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billopcoban" class = "Kenan_Acc_creation"></td>'+
		'<td>Payment Terms<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billpaymentterms" class = "Kenan_Acc_creation"></td>'+
		'<td>Purchase Order<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billpurchasorder" class = "Kenan_Acc_creation"></td>'+
		'<td>Profit Center<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billprofitcenter" class = "Kenan_Acc_creation"></td>'+
		'<td>Country of Service<br><input type = "text" list = "kenancountry" style = "width:100%" id ="bill'+nxtbill+'_billcntryserv" class = "Kenan_Acc_creation"></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Registration Number<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billregno" class = "Kenan_Acc_creation"></td>'+
		'<td>VAT Registration Number<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billVAT" class = "Kenan_Acc_creation"></td>'+
		'<td>No of Similar Accounts<br><input type = "text" style = "width:100%" id ="bill'+nxtbill+'_billSimilaracc" class = "Kenan_Acc_creation"></td>'+
		'</tr>'+
		'<tr>'+
		'<td style ="Background-color:white">&nbsp </td>'+
		'</tr>'+
		'<tr>'+
		'<td style= "Background-color:white"><Button class = "button1" id ="bill'+nxtbill+'_siteuser"  style = "width:100%" onclick = "displaysitepopup(this.id)">Site / User Account Details</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" id = "bill'+nxtbill+'_addbillaccount"style = "width:95%" onclick = "addbillingaccount(this.id);">Add New Billing Account</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" id = "bill'+nxtbill+'_copybill" style = "width:95%" onclick = "copybillaccount(this.id);">Copy Billing Account</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1"  id = "bill'+nxtbill+'_Delete" style = "width:95%"onclick = "DeletbillAccount(this.id);">Delete Billing Account</Button></td>'+
		'</tr>'+
		'<tbody>'+
		'</table>'+
		'<div id="bill'+nxtbill+'_myModal" class="modal">'+
		'<div class="modal-content" id = "bill'+nxtbill+'_modalcontent">'+
		'<span class="close"  id = "bill'+nxtbill+'_modal_close1" onclick = "closemodal(this.id)">&times;</span>'+
		'<Button class = "button1" id = "bill'+nxtbill+'_SiteCreate" onclick = "addsiteacc(this.id)";>Add New Site Account</Button>&nbsp'+
		'<Button class = "button1" id = "bill'+nxtbill+'_UserCreate" onclick = "addusraccount(this.id)">Add New User Account</Button>'+
		'<br>'+
		'<br>'+
		'<center><Button class = "button1" Style = "display:none"  id = "bill'+nxtbill+'_modal_close" onclick = "closemodal(this.id)">Submit</Button></center>'
		
	divtest.id = 'billingacc'+nxtbill
	divtest.className = 'billingacc'
	maindiv.appendChild(divtest)
}

function addsiteacc(currid)
{
	
	var	spltarr = currid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];	
	var currsiteacc;
	var divtest = document.createElement("div");
	var maindiv = document.getElementById("bill"+currbillacc+"_modalcontent");
	document.getElementById('bill'+currbillacc+'_SiteCreate').style.display = 'none';
	document.getElementById('bill'+currbillacc+'_UserCreate').style.display = 'none';
	document.getElementById("bill"+currbillacc+"_modal_close").style.display = 'inline';
	if(currid.indexOf('siteadd') > 0)
	{
		var spltarr3 = spltarr[1].split("site");
		currsiteacc =  parseInt(spltarr3[1])+1;
		divtest.innerHTML = '';
	}
	else
	{
		currsiteacc = 1;
		divtest.innerHTML = '';
	}
	divtest.innerHTML = divtest.innerHTML+
		'<H3 style = "Background-color:black ;color:White"> Site Account '+currsiteacc+'</H3>'+
		'<table class = "modaltable">'+
		'<tbody>'+
		'<tr>'+
		'<td>Proposition Type<br><input type = "text" list = "propositiontype" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteprop"></td>'+
		'<td>Active Date<br><input type = "date" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteactdat"></td>'+
		'<td>Site Name<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitename"></td>'+
		'<td>Site Address 1<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteadd1"></td>'+
		'<td>Site Address 2<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteadd2"></td>'+
		'<td>Site Address 3<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteadd3"></td>'+
		'<td>Site City<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitecity"></td>'+
		'<td>Site Zip Code<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitezip"></td>'+
		'</tr>'+
		'<tr>'+
		
		'<td>Site Country<br><input type = "text" list = "kenancountry" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitecntry"></td>'+
		'<td>Contact Person<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitecontact"></td>'+
		'<td>Contact Country Code<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitecontycode"></td>'+
		'<td>Phone Number<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitephinenum"></td>'+
		'<td>Contact e-Mail<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitemailid"></td>'+
		'<td>Site ID<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteid"></td>'+
		'<td>Price Plan<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Sitepriceplan"></td>'+
		'<td>Flat Charge1<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteflatchr1"></td>'+
		'</tr>'+
		'<tr>'+
		'<td>Flat Charge2<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteflatchr2"></td>'+
		'<td>Flat Charge3<br><input type = "text" style = "width:100%" class = "Kenan_Acc_creation" id ="bill'+currbillacc+'_site'+currsiteacc+'_Siteflatchr3"></td>'+
		'</tr>'+
		'<tr>'+
		'<td style ="Background-color:white">&nbsp </td>'+
		'</tr>'+
		'<tr>'+
		'<td style= "Background-color:white"><Button class = "button1" id ="bill'+currbillacc+'_site'+currsiteacc+'_UserCreate"  style = "width:95%" onclick = "addusraccount(this.id)">Create User Account </Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" id ="bill'+currbillacc+'_site'+currsiteacc+'_siteadd" style = "width:95%"  onclick = "addsiteacc(this.id);">Add Site Account</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" id ="bill'+currbillacc+'_site'+currsiteacc+'_sitecopy" style = "width:95%" onclick = "copysiteacc(this.id);">Copy Site Account</Button></td>'+
		'<td style= "Background-color:white"><Button class = "button1" id ="bill'+currbillacc+'_site'+currsiteacc+'_sitedel" style = "width:95%" onclick = "DeletSiteAccount(this.id);">Delete Site Account</Button></td>'+
		'</tr>'+
		'<tbody>'+
		'</table>'
	divtest.id = 'bill'+currbillacc+'_Site'+currsiteacc
	divtest.className = 'sitecc'
	//maindiv.appendChild(divtest)
	$( divtest ).insertBefore( $( "#bill"+currbillacc+"_modal_close" ) );

}

function displaybillaccdiv(currid)
{
	document.getElementById(currid).style.color = 'grey';
	document.getElementById(currid).disable = 'true';
	document.getElementById("billingacc1").style.display = 'inline';
}

function displaysitepopup(butid)
{
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];
	var modal = document.getElementById('bill'+currbillacc+'_myModal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
}

function closemodal(butid) {
	var	spltarr = butid.split("_");
	var spltarr2 = spltarr[0].split("bill");
	var currbillacc = spltarr2[1];
	var modal = document.getElementById('bill'+currbillacc+'_myModal');
    modal.style.display = "none";
}
function send_BPFData(butid)
{
	var usecase = document.getElementById("Business_S_BPF").value;
	var opco = document.getElementById("OPCOsel").value;
	var opcocode = document.getElementById("OPCOcode").value;	
	if(opco == 'Please Select')
		{
			alertify.alert('Please provide the Mandatory Fields <br/> `OPCO` .!!');
			//highlightFor('OPCOsel','Moccasin',2); 
			return;
		}
	var Bpf_add_table_len = document.getElementById("bpftable").rows.length;
	var Bpf_mov_table_len = document.getElementById("bpftable_mov").rows.length;
	var Bpf_ter_table_len = document.getElementById("bpftable_Ter").rows.length;
	var usecaseclass;
	var propadd;
	var BAN_add;
	var parentaccidad;
	var propmov;
	var serviceidad;
	var priceplanad;
	var usridmov;
	var servter;
	var site_id_ter
	var ppmov;
	var Date_Ter;
	var fcmov;
	var flatchrg2_mov;
	var flatchrg3_mov;
	var Number_Masking_mov;
	var Device_Type_mov;
	var Date_Add;
	var Date_Mov;
	var servmov;
	var flatchrg;
	var flatchrg2;
	var flatchrg3;
	var Number_Masking;
	var Device_Type;
	var usridad;
	var Bpf_add_records;
	var Bpf_Mov_records;
	var Bpf_Ter_records;
	var AL_Fcharge1;
	var AL_Fcharge2;
	var AL_Fcharge3;
	var availability_flag = 'No';
	var BPF_A_M_input = [];
	var jsonstr = '[';
	var usecasearr = ['bpfgen_add','bpfgen_mov','bpfgen_Ter']

	for(var currusecase =0;currusecase<usecasearr.length;currusecase++)
	{
	usecaseclass = usecasearr[currusecase];
	var bpffields = document.getElementsByClassName(usecaseclass);	
	for(var currfield = 0;currfield<bpffields.length;currfield++)
	{
				if(bpffields[currfield].id.indexOf('proposition_type_B_A') == 0)
				{
					if(bpffields[currfield].value.indexOf('&')!=-1)
					{
						propadd = bpffields[currfield].value.replace('&','%26');
					}else if(bpffields[currfield].value.indexOf('+')!=-1){
						propadd = bpffields[currfield].value.replace('+','%2B');
					}
					else
					{
						propadd = bpffields[currfield].value;
					}
				}
				if(bpffields[currfield].id.indexOf('BAN_BA') == 0)
				{
					BAN_add = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Parent_AccID') == 0)
				{
					parentaccidad = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Service_ID') == 0)
				{
					serviceidad = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('User_ID') == 0)
				{
					usridad = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Price_Plan') == 0)
				{
					priceplanad = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Flat_Charge1') == 0)
				{
					flatchrg = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Flat_Charge2') == 0)
				{
					flatchrg2 = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Flat_Charge3') == 0)
				{
					flatchrg3 = bpffields[currfield].value;
				}
				
				//Account Level
				if(bpffields[currfield].id.indexOf('AL_Fcharge1') == 0)
				{
					AL_Fcharge1 = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('AL_Fcharge2') == 0)
				{
					AL_Fcharge2 = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('AL_Fcharge3') == 0)
				{
					AL_Fcharge3 = bpffields[currfield].value;
				}
				
				if(bpffields[currfield].id.indexOf('Number_Masking') == 0)
				{
					Number_Masking = bpffields[currfield].value;
				}
				if(bpffields[currfield].id.indexOf('Device_Type') == 0)
				{
					Device_Type = bpffields[currfield].value;
				}				
				if(bpffields[currfield].id.indexOf('Date_Add') == 0)
				{
					Date_Add = bpffields[currfield].value;
					if(Date_Add != '')
					{
						Date_Add = Date_Add.replace( /\-/g,'/');
					}
				}				
				if(bpffields[currfield].id.indexOf('No_of_Rec_BPF_A') == 0)
				{
					Bpf_add_records = bpffields[currfield].value;
				}				
				
				if(bpffields[currfield].id.indexOf('No_of_Rec_BPF_A') != -1)
				{
				
					//Table.length based Logic			
				  if(Bpf_add_table_len >1 && document.getElementById("proposition_type_B_A1").value != 'Please Select')			//(str.toLowerCase().indexOf('a') ==0)
				    {
						availability_flag = 'Yes';
						var row_ref_id = bpffields[currfield].id.split('No_of_Rec_BPF_A');
						var row_ref_value = row_ref_id[1];
						//Field validations for Add-use case
						if(propadd =='Please Select')
						{	
							var id_ref = 'proposition_type_B_A'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- Proposition Type in use-case: ADD) .!!');
							//highlightFor(id_ref,'Moccasin',2); 
							return;				
						}
						if(BAN_add =='')
						{
							var id_ref = 'BAN_BA'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- BAN in use-case: ADD ) .!!');
							//highlightFor(id_ref,'Moccasin',2); 				
							return;				
						}
						if(parentaccidad =='')
						{
							var id_ref = 'Parent_AccID'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Site Id in use-case: ADD ) .!!');
							//highlightFor(id_ref,'Moccasin',2); 				
							return;				
						}
						if(serviceidad =='')
						{
							var id_ref = 'Service_ID'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Service Id in use-case: ADD) .!!');
							//highlightFor(id_ref,'Moccasin',2); 
							return;				
						}	
						if(usridad =='')
						{
							var id_ref = 'User_ID'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- User Id in use-case: ADD) .!!');
							//highlightFor(id_ref,'Moccasin',2); 
							return;				
						}
						if(priceplanad =='' || priceplanad =='Please Select' )
						{
							var id_ref = 'Price_Plan'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Price Plan in use-case: ADD) .!!');
							//highlightFor(id_ref,'Moccasin',2); 
							return;				
						}							
						if(Date_Add =='')
						{
							var id_ref = 'Date_Add'+row_ref_value;
							alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Date in use-case: ADD) .!!');
							//highlightFor(id_ref,'Moccasin',2); 
							return;				
						}				
					
					if(jsonstr !== '[')
					{
						jsonstr= jsonstr + ',';
					}
					jsonstr = jsonstr+'{"opcocode":"'+opcocode+'","opco":"'+opco+'","usecase":"Add","propadd":"'+propadd+'","parentaccidad":"'+parentaccidad+'","serviceidad":"'+serviceidad+'","usridad":"'+usridad+'","priceplanad":"'+priceplanad+'","flatchrg":"'+flatchrg+'","Date_Add":"'+Date_Add+'","bpf_records":"'+Bpf_add_records+'","BAN_add":"'+BAN_add+'","flatchrg2":"'+flatchrg2+'","flatchrg3":"'+flatchrg3+'","Number_Masking":"'+Number_Masking+'","Device_Type":"'+Device_Type+'","AL_Fcharge1":"'+AL_Fcharge1+'","AL_Fcharge2":"'+AL_Fcharge2+'","AL_Fcharge3":"'+AL_Fcharge3+'"}'
					// Logic to check the duplicate record's for ADD- usecase
						var temp = serviceidad;
							if (temp === "" || temp === null) {
							} else
							{
								BPF_A_M_input.push(temp);  // the array will dynamically grow
							}
							var temp_par_id = parentaccidad + Date_Add + usridad;		
							for(var i = 0; i <= BPF_A_M_input.length; i++) {
								for(var j = i; j <= BPF_A_M_input.length; j++) {
									if(i != j && BPF_A_M_input[i] == BPF_A_M_input[j]) {
											alert('Kindly Remove the Duplicate Records with same Service ID in `ADD` .!!');
											//highlightFor(bpffields[currfield].id,'Moccasin',2); 
											return;
									}
								}
							}
							temp="";
					}
					// Logic to check the duplicate record's for ADD- usecase			
				}

							if(bpffields[currfield].id.indexOf('proposition_Mov') == 0)
							{
								if(bpffields[currfield].value.indexOf('&')!=-1)
								{
									propmov = bpffields[currfield].value.replace('&','%26');
								}else if(bpffields[currfield].value.indexOf('+')!=-1){
									propadd = bpffields[currfield].value.replace('+','%2B');
								}
								else
								{
									propmov = bpffields[currfield].value;
								}
							}
							if(bpffields[currfield].id.indexOf('Service_ID_Mov') == 0)
							{
								servmov = bpffields[currfield].value;
							}
							/*if(bpffields[currfield].id.indexOf('User_ID_Mov') == 0)
							{
								usridmov = bpffields[currfield].value;
							}*/
							if(bpffields[currfield].id.indexOf('Price_Plan_Mov') == 0)
							{
								ppmov = bpffields[currfield].value;
							}
							if(bpffields[currfield].id.indexOf('Flat_Charge_Mov') == 0)
							{
								fcmov = bpffields[currfield].value;
							}
							if(bpffields[currfield].id.indexOf('Flat_Charge2_Mov') == 0)
							{
								flatchrg2_mov = bpffields[currfield].value;
							}
							if(bpffields[currfield].id.indexOf('Flat_Charge3_Mov') == 0)
							{
								flatchrg3_mov = bpffields[currfield].value;
							}
							if(bpffields[currfield].id.indexOf('Number_Masking_Mov') == 0)
							{
								Number_Masking_mov = bpffields[currfield].value;
							}
							if(bpffields[currfield].id.indexOf('Device_Type_Mov') == 0)
							{
								Device_Type_mov = bpffields[currfield].value;
							}							
							if(bpffields[currfield].id.indexOf('Date_Mov') == 0)
							{
								Date_Mov = bpffields[currfield].value;
								if(Date_Mov != '')
								{
									Date_Mov = Date_Mov.replace( /\-/g,'/');
								}
							}
							if(bpffields[currfield].id.indexOf('No_of_Rec_BPF_M') == 0)
							{
								Bpf_Mov_records = bpffields[currfield].value;
							}								
							if(bpffields[currfield].id.indexOf('bpf_senData_Mov_ref') != -1)
							{

								 if(Bpf_mov_table_len >1 && document.getElementById("proposition_Mov1").value != 'Please Select')	   //(str.toLowerCase().indexOf('m') ==0)	
								{	
									availability_flag = 'Yes';
									var row_ref_id = bpffields[currfield].id.split('bpf_senData_Mov_ref');
									var row_ref_value = row_ref_id[1];
									//Field validations for Add-use case
									if(propmov =='Please Select')
									{	
										var id_ref = 'proposition_Mov'+row_ref_value;
										alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- Proposition Type in use-case: Move) .!!');
										//highlightFor(id_ref,'Moccasin',2); 
										return;				
									}
									if(servmov =='')
									{
										var id_ref = 'Service_ID_Mov'+row_ref_value;
										alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Service Id in use-case: Move) .!!');
										//highlightFor(id_ref,'Moccasin',2); 
										return;				
									}	
									/*if(usridmov =='')
									{
										var id_ref = 'User_ID_Mov'+row_ref_value;
										alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- User Id in use-case: Move) .!!');
										highlightFor(id_ref,'Moccasin',2); 
										return;				
									}*/
									if(ppmov =='' || ppmov =='Please Select' )
									{
										var id_ref = 'Price_Plan_Mov'+row_ref_value;
										alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Price Plan in use-case: Move) .!!');
										//highlightFor(id_ref,'Moccasin',2); 
										return;				
									}
									/*if(fcmov =='')
									{
										var id_ref = 'Flat_Charge_Mov'+row_ref_value;
										alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Flat Charge in use-case: Move) .!!');
										highlightFor(id_ref,'Moccasin',2); 
										return;				
									}*/
									if(Date_Mov =='')
									{
										var id_ref = 'Date_Mov'+row_ref_value;
										alertify.alert('Please provide the Mandatory Fields <br/>(Hint:- Date in use-case: Move) .!!');
										//highlightFor(id_ref,'Moccasin',2); 
										return;				
									}			
								
								
								if(jsonstr !== '[')
								{
									jsonstr= jsonstr + ',';
								}
								jsonstr = jsonstr+'{"opcocode":"'+opcocode+'","opco":"'+opco+'","usecase":"Move","propmov":"'+propmov+'","servmov":"'+servmov+'","ppmov":"'+ppmov+'","fcmov":"'+fcmov+'","Date_Mov":"'+Date_Mov+'","bpf_records":"'+Bpf_Mov_records+'","flatchrg2_mov":"'+flatchrg2_mov+'","flatchrg3_mov":"'+flatchrg3_mov+'","Number_Masking_mov":"'+Number_Masking_mov+'","Device_Type_mov":"'+Device_Type_mov+'"}'
								// Logic to check the duplicate record's for Move- usecase (user id back-up: "usridmov":"'+usridmov+'",)
									var temp = servmov+ppmov+fcmov+flatchrg2_mov+flatchrg3_mov; 
										if (temp === "" || temp === null) {
										} else
										{
											BPF_A_M_input.push(temp);  // the array will dynamically grow
										}
										  temp="";
										for(var i = 0; i <= BPF_A_M_input.length; i++) {
											for(var j = i; j <= BPF_A_M_input.length; j++) {
												if(i != j && BPF_A_M_input[i] == BPF_A_M_input[j]) {
													alert('Kindly Remove the Duplicate Records with same Service ID,Price Plan,Flat Charge values in `Move`) .!!');
													//highlightFor(bpffields[currfield].id,'Moccasin',2); 
													return;
												}
											}
										}
								}		
								// Logic to check the duplicate record's for Move- usecase					
							}
											if(bpffields[currfield].id.indexOf('Service_ID_Ter') == 0)
											{
												servter = bpffields[currfield].value; 
											}
											if(bpffields[currfield].id.indexOf('Site_ID_Ter') == 0)
											{
												site_id_ter = bpffields[currfield].value;
											}
											if(bpffields[currfield].id.indexOf('User_ID_Ter') == 0)
											{
												userter = bpffields[currfield].value;
											}
											if(bpffields[currfield].id.indexOf('Termination_typ') == 0)
											{
												Termination_typ = bpffields[currfield].value;
											}
											if(bpffields[currfield].id.indexOf('Date_Ter') == 0)
											{
												Date_Ter = bpffields[currfield].value;
												if(Date_Ter != '')
												{
													Date_Ter = Date_Ter.replace( /\-/g,'/');
												}
											}											
											if(bpffields[currfield].id.indexOf('No_of_Rec_BPF_T') == 0)
											{
												Bpf_Ter_records = bpffields[currfield].value;
											}																							
											if(bpffields[currfield].id.indexOf('bpf_senData_Ter_ref') == 0)
											{
												 if(Bpf_ter_table_len >1 && document.getElementById("Termination_typ1").value != 'Please Select')  //(str.toLowerCase().indexOf('t') ==0)	
												{	
													availability_flag = 'Yes';
													var row_ref_id = bpffields[currfield].id.split('bpf_senData_Ter_ref');
													var row_ref_value = row_ref_id[1];
													//Field validations for Add-use case
													if(Termination_typ =='Please Select')
													{	
														var id_ref = 'Termination_typ'+row_ref_value;
														alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- Termination Type in use-case: Terminate) .!!');
														//highlightFor(id_ref,'Moccasin',2); 
														return;				
													}
													if(Termination_typ =='USER')
													{	
														if(userter =='' && site_id_ter == '')
														{
															var id_ref = 'User_ID_Ter'+row_ref_value;
															alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- USER Id/Site Id in use-case: Terminate) .!!');
															//highlightFor(id_ref,'Moccasin',2); 
															return;
														}	
														if(Date_Ter =='')
														{
															var id_ref = 'Date_Ter'+row_ref_value;
															alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- Inactive Date in use-case: Terminate) .!!');
															//highlightFor(id_ref,'Moccasin',2); 
															return;
														}														
													}													
													if(Termination_typ =='SERVICE')
													{	
														if(servter =='')
														{
															var id_ref = 'Service_ID_Ter'+row_ref_value;
															alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- Service Id in use-case: Terminate) .!!');
															//highlightFor(id_ref,'Moccasin',2); 
															return;
														}	
														if(Date_Ter =='')
														{
															var id_ref = 'Date_Ter'+row_ref_value;
															alertify.alert('Please provide the Mandatory Fields <br/> (Hint:- Inactive Date in use-case: Terminate) .!!');
															//highlightFor(id_ref,'Moccasin',2); 
															return;
														}			
													}													
												
												
													if(jsonstr !== '[')
													{
														jsonstr= jsonstr + ',';
													}
													jsonstr = jsonstr+'{"opcocode":"'+opcocode+'","opco":"'+opco+'","usecase":"Terminate","Termination_typ":"'+Termination_typ+'","servter":"'+servter+'","userter":"'+userter+'","Date_Ter":"'+Date_Ter+'","bpf_records":"'+Bpf_Ter_records+'","site_id_ter":"'+site_id_ter+'"}'
													// Logic to check the duplicate record's for Terminate - usecase
														if(Termination_typ == 'USER')
														{
															var temp1 = site_id_ter+userter+Date_Ter;					
															if (temp1 === "" || temp1 === null) {
																} else
																{
																	BPF_A_M_input.push(temp1);  // the array will dynamically grow
																}
														}
														if(Termination_typ == 'SERVICE')
														{
															var temp2 = servter+Date_Ter;	 			
															if (temp2 === "" || temp2 === null) {
																} else
																{
																	BPF_A_M_input.push(temp2);  // the array will dynamically grow
																}
														}
															  temp1="";
															  temp2="";
															for(var i = 0; i <= BPF_A_M_input.length; i++) {
																for(var j = i; j <= BPF_A_M_input.length; j++) {
																	if(i != j && BPF_A_M_input[i] == BPF_A_M_input[j]) {
																		alertify.alert('Kindly Remove the Duplicate Records with same '+Termination_typ+'-Id, Date values in '+usecaseclass+ ') .!!');
																		//highlightFor(bpffields[currfield].id,'Moccasin',2); 
																		return;
																	}
																}
															}
														}	
													// Logic to check the duplicate record's for Terminate - usecase				
											}
	}
	}
	jsonstr = jsonstr+']'
	console.log(jsonstr);
	//alertify.alert(jsonstr);
	if (availability_flag=='No')
	{
		alertify.alert('There is no Data to generate BPF kindly check the User-Inputs  .!!');
		return;
	}
	document.getElementById('provload').style.display = "inline"
	document.getElementById('provmaindiv').style.display = "none"
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/CreateBPF?retval='+jsonstr);
	oReq.onreadystatechange = function () 
	{
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
		{
			document.getElementById('Bpffile_Name').value = oReq.responseText;
			reponsetxt = oReq.responseText;
			console.log(reponsetxt);
			BPFFiledwd();
		}
	};
	oReq.send();
	//setTimeout(function(){ BPFFiledwd();alertify.success("Successfully Generated BPF File");},45000);
}

//Function to trigger something on user-selection through prompt-box
function promalert(ID){

// prompt dialog
	alertify.prompt("Please specify the use-case`s requested for current BPF generation .!! <br /><br />   A   ->for Add <br />M   ->for Move <br />           T   ->for Terminate <br />      AMT   ->for all Three ..etc <br /> <br /><br /> (Hint: Based on which Data-validation will trigger)" , function (e, str) {
		// str is the input text
		if (e) {
			// user clicked "ok"
				if(str== '')
				{
				  alertify.alert('Please provide a valid Input .!!')
				  return;
				}
				else if(!/^[a-zA-Z]*$/g.test(str)) 
				{
				  alertify.alert('Please provide a valid Input .!!')
				  return;
				}
				else if(str.toLowerCase().indexOf('a') ==0 || str.toLowerCase().indexOf('m') == 0 || str.toLowerCase().indexOf('t') == 0 ) 
				{
				   alertify.success("Validated Successfully");
				   //send_BPFData(ID,str);
				}			
		} else {
			// user clicked "cancel"
		}
	}, "");
}

function BPFFiledwd()
{
	filename = document.getElementById('Bpffile_Name').value;
	document.getElementById('dwdlink_B').href = '/getdwbpf?retval='+filename
	document.getElementById('dwdlink_B').click();
	document.getElementById('provload').style.display = "none"
	document.getElementById('provmaindiv').style.display = "inline"
	
}

function clearall() 
{location.reload();}
/*function clearall_cdr() 
{	

	var cdrtable;
	var currrow_clear
	cdrtable = document.getElementById('cdrtable');
	Curr_table_len =  cdrtable.rows.length;
	for(currrow_clear = Curr_table_len; currrow_clear>=2;currrow_clear--)
	{
		deleterow('delbut'+(currrow_clear-1))		
	} 	

}*/

function clearall_cdr() 		
{	
		var userselection = confirm('Data you have entered will be lost. Please confirm you want to Clear All');		
		 		
		if (userselection == true ){		
				
			var cdrtable;		
			var currrow_clear		
			cdrtable = document.getElementById('cdrtable');		
			Curr_table_len =  cdrtable.rows.length;		
			for(currrow_clear = Curr_table_len; currrow_clear>=2;currrow_clear--)		
			{		
				deleterow('delbut'+(currrow_clear-1))				
			} 		
				
		}else		
		{		
		   // Do nothing		
		}		
				
}

function MAC_BPF_clearall(view_id) 
{
	//location.reload(); orrr
	//Pick the Generate Button type for the current view
	//based on the button pick the view id in case of MAC OPCO, in case of BPF use-case
	//call the table clearing logic for the current view -- done
	var userselection = confirm('Data you have entered will be lost. Please confirm you want to Clear All');		
		 		
if (userselection == true ){		
	var Generate_btn_type_flag;
	var Mac_opco;
	var Bpf_usecase;
	var Curr_table_len;
	var mactable;
	var bpftable;
	
	/*if(view_id.indexOf('mac')!=-1)
	{
		Generate_btn_type_flag = true;
	}else{
	
		Generate_btn_type_flag = false;
	}*/
	
	if(view_id.indexOf('mac')!=-1)
	{
		Mac_opco= document.getElementById('OPCOsel_Mac').value
		
		if(Mac_opco=='United Kingdom')
		{
		  mactable = document.getElementById('mactable');
		  Curr_table_len =  mactable.rows.length;
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				Mac_deleterow('delbut_M'+(currow-1))		
			} 		  
		}else if(Mac_opco=='Germany')
		{
		  mactable = document.getElementById('mactable_DE');
		  Curr_table_len =  mactable.rows.length;		
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				DE_Mac_deleterow('DE_delbut_M'+(currow-1))				
			}		  		  
		}else if(Mac_opco=='Netherland')
		{
		  mactable = document.getElementById('mactable_NL');
		  Curr_table_len =  mactable.rows.length;		
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				Mac_deleterow_NL('delbut_NL_M'+(currow-1))				
			}		
		}else if(Mac_opco=='Ireland')
		{
		  mactable = document.getElementById('mactable_IE');
		  Curr_table_len =  mactable.rows.length;		
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				Mac_deleterow_IE('delbut_IE_M'+(currow-1))				
			}			
		}		
	}
	if(view_id.indexOf('bpf')!=-1)
	{	
		Bpf_usecase = document.getElementById('Business_S_BPF').value
		if(Bpf_usecase== 'BPF_ADD')
		{ 
		  bpftable = document.getElementById('bpftable');
		  Curr_table_len =  bpftable.rows.length;		
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				Bpf_deleterow_add('delbut_add'+(currow-1))				
			}			  	
		}else if(Bpf_usecase== 'BPF_MOV')
		{
		  bpftable = document.getElementById('bpftable_mov');
		  Curr_table_len =  bpftable.rows.length;		
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				Bpf_deleterow_Mov('delbut_mov'+(currow-1))				
			}	
		}else if(Bpf_usecase== 'BPF_TER')
		{
		  bpftable = document.getElementById('bpftable_Ter');
		  Curr_table_len =  bpftable.rows.length;		
			for(currow = Curr_table_len; currow>=2;currow--)
			{
				Bpf_deleterow_Ter('delbut_ter'+(currow-1))				
			}
		}
	}
}	
}

function validatenum(bnumid) 
{ 
	var bunmsplit = bnumid.split('number');
	var Num_ref = bunmsplit[0];
	var rowval = bunmsplit[1];
	var anumid = 'anumber'+rowval;
	var bnumid1 = 'bnumber'+rowval;
	var anum = document.getElementById(anumid).value
	var bnum = document.getElementById(bnumid1).value
	negativevalidation(bnumid)
	if(anum ===bnum && anum != '') 
	{
		alertify.alert('Calling number and the called number can not be the same');
		document.getElementById(bnumid).value = '';
	}
	// change for 'e' validation on 27th jan
		var a_Num =anum.toString();
		var b_Num =bnum.toString();
		
		if(a_Num == "" && Num_ref == 'a')
		{
			alertify.alert('Please enter a valid calling number .!!');
			document.getElementById(anumid).value = '';
			return;
		}	
		if(b_Num == "" && Num_ref == 'b')
		{
			alertify.alert('Please enter a valid called number .!!');
			document.getElementById(bnumid1).value = '';
			return;
		}	
	// change for 'e' validation on 27th jan	
}

function negativevalidation(valu) // AG-
{


	var This_field_ref =document.getElementById(valu).value
	var This_field_val_Int = This_field_ref
	var This_field_val_Str = This_field_ref.toString();
	
if(( valu.indexOf('noofcallrec')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('noofcallrec');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'proposition'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
	
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}	

		return;
	}
	if( (valu.indexOf('duration')==0) || ( valu.indexOf('upld')==0) || ( valu.indexOf('dwd')==0) )
	{
			if(This_field_val_Str == "")
			{
				document.getElementById(valu).value = '';
			}
			if(This_field_val_Int < 0)
			{
				document.getElementById(valu).value = '';
			}
			if(This_field_val_Str.indexOf('.')!=-1)
			{
				document.getElementById(valu).value ='';
				return;
			}					
	}
		if( valu.indexOf('duration')==0)
		{
			var row_ref_id = valu.split('duration');
			var row_ref_val = row_ref_id[1];
			var upldid ="upld"+row_ref_val;
			var dwdid="dwd"+row_ref_val;
			var usage_category = "servicetype"+row_ref_val;
			if(This_field_val_Int > 0)
			{
				document.getElementById(upldid).disabled = true;
				document.getElementById(dwdid).disabled = true;
				document.getElementById(upldid).value = 0;
				document.getElementById(dwdid).value = 0;
			}
			if((This_field_val_Str == '' || This_field_val_Int == 0) && (document.getElementById(usage_category).value== 'DATA' || document.getElementById(usage_category).value== 'Please Select'))
			{
				document.getElementById(valu).disabled = false;
				document.getElementById(upldid).disabled = false;
				document.getElementById(dwdid).disabled = false;
				document.getElementById(valu).value = 0;
				document.getElementById(upldid).value = 0;
				document.getElementById(dwdid).value = 0;	
			}
		}

		if( valu.indexOf('upld')==0)
		{		
			var row_ref_id = valu.split('upld');
			var row_ref_val = row_ref_id[1];
			var upldid ="upld"+row_ref_val;
			var dwdid="dwd"+row_ref_val;
			var duration_id = "duration"+ row_ref_val;
			var usage_category = "servicetype"+row_ref_val;					
			if(This_field_val_Int > 0)
			{
				document.getElementById(duration_id).disabled = true;
				document.getElementById(dwdid).disabled = false;
				document.getElementById(duration_id).value = 0;	
			}
			if((This_field_val_Str == '' || This_field_val_Int == 0) && (document.getElementById(usage_category).value== 'DATA' || document.getElementById(usage_category).value== 'Please Select'))
			{
				document.getElementById(duration_id).disabled = false;
				document.getElementById(upldid).disabled = false;
				document.getElementById(dwdid).disabled = false;
				if(document.getElementById(dwdid).value >0)
				{
					document.getElementById(duration_id).disabled = true;
					document.getElementById(duration_id).value = 0;
					document.getElementById(upldid).value = 0;
				}else{
					document.getElementById(duration_id).value = 0;
					document.getElementById(upldid).value = 0;
					document.getElementById(dwdid).value = 0;						
				}

			}
			if(This_field_val_Str == '' && document.getElementById(dwdid).value>=1)
			{
				document.getElementById(duration_id).disabled = true;							
				document.getElementById(duration_id).value = 0;							
			}			
		}		
		if( valu.indexOf('dwd')==0)
		{
		
			var row_ref_id = valu.split('dwd');
			var row_ref_val = row_ref_id[1];
			var upldid ="upld"+row_ref_val;
			var dwdid="dwd"+row_ref_val;
			var duration_id = "duration"+ row_ref_val;
			var usage_category = "servicetype"+row_ref_val;				
			if(This_field_val_Int > 0)
			{
				document.getElementById(duration_id).disabled = true;
				document.getElementById(upldid).disabled = false;
				document.getElementById(duration_id).value = 0;					
			}
			if((This_field_val_Str == '' || This_field_val_Int == 0) && (document.getElementById(usage_category).value== 'DATA' || document.getElementById(usage_category).value== 'Please Select'))
			{
				document.getElementById(duration_id).disabled = false;
				document.getElementById(upldid).disabled = false;
				document.getElementById(dwdid).disabled = false;
				if(document.getElementById(upldid).value >0)
				{	
					document.getElementById(duration_id).disabled = true;
					document.getElementById(duration_id).value = 0;
					document.getElementById(dwdid).value = 0;	
				}else{
					document.getElementById(duration_id).value = 0;
					document.getElementById(upldid).value = 0;
					document.getElementById(dwdid).value = 0;					
				}
			
			}
			if(This_field_val_Str == '' && document.getElementById(upldid).value>=1)
			{
				document.getElementById(duration_id).disabled = true;	
				document.getElementById(duration_id).value = 0;					
			}			
		}	
		if( valu.indexOf('Amt')==0)
		{

			if(This_field_val_Str == "")
			{
				document.getElementById(valu).value = '';
			}
			if(This_field_val_Int < 0)
			{
				document.getElementById(valu).value = '';
			}
			var row_ref_id = valu.split('Amt');
			var row_ref_val = row_ref_id[1];
			
			if(document.getElementById('OPCOsel').value=='United Kingdom')
			{
			   var RE = /^\d+(?:\.\d{1,3})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of three decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}						
			}else if(document.getElementById('OPCOsel').value=='Germany'){
			   var RE = /^\d+(?:\.\d{1,6})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of six decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			
			}else if(document.getElementById('OPCOsel').value=='Netherland'){
			   var RE = /^\d+(?:\.\d{1,3})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of three decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Ireland'){
			   var RE = /^\d+(?:\.\d{1,4})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of four decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Italy'){
			   var RE = /^\d+(?:\.\d{1,4})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of four decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Spain'){
			   var RE = /^\d+(?:\.\d{1,4})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of four decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Portugal'){
			   var RE = /^\d+(?:\.\d{1,2})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of two decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Czech Republic'){
			   var RE = /^\d+(?:\.\d{1,2})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of two decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Hungary'){
			   var RE = /^\d+(?:\.\d{1,2})?$/ ;
				if( RE.test(document.getElementById(valu).value) ){
					//valid amount came in
				}else{
						alertify.alert('Please enter  a valid `Amount` field </br> (with a Maximum of two decimal point)');
						document.getElementById(valu).value= '';
						return;	
				}				
			}else if(document.getElementById('OPCOsel').value=='Please Select'){	
				alertify.alert('Please select the OPCO');
				document.getElementById(valu).value= '';
				return;	
			}
			
		}
		if( valu.indexOf('noofcallrec')==0)
		{
			if(This_field_val_Str == "")
			{
				document.getElementById(valu).value = '';
				//alertify.alert('Please enter a valid No of Events .!!');
				return;
			}
			if(This_field_val_Int < 1)
			{
				document.getElementById(valu).value = '';
				//alertify.alert('Please enter a valid No of Events .!!');
				return;
			}
			if(This_field_val_Str.indexOf('.')!=-1)
			{
				document.getElementById(valu).value ='';
				//alertify.alert('Please enter a valid No of Events .!!');
				return;
			}	
	
		}
}

function EnableFrequency(cdrid)
{
	negativevalidation(cdrid);
	var cdrsplt = cdrid.split('noofcallrec');
	var rowid = cdrsplt[1];
	var freqid = 'frequency'+rowid;
	if(parseInt(document.getElementById(cdrid).value) > 1)
	{
		document.getElementById(freqid).disabled = false;
	}
	else
	{
		document.getElementById(freqid).disabled = true;
		document.getElementById(freqid).value = "Please Select"
	}
}

function cdrfieldlevelvalidation(idval) // AG-
{
	var rownumarr = idval.split('servicetype');
	var rownum = rownumarr[1];
	var bnumid = "bnumber"+rownum;
	var Durid = "duration"+rownum;
	var uploadid = "upld"+rownum;
	var dwdid = "dwd"+rownum;
	var durid1 = "duration"+rownum;
	var servocetypfield = document.getElementById(idval);
	var serviceval = servocetypfield.value;
	if(serviceval === 'DATA')
	{
		document.getElementById(bnumid).type = 'text';
		document.getElementById(bnumid).value = 'NONUMBER';
		document.getElementById(bnumid).disabled = false;
		document.getElementById(durid1).value = 0;		
		document.getElementById(dwdid).value = 0;
		document.getElementById(uploadid).value = 0;
		document.getElementById(dwdid).disabled = false;
		document.getElementById(uploadid).disabled = false;
		document.getElementById(durid1).disabled = false;
	}
	else
	{
		document.getElementById(bnumid).type = 'text';
		document.getElementById(bnumid).value = '';
		document.getElementById(bnumid).disabled = false;
		document.getElementById(durid1).value = '';		
		document.getElementById(dwdid).value = 0;
		document.getElementById(uploadid).value = 0;
		document.getElementById(dwdid).disabled = true;
		document.getElementById(uploadid).disabled = true;
		document.getElementById(durid1).disabled = false;

		if(serviceval === 'SMS')
		{	
			document.getElementById(Durid).value = '1';
			document.getElementById(Durid).disabled = true;
		}
		else if(serviceval === 'MMS') // changed on 29th jan
		{
			document.getElementById(Durid).value = '1';
			document.getElementById(Durid).disabled = true;		   
		}
		else
		{			
			document.getElementById(Durid).disabled = false;
		}
		
	}
	if(serviceval === 'Please Select')
	{
		document.getElementById(Durid).disabled = false;
		document.getElementById(dwdid).disabled = false;
		document.getElementById(uploadid).disabled = false;
		document.getElementById(bnumid).disabled = false;
		document.getElementById(bnumid).value = '';		
		document.getElementById(durid1).value = '';			
		document.getElementById(dwdid).value = 0;
		document.getElementById(uploadid).value = 0;		
	}

}

function addnewrow() // AG-  cdrrr
{
	
	var cdrtable = document.getElementById('cdrtable');
	var newrow = cdrtable.rows.length;
	var row = cdrtable.insertRow(newrow);
	row.id = 'row'+newrow;
	row.className = 'rows';
	orow = newrow-1;
	var fopt = '';
	console.log(orow);
	prevprop = document.getElementById("proposition"+orow);

	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"
	
	}	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var cell16 = row.insertCell(15);
	var cell17 = row.insertCell(16);
	var cell18 = row.insertCell(17);
	cell1.innerHTML = "<Select type = 'text' class = 'cdrgen' id = 'proposition"+newrow+"'  onchange = getservicetype(this.id) style='width:100%'>"+fopt
	cell1.style.width = '7%';
	cell2.innerHTML = "<Select type = 'text' style='width:100%' class = 'cdrgen' id = 'servicetype"+newrow+"'  onchange=\"getUseageType(this.id)\"><option>Please Select</option>"

	cell2.style.width = '7.5%';
	cell3.innerHTML = "<Select type = 'text' class = 'cdrgen' id = 'usagetype"+newrow+"' style='width:100%' onchange = \"getusagecode(this.id)\"><option>Please Select</option>"

	//$('#usagetype'+newrow).selectize({placeholder:'Please Select'});
	cell3.style.width = '7%';
	cell4.innerHTML = "<input type = 'text' class = 'cdrgen12' id = 'nusgcode"+newrow+"' style='width:100%' disabled   onchange='trigger_annotation(this.id)' >"
	cell4.style.width = '5%'
	cell5.innerHTML = "<input type = 'text'  class = 'cdrgen' id = 'anumber"+newrow+"' style='width:100%'  onchange='trigger_annotation(this.id)' >"
	cell5.style.width = '7.5%';
	cell6.innerHTML = "<input type = 'text'   class = 'cdrgen' id = 'bnumber"+newrow+"' style='width:100%' onchange='trigger_annotation(this.id)' >"
	cell6.style.width = '7%';
	cell7.innerHTML = "<input disabled type = 'text' class = 'cdrgen' id ='timestampwe"+newrow+"' style=\"width:80%\" onchange = 'Opco_Data_Date_flag_checker(this.id, this.value)' ><img class = 'imgcdr' id = 'timestampwe"+newrow+"' src='/ui/images2/cal.gif' onclick=\"javascript:NewCssCal(this.id,'yyyyMMdd','arrow','true','24','true')\" style=\"cursor:pointer\">"
	cell7.style.width = '7.5%';
	cell8.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'duration"+newrow+"' style='width:100%'>"
	cell8.style.width = '7%';
	cell9.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'upld"+newrow+"' style='width:100%'  value = 0>"
	cell9.style.width = '4%';
	cell10.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'dwd"+newrow+"' style='width:100%'  value = 0>"
	cell10.style.width = '4%';
	cell11.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'Amt"+newrow+"' style='width:100%'  value = 0>"
	cell11.style.width = '4%';
	cell12.innerHTML = "<input type = 'text'  class = 'cdrgen' id = 'Annotation"+newrow+"' style='width:80%'><img src = 'ui/more.png' class = 'morepng'  style = 'border:none' id= 'morepng"+newrow+"' onclick = 'displayannot(this.id)'><div id='myModal"+newrow+"' class='modal'><div class='modal-content' id = 'modalcontent"+newrow+"'><span class='close' onclick = 'closeannot(this.id)' id = 'closeannot"+newrow+"'>&times;</span><table  class = 'annotable'><tr><td>Source Country</td><td><Select type = 'text' id = 'sourcecountry"+newrow+"' class = 'annotreq' onchange = 'getcountryntwrk(this.id);'></td><td>Source Network</td><td><Select type = 'text' id = 'sourcenetwork"+newrow+"' class = 'annotreq' onchange = 'getmccmnc(this.id);' > </td></tr><tr><td>Target Country</td><td><Select type = 'text' id = 'targetcountry"+newrow+"' class = 'annotreq' onchange = 'getcountryntwrk(this.id);'></td><td>Target Network </td><td><Select type = 'text' id = 'targetnetwork"+newrow+"' class = 'annotreq' onchange = 'getmccmnc(this.id);' ></td></tr><tr><td>TADIG Code</td><td><input type = 'text' id = 'tadigcode"+newrow+"' disabled class = 'annotreq' ></td><td>MCC MNC</td><td><input type = 'text' id = 'nccnmc"+newrow+"' disabled class = 'annotreq'></td></tr><tr><td>B Number Flag</td><td><input  type = 'text' id = 'bumbflag"+newrow+"'  class = 'annotreq' disabled></td></tr> <tr><td style = 'display:none;width:0.1%' >Src Ntk Conxt<input type = 'text' id = 'sntk_Conxt"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none;width:0.1%' >Src Ntk Value<input type = 'text' id = 'sntk_Value"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none'>Src state Value<input type = 'text' id = 'srcstate_Value"+newrow+"'  class = 'annotreq' disabled style = 'width:80%' ></td></tr><tr><td style = 'display:none;width:0.1%' >Tgt Ntk Conxt<input type = 'text' id = 'tgt_Conxt"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none;width:0.1%' >Tgt Ntk Value<input type = 'text' id = 'tgt_Value"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none'>Tgt state Value<input type = 'text' id = 'tgtstate_Value"+newrow+"'  class = 'annotreq' disabled style = 'width:80%' ></td></tr></table><span></span></br><center><button class = 'annotreq' id = 'Submitannot"+newrow+"' onclick = 'submitannot(this.id)'> Submit </button></center></br></div></div>"
	cell12.style.width = '7%';	
	cell13.innerHTML = "<input type = 'text'  class = 'cdrgen'id = 'noofcallrec"+newrow+"' onchange = 'EnableFrequency(this.id)' onblur = 'negativevalidation(this.id)' style='width:100%'>"
	cell13.style.width = '7%';
	cell14.innerHTML = "<Select type = 'text' class = 'cdrgen'id = 'frequency"+newrow+"' disabled style='width:100%'><option>Please Select</option><option>Every Second</option><option>Once a Minute</option><option>Hourly</option><option>Daily</option><option>Weekly</option>"
	cell14.style.width = '7%';
	cell15.innerHTML ="<button class ='copy_cdr' id = 'cpy"+newrow+"' style = 'border:none;background:white;%' onclick = 'copyrow(this.id)'><img src = 'ui/copy.png' class = 'copy'  title = 'copy previous Row' id = 'cpy"+newrow+"' style = 'border:none'></button>"
	cell15.style.border = 'none';
	cell15.style.width = '2%';
	cell16.innerHTML ="<button style = 'border:none;background:white;' onclick = 'addnewrow()' ><img src = 'ui/add.png' class = 'addpng' id = 'ad"+newrow+"' style = 'border:none'></button>"
	cell16.style.border = 'none';
	cell16.style.width = '2%';
	cell17.innerHTML ="<button style = 'border:none;background:white;' id = 'delbut"+newrow+"' class = 'delbut' onclick = 'deleterow(this.id)'><img src = 'ui/delete.png' class = 'delete' id = 'del"+newrow+"' style = 'border:none'></button>"
	cell17.style.border = 'none';
	cell17.style.width = '2%';
	cell18.innerHTML = "<td><input type = 'text' class = 'cdrgen' id = 'inusgcod"+newrow+"' disabled style = 'display:none;width:0.1%'><input type = 'text' class = 'cdrgen' id = 'roaming"+newrow+"' disabled style = 'display:none'><input type = 'text' class = 'cdrgen' id = 'momt"+newrow+"' disabled style = 'display:none'><input type = 'text' class = 'cdrgen' id = 'usgcode"+newrow+"' disabled style = 'display:none;width:0.1%'></td>"
	cell18.style.border = 'none';
	cell18.style.width = '0.1%';
	get_country(newrow.toString());
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

function deleterow(delid)
{
	var rownumarr = delid.split('delbut');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var cdrtable = document.getElementById('cdrtable');
	var newrow = cdrtable.rows.length;
	if(newrow === 2 )//|| delid.indexOf('1')!=-1)
	{
			//alertify.alert('Please Enter minimum one row of data')	ssss	
			document.getElementById("proposition"+'1').selectedIndex='Please Select'
			document.getElementById("servicetype"+'1').selectedIndex='Please Select'
			
			$('#usagetype1').selectize()[0].selectize.destroy();
			document.getElementById("usagetype"+'1').options.length = 0;
			newOption = document.createElement('option');
			newOption.innerText = 'Please Select';
			newOption.value = 'Please Select';
			document.getElementById("usagetype"+'1').appendChild(newOption);
			$('#usagetype1').selectize();
			document.getElementById("anumber"+'1').value=''
			document.getElementById("bnumber"+'1').value=''
			document.getElementById("nusgcode"+'1').value=''
			document.getElementById("upld"+'1').value='0'
			document.getElementById("dwd"+'1').value='0'
			document.getElementById("Amt"+'1').value='0'
			document.getElementById("Annotation"+'1').value=''
			document.getElementById("roaming"+'1').value=''
			//document.getElementById("sourcecountry"+'1').value=''
			//document.getElementById("sourcenetwork"+'1').value=''
			//document.getElementById("targetcountry"+'1').value=''
			//document.getElementById("targetnetwork"+'1').value=''
			
			$('#sourcecountry1').selectize()[0].selectize.destroy();
			document.getElementById("sourcecountry"+'1').options.length = 0;
			$('#sourcenetwork'+rownum).selectize({placeholder:'Please Select',create:true});
			//newOption = document.createElement('option');
			//newOption.innerText = 'Please Select';
			//newOption.value = 'Please Select';
			//document.getElementById("sourcecountry"+'1').appendChild(newOption);
			//$('#sourcecountry1').selectize();
			
			$('#sourcenetwork1').selectize()[0].selectize.destroy();
			document.getElementById("sourcenetwork"+'1').options.length = 0;
			$('#sourcenetwork1').selectize({placeholder:'Please Select',create:true});
			
			$('#targetcountry1').selectize()[0].selectize.destroy();
			document.getElementById("targetcountry"+'1').options.length = 0;
			$('#targetcountry1').selectize({placeholder:'Please Select',create:true});
			
			$('#targetnetwork1').selectize()[0].selectize.destroy();
			document.getElementById("targetnetwork"+'1').options.length = 0;
			$('#targetnetwork1').selectize({placeholder:'Please Select',create:true});
						
			document.getElementById("tadigcode"+'1').value=''
			document.getElementById("nccnmc"+'1').value=''
			document.getElementById("bumbflag"+'1').value=''
			document.getElementById("momt"+'1').value=''
			document.getElementById("duration"+'1').value  = ''
			document.getElementById("noofcallrec"+'1').value = ''
			document.getElementById("frequency"+'1').selectedIndex='Please Select'
			document.getElementById("usgcode"+'1').value=''
			document.getElementById("inusgcod"+'1').value=''
			EnableFrequency('noofcallrec'+'1')
			document.getElementById("timestampwe"+'1').value= ''
			//check the Data_date_flag for the new row
			Opco_Data_Date_flag_checker("timestampwe"+'1','')	
					
			//Annotation dependencies
			document.getElementById("sntk_Conxt"+'1').value=''
			document.getElementById("sntk_Value"+'1').value=''
			document.getElementById("tgt_Conxt"+'1').value=''
			document.getElementById("tgt_Value"+'1').value=''
			get_country('1');
			var modal = document.getElementById('myModal'+'1');		
			modal.style.display = "none";
	}
	else
	{
		cdrtable.deleteRow(rownum);
		var rows = document.getElementsByClassName('delbut');
		var rval; 
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut'+rval;
			
		}
		var rows = document.getElementsByClassName('addpng');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			rval =  currow+1;
			rows[currow].id = 'ad'+rval;
			
		}
		var rows = document.getElementsByClassName('copy_cdr');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy'+rval;
			
		}
		var rows = document.getElementsByClassName('copy');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy'+rval;
			
		}
		var rows = document.getElementsByClassName('delete');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'del'+rval;
			
		}
		var inputval = document.getElementsByClassName('cdrgen');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('usgcode') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'usgcode'+iprowid;
				iprowid = iprowid+1
				
			}		
			if(inputval[currinput].id.indexOf('servicetype') != -1)
			{
				inputval[currinput].id = 'servicetype'+iprowid;
			}
			if(inputval[currinput].id.indexOf('inusgcod') != -1)
			{
				inputval[currinput].id = 'inusgcod'+iprowid;
			}
			if(inputval[currinput].id.indexOf('servicetype') != -1)
			{
				inputval[currinput].id = 'servicetype'+iprowid;
			}
			if(inputval[currinput].id.indexOf('proposition') != -1)
			{
				inputval[currinput].id = 'proposition'+iprowid;
			}
			if(inputval[currinput].id.indexOf('usagetype') != -1)
			{
				inputval[currinput].id = 'usagetype'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Subscriber_Number') != -1)
			{
				inputval[currinput].id = 'Subscriber_Number'+iprowid;
			}
			if(inputval[currinput].id.indexOf('anumber') != -1)
			{
				inputval[currinput].id = 'anumber'+iprowid;
			}
			if(inputval[currinput].id.indexOf('bnumber') != -1)
			{
				inputval[currinput].id = 'bnumber'+iprowid;
			}
			if(inputval[currinput].id.indexOf('timestampwe') != -1)
			{
				inputval[currinput].id = 'timestampwe'+iprowid;
				//inputval[currinput].onclick = "javascript:NewCssCal('timestampwe"+iprowid+"','yyyyMMdd','arrow','true','24','true')"
			}
			if(inputval[currinput].id.indexOf('upld') != -1)
			{
				inputval[currinput].id = 'upld'+iprowid;
			}
			if(inputval[currinput].id.indexOf('dwd') != -1)
			{
				inputval[currinput].id = 'dwd'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Amt') != -1)
			{
				inputval[currinput].id = 'Amt'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('Annotation') != -1)
			{
				inputval[currinput].id = 'Annotation'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('duration') != -1)
			{
				inputval[currinput].id = 'duration'+iprowid;
			}	
			if(inputval[currinput].id.indexOf('noofcallrec') != -1)
			{
				inputval[currinput].id = 'noofcallrec'+iprowid;
			}
			if(inputval[currinput].id.indexOf('frequency') != -1)
			{
				inputval[currinput].id = 'frequency'+iprowid;
			}
			if(inputval[currinput].id.indexOf('roaming') != -1)
			{
				inputval[currinput].id = 'roaming'+iprowid;
			}
			if(inputval[currinput].id.indexOf('momt') != -1)
			{
				inputval[currinput].id = 'momt'+iprowid;
			}
			
		}
		var inputval = document.getElementsByClassName('cdrgen12');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'nusgcode'+iprowid;
			iprowid = iprowid+1;
		}
		var inputval = document.getElementsByClassName('imgcdr');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'timestampwe'+iprowid;
			iprowid = iprowid+1;
		}
		// New *********************************************************************************************
		
		// ANNOTATION 	fields

		var inputval = document.getElementsByClassName('annotreq');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('Submitannot') != -1)
			{
				inputval[currinput].id = 'Submitannot'+iprowid;
				iprowid = iprowid+1;
			}
			if(inputval[currinput].id.indexOf('sourcecountry') != -1)
			{
				inputval[currinput].id = 'sourcecountry'+iprowid;
			}
			if(inputval[currinput].id.indexOf('sourcenetwork') != -1)
			{
				inputval[currinput].id = 'sourcenetwork'+iprowid;
			}
			if(inputval[currinput].id.indexOf('targetcountry') != -1)
			{
				inputval[currinput].id = 'targetcountry'+iprowid;
			}
			if(inputval[currinput].id.indexOf('targetnetwork') != -1)
			{
				inputval[currinput].id = 'targetnetwork'+iprowid;
			}
			if(inputval[currinput].id.indexOf('tadigcode') != -1)
			{
				inputval[currinput].id = 'tadigcode'+iprowid;
			}
			if(inputval[currinput].id.indexOf('nccnmc') != -1)
			{
				inputval[currinput].id = 'nccnmc'+iprowid;
			}
			if(inputval[currinput].id.indexOf('bumbflag') != -1)
			{
				inputval[currinput].id = 'bumbflag'+iprowid;
			}
			if(inputval[currinput].id.indexOf('sntk_Conxt') != -1)
			{
				inputval[currinput].id = 'sntk_Conxt'+iprowid;
			}if(inputval[currinput].id.indexOf('sntk_Value') != -1)
			{
				inputval[currinput].id = 'sntk_Value'+iprowid;
			}if(inputval[currinput].id.indexOf('tgt_Conxt') != -1)
			{
				inputval[currinput].id = 'tgt_Conxt'+iprowid;
			}if(inputval[currinput].id.indexOf('tgt_Value') != -1)
			{
				inputval[currinput].id = 'tgt_Value'+iprowid;
			}
			if(inputval[currinput].id.indexOf('srcstate_Value') != -1)
			{
				inputval[currinput].id = 'srcstate_Value'+iprowid;
			}
			if(inputval[currinput].id.indexOf('tgtstate_Value') != -1)
			{
				inputval[currinput].id = 'tgtstate_Value'+iprowid;
			}
			
		}
		
		var inputval = document.getElementsByClassName('morepng');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'morepng'+iprowid;
			iprowid = iprowid+1;
		}
		var inputval = document.getElementsByClassName('modal');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'myModal'+iprowid;
			iprowid = iprowid+1;
		}		
		var inputval = document.getElementsByClassName('modal-content');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'modalcontent'+iprowid;
			iprowid = iprowid+1;
		}
		var inputval = document.getElementsByClassName('close');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'closeannot'+iprowid;
			iprowid = iprowid+1;
		}
		
		//Appending the first row top border in case of deletion of first row
		if((delid== 'delbut1'))
		{
		  var first_row_b1 = document.getElementById("cdrtable").rows[1].cells[14];
		  var first_row_b2 = document.getElementById("cdrtable").rows[1].cells[15];
		  var first_row_b3 = document.getElementById("cdrtable").rows[1].cells[16];
		  var first_row_b4 = document.getElementById("cdrtable").rows[1].cells[17];

		  first_row_b1.style.borderTop='1px solid';
		  first_row_b1.style.width='2%';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b2.style.width='2%';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b3.style.width='2%';
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b4.style.width='0.1%';
		}

		
	}
	
}

function copyrow(cpyid) // AG-
{
if(document.getElementById('OPCOsel').value != 'Please Select')
{	
	var cpyarr = cpyid.split('cpy');
	var pos = cpyarr[1];
	var cdrtable = document.getElementById('cdrtable');
	var newrow = cdrtable.rows.length;
	var row = cdrtable.insertRow(newrow);
	var fopt1 = '';
	var fopt2 = '';
	var fopt3 = '';
	var fopt4 = '';
	var fopt5 = '';
	//var orow = newrow-1;
	var orow = pos;
	var fopt='';
	var servopt = '';
	var prevusage = $('#usagetype'+orow)[0].selectize.options;
	/*prevusage = document.getElementById("usagetype"+orow);	
	for (currrow = 0;currrow<prevusage.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevusage.options[currrow].value+"</options>"	
	}*/
	for(k in prevusage){
		//alert(k);
		fopt = fopt+"<option>"+k+"</options>"
	}

	var prevscoun = $('#sourcecountry'+orow)[0].selectize.options;
	for(k in prevscoun){
	fopt2 = fopt2+"<option>"+k+"</options>"
	}
	var prevtcoun = $('#targetcountry'+orow)[0].selectize.options;
	for(k in prevtcoun){
	fopt3 = fopt3+"<option>"+k+"</options>"
	}
	var prevsnetw = $('#sourcenetwork'+orow)[0].selectize.options;
	for(l in prevsnetw){
	fopt4 = fopt4+"<option>"+l+"</options>"
	}
	var prevtnetw = $('#targetnetwork'+orow)[0].selectize.options;
	for(m in prevtnetw){
	fopt5 = fopt5+"<option>"+m+"</options>"
	}

	prevserv = document.getElementById("servicetype"+orow);
	for (currservrow = 0;currservrow<prevserv.options.length;currservrow++)
	{
		servopt = servopt+"<option>"+prevserv.options[currservrow].value+"</options>"
	}
	prevprop = document.getElementById("proposition"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt1 = fopt1+"<option>"+prevprop.options[currrow].value+"</options>"	
	}	
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var cell16 = row.insertCell(15);
	var cell17 = row.insertCell(16);
	var cell18 = row.insertCell(17);

	cell1.innerHTML = "<Select type = 'text' class = 'cdrgen' id = 'proposition"+newrow+"'  onchange = getservicetype(this.id) style='width:100%'>"+fopt1
	cell1.style.width = '7%';
	cell2.innerHTML = "<Select type = 'text' style='width:100%' class = 'cdrgen' id = 'servicetype"+newrow+"' list = 'service'  onchange=\"getUseageType(this.id)\">"+servopt
	cell2.style.width = '7.5%';
	cell3.innerHTML = "<Select type = 'text' list = 'usagelist"+orow+"' class = 'cdrgen' id = 'usagetype"+newrow+"' style='width:100%' onchange = 'getusagecode(this.id)'>"+fopt
	
	cell3.style.width = '7%';
	cell4.innerHTML = "<input type = 'text' class = 'cdrgen12' id = 'nusgcode"+newrow+"' style='width:100%' disabled  onchange='trigger_annotation(this.id)' >"
	cell4.style.width = '5%'
	cell5.innerHTML = "<input type = 'text'  class = 'cdrgen' id = 'anumber"+newrow+"' style='width:100%' onchange='trigger_annotation(this.id)' >"
	cell5.style.width = '7.5%';
	cell6.innerHTML = "<input type = 'text'   class = 'cdrgen' id = 'bnumber"+newrow+"' style='width:100%' onchange='trigger_annotation(this.id)' >"
	cell6.style.width = '7%';
	cell7.innerHTML = "<input disabled type = 'text' class = 'cdrgen' id ='timestampwe"+newrow+"' style=\"width:80%\" onchange = 'Opco_Data_Date_flag_checker(this.id, this.value)' ><img class = 'imgcdr' id = 'timestampwe"+newrow+"' src='/ui/images2/cal.gif' onclick=\"javascript:NewCssCal(this.id,'yyyyMMdd','arrow','true','24','true')\" style=\"cursor:pointer\">"
	cell7.style.width = '7.5%';
	cell8.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'duration"+newrow+"' style='width:100%'>"
	cell8.style.width = '7%';
	cell9.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'upld"+newrow+"' style='width:100%' value = 0>"
	cell9.style.width = '4%';
	cell10.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'dwd"+newrow+"' style='width:100%' value = 0>"
	cell10.style.width = '4%';
	cell11.innerHTML = "<input type = 'number' onblur = 'negativevalidation(this.id)' class = 'cdrgen'id = 'Amt"+newrow+"' style='width:100%' value = 0>"
	cell11.style.width = '4%';
	cell12.innerHTML = "<input type = 'text'  class = 'cdrgen' id = 'Annotation"+newrow+"' style='width:80%'><img src = 'ui/more.png' class = 'morepng'  style = 'border:none' id= 'morepng"+newrow+"' onclick = 'displayannot(this.id)'><div id='myModal"+newrow+"' class='modal'><div class='modal-content' id = 'modalcontent"+newrow+"'><span class='close' onclick = 'closeannot(this.id)' id = 'closeannot"+newrow+"'>&times;</span><table  class = 'annotable'><tr><td>Source Country</td><td><Select type = 'text' id = 'sourcecountry"+newrow+"' class = 'annotreq' onchange = 'getcountryntwrk(this.id);'>"+fopt2+"</td><td>Source Network</td><td><Select type = 'text' id = 'sourcenetwork"+newrow+"' class = 'annotreq' onchange = 'getmccmnc(this.id);' >"+fopt4+" </td></tr><tr><td>Target Country</td><td><Select type = 'text' id = 'targetcountry"+newrow+"' class = 'annotreq' onchange = 'getcountryntwrk(this.id);'>"+fopt3+"</td><td>Target Network </td><td><Select type = 'text' id = 'targetnetwork"+newrow+"' class = 'annotreq' onchange = 'getmccmnc(this.id);' >"+fopt5+"</td></tr><tr><td>TADIG Code</td><td><input type = 'text' id = 'tadigcode"+newrow+"' disabled class = 'annotreq' ></td><td>MCC MNC</td><td><input type = 'text' id = 'nccnmc"+newrow+"' disabled class = 'annotreq'></td></tr><tr><td>B Number Flag</td><td><input  type = 'text' id = 'bumbflag"+newrow+"'  class = 'annotreq' disabled></td></tr> <tr><td style = 'display:none;width:0.1%' >Src Ntk Conxt<input type = 'text' id = 'sntk_Conxt"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none;width:0.1%' >Src Ntk Value<input type = 'text' id = 'sntk_Value"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none'>Src state Value<input type = 'text' id = 'srcstate_Value"+newrow+"'  class = 'annotreq' disabled style = 'width:80%' ></td></tr><tr><td style = 'display:none;width:0.1%' >Tgt Ntk Conxt<input type = 'text' id = 'tgt_Conxt"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none;width:0.1%' >Tgt Ntk Value<input type = 'text' id = 'tgt_Value"+newrow+"'  class = 'annotreq' disabled style = 'display:none;width:80%' ></td><td style = 'display:none'>Tgt state Value<input type = 'text' id = 'tgtstate_Value"+newrow+"'  class = 'annotreq' disabled style = 'width:80%' ></td></tr></table><span></span></br><center><button class = 'annotreq' id = 'Submitannot"+newrow+"' onclick = 'submitannot(this.id)'> Submit </button></center></br></div></div>"
	cell12.style.width = '7%';	
	cell13.innerHTML = "<input type = 'text'  class = 'cdrgen'id = 'noofcallrec"+newrow+"' onchange = 'EnableFrequency(this.id)' onblur = 'negativevalidation(this.id)' style='width:100%'>"
	cell13.style.width = '7%';
	cell14.innerHTML = "<Select type = 'text' class = 'cdrgen'id = 'frequency"+newrow+"' disabled style='width:100%'><option>Please Select</option><option>Every Second</option><option>Once a Minute</option><option>Hourly</option><option>Daily</option><option>Weekly</option>"
	cell14.style.width = '7%';
	cell15.innerHTML ="<button class ='copy_cdr' id = 'cpy"+newrow+"' style = 'border:none;background:white' onclick = 'copyrow(this.id)'><img src = 'ui/copy.png' class = 'copy'  title = 'copy previous Row' id = 'cpy"+newrow+"' style = 'border:none'></button>"
	cell15.style.border = 'none';
	cell15.style.width = '2%';
	cell16.innerHTML ="<button style = 'border:none;background:white' onclick = 'addnewrow()'><img src = 'ui/add.png' class = 'addpng' id = 'ad"+newrow+"' style = 'border:none'></button>"
	cell16.style.border = 'none';
	cell16.style.width = '2%';
	cell17.innerHTML ="<button style = 'border:none;background:white' id = 'delbut"+newrow+"' class = 'delbut' onclick = 'deleterow(this.id)'><img src = 'ui/delete.png' class = 'delete' id = 'del"+newrow+"' style = 'border:none'></button>"
	cell17.style.border = 'none';
	cell17.style.width = '2%';
	cell18.innerHTML = "<input type = 'text' class = 'cdrgen' id = 'inusgcod"+newrow+"' disabled style = 'display:none'><input type = 'text' class = 'cdrgen' id = 'roaming"+newrow+"' disabled style = 'display:none'><input type = 'text' class = 'cdrgen' id = 'momt"+newrow+"' disabled style = 'display:none'><input type = 'text' class = 'cdrgen' id = 'usgcode"+newrow+"' disabled style = 'display:none'></td>"
	cell18.style.border = 'none';
	cell18.style.width = '0.1%';

	//get_country(newrow.toString());
	
	document.getElementById("proposition"+newrow).selectedIndex=document.getElementById("proposition"+orow).selectedIndex
	document.getElementById("servicetype"+newrow).selectedIndex=document.getElementById("servicetype"+orow).selectedIndex
	$('#usagetype'+newrow).selectize({placeholder:'Please Select'});
	var $select = $('#usagetype'+newrow).selectize();
	var $select1 = $('#usagetype'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
    $select[0].selectize.setValue(test); 
	//document.getElementById("usagetype"+newrow).value=document.getElementById("usagetype"+orow).value
	document.getElementById("anumber"+newrow).value=document.getElementById("anumber"+orow).value
	document.getElementById("bnumber"+newrow).value=document.getElementById("bnumber"+orow).value
	document.getElementById("nusgcode"+newrow).value=document.getElementById("nusgcode"+orow).value
	document.getElementById("upld"+newrow).value=document.getElementById("upld"+orow).value
	document.getElementById("dwd"+newrow).value=document.getElementById("dwd"+orow).value
	document.getElementById("Amt"+newrow).value=document.getElementById("Amt"+orow).value
	
	if(document.getElementById("servicetype"+orow).value === 'DATA')
	{
		document.getElementById("bnumber"+newrow).type = 'text';
		//document.getElementById("upld"+newrow).disabled = false;
		//document.getElementById("dwd"+newrow).disabled = false;
		//document.getElementById("duration"+newrow).disabled = false;
		document.getElementById("bnumber"+newrow).disabled = false;
		document.getElementById("bnumber"+newrow).value = 'NONUMBER'
	}
	else
	{
		document.getElementById("bnumber"+newrow).disabled = false;
		//document.getElementById("upld"+newrow).disabled = true;
		//document.getElementById("dwd"+newrow).disabled = true;
		
		if(document.getElementById("servicetype"+orow).value === 'SMS')
		{	
			document.getElementById("duration"+newrow).value  = 1;
			document.getElementById("duration"+newrow).disabled = true;	;
			document.getElementById("upld"+newrow).disabled = true;
			document.getElementById("dwd"+newrow).disabled = true;				
		}
		else if(document.getElementById("servicetype"+orow).value === 'MMS') // changed on 29th jan
		{
			document.getElementById("duration"+newrow).value  = 1;
			document.getElementById("duration"+newrow).disabled = true;	
			document.getElementById("upld"+newrow).disabled = true;
			document.getElementById("dwd"+newrow).disabled = true;			
		}
		else if(document.getElementById("servicetype"+orow).value === 'Please Select')
		{			
			document.getElementById("duration"+newrow).disabled = false;
			document.getElementById("upld"+newrow).disabled = false;
			document.getElementById("dwd"+newrow).disabled = false;	
		}
		else
		{			
			document.getElementById("duration"+newrow).disabled = false;
			document.getElementById("upld"+newrow).disabled = true;
			document.getElementById("dwd"+newrow).disabled = true;	
		}
	}
	
	document.getElementById("duration"+newrow).value=document.getElementById("duration"+orow).value
	if(document.getElementById("noofcallrec"+orow).value!== '')
	{
	   document.getElementById("noofcallrec"+newrow).value=document.getElementById("noofcallrec"+orow).value
	}
	document.getElementById("frequency"+newrow).selectedIndex=document.getElementById("frequency"+orow).selectedIndex
	document.getElementById("usgcode"+newrow).value=document.getElementById("usgcode"+orow).value
	EnableFrequency('noofcallrec'+newrow)
	if(!document.getElementById("timestampwe"+orow).value=='')
	{
		var tstr = document.getElementById("timestampwe"+orow).value
		var fsplit = tstr.split(" ");
		var secsplit = fsplit[0].split("-");
		var thirdsplit = fsplit[1].split(":");
		var tempy = secsplit[0];
		var tempm = (secsplit[1]-1);
		tempm = "0"+tempm;
		tempm =  tempm.substring(tempm.length-2,tempm.length);
		var tempd = "0"+secsplit[2];
		tempd =  tempd.substring(tempd.length-2,tempd.length);
		var temph = "0"+thirdsplit[0];
		temph =  temph.substring(temph.length-2,temph.length);
		var tempmin ="0"+thirdsplit[1];
		tempmin =  tempmin.substring(tempmin.length-2,tempmin.length);
		var tempsec ="0"+thirdsplit[2];
		tempsec =  tempsec.substring(tempsec.length-2,tempsec.length);
		var tstp = new Date(Date.UTC(tempy,tempm,tempd,temph,tempmin,tempsec));
		if(document.getElementById("duration"+orow).value=='')
		{
			var old_duration_ref = 0;
		}
		else
		{
			var old_duration_ref = document.getElementById("duration"+orow).value;
		}
		tstp.setSeconds(tstp.getSeconds() + parseInt(old_duration_ref));
		var monval = tstp.getMonth()+1;
		var fmonval = '0'+monval;
		fmonval =  fmonval.substring(fmonval.length-2,fmonval.length);
		var datval = '0'+tstp.getDate();
		datval =  datval.substring(datval.length-2,datval.length);
		var hrval = '0'+tstp.getHours();
		hrval =  hrval.substring(hrval.length-2,hrval.length);
		var minval = '0'+tstp.getMinutes();
		minval = minval.substring(minval.length-2,minval.length);
		var secval = '0'+tstp.getSeconds();
		secval = secval.substring(secval.length-2,secval.length);
		var ntstp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
		document.getElementById("timestampwe"+newrow).value=ntstp;
	}	

	//call validations to mimic the previous row behaviour
	if(document.getElementById("duration"+orow).disabled && document.getElementById("servicetype"+newrow).value === 'DATA' )
	{
		document.getElementById("duration"+newrow).disabled = true
	}	
	if(document.getElementById("upld"+orow).disabled && document.getElementById("servicetype"+newrow).value === 'DATA' )
	{
		document.getElementById("upld"+newrow).disabled = true
	}
	if(document.getElementById("dwd"+orow).disabled && document.getElementById("servicetype"+newrow).value === 'DATA' )
	{
		document.getElementById("dwd"+newrow).disabled = true
	}
	
	document.getElementById("nusgcode"+newrow).value=document.getElementById("nusgcode"+orow).value;
	//check the Data_date_flag for the new row
	Opco_Data_Date_flag_checker("timestampwe"+newrow,ntstp)
	document.getElementById("Annotation"+newrow).value=document.getElementById("Annotation"+orow).value
	document.getElementById("roaming"+newrow).value=document.getElementById("roaming"+orow).value
	$('#sourcecountry'+newrow).selectize();
	var $select2 = $('#sourcecountry'+newrow).selectize();
	var $select3 = $('#sourcecountry'+orow).selectize();
	var selectizeControl1 = $select3[0].selectize
    var test1 = selectizeControl1.getValue();
	//alert(test);
    $select2[0].selectize.setValue(test1); 
		$('#sourcenetwork'+newrow).selectize();
		var $select9 = $('#sourcenetwork'+newrow).selectize();
		var $select4 = $('#sourcenetwork'+orow).selectize();
		var selectizeControl2 = $select4[0].selectize
		var test2 = selectizeControl2.getValue();
		//alert(test);
		$select9[0].selectize.setValue(test2); 	
	$('#targetcountry'+newrow).selectize();
	var $select5 = $('#targetcountry'+newrow).selectize();
	var $select6 = $('#targetcountry'+orow).selectize();
	var selectizeControl3 = $select6[0].selectize
    var test3 = selectizeControl3.getValue();
	//alert(test);
    $select5[0].selectize.setValue(test3); 
		$('#targetnetwork'+newrow).selectize();
		var $select7 = $('#targetnetwork'+newrow).selectize();
		var $select8 = $('#targetnetwork'+orow).selectize();
		var selectizeControl4 = $select8[0].selectize
		var test4 = selectizeControl4.getValue();
		$select7[0].selectize.setValue(test4); 
	//document.getElementById("sourcecountry"+newrow).value=document.getElementById("sourcecountry"+orow).value
	//document.getElementById("sourcenetwork"+newrow).value=document.getElementById("sourcenetwork"+orow).value
	//document.getElementById("targetcountry"+newrow).value=document.getElementById("targetcountry"+orow).value
	//document.getElementById("targetnetwork"+newrow).value=document.getElementById("targetnetwork"+orow).value
	document.getElementById("tadigcode"+newrow).value=document.getElementById("tadigcode"+orow).value
	document.getElementById("nccnmc"+newrow).value=document.getElementById("nccnmc"+orow).value
	document.getElementById("bumbflag"+newrow).value=document.getElementById("bumbflag"+orow).value
	document.getElementById("momt"+newrow).value=document.getElementById("momt"+orow).value
	
	if(document.getElementById("Annotation"+orow).value!=''){
	  document.getElementById("Annotation"+newrow).title=document.getElementById("Annotation"+orow).title
	} 
	
	//Annotation dependencies
	document.getElementById("sntk_Conxt"+newrow).value=document.getElementById("sntk_Conxt"+orow).value
	document.getElementById("sntk_Value"+newrow).value=document.getElementById("sntk_Value"+orow).value
	document.getElementById("srcstate_Value"+newrow).value=document.getElementById("srcstate_Value"+orow).value
	document.getElementById("tgt_Conxt"+newrow).value=document.getElementById("tgt_Conxt"+orow).value
	document.getElementById("tgt_Value"+newrow).value=document.getElementById("tgt_Value"+orow).value
	document.getElementById("tgtstate_Value"+newrow).value=document.getElementById("tgtstate_Value"+orow).value

	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
	
});
}
else
{
	alertify.alert('Please Select OPCO and Proceed')
}
}

function changedivcontent()
{
	if(document.getElementById('cdrfileexists1').value === 'Yes')
	{
		document.getElementById('content1').style.display = 'inline';
		document.getElementById('content').style.display = 'none';
	}
	else
	{
		document.getElementById('content').style.display = 'inline';
		document.getElementById('content1').style.display = 'none';
	}
}

function Dwnlcdr()
{
	//var oReq = new XMLHttpRequest();
	filename = document.getElementById('cdrfilename').value;
	//oReq.open("POST", '/getdwdcdr?retval='+filename);
	//oReq.responseType = 'blob';
	//oReq.onreadystatechange = function () {
    //if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
		
	//}
	//};
	//oReq.send();
	
	document.getElementById('dwdlink').href = '/getdwdcdr?retval='+filename
	document.getElementById('dwdlink').click();
	document.getElementById('cdrload').style.display = "none"
	document.getElementById('maincdrdiv').style.display = "inline"
	
}

function Dwnlzipfile()
{
	//var oReq = new XMLHttpRequest();
	filename = document.getElementById('cdrfilename').value;
	//oReq.open("POST", '/getdwdcdr?retval='+filename);
	//oReq.responseType = 'blob';
	//oReq.onreadystatechange = function () {
    //if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
		
	//}
	//};
	//oReq.send();
	document.getElementById('dwdlink1').href = '/getdwzip?retval='+filename
	document.getElementById('dwdlink1').click();
	document.getElementById('cdrload').style.display = "none"
	document.getElementById('maincdrdiv').style.display = "inline"
	
}

function displayusgcount()
{
	passval  = document.getElementById('usagecountdrop').value
	if(passval === 'Multiple')
	{
		document.getElementById('usglbl').style.display = 'inline';
		document.getElementById('usagecount').style.display = 'inline';
		document.getElementById('usagecount').value = '';
	}
	else
	{
		document.getElementById('usglbl').style.display = 'none';
		document.getElementById('usagecount').style.display = 'none';
		document.getElementById('usagecount').value = 1;
		createUsageDetails();
	}
	
}
function setoldvalue(element){		
   document.getElementById(element).oldvalue = document.getElementById(element).value		
}
function getopcocode(opcodescid)
{
	passval  = document.getElementById(opcodescid).value;

	if(passval != 'Please Select' && passval != '')
	{
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getopcocode?retval='+passval);
		oReq.onreadystatechange = function () {
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
			reponsetxt = oReq.responseText;
			opcoarr = reponsetxt.split('||');
			opcocode = opcoarr[0];
			opconame = opcoarr[1];
			opco_currency_code = opcoarr[2];
			opco_data_date_flag = opcoarr[3];
			document.getElementById('OPCOcode').value = opcocode;
			document.getElementById('OPCOName').value = opconame;
			document.getElementById('OPCO_currency_code').value = opco_currency_code;
			document.getElementById('OPCO_data_date_flag').value = opco_data_date_flag;
			console.log(reponsetxt);
		}
		};
		oReq.send();
	}
	/*else
	{

		var userselection = confirm('Data you have entered will be lost. Please confirm you want to move away from current OPCO to default value[\'Please Select\'].');
		 
		if (userselection == true){
		 
				document.getElementById('OPCOcode').value = '';
				document.getElementById('OPCOName').value = '';
				var inputval = document.getElementsByClassName('cdrgen');
				for(var currinput = 0;currinput<inputval.length;currinput++)
				{
					if(inputval[currinput].id.indexOf('OPCOcode') != -1 || inputval[currinput].id.indexOf('timestampwe') != -1 || inputval[currinput].id.indexOf('frequency') != -1)
					{
						inputval[currinput].disabled = true;
					}
					else
					{
						inputval[currinput].disabled = false;
					}
					if(inputval[currinput].tagName === 'SELECT')
					{
						inputval[currinput].value = 'Please Select';
						
					}
					else
					{
						inputval[currinput].value = '';
						//inputval[currinput].disabled = false; usagetype1
					}
					
					if(inputval[currinput].id.indexOf('usagetype') != -1){
						$('#'+inputval[currinput].id).selectize()[0].selectize.destroy();
						var dlistid1 = document.getElementById(inputval[currinput].id);
						dlistid1.options.length = 0			
						//$('#'+inputval[currinput].id).selectize({placeholder:'Please Select',create:true});
						var newOption1 = document.createElement('option');
						newOption1.value ='Please Select';
						newOption1.innerText = 'Please Select';
						dlistid1.appendChild(newOption1);						

						$select = $('#'+inputval[currinput].id).selectize();
						$select[0].selectize.setValue('Please Select');			
						$('#'+inputval[currinput].id).selectize({placeholder:'Please Select',create:true});				

					}
				
				}
				var inputval = document.getElementsByClassName('cdrgen12');
				for(var currinput = 0;currinput<inputval.length;currinput++)
				{
					if(inputval[currinput].tagName === 'SELECT')
					{
						inputval[currinput].value = 'Please Select';
					}
					else
					{
						inputval[currinput].value = '';
					}
				
				}
				document.getElementById('feedtype').value = 'CSA';

		 
		}
		 
		else{
		   // Do nothing
           document.getElementById(opcodescid).value = document.getElementById(opcodescid).oldvalue
		}
			
	

	}*/
		
	//check for the match of old and new OPCO selected if they mismatch ask the user-confirmation to do clear all
	
	if(document.title == 'Usage Generation'){	
		if(document.getElementById(opcodescid).oldvalue != 'Please Select'){
			var userselection = confirm('Data you have entered will be lost. Please confirm you want to move away from currently selected OPCO');
			 
			if (userselection == true ){
			
				//clearall_cdr();
				var cdrtable;
				var currrow_clear
				cdrtable = document.getElementById('cdrtable');
				Curr_table_len =  cdrtable.rows.length;
				for(currrow_clear = Curr_table_len; currrow_clear>=2;currrow_clear--)
				{
					deleterow('delbut'+(currrow_clear-1))		
				} 
				if(document.getElementById(opcodescid).value == 'Please Select'){
					document.getElementById('OPCOcode').value = '';			  
				}
			
			}else
			{
			   // Do nothing
			   document.getElementById(opcodescid).value = document.getElementById(opcodescid).oldvalue
			}
		}
	}	
}

function getusagecode(usagecode)
{
	var usgsplit = usagecode.split('usagetype');
	var rownum = usgsplit[1];
	var usageid = 'usgcode'+rownum;
	var nusgid = 'nusgcode'+rownum;
	var inusgid = 'inusgcod'+rownum;
	var usgcode;
	
	// Add the country level mapping for accurate usage_codes
	var propositionid = 'proposition'+rownum;
	if(document.getElementById(propositionid).value=='Please Select')
	{
		alertify.alert('Please select the Proposition .!!');
		return;
	}
	
	// get the OPCO reference for the selected country in GUI
	var selected_opco;
	var selected_opco_db_ref;
	selected_opco = document.getElementById("OPCOsel").value;
	
	if( selected_opco == 'Please Select')   // United Kingdom Germany Netherland  Ireland Spain Italy Portugal  Czech Republic  Hungary 
	{
		alertify.alert('Please select the OPCO .!!');
		return;
	}else if( selected_opco == 'United Kingdom'){
		selected_opco_db_ref = 'uk';
	}else if( selected_opco == 'Germany'){
		selected_opco_db_ref = 'de';
	}else if( selected_opco == 'Netherland'){
		selected_opco_db_ref = 'nl';
	}else if( selected_opco == 'Ireland'){
		selected_opco_db_ref = 'ie';
	}else if( selected_opco == 'Spain'){
		selected_opco_db_ref = 'es';
	}else if( selected_opco == 'Italy'){
		selected_opco_db_ref = 'it';
	}else if( selected_opco == 'Portugal'){
		selected_opco_db_ref = 'pt';
	}else if( selected_opco == 'Czech Republic'){
		selected_opco_db_ref = 'cz';
	}else if( selected_opco == 'Hungary'){
		selected_opco_db_ref = 'hu';
	}else if( selected_opco == 'Malaysia'){
		selected_opco_db_ref = 'my';
	}
	
	var usgtype  = document.getElementById(usagecode).value	
	if(usgtype.indexOf('–') != -1)
	{
			usgtype =   usgtype.replace('–','-')
			usgtype = usgtype+'replceyes'
	}
	var passval = '[{"usgtype":"'+usgtype+'","selected_opco_db_ref":"'+selected_opco_db_ref+'"}]';
	console.log(passval);
	
	if(usgtype != 'Please Select' && usgtype != '')
	{
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getkenanid?retval='+passval);
		oReq.onreadystatechange = function () {
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
			reponsetxt = oReq.responseText;
			responsesplt = reponsetxt.split("||");
			document.getElementById(usageid).value = responsesplt[0];
			document.getElementById(nusgid).value = responsesplt[1];
			document.getElementById(inusgid).value = responsesplt[2];
			usgcode = responsesplt[1]
			console.log(reponsetxt);
			getroamingdetails(usgcode,rownum);
			trigger_annotation(usagecode); 
		}
		};
		oReq.send();
	}
	else
	{	
			console.log(usageid);
			document.getElementById(usageid).value = '';
			document.getElementById(nusgid).value = '';
			document.getElementById("roaming"+rownum).value = '';
			document.getElementById("momt"+rownum).value = '';
	}

}


function sendCDRdata(src) // AG - 
{
	var inputval = document.getElementsByClassName('cdrgen');
	var opconame;
	var opco_currency_code; // document.getElementById('OPCO_currency').value = opconame;
	var CDRType;
	var Service_Type;
	var usage_Type;
	var Subscriber_Number;
	var secondunit;
	var thirdunit;
	var Amount;
	var External_id;	
	var Annotation;
	var Opco_data_date_flag;
	var ANumber;
	var opcocode;
	var allvalavilabe = 'yes';
	var BNumber;
	var callTS;
	var Duration;
	var roaming;
	var numcdr;
	var frequency;
	var kenaniid;
	var cdrconcat = '';
	var jsonstr = '';
	var input_cdr = [];
	var proposition_ref;
	var jdat =  new Date();
	var jyr = jdat.getFullYear();
	var jmonth = jdat.getMonth()+1;
	jmonth = '0'+jmonth;
	jmonth = jmonth.substring(jmonth.length-2,jmonth.length)
	var jdate = jdat.getDate();
	jdate = '0'+jdate;
	jdate = jdate.substring(jdate.length-2,jdate.length)
	var jhr = jdat.getHours();
	jhr = '0'+jhr;
	jhr = jhr.substring(jhr.length-2,jhr.length)
	var jmin = jdat.getMinutes();
	jmin = '0'+jmin;
	jmin = jmin.substring(jmin.length-2,jmin.length)
	var jsec = jdat.getSeconds();
	jsec = '0'+jsec;
	jsec = jsec.substring(jsec.length-2,jsec.length)
	timestamp = jyr+jmonth+jdate+jhr+jmin+jsec;
	var xhr = [];
	var reftimestamp;
	reftimestamp = timestamp;
	for(var currinput = 0;currinput<inputval.length;currinput++)
	{
			var opcoval = document.getElementById('OPCOsel').value;
			if(opcoval === 'Please Select')
			{
				alertify.alert('Please select OPCO and proceed')
				document.getElementById(propid).value = 'Please Select'
			}
		
			if(inputval[currinput].id.indexOf('OPCOcode') != -1)
			{
				
				OPCOcode=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('OPCO_currency_code') != -1)
			{
				
				opco_currency_code=  inputval[currinput].value;
			}			
					
			if(inputval[currinput].id.indexOf('usgcode') != -1)
			{
				usagecode=  inputval[currinput].value;
				
				//Generic validation's for the current Row
				
				 if(proposition_ref==='Please Select')
				{
					alertify.alert('Please select the Mandatory field (Hint: Proposition)')
					return;							
				}

				 if(Service_Type==='Please Select')
				{
					alertify.alert('Please select the Mandatory field (Hint: Usage Category)')
					return;							
				}								
				// Logic to validate the Mandatory fields based on the Usage Type
					//voice
					if(Service_Type=== 'VOICE')
					{
						//Mandatory Fields ~ usage_Type,usagecode,ANumber,BNumber,callTS,Duration,numcdr,frequency
						if(usage_Type=== 'Please Select')
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-Type)')
							return;							
						}
						if(usagecode=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: VGE-code)')
							return;
						}						
						if(ANumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Calling Number)')
							return;
						}
						if(BNumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Called Number)')
							return;
						}
						if(callTS=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Start Time)')
							return;
						}
						if(Duration=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Duration)')
							return;
						}
						if(Amount=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Amount)')
							return;
						}	
						if(External_id=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: External Id)')
							return;
						}	
						if(Annotation=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Annotation)')
							return;
						}							
						if(numcdr=== '' || numcdr<1 )
						{
							alertify.alert('Please select the Mandatory field (Hint: No of Events)')
							return;
						}
						if(numcdr!== '0')
						{	if(numcdr!== '1' && frequency=== 'Please Select')
							{
								alertify.alert('Please select the Mandatory field (Hint: Call Interval)')
								return;		
							}
						}	
						
					}
					
					if(Service_Type=== 'DATA')
					{
						//Mandatory Fields ~ 
						if(usage_Type=== 'Please Select')
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-Type)')
							return;
							
						}
						if(usagecode=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-code)')
							return;
						}						
						if(ANumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Calling Number)')
							return;
						}
						if(callTS=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Start Time)')
							return;
						}
						if(secondunit=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Upload)')
							return;
						}
						if(thirdunit=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Download)')
							return;
						}
						if(Duration=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Duration)')
							return;
						}						
						if(Amount=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Amount)')
							return;
						}
						if(External_id=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: External Id)')
							return;
						}							
						if(Annotation=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Annotation)')
							return;
						}							
						if(numcdr=== '' || numcdr<1 )
						{
							alertify.alert('Please select the Mandatory field (Hint: No of Events)')
							return;
						}
						if(numcdr!== '0')
						{	if(numcdr!== '1' && frequency=== 'Please Select')
							{
								alertify.alert('Please select the Mandatory field (Hint: Call Interval)')
								return;
		
							}
						}	
						
					}
					if(Service_Type=== 'MMS')																							
					{
						//Mandatory Fields ~ 
						if(usage_Type=== 'Please Select')
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-Type)')
							return;
							
						}
						if(usagecode=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-code)')
							return;
						}						
						if(ANumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Calling Number)')
							return;
						}
						if(BNumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Called Number)')
							return;
						}
						if(callTS=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Start Time)')
							return;
						}
						if(numcdr=== '' || numcdr<1 )
						{
							alertify.alert('Please select the Mandatory field (Hint: No of Events)')
							return;
						}
						if(Amount=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Amount)')
							return;
						}	
						if(External_id=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: External Id)')
							return;
						}							
						if(Annotation=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Annotation)')
							return;
						}							
						if(numcdr!== '0')
						{	if(numcdr!== '1' && frequency=== 'Please Select')
							{
								alertify.alert('Please select the Mandatory field (Hint: Call Interval)')
								return;
		
							}
						}	
						
					}
					if(Service_Type=== 'SMS')																							
					{
						//Mandatory Fields ~ 
						if(usage_Type=== 'Please Select')
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-Type)')
							return;
							
						}
						if(usagecode=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Usage-code)')
							return;
						}						
						if(ANumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Calling Number)')
							return;
						}
						if(BNumber=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Called Number)')
							return;
						}
						if(callTS=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Start Time)')
							return;
						}
						if(Amount=== "")
						{
							alertify.alert('Please select the Mandatory field (Hint: Amount)')
							return;
						}	
						if(External_id=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: External Id)')
							return;
						}						
						if(Annotation=== "" )
						{
							alertify.alert('Please select the Mandatory field (Hint: Annotation)')
							return;
						}								
						if(numcdr=== '' || numcdr<1 )
						{
							alertify.alert('Please select the Mandatory field (Hint: No of Events)')
							return;
						}
						if(numcdr!== '0')
						{	if(numcdr!== '1' && frequency=== 'Please Select')
							{
								alertify.alert('Please select the Mandatory field (Hint: Call Interval)')
								return;
		
							}
						}	
						
					}			
				// Logic to validate the Mandatory fields based on the Usage Type
				
				// Logic to check the duplicate rows of a HTML Table
						var temp = usage_Type+ANumber+BNumber+callTS;
						if (temp === "" || temp === null) 
						{
						
						} 
						else 
						{
						   input_cdr.push(temp);  // the array will dynamically grow
						}
						temp="";
						for(var i = 0; i <= input_cdr.length; i++) {
							for(var j = i; j <= input_cdr.length; j++) {
								if(i != j && input_cdr[i] == input_cdr[j]) {
									//alertify.alert('Kindly Remove the Duplicate Records with same Usage Type, Calling Number ,Called Number, Start Time .!!');
									//return;
								}
							}
						}							
				// Logic to check the duplicate rows of a HTML Table
				Opco_data_date_flag = document.getElementById('OPCO_data_date_flag').value;
				jsonstr = '[{"reftimestamp":"'+reftimestamp+'","secondunit":"'+secondunit+'","thirdunit":"'+thirdunit+'","filetype":"'+src+'","numcdr":"'+numcdr+'","frequency":"'+frequency+'","OPCONamec":"'+OPCONamec+'","usagecode":"'+usagecode+'","OPCOcode":"'+OPCOcode+'","opconame":"'+opconame+'","CDRType":"'+CDRType+'","Service_Type":"'+Service_Type+'","usage_Type":"'+usage_Type+'","Subscriber_Number":"'+Subscriber_Number+'","ANumber":"'+ANumber+'","BNumber":"'+BNumber+'","callTS":"'+callTS+'","Duration":"'+Duration+'","Amount":"'+Amount+'","opco_currency_code":"'+opco_currency_code+'","Annotation":"'+Annotation+'","External_id":"'+External_id+'","Opco_data_date_flag":"'+Opco_data_date_flag+'"}]'
				xhr[currinput] = new XMLHttpRequest();
				xhr[currinput].open("GET", '/CDRDBUpdate?retval='+jsonstr,false); 
				xhr[currinput].send(); 

			}
			if(inputval[currinput].id.indexOf('proposition') != -1)
			{
				proposition_ref=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('OPCOsel') != -1)
			{
				opconame=  inputval[currinput].value;
			}		
			if(inputval[currinput].id.indexOf('cdrtype') != -1)
			{
				CDRType=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('servicetype') != -1)
			{
				Service_Type=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('usagetype') != -1)
			{
				usage_Type=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('momt') != -1)
			{
				Subscriber_Number=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('anumber') != -1 )
			{
				ANumber=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('bnumber') != -1)
			{
				BNumber=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('timestampwe') != -1)
			{
				callTS=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('duration') != -1)
			{
				Duration=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('upld') != -1)
			{
				secondunit=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('dwd') != -1)
			{
				thirdunit=  inputval[currinput].value;
			}	
			if(inputval[currinput].id.indexOf('Amt') != -1)
			{
				Amount =  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('roaming') != -1)
			{
				roaming =  inputval[currinput].value;
			}	
			if(inputval[currinput].id.indexOf('momt') != -1)
			{
				if(inputval[currinput].value == "MT")
				{
					External_id =  BNumber;
				}
				else
				{
					External_id =  ANumber;
				}
			}
			if(inputval[currinput].id.indexOf('Annotation') != -1)
			{
				Annotation =  inputval[currinput].value;
				if(Annotation.indexOf('+')!=-1){
					Annotation = Annotation.replace('+','%2B');
				}
			}			
			if(inputval[currinput].id.indexOf('OPCOName') != -1)
			{
				OPCONamec =  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('noofcallrec') != -1)
			{
				numcdr =  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('frequency') != -1)
			{
				frequency =  inputval[currinput].value;
			}
		//}	
	}
	if(allvalavilabe === 'yes')
	{
		if(src === 'cdrgenerate')
		{
			var oReq = new XMLHttpRequest();
			var oReq1 = new XMLHttpRequest();
			oReq.open("GET", '/CreateCDR?retval='+reftimestamp);
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
				{
					reponsetxt = oReq.responseText;
					console.log(reponsetxt);
					var cdrfilename = reponsetxt.split("||");
					document.getElementById('cdrfilename').value = cdrfilename[1];
					oReq1.open("GET", '/addtrailer?retval='+reponsetxt);
					oReq1.onreadystatechange = function () 
					{
						if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) 
						{
							reponsetxt1 = oReq.responseText;
							console.log(reponsetxt1);
							//alert('CDR File is Generated')														
						}
					};
					//oReq1.send();
					document.getElementById('cdrload').style.display = "inline"
						document.getElementById('maincdrdiv').style.display = "none"
					setTimeout(function(){ Dwnlcdr();alertify.success("Successfully Generated CDR File");},5000);
					
				}
				
			};
			oReq.send();
		}
		if(src === 'cdrgenerate1')
		{	
			var oReq = new XMLHttpRequest();
			oReq.open("GET", '/CreateMultipleCDR?retval='+reftimestamp);
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
				{
					document.getElementById('cdrfilename').value = oReq.responseText;
					reponsetxt = oReq.responseText;
					console.log(reponsetxt); 
				}
			};
			oReq.send();
			document.getElementById('cdrload').style.display = "inline"
			document.getElementById('maincdrdiv').style.display = "none"
			setTimeout(function(){ Dwnlzipfile();alertify.success("Successfully Generated Multiple CDR Files");},5000);
			
		}
	}
}

//Common function:

function Opco_Data_Date_flag_checker(ID,Title_text)
{

	var TStamp_split = ID.split('timestampwe');
	var rowval = TStamp_split[1];
	var Usage_category_id = 'servicetype'+rowval;
	if(document.getElementById('OPCO_data_date_flag').value =='Yes' && document.getElementById(Usage_category_id).value =='DATA' && document.getElementById(ID).value!='')
	{
		var Date_val = document.getElementById(ID).value
		Date_val_split = Date_val.split(' ');
		var New_Date_val = Date_val_split[0]+' 00:00:00';
		document.getElementById(ID).value= New_Date_val;
		set_Title(ID,New_Date_val)
	}
	else
	{
		set_Title(ID,Title_text)
	}
}


function set_Title(ID,Title_text)
{
	document.getElementById(ID).setAttribute("title", Title_text);
}


function createCtnDetails(ctnid,divid,usagecount)
{
	var ctncountelement = document.getElementById(ctnid);	
	var numctn = parseInt(ctncountelement.value);
	var ctndiv = document.getElementById(divid);
	var fctnhtml = '';
	for(var billacc = 1; billacc<=numctn; billacc++)
	{
			fctnhtml = fctnhtml +	"<h4 style = 'background-color:5F9EA0;color:white;'>&nbsp&nbsp Usage Details for Subscriber " + billacc + "</h4>"+
				"<table>"+
				"<tbody>"+
				"<tr>"+
				"<td>"+
				"<label class = 'label' id = 'ctnlabel'>CTN/Subscriber Number</label>"+
				"<span class='after'>*</span>"+ 
				"</td>"+
				"<td>"+
				"<input id='Subscriber_Number' type='text' class='cdrgen'>"+
				"</td>"+
				"<td>"+
				"<label class = 'label' id = 'ctnlabel'>Number of Call Records</label>"+
				"<span class='after'>*</span>"+ 
				"</td>"+
				"<td>"+
				"<input id='nocallrec"+usagecount+"_"+billacc+"' type='text' class='cdrgen' title ="+billacc+" onChange = \"createCallDeatails('subscriber_"+usagecount+"_"+billacc+"',this.id,'autofillcall"+billacc+"',"+usagecount+","+billacc+")\">"+
				"</td>"+
				"</tr>"+
				"<tr>"+
				"<td><label class = 'label' style = 'display:none'> Auto Fill the Call details </label></td>"+
				"<td>"+
				"<Select style = 'display:none', type = 'text' class = 'cdrgen' name = 'autofillcall' id = 'autofillcall"+billacc+"' onChange = \"createCallDeatails('subscriber_"+usagecount+"_"+billacc+"','nocallrec"+billacc+"',this.id,"+usagecount+","+billacc+")\">"+
				"<option> No </option>"+
				"<option> Yes </option>"+
				"</td>"+
				"</tr>"+
				"</tbody>"+
				"</table>"+
				"<div id = 'subscriber_"+usagecount+"_"+billacc+"' style ='display:none'></div>";
	}
			ctndiv.innerHTML = fctnhtml;
}
function getUseageType(selectid)
{
	cdrfieldlevelvalidation(selectid);
	var oReq = new XMLHttpRequest();
	var servicetypeid = selectid;
	var servicetypesplt = servicetypeid.split('servicetype');
	var rowval = servicetypesplt[1];
	var useageid = 'usagetype'+rowval;
	$('#usagetype'+rowval).selectize()[0].selectize.destroy();
	var divid = document.getElementById("content");
	var propositionid = 'proposition'+rowval;
	var sel = document.getElementById(useageid)
	//sel.value = 'Please Select';
	sel.options.length = 0
	if(document.getElementById(propositionid).value=='Please Select')
	{
		alertify.alert('Please select the Proposition .!!');
		return;
	}
	//check the Data_date_flag for the new row
	Opco_Data_Date_flag_checker("timestampwe"+rowval,document.getElementById("timestampwe"+rowval).value)
	
	// get the OPCO reference for the selected country in GUI
	var selected_opco;
	var selected_opco_db_ref;
	selected_opco = document.getElementById("OPCOsel").value;
	
	if( selected_opco == 'Please Select')   // United Kingdom Germany Netherland  Ireland Spain Italy Portugal  Czech Republic  Hungary 
	{
		alertify.alert('Please select the OPCO .!!');
		return;
	}else if( selected_opco == 'United Kingdom'){
		selected_opco_db_ref = 'uk';
	}else if( selected_opco == 'Germany'){
		selected_opco_db_ref = 'de';
	}else if( selected_opco == 'Netherland'){
		selected_opco_db_ref = 'nl';
	}else if( selected_opco == 'Ireland'){
		selected_opco_db_ref = 'ie';
	}else if( selected_opco == 'Spain'){
		selected_opco_db_ref = 'es';
	}else if( selected_opco == 'Italy'){
		selected_opco_db_ref = 'it';
	}else if( selected_opco == 'Portugal'){
		selected_opco_db_ref = 'pt';
	}else if( selected_opco == 'Czech Republic'){
		selected_opco_db_ref = 'cz';
	}else if( selected_opco == 'Hungary'){
		selected_opco_db_ref = 'hu';
	}else if( selected_opco == 'Malaysia'){
		selected_opco_db_ref = 'my';
	}
	
	
	var passval = '[{"Servicetyp":"'+document.getElementById(selectid).value+'","Porposition":"'+document.getElementById(propositionid).value+'","selected_opco_db_ref":"'+selected_opco_db_ref+'"}]';
	console.log(passval);
	oReq.open("GET", '/getusage?retval='+passval);
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var newlist;
	document.getElementById("usgcode"+rowval).value='';
	document.getElementById("nusgcode"+rowval).value= '';
	newOption = document.createElement('option');
	//newOption.value = responseJson[currele].kenan_usg_description;
	newOption.innerText = 'Please Select';
	newOption.value = 'Please Select';
	sel.appendChild(newOption);
	//sel.setAttribute("list","usagelist"+rowval);
		oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				//newOption.value = responseJson[currele].kenan_usg_description;
				newOption.innerText = responseJson[currele].kenan_usg_description;
				newOption.value = responseJson[currele].kenan_usg_description;
				sel.appendChild(newOption);
			}
			$('#usagetype'+rowval).selectize();
			
        }
    };
	oReq.send();
	
}

/*function getUseageType(selectid)
{
	cdrfieldlevelvalidation(selectid);
	var oReq = new XMLHttpRequest();
	var servicetypeid = selectid;
	var servicetypesplt = servicetypeid.split('servicetype');
	var rowval = servicetypesplt[1];
	var useageid = 'usagetype'+rowval;
	var divid = document.getElementById("content");
	var propositionid = 'proposition'+rowval;
	var sel = document.getElementById(useageid)
	sel.value = '';
	//sel.options.length = 0
	if(document.getElementById(propositionid).value=='Please Select')
	{
		alertify.alert('Please select the Proposition .!!');
		return;
	}
	//check the Data_date_flag for the new row
	Opco_Data_Date_flag_checker("timestampwe"+rowval,document.getElementById("timestampwe"+rowval).value)
	var passval = '[{"Servicetyp":"'+document.getElementById(selectid).value+'","Porposition":"'+document.getElementById(propositionid).value+'"}]';
	console.log(passval);
	oReq.open("GET", '/getusage?retval='+passval);
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var newlist;
	if(document.getElementById("usagelist"+rowval) === null)
	{
		newlist = document.createElement('DATALIST');
		newlist.id = "usagelist"+rowval;
		
		divid.appendChild(newlist);
	}
	else
	{
		newlist = document.getElementById("usagelist"+rowval);
		divid.removeChild(newlist);
		newlist = '';
		newlist = document.createElement('DATALIST');
		newlist.id = "usagelist"+rowval;
		divid.appendChild(newlist);
		
	}
	document.getElementById("usgcode"+rowval).value='';
	document.getElementById("nusgcode"+rowval).value= '';
	sel.setAttribute("list","usagelist"+rowval);
		oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				//newOption.value = responseJson[currele].kenan_usg_description;
				newOption.innerText = responseJson[currele].kenan_usg_description;
				newOption.value = responseJson[currele].kenan_usg_description;
				newlist.appendChild(newOption);
			}
			
        }
    };
	oReq.send();
	
}*/

//Try1 start

function CreateBillingAcc()
{
	var custelement = document.getElementById('custacc');	
	var numcust_acc = parseInt(custelement.value);
	var billdiv = document.getElementById('Billingaccountdetails');
	var finalhtml ='<table><tbody>';
	var custhtml = '';
	var custdiv = document.getElementById('customerdetails');
	for(var billacc = 1; billacc<=numcust_acc; billacc++)
	{
		custhtml = custhtml+"<hr><hr><h3 style = 'background-color:5F9EA0;color:white;'>&nbsp&nbsp Details of Customer Account" +billacc+"</h4> <table>"+
		"<tbody>"+ 
		
		"<tr>"+
			
			"<td>"+
			"<label for='Proposition Type' class = 'label'>Proposition Type</label>"+
			"<span class='after'>*</span> "+
			"</td>"+
			"<td> "+
			"<select class = 'SelectProp' name = 'Prop_Type' id = 'C_Prop_Type' title = '"+billacc+"'> "+
			"<option>Bespoke</option>"+
			"<option>C_C</option>"+
			"<option>CLB 1 - EB</option>"+
			"<option>CLB 2 - SPPM + myData</option>"+
			"<option>CLB 3 - EB Domestic + SPPM</option>"+
			"<option>CLB 4 - EB Voice & myData</option>"+
			"<option>CLB 5 - Standard PPM</option>"+
			"<option>NMR</option>"+
			"<option>RED Enterprise Bundles</option>"+
			"<option>RED_Multiproposition</option>"+
			"<option>Simple Billing</option>"+
			"<option>Hardware</option>"+
			"<option>VGE_RED</option>"+
			"<option>VONE_C</option>"+
			"</td> "+
			"<td>"+
			"<label for='CustomerAccountName' class = 'label'>Customer Name</label>"+
			"</td>"+
			"<td>"+
			"<input type = 'text' class = 'input' name = 'CustomerAccountName' placeholder = 'Customer Name' id = 'nameformatcustacc' title = '"+billacc+"'>"+
			"</td>"+ 
		
		"</tr> "+
		
		"<tr> "+
		
			"<td> "+
			"<label for='cust_adds_1' class = 'label'>Customer Address 1</label> "+
			"<span class='after'>*</span> "+
			"</td> "+
			"<td> "+
			"<input type = 'text' class = 'inputrequired' name = 'cust_adds_1' id = 'cust_adds_1_Ken' title = '"+billacc+"'> "+
			"</td> "+
			"<td> "+
			"<label for='cust_adds_2' class = 'label'>Customer Address 2</label>"+
			"</td> "+
			"<td> "+
			"<input type = 'text' class = 'inputrequired' name = 'cust_adds_2' id = 'cust_adds_2_Ken' title = '"+billacc+"'> "+
			"</td> "+
			
		"</tr>"+
		
		"<tr> "+
		
		
			"<td>"+
			"<label for='City' class = 'label'>City</label>"+ 
			"<span class='after'>*</span> "+
			"</td> "+
			"<td> "+
			"<select class = 'Selectreq' name = 'City' id = 'City' title = '"+billacc+"'> "+
			"<option>London</option>  "+
			"</td> "+
			"<td> "+
			"<label for='ZIP/Postal Code' class = 'label'>ZIP/Postal Code</label> "+
			"<span class='after'>*</span> "+
			"</td> "+
			"<td> "+
			"<input type = 'text' class = 'inputrequired' name = 'ZIP Code' id = 'nameformatbillacc' title = '"+billacc+"'> "+
			"</td> "+
			
		"</tr>"+
		
		"<tr>"+
		
			"<td> "+
			"<label for='Country' class = 'label'>Country</label> "+
			"<span class='after'>*</span> "+
			"</td> "+
			"<td> "+
			"<Select type = 'text' class = 'Selectreq' name = 'Country' id = 'nameformatbillacc' title = '"+billacc+"'> "+
			"<option> United Kingdom </option> "+
			"</td>	"+
			"<td > "+
			"<input id = 'K_BAN_ref' disabled style='Display:None'>"+
			"<button class = 'button1' type = 'submit' id = 'K_BAN_gen' >Billing Account</button>"+
			"</td>	"+
		"</tr>"+
		"</tbody>"+
		"</table><H4 style = 'background-color:black;color:white;'>&nbsp&nbsp Billing Account Details for Customer " + billacc + ": </H4><table><tbody> //</tbody></table><div id = 'billacc"+billacc+"' style ='display:none'></div>";
		
	}
	custdiv.innerHTML = custhtml;
	custdiv.innerHTML = custhtml;
	if(custelement.value != '')
	{
		document.getElementById('customerdetails').style.display = 'inline';
	}
	else
	{get
		document.getElementById('customerdetails').style.display = 'none';
	}
}

// end

function RunDBGen(clickele)
{
	document.getElementById('dwdexcel').style.display = 'inline';
	var validat = 'true';
	if(document.getElementById('customerdetails').style.display === 'none')
	{
		if(document.getElementById('custacc').value === "")
		{
			alertify.alert('Please enter the number of Customer Account');
			validat = 'false';
		}
	}
	else
	{
		var elemets = document.getElementsByClassName('inputrequired');
		for(var ele = 1;ele<elemets.length;ele++)
		{
			if(elemets[ele].value === "")
			{
				alertify.alert(elemets[ele].name + " is a Mandatory Field");
				validat = 'false';				
			}
		}
	}
	if(validat === 'true')
	{
		var iplist = document.getElementsByTagName('input');
		var customeracccount = document.getElementById('custacc');
		var custaccnum = parseInt(customeracccount.value);
		var custlis = [];
		var businesslis = [];
		var siteacclis = [];
		var currtitle ='';
		var fpassval = customeracccount.name+'>'+custaccnum+'>>';
		//alert(fpassval);
		for(var currcust = 0;currcust<=custaccnum-1;currcust++)
		{
			custlis[currcust] = '';
			businesslis[currcust] = '';
			siteacclis[currcust] = '';
		}
		for (var currtag = 0;currtag<iplist.length;currtag++)
		{
			//alert(iplist[currtag].value);
			currtitle = iplist[currtag].title;
			currtitlearr = currtitle.split('||');
			caccnum = currtitlearr[0];
			baccnum = '';
			siteaccnum = '';
			if(currtitlearr.length ===2)
			{
				baccnum = currtitlearr[1];
				businesslis[caccnum-1] = businesslis[caccnum-1]+baccnum+'--'+iplist[currtag].name+'>'+iplist[currtag].value+'|';
			}
			else if(currtitlearr.length ===3)
			{
				baccnum = currtitlearr[1];
				siteaccnum = currtitlearr[2];
				siteacclis[caccnum-1] = siteacclis[caccnum-1]+baccnum+'--'+siteaccnum+'$$S'+iplist[currtag].name+'>'+iplist[currtag].value+'|';
			}
			else
			{
				if(custlis[caccnum-1] === '')
				{
					custlis[caccnum-1] = iplist[currtag].name+'>'+iplist[currtag].value+'|';
				}
				else
				{
					custlis[caccnum-1]  = custlis[caccnum-1]+iplist[currtag].name+'>'+iplist[currtag].value+'|';
				}
			}
		}
		var sellist = document.getElementsByTagName('select');
		for (var currtag = 0;currtag<sellist.length;currtag++)
		{	
			currtitle = sellist[currtag].title;
			currtitlearr = currtitle.split('||');
			caccnum = currtitlearr[0];
			if(currtitlearr.length ===2)
			{
				baccnum = currtitlearr[1];
			}
			else
			{
				custlis[caccnum-1]  = custlis[caccnum-1]+sellist[currtag].name+'>'+sellist[currtag].value+"|";
			}
		}
		for(var currcust = 0;currcust<=custaccnum-1;currcust++)
		{
			fpassval = fpassval+custlis[currcust]+businesslis[currcust]+siteacclis[currcust]+'>>';
		}
		var oReq = new XMLHttpRequest();
		if(clickele.id === 'kenan')
		{
			oReq.open("GET", '/WriteExcel?retval='+fpassval);
		}
		else
		{
			oReq.open("GET", '/WriteBPFExcel?retval='+fpassval);
		}
		oReq.send();

	}
}

function getopcomainjs()
{
	getproposition();
	getusername();
	//get_country_ntk();
	//getservicetype();
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getopco');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById('OPCOsel');
	var rownum = '1';
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].OPCO_Description;
				newOption.innerText = responseJson[currele].OPCO_Description;
				opcodropdown.appendChild(newOption);
			}
        }
    };
	oReq.send();

}

function get_country(row_ref){
	var rownum = row_ref;
	//alert('sourcecountry'+rownum)
	//if(count_src.length ==1){
		var oReq1 = new XMLHttpRequest();
		oReq1.open("GET", '/getntwrkcountry');
		var newlist = document.getElementById('sourcecountry'+rownum);
		$('#sourcecountry'+rownum).selectize()[0].selectize.destroy();
		newlist.options.length = 0;
		oReq1.onreadystatechange = function () {
		if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
			//newOption = document.createElement('option');
			//newOption.value ='Please Select';
			//newOption.innerText = 'Please Select';
			//newlist.appendChild(newOption);
			console.log(oReq1.responseText);
			var reponsetxt1 = oReq1.responseText
			var responseJson1 = JSON.parse(reponsetxt1);
			var jsonlen1 = responseJson1.length
			for(var currele = 0;currele<jsonlen1;currele++)
			{
				newOption = document.createElement('option');
				newOption.innerText = responseJson1[currele].country;
				newOption.value = responseJson1[currele].country;
				newlist.appendChild(newOption);
			}
			$('#sourcecountry'+rownum).selectize();
			for(var currele = 0;currele<jsonlen1;currele++)
			{
				newOption = document.createElement('option');
				newOption.innerText = responseJson1[currele].country;
				newOption.value = responseJson1[currele].country;
				newlist.appendChild(newOption);
			}
		}
	 };
	 oReq1.send();
	//}
	
	//if(count_tgt.length ==1){	
		var oReq2 = new XMLHttpRequest();
		oReq2.open("GET", '/getntwrkcountry');
		
		var newlist1 = document.getElementById('targetcountry'+rownum);
		$('#targetcountry'+rownum).selectize()[0].selectize.destroy();
		oReq2.onreadystatechange = function () {
		if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {
			console.log(oReq2.responseText);
			var reponsetxt2 = oReq2.responseText
			var responseJson2 = JSON.parse(reponsetxt2);
			var jsonlen2 = responseJson2.length
			//newOption = document.createElement('option');
			//newOption.value ='Please Select';
			//newOption.innerText = 'Please Select';
			//newlist1.appendChild(newOption);
			for(var currele = 0;currele<jsonlen2;currele++)
			{
				newOption = document.createElement('option');
				newOption.innerText = responseJson2[currele].country;
				newOption.value = responseJson2[currele].country;
				newlist1.appendChild(newOption);
			}
			$('#targetcountry'+rownum).selectize();
			for(var currele = 0;currele<jsonlen2;currele++)
			{
				newOption = document.createElement('option');
				newOption.innerText = responseJson2[currele].country;
				newOption.value = responseJson2[currele].country;
				newlist1.appendChild(newOption);
			}
		}
			
	 };
	 oReq2.send();
	//}	


}

//Function to erase the source network, tadig code, mccmnc on change of source country

function clean_srccntry_dep(countryid)
{

	if(countryid.indexOf("sourcecountry") != -1)
	{
		var spltval1 = countryid.split("sourcecountry");
		//var ntwrkfieldid1 = "sourcenetwork"+spltval1[1];
		var tadigid = "tadigcode"+spltval1[1];
		var mccmncid = "nccnmc"+spltval1[1];

		$('#sourcenetwork'+spltval1[1]).selectize({placeholder:'Please Select',create:true});	
		
		//document.getElementById(ntwrkfieldid1).value = '';
		document.getElementById(tadigid).value = '';
		document.getElementById(mccmncid).value = '';
	}


}


//Function to erase the source network, tadig code, mccmnc on change of Target country

function clean_tgtcntry_dep(countryid)
{

	if(countryid.indexOf("targetcountry") != -1)
	{
		var spltval1 = countryid.split("targetcountry");
		//var ntwrkfieldid1 = "targetnetwork"+spltval1[1];
		var tadigid = "tadigcode"+spltval1[1];
		var mccmncid = "nccnmc"+spltval1[1];
		//var $select = $('#targetnetwork'+spltval1[1]).selectize();
		//$select[0].selectize.setValue('');
		
		$('#targetnetwork'+spltval1[1]).selectize({placeholder:'Please Select',create:true});
		//document.getElementById(ntwrkfieldid1).value = '';
		document.getElementById(tadigid).value = '';
		document.getElementById(mccmncid).value = '';
	}


}

/*function getcountryntwrk(countryid)
{
	var spltval;
	var networkid;
	var cntryval = document.getElementById(countryid).value;
	var ntwrkfieldid;
	if(countryid.indexOf("sourcecountry") != -1)
	{
		//call clear dependencies of source country
		clean_srccntry_dep(countryid)
		spltval = countryid.split("sourcecountry");
		networkid = "srcnetworkdl"+spltval[1];
		ntwrkfieldid = "sourcenetwork"+spltval[1];
	}
	else if(countryid.indexOf("targetcountry") != -1)
	{
		//call clear dependencies of source country
		clean_tgtcntry_dep(countryid)
		spltval = countryid.split("targetcountry");
		networkid = "tgtnetworkdl"+spltval[1];
		ntwrkfieldid = "targetnetwork"+spltval[1];
	}
	var oReq1 = new XMLHttpRequest();
	oReq1.open("GET", '/getntwrkname?retval='+cntryval);
	var divid = document.getElementById('content');
	var newlist;
	if(document.getElementById(networkid) == null)
	{
		newlist = document.createElement('DATALIST');
		newlist.id = networkid;
		divid.appendChild(newlist);
	}
	else
	{
		newlist = document.getElementById(networkid);
		divid.removeChild(newlist);
		newlist = '';
		newlist = document.createElement('DATALIST');
		newlist.id = networkid;
		divid.appendChild(newlist);
	}
	document.getElementById(ntwrkfieldid).setAttribute("list",networkid);
	oReq1.onreadystatechange = function () {
    if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
		console.log(oReq1.responseText);
		reponsetxt = oReq1.responseText
		responseJson = JSON.parse(reponsetxt);
		jsonlen = responseJson.length
		for(var currele = 0;currele<jsonlen;currele++)
		{
			newOption = document.createElement('option');
			//newOption.value = responseJson[currele].kenan_usg_description;
			newOption.innerText = responseJson[currele].network;
			newOption.value = responseJson[currele].network;
			newlist.appendChild(newOption);
		}
	}
	};
	oReq1.send();
}*/

/*function getmccmnc(ntwrkid)
{
	var currrow;
	var currchange;
	var country;
	var network;
	if(ntwrkid.indexOf("sourcenetwork") != -1)
	{
		spltval = ntwrkid.split("sourcenetwork");
		currrow = spltval[1];
		currchange = "src";
	}
	else if(ntwrkid.indexOf("targetnetwork") != -1)
	{
		spltval = ntwrkid.split("targetnetwork");
		currrow = spltval[1];
		currchange = "tgt";
	}
	var momt = document.getElementById("momt"+currrow).value;
	var roamtype = document.getElementById("roaming"+currrow).value;
	
	if((roamtype == "N" || roamtype == "I") && momt == "MT")
	{
		country = document.getElementById("targetcountry"+currrow).value;
		network = document.getElementById("targetnetwork"+currrow).value;
	}
	else
	{
		country = document.getElementById("sourcecountry"+currrow).value;
		network = document.getElementById("sourcenetwork"+currrow).value;
	}
	if(country != "" && network!='' )
	{
		var passparam = '[{"country":"'+country+'","network":"'+network+'"}]';
		var oReq1 = new XMLHttpRequest();
		oReq1.open("GET", '/getmccmnc?retval='+passparam);
		oReq1.onreadystatechange = function () {
		if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
			console.log(oReq1.responseText);
			reponsetxt = oReq1.responseText
			responseJson = JSON.parse(reponsetxt);
			document.getElementById("tadigcode"+currrow).value = responseJson[0].plmn_code;
			document.getElementById("nccnmc"+currrow).value = responseJson[0].mcc_mnc;
		}
		};
		oReq1.send();	
	}
}*/
/*
function getcountryntwrk(countryid)
{
	var spltval;
	var networkid;
	var cntryval = document.getElementById(countryid).value;
	var ntwrkfieldid;
	var dlistid;
	var $select;

	if(countryid.indexOf("sourcecountry") != -1)
	{
		spltval = countryid.split("sourcecountry");
		rownum=spltval[1]
		document.getElementById("tadigcode"+rownum).value = '';
		document.getElementById("nccnmc"+rownum).value = '';
		$('#sourcenetwork'+rownum).selectize()[0].selectize.destroy();	
		dlistid = document.getElementById('sourcenetwork'+rownum);
		dlistid.options.length = 0
	}
	else if(countryid.indexOf("targetcountry") != -1)
	{
		clean_tgtcntry_dep(countryid)
		spltval = countryid.split("targetcountry");
		rownum=spltval[1]
		document.getElementById("tadigcode"+rownum).value = '';
		document.getElementById("nccnmc"+rownum).value = '';
		$('#targetnetwork'+rownum).selectize()[0].selectize.destroy();
		dlistid = document.getElementById('targetnetwork'+rownum);
		dlistid.options.length = 0
	}
	if(cntryval!=''){	
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getntwrkname?retval='+cntryval);
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
				console.log(oReq1.responseText);
				reponsetxt = oReq1.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				//newOption = document.createElement('option');
				//newOption.value ='Please Select';
				//newOption.innerText = 'Please Select';
				//dlistid.appendChild(newOption);
				for(var currele = 0;currele<jsonlen;currele++)
				{
					newOption = document.createElement('option');
					newOption.innerText = responseJson[currele].network;
					newOption.value = responseJson[currele].network;
					dlistid.appendChild(newOption);
				}	
				
			if(countryid.indexOf("sourcecountry") != -1)
			{
				$select = $('#sourcenetwork'+rownum).selectize();
				$select[0].selectize.setValue('');			
				$('#sourcenetwork'+rownum).selectize({placeholder:'Please Select',create:true});
			}
			else if(countryid.indexOf("targetcountry") != -1)
			{
				$select = $('#targetnetwork'+rownum).selectize();
				$select[0].selectize.setValue('');					
				$('#targetnetwork'+rownum).selectize({placeholder:'Please Select',create:true});
			}	
			}
			};
			oReq1.send();
	}else if (cntryval ==''){
			if(countryid.indexOf("sourcecountry") != -1)
			{
				dlistid.options.length = 0	
				$('#sourcenetwork'+rownum).selectize({placeholder:'Please Select',create:true});
				document.getElementById("tadigcode"+rownum).value = '';
				document.getElementById("nccnmc"+rownum).value = '';				
			}
			else if(countryid.indexOf("targetcountry") != -1)
			{
				dlistid.options.length = 0
				$('#targetnetwork'+rownum).selectize({placeholder:'Please Select',create:true});
				document.getElementById("tadigcode"+rownum).value = '';
				document.getElementById("nccnmc"+rownum).value = '';				
			}
}
*/



function getcountryntwrk(countryid)
{
	var spltval;
	var networkid;
	var cntryval = document.getElementById(countryid).value;
	var ntwrkfieldid;
	var dlistid;
	var $select;

	if(countryid.indexOf("sourcecountry") != -1)
	{
		spltval = countryid.split("sourcecountry");
		rownum=spltval[1]
		document.getElementById("tadigcode"+rownum).value = '';
		document.getElementById("nccnmc"+rownum).value = '';
		$('#sourcenetwork'+rownum).selectize()[0].selectize.destroy();	
		dlistid = document.getElementById('sourcenetwork'+rownum);
		dlistid.options.length = 0
	}
	else if(countryid.indexOf("targetcountry") != -1)
	{
		clean_tgtcntry_dep(countryid)
		spltval = countryid.split("targetcountry");
		rownum=spltval[1]
		document.getElementById("tadigcode"+rownum).value = '';
		document.getElementById("nccnmc"+rownum).value = '';
		$('#targetnetwork'+rownum).selectize()[0].selectize.destroy();
		dlistid = document.getElementById('targetnetwork'+rownum);
		dlistid.options.length = 0
	}
	if(cntryval!=''){
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getntwrkname?retval='+cntryval);
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
				console.log(oReq1.responseText);
				reponsetxt = oReq1.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				var finalval = ''
				//newOption = document.createElement('option');
				//newOption.value ='Please Select';
				//newOption.innerText = 'Please Select';
				//dlistid.appendChild(newOption);
				for(var currele = 0;currele<jsonlen;currele++)
				{
					newOption = document.createElement('option');
					newOption.innerText = responseJson[currele].network;
					newOption.value = responseJson[currele].network;
					dlistid.appendChild(newOption);
					finalval = responseJson[currele].network;
				}	
				
			if(countryid.indexOf("sourcecountry") != -1)
			{	
				$select = $('#sourcenetwork'+rownum).selectize();
				$select[0].selectize.setValue(finalval);			
				$('#sourcenetwork'+rownum).selectize({placeholder:'Please Select',create:true});
			}
			else if(countryid.indexOf("targetcountry") != -1)
			{
				$select = $('#targetnetwork'+rownum).selectize();
				$select[0].selectize.setValue(finalval);					
				$('#targetnetwork'+rownum).selectize({placeholder:'Please Select',create:true});
			}	
			}
			};
			oReq1.send();
	}else if (cntryval ==''){
			if(countryid.indexOf("sourcecountry") != -1)
			{
				dlistid.options.length = 0	
				$('#sourcenetwork'+rownum).selectize({placeholder:'Please Select',create:true});
				document.getElementById("tadigcode"+rownum).value = '';
				document.getElementById("nccnmc"+rownum).value = '';				
			}
			else if(countryid.indexOf("targetcountry") != -1)
			{
				dlistid.options.length = 0
				$('#targetnetwork'+rownum).selectize({placeholder:'Please Select',create:true});
				document.getElementById("tadigcode"+rownum).value = '';
				document.getElementById("nccnmc"+rownum).value = '';				
			}		
	}
}

			
function getmccmnc(ntwrkid)
{
	var currrow1;
	var spltvl;

	if(ntwrkid.indexOf("sourcenetwork") != -1)
	{
		spltvl = ntwrkid.split("sourcenetwork");
		currrow1 = spltvl[1];
		
	}
	else if(ntwrkid.indexOf("targetnetwork") != -1)
	{
		spltvl = ntwrkid.split("targetnetwork");
		currrow1 = spltvl[1];		
	}

var Opco = document.getElementById('OPCOsel').value;
var VGE_ITEMNAME = document.getElementById('usagetype'+currrow1).value;
var oReq4 = new XMLHttpRequest();
var vgecode = document.getElementById('nusgcode'+currrow1).value;
if(Opco != 'Please Select'){
		oReq4.open("GET", '/getopcocode?retval='+Opco);
		oReq4.onreadystatechange = function () {
		if(oReq4.readyState === XMLHttpRequest.DONE && oReq4.status === 200) {
		reponsetxt4 = oReq4.responseText;
		opcoarr = reponsetxt4.split('||');
		opcocode = opcoarr[1].split('_');
		countrycode = opcocode[1]
		console.log(reponsetxt4);
		var tatjson = '[{"countrycode":"'+countrycode+'","VGEcode":"'+vgecode+'"}]';
		var oReq3 = new XMLHttpRequest();
		oReq3.open("GET", '/getannotationspec?retval='+tatjson);
		oReq3.onreadystatechange = function () {
		if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
		console.log(oReq3.responseText);
		if(oReq3.responseText=="Not_Found"){
		alertify.alert('Annotation template is not available, please insert annotation manually ')//('Specification Not found for this usage type .!!')
		return;
		}else{ 
		reponsetxt3 = oReq3.responseText
		responseJson1 = JSON.parse(reponsetxt3);

							var j;
							var flag;
							if(responseJson1.length==1){
								j=0;
								flag= false;
								if((responseJson1[0].vge_item_name)== VGE_ITEMNAME){
									j=0;
									flag = true;
								}
								if(flag == false){
									alertify.alert('Annotation template mismatch for the selected usage type, please insert annotation manually ')//('Couldn`t find the ref key in spec .!!!')
									return;
								}												
						}else if(responseJson1.length>1){
								 flag = false;
								if(flag == false){
									for(var i=0;i<responseJson1.length;i++){
										console.log(((responseJson1[i].vge_item_name).replace(/\Voice - /g, ''))+','+VGE_ITEMNAME);
										if(((responseJson1[i].vge_item_name).replace(/\Voice - /g, '')) == VGE_ITEMNAME){
											j=i;
											flag = true;
											break;
										}
									}
									if(flag == false){
										alertify.alert ('Annotation template mismatch for the selected usage type, please insert annotation manually ') //('Couldn`t find the ref key in spec .!!!')
										return;
									}
								}
							}

							
		if((responseJson1[j].mccmnc != "NULL" || responseJson1[j].tadig != "NULL"))
		{	
			var currrow;
			var currchange;
			var country;
			var network;
			if(ntwrkid.indexOf("sourcenetwork") != -1)
			{
				spltval = ntwrkid.split("sourcenetwork");
				currrow = spltval[1];
				currchange = "src";
			}
			else if(ntwrkid.indexOf("targetnetwork") != -1)
			{
				spltval = ntwrkid.split("targetnetwork");
				currrow = spltval[1];
				currchange = "tgt";
			}
			var momt = document.getElementById("momt"+currrow).value;
			var roamtype = document.getElementById("roaming"+currrow).value;
			
			//alert(document.getElementById("targetcountry"+currrow).value);
			//alert(document.getElementById("sourcecountry"+currrow).value);
			
			if((roamtype == "N" || roamtype == "I") && momt == "MT")
			{
				country = document.getElementById("targetcountry"+currrow).value;
				network = document.getElementById("targetnetwork"+currrow).value;
			}
			else
			{
				country = document.getElementById("sourcecountry"+currrow).value;
				network = document.getElementById("sourcenetwork"+currrow).value;
			}
			if( country != '' && network!='' && network!='Please Select'  )
			{
				if(network.indexOf('&')!=-1){
					network = network.replace( /\&/g,'zx');
				}
				console.log('ntk:'+network )
				var passparam = '[{"country":"'+country+'","network":"'+network+'"}]';
				var oReq1 = new XMLHttpRequest();
				oReq1.open("GET", '/getmccmnc?retval='+passparam);
				oReq1.onreadystatechange = function () {
				if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
					console.log(oReq1.responseText);
					reponsetxt = oReq1.responseText
					responseJson = JSON.parse(reponsetxt);
					document.getElementById("tadigcode"+currrow).value = responseJson[0].plmn_code;
					document.getElementById("nccnmc"+currrow).value = responseJson[0].mcc_mnc;
					
					// Check for the custom- tadig inline to specification
					if( (responseJson1[j].tadig).indexOf('VF_')!=-1 || (responseJson1[j].tadig).indexOf('VONE_')!=-1 ){
					    var custom_tadig_header ;
						custom_tadig_header = responseJson1[j].tadig;
						custom_tadig_header = custom_tadig_header.toLowerCase();
						document.getElementById("tadigcode"+currrow).value = responseJson[0][custom_tadig_header];				
					}
					// Check for the custom- mccmnc inline to specification
					if( (responseJson1[j].mccmnc).indexOf('VF_')!=-1 || (responseJson1[j].mccmnc).indexOf('VONE_')!=-1 ){
					    var custom_mccmnc_header ;
						custom_mccmnc_header =  responseJson1[j].mccmnc;
						custom_mccmnc_header =  custom_mccmnc_header.toLowerCase();;
						document.getElementById("nccnmc"+currrow).value = responseJson[0][custom_mccmnc_header];					
					}

					//check for the Specification of Tadig if its NUll in GUI make it Null
					if(responseJson1[j].tadig == "NULL"){
						document.getElementById('tadigcode'+currrow).value = "";
					}	

					// Check for the default values of Tadig/Mccmnc in specification and populate the same
					if((responseJson1[j].tadig).indexOf('NULL')== -1 && (responseJson1[j].tadig).indexOf('VF_')==-1 && (responseJson1[j].tadig).indexOf('VONE_')!='' && (responseJson1[j].tadig).indexOf('PLMN_CODE')==-1){
						document.getElementById('tadigcode'+currrow).value = responseJson1[j].tadig;
					}		
					if((responseJson1[j].mccmnc).indexOf('NULL')== -1 && (responseJson1[j].mccmnc).indexOf('VF_')==-1 && (responseJson1[j].mccmnc).indexOf('VONE_')!='' && (responseJson1[j].mccmnc).indexOf('MCC_MNC')==-1){
						document.getElementById('nccnmc'+currrow).value = responseJson1[j].mccmnc;
					}					
				}
				};
				oReq1.send();	
			}//document.getElementById('timestampwe1').value = "";
		}
		}

		}
		};
		oReq3.send();
		}
		};
		oReq4.send();
	}	
}


function getproposition()
{	
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getProposition');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById('proposition1');
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			var dtlst = document.createElement('DATALIST');
			dtlst.id = 'proposition';
			//opcodropdown.appendChild(dtlst);
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].proposition_desc;
				newOption.innerText = responseJson[currele].proposition_desc;
				opcodropdown.appendChild(newOption);
			}
			//setTimeout(get_country('1'),10000);
        }

    };
	oReq.send();
	
}


function getservicetype(propid)
{
	var opcoval = document.getElementById('OPCOsel').value;
	if(opcoval === 'Please Select')
	{
		alertify.alert('Please select OPCO and proceed')
		document.getElementById(propid).value = 'Please Select'
		return;
	}
	else
	{
	var rownumarr = propid.split('proposition');
	var rownum = rownumarr[1];
	var serviceid = 'servicetype'+rownum
	var propid = document.getElementById(propid);
	var usgobj = document.getElementById('usagetype'+rownum);
	$('#usagetype'+rownum).selectize()[0].selectize.destroy();
	usgobj.options.length = 0;
	newOption1 = document.createElement('option');
	newOption1.value = 'Please Select';
	newOption1.innerText = 'Please Select';
	usgobj.appendChild(newOption1);
	$('#usagetype'+rownum).selectize();
	var divid = document.getElementById("content");
	if(document.getElementById("usagelist"+rownum) != null)
	{
		newlist = document.getElementById("usagelist"+rownum);
		divid.removeChild(newlist);
	}
	
     
	newlist = '';
	document.getElementById("nusgcode"+rownum).value= '';
	document.getElementById("usgcode"+rownum).value='';
	var propval = propid.value;
	var oReq = new XMLHttpRequest();
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById(serviceid);
	opcodropdown.options.length = 0;
	if(propval != 'Please Select' && propval != '' )
	{
		oReq.open("GET", '/getService?retval='+propval);
		oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				if(responseJson[currele].service_type === 'CALL CONFERNCE')
				{
					responseJson[currele].service_type = 'CALL CONFERENCE'
				}
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].service_type;
				newOption.innerText = responseJson[currele].service_type;
				opcodropdown.appendChild(newOption);
			}
		}
    };
	oReq.send();
	}
	else
	{
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
	}
	}
if(document.getElementById("noofcallrec"+rownum).value =='' && document.getElementById("proposition"+rownum).value != 'Please Select')
		{
			document.getElementById("noofcallrec"+rownum).value = 1;
		}}


function displaycontent()
{
	var kenanfiledetails = document.getElementById('fileexists1')
	if(kenanfiledetails.value === 'Yes')
	{
			document.getElementById('content').style.display = 'none';
			document.getElementById('fileexists2').style.display = 'inline';
			document.getElementById('bpffilereqlabel').style.display = 'inline';
			document.getElementById('uploadlabel1').style.display = 'inline';
			document.getElementById('uploadBtn1').style.display = 'inline';
			document.getElementById('generatebpffile').style.display = 'inline';
			document.getElementById('befGenerateFile1').style.display = 'inline';
			document.getElementById('befGenerateFile2').style.display = 'inline';
	}
	else
	{
			document.getElementById('content').style.display = 'inline';
			document.getElementById('fileexists2').style.display = 'none';
			document.getElementById('bpffilereqlabel').style.display = 'none';
			document.getElementById('uploadlabel1').style.display = 'none';
			document.getElementById('uploadBtn1').style.display = 'none';
			document.getElementById('uploadlabel2').style.display = 'none';
			document.getElementById('uploadBtn2').style.display = 'none';
			document.getElementById('generatebpffile').style.display = 'none';
			document.getElementById('befGenerateFile1').style.display = 'none';
			document.getElementById('befGenerateFile2').style.display = 'none';
	}
}
function displaycontentbpf()
{
	
	var kenanfiledetails = document.getElementById('fileexists2')
	if(kenanfiledetails.value === 'Yes')
	{
	
			document.getElementById('uploadlabel2').style.display = 'inline';
			document.getElementById('uploadBtn2').style.display = 'inline';
			document.getElementById('generatebpffile').style.display = 'none';
	}
	else
	{	
			document.getElementById('uploadlabel2').style.display = 'none';
			document.getElementById('uploadBtn2').style.display = 'none';
			document.getElementById('generatebpffile').style.display = 'inline';
	}
}

function RunDBGenBPF()
{
	
}


// **********************************  Custom Functions Sudheer -- MAC file Generation ***************************************

function copyrow_Macfile(pos)
{

	var cpyarr = pos.split('cpy');
	var pos = cpyarr[1];
	var mactable = document.getElementById('mactable');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	var orow = pos;
	var fopt='';
	var fopt1='';
	var fopt2='';
	var fopt3='';
	var servopt = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var prevexispp = $('#Exis_PP_SOC_U'+orow)[0].selectize.options;
	for(k in prevexispp){
		//alert(k);
		fopt = fopt+"<option>"+k+"</options>"
	}
	
	var prevexisppdesc = $('#Exis_PP_SOC_desc'+orow)[0].selectize.options;
	for(k in prevexisppdesc){
		//alert(k);
		fopt1 = fopt1+"<option>"+k+"</options>"
	}
	var prevnewppdesc = $('#New_PP_SOC_desc'+orow)[0].selectize.options;
	for(k in prevnewppdesc){
		//alert(k);
		fopt2 = fopt2+"<option>"+k+"</options>"
	}
	var prevnewpp = $('#New_PP_SOC_U'+orow)[0].selectize.options;
	for(k in prevnewpp){
		//alert(k);
		fopt3 = fopt3+"<option>"+k+"</options>"
	}
	//alert(fopt2);
	console.log("'Mod_date"+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'macgen'id = 'type_of_mod"+newrow+"' style='width:100%'  onchange= \"Clear_exis_values_uk_mac(this.id);MAC_field_level_validation(this.id,'No')\" ><option>Please Select</option><option>Add</option><option>Move</option><option>Terminate</option><option>SOC Add</option><option>SOC Terminate</option>"
	cell1.style.width = '7%';
	cell2.innerHTML = "<input type = 'text' class = 'macgen' id = 'BAN"+newrow+"'  style='width:100%' onblur = 'neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>"
	cell2.style.width = '9.5%';
	/*cell3.innerHTML = "<input type = 'number' class = 'macgen' id = 'MSISDN"+newrow+"' min=\"1\" max=\"9999999999\" style='width:100%' onblur = 'neg_validation_MAC(this.id)'>"
	cell3.style.width = '9%';*/
	cell3.innerHTML = "<input type = 'text' class = 'macgen' id = 'MSISDN"+newrow+"' style='width:100%' onblur = 'neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>"
	cell3.style.width = '9%';
	cell4.innerHTML = "<input type = 'text' class = 'macgen' id = 'Email_add"+newrow+"' style='width:100%;text-transform:uppercase' onchange = 'checkEmail_Mac(this.id);checkusecase(this.id)' >"
	cell4.style.width = '8%';
	cell5.innerHTML = "<Select type = 'text' class = 'macgen'  id = 'Exis_PP_SOC_U"+newrow+"'  style='width:100%'  onchange = 'getPPdesc(this.id)' >"+fopt
	//$('#Exis_PP_SOC_U'+newrow).selectize();
	cell5.style.width = '10%';
	cell6.innerHTML = "<Select type = 'text' class = 'macgen' id = 'Exis_PP_SOC_desc"+newrow+"' style='width:100%'  onchange = 'getPPcode(this.id)'>"+fopt1
	//$('#Exis_PP_SOC_desc'+newrow).selectize();
	cell6.style.width = '13%';
	cell7.innerHTML = "<Select type = 'text' class = 'macgen'  id = 'New_PP_SOC_U"+newrow+"'  style='width:100%'  onchange = 'getPPdesc(this.id)'>"+fopt3
	//$('#New_PP_SOC_U'+newrow).selectize();
	cell7.style.width = '9%';
	cell8.innerHTML = "<Select type = 'text' class = 'macgen'id = 'New_PP_SOC_desc"+newrow+"' style='width:100%'  onchange = 'getPPcode(this.id)'>"+fopt2
	//$('#New_PP_SOC_desc'+newrow).selectize();
	cell8.style.width = '12%';
	cell9.innerHTML = "<input type = 'text' disabled class = 'macgen' id ='Mod_date"+newrow+"' onchange = 'checkusecase(this.id)' style=\"width:80%\"><img class = 'imgcdr_M' src='/ui/images2/cal.gif' id ='Mod_date"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMMyyyy')\" style=\"cursor:pointer\">"
	cell9.style.width = '9.5%';
	cell10.innerHTML = "<td style='width:8%'><input type = 'text' class = 'macgen' id = 'No_of_Rec_Mac"+newrow+"' min=\"1\"  max=\"5000\" style='width:100%' onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' ></td>"	
	cell10.style.width = '8%';
	cell11.innerHTML ="<button style = 'border:none;background:white' class ='copy_Mac' id = 'cpy"+newrow+"' onclick = 'copyrow_Macfile(this.id)'><img src = 'ui/copy.png' id = 'cpy"+newrow+"'  class = 'copy'  title = 'copy previous Row'></button>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' onclick = 'Mac_addnewrow()'><img src = 'ui/add.png' id = 'Add_M"+newrow+"'  class = 'addpng' '></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_M"+newrow+"' class = 'delb_M' onclick = 'Mac_deleterow(this.id)'><img src = 'ui/delete.png' id = 'Del_M"+newrow+"' class = 'delete' ></button>"
	cell13.style.border = 'none';
	cell14.innerHTML = "<td><input type = 'text' class = 'macgen' id = 'mac_senData_ref"+newrow+"' disabled style='display:none'></td>"
	cell14.style.border = 'none';
	console.log("BAN"+newrow);
	console.log('type_of_mod'+newrow);		
	document.getElementById("type_of_mod"+newrow).selectedIndex=document.getElementById("type_of_mod"+orow).selectedIndex
	document.getElementById("BAN"+newrow).value=document.getElementById("BAN"+orow).value
	if(document.getElementById("MSISDN"+orow).value!="" && document.getElementById("MSISDN"+orow).value < 9999999999 ) 
	{
		if(document.getElementById("No_of_Rec_Mac"+orow).value=="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("MSISDN"+orow).value,10);
			document.getElementById("MSISDN"+newrow).value= MSISDN_Incr + 1				
		}
		if(document.getElementById("No_of_Rec_Mac"+orow).value!="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("MSISDN"+orow).value,10);
			var Mac_rec_req = parseInt(document.getElementById("No_of_Rec_Mac"+orow).value,10);
			document.getElementById("MSISDN"+newrow).value= MSISDN_Incr + Mac_rec_req				
		}	
	}
	else
	{
	 document.getElementById("MSISDN"+newrow).value=document.getElementById("MSISDN"+orow).value
	}
	document.getElementById("Email_add"+newrow).value=document.getElementById("Email_add"+orow).value
	MAC_field_level_validation('type_of_mod'+newrow,'yes');	
	 $('#Exis_PP_SOC_U'+newrow).selectize({create:true});
	var $select = $('#Exis_PP_SOC_U'+newrow).selectize();
	var $select1 = $('#Exis_PP_SOC_U'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
    $select[0].selectize.setValue(test);
	var $select2 = $('#Exis_PP_SOC_desc'+newrow).selectize({create:true});
	var $select3 = $('#Exis_PP_SOC_desc'+orow).selectize();
	var selectizeControl1 = $select3[0].selectize
    var test = selectizeControl1.getValue();
	//alert(test);
    $select2[0].selectize.setValue(test);
	var $select4 = $('#New_PP_SOC_U'+newrow).selectize({create:true});
	var $select5 = $('#New_PP_SOC_U'+orow).selectize();
	var selectizeControl2 = $select5[0].selectize
    var test = selectizeControl2.getValue();
	$select4[0].selectize.setValue(test);
	var $select6 = $('#New_PP_SOC_desc'+newrow).selectize({create:true});
	var $select7 = $('#New_PP_SOC_desc'+orow).selectize();
	var selectizeControl3 = $select7[0].selectize
    var test = selectizeControl3.getValue();
	//alert(test);
	$select6[0].selectize.setValue(test);

	document.getElementById("No_of_Rec_Mac"+newrow).value=document.getElementById("No_of_Rec_Mac"+orow).value
	//call the Field validation post copying the row
	
	 document.getElementById("Exis_PP_SOC_U"+newrow).value=document.getElementById("Exis_PP_SOC_U"+orow).value
	 document.getElementById("New_PP_SOC_U"+newrow).value=document.getElementById("New_PP_SOC_U"+orow).value
	 document.getElementById("Exis_PP_SOC_desc"+newrow).value=document.getElementById("Exis_PP_SOC_desc"+orow).value
	 document.getElementById("New_PP_SOC_desc"+newrow).value=document.getElementById("New_PP_SOC_desc"+orow).value
	 if(document.getElementById("Mod_date"+orow).value!='')
	 {
			document.getElementById("Mod_date"+newrow).value= document.getElementById("Mod_date"+orow).value
	 }
	 //Title
	 document.getElementById("MSISDN"+newrow).title = document.getElementById("MSISDN"+newrow).value
	 document.getElementById("Email_add"+newrow).title = document.getElementById("Email_add"+newrow).value
	 $('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
	 
	
	
}


function Mac_addnewrow()
{
	var mactable = document.getElementById('mactable');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);

	console.log("'Mod_date"+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'macgen'id = 'type_of_mod"+newrow+"' style='width:100%'  onchange= \"Clear_exis_values_uk_mac(this.id);MAC_field_level_validation(this.id,'No')\" ><option>Please Select</option><option>Add</option><option>Move</option><option>Terminate</option><option>SOC Add</option><option>SOC Terminate</option>"
	cell1.style.width = '7%';
	cell2.innerHTML = "<input type = 'text' class = 'macgen' id = 'BAN"+newrow+"'  style='width:100%' onblur = 'neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>"
	cell2.style.width = '9.5%';
	/*cell3.innerHTML = "<input type = 'number' class = 'macgen' id = 'MSISDN"+newrow+"' min=\"1\" max=\"9999999999\" style='width:100%' onblur = 'neg_validation_MAC(this.id)'>"
	cell3.style.width = '9%';*/
	cell3.innerHTML = "<input type = 'text' class = 'macgen' id = 'MSISDN"+newrow+"' style='width:100%' onblur = 'neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>"
	cell3.style.width = '9%';
	cell4.innerHTML = "<input type = 'text' class = 'macgen' id = 'Email_add"+newrow+"' style='width:100%;text-transform:uppercase' onchange = 'checkEmail_Mac(this.id);checkusecase(this.id);' >"
	cell4.style.width = '8%';
	cell5.innerHTML = "<Select type = 'text' class = 'macgen'  id = 'Exis_PP_SOC_U"+newrow+"'  style='width:100%'  onchange = 'getPPdesc(this.id)' ><option>Please Select</option>"
	$('#Exis_PP_SOC_U'+newrow).selectize({placeholder:'Please Select',create:true});
	cell5.style.width = '10%';
	cell6.innerHTML = "<Select type = 'text' class = 'macgen' id = 'Exis_PP_SOC_desc"+newrow+"' style='width:100%'  onchange = 'getPPcode(this.id)'><option>Please Select</option>"
	$('#Exis_PP_SOC_desc'+newrow).selectize({placeholder:'Please Select',create:true});
	cell6.style.width = '13%';
	cell7.innerHTML = "<Select type = 'text' class = 'macgen'  id = 'New_PP_SOC_U"+newrow+"'  style='width:100%'  onchange = 'getPPdesc(this.id)'><option>Please Select</option>"
	$('#New_PP_SOC_U'+newrow).selectize({placeholder:'Please Select',create:true});
	cell7.style.width = '9%';
	cell8.innerHTML = "<Select type = 'text' class = 'macgen'id = 'New_PP_SOC_desc"+newrow+"' style='width:100%'  onchange = 'getPPcode(this.id)'><option>Please Select</option>"
	$('#New_PP_SOC_desc'+newrow).selectize({placeholder:'Please Select',create:true});
	cell8.style.width = '12%';
	cell9.innerHTML = "<input type = 'text' disabled class = 'macgen' id ='Mod_date"+newrow+"' onchange = 'checkusecase(this.id)' style=\"width:80%\"><img class = 'imgcdr_M' src='/ui/images2/cal.gif' id ='Mod_date"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMMyyyy')\" style=\"cursor:pointer\">"
	cell9.style.width = '9.5%';
	cell10.innerHTML = "<td style='width:8%'><input type = 'text' class = 'macgen' id = 'No_of_Rec_Mac"+newrow+"' min=\"1\"  max=\"5000\" style='width:100%' onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'></td>"	
	cell10.style.width = '8%';
	cell11.innerHTML ="<button style = 'border:none;background:white'class ='copy_Mac' id = 'cpy"+newrow+"'   onclick = 'copyrow_Macfile(this.id)'><img src = 'ui/copy.png' id = 'cpy"+newrow+"'  class = 'copy'  title = 'copy previous Row'></button>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' onclick = 'Mac_addnewrow()'><img src = 'ui/add.png' id = 'Add_M"+newrow+"'  class = 'addpng' '></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_M"+newrow+"' class = 'delb_M' onclick = 'Mac_deleterow(this.id)'><img src = 'ui/delete.png' class = 'delete' id = 'Del_M"+newrow+"'  ></button>"
	cell13.style.border = 'none';
	cell14.innerHTML = "<td><input type = 'text' class = 'macgen' id = 'mac_senData_ref"+newrow+"' disabled style='display:none'></td>"
	cell14.style.border = 'none';
	console.log("BAN"+newrow);
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

// Function to delete the Mac Field row
function Mac_deleterow(Mac_del_id)
{
	/*var mactable = document.getElementById('mactable');
	mactable.deleteRow(rowid);*/
	//alert(Mac_del_id);	
	var rownumarr = Mac_del_id.split('delbut_M');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var mactable = document.getElementById('mactable');
	var newrow = mactable.rows.length;
	if((newrow === 2)) //|| (Mac_del_id== 'delbut_M1') 
	{
			//alertify.alert('Please Enter minimum one row of data')
			document.getElementById("type_of_mod"+'1').selectedIndex='Please Select'
			document.getElementById("BAN"+'1').value=''
   		    document.getElementById("MSISDN"+'1').value=''
			document.getElementById("Email_add"+'1').value=''
			document.getElementById("No_of_Rec_Mac"+'1').value=''
			MAC_field_level_validation('type_of_mod'+'1','yes');
			$('#Exis_PP_SOC_U1').selectize()[0].selectize.destroy();
			document.getElementById("Exis_PP_SOC_U"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("Exis_PP_SOC_U"+'1').appendChild(newOption1);	
			$('#Exis_PP_SOC_desc1').selectize()[0].selectize.destroy();
			document.getElementById("Exis_PP_SOC_desc"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("Exis_PP_SOC_desc"+'1').appendChild(newOption1);	
			$('#New_PP_SOC_U1').selectize()[0].selectize.destroy();
			document.getElementById("New_PP_SOC_U"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("New_PP_SOC_U"+'1').appendChild(newOption1);	
			$('#New_PP_SOC_desc1').selectize()[0].selectize.destroy();
			document.getElementById("New_PP_SOC_desc"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("New_PP_SOC_desc"+'1').appendChild(newOption1);	
			var $select = $('#'+"New_PP_SOC_U"+'1').selectize({create:true});
			$select[0].selectize.setValue('Please Select');
			var $select = $("#Exis_PP_SOC_desc"+'1').selectize({create:true});
			$select[0].selectize.setValue('Please Select');	
			var $select = $("#New_PP_SOC_desc"+'1').selectize({create:true});
			$select[0].selectize.setValue('Please Select');	
			var $select = $("#Exis_PP_SOC_U"+'1').selectize({create:true});
			$select[0].selectize.setValue('Please Select');	
			//document.getElementById("New_PP_SOC_U"+'1').value='Please Select'
			//document.getElementById("Exis_PP_SOC_desc"+'1').value='Please Select'
			//document.getElementById("New_PP_SOC_desc"+'1').value='Please Select	'
			document.getElementById("Mod_date"+'1').value= ''  
	}
	else
	{
		mactable.deleteRow(rownum);
		var rows = document.getElementsByClassName('delb_M');
		var rval; 
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_M'+rval;
			
		}
		var rows = document.getElementsByClassName('addpng');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			rval =  currow+1;
			rows[currow].id = 'Add_M'+rval;
			
		}
		var rows = document.getElementsByClassName('copy_Mac');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy'+rval;
			
		}
		var rows = document.getElementsByClassName('copy');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy'+rval;
			
		}
		var rows = document.getElementsByClassName('delete');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'Del_M'+rval;
			
		}
		var inputval = document.getElementsByClassName('macgen');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('mac_senData_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'mac_senData_ref'+iprowid;
				iprowid = iprowid+1
				
			}		
			if(inputval[currinput].id.indexOf('type_of_mod') != -1)
			{
				inputval[currinput].id = 'type_of_mod'+iprowid;
			}
			if(inputval[currinput].id.indexOf('BAN') != -1)
			{
				inputval[currinput].id = 'BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('MSISDN') != -1)
			{
				inputval[currinput].id = 'MSISDN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Email_add') != -1)
			{
				inputval[currinput].id = 'Email_add'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Exis_PP_SOC_U') != -1)
			{
				inputval[currinput].id = 'Exis_PP_SOC_U'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Exis_PP_SOC_desc') != -1)
			{
				inputval[currinput].id = 'Exis_PP_SOC_desc'+iprowid;
			}
			if(inputval[currinput].id.indexOf('New_PP_SOC_U') != -1)
			{
				inputval[currinput].id = 'New_PP_SOC_U'+iprowid;
			}
			if(inputval[currinput].id.indexOf('New_PP_SOC_desc') != -1)
			{
				inputval[currinput].id = 'New_PP_SOC_desc'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Mod_date') != -1)
			{
				inputval[currinput].id = 'Mod_date'+iprowid;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_Mac') != -1)
			{
				inputval[currinput].id = 'No_of_Rec_Mac'+iprowid;
			}
	
		}

		var inputval = document.getElementsByClassName('imgcdr_M');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'Mod_date'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((Mac_del_id== 'delbut_M1'))
		{
		  var first_row_b1 = document.getElementById("mactable").rows[1].cells[10];
		  var first_row_b2 = document.getElementById("mactable").rows[1].cells[11];
		  var first_row_b3 = document.getElementById("mactable").rows[1].cells[12];
		  var first_row_b4 = document.getElementById("mactable").rows[1].cells[13];
		  first_row_b1.style.borderTop='1px solid';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b4.style.borderTop='1px solid';
		}
	}
	
}

function MAC_field_level_validation(Use_case_Id,Copy_Row_Flag)
{
	//alert ('Success Entered into Main js ' +Use_case_Id );
	console.log(Use_case_Id);
	//alert('hi entered val');
	
	var row_num_ref = Use_case_Id.split('type_of_mod');
	var rownum = row_num_ref[1];
	if (Copy_Row_Flag === 'No'){
		get_exis_service_price_plan(rownum);
		get_New_service_price_plan(rownum);
	}
	var Exis_PP_ID = "Exis_PP_SOC_U"+rownum;
	var Exis_PP_desc = "Exis_PP_SOC_desc"+rownum;
	var New_PP_ID = "New_PP_SOC_U"+rownum;
	var New_PP_desc = "New_PP_SOC_desc"+rownum;
	var targetid2 = "No_of_Rec_Mac"+rownum;

	var Use_case_field = document.getElementById(Use_case_Id);
	var Use_case_val = Use_case_field.value;
			
	
			if(Use_case_val.indexOf('Add')==0)
			 {
				//alert ('Add');		
				document.getElementById(Exis_PP_ID).value = '';
				document.getElementById(Exis_PP_ID).disabled = true;
				document.getElementById(Exis_PP_desc).value = '';
				document.getElementById(Exis_PP_desc).disabled = true;
				//document.getElementById(New_PP_ID).value = '';
				document.getElementById(New_PP_ID).disabled = false;
				//document.getElementById(New_PP_desc).value = '';
				document.getElementById(New_PP_desc).disabled = false;
				if (Copy_Row_Flag === 'No'){
				//get_New_service_price_plan(Use_case_Id);
				}
			 }
		
			 
			 if(Use_case_val.indexOf('Move')==0)
			{
				//alert ('Modify');
				//document.getElementById(Exis_PP_ID).value = '';
				document.getElementById(Exis_PP_ID).disabled = false;
				//document.getElementById(Exis_PP_desc).value = '';
				document.getElementById(Exis_PP_desc).disabled = false;
				//document.getElementById(New_PP_ID).value = '';
				document.getElementById(New_PP_ID).disabled = false;
				//document.getElementById(New_PP_desc).value = '';
				document.getElementById(New_PP_desc).disabled = false;
				if (Copy_Row_Flag === 'No'){
				  //get_exis_service_price_plan(Use_case_Id);
				  //get_New_service_price_plan(Use_case_Id);
				}
		 
			}
			if(Use_case_val.indexOf('Terminate')==0)
			{
				//alert ('Cease');
				//document.getElementById(Exis_PP_ID).value = '';
				document.getElementById(Exis_PP_ID).disabled = false;
				//document.getElementById(Exis_PP_desc).value = '';
				document.getElementById(Exis_PP_desc).disabled = false;
				document.getElementById(New_PP_ID).value = '';
				document.getElementById(New_PP_ID).disabled = true;
				document.getElementById(New_PP_desc).value = '';
				document.getElementById(New_PP_desc).disabled = true;
				if (Copy_Row_Flag === 'No'){
				  //get_exis_service_price_plan(Use_case_Id);
				}		
			}
			//------------------------------------------------SravaniReddy4-----------------------------------------------------------------------------
			 	 
			 if(Use_case_val.indexOf('SOC Add')==0)
			 {
				//alert ('Add');		
				document.getElementById(Exis_PP_ID).value = '';
				document.getElementById(Exis_PP_ID).disabled = true;
				document.getElementById(Exis_PP_desc).value = '';
				document.getElementById(Exis_PP_desc).disabled = true;
				//document.getElementById(New_PP_ID).value = '';
				document.getElementById(New_PP_ID).disabled = false;
				//document.getElementById(New_PP_desc).value = '';
				document.getElementById(New_PP_desc).disabled = false;
				if (Copy_Row_Flag === 'No'){
				//get_New_service_price_plan(Use_case_Id);
				}
			 }
			if(Use_case_val.indexOf('SOC Terminate')==0)
			{
				//alert ('Cease');
				//document.getElementById(Exis_PP_ID).value = '';
				document.getElementById(Exis_PP_ID).disabled = false;
				//document.getElementById(Exis_PP_desc).value = '';
				document.getElementById(Exis_PP_desc).disabled = false;
				document.getElementById(New_PP_ID).value = '';
				document.getElementById(New_PP_ID).disabled = true;
				document.getElementById(New_PP_desc).value = '';
				document.getElementById(New_PP_desc).disabled = true;
				if (Copy_Row_Flag === 'No'){
				  //get_exis_service_price_plan(Use_case_Id);
				}		
			}
			//------------------------------------------------SravaniReddy4-----------------------------------------------------------------------------
			 
						
			if(Use_case_val === 'Please Select')
			{
				//alert('default block');
				document.getElementById(Exis_PP_ID).value = '';
				document.getElementById(Exis_PP_ID).disabled = false;
				document.getElementById(Exis_PP_desc).value = '';
				document.getElementById(Exis_PP_desc).disabled = false;
				document.getElementById(New_PP_ID).value = '';
				document.getElementById(New_PP_ID).disabled = false;
				document.getElementById(New_PP_desc).value = '';
				document.getElementById(New_PP_desc).disabled = false;

				
			}

		if(Use_case_val!="Please Select" && document.getElementById(targetid2).value == '' )
		{
			document.getElementById(targetid2).value = 1;
			
		}else if(Use_case_val=="Please Select" && document.getElementById(targetid2).value != '')
		{
			//document.getElementById(targetid2).value = '';
		}


			
	}
function Clear_exis_values_uk_mac(Use_case_Id)
{
	var row_num_ref = Use_case_Id.split('type_of_mod');
	var rownum = row_num_ref[1];
		//clear the remaining fields on change of Use-case
			document.getElementById("BAN"+rownum).value='' ;
   		    document.getElementById("MSISDN"+rownum).value='' ;
			document.getElementById("Email_add"+rownum).value='';
			document.getElementById("No_of_Rec_Mac"+rownum).value='';
			document.getElementById("Exis_PP_SOC_U"+rownum).value='';
			document.getElementById("New_PP_SOC_U"+rownum).value='';
			document.getElementById("Exis_PP_SOC_desc"+rownum).value='';
			document.getElementById("New_PP_SOC_desc"+rownum).value='';
			document.getElementById("Mod_date"+rownum).value= ''  ;
}	
//function to get the Proposition Types

function getproposition_Type()
{
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getPropositionTYPE');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	//alert('Hi..');
	var opcodropdown = document.getElementById('proposition_type_B_A1');
	var Buss_case = document.getElementById('Business_S_BPF');	
	var moddrop = document.getElementById('proposition_Mov1');
 	//if(Buss_case =='BPF_ADD')
	//{	
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			//moddrop.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].PROPOSITION_TYPE;
				newOption.innerText = responseJson[currele].PROPOSITION_TYPE;
				opcodropdown.appendChild(newOption);
				//moddrop.appendChild(newOption);
			}
			}
		};
		oReq.send();
	//}
	/*else
	{
		alert('Kindly select the Business case ..!!')
	}*/

}

function getproposition_Typemov()
{
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getPropositionTYPE');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	//alert('Hi..');
	var opcodropdown = document.getElementById('proposition_type_B_A1');
	var Buss_case = document.getElementById('Business_S_BPF');	
	var moddrop = document.getElementById('proposition_Mov1');
 	//if(Buss_case =='BPF_ADD')
	//{	
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			//opcodropdown.appendChild(newOption);
			moddrop.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].PROPOSITION_TYPE;
				newOption.innerText = responseJson[currele].PROPOSITION_TYPE;
				opcodropdown.appendChild(newOption);
				moddrop.appendChild(newOption);
			}
			}
		};
		oReq.send();
		
	//}
	/*else
	{
		alert('Kindly select the Business case ..!!')
	}*/

}

function get_exis_service_price_plan(rownum)  
{

	var divid = document.getElementById('M_content');
	var opco_ref = document.getElementById('OPCOsel_Mac');  
	var dlistid1 = document.getElementById('Exis_PP_SOC_U'+rownum);
	var dlistid2 = document.getElementById('Exis_PP_SOC_desc'+rownum);
	var usecase = document.getElementById('type_of_mod'+rownum);
	var usetype = '';
	$('#Exis_PP_SOC_U'+rownum).selectize()[0].selectize.destroy();
	$('#Exis_PP_SOC_desc'+rownum).selectize()[0].selectize.destroy();
	if(usecase.value.indexOf('SOC') === -1)
	{
		usetype = 'PP_CODE'
	}
	else
	{
		usetype = 'SOC_CODE'
	}
	var opco_val = opco_ref.value+'|'+usetype;
	dlistid1.options.length = 0
	dlistid2.options.length = 0
	//sel.options.length = 0
	if(usecase.value != 'Please Select')
	{
	if(opco_val.indexOf('Please select') == -1)
	{	
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getNewserPP?retval='+opco_val);
		var reponsetxt;
		var responseJson;
		var jsonlen;
		var newOption;

		oReq.onreadystatechange = function () {
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
				
				console.log(oReq.responseText);
				reponsetxt = oReq.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				newOption = document.createElement('option');
					newOption.value ='Please Select';
					newOption.innerText = 'Please Select';
					dlistid1.appendChild(newOption);
					newOption1 = document.createElement('option');  
					newOption1.value = 'Please Select';
					newOption1.innerText = 'Please Select';
					dlistid2.appendChild(newOption1);	
				for(var currele = 0;currele<jsonlen;currele++)
				{
					//console.log(responseJson[currele].price_plan);
					newOption = document.createElement('option');
					newOption.value = responseJson[currele].CODE;
					newOption.innerText = responseJson[currele].CODE;
					dlistid1.appendChild(newOption);

					newOption1 = document.createElement('option');  
					newOption1.value = responseJson[currele].DESCRIP;
					newOption1.innerText = responseJson[currele].DESCRIP;
					dlistid2.appendChild(newOption1);		
				}
				
					dlistid2.appendChild(newOption1);	
				$('#Exis_PP_SOC_U'+rownum).selectize({placeholder:'Please Select',create:true});
				$('#Exis_PP_SOC_desc'+rownum).selectize({placeholder:'Please Select',create:true});
				
			}
		};
		oReq.send();
	}
	else
	{
	  alertify.alert('kindly Select the OPCO .!!')
	 // document.getElementById(usecase_id).options.selectedIndex = '0'; // dddd
	}	
	}
	else
	{
		$('#Exis_PP_SOC_U'+rownum).selectize({placeholder:'Please Select',create:true});
		$('#Exis_PP_SOC_desc'+rownum).selectize({placeholder:'Please Select',create:true});
	}
}


function get_New_service_price_plan(rownum)
{

	var divid = document.getElementById('M_content');
	var opco_ref = document.getElementById('OPCOsel_Mac');  
	var opco_val = opco_ref.value;
	var dlistid1 = document.getElementById('New_PP_SOC_U'+rownum);
	var dlistid2 = document.getElementById('New_PP_SOC_desc'+rownum);
	var usecase = document.getElementById('type_of_mod'+rownum);
	var usetype = '';
	$('#New_PP_SOC_desc'+rownum).selectize()[0].selectize.destroy();
	$('#New_PP_SOC_U'+rownum).selectize()[0].selectize.destroy();
	
	dlistid1.options.length = 0
	dlistid2.options.length = 0
	
	if(usecase.value.indexOf('SOC') == -1)
	{
		usetype = 'PP_CODE'
	}
	else
	{
		usetype = 'SOC_CODE'
	}
	var opco_val = opco_ref.value+'|'+usetype;
	//alert(opco_val);
	//alert(New_ser_PP);
	newOption = document.createElement('option');
	newOption.value ='Please Select';
	newOption.innerText = 'Please Select';
	dlistid1.appendChild(newOption);
	if(usecase.value != 'Please Select')
	{
	if(opco_val.indexOf('Please select') == -1)
	{	
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getexisserPP?retval='+opco_val);
		var reponsetxt;
		var responseJson;
		var jsonlen;
		var newOption;
		//new_pp_dropdown.length = 0;
		//new_pp_DESC.length = 0;
		oReq.onreadystatechange = function () {
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
				
				console.log(oReq.responseText);
				reponsetxt = oReq.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				newOption = document.createElement('option');
				newOption.value ='Please Select';
				newOption.innerText = 'Please Select';
				dlistid1.appendChild(newOption);
				for(var currele = 0;currele<jsonlen;currele++)
				{
					newOption = document.createElement('option');
					newOption.value = responseJson[currele].CODE;
					newOption.innerText = responseJson[currele].CODE;
					dlistid1.appendChild(newOption);
					
				}
				$('#New_PP_SOC_U'+rownum).selectize({placeholder:'Please Select',create:true});
			}
		};
		oReq.send();
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getNewserPPdesc?retval='+opco_val);
			var reponsetxt1;
			var responseJson1;
			var jsonlen1;
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
				
				console.log(oReq1.responseText);
				reponsetxt1 = oReq1.responseText
				responseJson1 = JSON.parse(reponsetxt1);
				jsonlen1 = responseJson1.length
				newOption1 = document.createElement('option');  
				newOption1.value = 'Please Select';
				newOption1.innerText = 'Please Select';
				dlistid2.appendChild(newOption1);
				for(var currele = 0;currele<jsonlen1;currele++)
				{				
					newOption1 = document.createElement('option');
					newOption1.value = responseJson1[currele].DESCRIP;
					newOption1.innerText = responseJson1[currele].DESCRIP;
					dlistid2.appendChild(newOption1);
				}
				
				$('#New_PP_SOC_desc'+rownum).selectize({placeholder:'Please Select',create:true});
			}
			};
			oReq1.send();				
	}
	else
	{
	 // alertify.alert('kindly Select the  OPCO.!!')
	  //document.getElementById(usecase_id).options.selectedIndex = '0';
	}	
	}
	else
	{
		$('#New_PP_SOC_desc'+rownum).selectize({placeholder:'Please Select',create:true});
		$('#New_PP_SOC_U'+rownum).selectize({placeholder:'Please Select',create:true});
	}
}


// Function to retrieve the Existing price-plan based on the use-case and preposition type
/*function get_exis_service_price_plan(rownum)  
{

	var divid = document.getElementById('M_content');
	var opco_ref = document.getElementById('OPCOsel_Mac');  
	var dlistid1 = document.getElementById('Exis_PP_SOC_U'+rownum);
	var dlistid2 = document.getElementById('Exis_PP_SOC_desc'+rownum);
	var usecase = document.getElementById('type_of_mod'+rownum);
	var usetype = '';
	if(usecase.value.indexOf('SOC') === -1)
	{
		usetype = 'PP_CODE'
	}
	else
	{
		usetype = 'SOC_CODE'
	}
	var opco_val = opco_ref.value+'|'+usetype;
	if(opco_val.indexOf('Please select') == -1)
	{	
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getNewserPP?retval='+opco_val);
		var reponsetxt;
		var responseJson;
		var jsonlen;
		var newOption;
		if(document.getElementById("exppdl"+rownum) === null)
		{
			exis_pp_dropdown = document.createElement('DATALIST');
			exis_pp_dropdown.id = "exppdl"+rownum;
			divid.appendChild(exis_pp_dropdown);
		}
		else
		{
			exis_pp_dropdown = document.getElementById("exppdl"+rownum);
			divid.removeChild(exis_pp_dropdown);
			exis_pp_dropdown = '';
			exis_pp_dropdown = document.createElement('DATALIST');
			exis_pp_dropdown.id = "exppdl"+rownum;
			divid.appendChild(exis_pp_dropdown);
		
		}
		if(document.getElementById("exppDESCdl"+rownum) === null)
		{
			exis_pp_desc = document.createElement('DATALIST');
			exis_pp_desc.id = "exppDESCdl"+rownum;
			divid.appendChild(exis_pp_desc);
		}
		else
		{
			exis_pp_desc = document.getElementById("exppDESCdl"+rownum);
			divid.removeChild(exis_pp_desc);
			exis_pp_desc = '';
			exis_pp_desc = document.createElement('DATALIST');
			exis_pp_desc.id = "exppDESCdl"+rownum;
			divid.appendChild(exis_pp_desc);
		
		}
		dlistid1.setAttribute("list","exppdl"+rownum);
		dlistid2.setAttribute("list","exppDESCdl"+rownum);
		//var exis_pp_dropdown = document.getElementById('expp');


		//var exis_pp_desc = document.getElementById('exppDESC');
		//exis_pp_dropdown.length = 0;
		//exis_pp_desc.length = 0;
		oReq.onreadystatechange = function () {
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
				console.log(oReq.responseText);
				reponsetxt = oReq.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				for(var currele = 0;currele<jsonlen;currele++)
				{
					//console.log(responseJson[currele].price_plan);
					newOption = document.createElement('option');
					newOption.value = responseJson[currele].CODE;
					newOption.innerText = responseJson[currele].CODE;
					exis_pp_dropdown.appendChild(newOption);

					newOption1 = document.createElement('option');  
					newOption1.value = responseJson[currele].DESC;
					newOption1.innerText = responseJson[currele].DESC;
					exis_pp_desc.appendChild(newOption1);		
				}
			}
		};
		oReq.send();
	}
	else
	{
	  alertify.alert('kindly Select the OPCO .!!')
	 // document.getElementById(usecase_id).options.selectedIndex = '0'; // dddd
	}	
}*/

// Function to retrieve the New price-plan based on the use-case and preposition type

/*function get_New_service_price_plan(rownum)
{




	var divid = document.getElementById('M_content');
	var opco_ref = document.getElementById('OPCOsel_Mac');  
	var opco_val = opco_ref.value;
	var dlistid1 = document.getElementById('New_PP_SOC_U'+rownum);
	var dlistid2 = document.getElementById('New_PP_SOC_desc'+rownum);
	var usecase = document.getElementById('type_of_mod'+rownum);
	var usetype = '';
	if(usecase.value.indexOf('SOC') == -1)
	{
		usetype = 'PP_CODE'
	}
	else
	{
		usetype = 'SOC_CODE'
	}
	var opco_val = opco_ref.value+'|'+usetype;
	//alert(opco_val);
	//alert(New_ser_PP);
	if(opco_val.indexOf('Please select') == -1)
	{	
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getexisserPP?retval='+opco_val);
		var reponsetxt;
		var responseJson;
		var jsonlen;
		var newOption;
		//var new_pp_dropdown = document.getElementById('newpp');
		//var new_pp_DESC = document.getElementById('newppDESC');
		if(document.getElementById("newdl"+rownum) === null)
		{
			new_pp_dropdown = document.createElement('DATALIST');
			new_pp_dropdown.id = "newdl"+rownum;
			divid.appendChild(new_pp_dropdown);
		}
		else
		{
			new_pp_dropdown = document.getElementById("newdl"+rownum);
			divid.removeChild(new_pp_dropdown);
			new_pp_dropdown = '';
			new_pp_dropdown = document.createElement('DATALIST');
			new_pp_dropdown.id = "newdl"+rownum;
			divid.appendChild(new_pp_dropdown);
		
		}
		if(document.getElementById("newDESCdl"+rownum) === null)
		{
			new_pp_DESC = document.createElement('DATALIST');
			new_pp_DESC.id = "newDESCdl"+rownum;
			divid.appendChild(new_pp_DESC);
		}
		else
		{
			new_pp_DESC = document.getElementById("newDESCdl"+rownum);
			divid.removeChild(new_pp_DESC);
			new_pp_DESC = '';
			new_pp_DESC = document.createElement('DATALIST');
			new_pp_DESC.id = "newDESCdl"+rownum;
			divid.appendChild(new_pp_DESC);
		
		}
		dlistid1.setAttribute("list","newdl"+rownum);
		dlistid2.setAttribute("list","newDESCdl"+rownum);
		//new_pp_dropdown.length = 0;
		//new_pp_DESC.length = 0;
		oReq.onreadystatechange = function () {
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
				console.log(oReq.responseText);
				reponsetxt = oReq.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				
				for(var currele = 0;currele<jsonlen;currele++)
				{
					newOption = document.createElement('option');
					newOption.value = responseJson[currele].CODE;
					newOption.innerText = responseJson[currele].CODE;
					new_pp_dropdown.appendChild(newOption);
					
				}
			}
		};
		oReq.send();
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getNewserPPdesc?retval='+opco_val);
			var reponsetxt1;
			var responseJson1;
			var jsonlen1;
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
				console.log(oReq1.responseText);
				reponsetxt1 = oReq1.responseText
				responseJson1 = JSON.parse(reponsetxt1);
				jsonlen1 = responseJson1.length
				
				for(var currele = 0;currele<jsonlen1;currele++)
				{				
					newOption1 = document.createElement('option');
					newOption1.value = responseJson1[currele].DESC;
					newOption1.innerText = responseJson1[currele].DESC;
					new_pp_DESC.appendChild(newOption1);
				}
			}
			};
			oReq1.send();				
	}
	else
	{
	 // alertify.alert('kindly Select the  OPCO.!!')
	  //document.getElementById(usecase_id).options.selectedIndex = '0';
	}	
}*/

function send_MACdata(src)
{

if (document.getElementById('OPCOsel_Mac').value == "United Kingdom")
{
	// Send Json for UK MAC
	var inputval = document.getElementsByClassName('macgen');

	var allvalavilabe = 'yes';
	var Mod_Type;
	var BillingAccount_Number;
	var MSISDN_Number;
	var Email_addrs;
	var Exist_plan;
	var Exist_plandesc;
	var New_plan;
	var New_plandesc;
	var Mod_date;
	var Mac_rec_count;
	var input = [];

		if(document.getElementById('OPCOsel_Mac').value == "Please select")
		{
			alertify.alert('Please provide the Mandatory Fields (Hint:- OPCO) .!!');
			return;
		}		  	
	
	var jsonstr = '[';
	for(var currinput = 0;currinput<inputval.length;currinput++)
	{
		if(inputval[currinput].id.indexOf('type_of_mod')==0 )
		{		  
		   if(inputval[currinput].value == "Please Select")
			{
				alertify.alert('Please provide the Mandatory Fields (Hint:- Use Case) .!!');
				return;
			}		  
		}
		if(inputval[currinput].id.indexOf('BAN')==0 )
		{		  
		   if(inputval[currinput].value == "")
			{
				alertify.alert('Please provide the Mandatory Fields (Hint:- BAN)  .!!');
				return;
			}		  
		}
		if(inputval[currinput].id.indexOf('MSISDN')==0 )
		{		  
		   if(inputval[currinput].value == "")
			{
				alertify.alert('Please provide the Mandatory Fields (Hint:- MSISDN)  .!!');
				return;
			}		  
		}
		if(inputval[currinput].id.indexOf('Mod_date')==0 )
		{		  
		   if(inputval[currinput].value == "")
			{
				alertify.alert('Please provide the Mandatory Fields (Hint:- Modification Date)  .!!');
				return;
			}		  
		}
			if(inputval[currinput].id.indexOf('mac_senData_ref')==0)
			{
				mac_senData_ref_val=  inputval[currinput].value;
				//- logic to validate the HTML table for MAC
				
					//key logic to validate the exis_pp,exis_pp_des & new_pp,new_pp_des
					var cur_row_ref_id= inputval[currinput].id.split('mac_senData_ref');
					var cur_row_ref= cur_row_ref_id[1];
					var use_cse_ref_id = 'type_of_mod'+cur_row_ref;
					var exis_pp_ref_id = 'Exis_PP_SOC_U'+cur_row_ref;
					var exis_pp_des_ref_id = 'Exis_PP_SOC_desc'+cur_row_ref;
					var New_pp_ref_id = 'New_PP_SOC_U'+cur_row_ref;
					var New_pp_des_ref_id = 'New_PP_SOC_desc'+cur_row_ref;
					var use_cse_ref_val = document.getElementById(use_cse_ref_id).value
					exis_pp_ref_val= document.getElementById(exis_pp_ref_id).value
					exis_pp_des_ref_val= document.getElementById(exis_pp_des_ref_id).value
					New_pp_ref_val= document.getElementById(New_pp_ref_id).value
					New_pp_des_ref_val= document.getElementById(New_pp_des_ref_id).value
					//alert(use_cse_ref_val)
					//alert(New_pp_ref_val);
					if(use_cse_ref_val.indexOf('Add')==0)
					{
						if(New_pp_ref_val=="" || New_pp_ref_val=="Please Select" )
						{
							alertify.alert('Please provide the Mandatory Fields (Hint:- New Price plan)  .!!');
							return;
						}
						/*if(New_pp_des_ref_val=="")
						{
							alert('Please provide the Mandatory Fields (Hint:- New Price plan Description)  .!!');
							return;
						}*/
											
					}
					if(use_cse_ref_val.indexOf('Move')==0)
					{
						if(New_pp_ref_val=="" || New_pp_ref_val=="Please Select" )
						{
							alertify.alert('Please provide the Mandatory Fields (Hint:- New Price plan)  .!!');
							return;
						}
						/*if(New_pp_des_ref_val=="")
						{
							alert('Please provide the Mandatory Fields (Hint:- New Price plan Description)  .!!');
							return;
						}*/
						if(exis_pp_ref_val=="" || exis_pp_ref_val=="Please Select"  )
						{
							alertify.alert('Please provide the Mandatory Fields (Hint:- Existing Price plan)  .!!');
							return;
						}
						/*if(exis_pp_des_ref_val=="")
						{
							alert('Please provide the Mandatory Fields (Hint:- Existing Price plan Description)  .!!');
							return;
						}*/
						//- logic to validate the duplication of Exis, New Price plan, description details in case of move
						if(New_pp_ref_val==exis_pp_ref_val)
						{
							alertify.alert('Please provide the Unique Fields .!! \n (Hint:- Existing and New Price plan values can`t be same for `Move`)');
							return;					 
						} 
						if(New_pp_des_ref_val==exis_pp_des_ref_val)
						{
							alertify.alert('Please provide the Unique Fields .!! \n (Hint:- Existing and New Price plan Description can`t be same for `Move`)');
							return;					 
						} 					
					}
					if(use_cse_ref_val.indexOf('Terminate')==0)
					{
						if(exis_pp_ref_val=="" || exis_pp_ref_val =="Please Select" )
						{
							alertify.alert('Please provide the Mandatory Fields (Hint:- Existing Price plan)  .!!');
							return;
						}
						/*if(exis_pp_des_ref_val=="")
						{
							alert('Please provide the Mandatory Fields (Hint:- Existing Price plan Description)  .!!');
							return;
						}*/	
					}
					// logic to capture the usecase,msisdn,Time-stamp in a Js object
						var temp = Mod_Type+MSISDN_Number+Mod_date;
							if (temp === "" || temp === null) {
							} else {
								input.push(temp);  // the array will dynamically grow
							}
						temp="";
						for(var i = 0; i <= input.length; i++) {
							for(var j = i; j <= input.length; j++) {
								/*if(i != j && input[i] == input[j]) {
									alertify.alert('Kindly Remove the Duplicate Records with same Use-case, MSISDN, Time-stamp .!!');
									return;

								}*/
							}
						}
				//- logic to validate the HTML table for MAC
								
				if(jsonstr !== '[')
				{
					jsonstr= jsonstr + ',';
				}				
				jsonstr = jsonstr+'{"Type_of_Mod":"'+Mod_Type+'","BAN":"'+BillingAccount_Number+'","MSISDN":"'+MSISDN_Number+'","Email_add":"'+Email_addrs+'","Exis_PP_SOC":"'+Exist_plan+'","Exis_PP_SOC_desc":"'+Exist_plandesc+'","New_PP_SOC":"'+New_plan+'","New_PP_SOC_desc":"'+New_plandesc+'","Mod_date":"'+Mod_date+'","Mac_rec_count":"'+Mac_rec_count+'"}'
			}					
					if(inputval[currinput].id.indexOf('type_of_mod')==0)
					{
						Mod_Type=  inputval[currinput].value;
					}		
					if(inputval[currinput].id.indexOf('BAN')==0)
					{
						BillingAccount_Number=  inputval[currinput].value;
					}		
					if(inputval[currinput].id.indexOf('MSISDN')==0)
					{
						MSISDN_Number=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('Email_add')==0)
					{
						Email_addrs=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('Exis_PP_SOC_U')==0)
					{
						Exist_plan=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('Exis_PP_SOC_desc')==0)
					{
						Exist_plandesc=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('New_PP_SOC_U')==0)
					{
						New_plan=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('New_PP_SOC_desc')==0)
					{
						New_plandesc=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('Mod_date')==0)
					{
						Mod_date=  inputval[currinput].value;
					}
					if(inputval[currinput].id.indexOf('No_of_Rec_Mac')==0)
					{
						Mac_rec_count=  inputval[currinput].value;
					}
					

	}				
		jsonstr = jsonstr+']'; 
		console.log(jsonstr);
		//alert(input.length);						
		//alert(jsonstr);
		document.getElementById('provload').style.display = "inline"
		document.getElementById('provmaindiv').style.display = "none"
		var oReq = new XMLHttpRequest();
		oReq.open("GET",'/CreateMAC?retval='+jsonstr);
		oReq.onreadystatechange = function () 
		{
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
					var Mac_file_name = reponsetxt
					document.getElementById('Mac_file_name').value = Mac_file_name;
					setTimeout(function(){ Mac_Dwnlcdr(Mac_file_name); alertify.success("Successfully Generated MAC File");},5000);
				//alert('End to End code Integration for Mac is done, Field validations and logical validations are in progress stay tuned :) .!!!');		

			}
		};
		oReq.send();
	}else if (document.getElementById('OPCOsel_Mac').value == "Germany")
	{		
	// Send Json for Germany MAC
		var inputval = document.getElementsByClassName('DE_macgen');

		var allvalavilabe = 'yes';
		var DE_use_case;
		var DE_BAN ;
		var DE_MSISDN ;
		var DE_Name1 ;
		var DE_Name2 ;
		var DE_eff_date ;
		var DE_cre_date ;
		var DE_Tarrif_code ;
		var DE_Tarrif_code_desc ;
		var DE_Old_value ;
		var DE_No_of_Rec_Mac ;
		var TRANSACTION_TYPE;
		var TRANSACTION_TYPE_DESC;
		var input = [];
		var xhr=[];

			if(document.getElementById('OPCOsel_Mac').value == "")
			{
				alertify.alert('Please provide the Mandatory Fields (Hint:- OPCO) .!!');
				return;
			}		  	
		
		var jsonstr = '[';
		for(var currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('DE_use_case')==0 )
			{		  
			   if(inputval[currinput].value == "Please Select")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Use Case) .!!');
					return;
				}		  
			}
			if(inputval[currinput].id.indexOf('DE_BAN')==0 )
			{		  
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- BAN)  .!!');
					return;
				}		  
			}
			if(inputval[currinput].id.indexOf('DE_MSISDN')==0 )
			{		  
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- MSISDN)  .!!');
					return;
				}		  
			}
			if(inputval[currinput].id.indexOf('DE_eff_date')==0 )
			{		  
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Effective Date)  .!!');
					return;
				}
				var colen_instance = ((inputval[currinput].value).match(/\-/g) || []).length;
				console.log('occurence tag:'+((inputval[currinput].value).match(/\-/g) || []).length);
				if(colen_instance!= 2)
				{
					alertify.alert('Please provide the Correct Date format  (Hint:- Effective Date yyyy-mm-dd)  .!!');
					return;
				}				
			}
			if(inputval[currinput].id.indexOf('DE_cre_date')==0 )
			{		  
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Creation Date)  .!!');
					return;
				}
				var colen_instance = ((inputval[currinput].value).match(/\-/g) || []).length;
				var space_instance = ((inputval[currinput].value).match(/\ /g) || []).length;
				var dot_instance = ((inputval[currinput].value).match(/\:/g) || []).length;
				console.log(colen_instance+'space'+space_instance+'dot'+dot_instance)
				if(colen_instance!= 2  || space_instance!=1 || dot_instance!=2 )
				{
					alertify.alert('Please provide the Correct Date format  (Hint:- Creation Date yyyy-mm-dd hh:mm:ss)  .!!');
					return;
				}				
			}
			if(inputval[currinput].id.indexOf('DE_Tarrif_code')==0 )
			{		  
			   if(inputval[currinput].value == "" || inputval[currinput].value == "Please Select")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Tariff Code)  .!!');
					return;
				}		  
			}
			if(inputval[currinput].id.indexOf('DE_No_of_Rec_Mac')==0 )
			{		  
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- No. of Services)  .!!');
					return;
				}		  
			}			
				if(inputval[currinput].id.indexOf('DE_mac_senData_ref')==0)
				{

									
					if(jsonstr !== '[')
					{
						jsonstr= jsonstr + ',';
					}				
					jsonstr = jsonstr+'{"DE_use_case":"'+DE_use_case+'","TRANSACTION_TYPE":"'+TRANSACTION_TYPE+'","TRANSACTION_TYPE_DESC":"'+TRANSACTION_TYPE_DESC+'","DE_BAN":"'+DE_BAN+'","DE_MSISDN":"'+DE_MSISDN+'","DE_Name1":"'+DE_Name1+'","DE_Name2":"'+DE_Name2+'","DE_eff_date":"'+DE_eff_date+'","DE_cre_date":"'+DE_cre_date+'","DE_Tarrif_code":"'+DE_Tarrif_code+'","DE_Tarrif_code_desc":"'+DE_Tarrif_code_desc+'","DE_Old_value":"'+DE_Old_value+'","DE_No_of_Rec_Mac":"'+DE_No_of_Rec_Mac+'"}'
					
				}					
						if(inputval[currinput].id.indexOf('DE_use_case')==0)
						{
							DE_use_case=  inputval[currinput].value;
																	
						}		
						if(inputval[currinput].id.indexOf('DE_BAN')==0)
						{
							DE_BAN=  inputval[currinput].value;
						}		
						if(inputval[currinput].id.indexOf('DE_MSISDN')==0)
						{
							DE_MSISDN=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_Name1')==0)
						{
							DE_Name1=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_Name2')==0)
						{
							DE_Name2=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_eff_date')==0)
						{
							DE_eff_date=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_cre_date')==0)
						{
							DE_cre_date=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_Tarrif_code')==0)
						{
							DE_Tarrif_code=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_Tarrif_desc')==0)
						{
							DE_Tarrif_code_desc=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_Old_value')==0)
						{
							DE_Old_value=  inputval[currinput].value;
						}						
						if(inputval[currinput].id.indexOf('DE_No_of_Rec_Mac')==0)
						{
							DE_No_of_Rec_Mac=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_mac_pp_val')==0)
						{
							TRANSACTION_TYPE=  inputval[currinput].value;
						}
						if(inputval[currinput].id.indexOf('DE_mac_pp_desc')==0)
						{
							TRANSACTION_TYPE_DESC=  inputval[currinput].value;
						}
		}				
			jsonstr = jsonstr+']'; 
			console.log(jsonstr);
			//alert(input.length);						
			//alert(jsonstr);
			//return;
			document.getElementById('provload').style.display = "inline"
			document.getElementById('provmaindiv').style.display = "none"
			var oReq = new XMLHttpRequest();
			oReq.open("GET",'/CreateMAC_DE?retval='+jsonstr);
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
				{
					reponsetxt = oReq.responseText;
					console.log(reponsetxt);
						var Mac_file_name = reponsetxt
						document.getElementById('DE_Macfile_Name').value = Mac_file_name;
						setTimeout(function(){ Mac_Dwnlcdr(Mac_file_name); alertify.success("Successfully Generated MAC File");},5000);
					//alert('End to End code Integration for Mac is done, Field validations and logical validations are in progress stay tuned :) .!!!');		

				}
			};
			oReq.send();
		
	}else if((document.getElementById('OPCOsel_Mac').value == "Netherland"))
	{
	   var inputval = document.getElementsByClassName('macgen_nl');

	   var allvalavilabe = 'yes';
	   var BillingAccount_Number;
	   var MSISDN_Number;
	   var Date_nL;
	   var PriceP_Name;
	   var PriceP_Desc;
	   var MAC;
	   var Add_onName;
	   var Add_onDesc;
	   var Add_onCondiscn;
	   var Mod_Type;
	   var No_of_Rec_NL
	   var input = [];

		if(document.getElementById('OPCOsel_Mac').value == "Please select")
		{
			alertify.alert('Please provide the Mandatory Fields (Hint:- OPCO) .!!');
			return;
		}
		var jsonstr = '[';
		for(var currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('type_of_mod_NL')==0 )
			{
			   if(inputval[currinput].value == "Please Select")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Use Case) .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('BAN_NL')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- BAN)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('MSISDN_NL')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- MSISDN)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('Mod_date_NL')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Modification Date)  .!!');
					return;
				}
			}
			
			if(inputval[currinput].id.indexOf('PP_NAME_NL')==0 )
			{
			   if(inputval[currinput].value == "" || inputval[currinput].value == "Please Select" )
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Price Plan Name)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('MAC_NL')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- MAC)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('Name_NL')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Add On Name)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('ADD_ON_CON_DISCON_NL')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- ADD ON CON DISCON)  .!!');
					return;
				}
			}
			
			if(inputval[currinput].id.indexOf('mac_senData_NL_ref')==0)
			{
				if(jsonstr !== '[')
				{
								jsonstr= jsonstr + ',';
				}
				jsonstr = jsonstr+'{"type_of_mod_NL":"'+Mod_Type+'","BAN_NL":"'+BillingAccount_Number+'","MSISDN_NL":"'+MSISDN_Number+'","Mac":"'+MAC+'","PP_NAME_NL":"'+PriceP_Name+'","PP_DESC_NL":"'+PriceP_Desc+'","Name_NL":"'+Add_onName+'","Desc_NL":"'+Add_onDesc+'","Mod_date_NL":"'+Date_nL+'","Add_onCondiscn":"'+Add_onCondiscn+'","No_of_Rec_NL":"'+No_of_Rec_NL+'"}'
			}
			
			if(inputval[currinput].id.indexOf('type_of_mod_NL')==0)
			{
							Mod_Type=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('BAN_NL')==0)
			{
							BillingAccount_Number=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('MSISDN_NL')==0)
			{
							MSISDN_Number=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('PP_NAME_NL')==0)
			{
							PriceP_Name=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('PP_DESC_NL')==0)
			{
							PriceP_Desc=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('MAC_NL')==0)
			{
							MAC=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('Name_NL')==0)
			{
							Add_onName=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('Desc_NL')==0)
			{
							Add_onDesc=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('ADD_ON_CON_DISCON_NL')==0)
			{
							Add_onCondiscn=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('Mod_date_NL')==0)
			{
							Date_nL=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_NL')==0)
			{
							No_of_Rec_NL=  inputval[currinput].value;
			}

		}

		jsonstr = jsonstr+']';
		console.log(jsonstr);
		//alert(input.length);
		//alert(jsonstr);
		document.getElementById('provload').style.display = "inline"
		document.getElementById('provmaindiv').style.display = "none"
		var oReq = new XMLHttpRequest();
		oReq.open("GET",'/CreateMAC_NL?retval='+jsonstr);
		oReq.onreadystatechange = function ()
		{
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200)
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
				var Mac_file_name = reponsetxt
				document.getElementById('Macfile_NL').value = Mac_file_name;
				setTimeout(function(){ Mac_Dwnlcdr(Mac_file_name); alertify.success("Successfully Generated MAC File");},5000);
				//alert('End to End code Integration for Mac is done, Field validations and logical validations are in progress stay tuned :) .!!!');

			}
		};
		oReq.send();
	}else if((document.getElementById('OPCOsel_Mac').value == "Ireland"))
	{
	   var inputval = document.getElementsByClassName('macgen_IE');

	   var allvalavilabe = 'yes';
	   var BillingAccount_Number;
	   var MSISDN_Number;
	   var Date_IE;
	   var PriceP_Name;
	   var Bundle_Start_Date;
	   var Eff_End_Date;
	   var Mod_Type;
	   var package_plan_code;
	   var bundle_soc_code;
	   var bundle_soc_description;
	   var No_of_Rec_IE;
	   var input = [];

		if(document.getElementById('OPCOsel_Mac').value == "Please select")
		{
			alertify.alert('Please provide the Mandatory Fields (Hint:- OPCO) .!!');
			return;
		}
		var jsonstr = '[';
		for(var currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('type_of_mod_IE')==0 )
			{
			   if(inputval[currinput].value == "Please Select")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Use Case) .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('BAN_IE')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- BAN)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('MSISDN_IE')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- MSISDN)  .!!');
					return;
				}
			}
			if(inputval[currinput].id.indexOf('Mod_date_IE')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Date)  .!!');
					return;
				}
			}
			
			if(inputval[currinput].id.indexOf('PP_NAME_IE')==0 )
			{
			   if(inputval[currinput].value == "" || inputval[currinput].value == "Please Select")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Price Plan Name)  .!!');
					return;
				}
			}
			/*if(inputval[currinput].id.indexOf('BSD_date_IE')==0 )
			{
			   if(inputval[currinput].value == "")
				{
					alertify.alert('Please provide the Mandatory Fields (Hint:- Bundle Start Date)  .!!');
					return;
				}
			}
			if((inputval[currinput].id.indexOf('EED_date_IE')==0 ) )
			{
			   if(inputval[currinput].value == "" && Mod_Type == 'Terminate' )
				{
					alertify.alert('Please provide Eff End Date .!!');
					return;
				}
			   if(inputval[currinput].value !="" && Mod_Type == 'Add') 
				{
					alertify.alert('Please remove the Eff End Date .!!');
					return;
				}				
			}*/


			
			if(inputval[currinput].id.indexOf('mac_senData_IE_ref')==0)
			{
				if(jsonstr !== '[')
				{
								jsonstr= jsonstr + ',';
				}
				jsonstr = jsonstr+'{"type_of_mod_IE":"'+Mod_Type+'","BAN_IE":"'+BillingAccount_Number+'","MSISDN_IE":"'+MSISDN_Number+'","Mod_date_IE":"'+Date_IE+'","PP_NAME_IE":"'+PriceP_Name+'","package_plan_code":"'+package_plan_code+'","bundle_soc_code":"'+bundle_soc_code+'","bundle_soc_description":"'+bundle_soc_description+'","No_of_Rec_IE":"'+No_of_Rec_IE+'"}'
			}
			
			if(inputval[currinput].id.indexOf('type_of_mod_IE')==0)
			{
							Mod_Type=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('BAN_IE')==0)
			{
							BillingAccount_Number=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('MSISDN_IE')==0)
			{
							MSISDN_Number=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('Mod_date_IE')==0)
			{
							Date_IE=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('PP_NAME_IE')==0)
			{
							PriceP_Name=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('package_plan_code')==0)
			{
							package_plan_code=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('bundle_soc_code')==0)
			{
							bundle_soc_code=  inputval[currinput].value;
			}
			if(inputval[currinput].id.indexOf('bundle_soc_description')==0)
			{
							bundle_soc_description=  inputval[currinput].value;
			}			
			if(inputval[currinput].id.indexOf('No_of_Rec_IE')==0)
			{
							No_of_Rec_IE=  inputval[currinput].value;
			}

		}

		jsonstr = jsonstr+']';
		console.log(jsonstr);
		//alert(input.length);
		//alert(jsonstr);
		document.getElementById('provload').style.display = "inline"
		document.getElementById('provmaindiv').style.display = "none"
		var oReq = new XMLHttpRequest();
		oReq.open("GET",'/CreateMAC_IE?retval='+jsonstr);
		oReq.onreadystatechange = function ()
		{
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200)
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
				var Mac_file_name = reponsetxt
				document.getElementById('Macfile_IE').value = Mac_file_name;
				//alertify.alert('Zip file name is: '+Mac_file_name);
				//return;
				setTimeout(function(){ Mac_Dwnlcdr(Mac_file_name); alertify.success("Successfully Generated MAC File");},5000);
				//alert('End to End code Integration for Mac is done, Field validations and logical validations are in progress stay tuned :) .!!!');

			}
		};
		oReq.send();
	}
		
}


function Mac_Dwnlcdr(filename)
{
	if (document.getElementById('OPCOsel_Mac').value == "United Kingdom")
	{
		filename = document.getElementById('Mac_file_name').value;
	}else if(document.getElementById('OPCOsel_Mac').value == "Germany")
	{
		filename = document.getElementById('DE_Macfile_Name').value;
	}else if(document.getElementById('OPCOsel_Mac').value == "Netherland")
	{
		filename = document.getElementById('Macfile_NL').value;
	}else if(document.getElementById('OPCOsel_Mac').value == "Ireland")
	{
		filename = document.getElementById('Macfile_IE').value;
	}
	
	document.getElementById('dwdlink_M').href = '/getdwnldMAC?retval='+filename
	document.getElementById('dwdlink_M').click();
	document.getElementById('provload').style.display = "none"
	document.getElementById('provmaindiv').style.display = "inline"
}

function getPPdesc(PPid)
{
	var priceplan = document.getElementById(PPid).value;
	var idsplit = PPid.split('PP_SOC_U');
	var rowid = idsplit[1];
	var oReq = new XMLHttpRequest();
	oReq.open("GET",'/GetPPdesc?retval='+priceplan);
	var targetid;
	if(PPid.indexOf('Exis') != -1)
	{
		targetid = 'Exis_PP_SOC_desc'+rowid
	}
	else
	{
		targetid = 'New_PP_SOC_desc'+rowid
	}
	var currppdesc = document.getElementById(targetid).value;
	if(priceplan !='Please Select')
	{
		if(document.getElementById(targetid) != null)
		{
			
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
				{
					reponsetxt = oReq.responseText;
					console.log(reponsetxt);
					var PPdesc = reponsetxt;
					if(PPdesc != '')
					{
					if(currppdesc != PPdesc)
					{
						var $select = $('#'+targetid).selectize();
						$select[0].selectize.setValue(PPdesc); 
					}
					//document.getElementById(targetid).value = PPdesc;
					}
				}
			};
			oReq.send();
		}
	}
	else
	{
		if(currppdesc != 'Please Select')
		{
			var $select = $('#'+targetid).selectize();
			$select[0].selectize.setValue('Please Select'); 
		}	
	}
}
function getPPcode(PPid)
{
	var priceplan = document.getElementById(PPid).value;
	var opco = document.getElementById("OPCOsel_Mac").value;
	var idsplit = PPid.split('PP_SOC_desc');
	var rowid = idsplit[1];
	var targetid;
	if(PPid.indexOf('Exis') != -1)
	{
		targetid = 'Exis_PP_SOC_U'+rowid
	}
	else
	{
		targetid = 'New_PP_SOC_U'+rowid
	}
	var currpriceplan = document.getElementById(targetid).value
	var oReq = new XMLHttpRequest();
	var sendval = priceplan+"|"+opco+"|"+currpriceplan;
	oReq.open("GET",'/GetPPcode?retval='+sendval);
	var currppcode = document.getElementById(targetid).value;
	if(priceplan !='Please Select')
	{
		if(document.getElementById(targetid) != null)
		{
			
			oReq.onreadystatechange = function () 
			{
				if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
					{
						reponsetxt = oReq.responseText;
						console.log(reponsetxt);
						var PPdesc = reponsetxt;
						if(PPdesc != '')
						{
						if(currppcode != PPdesc)
						{
							var $select = $('#'+targetid).selectize();
							$select[0].selectize.setValue(PPdesc); 
						}
						}
						//document.getElementById(targetid).value = PPdesc;
					}
			}	;
			oReq.send();
		}	
	}
	else
	{
		if(currppcode != 'Please Select')
		{
			var $select = $('#'+targetid).selectize();
			$select[0].selectize.setValue('Please Select'); 
		}
	}
}

//Function to validate the fields of MAC file

function neg_validation_MAC(valu)
{
	var This_field_ref =document.getElementById(valu).value
	var This_field_val_Int = This_field_ref
	var This_field_val_Str = This_field_ref.toString();
	

//other MAC validations excluding UK
	
	//Ireland additional validations **************************************************************

	if(( valu.indexOf('BAN_IE')==0))
	{
		var ban_len = This_field_val_Str.length;
		
		if(ban_len>=1){
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f.substring(0,10);
		}
		return;
	}	

	if(( valu.indexOf('MSISDN_IE')==0))
	{
		var msisdn_len = This_field_val_Str.length;
		
		if(msisdn_len>=1){
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f.substring(0,20);
		}

		document.getElementById(valu).title = document.getElementById(valu).value;
		return;
	}	
	if(( valu.indexOf('No_of_Rec_IE')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('No_of_Rec_IE');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'type_of_mod_IE'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
	
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}	

		return;
	}

	/*if(( valu.indexOf('EED_date_IE')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('EED_date_IE');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'type_of_mod_IE'+rowid
		if((document.getElementById(targetid).value =='Please Select') || (document.getElementById(targetid).value =='Add'))
		{
			document.getElementById(valu).value = '';
		}

		return;
	}*/
	

	//Netherland additional validations **************************************************************
	if(( valu.indexOf('BAN_NL')==0))
	{
		var ban_len = This_field_val_Str.length;
		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			//alertify.alert("Please enter a Numeric value in OpCo BAN field .!!")
			//highlightFor(valu,'Moccasin',1);
			document.getElementById(valu).value = ban_val_f.substring(0,10);
			//document.getElementById(valu).value = ban_val_f;
		}
		return;
	}	

	if(( valu.indexOf('MSISDN_NL')==0))
	{
		var msisdn_len = This_field_val_Str.length;
		
		if(msisdn_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			//alertify.alert("Please enter a Numeric value in OpCo BAN field .!!")
			//highlightFor(valu,'Moccasin',1);
			document.getElementById(valu).value = ban_val_f.substring(0,20);
			//document.getElementById(valu).value = ban_val_f;
		}
		document.getElementById(valu).title = document.getElementById(valu).value;
		return;
	}	


	if(( valu.indexOf('No_of_Rec_NL')==0))
	{	

		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('No_of_Rec_NL');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'type_of_mod_NL'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{

			document.getElementById(valu).value = 1;
		}
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}			return;
	}
	



	
	//Germany additional validations  *************************************************************
	if(( valu.indexOf('DE_BAN')==0))
	{

		var ban_len = This_field_val_Str.length;
		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			//alertify.alert("Please enter a Numeric value in OpCo BAN field .!!")
			//highlightFor(valu,'Moccasin',1);
			document.getElementById(valu).value = ban_val_f.substring(0,10);
		}
		return;
	}	

	if(( valu.indexOf('DE_MSISDN')==0))
	{
		var ban_len = This_field_val_Str.length;
		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			//alertify.alert("Please enter a Numeric value in OpCo BAN field .!!")
			//highlightFor(valu,'Moccasin',1);
			document.getElementById(valu).value = ban_val_f.substring(0,17);
		}
		document.getElementById(valu).title = document.getElementById(valu).value;
		return;
	}	
	
	
	if(( valu.indexOf('DE_No_of_Rec_Mac')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('DE_No_of_Rec_Mac');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'DE_use_case'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}			return;
	}
	/*if(( valu.indexOf('DE_BAN')==0))
	{
		var ban_len = This_field_val_Str.length;
		if(ban_len>10){
			document.getElementById(valu).value = This_field_val_Str.substring(0,10);
		}			
	}*/	
	/*if(( valu.indexOf('DE_MSISDN')==0))
	{
		var msisdn_len = This_field_val_Str.length;
		if(msisdn_len>17){
			document.getElementById(valu).value = This_field_val_Str.substring(0,17);
		}		
		return;
	}*/
	if(( valu.indexOf('DE_Name1')==0))
	{
		var name_len = This_field_val_Str.length;
		if(name_len>30){
			document.getElementById(valu).value = This_field_val_Str.substring(0,30);
		}
		document.getElementById(valu).title = document.getElementById(valu).value;
		return;
	}
	if(( valu.indexOf('DE_Name2')==0))
	{
		var name2_len = This_field_val_Str.length;
		if(name2_len>30){
			document.getElementById(valu).value = This_field_val_Str.substring(0,30);
		}
		document.getElementById(valu).title = document.getElementById(valu).value;		
		return;
	}	
	if(( valu.indexOf('DE_Old_value')==0))
	{
		var oldval_len = This_field_val_Str.length;
		if(oldval_len>40){
			document.getElementById(valu).value = This_field_val_Str.substring(0,40);
		}
		document.getElementById(valu).title = document.getElementById(valu).value;
		return;
	}	
	
	//Germany additional validations

	//UK additional validations ***********************************************************

	if(( valu.indexOf('No_of_Rec_Mac')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('No_of_Rec_Mac');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'type_of_mod'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}
		return;
	}

	/*if(valu.indexOf('No_of_Rec_Mac')==0)
	{
		if(document.getElementById(valu).value < 0 || document.getElementById(valu).value > 5000)// || document.getElementById(valu).value.includes('e') || document.getElementById(valu).value.includes('E') || document.getElementById(valu).value.includes('+') || document.getElementById(valu).value.includes('-') || document.getElementById(valu).value.includes('.') || document.getElementById(valu).value.includes('') )
		{
			alertify.alert('Please enter a valid `No. of Services` .!!');
			document.getElementById(valu).value = '';
			return;
		}	
		var num = document.getElementById(valu).value;
		var n = num.toString();
		if( n == "")
		{
			//alert('Please enter a valid BAN number .!!');
			document.getElementById(valu).value = '';
			return;
		}				
	}*/

	if(( valu.indexOf('BAN')==0))


	{
		var ban_len = This_field_val_Str.length;
		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			//alertify.alert("Please enter a Numeric value in OpCo BAN field .!!")
			//highlightFor(valu,'Moccasin',1);
			document.getElementById(valu).value = ban_val_f.substring(0,10);
		}
		return;




	}	
	
	if(( valu.indexOf('MSISDN')==0))
	{
		var ban_len = This_field_val_Str.length;
		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			//alertify.alert("Please enter a Numeric value in OpCo BAN field .!!")
			//highlightFor(valu,'Moccasin',1);
			document.getElementById(valu).value = ban_val_f.substring(0,20);

		}
		document.getElementById(valu).title = document.getElementById(valu).value;
		return;
	}		
	
}


function checkEmail_Mac(valu)
{
    var email = document.getElementById(valu);
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if ( email.value!= '')
  {
    if (!filter.test(email.value))
	{
		//alertify.alert('Please provide a valid email address .!!');
		//document.getElementById(valu).value = '';
		//email.focus;
		//highlightFor(valu,'Moccasin',1);  // green yellow blue magenta cyan gray PaleVioletRed SkyBlue LightSalmon PaleVioletRed
		//return false;
	}
  }
  document.getElementById(valu).title = document.getElementById(valu).value;
}

function highlightFor(id,color,seconds){
    var element = document.getElementById(id)
    var origcolor = element.style.backgroundColor
    element.style.backgroundColor = color;
    var t = setTimeout(function(){
       element.style.backgroundColor = origcolor;
    },(seconds*1000));
}
function Onhover_MAC(ele_id){
     document.getElementById(ele_id).title = document.getElementById(ele_id).value;
}

// ********************************* Denmark_Mac functions **************************************************
function DE_copyrow_Macfile(pos)
{

	var cpyarr = pos.split('DE_cpy');
	var pos = cpyarr[1];
	var mactable = document.getElementById('mactable_DE');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	var orow = pos;
	var fopt='';
    var fopt1='';
	var fopt2='';
	var fopt3='';
	var servopt = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var cell16 = row.insertCell(15);
	var cell17 = row.insertCell(16);
    var prevpp = $('#DE_Tarrif_code'+orow)[0].selectize.options;
	for(k in prevpp){
		//alert(k);
		fopt1 = fopt1+"<option>"+k+"</options>"
	}
	var prevppdesc = $('#DE_Tarrif_desc'+orow)[0].selectize.options;
	for(k in prevppdesc){
		//alert(k);
		fopt2 = fopt2+"<option>"+k+"</options>"
	}
	
	prevprop = document.getElementById("DE_use_case"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"	
		//fopt = "<option>"+prevprop.options[currrow].value+"</options>"
	}
	console.log("'New Denmark Copy row ID:- "+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'DE_macgen'id = 'DE_use_case"+newrow+"' style=\"width:100%\" onchange=\"get_DE_pp_val(this.id);Clear_exis_values_DE_mac(this.id)\" >"+fopt//MAC_field_level_validation('type_of_mod1','No')
	cell1.style.width = '7%';
	cell2.innerHTML = "<input type = 'text'  class = 'DE_macgen' id = 'DE_BAN"+newrow+"' min=\"1\"  max=\"9999999999\" style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' >"  //neg_valid\ation_MAC(this.id)
	cell2.style.width = '9.5%';
	cell3.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_MSISDN"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>" //neg_validation_MAC(this.id)
	cell3.style.width = '7%';
	cell4.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_Name1"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>" //checkEmail_Mac(this.id)
	cell4.style.width = '8%';
	cell5.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_Name2"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>" //checkEmail_Mac(this.id)
	cell5.style.width = '8%';
	cell6.innerHTML = "<input type = 'text'  class = 'DE_macgen' id ='DE_cre_date"+newrow+"' disabled  style=\"width:80%\" onchange = 'checkusecase(this.id)'><img class = 'DE_imgcdr_M_cred' src='/ui/images2/cal.gif' id ='DE_cre_date"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'yyyyMMdd','arrow','true','24','true')\" style=\"cursor:pointer\">"
	cell6.style.width = '9.5%';
	cell7.innerHTML = "<input type = 'text'  class = 'DE_macgen' id ='DE_eff_date"+newrow+"'  disabled style=\"width:80%\" onchange = 'checkusecase(this.id)'><img class = 'DE_imgcdr_M_effd' src='/ui/images2/cal.gif' id ='DE_eff_date"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'yyyyMMdd')\" style=\"cursor:pointer\">"
	cell7.style.width = '9.5%';
	
	cell8.innerHTML = "<Select type = 'text' class = 'DE_macgen'  id = 'DE_Tarrif_code"+newrow+"'  style='width:100%'  onchange = 'getPP_DE(this.id)'>"+fopt1
	//$('#New_PP_SOC_U'+newrow).selectize();
	var $select = $('#DE_Tarrif_code'+newrow).selectize({create:true});
	var $select1 = $('#DE_Tarrif_code'+orow).selectize({create:true});
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
	$select[0].selectize.setValue(test);
	cell8.style.width = '9%';
	cell9.innerHTML = "<Select type = 'text' class = 'DE_macgen' id = 'DE_Tarrif_desc"+newrow+"' style='width:100%'  onchange = 'getPP_desc_DE(this.id)'>"+fopt2
	//$('#New_PP_SOC_desc'+newrow).selectize();
	var $select = $('#DE_Tarrif_desc'+newrow).selectize({create:true});
	var $select1 = $('#DE_Tarrif_desc'+orow).selectize({create:true});
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
	$select[0].selectize.setValue(test);
	
    /*cell8.innerHTML = "<input type = 'text' class = 'DE_macgen' list = 'DE_Tarrif_Lcode' id = 'DE_Tarrif_code"+newrow+"' onchange='getPP_DE(this.id)' style=\"width:100%\"  >"
	cell8.style.width = '10%';
	cell9.innerHTML = "<input type = 'text' class = 'DE_macgen' list = 'DE_Tarrif_Ldesc' id = 'DE_Tarrif_desc"+newrow+"' onchange='getPP_desc_DE(this.id)' style=\"width:100%\" >"
	*/cell9.style.width = '10%';
	cell10.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_Old_value"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)'>" //checkEmail_Mac(this.id)
	cell10.style.width = '8%';
	cell11.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_No_of_Rec_Mac"+newrow+"' min=\"1\"  max=\"5000\" onblur='neg_validation_MAC(this.id)' style=\"width:100%\" onblur='' onchange = 'checkusecase(this.id)'></td>"  // neg_validation_MAC(this.id)
	cell11.style.width = '8%';
	cell12.innerHTML ="<button class ='DE_copy_Mac' id = 'DE_cpy"+newrow+"' title = 'copy previous Row' style = 'border:none;background:white' onclick = 'DE_copyrow_Macfile(this.id)'><img id = 'DE_cpy"+newrow+"' src = 'ui/copy.png' class = 'DE_copy'  style = 'border:none'></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' onclick = 'DE_Mac_addnewrow()'><img src = 'ui/add.png' id = 'DE_Add_M"+newrow+"' class = 'DE_addpng'  style = 'border:none'></button>"
	cell13.style.border = 'none';
	cell14.innerHTML ="<button style = 'border:none;background:white' id = 'DE_delbut_M"+newrow+"' class = 'DE_delb_M' onclick = 'DE_Mac_deleterow(this.id)'><img src = 'ui/delete.png' class = 'DE_delete' id = 'DE_Del_M"+newrow+"' disabled style = 'border:none'  ></button>"
	cell14.style.border = 'none';
	cell15.innerHTML = "<td><input type = 'text' class = 'DE_macgen' id = 'DE_mac_pp_val"+newrow+"' disabled style=\"display:none;\"></td>"
	cell15.style.border = 'none';
	cell16.innerHTML = "<td><input type = 'text' class = 'DE_macgen' id = 'DE_mac_pp_desc"+newrow+"' disabled style=\"display:none;\"></td>"
	cell16.style.border = 'none';
	cell17.innerHTML = "<td><input type = 'text' class = 'DE_macgen' id = 'DE_mac_senData_ref"+newrow+"' disabled style=\"display:none;\"></td>"
	cell17.style.border = 'none';

	document.getElementById("DE_use_case"+newrow).selectedIndex=document.getElementById("DE_use_case"+orow).selectedIndex
	document.getElementById("DE_BAN"+newrow).value=document.getElementById("DE_BAN"+orow).value
	//document.getElementById("DE_MSISDN"+newrow).value=document.getElementById("DE_MSISDN"+orow).value
	document.getElementById("DE_No_of_Rec_Mac"+newrow).value=document.getElementById("DE_No_of_Rec_Mac"+orow).value
	document.getElementById("DE_Name1"+newrow).value=document.getElementById("DE_Name1"+orow).value
	document.getElementById("DE_Name2"+newrow).value=document.getElementById("DE_Name2"+orow).value
	document.getElementById("DE_eff_date"+newrow).value=document.getElementById("DE_eff_date"+orow).value
	document.getElementById("DE_cre_date"+newrow).value=document.getElementById("DE_cre_date"+orow).value
	document.getElementById("DE_Tarrif_code"+newrow).value=document.getElementById("DE_Tarrif_code"+orow).value
	document.getElementById("DE_Tarrif_desc"+newrow).value=document.getElementById("DE_Tarrif_desc"+orow).value
	document.getElementById("DE_Old_value"+newrow).value=document.getElementById("DE_Old_value"+orow).value
	document.getElementById("DE_mac_pp_val"+newrow).value=document.getElementById("DE_mac_pp_val"+orow).value
	document.getElementById("DE_mac_pp_desc"+newrow).value=document.getElementById("DE_mac_pp_desc"+orow).value
	
	if(document.getElementById("DE_MSISDN"+orow).value!="" && document.getElementById("DE_MSISDN"+orow).value < 99999999999999999 ) 
	{
		if(document.getElementById("DE_No_of_Rec_Mac"+orow).value=="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("DE_MSISDN"+orow).value,10);
			document.getElementById("DE_MSISDN"+newrow).value= MSISDN_Incr + 1				
		}
		if(document.getElementById("DE_No_of_Rec_Mac"+orow).value!="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("DE_MSISDN"+orow).value,10);
			var Mac_rec_req = parseInt(document.getElementById("DE_No_of_Rec_Mac"+orow).value,10);
			document.getElementById("DE_MSISDN"+newrow).value= MSISDN_Incr + Mac_rec_req				
		}	
	}
	else
	{
	 document.getElementById("DE_MSISDN"+newrow).value=document.getElementById("DE_MSISDN"+orow).value
	}
	
	Old_value_validation("DE_use_case"+newrow);
	//Title
	document.getElementById("DE_MSISDN"+newrow).title = document.getElementById("DE_MSISDN"+newrow).value
	document.getElementById("DE_Name1"+newrow).title = document.getElementById("DE_Name1"+newrow).value
	document.getElementById("DE_Name2"+newrow).title = document.getElementById("DE_Name2"+newrow).value
	document.getElementById("DE_Old_value"+newrow).title = document.getElementById("DE_Old_value"+newrow).value
$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

function DE_Mac_addnewrow()
{
	var mactable = document.getElementById('mactable_DE');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	var orow = newrow-1;
	var fopt='';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var cell16 = row.insertCell(15);
	var cell17 = row.insertCell(16);
	prevprop = document.getElementById("DE_use_case"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"	
	}	
	
	console.log("'New Denmark Copy row ID:- "+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'DE_macgen'id = 'DE_use_case"+newrow+"' style=\"width:100%\" onchange=\"get_DE_pp_val(this.id);Clear_exis_values_DE_mac(this.id)\" >"+fopt //MAC_field_level_validation('type_of_mod1','No')
	cell1.style.width = '7%';
	cell2.innerHTML = "<input type = 'text'  class = 'DE_macgen' id = 'DE_BAN"+newrow+"' min=\"1\"  max=\"9999999999\" style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' >"  //neg_valid\ation_MAC(this.id)
	cell2.style.width = '9.5%';
	cell3.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_MSISDN"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' >" //neg_validation_MAC(this.id)
	cell3.style.width = '7%';
	cell4.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_Name1"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' >" //checkEmail_Mac(this.id)
	cell4.style.width = '8%';
	cell5.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_Name2"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' >" //checkEmail_Mac(this.id)
	cell5.style.width = '8%';
	cell6.innerHTML = "<input type = 'text'  class = 'DE_macgen' id ='DE_cre_date"+newrow+"'  disabled style=\"width:80%\" onchange = 'checkusecase(this.id)'><img class = 'DE_imgcdr_M_cred' src='/ui/images2/cal.gif' id ='DE_cre_date"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'yyyyMMdd','arrow','true','24','true')\" style=\"cursor:pointer\">"
	cell6.style.width = '9.5%';
	cell7.innerHTML = "<input type = 'text'  class = 'DE_macgen' id ='DE_eff_date"+newrow+"' disabled style=\"width:80%\" onchange = 'checkusecase(this.id)'><img class = 'DE_imgcdr_M_effd' src='/ui/images2/cal.gif' id ='DE_eff_date"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'yyyyMMdd')\" style=\"cursor:pointer\">"
	cell7.style.width = '9.5%';
	cell8.innerHTML = "<Select type = 'text' class = 'DE_macgen'  id = 'DE_Tarrif_code"+newrow+"'  style='width:100%'  onchange = 'getPP_DE(this.id)'><option>Please Select</option>"
	$('#DE_Tarrif_code'+newrow).selectize({placeholder:'Please Select',create:true});
	cell8.style.width = '9%';
	cell9.innerHTML = "<Select type = 'text' class = 'DE_macgen' id = 'DE_Tarrif_desc"+newrow+"' style='width:100%'  onchange = 'getPP_desc_DE(this.id)'><option>Please Select</option>"
	$('#DE_Tarrif_desc'+newrow).selectize({placeholder:'Please Select',create:true});
	/*cell8.innerHTML = "<input type = 'text' class = 'DE_macgen' list = 'DE_Tarrif_Lcode' id = 'DE_Tarrif_code"+newrow+"' onchange='getPP_DE(this.id)' style=\"width:100%\"  >"
	cell8.style.width = '10%';
	cell9.innerHTML = "<input type = 'text' class = 'DE_macgen' list = 'DE_Tarrif_Ldesc' id = 'DE_Tarrif_desc"+newrow+"' onchange='getPP_desc_DE(this.id)' style=\"width:100%\" >"
	*/cell9.style.width = '10%';
	cell10.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_Old_value"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)'onchange = 'checkusecase(this.id)' >" //checkEmail_Mac(this.id)
	cell10.style.width = '8%';
	cell11.innerHTML = "<input type = 'text' class = 'DE_macgen' id = 'DE_No_of_Rec_Mac"+newrow+"' min=\"1\"  max=\"5000\" onblur='neg_validation_MAC(this.id)' onchange = 'checkusecase(this.id)' style=\"width:100%\" onblur='' ></td>"  // neg_validation_MAC(this.id)
	cell11.style.width = '8%';
	cell12.innerHTML ="<button class ='DE_copy_Mac' id = 'DE_cpy"+newrow+"' title = 'copy previous Row' style = 'border:none;background:white' onclick = 'DE_copyrow_Macfile(this.id)'><img id = 'DE_cpy"+newrow+"' src = 'ui/copy.png' class = 'DE_copy'  style = 'border:none'></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' onclick = 'DE_Mac_addnewrow()'><img src = 'ui/add.png' id = 'DE_Add_M"+newrow+"' class = 'DE_addpng'  style = 'border:none'></button>"
	cell13.style.border = 'none';
	cell14.innerHTML ="<button style = 'border:none;background:white' id = 'DE_delbut_M"+newrow+"' class = 'DE_delb_M' onclick = 'DE_Mac_deleterow(this.id)'><img src = 'ui/delete.png' class = 'DE_delete' id = 'DE_Del_M"+newrow+"' disabled style = 'border:none'  ></button>"
	cell14.style.border = 'none';
	cell15.innerHTML = "<td><input type = 'text' class = 'DE_macgen' id = 'DE_mac_pp_val"+newrow+"' disabled style=\"display:none;\"></td>"
	cell15.style.border = 'none';
	cell16.innerHTML = "<td><input type = 'text' class = 'DE_macgen' id = 'DE_mac_pp_desc"+newrow+"' disabled style=\"display:none;\"></td>"
	cell16.style.border = 'none';
	cell17.innerHTML = "<td><input type = 'text' class = 'DE_macgen' id = 'DE_mac_senData_ref"+newrow+"' disabled style=\"display:none;\"></td>"
	cell17.style.border = 'none';
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

// Function to delete the Mac Field row
function DE_Mac_deleterow(Mac_del_id)
{
	/*var mactable = document.getElementById('mactable');
	mactable.deleteRow(rowid);*/
	//alert(Mac_del_id);
	//if(Mac_del_id=='DE_delbut_M1')
	//{ return;}	
	var rownumarr = Mac_del_id.split('DE_delbut_M');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var mactable = document.getElementById('mactable_DE');
	var newrow = mactable.rows.length;
	if((newrow === 2) ) //|| (Mac_del_id=='DE_delbut_M1')
	{
			//alertify.alert('Please Enter minimum one row of data')
			document.getElementById("DE_use_case"+'1').selectedIndex='Please Select'
			document.getElementById("DE_BAN"+'1').value=''
			document.getElementById("DE_No_of_Rec_Mac"+'1').value=''
			document.getElementById("DE_Name1"+'1').value=''
			document.getElementById("DE_Name2"+'1').value=''
			document.getElementById("DE_eff_date"+'1').value=''
			document.getElementById("DE_cre_date"+'1').value=''
			$('#DE_Tarrif_code1').selectize()[0].selectize.destroy();
			document.getElementById("DE_Tarrif_code"+'1').options.length=0;
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("DE_Tarrif_code"+'1').appendChild(newOption1);
			$('#DE_Tarrif_desc1').selectize()[0].selectize.destroy();
			document.getElementById("DE_Tarrif_desc"+'1').options.length=0;
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("DE_Tarrif_desc"+'1').appendChild(newOption1);
			document.getElementById("DE_Old_value"+'1').value=''
			document.getElementById("DE_mac_pp_val"+'1').value=''
			document.getElementById("DE_mac_pp_desc"+'1').value=''
			document.getElementById("DE_MSISDN"+'1').value=''
			Old_value_validation("DE_use_case"+'1');	
			var $select = $('#'+"DE_Tarrif_code"+'1').selectize({create:true});
			$select[0].selectize.setValue('Please Select');			
			var $select = $('#'+"DE_Tarrif_desc"+'1').selectize({create:true});
			$select[0].selectize.setValue('Please Select');
	}
	else
	{
		mactable.deleteRow(rownum);
		var rows = document.getElementsByClassName('DE_delb_M');
		var rval; 
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'DE_delbut_M'+rval;
			
		}
		var rows = document.getElementsByClassName('DE_addpng');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			rval =  currow+1;
			rows[currow].id = 'DE_Add_M'+rval;
			
		}
		var rows = document.getElementsByClassName('DE_copy_Mac');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'DE_cpy'+rval;
			
		}
		var rows = document.getElementsByClassName('DE_copy');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'DE_cpy'+rval;
			
		}
		var rows = document.getElementsByClassName('DE_delete');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'DE_Del_M'+rval;
			
		}
		var inputval = document.getElementsByClassName('DE_macgen');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('DE_mac_senData_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'DE_mac_senData_ref'+iprowid;
				iprowid = iprowid+1
				
			}
			if(inputval[currinput].id.indexOf('DE_use_case') != -1)
			{
				inputval[currinput].id = 'DE_use_case'+iprowid;
			}	
			if(inputval[currinput].id.indexOf('DE_mac_pp_val') != -1)
			{
				inputval[currinput].id = 'DE_mac_pp_val'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('DE_mac_pp_desc') != -1)
			{
				inputval[currinput].id = 'DE_mac_pp_desc'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_BAN') != -1)
			{
				inputval[currinput].id = 'DE_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_MSISDN') != -1)
			{
				inputval[currinput].id = 'DE_MSISDN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_Name1') != -1)
			{
				inputval[currinput].id = 'DE_Name1'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_Name2') != -1)
			{
				inputval[currinput].id = 'DE_Name2'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_eff_date') != -1)
			{
				inputval[currinput].id = 'DE_eff_date'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_cre_date') != -1)
			{
				inputval[currinput].id = 'DE_cre_date'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_Tarrif_code') != -1)
			{
				inputval[currinput].id = 'DE_Tarrif_code'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_Tarrif_desc') != -1)
			{
				inputval[currinput].id = 'DE_Tarrif_desc'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_Old_value') != -1)
			{
				inputval[currinput].id = 'DE_Old_value'+iprowid;
			}
			if(inputval[currinput].id.indexOf('DE_No_of_Rec_Mac') != -1)
			{
				inputval[currinput].id = 'DE_No_of_Rec_Mac'+iprowid;
			}	
		}

		var inputval = document.getElementsByClassName('DE_imgcdr_M_effd');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'DE_eff_date'+iprowid;
			iprowid = iprowid+1;
		}

		var inputval = document.getElementsByClassName('DE_imgcdr_M_cred');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'DE_cre_date'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((Mac_del_id== 'DE_delbut_M1'))
		{
		  var first_row_b1 = document.getElementById("mactable_DE").rows[1].cells[11];
		  var first_row_b2 = document.getElementById("mactable_DE").rows[1].cells[12];
		  var first_row_b3 = document.getElementById("mactable_DE").rows[1].cells[13];
		  var first_row_b4 = document.getElementById("mactable_DE").rows[1].cells[14];
		  var first_row_b5 = document.getElementById("mactable_DE").rows[1].cells[15];
		  var first_row_b6 = document.getElementById("mactable_DE").rows[1].cells[16];
		  first_row_b1.style.borderTop='1px solid';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b5.style.borderTop='1px solid';
		  first_row_b6.style.borderTop='1px solid';
		}
	}
	
}

function get_DE_pp_val(usagecode)
{
	Old_value_validation(usagecode);
	get_price_plan_DE(usagecode);
	
	var usgsplit = usagecode.split('DE_use_case');
	var rownum = usgsplit[1];
	var usageid = 'DE_mac_pp_val'+rownum;
	var nusgid = 'DE_mac_pp_desc'+rownum;
	passval  = document.getElementById(usagecode).value
	if(passval != 'Please Select')
	{
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/get_ger_type_desc_DE?retval='+passval);
		oReq.onreadystatechange = function () {
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
			reponsetxt = oReq.responseText;
			responsesplt = reponsetxt.split("||");
			document.getElementById(usageid).value = responsesplt[0];
			document.getElementById(nusgid).value = responsesplt[1];
			console.log(reponsetxt);
		}
		};
		oReq.send();
	}
	else
	{
			document.getElementById(usageid).value = '';
			document.getElementById(nusgid).value = '';
	}
}
	
	
function Clear_exis_values_DE_mac(usagecode)
{
	var usgsplit = usagecode.split('DE_use_case');
	var rownum = usgsplit[1];
	//alertify.alert('Please Enter minimum one row of data')
	document.getElementById("DE_BAN"+rownum).value='';
	document.getElementById("DE_No_of_Rec_Mac"+rownum).value='';
	document.getElementById("DE_Name1"+rownum).value='';
	document.getElementById("DE_Name2"+rownum).value='';
	document.getElementById("DE_eff_date"+rownum).value='';
	document.getElementById("DE_cre_date"+rownum).value='';
	document.getElementById("DE_Tarrif_code"+rownum).value='';
	document.getElementById("DE_Tarrif_desc"+rownum).value='';
	document.getElementById("DE_Old_value"+rownum).value='';
	document.getElementById("DE_mac_pp_val"+rownum).value='';
	document.getElementById("DE_mac_pp_desc"+rownum).value='';
	document.getElementById("DE_MSISDN"+rownum).value='';
}


function getPP_DE(PPid)
{
	var priceplan = document.getElementById(PPid).value;
	var idsplit = PPid.split('DE_Tarrif_code');
	var rowid = idsplit[1];
	var oReq = new XMLHttpRequest();
	oReq.open("GET",'/GetPP_DE?retval='+priceplan);
	var targetid;
	targetid = 'DE_Tarrif_desc'+rowid
	
	if(document.getElementById(targetid) != null)
	{
	var currppdesc = document.getElementById(targetid).value;
	if(priceplan != 'Please Select')
	{
	oReq.onreadystatechange = function () 
	{
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
				var PPdesc = reponsetxt;
				if(PPdesc != '')
				{
				if(currppdesc != PPdesc)
				{
						var $select = $('#'+targetid).selectize();
						$select[0].selectize.setValue(PPdesc);
											
					
				}
				}
				//document.getElementById(targetid).value = PPdesc;
				
			}
	};
	oReq.send();
	}
	else
	{
		if(currppdesc!= 'Please Select')
		{
			var $select = $('#'+targetid).selectize();
			$select[0].selectize.setValue('Please Select');
		}
	}
	}
}

function getPP_desc_DE(PPid)
{
	var priceplan = document.getElementById(PPid).value;
	var idsplit = PPid.split('DE_Tarrif_desc');

	var rowid = idsplit[1];
	var oReq = new XMLHttpRequest();
	oReq.open("GET",'/GetPP_desc_DE?retval='+priceplan);
	var targetid;
	targetid = 'DE_Tarrif_code'+rowid
	if(document.getElementById(targetid) != null)
	{
	var currppdesc = document.getElementById(targetid).value;
	if(priceplan != 'Please Select')
	{
	oReq.onreadystatechange = function () 
	{
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
				var PPdesc = reponsetxt;
				if(PPdesc != '')
				{
				if(currppdesc != PPdesc)
					{
						var $select = $('#'+targetid).selectize();
						$select[0].selectize.setValue(PPdesc); 
					}
				//document.getElementById(targetid).value = PPdesc;
				}
			}
	};
	oReq.send();
	}
	else
	{
		if(currppdesc!= 'Please Select')
		{
			var $select = $('#'+targetid).selectize();
			$select[0].selectize.setValue('Please Select'); 
		}
	}
	}
}

function Old_value_validation(PPid)
{
	var usecase = document.getElementById(PPid).value;
	var idsplit = PPid.split('DE_use_case');
	var rowid = idsplit[1];
	var targetid;
	var targetid2;
	targetid = 'DE_Old_value'+rowid
	targetid2 = 'DE_No_of_Rec_Mac'+rowid
	if(usecase!="Please Select" && (usecase=="Change MSISDN" || usecase=="Change Tariff" || usecase=="BAN Change" ) )
	{
		document.getElementById(targetid).disabled = false;
		
	}else if(usecase=="Please Select" )
	{
		document.getElementById(targetid).disabled = false;
		document.getElementById(targetid).value = '';
		document.getElementById(targetid2).value = '';
	}
	else{
		document.getElementById(targetid).disabled = true;
		document.getElementById(targetid).value = '';
	}
	if(usecase!="Please Select" && document.getElementById(targetid2).value == '' )
	{
		document.getElementById(targetid2).value = 1;
		
	}
			
}

function Auto_populate_No_of_rec(PPid)
{
	var No_of_rec = document.getElementById(PPid).value;
	var idsplit = PPid.split('DE_No_of_Rec_Mac');
	var rowid = idsplit[1];
	var targetid;
	targetid = 'DE_use_case'+rowid
	if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
	{
		document.getElementById(PPid).value = 1;
	}
		
}	

function eff_date_auto_populate(PPid)
{
	var cre_d = document.getElementById(PPid).value;
	var idsplit = PPid.split('DE_cre_date');
	var rowid = idsplit[1];
	var targetid;
	var eff_date_f;
	targetid = 'DE_eff_date'+rowid
		if(document.getElementById(PPid).value!="")
		{
			var eff_date = (document.getElementById(PPid).value).split(' ');
			eff_date_f = eff_date[0];
			document.getElementById(targetid).value	=	eff_date_f;	
			//document.getElementById(PPid).value = 	eff_date_f+' 00:00:00'
		}	
}

	


// ********************************* Denmark_Mac functions **************************************************
// ********************************* Neitherland_Mac functions **************************************************
function copyrow_Macfile_NL(pos)
{

	var cpyarr = pos.split('cpy_NL');
	var pos = cpyarr[1];
	var mactable = document.getElementById('mactable_NL');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	var orow = pos;
	var fopt='';
	var fopt1 = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var prevnlpp = $('#PP_NAME_NL'+orow)[0].selectize.options;
	for(k in prevnlpp){
		//alert(k);
		fopt = fopt+"<option>"+k+"</options>"
	}
	var prevnlppdesc = $('#PP_DESC_NL'+orow)[0].selectize.options;
	for(k in prevnlppdesc){
		//alert(k);
		fopt1 = fopt1+"<option>"+k+"</options>"
	}
	console.log("'New Denmark Copy row ID:- "+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'macgen_nl'id = 'type_of_mod_NL"+newrow+"' style=\"width:100%\" onchange= \"Clear_exis_values_NL_mac(this.id);NL_mac_picker(this.id)\"  ><option>Please Select</option><option>Add</option><option>Terminate</option></td>"
	cell1.style.width = '8%';
	cell2.innerHTML = "<input type = 'text'  class = 'macgen_nl' id = 'BAN_NL"+newrow+"' onblur='neg_validation_MAC(this.id)' style=\"width:100%\" onblur='' onchange ='checkusecase(this.id);' >"
	cell2.style.width = '7%';
	cell3.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'MSISDN_NL"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange ='checkusecase(this.id);' >"
	cell3.style.width = '7%';
	cell4.innerHTML = "<input type = 'text' disabled class = 'macgen_nl'  title = 'Date: dd-mm-yyyy' id ='Mod_date_NL"+newrow+"' style=\"width:80%\" onchange ='checkusecase(this.id);'><img class = 'imgcdr_NL_M' src='/ui/images2/cal.gif' id ='Mod_date_NL"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell4.style.width = '7%';
	cell5.innerHTML = "<Select type = 'text' class = 'macgen_nl' list = 'PP_NAME_NL_L' onchange='getPP_NL(this.id)' id = 'PP_NAME_NL"+newrow+"' style=\"width:100%\"  >"+fopt
	var $select = $('#PP_NAME_NL'+newrow).selectize({create:true});
	var $select1 = $('#PP_NAME_NL'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
    $select[0].selectize.setValue(test);
	cell5.style.width = '9%';
	cell6.innerHTML = "<Select type = 'text' class = 'macgen_nl' list = 'PP_DESC_NL_L'  onchange='getPP_desc_NL(this.id)' id = 'PP_DESC_NL"+newrow+"' style=\"width:100%\" >"+fopt1
	var $select = $('#PP_DESC_NL'+newrow).selectize({create:true});
	var $select1 = $('#PP_DESC_NL'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
    $select[0].selectize.setValue(test);
	cell6.style.width = '11%';
	cell7.innerHTML = "<Select type = 'text' class = 'macgen_nl'id = 'MAC_NL"+newrow+"' style=\"width:100%\"  onchange ='checkusecase(this.id);'><option></option><option>ACTIVATION</option><option>MOVE_CURRENT</option><option>DISCONNECTION</option>"
	cell7.style.width = '7%';
	cell8.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'Name_NL"+newrow+"' onchange='Onhover_MAC(this.id);checkusecase(this.id)' style=\"width:100%\"  >"
	cell8.style.width = '8%';
	cell9.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'Desc_NL"+newrow+"' onchange='Onhover_MAC(this.id);checkusecase(this.id);' style=\"width:100%\"  >"
	cell9.style.width = '10%';
	cell10.innerHTML = "<Select type = 'text' class = 'macgen_nl'id = 'ADD_ON_CON_DISCON_NL"+newrow+"' style=\"width:100%\" onchange ='checkusecase(this.id);'><option> </option><option>CONNECTION</option><option>DISCONNECTION</option><option>DISCONNECTION_IN_MONTH</option>"
	cell10.style.width = '12%';
	cell11.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'No_of_Rec_NL"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange ='checkusecase(this.id);'>"
	cell11.style.width = '8%';
	
	cell12.innerHTML ="<button class ='NL_copy_Mac' id = 'cpy_NL"+newrow+"' title = 'copy previous Row' style = 'border:none;background:white' onclick = 'copyrow_Macfile_NL(this.id)'><img id = 'cpy_NL"+newrow+"' src = 'ui/copy.png' class = 'NL_copy'  style = 'border:none'></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' onclick = 'Mac_addnewrow_NL()'><img src = 'ui/add.png' id = 'Add_M_NL"+newrow+"' class = 'NL_addpng'  style = 'border:none'></button>"
	cell13.style.border = 'none';
	cell14.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_NL_M"+newrow+"' class = 'NL_delb_M' onclick = 'Mac_deleterow_NL(this.id)'><img src = 'ui/delete.png' class = 'NL_delete' id = 'Del_NL_M"+newrow+"' disabled style = 'border:none'  ></button>"
	cell14.style.border = 'none';
	cell15.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'mac_senData_NL_ref"+newrow+"' disabled style=\"display:none;\">"
	cell15.style.border = 'none';
	document.getElementById("type_of_mod_NL"+newrow).selectedIndex=document.getElementById("type_of_mod_NL"+orow).selectedIndex
	document.getElementById("BAN_NL"+newrow).value=document.getElementById("BAN_NL"+orow).value
	document.getElementById("MSISDN_NL"+newrow).value=document.getElementById("MSISDN_NL"+orow).value
	document.getElementById("Mod_date_NL"+newrow).value=document.getElementById("Mod_date_NL"+orow).value
	document.getElementById("PP_NAME_NL"+newrow).value=document.getElementById("PP_NAME_NL"+orow).value
	document.getElementById("PP_DESC_NL"+newrow).value=document.getElementById("PP_DESC_NL"+orow).value
	document.getElementById("MAC_NL"+newrow).selectedIndex=document.getElementById("MAC_NL"+orow).selectedIndex
	document.getElementById("Name_NL"+newrow).value=document.getElementById("Name_NL"+orow).value
	document.getElementById("Desc_NL"+newrow).value=document.getElementById("Desc_NL"+orow).value
	document.getElementById("ADD_ON_CON_DISCON_NL"+newrow).selectedIndex=document.getElementById("ADD_ON_CON_DISCON_NL"+orow).selectedIndex
	document.getElementById("No_of_Rec_NL"+newrow).value=document.getElementById("No_of_Rec_NL"+orow).value
	
	if(document.getElementById("MSISDN_NL"+orow).value!="" ) 
	{
		if(document.getElementById("No_of_Rec_NL"+orow).value=="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("MSISDN_NL"+orow).value,10);
			document.getElementById("MSISDN_NL"+newrow).value= MSISDN_Incr + 1				
		}
		if(document.getElementById("No_of_Rec_NL"+orow).value!="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("MSISDN_NL"+orow).value,10);
			var Mac_rec_req = parseInt(document.getElementById("No_of_Rec_NL"+orow).value,10);
			document.getElementById("MSISDN_NL"+newrow).value= MSISDN_Incr + Mac_rec_req				
		}	
	}
	else
	{
	 document.getElementById("MSISDN_NL"+newrow).value=document.getElementById("MSISDN_NL"+orow).value
	}
	// Title
	document.getElementById("MSISDN_NL"+newrow).title = document.getElementById("MSISDN_NL"+newrow).value
	document.getElementById("Name_NL"+newrow).title = document.getElementById("Name_NL"+newrow).value
	document.getElementById("Desc_NL"+newrow).title = document.getElementById("Desc_NL"+newrow).value
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

function Mac_addnewrow_NL()
{
	var mactable = document.getElementById('mactable_NL');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	//var fopt='';
	//var servopt = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	console.log("'New Denmark Copy row ID:- "+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'macgen_nl'id = 'type_of_mod_NL"+newrow+"' onchange= \"Clear_exis_values_NL_mac(this.id);NL_mac_picker(this.id)\"  style=\"width:100%\" ><option>Please Select</option><option>Add</option><option>Terminate</option></td>"
	cell1.style.width = '8%';
	cell2.innerHTML = "<input type = 'text'  class = 'macgen_nl' id = 'BAN_NL"+newrow+"' onblur='neg_validation_MAC(this.id)' style=\"width:100%\" onblur=''  onchange='checkusecase(this.id);' >"
	cell2.style.width = '7%';
	cell3.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'MSISDN_NL"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange='checkusecase(this.id);' >"
	cell3.style.width = '7%';
	cell4.innerHTML = "<input type = 'text' disabled class = 'macgen_nl'  title = 'Date: dd-mm-yyyy' id ='Mod_date_NL"+newrow+"' style=\"width:80%\" onchange='checkusecase(this.id);'><img class = 'imgcdr_NL_M' src='/ui/images2/cal.gif' id ='Mod_date_NL"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell4.style.width = '7%';
	cell5.innerHTML = "<Select type = 'text' class = 'macgen_nl' list = 'PP_NAME_NL_L' onchange='getPP_NL(this.id)' id = 'PP_NAME_NL"+newrow+"' style=\"width:100%\"  ><option>Please Select</option>"
	$('#PP_NAME_NL'+newrow).selectize({placeholder:'Please Select',create:true});
	cell5.style.width = '9%';
	cell6.innerHTML = "<Select type = 'text' class = 'macgen_nl' list = 'PP_DESC_NL_L'  onchange='getPP_desc_NL(this.id)' id = 'PP_DESC_NL"+newrow+"' style=\"width:100%\" ><option>Please Select</option>"
	$('#PP_DESC_NL'+newrow).selectize({placeholder:'Please Select',create:true});
	cell6.style.width = '11%';
	cell7.innerHTML = "<Select type = 'text' class = 'macgen_nl'id = 'MAC_NL"+newrow+"' style=\"width:100%\" onchange='checkusecase(this.id);' ><option></option><option>ACTIVATION</option><option>MOVE_CURRENT</option><option>DISCONNECTION</option>"
	cell7.style.width = '7%';
	cell8.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'Name_NL"+newrow+"' onchange='Onhover_MAC(this.id);checkusecase(this.id);' style=\"width:100%\"  >"
	cell8.style.width = '8%';
	cell9.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'Desc_NL"+newrow+"' onchange='Onhover_MAC(this.id);checkusecase(this.id);' style=\"width:100%\"  >"
	cell9.style.width = '10%';
	cell10.innerHTML = "<Select type = 'text' class = 'macgen_nl'id = 'ADD_ON_CON_DISCON_NL"+newrow+"' style=\"width:100%\" onchange='checkusecase(this.id);'><option> </option><option>CONNECTION</option><option>DISCONNECTION</option><option>DISCONNECTION_IN_MONTH</option>"
	cell10.style.width = '12%';
	cell11.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'No_of_Rec_NL"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onblur='neg_validation_MAC(this.id)'  onchange='checkusecase(this.id);'>"
	cell11.style.width = '8%';
	
	cell12.innerHTML ="<button class ='NL_copy_Mac' id = 'cpy_NL"+newrow+"' title = 'copy previous Row' style = 'border:none;background:white' onclick = 'copyrow_Macfile_NL(this.id)'><img id = 'cpy_NL"+newrow+"' src = 'ui/copy.png' class = 'NL_copy'  style = 'border:none'></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' onclick = 'Mac_addnewrow_NL()'><img src = 'ui/add.png' id = 'Add_M_NL"+newrow+"' class = 'NL_addpng'  style = 'border:none'></button>"
	cell13.style.border = 'none';
	cell14.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_NL_M"+newrow+"' class = 'NL_delb_M' onclick = 'Mac_deleterow_NL(this.id)'><img src = 'ui/delete.png' class = 'NL_delete' id = 'Del_NL_M"+newrow+"' disabled style = 'border:none'  ></button>"
	cell14.style.border = 'none';
	cell15.innerHTML = "<input type = 'text' class = 'macgen_nl' id = 'mac_senData_NL_ref"+newrow+"' disabled style=\"display:none;\">"
	cell15.style.border = 'none';
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

// Function to delete the Mac Field row
function Mac_deleterow_NL(Mac_del_id)
{
	/*var mactable = document.getElementById('mactable');
	mactable.deleteRow(rowid);*/
	//alert(Mac_del_id);
	//if(Mac_del_id=='delbut_NL_M1')
	//{ return;}
	var rownumarr = Mac_del_id.split('delbut_NL_M');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var mactable = document.getElementById('mactable_NL');
	var newrow = mactable.rows.length;
	if( (newrow === 2) ) //|| (Mac_del_id=='delbut_NL_M1') 
	{
			//alertify.alert('Please Enter minimum one row of data')				
			
			document.getElementById("BAN_NL"+'1').value=''
			document.getElementById("MSISDN_NL"+'1').value=''
			document.getElementById("Mod_date_NL"+'1').value=''
			document.getElementById("MAC_NL"+'1').selectedIndex=''
			//document.getElementById("Name_NL"+'1').value=''
			$('#PP_NAME_NL1').selectize()[0].selectize.destroy();
			document.getElementById("PP_NAME_NL"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("PP_NAME_NL"+'1').appendChild(newOption1);
			$('#PP_DESC_NL1').selectize()[0].selectize.destroy();
			document.getElementById("PP_DESC_NL"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("PP_DESC_NL"+'1').appendChild(newOption1);
			//document.getElementById("Desc_NL"+'1').value=''
			document.getElementById("ADD_ON_CON_DISCON_NL"+'1').selectedIndex=''
			document.getElementById("No_of_Rec_NL"+'1').value=''			
			document.getElementById("MSISDN_NL"+'1').value=''
			//var $select = $('#'+"PP_NAME_NL1"+'1').selectize({create:true});
			//$select[0].selectize.setValue('Please Select');	
			//var $select = $('#'+"PP_DESC_NL1"+'1').selectize({create:true});
			//$select[0].selectize.setValue('Please Select');	
			document.getElementById("type_of_mod_NL"+'1').selectedIndex='Please Select'
			$('#PP_NAME_NL1').selectize({create:true});
			$('#PP_DESC_NL1').selectize({create:true});
			document.getElementById("Name_NL"+'1').value=''
			document.getElementById("Desc_NL"+'1').value=''
				
	}
	else
	{
		mactable.deleteRow(rownum);
		var rows = document.getElementsByClassName('NL_delb_M');
		var rval;
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_NL_M'+rval;

		}
		var rows = document.getElementsByClassName('NL_addpng');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'Add_M_NL'+rval;

		}
		var rows = document.getElementsByClassName('NL_copy_Mac');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_NL'+rval;

		}
		var rows = document.getElementsByClassName('NL_copy');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_NL'+rval;

		}
		var rows = document.getElementsByClassName('NL_delete');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'Del_NL_M'+rval;

		}
		var inputval = document.getElementsByClassName('macgen_nl');
		var iprowid = 1;
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('mac_senData_NL_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'mac_senData_NL_ref'+iprowid;
				iprowid = iprowid+1

			}
			if(inputval[currinput].id.indexOf('type_of_mod_NL') != -1)
			{
				inputval[currinput].id = 'type_of_mod_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('BAN_NL') != -1)
			{
				inputval[currinput].id = 'BAN_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('MSISDN_NL') != -1)
			{
				inputval[currinput].id = 'MSISDN_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('PP_NAME_NL') != -1)
			{
				inputval[currinput].id = 'PP_NAME_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('PP_DESC_NL') != -1)
			{
				inputval[currinput].id = 'PP_DESC_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Name_NL') != -1)
			{
				inputval[currinput].id = 'Name_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Desc_NL') != -1)
			{
				inputval[currinput].id = 'Desc_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Mod_date_NL') != -1)
			{
				inputval[currinput].id = 'Mod_date_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('MAC_NL') != -1)
			{
				inputval[currinput].id = 'MAC_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('ADD_ON_CON_DISCON_NL') != -1)
			{
				inputval[currinput].id = 'ADD_ON_CON_DISCON_NL'+iprowid;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_NL') != -1)
			{
				inputval[currinput].id = 'No_of_Rec_NL'+iprowid;
			}

		}

		var inputval = document.getElementsByClassName('imgcdr_NL_M');
		var iprowid = 1;
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'Mod_date_NL'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((Mac_del_id== 'delbut_NL_M1'))
		{
		  var first_row_b1 = document.getElementById("mactable_NL").rows[1].cells[11];
		  var first_row_b2 = document.getElementById("mactable_NL").rows[1].cells[12];
		  var first_row_b3 = document.getElementById("mactable_NL").rows[1].cells[13];
		  var first_row_b4 = document.getElementById("mactable_NL").rows[1].cells[14];
		  first_row_b1.style.borderTop='1px solid';
		  first_row_b1.style.width='2%';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b2.style.width='2%';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b3.style.width='2%';
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b4.style.width='0.5%';
		}
				
	}

}


function NL_mac_picker(use_case_id)
{
 
     console.log(use_case_id);
    //console.log(use_case_id);
    get_price_plan_NL(use_case_id);
	var use_case = document.getElementById(use_case_id).value;
	var idsplit = use_case_id.split('type_of_mod_NL');
	var rowid = idsplit[1];

	//get_price_plan_NL(use_case_id)
	//var rowid = idsplit[1];
	var targetid = 'MAC_NL'+rowid
	var targetid2 = 'No_of_Rec_NL'+rowid
	var targetid3 = 'ADD_ON_CON_DISCON_NL'+rowid
	var targetid4 = 'Name_NL'+rowid
	
	if(use_case=='Add'){
		document.getElementById(targetid).value = "ACTIVATION"
		document.getElementById(targetid3).value = "CONNECTION"
	}else if(use_case=='Move'){
		document.getElementById(targetid).value = 'MOVE_CURRENT'
	}else if(use_case=='Terminate'){
		document.getElementById(targetid).value = 'DISCONNECTION'
		document.getElementById(targetid3).value = 'DISCONNECTION'
	}else if(use_case=='Please Select'){
		document.getElementById(targetid).value = ''
		document.getElementById(targetid2).value = ''
		document.getElementById(targetid3).value = ''
		document.getElementById(targetid4).value = ''
	}
	if(use_case!="Please Select" && document.getElementById(targetid2).value == '' )
	{
		document.getElementById(targetid2).value = 1;
		
	}else if(use_case=="Please Select" && document.getElementById(targetid2).value != '')
	{
		document.getElementById(targetid2).value = '';
	}

	if(use_case!="Please Select" && document.getElementById(targetid4).value == '' )
	{
		document.getElementById(targetid4).value = 'VGE';
		
	}
		
}


function Clear_exis_values_NL_mac(use_case_id)
{
	var use_case = document.getElementById(use_case_id).value;
	var idsplit = use_case_id.split('type_of_mod_NL');
	var rowid = idsplit[1];

	//alertify.alert('Please Enter minimum one row of data')				
	document.getElementById("BAN_NL"+rowid).value='';
	document.getElementById("MSISDN_NL"+rowid).value='';
	document.getElementById("Mod_date_NL"+rowid).value='';
	document.getElementById("PP_NAME_NL"+rowid).value='';
	document.getElementById("PP_DESC_NL"+rowid).value='';
	document.getElementById("MAC_NL"+rowid).selectedIndex='';
	document.getElementById("Name_NL"+rowid).value='';
	document.getElementById("Desc_NL"+rowid).value='';
	document.getElementById("ADD_ON_CON_DISCON_NL"+rowid).selectedIndex='';
	document.getElementById("No_of_Rec_NL"+rowid).value='';			
	document.getElementById("MSISDN_NL"+rowid).value='';	
}

function get_price_plan_NL(usagecode)  
{
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getNewserPP_NL');
		var reponsetxt;
		var responseJson;
		var jsonlen;
		var newOption;
		var newOption1;
		var rownumarr = usagecode.split('type_of_mod_NL');
		var rownum;
		rownum = rownumarr[1];
		console.log(rownum);
		var exis_pp_dropdown = document.getElementById('PP_NAME_NL'+rownum);
		//var exis_pp_desc_dropdown = document.getElementById('PP_DESC_NL'+rownum);
		$('#PP_NAME_NL'+rownum).selectize()[0].selectize.destroy();
		//$('#PP_DESC_NL'+rownum).selectize()[0].selectize.destroy();
		exis_pp_dropdown.options.length = 0;
		//exis_pp_desc_dropdown.length = 0;
		newOption = document.createElement('option');
		newOption.value = 'Please Select';
		newOption.innerText = 'Please Select';
		exis_pp_dropdown.appendChild(newOption);
		oReq.onreadystatechange = function () {
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
				console.log(oReq.responseText);
				reponsetxt = oReq.responseText
				responseJson = JSON.parse(reponsetxt);
				jsonlen = responseJson.length
				for(var currele = 0;currele<jsonlen;currele++)
				{
					//console.log(responseJson[currele].price_plan); nnnn
					newOption = document.createElement('option');
					newOption.value = responseJson[currele].CODE;
					newOption.innerText = responseJson[currele].CODE;
					exis_pp_dropdown.appendChild(newOption);
				}
				$('#PP_NAME_NL'+rownum).selectize({placeholder:'Please Select',create:true});
				
			}
		};
		oReq.send();

			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getNewserPP_NLdesc');
			var reponsetxt1;
			var responseJson1;
			var jsonlen1;
		var rownumrr = usagecode.split('type_of_mod_NL');
		var rownm;
		rownm = rownumrr[1];
		console.log(rownm);
		//var exis_pp_dropdown = document.getElementById('PP_NAME_NL'+rownum);
		var exis_pp_desc_dropdown = document.getElementById('PP_DESC_NL'+rownm);
		//$('#PP_NAME_NL'+rownum).selectize()[0].selectize.destroy();
		$('#PP_DESC_NL'+rownm).selectize()[0].selectize.destroy();
		exis_pp_desc_dropdown.options.length = 0;
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
				console.log(oReq1.responseText);
				reponsetxt1 = oReq1.responseText
				responseJson1 = JSON.parse(reponsetxt1);
				jsonlen1 = responseJson1.length
				newOption1 = document.createElement('option');
				newOption1.value = 'Please Select';
				newOption1.innerText ='Please Select';
				exis_pp_desc_dropdown.appendChild(newOption1);
				for(var currele = 0;currele<jsonlen1;currele++)
				{				
					newOption1 = document.createElement('option');
					newOption1.value = responseJson1[currele].DESCRIP;
					newOption1.innerText = responseJson1[currele].DESCRIP;
					exis_pp_desc_dropdown.appendChild(newOption1);
					
				}
				$('#PP_DESC_NL'+rownm).selectize({placeholder:'Please Select',create:true});
			}
			};
			oReq1.send();		
		
}
function getPP_NL(PPid)
{
	var priceplan = document.getElementById(PPid).value;
	var idsplit = PPid.split('PP_NAME_NL');

	var rowid = idsplit[1];
	var oReq = new XMLHttpRequest();
	oReq.open("GET",'/GetPP_NL?retval='+priceplan);
	var targetid;
	targetid = 'PP_DESC_NL'+rowid
	if(document.getElementById(targetid) != null)
	{
	if(priceplan != 'Please Select')
	{
	var currppdesc = document.getElementById(targetid).value;
	oReq.onreadystatechange = function () 
	{
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
				var PPdesc = reponsetxt;
				if(PPdesc !='')
				{
				if(currppdesc != PPdesc)
				{
						var $select = $('#'+targetid).selectize();
						$select[0].selectize.setValue(PPdesc);
				}
				}
				//document.getElementById(targetid).value = PPdesc;
				
			}
				
	};
	oReq.send();
	}
	else
	{
		if(currppdesc != 'Please Select')
		{
			var $select = $('#'+targetid).selectize();
			$select[0].selectize.setValue('Please Select');			
		}
	}
	}
}
function getPP_desc_NL(PPid)
{
	var priceplan = document.getElementById(PPid).value;
	var idsplit = PPid.split('PP_DESC_NL');

	var rowid = idsplit[1];
	var targetid;
	targetid = 'PP_NAME_NL'+rowid
	var pp = document.getElementById(targetid).value;
	var sendval = priceplan+"|"+pp
	var oReq = new XMLHttpRequest();
	oReq.open("GET",'/GetPP_desc_NL?retval='+sendval);
	
	if(priceplan != 'Please Select')
	{
    if(document.getElementById(targetid) != null)
	{
	var currppdesc = document.getElementById(targetid).value;
	oReq.onreadystatechange = function () 
	{
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
				var PPdesc = reponsetxt;
				if(PPdesc != '')
				{
				if(currppdesc != PPdesc)
					{
						var $select = $('#'+targetid).selectize();
						$select[0].selectize.setValue(PPdesc); 
					}
				}
				//document.getElementById(targetid).value = PPdesc;
			}
				
	};
	oReq.send();
	}
	else
	{
		if(currppdesc != 'Please Select')
		{
			var $select = $('#'+targetid).selectize();
			$select[0].selectize.setValue('Please Select');			
		}
	}
	}
}



// ********************************* Neitherland_Mac functions **************************************************

// ********************************* Ireland_Mac functions **************************************************
function copyrow_Macfile_IE(pos)
{

	var cpyarr = pos.split('cpy_IE');
	var pos = cpyarr[1];
	var mactable = document.getElementById('mactable_IE');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	var orow = pos;
	var fopt='';
	//var servopt = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var previepp = $('#PP_NAME_IE'+orow)[0].selectize.options;
	for(k in previepp){
		//alert(k);
		fopt = fopt+"<option>"+k+"</options>"
	}
	console.log("'New Ireland Copy row ID:- "+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'macgen_IE'id = 'type_of_mod_IE"+newrow+"' onchange= \"Clear_exis_values_IE_mac(this.id);IE_mac_picker(this.id)\"  style=\"width:100%\" ><option>Please Select</option><option>Add</option><option>Terminate</option></td>"
	cell1.style.width = '10%';
	cell2.innerHTML = "<input type = 'text'  class = 'macgen_IE' id = 'BAN_IE"+newrow+"' onblur='neg_validation_MAC(this.id)' style=\"width:100%\" onblur=''onchange= 'checkusecase(this.id)' >"
	cell2.style.width = '10%';
	cell3.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'MSISDN_IE"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange= 'checkusecase(this.id)'  >"
	cell3.style.width = '10%';
	cell4.innerHTML = "<input type = 'text' disabled class = 'macgen_IE'  title = 'Date: dd-mm-yyyy' id ='Mod_date_IE"+newrow+"' style=\"width:80%\" onchange= 'checkusecase(this.id)'><img class = 'imgcdr_IE_Mod_date' src='/ui/images2/cal.gif' id ='Mod_date_IE"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell4.style.width = '10%';
	cell5.innerHTML = "<Select type = 'text' class = 'macgen_IE' list = 'PP_NAME_IE_L'  id = 'PP_NAME_IE"+newrow+"' onchange='get_IE_pp_val(this.id)' style=\"width:100%\"  >"+fopt;
	cell5.style.width = '10%';
	cell6.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'No_of_Rec_IE"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange= 'checkusecase(this.id)' >"
	cell6.style.width = '8%';

	cell7.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'package_plan_code"+newrow+"' disabled style=\"display:none;\">"
	cell7.style.border = 'none';
	cell8.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'bundle_soc_code"+newrow+"' disabled style=\"display:none;\">"
	cell8.style.border = 'none';
	cell9.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'bundle_soc_description"+newrow+"' disabled style=\"display:none;\">"
	cell9.style.border = 'none';
	
	cell10.innerHTML ="<button class ='IE_copy_Mac' id = 'cpy_IE"+newrow+"' title = 'copy previous Row' style = 'border:none;background:white' onclick = 'copyrow_Macfile_IE(this.id)'><img id = 'cpy_IE"+newrow+"' src = 'ui/copy.png' class = 'IE_copy'  style = 'border:none'></button>"
	cell10.style.border = 'none';
	cell11.innerHTML ="<button style = 'border:none;background:white' onclick = 'Mac_addnewrow_IE()'><img src = 'ui/add.png' id = 'Add_M_IE"+newrow+"' class = 'IE_addpng'  style = 'border:none'></button>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_IE_M"+newrow+"' class = 'IE_delb_M' onclick = 'Mac_deleterow_IE(this.id)'><img src = 'ui/delete.png' class = 'IE_delete' id = 'Del_IE_M"+newrow+"' disabled style = 'border:none'  ></button>"
	cell12.style.border = 'none';
	cell13.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'mac_senData_IE_ref"+newrow+"' disabled style=\"display:none;\">"
	cell13.style.border = 'none';
	document.getElementById("type_of_mod_IE"+newrow).selectedIndex=document.getElementById("type_of_mod_IE"+orow).selectedIndex
	document.getElementById("BAN_IE"+newrow).value=document.getElementById("BAN_IE"+orow).value
	document.getElementById("MSISDN_IE"+newrow).value=document.getElementById("MSISDN_IE"+orow).value
	document.getElementById("Mod_date_IE"+newrow).value=document.getElementById("Mod_date_IE"+orow).value
	document.getElementById("PP_NAME_IE"+newrow).value=document.getElementById("PP_NAME_IE"+orow).value
	document.getElementById("No_of_Rec_IE"+newrow).value=document.getElementById("No_of_Rec_IE"+orow).value
	document.getElementById("package_plan_code"+newrow).value=document.getElementById("package_plan_code"+orow).value
	document.getElementById("bundle_soc_code"+newrow).value=document.getElementById("bundle_soc_code"+orow).value
	document.getElementById("bundle_soc_description"+newrow).value=document.getElementById("bundle_soc_description"+orow).value
	$('#PP_NAME_IE'+newrow).selectize({create:true});
	var $select = $('#PP_NAME_IE'+newrow).selectize();
	var $select1 = $('#PP_NAME_IE'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
    $select[0].selectize.setValue(test);
	if(document.getElementById("MSISDN_IE"+orow).value!="" ) 
	{
		if(document.getElementById("No_of_Rec_IE"+orow).value=="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("MSISDN_IE"+orow).value,10);
			document.getElementById("MSISDN_IE"+newrow).value= MSISDN_Incr + 1				
		}
		if(document.getElementById("No_of_Rec_IE"+orow).value!="")
		{
			var MSISDN_Incr = parseInt(document.getElementById("MSISDN_IE"+orow).value,10);
			var Mac_rec_req = parseInt(document.getElementById("No_of_Rec_IE"+orow).value,10);
			document.getElementById("MSISDN_IE"+newrow).value= MSISDN_Incr + Mac_rec_req				
		}	
	}
	else
	{
	 document.getElementById("MSISDN_IE"+newrow).value=document.getElementById("MSISDN_IE"+orow).value
	}
	 //Title
	 document.getElementById("MSISDN_IE"+newrow).title = document.getElementById("MSISDN_IE"+newrow).value
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

function Mac_addnewrow_IE()
{
	var mactable = document.getElementById('mactable_IE');
	var newrow = mactable.rows.length;
	var row = mactable.insertRow(newrow);
	//var fopt='';
	//var servopt = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	console.log("'New Ireland Copy row ID:- "+newrow+"'");
	cell1.innerHTML = "<Select type = 'text' class = 'macgen_IE'id = 'type_of_mod_IE"+newrow+"' onchange= \"Clear_exis_values_IE_mac(this.id);IE_mac_picker(this.id)\"  style=\"width:100%\" ><option>Please Select</option><option>Add</option><option>Terminate</option></td>"
	cell1.style.width = '10%';
	cell2.innerHTML = "<input type = 'text'  class = 'macgen_IE' id = 'BAN_IE"+newrow+"' onblur='neg_validation_MAC(this.id)' style=\"width:100%\" onblur=''onchange= 'checkusecase(this.id)' >"
	cell2.style.width = '10%';
	cell3.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'MSISDN_IE"+newrow+"' style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange= 'checkusecase(this.id)' >"
	cell3.style.width = '10%';
	cell4.innerHTML = "<input type = 'text' disabled class = 'macgen_IE'  title = 'Date: dd-mm-yyyy' id ='Mod_date_IE"+newrow+"' style=\"width:80%\" onchange= 'checkusecase(this.id)'><img class = 'imgcdr_IE_Mod_date' src='/ui/images2/cal.gif' id ='Mod_date_IE"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell4.style.width = '10%';
	cell5.innerHTML = "<Select type = 'text' class = 'macgen_IE' list = 'PP_NAME_IE_L'  id = 'PP_NAME_IE"+newrow+"'  onchange='get_IE_pp_val(this.id)' style=\"width:100%\"  ><option>Please Select</option>"
	$('#PP_NAME_IE'+newrow).selectize({placeholder:'Please Select',create:true});	
	cell5.style.width = '10%';
	cell6.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'No_of_Rec_IE"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onblur='neg_validation_MAC(this.id)' onchange= 'checkusecase(this.id)' >"
	cell6.style.width = '8%';

	cell7.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'package_plan_code"+newrow+"' disabled style=\"display:none;\">"
	cell7.style.border = 'none';
	cell8.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'bundle_soc_code"+newrow+"' disabled style=\"display:none;\">"
	cell8.style.border = 'none';
	cell9.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'bundle_soc_description"+newrow+"' disabled style=\"display:none;\">"
	cell9.style.border = 'none';
	
	cell10.innerHTML ="<button class ='IE_copy_Mac' id = 'cpy_IE"+newrow+"' title = 'copy previous Row' style = 'border:none;background:white' onclick = 'copyrow_Macfile_IE(this.id)'><img id = 'cpy_IE"+newrow+"' src = 'ui/copy.png' class = 'IE_copy'  style = 'border:none'></button>"
	cell10.style.border = 'none';
	cell11.innerHTML ="<button style = 'border:none;background:white' onclick = 'Mac_addnewrow_IE()'><img src = 'ui/add.png' id = 'Add_M_IE"+newrow+"' class = 'IE_addpng'  style = 'border:none'></button>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_IE_M"+newrow+"' class = 'IE_delb_M' onclick = 'Mac_deleterow_IE(this.id)'><img src = 'ui/delete.png' class = 'IE_delete' id = 'Del_IE_M"+newrow+"' disabled style = 'border:none'  ></button>"
	cell12.style.border = 'none';
	cell13.innerHTML = "<input type = 'text' class = 'macgen_IE' id = 'mac_senData_IE_ref"+newrow+"' disabled style=\"display:none;\">"
	cell13.style.border = 'none';
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

// Function to delete the Mac Field row
function Mac_deleterow_IE(Mac_del_id)
{
	/*var mactable = document.getElementById('mactable');
	mactable.deleteRow(rowid);*/
	//alert(Mac_del_id);
	//if(Mac_del_id=='delbut_IE_M1')
	//{ return;}
	var rownumarr = Mac_del_id.split('delbut_IE_M');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var mactable = document.getElementById('mactable_IE');
	var newrow = mactable.rows.length;
	if((newrow === 2)  ) //|| (Mac_del_id=='delbut_IE_M1')
	{
			//alertify.alert('Please Enter minimum one row of data')
			document.getElementById("type_of_mod_IE"+'1').selectedIndex='Please Select'
			document.getElementById("BAN_IE"+'1').value=''
			document.getElementById("MSISDN_IE"+'1').value=''
			document.getElementById("Mod_date_IE"+'1').value=''
			//document.getElementById("PP_NAME_IE"+'1').value=''
			$('#PP_NAME_IE1').selectize()[0].selectize.destroy();
			document.getElementById("PP_NAME_IE"+'1').options.length='0'
			newOption1 = document.createElement('option');  
			newOption1.value = 'Please Select';
			newOption1.innerText = 'Please Select';
			document.getElementById("PP_NAME_IE"+'1').appendChild(newOption1);
			$('#PP_NAME_IE1').selectize({create:true})
			
			document.getElementById("No_of_Rec_IE"+'1').value=''
			document.getElementById("package_plan_code"+'1').value=''
			document.getElementById("bundle_soc_code"+'1').value=''
			document.getElementById("bundle_soc_description"+'1').value=''
			document.getElementById("MSISDN_IE"+'1').value=''		
	}
	else
	{
		mactable.deleteRow(rownum);
		var rows = document.getElementsByClassName('IE_delb_M');
		var rval;
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_IE_M'+rval;

		}
		var rows = document.getElementsByClassName('IE_addpng');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'Add_M_IE'+rval;

		}
		var rows = document.getElementsByClassName('IE_copy_Mac');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_IE'+rval;

		}
		var rows = document.getElementsByClassName('IE_copy');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_IE'+rval;

		}
		var rows = document.getElementsByClassName('IE_delete');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'Del_IE_M'+rval;

		}
		var inputval = document.getElementsByClassName('macgen_IE');
		var iprowid = 1;
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('mac_senData_IE_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'mac_senData_IE_ref'+iprowid;
				iprowid = iprowid+1

			}
			if(inputval[currinput].id.indexOf('type_of_mod_IE') != -1)
			{
				inputval[currinput].id = 'type_of_mod_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('BAN_IE') != -1)
			{
				inputval[currinput].id = 'BAN_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('MSISDN_IE') != -1)
			{
				inputval[currinput].id = 'MSISDN_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Mod_date_IE') != -1)
			{
				inputval[currinput].id = 'Mod_date_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('PP_NAME_IE') != -1)
			{
				inputval[currinput].id = 'PP_NAME_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('BSD_date_IE') != -1)
			{
				inputval[currinput].id = 'BSD_date_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('EED_date_IE') != -1)
			{
				inputval[currinput].id = 'EED_date_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_IE') != -1)
			{
				inputval[currinput].id = 'No_of_Rec_IE'+iprowid;
			}
			if(inputval[currinput].id.indexOf('package_plan_code') != -1)
			{
				inputval[currinput].id = 'package_plan_code'+iprowid;
			}
			if(inputval[currinput].id.indexOf('bundle_soc_code') != -1)
			{
				inputval[currinput].id = 'bundle_soc_code'+iprowid;
			}
			if(inputval[currinput].id.indexOf('bundle_soc_description') != -1)
			{
				inputval[currinput].id = 'bundle_soc_description'+iprowid;
			}			

		}

		var inputval = document.getElementsByClassName('imgcdr_IE_Mod_date');
		var iprowid = 1;
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'Mod_date_IE'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((Mac_del_id== 'delbut_IE_M1'))
		{
		  var first_row_b1 = document.getElementById("mactable_IE").rows[1].cells[6];
		  var first_row_b2 = document.getElementById("mactable_IE").rows[1].cells[7];
		  var first_row_b3 = document.getElementById("mactable_IE").rows[1].cells[8];
		  var first_row_b4 = document.getElementById("mactable_IE").rows[1].cells[9];
		  var first_row_b5 = document.getElementById("mactable_IE").rows[1].cells[10];
		  var first_row_b6 = document.getElementById("mactable_IE").rows[1].cells[11];
		  var first_row_b7 = document.getElementById("mactable_IE").rows[1].cells[12];
		  first_row_b1.style.borderTop='1px solid';
		  first_row_b1.style.width='0.5%';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b2.style.width='0.5%';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b3.style.width='0.5%';		  
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b4.style.width='2%';
		  first_row_b5.style.borderTop='1px solid';
		  first_row_b5.style.width='2%';
		  first_row_b6.style.borderTop='1px solid';
		  first_row_b6.style.width='2%';
		  first_row_b7.style.borderTop='1px solid';
		  first_row_b7.style.width='0.5%';
		}				
	}

}


function IE_mac_picker(use_case_id)
{  
    //console.log(use_case_id);
	get_price_plan_IE(use_case_id);
	var use_case = document.getElementById(use_case_id).value;
	var idsplit = use_case_id.split('type_of_mod_IE');
	var rowid = idsplit[1];

	var targetid2 = 'No_of_Rec_IE'+rowid
	
	//var targetid3 = 'EED_date_IE'+rowid
	/*if(use_case=="Add" && document.getElementById(targetid3).value !='' )
	{
		document.getElementById(targetid3).value = '';		
	}else if(use_case=="Please Select" && document.getElementById(targetid3).value != '')
	{
		document.getElementById(targetid3).value = '';
	}*/
	
	if(use_case!="Please Select" && document.getElementById(targetid2).value == '' )
	{
		document.getElementById(targetid2).value = 1;
		
	}else if(use_case=="Please Select" && document.getElementById(targetid2).value != '')
	{
		document.getElementById(targetid2).value = '';
	}
		
}

function Clear_exis_values_IE_mac(use_case_id)
{

	var use_case = document.getElementById(use_case_id).value;
	var idsplit = use_case_id.split('type_of_mod_IE');
	var rowid = idsplit[1];

	//alertify.alert('Please Enter minimum one row of data')
	document.getElementById("BAN_IE"+rowid).value='';
	document.getElementById("MSISDN_IE"+rowid).value='';
	document.getElementById("Mod_date_IE"+rowid).value='';
	document.getElementById("PP_NAME_IE"+rowid).value='';
	document.getElementById("No_of_Rec_IE"+rowid).value='';
	document.getElementById("package_plan_code"+rowid).value='';
	document.getElementById("bundle_soc_code"+rowid).value='';
	document.getElementById("bundle_soc_description"+rowid).value='';
	document.getElementById("MSISDN_IE"+rowid).value='';	

}



function get_price_plan_IE(usagecode)  
{
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getNewserPP_IE');
		var reponsetxt;
		var responseJson;
		var jsoIEen;
		var newOption;
		var newOption1;
		
		var rownumarr = usagecode.split('type_of_mod_IE');
		//var divid = document.getElementById('M_content_IE');
		var rownum;
		rownum = rownumarr[1];
		console.log(rownum);
		var exis_pp_dropdown = document.getElementById('PP_NAME_IE'+rownum);
		$('#PP_NAME_IE'+rownum).selectize()[0].selectize.destroy();
		document.getElementById('PP_NAME_IE'+rownum).options.length = 0;
	    //exis_pp_dropdown.length = 0;
		//exis_pp_desc_dropdown.length = 0;
		oReq.onreadystatechange = function () {
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
				console.log(oReq.responseText);
				reponsetxt = oReq.responseText
				responseJson = JSON.parse(reponsetxt);
				jsoIEen = responseJson.length
				newOption = document.createElement('option');
				newOption.value = 'Please Select';
				newOption.innerText = 'Please Select';
				exis_pp_dropdown.appendChild(newOption);
				for(var currele = 0;currele<jsoIEen;currele++)
				{
					//console.log(responseJson[currele].price_plan);
					newOption = document.createElement('option');
					newOption.value = responseJson[currele].vge_direct_dynamic_tarrif;
					newOption.innerText = responseJson[currele].vge_direct_dynamic_tarrif;
					exis_pp_dropdown.appendChild(newOption);
					
					/*newOption1 = document.createElement('option');
					newOption1.value = responseJson[currele].DESC;
					newOption1.innerText = responseJson[currele].DESC;
					exis_pp_desc_dropdown.appendChild(newOption1);*/
				}
				$('#PP_NAME_IE'+rownum).selectize({placeholder:'Please Select',create:true});
			}
		};
		oReq.send();

}

function get_IE_pp_val(usagecode)
{
	//get_price_plan_IE(usagecode);
	var usgsplit = usagecode.split('PP_NAME_IE');
	//alert(usagecode);
	var rownum = usgsplit[1];
	var usageid = 'package_plan_code'+rownum;
	var nusgid = 'bundle_soc_code'+rownum;
	var bundle_code_desc = 'bundle_soc_description'+rownum;
	passval  = document.getElementById(usagecode).value
	if(passval != 'Please Select')
	{
		var oReq = new XMLHttpRequest();
		oReq.open("GET", '/get_type_desc_IE?retval='+passval);
		oReq.onreadystatechange = function () {
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
			reponsetxt = oReq.responseText;
			responsesplt = reponsetxt.split("||");
			//alert(responsesplt[0]);
			document.getElementById(usageid).value = responsesplt[0];
			document.getElementById(nusgid).value = responsesplt[1];
			document.getElementById(bundle_code_desc).value = responsesplt[2];
			console.log(reponsetxt);
		}
		};
		oReq.send();
	}
	else
	{
			document.getElementById(usageid).value = '';
			document.getElementById(nusgid).value = '';
			document.getElementById(bundle_code_desc).value = '';
	}
}




// **********************************  Custom Functions Sudheer -- MAC file Generation ***************************************

//--------------------------------------------------------Sravani Reddy BPF File Creation--------------------------------------------------------------------


//--------------------------------------------------------Sravani Reddy BPF File Creation--------------------------------------------------------------------


function copyrow_Bpffile_add(pos)
{

	var cpyarr = pos.split('cpy_A');
	var pos = cpyarr[1];
	var bpftable = document.getElementById('bpftable');
	var newrow = bpftable.rows.length;
	var row = bpftable.insertRow(newrow);
	var orow = pos;
	var fopt='';
	var fopt1 = '';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var cell16 = row.insertCell(15);
	var cell17 = row.insertCell(16);
	var cell18 = row.insertCell(17);
	var cell19 = row.insertCell(18);
	var cell20 = row.insertCell(19);
	
	prevprop = document.getElementById("proposition_type_B_A"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"	
	}
	var prevpp = $('#Price_Plan'+orow)[0].selectize.options;
	for(k in prevpp){
		//alert(k);
		fopt1 = fopt1+"<option>"+k+"</options>"
	}
	cell1.innerHTML = "<Select type = 'text' class = 'bpfgen_add'id = 'proposition_type_B_A"+newrow+"' style='width:100%' onchange= \"Clear_exis_values_BPF_add_mac(this.id);getpriceplan(this.id)\">"+fopt
	cell1.style.width = '6%';
	cell2.innerHTML = "<input type = 'number' class = 'bpfgen_add' id = 'BAN_BA"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)'>"
	cell2.style.width = '4.5%';
	/*cell3.innerHTML = "<input type = 'number' class = 'bpfgen_add' id = 'Parent_AccID"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell3.style.width = '5%';
	cell4.innerHTML = "<input type = 'number' class = 'bpfgen_add' id = 'Service_ID"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell4.style.width = '5%';*/
	cell3.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'Parent_AccID"+newrow+"'  style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)' >"
	cell3.style.width = '4%';
	cell4.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'Service_ID"+newrow+"'  style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)'>"
	cell4.style.width = '5%';
	cell5.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'User_ID"+newrow+"' style='width:100%'onblur = 'checkEmail_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)' >"
	cell5.style.width = '4%';
	cell6.innerHTML = "<Select type = 'text' class = 'bpfgen_add'  id = 'Price_Plan"+newrow+"'  style='width:100%'  >"+fopt1
	cell6.style.width = '4.5%';

	cell7.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='Acc_Fcharge"+newrow+"' id = 'AL_Fcharge1"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)' >"
	cell7.style.width = '1%';
	cell8.innerHTML = "<input type = 'text' class = 'bpfgen_add'  list ='Acc_Fcharge"+newrow+"' id = 'AL_Fcharge2"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell8.style.width = '2%';
	cell9.innerHTML = "<input type = 'text' class = 'bpfgen_add'  list ='Acc_Fcharge"+newrow+"' id = 'AL_Fcharge3"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell9.style.width = '2%';
	
	
	cell10.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dlFlat_Charg"+newrow+"' id = 'Flat_Charge1"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)' >"
	cell10.style.width = '2%';
	cell11.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dlFlat_Charg"+newrow+"' id = 'Flat_Charge2"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell11.style.width = '2%';
	cell12.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dlFlat_Charg"+newrow+"' id = 'Flat_Charge3"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell12.style.width = '2%';
	
	
	cell13.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'Number_Masking"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell13.style.width = '6%';
	cell14.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dldevice_type"+newrow+"' id = 'Device_Type"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell14.style.width = '5%';	
	cell15.innerHTML = "<input type = 'text' disabled class = 'bpfgen_add' id ='Date_Add"+newrow+"' style=\"width:80%\" onchange='checkusecase_BPF_A(this.id)'><img src='/ui/images2/cal.gif' class = 'imgbpf_M' id ='Date_Add"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell15.style.width = '5%';
	cell16.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'No_of_Rec_BPF_A"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onchange='checkusecase_BPF_A(this.id)' onblur='neg_validation_BPF(this.id)'>"
	cell16.style.width = '6%';	
	cell17.innerHTML ="<button style = 'border:none;background:white' class ='copy_BA' id = 'cpy_A"+newrow+"' onclick = 'copyrow_Bpffile_add(this.id)'><img src = 'ui/copy.png' class = 'copy_BAd'  title = 'copy previous Row' id = 'cpy_A"+newrow+"' style = 'border:none'></button>"
	cell17.style.border = 'none';
	cell18.innerHTML ="<button style = 'border:none;background:white' onclick = 'Bpf_addnewrow_add()'><img src = 'ui/add.png' class = 'addpng_BAd' id = 'addbut_add"+newrow+"' style = 'border:none'></button>"
	cell18.style.border = 'none';
	cell19.innerHTML ="<button style = 'border:none;background:white'id = 'delbut_add"+newrow+"' class = 'delbut_add' onclick = 'Bpf_deleterow_add(this.id)'><img src = 'ui/delete.png'  class = 'delete_BAd' id = 'del_add"+newrow+"' style = 'border:none'></button>"
	cell19.style.border = 'none';
	cell20.innerHTML = "<td><input type = 'text' class = 'bpfgen_add' id = 'bpf_senData_add_ref"+newrow+"' disabled style='display:none'></td>"
	cell20.style.border = 'none';
	
	document.getElementById("proposition_type_B_A"+newrow).selectedIndex=document.getElementById("proposition_type_B_A"+orow).selectedIndex
	//call drop down loading function
	/*setTimeout(function(){ getpriceplan("proposition_type_B_A"+newrow);	
	},1000); */
	getpriceplan("proposition_type_B_A"+newrow);
	
	document.getElementById("Parent_AccID"+newrow).value=document.getElementById("Parent_AccID"+orow).value
	document.getElementById("User_ID"+newrow).value=document.getElementById("User_ID"+orow).value
	//document.getElementById("Price_Plan"+newrow).value=document.getElementById("Price_Plan"+orow).value
	document.getElementById("Flat_Charge1"+newrow).value=document.getElementById("Flat_Charge1"+orow).value
	document.getElementById("BAN_BA"+newrow).value=document.getElementById("BAN_BA"+orow).value
	document.getElementById("Flat_Charge2"+newrow).value=document.getElementById("Flat_Charge2"+orow).value
	document.getElementById("Flat_Charge3"+newrow).value=document.getElementById("Flat_Charge3"+orow).value
	
	document.getElementById("AL_Fcharge1"+newrow).value=document.getElementById("AL_Fcharge1"+orow).value
	document.getElementById("AL_Fcharge2"+newrow).value=document.getElementById("AL_Fcharge2"+orow).value
	document.getElementById("AL_Fcharge3"+newrow).value=document.getElementById("AL_Fcharge3"+orow).value
	
	document.getElementById("Number_Masking"+newrow).value=document.getElementById("Number_Masking"+orow).value
	document.getElementById("Device_Type"+newrow).value=document.getElementById("Device_Type"+orow).value
	

	
	if(document.getElementById("Service_ID"+orow).value!="" && document.getElementById("Service_ID"+orow).value < 9999999999 ) 
	{
		if(document.getElementById("No_of_Rec_BPF_A"+orow).value=="" || document.getElementById("No_of_Rec_BPF_A"+orow).value== 1)
		{
			var Ser_Id_Incr = parseInt(document.getElementById("Service_ID"+orow).value,10);
			document.getElementById("Service_ID"+newrow).value= Ser_Id_Incr + 1				
		}
		if(document.getElementById("No_of_Rec_BPF_A"+orow).value!="")
		{
			var Ser_Id_Incr = parseInt(document.getElementById("Service_ID"+orow).value,10);
			var BPF_rec_req = parseInt(document.getElementById("No_of_Rec_BPF_A"+orow).value,10);
			document.getElementById("Service_ID"+newrow).value= Ser_Id_Incr + BPF_rec_req				
		}	
	}
	else
	{
	 document.getElementById("Service_ID"+newrow).value=document.getElementById("Service_ID"+orow).value
	}
	if(document.getElementById("Date_Add"+orow).value!='')
	{	
		document.getElementById("Date_Add"+newrow).value=document.getElementById("Date_Add"+orow).value	
	}
	if(document.getElementById("No_of_Rec_BPF_A"+orow).value!='')
	{		
		document.getElementById("No_of_Rec_BPF_A"+newrow).value=document.getElementById("No_of_Rec_BPF_A"+orow).value
	}	
  setTimeout(function(){
	//getpriceplan("proposition_type_B_A"+newrow)
	var $select = $('#Price_Plan'+newrow).selectize({create:true});
	var $select1 = $('#Price_Plan'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
	$select[0].selectize.setValue(test);	
   },1000);	
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}
function Bpf_addnewrow_add()
{
	var bpftable = document.getElementById('bpftable');
	var newrow = bpftable.rows.length;
	var orow = newrow-1;
	var fopt = '';
	var row = bpftable.insertRow(newrow); 
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	var cell15 = row.insertCell(14);
	var cell16 = row.insertCell(15);
	var cell17 = row.insertCell(16);
	var cell18 = row.insertCell(17);
	var cell19 = row.insertCell(18);
	var cell20 = row.insertCell(19);
	prevprop = document.getElementById("proposition_type_B_A"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"	
	}
	cell1.innerHTML = "<Select type = 'text' class = 'bpfgen_add'id = 'proposition_type_B_A"+newrow+"' style='width:100%' onchange= \"Clear_exis_values_BPF_add_mac(this.id);getpriceplan(this.id)\" >"+fopt
	cell1.style.width = '6%';
	cell2.innerHTML = "<input type = 'number' class = 'bpfgen_add' id = 'BAN_BA"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)'>"
	cell2.style.width = '4.5%';
	/*cell3.innerHTML = "<input type = 'number' class = 'bpfgen_add' id = 'Parent_AccID"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell3.style.width = '5%';
	cell4.innerHTML = "<input type = 'number' class = 'bpfgen_add' id = 'Service_ID"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell4.style.width = '5%';*/
	cell3.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'Parent_AccID"+newrow+"'  style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)'onchange='checkusecase_BPF_A(this.id)'>"
	cell3.style.width = '4%';
	cell4.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'Service_ID"+newrow+"'  style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)'>"
	cell4.style.width = '5%';
	cell5.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'User_ID"+newrow+"' style='width:100%'onblur = 'checkEmail_BPF(this.id)' onchange='checkusecase_BPF_A(this.id)' >"
	cell5.style.width = '4%';
	cell6.innerHTML = "<Select type = 'text' class = 'bpfgen_add'  id = 'Price_Plan"+newrow+"'  style='width:100%'  ><option>Please Select</option>"
	$("#Price_Plan"+newrow).selectize({placeholder:'Please Select',create:true});				
	cell6.style.width = '4.5%';

	cell7.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='Acc_Fcharge"+newrow+"' id = 'AL_Fcharge1"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)' >"
	cell7.style.width = '1%';
	cell8.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='Acc_Fcharge"+newrow+"' id = 'AL_Fcharge2"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell8.style.width = '2%';
	cell9.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='Acc_Fcharge"+newrow+"' id = 'AL_Fcharge3"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell9.style.width = '2%';


	cell10.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dlFlat_Charg"+newrow+"' id = 'Flat_Charge1"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell10.style.width = '2%';
	cell11.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dlFlat_Charg"+newrow+"' id = 'Flat_Charge2"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell11.style.width = '2%';
	cell12.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dlFlat_Charg"+newrow+"' id = 'Flat_Charge3"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell12.style.width = '2%';
	
	cell13.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'Number_Masking"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell13.style.width = '6%';
	cell14.innerHTML = "<input type = 'text' class = 'bpfgen_add' list ='dldevice_type"+newrow+"' id = 'Device_Type"+newrow+"' style='width:100%' onchange='checkusecase_BPF_A(this.id)'>"
	cell14.style.width = '5%';	
	cell15.innerHTML = "<input type = 'text' disabled class = 'bpfgen_add' id ='Date_Add"+newrow+"' style=\"width:80%\" onchange='checkusecase_BPF_A(this.id)' ><img src='/ui/images2/cal.gif' class = 'imgbpf_M' id ='Date_Add"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell15.style.width = '5%';
	cell16.innerHTML = "<input type = 'text' class = 'bpfgen_add' id = 'No_of_Rec_BPF_A"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onchange='checkusecase_BPF_A(this.id)' onblur='neg_validation_BPF(this.id)'>"
	cell16.style.width = '6%';	
	cell17.innerHTML ="<button style = 'border:none;background:white' class ='copy_BA' id = 'cpy_A"+newrow+"' onclick = 'copyrow_Bpffile_add(this.id)'><img src = 'ui/copy.png' class = 'copy_BAd'  title = 'copy previous Row' id = 'cpy_A"+newrow+"' style = 'border:none'></button>"
	cell17.style.border = 'none';
	cell18.innerHTML ="<button style = 'border:none;background:white' onclick = 'Bpf_addnewrow_add()'><img src = 'ui/add.png' class = 'addpng_BAd' id = 'addbut_add"+newrow+"' style = 'border:none'></button>"
	cell18.style.border = 'none';
	cell19.innerHTML ="<button style = 'border:none;background:white'id = 'delbut_add"+newrow+"' class = 'delbut_add' onclick = 'Bpf_deleterow_add(this.id)'><img src = 'ui/delete.png'  class = 'delete_BAd' id = 'del_add"+newrow+"' style = 'border:none'></button>"
	cell19.style.border = 'none';
	cell20.innerHTML = "<td><input type = 'text' class = 'bpfgen_add' id = 'bpf_senData_add_ref"+newrow+"' disabled style='display:none'></td>"
	cell20.style.border = 'none';
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

// Function to delete the Mac Field row
function Bpf_deleterow_add(BPF_add_del_id)
{
	//if(BPF_add_del_id=='delbut_add1')  addd
	//{ return;}

	var rownumarr = BPF_add_del_id.split('delbut_add');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var bpftable = document.getElementById('bpftable');
	var newrow = bpftable.rows.length;
	if(newrow === 2)
	{
			//alert('Please Enter minimum one row of data')
			document.getElementById("proposition_type_B_A"+'1').selectedIndex='Please Select'
			document.getElementById("Parent_AccID"+'1').value=''
			document.getElementById("User_ID"+'1').value=''
			//document.getElementById("Price_Plan"+'1').value=''
			$('#Price_Plan1').selectize()[0].selectize.destroy();
			document.getElementById("Price_Plan"+'1').options.length = 0;
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			document.getElementById("Price_Plan"+'1').appendChild(newOption);
			$('#Price_Plan1').selectize({placeholder:'Please Select',create:true});
			document.getElementById("Flat_Charge1"+'1').value=''
			document.getElementById("BAN_BA"+'1').value=''
			document.getElementById("Flat_Charge2"+'1').value=''
			document.getElementById("Flat_Charge3"+'1').value=''

			document.getElementById("AL_Fcharge1"+'1').value=''
			document.getElementById("AL_Fcharge2"+'1').value=''
			document.getElementById("AL_Fcharge3"+'1').value=''			
			
			document.getElementById("Number_Masking"+'1').value=''
			document.getElementById("Device_Type"+'1').value=''
			document.getElementById("Service_ID"+'1').value=''
			document.getElementById("Date_Add"+'1').value=''
			document.getElementById("No_of_Rec_BPF_A"+'1').value=''
	}
	else
	{
		bpftable.deleteRow(rownum);
		var rows = document.getElementsByClassName('delbut_add');
		var rval; 
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_add'+rval;
			
		}
		var rows = document.getElementsByClassName('addpng_BAd');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			if(rows[currow].id.indexOf('addbut_add')!=-1)
			{
				rval =  currow+1;
				rows[currow].id = 'addbut_add'+rval;
			}
		}
		var rows = document.getElementsByClassName('copy_BA');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_A'+rval;
			
		}
		var rows = document.getElementsByClassName('copy_BAd');
		for(currow = 0;currow<newrow-2;currow++)
		{
			if(rows[currow].id.indexOf('cpy_A')!=-1)
			{
				rval =  currow+1;
				rows[currow].id = 'cpy_A'+rval;
			}
		}
		var rows = document.getElementsByClassName('delete_BAd');
		for(currow = 0;currow<newrow-2;currow++)
		{
			if(rows[currow].id.indexOf('del_add')!=-1)
			{
				rval =  currow+1;
				rows[currow].id = 'del_add'+rval;
			}			
		}
		var inputval = document.getElementsByClassName('bpfgen_add');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('bpf_senData_add_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'bpf_senData_add_ref'+iprowid;
				iprowid = iprowid+1;				
			}		
			if(inputval[currinput].id.indexOf('proposition_type_B_A') != -1)
			{
				inputval[currinput].id = 'proposition_type_B_A'+iprowid;
			}
			if(inputval[currinput].id.indexOf('BAN_BA') != -1)
			{
				inputval[currinput].id = 'BAN_BA'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('Parent_AccID') != -1)
			{
				inputval[currinput].id = 'Parent_AccID'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Service_ID') != -1)
			{
				inputval[currinput].id = 'Service_ID'+iprowid;
			}
			if(inputval[currinput].id.indexOf('User_ID') != -1)
			{
				inputval[currinput].id = 'User_ID'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Price_Plan') != -1)
			{
				inputval[currinput].id = 'Price_Plan'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Flat_Charge1') != -1)
			{
				inputval[currinput].id = 'Flat_Charge1'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Flat_Charge2') != -1)
			{
				inputval[currinput].id = 'Flat_Charge2'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Flat_Charge3') != -1) 
			{
				inputval[currinput].id = 'Flat_Charge3'+iprowid;
			}	
			
			if(inputval[currinput].id.indexOf('AL_Fcharge1') != -1) 
			{
				inputval[currinput].id = 'AL_Fcharge1'+iprowid;
			}
			if(inputval[currinput].id.indexOf('AL_Fcharge2') != -1) 
			{
				inputval[currinput].id = 'AL_Fcharge2'+iprowid;
			}		
			if(inputval[currinput].id.indexOf('AL_Fcharge3') != -1) 
			{
				inputval[currinput].id = 'AL_Fcharge3'+iprowid;
			}	
			
			if(inputval[currinput].id.indexOf('Number_Masking') != -1)
			{
				inputval[currinput].id = 'Number_Masking'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Device_Type') != -1)
			{
				inputval[currinput].id = 'Device_Type'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('Date_Add') != -1)
			{
				inputval[currinput].id = 'Date_Add'+iprowid;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_BPF_A') != -1)
			{
				inputval[currinput].id = 'No_of_Rec_BPF_A'+iprowid;
			}				
		}
		var inputval = document.getElementsByClassName('imgbpf_M');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'Date_Add'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((BPF_add_del_id== 'delbut_add1'))
		{
		  var first_row_b1 = document.getElementById("bpftable").rows[1].cells[16];
		  var first_row_b2 = document.getElementById("bpftable").rows[1].cells[17];
		  var first_row_b3 = document.getElementById("bpftable").rows[1].cells[18];
		  var first_row_b4 = document.getElementById("bpftable").rows[1].cells[19];

		  first_row_b1.style.borderTop='1px solid';
		  first_row_b1.style.width='1.2%';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b2.style.width='1.2%';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b3.style.width='1.2%';
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b4.style.width='0.5%';
		}				
	}
}

function copyrow_Bpffile_Mov(pos)
{

	var cpyarr = pos.split('cpy_M');
	var pos = cpyarr[1];
	var bpftable_mov = document.getElementById('bpftable_mov');
	var newrow = bpftable_mov.rows.length;
	var row = bpftable_mov.insertRow(newrow);
	var orow = pos;
	var fopt='';
	var fopt1='';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	//var cell15 = row.insertCell(14);
	prevprop = document.getElementById("proposition_Mov"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"
	}
	var prevpp = $('#Price_Plan_Mov'+orow)[0].selectize.options;
	for(k in prevpp){
		//alert(k);
		fopt1 = fopt1+"<option>"+k+"</options>"
	}
	cell1.innerHTML = "<Select type = 'text' class = 'bpfgen_mov'id = 'proposition_Mov"+newrow+"' style='width:100%' onchange= \"Clear_exis_values_BPF_mov_mac(this.id);getpriceplan(this.id)\" >"+fopt
	cell1.style.width = '7%';
	cell2.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'Service_ID_Mov"+newrow+"' style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_M(this.id)' >"
	cell2.style.width = '5%';
	/*cell2.innerHTML = "<input type = 'number' class = 'bpfgen_mov' id = 'Service_ID_Mov"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)' >"
	cell2.style.width = '5%';
	cell3.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'User_ID_Mov"+newrow+"' style='width:100%' onblur = 'checkEmail_BPF(this.id)'>"
	cell3.style.width = '5%';*/
	cell3.innerHTML = "<Select type = 'text' class = 'bpfgen_mov'  id = 'Price_Plan_Mov"+newrow+"'  style='width:100%'  >"+fopt1

	cell3.style.width = '5%';
	cell4.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dlFlat_Charg_Mov"+newrow+"' id = 'Flat_Charge_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>"
	cell4.style.width = '5%';
	cell5.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dlFlat_Charg_Mov"+newrow+"' id = 'Flat_Charge2_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>"
	cell5.style.width = '5%';
	cell6.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dlFlat_Charg_Mov"+newrow+"' id = 'Flat_Charge3_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)' >"
	cell6.style.width = '5%';
	cell7.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'Number_Masking_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>" 
	cell7.style.width = '7%';	
	cell8.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dldevice_type_Mov"+newrow+"' id = 'Device_Type_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>" 
	cell8.style.width = '7%';	
	cell9.innerHTML = "<input type = 'text' disabled class = 'bpfgen_mov' id ='Date_Mov"+newrow+"' style=\"width:80%\" onchange='checkusecase_BPF_M(this.id)'><img src='/ui/images2/cal.gif' class = 'imgbpf_Mov' id ='Date_Mov"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell9.style.width = '7%';
	cell10.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'No_of_Rec_BPF_M"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onchange='checkusecase_BPF_M(this.id)' onblur='neg_validation_BPF(this.id)'>"
	cell10.style.width = '6%';	
	cell11.innerHTML ="<button style = 'border:none;background:white' class ='copy_BM' id = 'cpy_M"+newrow+"' onclick = 'copyrow_Bpffile_Mov(this.id)'><img src = 'ui/copy.png' class = 'copy_BMo'  title = 'copy previous Row' id = 'cpy_M"+newrow+"' style = 'border:none'></button>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' onclick = 'Bpf_addnewrow_Mov()'><img src = 'ui/add.png' class = 'addpng_BM' id = 'addbut_mov"+newrow+"' style = 'border:none'></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_mov"+newrow+"' class = 'delbut_mov'  onclick = 'Bpf_deleterow_Mov(this.id)'><img src = 'ui/delete.png' class = 'delete_BM' id = 'del_mov"+newrow+"' style = 'border:none'></button>"
	cell13.style.border = 'none';
	cell14.innerHTML = "<td><input type = 'text' class = 'bpfgen_mov' id = 'bpf_senData_Mov_ref"+newrow+"' disabled style='display:none'></td>"
	cell14.style.border = 'none';
	document.getElementById("proposition_Mov"+newrow).selectedIndex=document.getElementById("proposition_Mov"+orow).selectedIndex
	getpriceplan("proposition_Mov"+newrow);
	document.getElementById("Service_ID_Mov"+newrow).value=document.getElementById("Service_ID_Mov"+orow).value
	//document.getElementById("User_ID_Mov"+newrow).value=document.getElementById("User_ID_Mov"+orow).value
	document.getElementById("Price_Plan_Mov"+newrow).value=document.getElementById("Price_Plan_Mov"+orow).value
	document.getElementById("Flat_Charge_Mov"+newrow).value=document.getElementById("Flat_Charge_Mov"+orow).value
	document.getElementById("Flat_Charge2_Mov"+newrow).value=document.getElementById("Flat_Charge2_Mov"+orow).value
	document.getElementById("Flat_Charge3_Mov"+newrow).value=document.getElementById("Flat_Charge3_Mov"+orow).value
	document.getElementById("Number_Masking_Mov"+newrow).value=document.getElementById("Number_Masking_Mov"+orow).value
	document.getElementById("Device_Type_Mov"+newrow).value=document.getElementById("Device_Type_Mov"+orow).value
	//document.getElementById("Date_Mov"+newrow).value=document.getElementById("Date_Mov"+orow).value
	document.getElementById("No_of_Rec_BPF_M"+newrow).value=document.getElementById("No_of_Rec_BPF_M"+orow).value
	if(document.getElementById("Service_ID_Mov"+orow).value!="" && document.getElementById("Service_ID_Mov"+orow).value < 9999999999 ) 
	{
		if(document.getElementById("No_of_Rec_BPF_M"+orow).value=="")
		{
			var Ser_Id_Incr = parseInt(document.getElementById("Service_ID_Mov"+orow).value,10);
			document.getElementById("Service_ID_Mov"+newrow).value= Ser_Id_Incr + 1				
		}
		if(document.getElementById("No_of_Rec_BPF_M"+orow).value!="")
		{
			var Ser_Id_Incr = parseInt(document.getElementById("Service_ID_Mov"+orow).value,10);
			var BPF_rec_req = parseInt(document.getElementById("No_of_Rec_BPF_M"+orow).value,10);
			document.getElementById("Service_ID_Mov"+newrow).value= Ser_Id_Incr + BPF_rec_req				
		}	
	}
	else
	{
	 document.getElementById("Service_ID_Mov"+newrow).value=document.getElementById("Service_ID_Mov"+orow).value
	}	
	if(document.getElementById("Date_Mov"+orow).value!='')
	{	
		document.getElementById("Date_Mov"+newrow).value=document.getElementById("Date_Mov"+orow).value	
	}	
	
  setTimeout(function(){
	var $select = $('#Price_Plan_Mov'+newrow).selectize({create:true});
	var $select1 = $('#Price_Plan_Mov'+orow).selectize();
	var selectizeControl = $select1[0].selectize
    var test = selectizeControl.getValue();
	//alert(test);
	$select[0].selectize.setValue(test);
   },1000);		
	//getpriceplan("proposition_Mov"+newrow)
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}
function Bpf_addnewrow_Mov()
{
	var bpftable_mov = document.getElementById('bpftable_mov');
	var newrow = bpftable_mov.rows.length;
	var row = bpftable_mov.insertRow(newrow);
	var fopt='';
	var orow = newrow-1;
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	var cell14 = row.insertCell(13);
	//var cell15 = row.insertCell(14);
	prevprop = document.getElementById("proposition_Mov"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"
	}
	cell1.innerHTML = "<Select type = 'text' class = 'bpfgen_mov'id = 'proposition_Mov"+newrow+"' style='width:100%' onchange= \"Clear_exis_values_BPF_mov_mac(this.id);getpriceplan(this.id)\"  >"+fopt
	cell1.style.width = '7%';
	cell2.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'Service_ID_Mov"+newrow+"' style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange='checkusecase_BPF_M(this.id)' >"
	cell2.style.width = '5%';
	/*cell2.innerHTML = "<input type = 'number' class = 'bpfgen_mov' id = 'Service_ID_Mov"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)' >"
	cell2.style.width = '5%';
	cell3.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'User_ID_Mov"+newrow+"' style='width:100%' onblur = 'checkEmail_BPF(this.id)'>"
	cell3.style.width = '5%';*/
	cell3.innerHTML = "<Select type = 'text' class = 'bpfgen_mov'  id = 'Price_Plan_Mov"+newrow+"'  style='width:100%'  ><option>Please Select</option>"
	$('#Price_Plan_Mov'+newrow).selectize({placeholder:'Please Select'});
	cell3.style.width = '5%';
	cell4.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dlFlat_Charg_Mov"+newrow+"' id = 'Flat_Charge_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>"
	cell4.style.width = '5%';
	cell5.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dlFlat_Charg_Mov"+newrow+"' id = 'Flat_Charge2_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>"
	cell5.style.width = '5%';
	cell6.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dlFlat_Charg_Mov"+newrow+"' id = 'Flat_Charge3_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>"
	cell6.style.width = '5%';
	cell7.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'Number_Masking_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>" 
	cell7.style.width = '7%';	
	cell8.innerHTML = "<input type = 'text' class = 'bpfgen_mov' list = 'dldevice_type_Mov"+newrow+"' id = 'Device_Type_Mov"+newrow+"' style='width:100%' onchange='checkusecase_BPF_M(this.id)'>" 
	cell8.style.width = '7%';	
	cell9.innerHTML = "<input type = 'text' disabled class = 'bpfgen_mov' id ='Date_Mov"+newrow+"' style=\"width:80%\" onchange='checkusecase_BPF_M(this.id)' ><img src='/ui/images2/cal.gif' class = 'imgbpf_Mov' id ='Date_Mov"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell9.style.width = '7%';
	cell10.innerHTML = "<input type = 'text' class = 'bpfgen_mov' id = 'No_of_Rec_BPF_M"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onchange='checkusecase_BPF_M(this.id)' onblur='neg_validation_BPF(this.id)'>"
	cell10.style.width = '6%';	
	cell11.innerHTML ="<button style = 'border:none;background:white' class ='copy_BM' id = 'cpy_M"+newrow+"' onclick = 'copyrow_Bpffile_Mov(this.id)'><img src = 'ui/copy.png' class = 'copy_BMo'  title = 'copy previous Row' id = 'cpy_M"+newrow+"' style = 'border:none'></button>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' onclick = 'Bpf_addnewrow_Mov()'><img src = 'ui/add.png' class = 'addpng_BM' id = 'addbut_mov"+newrow+"' style = 'border:none'></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_mov"+newrow+"' class = 'delbut_mov'  onclick = 'Bpf_deleterow_Mov(this.id)'><img src = 'ui/delete.png' class = 'delete_BM' id = 'del_mov"+newrow+"' style = 'border:none'></button>"
	cell13.style.border = 'none';
	cell14.innerHTML = "<td><input type = 'text' class = 'bpfgen_mov' id = 'bpf_senData_Mov_ref"+newrow+"' disabled style='display:none'></td>"
	cell14.style.border = 'none';
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}


// Function to delete the Mac Field row
function Bpf_deleterow_Mov(BPF_mov_del_id)								
{
	//if(BPF_mov_del_id=='delbut_mov1')
	//{ return;}
	var rownumarr = BPF_mov_del_id.split('delbut_mov');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var bpftable_mov = document.getElementById('bpftable_mov');
	var newrow = bpftable_mov.rows.length;
	if(newrow === 2)
	{
			//alert('Please Enter minimum one row of data')
			document.getElementById("proposition_Mov"+'1').selectedIndex='Please Select'
			document.getElementById("Service_ID_Mov"+'1').value=''
			//document.getElementById("Price_Plan_Mov"+'1').value=''
			$('#Price_Plan_Mov1').selectize()[0].selectize.destroy();
			document.getElementById("Price_Plan_Mov"+'1').options.length = 0;
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			document.getElementById("Price_Plan_Mov"+'1').appendChild(newOption);
			$('#Price_Plan_Mov1').selectize({placeholder:'Please Select',create:true});
			document.getElementById("Flat_Charge_Mov"+'1').value=''
			document.getElementById("Flat_Charge2_Mov"+'1').value=''
			document.getElementById("Flat_Charge3_Mov"+'1').value=''
			document.getElementById("Number_Masking_Mov"+'1').value=''
			document.getElementById("Device_Type_Mov"+'1').value=''
			document.getElementById("No_of_Rec_BPF_M"+'1').value=''
            document.getElementById("Service_ID_Mov"+'1').value=''
			document.getElementById("Date_Mov"+'1').value=''
	}
	else
	{
		bpftable_mov.deleteRow(rownum);
		var rows = document.getElementsByClassName('delbut_mov');
		var rval; 
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_mov'+rval;
			
		}
		var rows = document.getElementsByClassName('addpng_BM');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			rval =  currow+1;
			rows[currow].id = 'addbut_mov'+rval;
			
		}
		var rows = document.getElementsByClassName('copy_BM');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_M'+rval;
			
		}
		var rows = document.getElementsByClassName('copy_BMo');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_M'+rval;
			
		}
		var rows = document.getElementsByClassName('delete_BM');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'del_mov'+rval;
			
		}
		var inputval = document.getElementsByClassName('bpfgen_mov');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('bpf_senData_Mov_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'bpf_senData_Mov_ref'+iprowid;
				iprowid = iprowid+1;
				
			}		
			if(inputval[currinput].id.indexOf('proposition_Mov') != -1)
			{
				inputval[currinput].id = 'proposition_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Service_ID_Mov') != -1)
			{
				inputval[currinput].id = 'Service_ID_Mov'+iprowid;
			}
			/*if(inputval[currinput].id.indexOf('User_ID_Mov') != -1)
			{
				inputval[currinput].id = 'User_ID_Mov'+iprowid;
			}*/
			if(inputval[currinput].id.indexOf('Price_Plan_Mov') != -1)
			{
				inputval[currinput].id = 'Price_Plan_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Flat_Charge_Mov') != -1)
			{
				inputval[currinput].id = 'Flat_Charge_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Flat_Charge2_Mov') != -1)
			{
				inputval[currinput].id = 'Flat_Charge2_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Flat_Charge3_Mov') != -1)
			{
				inputval[currinput].id = 'Flat_Charge3_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Number_Masking_Mov') != -1)
			{
				inputval[currinput].id = 'Number_Masking_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Device_Type_Mov') != -1)
			{
				inputval[currinput].id = 'Device_Type_Mov'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('Date_Mov') != -1)
			{
				inputval[currinput].id = 'Date_Mov'+iprowid;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_BPF_M') != -1)
			{
				inputval[currinput].id = 'No_of_Rec_BPF_M'+iprowid;
			}			
		}
		var inputval = document.getElementsByClassName('imgbpf_Mov');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'Date_Mov'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((BPF_mov_del_id== 'delbut_mov1'))
		{
		  var first_row_b1 = document.getElementById("bpftable_mov").rows[1].cells[10];
		  var first_row_b2 = document.getElementById("bpftable_mov").rows[1].cells[11];
		  var first_row_b3 = document.getElementById("bpftable_mov").rows[1].cells[12];
		  var first_row_b4 = document.getElementById("bpftable_mov").rows[1].cells[13];

		  first_row_b1.style.borderTop='1px solid';
		  first_row_b1.style.width='1.2%';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b2.style.width='1.2%';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b3.style.width='1.2%';
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b4.style.width='0.5%';
		}			
	}
}
function copyrow_Bpffile_Ter(pos)
{

	var cpyarr = pos.split('cpy_T');
	var pos = cpyarr[1];
	var bpftable_Ter = document.getElementById('bpftable_Ter');
	var newrow = bpftable_Ter.rows.length;
	var row = bpftable_Ter.insertRow(newrow);
	var orow = pos;
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	cell1.innerHTML = "<Select type = 'text' class = 'bpfgen_Ter'id = 'Termination_typ"+newrow+"' style='width:100%' onchange= \"Clear_exis_values_BPF_ter_mac(this.id);BPF_field_level_validation(this.id,'n')\" ><option>Please Select</option><option>USER</option><option>SERVICE</option>"
	cell1.style.width = '8%';
	/*cell2.innerHTML = "<input type = 'number' class = 'bpfgen_Ter'id = 'Site_ID_Ter"+newrow+"' style='width:100%'min=\"1\"  style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell2.style.width = '9%';*/	
	cell2.innerHTML = "<input type = 'text' class = 'bpfgen_Ter'id = 'Site_ID_Ter"+newrow+"' style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange = 'checkusecase_BPF_T(this.id)'>"
	cell2.style.width = '9%';
	cell3.innerHTML = "<input type = 'text' class = 'bpfgen_Ter' id = 'User_ID_Ter"+newrow+"' style='width:100%' onblur = 'checkEmail_BPF(this.id)' onchange = 'checkusecase_BPF_T(this.id)' >"
	cell3.style.width = '9%';
	/*cell4.innerHTML = "<input type = 'number' class = 'bpfgen_Ter'id = 'Service_ID_Ter"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell4.style.width = '9%';*/
	cell4.innerHTML = "<input type = 'text' class = 'bpfgen_Ter'id = 'Service_ID_Ter"+newrow+"' style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange = 'checkusecase_BPF_T(this.id)'onchange = 'checkusecase_BPF_T(this.id)'>"
	cell4.style.width = '9%';
	cell5.innerHTML = "<input type = 'text' disabled class = 'bpfgen_Ter' id ='Date_Ter"+newrow+"' style=\"width:80%\" onchange = 'checkusecase_BPF_T(this.id)'><img src='/ui/images2/cal.gif' class = 'imgbpf_Ter' id ='Date_Ter"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell5.style.width = '9%';
	cell6.innerHTML = "<input type = 'text' disabled class = 'bpfgen_Ter' id = 'No_of_Rec_BPF_T"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onchange = 'checkusecase_BPF_T(this.id)'  onblur='neg_validation_BPF(this.id)'>"
	cell6.style.width = '8%';
	cell7.innerHTML ="<button style = 'border:none;background:white' class ='copy_BT' id = 'cpy_T"+newrow+"' onclick = 'copyrow_Bpffile_Ter(this.id)'><img src = 'ui/copy.png' class = 'copy_Bter'  title = 'copy previous Row' id = 'cpy_T"+newrow+"' style = 'border:none'></button>"
	cell7.style.border = 'none';
	cell8.innerHTML ="<button style = 'border:none;background:white' onclick = 'Bpf_addnewrow_Ter()'><img src = 'ui/add.png' class = 'addpng_Bter' id = 'addbut_ter"+newrow+"' style = 'border:none'></button>"
	cell8.style.border = 'none';
	cell9.innerHTML ="<button style = 'border:none;background:white'  id = 'delbut_ter"+newrow+"' class = 'delbut_term' onclick = 'Bpf_deleterow_Ter(this.id)'><img src = 'ui/delete.png' class = 'delete_Bter' id = 'addbut_ter"+newrow+"' style = 'border:none' ></button>"
	cell9.style.border = 'none';
	cell10.innerHTML = "<td><input type = 'text' class = 'bpfgen_Ter' id = 'bpf_senData_Ter_ref"+newrow+"' disabled style='display:none'></td>"
	cell10.style.border = 'none';
	document.getElementById("Termination_typ"+newrow).selectedIndex=document.getElementById("Termination_typ"+orow).selectedIndex
	document.getElementById("Site_ID_Ter"+newrow).value=document.getElementById("Site_ID_Ter"+orow).value
	document.getElementById("User_ID_Ter"+newrow).value=document.getElementById("User_ID_Ter"+orow).value
	document.getElementById("Service_ID_Ter"+newrow).value=document.getElementById("Service_ID_Ter"+orow).value
	//document.getElementById("Date_Ter"+newrow).value=document.getElementById("Date_Ter"+orow).value
	document.getElementById("No_of_Rec_BPF_T"+newrow).value=document.getElementById("No_of_Rec_BPF_T"+orow).value
	if(document.getElementById("Service_ID_Ter"+orow).value!="" && document.getElementById("Service_ID_Ter"+orow).value < 9999999999 ) 
	{
		if(document.getElementById("No_of_Rec_BPF_T"+orow).value=="")
		{
			var Ser_Id_Incr = parseInt(document.getElementById("Service_ID_Ter"+orow).value,10);
			document.getElementById("Service_ID_Ter"+newrow).value= Ser_Id_Incr + 1				
		}
		if(document.getElementById("No_of_Rec_BPF_T"+orow).value!="")
		{
			var Ser_Id_Incr = parseInt(document.getElementById("Service_ID_Ter"+orow).value,10);
			var BPF_rec_req = parseInt(document.getElementById("No_of_Rec_BPF_T"+orow).value,10);
			document.getElementById("Service_ID_Ter"+newrow).value= Ser_Id_Incr + BPF_rec_req				
		}	
	}
	else
	{
	 document.getElementById("Service_ID_Ter"+newrow).value=document.getElementById("Service_ID_Ter"+orow).value
	}	
	
	if(document.getElementById("Date_Ter"+orow).value!='')
	{	
		document.getElementById("Date_Ter"+newrow).value=document.getElementById("Date_Ter"+orow).value	
	}	
	//CALL FIELD LEVEL VALIDATION 
	BPF_field_level_validation("Termination_typ"+newrow, 'y');
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});

}
function Bpf_addnewrow_Ter()
{
	var bpftable_Ter = document.getElementById('bpftable_Ter');
	var newrow = bpftable_Ter.rows.length;
	var row = bpftable_Ter.insertRow(newrow);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	cell1.innerHTML = "<Select type = 'text' class = 'bpfgen_Ter'id = 'Termination_typ"+newrow+"' style='width:100%' onchange= \"Clear_exis_values_BPF_ter_mac(this.id);BPF_field_level_validation(this.id,'n')\" ><option>Please Select</option><option>USER</option><option>SERVICE</option>"
	cell1.style.width = '8%';
	/*cell2.innerHTML = "<input type = 'number' class = 'bpfgen_Ter'id = 'Site_ID_Ter"+newrow+"' style='width:100%'min=\"1\"  style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell2.style.width = '9%';*/	
	cell2.innerHTML = "<input type = 'text' class = 'bpfgen_Ter'id = 'Site_ID_Ter"+newrow+"' style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange = 'checkusecase_BPF_T(this.id)'>"
	cell2.style.width = '9%';
	cell3.innerHTML = "<input type = 'text' class = 'bpfgen_Ter' id = 'User_ID_Ter"+newrow+"' style='width:100%' onblur = 'checkEmail_BPF(this.id)'  onchange = 'checkusecase_BPF_T(this.id)' >"
	cell3.style.width = '9%';
	/*cell4.innerHTML = "<input type = 'number' class = 'bpfgen_Ter'id = 'Service_ID_Ter"+newrow+"' style='width:100%'min=\"1\"  max=\"999999999\" style='width:100%' onblur = 'neg_validation_BPF(this.id)'>"
	cell4.style.width = '9%';*/
	cell4.innerHTML = "<input type = 'text' class = 'bpfgen_Ter'id = 'Service_ID_Ter"+newrow+"' style='width:100%' onblur = 'neg_validation_BPF(this.id)' onchange = 'checkusecase_BPF_T(this.id)' >"
	cell4.style.width = '9%';
	cell5.innerHTML = "<input type = 'text' disabled class = 'bpfgen_Ter' id ='Date_Ter"+newrow+"' style=\"width:80%\" onchange = 'checkusecase_BPF_T(this.id)' ><img src='/ui/images2/cal.gif' class = 'imgbpf_Ter' id ='Date_Ter"+newrow+"' onclick=\"javascript:NewCssCal(this.id,'ddMMyyyy')\" style=\"cursor:pointer\">"
	cell5.style.width = '9%';
	cell6.innerHTML = "<input type = 'text' disabled class = 'bpfgen_Ter' id = 'No_of_Rec_BPF_T"+newrow+"' min=\"1\"  max=\"5000\" style=\"width:100%\" onblur='neg_validation_BPF(this.id)' onchange = 'checkusecase_BPF_T(this.id)' >"
	cell6.style.width = '8%';
	cell7.innerHTML ="<button style = 'border:none;background:white' class ='copy_BT' id = 'cpy_T"+newrow+"' onclick = 'copyrow_Bpffile_Ter(this.id)'><img src = 'ui/copy.png' class = 'copy_Bter'  title = 'copy previous Row' id = 'cpy_T"+newrow+"' style = 'border:none'></button>"
	cell7.style.border = 'none';
	cell8.innerHTML ="<button style = 'border:none;background:white' onclick = 'Bpf_addnewrow_Ter()'><img src = 'ui/add.png' class = 'addpng_Bter' id = 'addbut_ter"+newrow+"' style = 'border:none'></button>"
	cell8.style.border = 'none';
	cell9.innerHTML ="<button style = 'border:none;background:white'  id = 'delbut_ter"+newrow+"' class = 'delbut_term' onclick = 'Bpf_deleterow_Ter(this.id)'><img src = 'ui/delete.png' class = 'delete_Bter' id = 'addbut_ter"+newrow+"' style = 'border:none' ></button>"
	cell9.style.border = 'none';
	cell10.innerHTML = "<td><input type = 'text' class = 'bpfgen_Ter' id = 'bpf_senData_Ter_ref"+newrow+"' disabled style='display:none'></td>"
	cell10.style.border = 'none';
	$('input').change(function() {
	if( this.className == 'annotreq')
	{
		return;
	}
	else if(this.id == 'password')
	{
		return;
	}
	else
	{
		$(this).attr('title', $(this).val());
	}
});
}

// Function to delete the BPF Field row
function Bpf_deleterow_Ter(BPF_ter_del_id)
{

	//if(BPF_ter_del_id=='delbut_ter1')
	//{ return;}
	var rownumarr = BPF_ter_del_id.split('delbut_ter');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var bpftable_Ter = document.getElementById('bpftable_Ter');
	var newrow = bpftable_Ter.rows.length;
	if(newrow === 2)
	{
			//alert('Please Enter minimum one row of data')
			document.getElementById("Termination_typ"+'1').selectedIndex='Please Select'
			document.getElementById("Site_ID_Ter"+'1').value=''
			document.getElementById("User_ID_Ter"+'1').value=''
			document.getElementById("Service_ID_Ter"+'1').value=''
			document.getElementById("No_of_Rec_BPF_T"+'1').value=''
            document.getElementById("Service_ID_Ter"+'1').value=''
			document.getElementById("Date_Ter"+'1').value=''
			//CALL FIELD LEVEL VALIDATION 
			BPF_field_level_validation("Termination_typ"+'1', 'y');			
	}
	else
	{
		bpftable_Ter.deleteRow(rownum);
		var rows = document.getElementsByClassName('delbut_term');
		var rval; 
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_ter'+rval;
			
		}
		var rows = document.getElementsByClassName('addpng_Bter');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			rval =  currow+1;
			rows[currow].id = 'addbut_ter'+rval;
			
		}
		var rows = document.getElementsByClassName('copy_BT');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_T'+rval;
		}
		var rows = document.getElementsByClassName('copy_Bter');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'cpy_T'+rval;			
		}
		var rows = document.getElementsByClassName('delete_Bter');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'del_ter'+rval;			
		}
		var inputval = document.getElementsByClassName('bpfgen_Ter');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('bpf_senData_Ter_ref') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'bpf_senData_Ter_ref'+iprowid;
				iprowid = iprowid+1;
				
			}		
			if(inputval[currinput].id.indexOf('Termination_typ') != -1)
			{
				inputval[currinput].id = 'Termination_typ'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Site_ID_Ter') != -1)
			{
				inputval[currinput].id = 'Site_ID_Ter'+iprowid;
			}			
			if(inputval[currinput].id.indexOf('User_ID_Ter') != -1)
			{
				inputval[currinput].id = 'User_ID_Ter'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Service_ID_Ter') != -1)
			{
				inputval[currinput].id = 'Service_ID_Ter'+iprowid;   
			}
			if(inputval[currinput].id.indexOf('Date_Ter') != -1) 
			{
				inputval[currinput].id = 'Date_Ter'+iprowid;
			}
			if(inputval[currinput].id.indexOf('No_of_Rec_BPF_T') != -1) 
			{
				inputval[currinput].id = 'No_of_Rec_BPF_T'+iprowid;
			}			
		}
		var inputval = document.getElementsByClassName('imgbpf_Ter');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			inputval[currinput].id = 'Date_Ter'+iprowid;
			iprowid = iprowid+1;
		}
		//Appending the first row top border in case of deletion of first row
		if((BPF_ter_del_id== 'delbut_ter1'))
		{
		  var first_row_b1 = document.getElementById("bpftable_Ter").rows[1].cells[6];
		  var first_row_b2 = document.getElementById("bpftable_Ter").rows[1].cells[7];
		  var first_row_b3 = document.getElementById("bpftable_Ter").rows[1].cells[8];
		  var first_row_b4 = document.getElementById("bpftable_Ter").rows[1].cells[9];

		  first_row_b1.style.borderTop='1px solid';
		  first_row_b1.style.width='2%';
		  first_row_b2.style.borderTop='1px solid';
		  first_row_b2.style.width='2%';
		  first_row_b3.style.borderTop='1px solid';
		  first_row_b3.style.width='2%';
		  first_row_b4.style.borderTop='1px solid';
		  first_row_b4.style.width='0.5%';
		}		
	}
}

function neg_validation_BPF(valu)
{
	
	var This_field_ref =document.getElementById(valu).value
	var This_field_val_Int = This_field_ref
	var This_field_val_Str = This_field_ref.toString();
	
if(( valu.indexOf('No_of_Rec_BPF_A')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('No_of_Rec_BPF_A');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'proposition_type_B_A'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
	
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}	

		return;
	}
	
	if(( valu.indexOf('No_of_Rec_BPF_M')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('No_of_Rec_BPF_M');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'proposition_Mov'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
	
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}	

		return;
	}
	if(( valu.indexOf('No_of_Rec_BPF_T')==0))
	{	
		var No_of_rec = document.getElementById(valu).value;
		var idsplit = valu.split('No_of_Rec_BPF_T');
		var rowid = idsplit[1];
		var targetid;
		targetid = 'Termination_typ'+rowid
		if(No_of_rec=='' && document.getElementById(targetid).value != 'Please Select')
		{
			document.getElementById(valu).value = 1;
		}
	
		var ban_len = This_field_val_Str.length;		
		if(ban_len>=1){
			//parseInt('ms120'.replace(/[^0-9\.]/g, ''), 10);
			var ban_val_f = This_field_val_Str.replace(/[^0-9\.]/g, '');
			var ban_val_f = ban_val_f.replace(/\./g, '');
			document.getElementById(valu).value = ban_val_f;
		}
		if(No_of_rec!='' && document.getElementById(targetid).value == 'Please Select')
		{
			//document.getElementById(valu).value = '';
		}	

		return;
	}
	if( (valu.indexOf('Parent_AccID')==0) || ( valu.indexOf('Service_ID')==0) || ( valu.indexOf('No_of_Rec_BPF_A')==0) || ( valu.indexOf('BAN_BA')==0) || ( valu.indexOf('Site_ID_T')==0)  ) 
	{
			if(This_field_val_Str == "")
			{
				document.getElementById(valu).value = '';
			}
			if(This_field_val_Str == 0)
			{
				document.getElementById(valu).value = '';
			}
			if(This_field_val_Int < 0)
			{
				document.getElementById(valu).value = '';
			}
			if(This_field_val_Str.indexOf('.')!=-1)
			{
				document.getElementById(valu).value ='';
				return;
			}					
	}
//alert('Hi');	
	if(valu.indexOf('Service_ID')!= -1)
	{
		/*if(document.getElementById(valu).value < 0 || document.getElementById(valu).value > 9999999999)	
		{
			alertify.alert('Please enter a valid Service ID .!!');
			document.getElementById(valu).value = '';
			highlightFor(valu,'Moccasin',1);
			return;
		}*/
		var num = document.getElementById(valu).value;
		var n = num.toString();
		if( n == "")
		{
			//alertify.alert('Please enter a valid Service ID .!!');
			document.getElementById(valu).value = '';
			//highlightFor(valu,'Moccasin',1);
			return;
		}
	}
	if(valu.indexOf('No_of_Rec_BPF_A')!= -1 || valu.indexOf('No_of_Rec_BPF_M')!= -1 || valu.indexOf('No_of_Rec_BPF_T')!= -1)
	{
		if(document.getElementById(valu).value < 0 || document.getElementById(valu).value > 5000)	
		{
			alertify.alert('Please enter a valid No of Services .!! <br/>');
			document.getElementById(valu).value = '';
			//highlightFor(valu,'Moccasin',1);
			return;
		}
		var num = document.getElementById(valu).value;
		var n = num.toString();
		if( n == "")
		{
			//alertify.alert('Please enter a valid No of Services .!! <br/>');
			document.getElementById(valu).value = '';
			//highlightFor(valu,'Moccasin',1);
			return;
		}
	}
}

function checkEmail_BPF(valu)
{
    var email = document.getElementById(valu);
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if ( email.value!= '')
  {
    if (!filter.test(email.value))
	{
		//alertify.alert('Please provide a valid email address .!!');
		//document.getElementById(valu).value = '';
		email.focus;
		//highlightFor(valu,'Moccasin',1);  // green yellow blue magenta cyan gray PaleVioletRed SkyBlue LightSalmon PaleVioletRed Moccasin
		return false;
	}
  }
}

function getopcomainjs_BPF()
{
	//getproposition();
	getusername();
	getproposition_Type();
	getproposition_Typemov();
	
	getGermany_mac_usecase();
	//get_price_plan_DE();
	//get_price_plan_NL();
	//get_price_plan_IE();

	
	//getservicetype();
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getopco');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById('OPCOsel');
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].OPCO_Description;
				newOption.innerText = responseJson[currele].OPCO_Description;
				opcodropdown.appendChild(newOption);
			}
        }
    };
	oReq.send();
}

function BPF_field_level_validation(Term_type,copy_flag)
{
	//alert ('Success Entered into Main js ' +Use_case_Id );
	console.log(Term_type);
	//alert('hi entered val');
	var row_ref_id = Term_type.split('Termination_typ');
	var row_ref_val = row_ref_id[1];


	var Site_ID1 = "Site_ID_Ter"+row_ref_val;
	var User_ID1 = "User_ID_Ter"+row_ref_val;
	var Service_ID1 = "Service_ID_Ter"+row_ref_val;
	var Date_Ter_id = "Date_Ter" + row_ref_val;
	var no_of_rec_id = "No_of_Rec_BPF_T"+ row_ref_val;
	var TerminationID = document.getElementById(Term_type).value;
	//
			
			if(TerminationID.indexOf('USER')!= -1)
			{
				document.getElementById(Site_ID1).disabled = false;
				document.getElementById(User_ID1).disabled = false;
				document.getElementById(Service_ID1).disabled = true;
				document.getElementById(no_of_rec_id).disabled = true;
				if(copy_flag!= 'y')
				{
					document.getElementById(Service_ID1).value = '';
					document.getElementById(Date_Ter_id).value = '';
					document.getElementById(no_of_rec_id).value = '';					
				}	
			}
			 if(TerminationID.indexOf('SERVICE')!= -1)
			{				
				document.getElementById(Site_ID1).disabled = true;
				document.getElementById(User_ID1).disabled = true;
				document.getElementById(Service_ID1).disabled = false;
				document.getElementById(no_of_rec_id).disabled = false;
				if(copy_flag!= 'y')
				{				
					document.getElementById(Site_ID1).value = '';				
					document.getElementById(User_ID1).value = '';				
					document.getElementById(Date_Ter_id).value = '';
					document.getElementById(no_of_rec_id).value = '';
				}			
			}
			if(TerminationID== 'Please Select')
			{
				document.getElementById(Site_ID1).disabled = false;
				document.getElementById(User_ID1).disabled = false;
				document.getElementById(Service_ID1).disabled = false;				
				document.getElementById(no_of_rec_id).disabled = true;				
				document.getElementById(Date_Ter_id).disabled = true;				

				if(copy_flag!= 'y')
				{								
					document.getElementById(Date_Ter_id).value = '';
					document.getElementById(Site_ID1).value = '';	
					document.getElementById(User_ID1).value = '';	
					document.getElementById(Service_ID1).value = '';
					document.getElementById(no_of_rec_id).value = '';					
				}
			}	
}

function Clear_exis_values_BPF_ter_mac(Term_type)
{

	var row_ref_id = Term_type.split('Termination_typ');
	var row_ref_val = row_ref_id[1];

	//alert('Please Enter minimum one row of data')
	document.getElementById("Site_ID_Ter"+row_ref_val).value=''
	document.getElementById("User_ID_Ter"+row_ref_val).value=''
	document.getElementById("Service_ID_Ter"+row_ref_val).value=''
	document.getElementById("No_of_Rec_BPF_T"+row_ref_val).value=''
	document.getElementById("Service_ID_Ter"+row_ref_val).value=''
	document.getElementById("Date_Ter"+row_ref_val).value=''	

if(document.getElementById("No_of_Rec_BPF_T"+row_ref_val).value == '' && document.getElementById("Termination_typ"+row_ref_val).value != 'Please Select')
	{
		document.getElementById("No_of_Rec_BPF_T"+row_ref_val).value = 1;
	}	

}


function Clear_exis_values_BPF_add_mac(selectid)
{
            var rownumarr = selectid.split('proposition_type_B_A');
            var rownum = rownumarr[1];			
			//alert('Please Enter minimum one row of data')
			document.getElementById("Parent_AccID"+rownum).value=''
			document.getElementById("User_ID"+rownum).value=''
			//document.getElementById("Price_Plan"+rownum).value=''
			document.getElementById("Flat_Charge1"+rownum).value=''
			document.getElementById("BAN_BA"+rownum).value=''
			document.getElementById("Flat_Charge2"+rownum).value=''
			document.getElementById("Flat_Charge3"+rownum).value=''
			document.getElementById("AL_Fcharge1"+rownum).value=''
			document.getElementById("AL_Fcharge2"+rownum).value=''
			document.getElementById("AL_Fcharge3"+rownum).value=''
			document.getElementById("Number_Masking"+rownum).value=''
			document.getElementById("Device_Type"+rownum).value=''
			document.getElementById("Service_ID"+rownum).value=''
			document.getElementById("Date_Add"+rownum).value=''
			document.getElementById("No_of_Rec_BPF_A"+rownum).value=''	
			
if(document.getElementById("No_of_Rec_BPF_A"+rownum).value =='' && document.getElementById("proposition_type_B_A"+rownum).value != 'Please Select')
		{
			document.getElementById("No_of_Rec_BPF_A"+rownum).value = 1;
		}
}

function Clear_exis_values_BPF_mov_mac(selectid)
{
            var rownumarr = selectid.split('proposition_Mov');
            var rownum = rownumarr[1];

			//alert('Please Enter minimum one row of data')
			document.getElementById("Service_ID_Mov"+rownum).value=''
			//document.getElementById("Price_Plan_Mov"+rownum).value=''
			document.getElementById("Flat_Charge_Mov"+rownum).value=''
			document.getElementById("Flat_Charge2_Mov"+rownum).value=''
			document.getElementById("Flat_Charge3_Mov"+rownum).value=''
			document.getElementById("Number_Masking_Mov"+rownum).value=''
			document.getElementById("Device_Type_Mov"+rownum).value=''
			document.getElementById("No_of_Rec_BPF_M"+rownum).value=''
            document.getElementById("Service_ID_Mov"+rownum).value=''
			document.getElementById("Date_Mov"+rownum).value=''		
if(document.getElementById("No_of_Rec_BPF_M"+rownum).value =='' && document.getElementById("proposition_Mov"+rownum).value != 'Please Select')
		{
			document.getElementById("No_of_Rec_BPF_M"+rownum).value = 1;
		}	
}

function checkusecase_BPF_A(objid)
{

	if(objid.indexOf('BAN_BA')> -1)
	{
		//alert(objid.indexOf('BAN'))
		var splitarr = objid.split('BAN_BA');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Parent_AccID')> -1)
	{
		var splitarr = objid.split('Parent_AccID');
		var rowid = splitarr[1];
		//alert(rowid);
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Service_ID')> -1)
	{
		var splitarr = objid.split('Service_ID');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('User_ID')> -1)
	{
		var splitarr = objid.split('User_ID');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Price_Plan')> -1)
	{
		var splitarr = objid.split('Price_Plan');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Flat_Charge1')> -1)
	{
		var splitarr = objid.split('Flat_Charge1');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Flat_Charge2')> -1)
	{
		var splitarr = objid.split('Flat_Charge2');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Flat_Charge3')> -1)
	{
		var splitarr = objid.split('Flat_Charge3');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('AL_Fcharge1')> -1)
	{
		var splitarr = objid.split('AL_Fcharge1');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('AL_Fcharge2')> -1)
	{
		var splitarr = objid.split('AL_Fcharge2');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('AL_Fcharge3')> -1)
	{
		var splitarr = objid.split('AL_Fcharge3');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Number_Masking')> -1)
	{
		var splitarr = objid.split('Number_Masking');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Device_Type')> -1)
	{
		var splitarr = objid.split('Device_Type');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Date_Add')> -1)
	{
		var splitarr = objid.split('Date_Add');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('No_of_Rec_BPF_A')> -1)
	{
		var splitarr = objid.split('No_of_Rec_BPF_A');
		var rowid = splitarr[1];
		var targetid = 'proposition_type_B_A'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
}


function checkusecase_BPF_M(objid)
{

	if(objid.indexOf('Service_ID_Mov')> -1)
	{
		//alert(objid.indexOf('BAN'))
		var splitarr = objid.split('Service_ID_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Price_Plan_Mov')> -1)
	{
		var splitarr = objid.split('Price_Plan_Mov');
		var rowid = splitarr[1];
		//alert(rowid);
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Flat_Charge_Mov')> -1)
	{
		var splitarr = objid.split('Flat_Charge_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Flat_Charge2_Mov')> -1)
	{
		var splitarr = objid.split('Flat_Charge2_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Flat_Charge3_Mov')> -1)
	{
		var splitarr = objid.split('Flat_Charge3_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Number_Masking_Mov')> -1)
	{
		var splitarr = objid.split('Number_Masking_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Device_Type_Mov')> -1)
	{
		var splitarr = objid.split('Device_Type_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('Date_Mov')> -1)
	{
		var splitarr = objid.split('Date_Mov');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}else if(objid.indexOf('No_of_Rec_BPF_M')> -1)
	{
		var splitarr = objid.split('No_of_Rec_BPF_M');
		var rowid = splitarr[1];
		var targetid = 'proposition_Mov'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
}

function checkusecase_BPF_T(objid)
{

	if(objid.indexOf('Site_ID_Ter')> -1)
	{
		//alert(objid.indexOf('BAN'))
		var splitarr = objid.split('Site_ID_Ter');
		var rowid = splitarr[1];
		var targetid = 'Termination_typ'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('User_ID_Ter')> -1)
	{
		var splitarr = objid.split('User_ID_Ter');
		var rowid = splitarr[1];
		//alert(rowid);
		var targetid = 'Termination_typ'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Service_ID_Ter')> -1)
	{
		var splitarr = objid.split('Service_ID_Ter');
		var rowid = splitarr[1];
		var targetid = 'Termination_typ'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('Date_Ter')> -1)
	{
		var splitarr = objid.split('Date_Ter');
		var rowid = splitarr[1];
		var targetid = 'Termination_typ'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
	else if(objid.indexOf('No_of_Rec_BPF_T')> -1)
	{
		var splitarr = objid.split('No_of_Rec_BPF_T');
		var rowid = splitarr[1];
		var targetid = 'Termination_typ'+rowid;
		if(document.getElementById(targetid).value === 'Please Select')
		{
			document.getElementById(objid).value = '';
			alertify.alert('Please Select Proposition Type and Proceed')
		}
	}
}


function getpriceplan(selectid) {

    var opcoval = document.getElementById('OPCOsel').value;
    if (opcoval === 'Please Select') {
        alertify.alert('Please select OPCO and proceed')
        document.getElementById(selectid).value = 'Please Select'
    }else {

        if (selectid.indexOf('proposition_type_B_A') != -1) //-----**********
        {

            console.log(selectid);
            var oReq = new XMLHttpRequest();
            var rownumarr = selectid.split('proposition_type_B_A');
            var rownum = rownumarr[1];
							
            var priceplan_id = 'Price_Plan' + rownum
            var propval = document.getElementById('proposition_type_B_A' + rownum).value;
            var opcodropdown = document.getElementById(priceplan_id);
            //opcodropdown.options.length = 0;
            console.log(propval);
            if (propval.indexOf("+") >= 0) {
                propval = propval.replace('+', '%2B');
            }
            if (propval.indexOf("&") >= 0) {
                propval = propval.replace('&', '%26');
            }
			$('#'+priceplan_id).selectize()[0].selectize.destroy();
			opcodropdown.options.length = 0;
			
            if (propval != 'Please Select') {
                oReq.open("GET", '/GetPP_BPF?retval=' + propval);
                var reponsetxt;
                var responseJson;
                var jsonlen;
                var newOption;
                var divid = document.getElementById('B_content');
                var newlist;
                
                oReq.onreadystatechange = function() {
                    if (oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                        console.log(oReq.responseText);
                        reponsetxt = oReq.responseText
                        responseJson = JSON.parse(reponsetxt);
                        jsonlen = responseJson.length
						newOption = document.createElement('option');
						newOption.value = 'Please Select';
						newOption.innerText = 'Please Select';
						opcodropdown.appendChild(newOption);
                        for (var currele = 0; currele < jsonlen; currele++) {
                            newOption = document.createElement('option');
                            newOption.value = responseJson[currele].price_plan;
                            newOption.innerText = responseJson[currele].price_plan;
                            opcodropdown.appendChild(newOption);
                        }
						$('#'+priceplan_id).selectize({placeholder:'Please Select',create:true});
                    }
                };
                oReq.send();
            }else if(propval == 'Please Select'){
				$('#'+priceplan_id).selectize({placeholder:'Please Select',create:true});
			}
			
			//Account Level ***********************************
			if (propval != 'Please Select') {
					var oReq6 = new XMLHttpRequest();
					var rownumarr_1 = selectid.split('proposition_type_B_A');
					var rownm_1 = rownumarr_1[1];
					var AFlatCharge_id1 = 'AL_Fcharge1' + rownm_1
					var AFlatCharge_id2 = 'AL_Fcharge2' + rownm_1
					var AFlatCharge_id3 = 'AL_Fcharge3' + rownm_1
					var propvl = document.getElementById('proposition_type_B_A' + rownm_1).value;
					var Aopcodropdwn1 = document.getElementById(AFlatCharge_id1);
					var Aopcodropdwn2 = document.getElementById(AFlatCharge_id2);
					var Aopcodropdwn3 = document.getElementById(AFlatCharge_id3);
					//opcodropdown.options.length = 0;
					console.log('Account level:'+propvl);
					if (propvl.indexOf("+") >= 0) {
						propvl = propvl.replace('+', '%2B');
					}
					if (propvl.indexOf("&") >= 0) {
						propvl = propvl.replace('&', '%26');
					}
					if (propvl != 'Please Select') {
						oReq6.open("GET", '/GetFC_BPF_acc_level?retval=' + propvl);
						var Areponsetxt;
						var AresponseJson;
						var Ajsonlen;
						var AnewOption;
						var Adivid = document.getElementById('B_content');
						var Anewlst;
						if (document.getElementById("Acc_Fcharge" + rownm_1) === null) {
							Anewlst = document.createElement('DATALIST');
							Anewlst.id = "Acc_Fcharge" + rownm_1;
							Adivid.appendChild(Anewlst);
						} else {
							Anewlst = document.getElementById("Acc_Fcharge" + rownm_1);
							Adivid.removeChild(Anewlst);
							Anewlst = '';
							Anewlst = document.createElement('DATALIST');
							Anewlst.id = "Acc_Fcharge" + rownm_1;
							Adivid.appendChild(Anewlst);
						}
						Aopcodropdwn1.setAttribute("list", "Acc_Fcharge" + rownm_1);
						Aopcodropdwn2.setAttribute("list", "Acc_Fcharge" + rownm_1);
						Aopcodropdwn3.setAttribute("list", "Acc_Fcharge" + rownm_1); 
						oReq6.onreadystatechange = function() {
							if (oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {
								console.log(oReq6.responseText);
								Areponsetxt = oReq6.responseText
								AresponseJson = JSON.parse(Areponsetxt);
								Ajsonlen = AresponseJson.length
								for (var currele = 0; currele < Ajsonlen; currele++) {
									AnewOption = document.createElement('option');
									AnewOption.value = AresponseJson[currele].flat_charge;
									AnewOption.innerText = AresponseJson[currele].flat_charge;
									Anewlst.appendChild(AnewOption);
								}
							}
						};
						oReq6.send();
					}			
			}
			if (propval != 'Please Select') {			
				var oReq1 = new XMLHttpRequest();
				var rownumarr1 = selectid.split('proposition_type_B_A');
				var rownm = rownumarr1[1];
				var FlatCharge_id1 = 'Flat_Charge1' + rownm
				var FlatCharge_id2 = 'Flat_Charge2' + rownm
				var FlatCharge_id3 = 'Flat_Charge3' + rownm
				var propvl = document.getElementById('proposition_type_B_A' + rownm).value;
				var opcodropdwn1 = document.getElementById(FlatCharge_id1);
				var opcodropdwn2 = document.getElementById(FlatCharge_id2);
				var opcodropdwn3 = document.getElementById(FlatCharge_id3);
				//opcodropdown.options.length = 0;
				console.log(propvl);
				if (propvl.indexOf("+") >= 0) {
					propvl = propvl.replace('+', '%2B');
				}
				if (propvl.indexOf("&") >= 0) {
					propvl = propvl.replace('&', '%26');
				}
				if (propvl != 'Please Select') {
					oReq1.open("GET", '/GetFC_BPF_Mov?retval=' + propvl);
					var reponsetxt;
					var responseJson;
					var jsonlen;
					var newOption;
					var divid = document.getElementById('B_content');
					var newlst;
					if (document.getElementById("dlFlat_Charg" + rownm) === null) {
						newlst = document.createElement('DATALIST');
						newlst.id = "dlFlat_Charg" + rownm;
						divid.appendChild(newlst);
					} else {
						newlst = document.getElementById("dlFlat_Charg" + rownm);
						divid.removeChild(newlst);
						newlst = '';
						newlst = document.createElement('DATALIST');
						newlst.id = "dlFlat_Charg" + rownm;
						divid.appendChild(newlst);
					}
					opcodropdwn1.setAttribute("list", "dlFlat_Charg" + rownm);
					opcodropdwn2.setAttribute("list", "dlFlat_Charg" + rownm);
					opcodropdwn3.setAttribute("list", "dlFlat_Charg" + rownm);
					oReq1.onreadystatechange = function() {
						if (oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
							console.log('service level:'+oReq1.responseText);
							reponsetxt = oReq1.responseText
							responseJson = JSON.parse(reponsetxt);
							jsonlen = responseJson.length
							for (var currele = 0; currele < jsonlen; currele++) {
								newOption = document.createElement('option');
								newOption.value = responseJson[currele].flat_charge;
								newOption.innerText = responseJson[currele].flat_charge;
								newlst.appendChild(newOption);
							}
						}
					};
					oReq1.send();
				}
			}	
            console.log(selectid);
            var oReq3 = new XMLHttpRequest();
            var rownumar = selectid.split('proposition_type_B_A');
            var rownum = rownumar[1];
            var devicetype_id = 'Device_Type' + rownum
            var prpvl = document.getElementById('proposition_type_B_A' + rownum).value;
            var opcodropdown4 = document.getElementById(devicetype_id);
            //opcodropdown.options.length = 0;
            console.log(prpvl);
            if (prpvl.indexOf("+") >= 0) {
                prpvl = prpvl.replace('+', '%2B');
            }
            if (prpvl.indexOf("&") >= 0) {
                prpvl = prpvl.replace('&', '%26');
            }

            if (prpvl != 'Please Select') {
                oReq3.open("GET", '/GetDTP_BPF?retval=' + prpvl);
                var reponsetxt;
                var responseJson;
                var jsonlen;
                var newOption;
                var divid = document.getElementById('B_content');
                var newlist1;
                if (document.getElementById("dldevice_type" + rownum) === null) {
                    newlist1 = document.createElement('DATALIST');
                    newlist1.id = "dldevice_type" + rownum;
                    divid.appendChild(newlist1);
                } else {
                    newlist1 = document.getElementById("dldevice_type" + rownum);
                    divid.removeChild(newlist1);
                    newlist1 = '';
                    newlist1 = document.createElement('DATALIST');
                    newlist1.id = "dldevice_type" + rownum;
                    divid.appendChild(newlist1);
                }
                opcodropdown4.setAttribute("list", "dldevice_type" + rownum);
                oReq3.onreadystatechange = function() {
                    if (oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
                        console.log('device type add result: - '+oReq3.responseText);
                        reponsetxt = oReq3.responseText
                        responseJson = JSON.parse(reponsetxt);
                        jsonlen = responseJson.length
                        for (var currele = 0; currele < jsonlen; currele++) {
                            newOption = document.createElement('option');
                            newOption.value = responseJson[currele].device_type;
                            newOption.innerText = responseJson[currele].device_type;
                            newlist1.appendChild(newOption);
                        }
                    }
                };
                oReq3.send();
            }



        } else if (selectid.indexOf('proposition_Mov') != -1) //-----**********
        {
            console.log(selectid);
            var oReq = new XMLHttpRequest();
            var rownumarr = selectid.split('proposition_Mov');
            var rownum = rownumarr[1];	
			
            var priceplan_id = 'Price_Plan_Mov' + rownum
            var propval = document.getElementById('proposition_Mov' + rownum).value;
            var opcodropdown = document.getElementById(priceplan_id);
            //opcodropdown.options.length = 0;
            console.log(propval);
            if (propval.indexOf("+") >= 0) {
                propval = propval.replace('+', '%2B');
            }
            if (propval.indexOf("&") >= 0) {
                propval = propval.replace('&', '%26');
            }

            if (propval != 'Please Select') {
                oReq.open("GET", '/GetPP_BPF_Mov?retval=' + propval);
                var reponsetxt;
                var responseJson;
                var jsonlen;
                var newOption;
                var divid = document.getElementById('B_content_Mov');
                var newlist;
                $('#'+priceplan_id).selectize()[0].selectize.destroy();
				opcodropdown.options.length = 0;
                //opcodropdown.setAttribute("list", "dlPrice_Plan_Mov" + rownum);
                oReq.onreadystatechange = function() {
                    if (oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                        console.log(oReq.responseText);
                        reponsetxt = oReq.responseText
                        responseJson = JSON.parse(reponsetxt);
                        jsonlen = responseJson.length
						 newOption = document.createElement('option');
                            newOption.value = 'Please Select';
                            newOption.innerText = 'Please Select';
                            opcodropdown.appendChild(newOption);
                        for (var currele = 0; currele < jsonlen; currele++) {
                            newOption = document.createElement('option');
                            newOption.value = responseJson[currele].price_plan;
                            newOption.innerText = responseJson[currele].price_plan;
                            opcodropdown.appendChild(newOption);
                        }
						$('#'+priceplan_id).selectize({placeholder:'Please Select',create:true});
                    }
                };
                oReq.send();
            }else if(propval == 'Please Select'){
				$('#'+priceplan_id).selectize({placeholder:'Please Select',create:true});
			}
            var oReq1 = new XMLHttpRequest();
            var rownumarr1 = selectid.split('proposition_Mov');
            var rownm = rownumarr1[1];
            var FlatCharge_id1 = 'Flat_Charge_Mov' + rownm
            var FlatCharge_id2 = 'Flat_Charge2_Mov' + rownm
            var FlatCharge_id3 = 'Flat_Charge3_Mov' + rownm
            var propvl = document.getElementById('proposition_Mov' + rownm).value;
            var opcodropdwn1 = document.getElementById(FlatCharge_id1);
            var opcodropdwn2 = document.getElementById(FlatCharge_id2);
            var opcodropdwn3 = document.getElementById(FlatCharge_id3);
            //opcodropdown.options.length = 0;
            console.log(propvl);
            if (propvl.indexOf("+") >= 0) {
                propvl = propvl.replace('+', '%2B');
            }
            if (propvl.indexOf("&") >= 0) {
                propvl = propvl.replace('&', '%26');
            }

            if (propvl != 'Please Select') {
                oReq1.open("GET", '/GetFC_BPF_Mov?retval=' + propvl);
                var reponsetxt;
                var responseJson;
                var jsonlen;
                var newOption;
                var divid = document.getElementById('B_content_Mov');
                var newlst;
                if (document.getElementById("dlFlat_Charg_Mov" + rownm) === null) {
                    newlst = document.createElement('DATALIST');
                    newlst.id = "dlFlat_Charg_Mov" + rownm;
                    divid.appendChild(newlst);
                } else {
                    newlst = document.getElementById("dlFlat_Charg_Mov" + rownm);
                    divid.removeChild(newlst);
                    newlst = '';
                    newlst = document.createElement('DATALIST');
                    newlst.id = "dlFlat_Charg_Mov" + rownm;
                    divid.appendChild(newlst);
                }
                opcodropdwn1.setAttribute("list", "dlFlat_Charg_Mov" + rownm);
                opcodropdwn2.setAttribute("list", "dlFlat_Charg_Mov" + rownm);
                opcodropdwn3.setAttribute("list", "dlFlat_Charg_Mov" + rownm);
                oReq1.onreadystatechange = function() {
                    if (oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
                        console.log(oReq1.responseText);
                        reponsetxt = oReq1.responseText
                        responseJson = JSON.parse(reponsetxt);
                        jsonlen = responseJson.length
                        for (var currele = 0; currele < jsonlen; currele++) {
                            newOption = document.createElement('option');
                            newOption.value = responseJson[currele].flat_charge;
                            newOption.innerText = responseJson[currele].flat_charge;
                            newlst.appendChild(newOption);
                        }
                    }
                };
                oReq1.send();
            }
            console.log(selectid);
            var oReq3 = new XMLHttpRequest();
            var rownumar = selectid.split('proposition_Mov');
            var rownum = rownumar[1];
            var devicetype_id = 'Device_Type_Mov' + rownum
            var prpvl = document.getElementById('proposition_Mov' + rownum).value;
            var opcodropdown4 = document.getElementById(devicetype_id);
            //opcodropdown.options.length = 0;
            console.log(prpvl);
            if (prpvl.indexOf("+") >= 0) {
                prpvl = prpvl.replace('+', '%2B');
            }
            if (prpvl.indexOf("&") >= 0) {
                prpvl = prpvl.replace('&', '%26');
            }

            if (prpvl != 'Please Select') {
                oReq3.open("GET", '/GetDTP_BPF_Mov?retval=' + prpvl);
                var reponsetxt;
                var responseJson;
                var jsonlen;
                var newOption;
                var divid = document.getElementById('B_content_Mov');
                var newlist1;
                if (document.getElementById("dldevice_type_Mov" + rownum) === null) {
                    newlist1 = document.createElement('DATALIST');
                    newlist1.id = "dldevice_type_Mov" + rownum;
                    divid.appendChild(newlist1);
                } else {
                    newlist1 = document.getElementById("dldevice_type_Mov" + rownum);
                    divid.removeChild(newlist1);
                    newlist1 = '';
                    newlist1 = document.createElement('DATALIST');
                    newlist1.id = "dldevice_type_Mov" + rownum;
                    divid.appendChild(newlist1);
                }
                opcodropdown4.setAttribute("list", "dldevice_type_Mov" + rownum);
                oReq3.onreadystatechange = function() {
                    if (oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
                        console.log(oReq3.responseText);
                        reponsetxt = oReq3.responseText
                        responseJson = JSON.parse(reponsetxt);
                        jsonlen = responseJson.length
                        for (var currele = 0; currele < jsonlen; currele++) {
                            newOption = document.createElement('option');
                            newOption.value = responseJson[currele].device_type;
                            newOption.innerText = responseJson[currele].device_type;
                            newlist1.appendChild(newOption);
                        }
                    }
                };
                oReq3.send();
            }

        }
    }

}

//--------------------------------------------------------Sravani Reddy BPF File Creation--------------------------------------------------------------------

// BPF and MAC Related GUI functions for Provisioning.html Start ---------------------------------------------


            function Warn() {
               alertify.alert ("Dear, \n \n Development is In-progress Stay Tuned !!");
            }

function get_price_plan_DE(usagecode)  
			{
					var oReq = new XMLHttpRequest();
					oReq.open("GET", '/getNewserPP_DE');
					var reponsetxt;
					var responseJson;	
					var jsonlen;
					var newOption;
					
					var newOption1;
					var rownumarr = usagecode.split('DE_use_case');
					
					var divid = document.getElementById('M_content_DE');
					var rownum;
					rownum = rownumarr[1];
					console.log(rownum);
					
					var exis_pp_dropdown = document.getElementById('DE_Tarrif_code'+rownum);
					var exis_pp_desc_dropdown = document.getElementById('DE_Tarrif_desc'+rownum);
					$('#DE_Tarrif_code'+rownum).selectize()[0].selectize.destroy();
					$('#DE_Tarrif_desc'+rownum).selectize()[0].selectize.destroy();
					//document.get
					exis_pp_dropdown.length = 0;
					exis_pp_desc_dropdown.length = 0;
					oReq.onreadystatechange = function () {
						if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
							console.log(oReq.responseText);
							reponsetxt = oReq.responseText
							responseJson = JSON.parse(reponsetxt);
							jsonlen = responseJson.length
							newOption = document.createElement('option');
								newOption.value = 'Please Select';
								newOption.innerText = 'Please Select';
								exis_pp_dropdown.appendChild(newOption);
								
								newOption1 = document.createElement('option');
								newOption1.value = 'Please Select';
								newOption1.innerText = 'Please Select';
								exis_pp_desc_dropdown.appendChild(newOption1);
							for(var currele = 0;currele<jsonlen;currele++)
							{
								//console.log(responseJson[currele].price_plan);
								newOption = document.createElement('option');
								newOption.value = responseJson[currele].CODE;
								newOption.innerText = responseJson[currele].CODE;
								exis_pp_dropdown.appendChild(newOption);
								
								newOption1 = document.createElement('option');
								newOption1.value = responseJson[currele].DESCRIP;
								newOption1.innerText = responseJson[currele].DESCRIP;
								exis_pp_desc_dropdown.appendChild(newOption1);
							}
							$('#DE_Tarrif_code'+rownum).selectize({placeholder:'Please Select',create:true});
							$('#DE_Tarrif_desc'+rownum).selectize({placeholder:'Please Select',create:true});
						}
					};
					oReq.send();

			}


			
			function getGermany_mac_usecase()
			{
				
					var oReq = new XMLHttpRequest();
					oReq.open("GET", '/getGermany_mac_usecase');
					var reponsetxt;
					var responseJson;
					var jsonlen;
					var newOption;
					//alert('Hi..');
					//var opcodropdown = document.getElementById('proposition_type_B_A1');
					//var Buss_case = document.getElementById('Business_S_BPF');	
					var moddrop = document.getElementById('DE_use_case1');
					//if(Buss_case =='BPF_ADD')
					//{	
					oReq.onreadystatechange = function () {
						if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
							console.log(oReq.responseText);
							reponsetxt = oReq.responseText
							responseJson = JSON.parse(reponsetxt);
							jsonlen = responseJson.length
							newOption = document.createElement('option');
							newOption.value = 'Please Select';
							newOption.innerText = 'Please Select';
							//opcodropdown.appendChild(newOption);
							moddrop.appendChild(newOption);
							for(var currele = 0;currele<jsonlen;currele++)
							{
								newOption = document.createElement('option');
								newOption.value = responseJson[currele].usecase;
								newOption.innerText = responseJson[currele].usecase;
								//opcodropdown.appendChild(newOption);
								moddrop.appendChild(newOption);
							}
							}
						};
						oReq.send();
									
			}
            function Hide_BPF() {
			   //document.getElementById('frmUploader').style.display='none';
			   document.getElementById('Mac_BPF_gen').style.display='inline';	
			   document.getElementById('BPF_gen').style.display='none';
			   document.getElementById('Mac_gen').style.display='inline';

			   //****
			    document.getElementById('File_L').style.display='inline';
			    document.getElementById('FileTyp_s').value='MAC_Flag';
			    document.getElementById('OPCOsel_Mac').value='United Kingdom';
			    document.getElementById('OPCOcode_Mac').value='1109';
                document.getElementById('File_E').style.display='inline';
                document.getElementById('frmUploader').style.display='inline';
				document.getElementById('FileExi_v').value = 'val_FN'
                document.getElementById('Browse_L').style.display='none';
                document.getElementById('file').style.display='none';
                document.getElementById('upload_B').style.display='none';
				
			   document.getElementById('Mac_gen_vebp_upload').style.display='inline';
			   document.getElementById('BPF_gen_vebp_upload').style.display='none';
			   
			   //document.getElementById('OPCOcode_Mac').value='';
			   document.getElementById('B_content').style.display='none';
			   document.getElementById('B_content_Mov').style.display='none';
			   document.getElementById('B_content_Ter').style.display='none';
			   document.getElementById('Clear_bpf_gen').style.display='none';
			   
			   //Denmark MAC
			   document.getElementById('M_content_DE').style.display='none';
			   document.getElementById('M_content_NL').style.display='none';
			   document.getElementById('M_content_IE').style.display='none';

			   
            }
           function Populate_opco_code_mac(value) {			
				if(value =='United Kingdom'){
				 document.getElementById('OPCOcode_Mac').value='1109';	


				 	
				 //Denmark MAC
					 if(document.getElementById('FileExi_v').value == 'val_FN'){
						 document.getElementById('M_content').style.display='inline';
						 document.getElementById('M_content_DE').style.display='none';
						 document.getElementById('M_content_NL').style.display='none';
						 document.getElementById('M_content_IE').style.display='none';
					 } 	 
			    }else if(value =='Germany'){
				 document.getElementById('OPCOcode_Mac').value='1101';	
				 //Denmark MAC
					 if(document.getElementById('FileExi_v').value == 'val_FN'){
						 document.getElementById('M_content').style.display='none';
						 document.getElementById('M_content_DE').style.display='inline';
						 document.getElementById('M_content_NL').style.display='none';
						 document.getElementById('M_content_IE').style.display='none';
					 } 	
			    }else if(value =='Netherland'){
				 document.getElementById('OPCOcode_Mac').value='1107';
				 //Denmark MAC
					 if(document.getElementById('FileExi_v').value == 'val_FN'){
						 document.getElementById('M_content').style.display='none';
						 document.getElementById('M_content_DE').style.display='none';
						 document.getElementById('M_content_NL').style.display='inline';
						 document.getElementById('M_content_IE').style.display='none';
					 }
			    }else if(value =='Ireland'){
				 document.getElementById('OPCOcode_Mac').value='1105';
				 //Denmark MAC
					 if(document.getElementById('FileExi_v').value == 'val_FN'){
						 document.getElementById('M_content').style.display='none';
						 document.getElementById('M_content_DE').style.display='none';
						 document.getElementById('M_content_NL').style.display='none';
						 document.getElementById('M_content_IE').style.display='inline';

					 }
			    }else{
				 document.getElementById('OPCOcode_Mac').value='';
				}
             }
			 
		   function file_upload_val(){
			var nme = document.getElementById("file");
				if(nme.value.length < 4) {
					alertify.alert('please select file to Upload .!!');
					nme.focus();
					return false;
				}else if (document.getElementById("OPCOsel_Mac").value== 'Please select' && document.getElementById("FileTyp_s").value =='MAC_Flag'){
					alertify.alert('please select the OPCO .!!');
					return false;					
				}else if (document.getElementById("OPCOsel").value== 'Please Select' && document.getElementById("FileTyp_s").value =='BPF_Flag') {
					alertify.alert('please select the OPCO .!!');
					return false;					
				}	
		   }
			 function FExist(value){
				 
				 console.log(value);
				 if(value=="val_FE" && document.getElementById('FileTyp_s').value=="MAC_Flag"){
					document.getElementById('frmUploader').style.display='inline';
					document.getElementById('Browse_L').style.display='inline';
					document.getElementById('file').style.display='inline';
					document.getElementById('upload_B').style.display='inline';

					//document.getElementById('File_up').style.display='inline';
					document.getElementById('File_L').style.display='inline';
					document.getElementById('opco_L').style.display='none';
					document.getElementById('OPCOsel').style.display='none';
					document.getElementById('opcocode_L').style.display='none';
					document.getElementById('OPCOcode').style.display='none';				
					document.getElementById('BS_C_L').style.display='none';
					document.getElementById('Business_S_BPF').style.display='none';
					document.getElementById('Mac_gen').style.display='none';
					document.getElementById('BPF_gen').style.display='none';
					document.getElementById('Clear_mac_gen').style.display='none';
					document.getElementById('Clear_bpf_gen').style.display='none';
					document.getElementById('Mac_BPF_gen').style.display='none';
					document.getElementById('M_content').style.display='none';
					document.getElementById('opco_L_Mac').style.display='inline';
					document.getElementById('OPCOsel_Mac').style.display='inline';
					document.getElementById('opcocode_L_M').style.display='none';
					document.getElementById('OPCOcode_Mac').style.display='none';
					document.getElementById('B_content').style.display='none';
					document.getElementById('B_content_Mov').style.display='none';
					document.getElementById('B_content_Ter').style.display='none';
					//****
					document.getElementById('Mac_gen_vebp_upload').style.display='none';
					document.getElementById('BPF_gen_vebp_upload').style.display='none';
					Populate_opco_code_mac(document.getElementById('OPCOsel_Mac').value)
				   //Denmark MAC
				   document.getElementById('M_content').style.display='none';
				   document.getElementById('M_content_DE').style.display='none';
				   document.getElementById('M_content_NL').style.display='none';
				   document.getElementById('M_content_IE').style.display='none';

				 }
				 
				 else if
				 (value=="val_FE" && document.getElementById('FileTyp_s').value=="BPF_Flag"){
					document.getElementById('frmUploader').style.display='inline';
					document.getElementById('Browse_L').style.display='inline';
					document.getElementById('file').style.display='inline';
					document.getElementById('upload_B').style.display='inline';

					//document.getElementById('File_up').style.display='inline';
					document.getElementById('File_L').style.display='inline';
					document.getElementById('opco_L').style.display='inline';
					document.getElementById('OPCOsel').style.display='inline';
					document.getElementById('opcocode_L').style.display='none';
					document.getElementById('OPCOcode').style.display='none';				
					document.getElementById('BS_C_L').style.display='none';
					document.getElementById('Business_S_BPF').style.display='none';
					document.getElementById('Mac_gen').style.display='none';
					document.getElementById('BPF_gen').style.display='none';
					document.getElementById('Clear_mac_gen').style.display='none';
					document.getElementById('Clear_bpf_gen').style.display='none';
					document.getElementById('Mac_BPF_gen').style.display='none';
					document.getElementById('M_content').style.display='none';
					document.getElementById('opco_L_Mac').style.display='none';
					document.getElementById('OPCOsel_Mac').style.display='none';
					document.getElementById('opcocode_L_M').style.display='none';
					document.getElementById('OPCOcode_Mac').style.display='none';
					document.getElementById('B_content').style.display='none';
					document.getElementById('B_content_Mov').style.display='none';
					document.getElementById('B_content_Ter').style.display='none';
					//****
					document.getElementById('Mac_gen_vebp_upload').style.display='none';
					document.getElementById('BPF_gen_vebp_upload').style.display='none';
				   //Denmark MAC
				   document.getElementById('M_content_DE').style.display='none';
				   document.getElementById('M_content_NL').style.display='none';
				   document.getElementById('M_content_IE').style.display='none';

					
				 }
				 
				 else if(value=="val_FN" && document.getElementById('FileTyp_s').value=="MAC_Flag")
				 {
						document.getElementById('frmUploader').style.display='inline';
						document.getElementById('Browse_L').style.display='none';
						document.getElementById('file').style.display='none';
						document.getElementById('upload_B').style.display='none';
						
						//document.getElementById('File_up').style.display='none';
						document.getElementById('File_L').style.display='inline';
						//document.getElementById('FileTyp_s').value='MAC_Flag';
						document.getElementById('opco_L').style.display='none';
						document.getElementById('OPCOsel').style.display='none';
						document.getElementById('opcocode_L').style.display='none';
						document.getElementById('OPCOcode').style.display='none';			
						document.getElementById('opco_L_Mac').style.display='inline';
						document.getElementById('OPCOsel_Mac').style.display='inline';
						document.getElementById('opcocode_L_M').style.display='inline';
						document.getElementById('OPCOcode_Mac').style.display='inline';
						document.getElementById('BS_C_L').style.display='none';
						document.getElementById('Mac_BPF_gen').style.display='inline';	
						document.getElementById('BPF_gen').style.display='none';
						document.getElementById('Mac_gen').style.display='inline';
						//****
						document.getElementById('Mac_gen_vebp_upload').style.display='inline';	
						document.getElementById('BPF_gen_vebp_upload').style.display='none';	

						
						document.getElementById('Clear_mac_gen').style.display='inline';
						document.getElementById('Clear_bpf_gen').style.display='none';
						document.getElementById('M_content').style.display='inline';
						document.getElementById('OPCOsel_Mac').select='United Kingdom';
						document.getElementById('OPCOcode_Mac').value='';
						document.getElementById('B_content').style.display='none';
						document.getElementById('B_content_Mov').style.display='none';
						document.getElementById('B_content_Ter').style.display='none';
						Populate_opco_code_mac(document.getElementById('OPCOsel_Mac').value)
				 
				 }
				else if(value=="val_FN" && document.getElementById('FileTyp_s').value=="BPF_Flag")
				{
							document.getElementById('FileTyp_s').style.display  = 'inline';
							
						document.getElementById('frmUploader').style.display='inline';
						document.getElementById('Browse_L').style.display='none';
						document.getElementById('file').style.display='none';
						document.getElementById('upload_B').style.display='none';

						//document.getElementById('frmUploader').style.display = 'none'
						document.getElementById('opco_L').style.display='inline';
						document.getElementById('OPCOsel').style.display='inline';
						document.getElementById('opcocode_L').style.display='inline';
						document.getElementById('OPCOcode').style.display='inline';				
						document.getElementById('BS_C_L').style.display='inline';
						document.getElementById('Business_S_BPF').style.display='inline';
						document.getElementById('Business_S_BPF').value ='BPF_ADD';
						document.getElementById('BPF_gen_vebp_upload').style.display='inline';
						document.getElementById('Mac_gen_vebp_upload').style.display='none';
						document.getElementById('Mac_gen').style.display='none';
						document.getElementById('BPF_gen').style.display='inline';
						document.getElementById('Clear_mac_gen').style.display='none';
						document.getElementById('Clear_bpf_gen').style.display='inline';
						document.getElementById('Mac_BPF_gen').style.display='inline';
						document.getElementById('M_content').style.display='none';
						document.getElementById('opco_L_Mac').style.display='none';
						document.getElementById('OPCOsel_Mac').style.display='none';
						document.getElementById('opcocode_L_M').style.display='none';
						document.getElementById('OPCOcode_Mac').style.display='none';
						document.getElementById('B_content').style.display='inline';
						document.getElementById('B_content_Mov').style.display='none';
						document.getElementById('B_content_Ter').style.display='none';
					   //Denmark MAC
					   document.getElementById('M_content_DE').style.display='none';
					    document.getElementById('M_content_NL').style.display='none';
					    document.getElementById('M_content_IE').style.display='none';

						 
				}
				
			 
			 }
			 
		function  BPF_checker(value){
			console.log(value);
			console.log(document.getElementById('FileExi_v').value);
			if(value=="Pl_sel"){
				console.log('Root selection is default value :)')
				document.getElementById('opco_L').style.display='none';
				document.getElementById('OPCOsel').style.display='none';
				document.getElementById('opcocode_L').style.display='none';
				document.getElementById('OPCOcode').style.display='none';			
				document.getElementById('BS_C_L').style.display='none';
				document.getElementById('Mac_BPF_gen').style.display='none';	
				document.getElementById('BPF_gen').style.display='no	ne';
				document.getElementById('Mac_gen').style.display='none';
				document.getElementById('M_content').style.display='none';
				document.getElementById('opco_L_Mac').style.display='none';
				document.getElementById('OPCOsel_Mac').style.display='none';
				document.getElementById('opcocode_L_M').style.display='none';
				document.getElementById('OPCOcode_Mac').style.display='none';
				document.getElementById('B_content').style.display='none';	
				document.getElementById('B_content_Mov').style.display='none';
				 document.getElementById('B_content_Ter').style.display='none';
				
			}else if(value=="MAC_Flag" &&  document.getElementById('FileExi_v').value=="val_FN"){
				document.getElementById('File_E').style.display  = 'inline';
						document.getElementById('frmUploader').style.display='inline';
						document.getElementById('Browse_L').style.display='none';
						document.getElementById('file').style.display='none';
						document.getElementById('upload_B').style.display='none';
				
				document.getElementById('opco_L').style.display='none';
				document.getElementById('OPCOsel').style.display='none';
				document.getElementById('opcocode_L').style.display='none';
				document.getElementById('OPCOcode').style.display='none';			
				document.getElementById('opco_L_Mac').style.display='inline';
				document.getElementById('OPCOsel_Mac').style.display='inline';
				document.getElementById('opcocode_L_M').style.display='inline';
				document.getElementById('OPCOcode_Mac').style.display='inline';
				document.getElementById('BS_C_L').style.display='none';
				document.getElementById('Mac_BPF_gen').style.display='inline';
				document.getElementById('BPF_gen_vebp_upload').style.display='none';
				document.getElementById('Mac_gen_vebp_upload').style.display='inline';				
				document.getElementById('BPF_gen').style.display='none';
				document.getElementById('Mac_gen').style.display='inline';
				document.getElementById('Clear_mac_gen').style.display='inline';
				document.getElementById('Clear_bpf_gen').style.display='none';
				document.getElementById('M_content').style.display='inline';
				document.getElementById('OPCOsel_Mac').select='United Kingdom';
				document.getElementById('OPCOcode_Mac').value='';
				document.getElementById('B_content').style.display='none';
				document.getElementById('B_content_Mov').style.display='none';
				 document.getElementById('B_content_Ter').style.display='none';
				 
				 Populate_opco_code_mac(document.getElementById('OPCOsel_Mac').value)
			}
			else if(value=="MAC_Flag" && document.getElementById('FileExi_v').value=="val_FE")
			{
						document.getElementById('frmUploader').style.display='inline';
						document.getElementById('Browse_L').style.display='inline';
						document.getElementById('file').style.display='inline';
						document.getElementById('upload_B').style.display='inline';
					//document.getElementById('File_up').style.display='inline';
					document.getElementById('File_L').style.display='inline';
					document.getElementById('opco_L').style.display='none';
					document.getElementById('OPCOsel').style.display='none';
					document.getElementById('opcocode_L').style.display='none';
					document.getElementById('OPCOcode').style.display='none';				
					document.getElementById('BS_C_L').style.display='none';
					document.getElementById('Business_S_BPF').style.display='none';
					document.getElementById('Mac_gen').style.display='none';
					document.getElementById('BPF_gen').style.display='none';
					document.getElementById('Clear_mac_gen').style.display='none';
					document.getElementById('Clear_bpf_gen').style.display='none';
					document.getElementById('Mac_BPF_gen').style.display='none';
					document.getElementById('M_content').style.display='none';
					document.getElementById('opco_L_Mac').style.display='inline';
					document.getElementById('OPCOsel_Mac').style.display='inline';
					document.getElementById('opcocode_L_M').style.display='none';
					document.getElementById('OPCOcode_Mac').style.display='none';
					document.getElementById('B_content').style.display='none';
					document.getElementById('B_content_Mov').style.display='none';
					document.getElementById('B_content_Ter').style.display='none';
					document.getElementById('test_env').style.display='inline';
					document.getElementById('test_env_vebp').style.display='inline';
					
					Populate_opco_code_mac(document.getElementById('OPCOsel_Mac').value)
				   //Denmark MAC
				   document.getElementById('M_content_DE').style.display='none';
				    document.getElementById('M_content_NL').style.display='none';
				    document.getElementById('M_content_IE').style.display='none';
					
					
					
			}		
			else if(value=="BPF_Flag" && document.getElementById('FileExi_v').value=="val_FN"){
				document.getElementById('FileTyp_s').style.display  = 'inline';

						document.getElementById('frmUploader').style.display='inline';
						document.getElementById('Browse_L').style.display='none';
						document.getElementById('file').style.display='none';
						document.getElementById('upload_B').style.display='none';

				
				//document.getElementById('frmUploader').style.display = 'none'
				document.getElementById('opco_L').style.display='inline';
				document.getElementById('OPCOsel').style.display='inline';
				document.getElementById('opcocode_L').style.display='inline';
				document.getElementById('OPCOcode').style.display='inline';				
				document.getElementById('BS_C_L').style.display='inline';
				document.getElementById('Business_S_BPF').style.display='inline';
				document.getElementById('Business_S_BPF').value ='BPF_ADD';
				document.getElementById('BPF_gen_vebp_upload').style.display='inline';
				document.getElementById('Mac_gen_vebp_upload').style.display='none';
				document.getElementById('Mac_gen').style.display='none';
				document.getElementById('BPF_gen').style.display='inline';
				document.getElementById('Clear_mac_gen').style.display='none';
				document.getElementById('Clear_bpf_gen').style.display='inline';
				document.getElementById('Mac_BPF_gen').style.display='inline';
				document.getElementById('M_content').style.display='none';
				document.getElementById('opco_L_Mac').style.display='none';
				document.getElementById('OPCOsel_Mac').style.display='none';
				document.getElementById('opcocode_L_M').style.display='none';
				document.getElementById('OPCOcode_Mac').style.display='none';
				document.getElementById('B_content').style.display='inline';
				document.getElementById('B_content_Mov').style.display='none';
				document.getElementById('B_content_Ter').style.display='none';
			   //Denmark MAC
			   document.getElementById('M_content_DE').style.display='none';
			    document.getElementById('M_content_NL').style.display='none';
			    document.getElementById('M_content_IE').style.display='none';
				
			}
			else if(value=="BPF_Flag" && document.getElementById('FileExi_v').value=="val_FE")
			{
					document.getElementById('frmUploader').style.display='inline';
					
						document.getElementById('frmUploader').style.display='inline';
						document.getElementById('Browse_L').style.display='inline';
						document.getElementById('file').style.display='inline';
						document.getElementById('upload_B').style.display='inline';
					
					//document.getElementById('File_up').style.display='inline';
					document.getElementById('File_L').style.display='inline';
					document.getElementById('opco_L').style.display='inline';
					document.getElementById('OPCOsel').style.display='inline';
					document.getElementById('opcocode_L').style.display='none';
					document.getElementById('OPCOcode').style.display='none';				
					document.getElementById('BS_C_L').style.display='none';
					document.getElementById('Business_S_BPF').style.display='none';
					document.getElementById('Mac_gen').style.display='none';
					document.getElementById('BPF_gen').style.display='none';
					document.getElementById('Clear_mac_gen').style.display='none';
					document.getElementById('Clear_bpf_gen').style.display='none';
					document.getElementById('Mac_BPF_gen').style.display='none';
					document.getElementById('M_content').style.display='none';
					document.getElementById('opco_L_Mac').style.display='none';
					document.getElementById('OPCOsel_Mac').style.display='none';
					document.getElementById('opcocode_L_M').style.display='none';
					document.getElementById('OPCOcode_Mac').style.display='none';
					document.getElementById('B_content').style.display='none';
					document.getElementById('B_content_Mov').style.display='none';
					document.getElementById('B_content_Ter').style.display='none';
					document.getElementById('test_env_vebp').style.display='inline';
					document.getElementById('test_env').style.display='inline';					
				   //Denmark MAC
				   document.getElementById('M_content_DE').style.display='none';
					document.getElementById('M_content_NL').style.display='none';
					document.getElementById('M_content_IE').style.display='none';

			}else{
				console.log('Root selection is Invalid/Exception Occured :)')
			}
		}
		
		function  BPF_checker1(value){
			console.log(value);
			if(value==""){
			document.getElementById('opco_L').style.display='inline';
				document.getElementById('OPCOsel').style.display='inline';
				document.getElementById('opcocode_L').style.display='inline';
				document.getElementById('OPCOcode').style.display='inline';				
				document.getElementById('BS_C_L').style.display='inline';
				document.getElementById('Mac_gen').style.display='none';
				document.getElementById('BPF_gen').style.display='inline';
				document.getElementById('Mac_BPF_gen').style.display='inline';
				document.getElementById('M_content').style.display='none';
				document.getElementById('opco_L_Mac').style.display='none';
				document.getElementById('OPCOsel_Mac').style.display='none';
				document.getElementById('opcocode_L_M').style.display='none';
				document.getElementById('OPCOcode_Mac').style.display='none';
				document.getElementById('B_content').style.display='none';
				document.getElementById('B_content_Mov').style.display='none';
				 document.getElementById('B_content_Ter').style.display='none';
			}else if(value=="BPF_ADD"){
				document.getElementById('opco_L').style.display='inline';
				document.getElementById('OPCOsel').style.display='inline';
				document.getElementById('opcocode_L').style.display='inline';
				document.getElementById('OPCOcode').style.display='inline';				
				document.getElementById('BS_C_L').style.display='inline';
				document.getElementById('Mac_gen').style.display='none';
				document.getElementById('BPF_gen').style.display='inline';
				document.getElementById('Mac_BPF_gen').style.display='inline';
				document.getElementById('B_content').style.display='inline';
				document.getElementById('B_content_Mov').style.display='none';
				document.getElementById('B_content_Ter').style.display='none';
				
				document.getElementById('BPF_gen_vebp_upload').style.display='inline';
				

			}else if(value=="BPF_MOV"){
				document.getElementById('opco_L').style.display='inline';
				document.getElementById('OPCOsel').style.display='inline';
				document.getElementById('opcocode_L').style.display='inline';
				document.getElementById('OPCOcode').style.display='inline';				
				document.getElementById('BS_C_L').style.display='inline';
				document.getElementById('Mac_gen').style.display='none';
				document.getElementById('BPF_gen').style.display='inline';
				document.getElementById('Mac_BPF_gen').style.display='inline';
				document.getElementById('M_content').style.display='none';
				document.getElementById('opco_L_Mac').style.display='none';
				document.getElementById('OPCOsel_Mac').style.display='none';
				document.getElementById('opcocode_L_M').style.display='none';
				document.getElementById('OPCOcode_Mac').style.display='none';
				document.getElementById('B_content').style.display='none';
				document.getElementById('B_content_Mov').style.display='inline';
				document.getElementById('B_content_Ter').style.display='none';
				
				document.getElementById('BPF_gen_vebp_upload').style.display='inline';
				
				
			
			}else if(value=="BPF_TER")
			{
				document.getElementById('opco_L').style.display='inline';
				document.getElementById('OPCOsel').style.display='inline';
				document.getElementById('opcocode_L').style.display='inline';
				document.getElementById('OPCOcode').style.display='inline';				
				document.getElementById('BS_C_L').style.display='inline';
				document.getElementById('Mac_gen').style.display='none';
				document.getElementById('BPF_gen').style.display='inline';
				document.getElementById('Mac_BPF_gen').style.display='inline';
				document.getElementById('M_content').style.display='none';
				document.getElementById('opco_L_Mac').style.display='none';
				document.getElementById('OPCOsel_Mac').style.display='none';
				document.getElementById('opcocode_L_M').style.display='none';
				document.getElementById('OPCOcode_Mac').style.display='none';
				document.getElementById('B_content').style.display='none';
				document.getElementById('B_content_Mov').style.display='none';
				 document.getElementById('B_content_Ter').style.display='inline';
				 
				 document.getElementById('BPF_gen_vebp_upload').style.display='inline';
			}
			else{
				console.log('Root selection is Invalid/Exception Occured :)')
			}
		}

// BPF and MAC Related GUI functions for Provisioning.html End ---------------------------------------------

// Kenan Account creation functions *****************************

function Navigation(id)
{
   if(id=='Cust_Acc_1')
   {
	document.getElementById('Customer_BAN_div').style.display='none';
    //document.getElementById('CA1BA1').style.display = 'none';
	document.getElementById('Customer_Acc_div').style.display='inline';
	document.getElementById('CA1BA1').style.display = 'none';  
   }
    if(id=='Ban_1')
   {
 	document.getElementById('Customer_BAN_div').style.display='inline';
    //document.getElementById('CA1BA1').style.display = 'none';
	document.getElementById('Customer_Acc_div').style.display='none';
	document.getElementById('CA1BA1').style.display = 'inline';   
   }  

}

function submit_cust()
{
   document.getElementById('Customer_BAN_div').style.display='inline';
   //document.getElementById('CA1BA1').style.display = 'none';
   document.getElementById('Customer_Acc_div').style.display='none';
   document.getElementById('CA1BA1').style.display = 'none';
}
function submit_For_site()
{
   document.getElementById('Customer_BAN_div').style.display='inline';
   //document.getElementById('CA1BA1').style.display = 'none';
   document.getElementById('Customer_Acc_div').style.display='none';
   document.getElementById('CA1BA1').style.display = 'inline';
}

function Hide_BPF_details_on_loading_kenan() {
   //document.getElementById('Create_BPF').style.display='none';
   //document.getElementById('User_content_out').style.display='none';
   document.getElementById('CA1BA1').style.display = 'none';
   document.getElementById('Customer_BAN_div').style.display='none';
   document.getElementById('Customer_Acc_div').style.display='inline';
}

function DisplayBillDetails()
{
	document.getElementById('CA1BA1').style.display = 'inline';
}

function Show_site_account()
{
	document.getElementById('Site_out').style.display = 'inline';
}

function show_kenan_acc_details()
{
	document.getElementById('User_content').style.display = 'none';
	document.getElementById('Ken_gen').style.display = 'none';
	document.getElementById('User_content_out').style.display = 'inline';
	document.getElementById('Create_BPF').style.display='inline';
}

function BPF_with_kenan_acc_details()
{
	alertify.success('Successfully Generated BPF');
}

function get_OPCO_Proposition_Type_kenan()
{

	//Feed_Proprosition_Type('proposition_type_Cust_Acc1');
	//Feed_Proprosition_Type('proposition_type_Cust1_BAN1');
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getopco');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById('OPCOsel');
	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].OPCO_Description;
				newOption.innerText = responseJson[currele].OPCO_Description;
				opcodropdown.appendChild(newOption);
			}
        }
    };
	oReq.send();
}

function Feed_Proprosition_Type(Select_box_Id)
{
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/getPropositionTYPE');
	var reponsetxt;
	var responseJson;
	var jsonlen;
	var newOption;
	var opcodropdown = document.getElementById(Select_box_Id);

	oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
			reponsetxt = oReq.responseText
			responseJson = JSON.parse(reponsetxt);
			jsonlen = responseJson.length
			newOption = document.createElement('option');
			newOption.value = 'Please Select';
			newOption.innerText = 'Please Select';
			opcodropdown.appendChild(newOption);
			for(var currele = 0;currele<jsonlen;currele++)
			{
				newOption = document.createElement('option');
				newOption.value = responseJson[currele].proposition_type;
				newOption.innerText = responseJson[currele].proposition_type;
				opcodropdown.appendChild(newOption);
			}
			}
		};
		oReq.send();
}

function copy_Kban(pos)
{

	var kban_table = document.getElementById('Kban_table');
	var newrow = kban_table.rows.length;
	var row = kban_table.insertRow(newrow);
	var orow = pos;
	var fopt ='';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	prevprop = document.getElementById("proposition_type_Cust1_BAN"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"	
	}	
	cell1.innerHTML = "<select class = 'Ban_gen' id = 'proposition_type_Cust1_BAN"+newrow+"' style=\"width:100%\">"+fopt
	cell1.style.width = '5%';
	cell2.innerHTML = "<input class = 'Ban_gen' id = 'BAN_name_Cust1_BAN"+newrow+"'      type = 'text' style='width:100%' >"
	cell2.style.width = '9%';
	cell3.innerHTML = "<input class = 'Ban_gen' id = 'Billing_Addrs1_Cust1_BAN"+newrow+"'type = 'text' style='width:100%'>"
	cell3.style.width = '9%';
	cell4.innerHTML = "<input class = 'Ban_gen' id = 'Billing_Addrs2_Cust1_BAN"+newrow+"' type = 'text' style='width:100%' >"
	cell4.style.width = '9%';
	cell5.innerHTML = "<input class = 'Ban_gen' id = 'City_Cust1_BAN"+newrow+"'          type = 'text' style='width:100%' >"
	cell5.style.width = '7%';
	cell6.innerHTML = "<input class = 'Ban_gen' id = 'postcode_Cust1_BAN"+newrow+"'      type = 'text' style='width:100%'>"
	cell6.style.width = '7%';
	cell7.innerHTML = "<select class = 'Ban_gen' id = 'Country_Cust1_BAN"+newrow+"'      type = 'text' style='width:100%'><option>Please Select</option><option>Australia</option><option>Bahrain</option><option>Canada</option><option>Denmark</option><option>United Kingdom</option>"
	cell7.style.width = '8%';
	cell8.innerHTML = "<select class = 'Ban_gen' id = 'Billing_cycle_Cust1_BAN"+newrow+"' type = 'text' style='width:100%'><option>Please Select</option><option>Daily</option><option>Weekly</option><option>Monthly</option><option>Quarterly</option><option>Semi-Annual</option><option>Yearly</option>>"
	cell8.style.width = '10%';
	cell9.innerHTML = "<select class = 'Ban_gen' id = 'Billing_curr_Cust1_BAN"+newrow+"' type = 'text' style='width:100%'><option>Please Select</option><option>USD</option><option>GBP</option><option>SGD</option><option>HKD</option><option>AUD</option>>"
	cell9.style.width = '12%';
	cell10.innerHTML = "<select class = 'Ban_gen' id = 'Pay_Term_Cust1_BAN"+newrow+"'     type = 'text' style='width:100%'><option>Please Select</option><option>10</option><option>12</option><option>13</option><option>14</option><option>15</option><option>20</option>"	
	cell10.style.width = '11%';		
	cell11.innerHTML ="<button title = 'copy previous Row' style = 'border:none;background:white' onclick = 'copy_Kban("+newrow+")'><img src = 'ui/copy.png' class = 'copy'   id = 'Copy_Kban"+newrow+"' title = 'copy previous Row'></button></td>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' onclick = 'Addnew_Kban()'><img src = 'ui/add.png' id = 'Add_Kban"+newrow+"'  class = 'addpng'  title = 'Add a New Row' ></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_Kban"+newrow+"' class = 'delb_Kban' onclick = 'Delete_Kban(this.id)'><img src = 'ui/delete.png' id = 'Del_Kban"+newrow+"' class = 'delete'  title = 'Delete Row' ></button>"
	cell13.style.border = 'none';

	document.getElementById("proposition_type_Cust1_BAN"+newrow).value=document.getElementById("proposition_type_Cust1_BAN"+orow).value
	document.getElementById("BAN_name_Cust1_BAN"+newrow).value=document.getElementById("BAN_name_Cust1_BAN"+orow).value
	document.getElementById("Billing_Addrs1_Cust1_BAN"+newrow).value=document.getElementById("Billing_Addrs1_Cust1_BAN"+orow).value	
	document.getElementById("Billing_Addrs2_Cust1_BAN"+newrow).value=document.getElementById("Billing_Addrs2_Cust1_BAN"+orow).value	
	document.getElementById("City_Cust1_BAN"+newrow).value=document.getElementById("City_Cust1_BAN"+orow).value
	document.getElementById("postcode_Cust1_BAN"+newrow).value=document.getElementById("postcode_Cust1_BAN"+orow).value
	document.getElementById("Country_Cust1_BAN"+newrow).value=document.getElementById("Country_Cust1_BAN"+orow).value
	document.getElementById("Billing_cycle_Cust1_BAN"+newrow).value=document.getElementById("Billing_cycle_Cust1_BAN"+orow).value
	document.getElementById("Billing_curr_Cust1_BAN"+newrow).value=document.getElementById("Billing_curr_Cust1_BAN"+orow).value
	document.getElementById("Pay_Term_Cust1_BAN"+newrow).value=document.getElementById("Pay_Term_Cust1_BAN"+orow).value

}

function Addnew_Kban()
{

	var kban_table = document.getElementById('Kban_table');
	var newrow = kban_table.rows.length;
	var row = kban_table.insertRow(newrow);
	var orow = newrow-1;
	var fopt ='';
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
	prevprop = document.getElementById("proposition_type_Cust1_BAN"+orow);
	for (currrow = 0;currrow<prevprop.options.length;currrow++)
	{
		fopt = fopt+"<option>"+prevprop.options[currrow].value+"</options>"	
	}	
	cell1.innerHTML = "<select class = 'Ban_gen' id = 'proposition_type_Cust1_BAN"+newrow+"' style=\"width:100%\">"+fopt
	cell1.style.width = '5%';
	cell2.innerHTML = "<input class = 'Ban_gen' id = 'BAN_name_Cust1_BAN"+newrow+"'      type = 'text' style='width:100%' >"
	cell2.style.width = '9%';
	cell3.innerHTML = "<input class = 'Ban_gen' id = 'Billing_Addrs1_Cust1_BAN"+newrow+"'type = 'text' style='width:100%'>"
	cell3.style.width = '9%';
	cell4.innerHTML = "<input class = 'Ban_gen' id = 'Billing_Addrs2_Cust1_BAN"+newrow+"'type = 'text' style='width:100%' >"
	cell4.style.width = '9%';
	cell5.innerHTML = "<input class = 'Ban_gen' id = 'City_Cust1_BAN"+newrow+"'          type = 'text' style='width:100%' >"
	cell5.style.width = '7%';
	cell6.innerHTML = "<input class = 'Ban_gen' id = 'postcode_Cust1_BAN"+newrow+"'      type = 'text' style='width:100%'>"
	cell6.style.width = '7%';
	cell7.innerHTML = "<select class = 'Ban_gen' id = 'Country_Cust1_BAN"+newrow+"'      type = 'text' style='width:100%'><option>Please Select</option><option>Australia</option><option>Bahrain</option><option>Canada</option><option>Denmark</option><option>United Kingdom</option>"
	cell7.style.width = '8%';
	cell8.innerHTML = "<select class = 'Ban_gen' id = 'Billing_cycle_Cust1_BAN"+newrow+"' type = 'text' style='width:100%'><option>Please Select</option><option>Daily</option><option>Weekly</option><option>Monthly</option><option>Quarterly</option><option>Semi-Annual</option><option>Yearly</option>>"
	cell8.style.width = '10%';
	cell9.innerHTML = "<select class = 'Ban_gen' id = 'Billing_curr_Cust1_BAN"+newrow+"' type = 'text' style='width:100%'><option>Please Select</option><option>USD</option><option>GBP</option><option>SGD</option><option>HKD</option><option>AUD</option>>"
	cell9.style.width = '12%';
	cell10.innerHTML = "<select class = 'Ban_gen' id = 'Pay_Term_Cust1_BAN"+newrow+"'     type = 'text' style='width:100%'><option>Please Select</option><option>10</option><option>12</option><option>13</option><option>14</option><option>15</option><option>20</option>"	
	cell10.style.width = '11%';		
	cell11.innerHTML ="<button title = 'copy previous Row' style = 'border:none;background:white' onclick = 'copy_Kban("+newrow+")'><img src = 'ui/copy.png' class = 'copy'   id = 'Copy_Kban"+newrow+"' title = 'copy previous Row'></button></td>"
	cell11.style.border = 'none';
	cell12.innerHTML ="<button style = 'border:none;background:white' onclick = 'Addnew_Kban()'><img src = 'ui/add.png' id = 'Add_Kban"+newrow+"'  class = 'addpng'  title = 'Add a New Row' ></button>"
	cell12.style.border = 'none';
	cell13.innerHTML ="<button style = 'border:none;background:white' id = 'delbut_Kban"+newrow+"' class = 'delb_Kban' onclick = 'Delete_Kban(this.id)'><img src = 'ui/delete.png' id = 'Del_Kban"+newrow+"' class = 'delete'  title = 'Delete Row' ></button>"
	cell13.style.border = 'none';
}

function Delete_Kban(Kban_del_id)
{
	var rownumarr = Kban_del_id.split('delbut_Kban');
	var rownum;
	var startvall;
	rownum = rownumarr[1];
	var Kban_table = document.getElementById('Kban_table');
	var newrow = Kban_table.rows.length;
	if(newrow === 2)
	{
			alertify.alert('Please Enter minimum one row of data')
	}
	else
	{
		Kban_table.deleteRow(rownum);
		var rows = document.getElementsByClassName('delb_Kban');
		var rval; 
		for(var currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'delbut_Kban'+rval;
			
		}
		var rows = document.getElementsByClassName('addpng');
		for(currow = 0;currow<newrow-2;currow++)
		{ 
			rval =  currow+1;
			rows[currow].id = 'Add_Kban'+rval;
			
		}
		var rows = document.getElementsByClassName('copy');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval =  currow+1;
			rows[currow].id = 'Copy_Kban'+rval;
			
		}
		var rows = document.getElementsByClassName('delete');
		for(currow = 0;currow<newrow-2;currow++)
		{
			rval = currow+1;
			rows[currow].id = 'delbut_Kban'+rval;
			
		}
		var inputval = document.getElementsByClassName('Ban_gen');
		var iprowid = 1; 
		for(currinput = 0;currinput<inputval.length;currinput++)
		{
			if(inputval[currinput].id.indexOf('proposition_type_Cust1_BAN') != -1)
			{
				//increase the row count here
				inputval[currinput].id = 'proposition_type_Cust1_BAN'+iprowid;
				iprowid = iprowid+1;
				
			}		
			if(inputval[currinput].id.indexOf('BAN_name_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'BAN_name_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Billing_Addrs1_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'Billing_Addrs1_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Billing_Addrs2_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'Billing_Addrs2_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('City_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'City_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('postcode_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'postcode_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Country_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'Country_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Billing_cycle_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'Billing_cycle_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Billing_curr_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'Billing_curr_Cust1_BAN'+iprowid;
			}
			if(inputval[currinput].id.indexOf('Pay_Term_Cust1_BAN') != -1)
			{
				inputval[currinput].id = 'Pay_Term_Cust1_BAN'+iprowid;
			}			
		}

	}
}
function getroamingdetails(ipid,usgid)
{
	var roamingid = "roaming"+usgid;
	var momtid = "momt"+usgid;
	var oReq = new XMLHttpRequest();
		oReq.open("GET", '/getroamingdetails?retval='+ipid);
		oReq.onreadystatechange = function () {
		if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
			console.log(oReq.responseText);
			var jsonobj = JSON.parse(oReq.responseText);
			document.getElementById(roamingid).value = jsonobj[0].vge_item_roaming;
			document.getElementById(momtid).value = jsonobj[0].vge_item_mobile;
			if(jsonobj[0].vge_item_mobile === 'MT')
			{
				alertify.alert('MT Scenario : Calling Number is the number that originates the call; Called Number is the number that is charged for the call');
			}
		}
		};
		oReq.send();
}

function displayannot(annotationid)

{
	var rowidarr = annotationid.split("morepng")
	var currrow = rowidarr[1];
	var usagetype =document.getElementById('usagetype'+currrow).value;
	if(usagetype === 'Please Select')
	{
		alertify.alert("Please Select Usage Type");
		return;
	}else if(document.getElementById('anumber'+currrow).value === '')
	{
		alertify.alert("Please Select Calling Number");
		return;
	}else if(document.getElementById('bnumber'+currrow).value === '')
	{
		alertify.alert("Please Select Called Number");
		return;
	}
	else
	{
		Annotation_checker(annotationid,'more');
		//var modal = document.getElementById('myModal'+currrow);
		//modal.style.display = "block";
	}

}
function closeannot(annotationid)

{
	var rowidarr = annotationid.split("closeannot")
	var currrow = rowidarr[1];
	var modal = document.getElementById('myModal'+currrow);
	 modal.style.display = "none";

}




function trigger_annotation(key)
{	
	if(key.indexOf('nusgcode')!=-1)
	{
			var rowidarr = key.split("nusgcode")
			var currrow = rowidarr[1];
	}else if(key.indexOf('anumber')!=-1)
	{
			
			var rowidarr = key.split("anumber")	
			var currrow = rowidarr[1];
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getstate_code');
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
					reponsetxt = oReq1.responseText
					responseJson = JSON.parse(reponsetxt);
					//alert(responseJson.length);
					jsonlen = responseJson.length
					for(var currele = 0;currele<jsonlen;currele++)
					{
						//alert()
						var found = false;
						countrycode = responseJson[currele].country_code;
						CallingNumber_CC = (document.getElementById('anumber'+currrow).value).substring(0,6)
						var i;
						for(i=6;i>0;i--){
							console.log(CallingNumber_CC)
							console.log(countrycode)
							if (CallingNumber_CC==countrycode){  //&& (responseJson[currele].network =='Vodafone')
								//alert(responseJson[currele].VGE_NETWORK_CODE);
							document.getElementById('srcstate_Value'+currrow).value =  responseJson[currele].VGE_NETWORK_CODE
							found =true;
							//sourceNW_key = currele;
							break;
						}else{
							CallingNumber_CC = CallingNumber_CC.substring(0,i-1);
							calling_numer_exception = true
						}							
						}
						if(found ==true)
						{
							break;
						}
					}
					if(found === false)
					{
						document.getElementById('srcstate_Value'+currrow).value = '';
					}
					if( (document.getElementById('usagetype'+currrow).value !='') && (document.getElementById('nusgcode'+currrow).value !='') && (document.getElementById('anumber'+currrow).value!='') && (document.getElementById('bnumber'+currrow).value!=''))
							{
								Annotation('morepng'+currrow,'others');
							}
				}
			}
			oReq1.send();	
	}else if(key.indexOf('bnumber')!=-1)
	{
			var rowidarr = key.split("bnumber")
			var currrow = rowidarr[1];
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getstate_code');
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
					reponsetxt = oReq1.responseText
					responseJson = JSON.parse(reponsetxt);
					jsonlen = responseJson.length
					for(var currele = 0;currele<jsonlen;currele++)
					{
						var found = false;
						countrycode = responseJson[currele].country_code;
						CallingNumber_CC = (document.getElementById('bnumber'+currrow).value).substring(0,6)
						var i;
						for(i=6;i>0;i--){
							if (CallingNumber_CC==countrycode){  //&& (responseJson[currele].network =='Vodafone')
							document.getElementById('tgtstate_Value'+currrow).value =  responseJson[currele].VGE_NETWORK_CODE
							found =true;
							//sourceNW_key = currele;
							break;
						}else{
							CallingNumber_CC = CallingNumber_CC.substring(0,i-1);
							calling_numer_exception = true
						}							
						}
						if(found ===true)
						{	
							break;
						}
					}
					if(found === false)
					{
						document.getElementById('tgtstate_Value'+currrow).value = '';
					}
					if( (document.getElementById('usagetype'+currrow).value !='') && (document.getElementById('nusgcode'+currrow).value !='') && (document.getElementById('anumber'+currrow).value!='') && (document.getElementById('bnumber'+currrow).value!=''))
							{
								Annotation('morepng'+currrow,'others');
							}	
				}
			}
			oReq1.send();	
			
	}else if(key.indexOf('usagetype')!=-1)
	{
			var rowidarr = key.split("usagetype")
			var currrow = rowidarr[1];
			if( (document.getElementById('usagetype'+currrow).value !='') && (document.getElementById('nusgcode'+currrow).value !='') && (document.getElementById('anumber'+currrow).value!='') && (document.getElementById('bnumber'+currrow).value!=''))
			{
				Annotation('morepng'+currrow,'others');
			}	
	}
}


function Annotation_checker(annotationid,ele_flag)
{
	var rowidarr = annotationid.split("morepng")
	var currrow = rowidarr[1];
	var exception_flag = 'No';
	var calling_numer_exception = false;
	var called_numer_exception = false;
	var Opco = document.getElementById('OPCOsel').value;
	var source = document.getElementById('feedtype').value;
	var vgecode = document.getElementById('nusgcode'+currrow).value;
	var VGE_ITEMNAME = document.getElementById('usagetype'+currrow).value;
	
	/*if(vgecode!='106' && document.getElementById('anumber'+currrow).value == 'Incoming Call'){
		alertify.alert('Please enter correct country code for Calling number');
		return;
	}*/

	var countrycode = '';
	var CallingNumber_CC = '';
	var CalledNumber_CC = '';
	
	var Tadigco = "";
	var network = "";
	var mccmnco = "";

	var srccnty = "";
	var srcntwrk = "";

	var tgtcntry = "";

	var tgtntwrk = "";
	//var sourceNW_key = "";
	//var targetNW_key = "";
	
	var oReq1 = new XMLHttpRequest();
	oReq1.open("GET", '/getcountry_code');
	oReq1.onreadystatechange = function () {
	if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
		//console.log(oReq1.responseText);
		reponsetxt = oReq1.responseText
		responseJson = JSON.parse(reponsetxt);
		jsonlen = responseJson.length

		for(var currele = 0;currele<jsonlen;currele++)
		{
			var found = false;
			countrycode = responseJson[currele].country_code;
			//alert(document.getElementById('srcstate_Value'+currrow).value);
			if(document.getElementById('srcstate_Value'+currrow).value != '')
			{
				console.log(CallingNumber_CC);
				console.log(countrycode)
				CallingNumber_CC = document.getElementById('srcstate_Value'+currrow).value;
				if (CallingNumber_CC==countrycode){  //&& (responseJson[currele].network =='Vodafone')
					srccnty = responseJson[currele].country;
					srcntwrk = responseJson[currele].network;
					Tadigco = responseJson[currele].plmn_code;
					mccmnco = responseJson[currele].mcc_mnc;
					console.log(srccnty+Tadigco+mccmnco+srcntwrk);
					found =true;
					calling_numer_exception = false
					//sourceNW_key = currele;
					break;
				}else{
					calling_numer_exception = false
				}
				
			}
			else
			{
				CallingNumber_CC = (document.getElementById('anumber'+currrow).value).substring(0,6)
				var i;
				for(i=6;i>0;i--){
				if ( (CallingNumber_CC==countrycode) ){  //&& (responseJson[currele].network =='Vodafone')
					srccnty = responseJson[currele].country;
					srcntwrk = responseJson[currele].network;
					Tadigco = responseJson[currele].plmn_code;
					mccmnco = responseJson[currele].mcc_mnc;
					console.log(srccnty+Tadigco+mccmnco+srcntwrk);
					found =true;
					//sourceNW_key = currele;
					break;
				}else{
					CallingNumber_CC = CallingNumber_CC.substring(0,i-1);
					calling_numer_exception = true
				}
			}
			
			}
			if(found == true){
				calling_numer_exception = false
				break;
			}
		}
		if(calling_numer_exception == true && document.getElementById('anumber'+currrow).value!='Incoming Call')  
		{
			//alertify.alert('Please enter correct country code for Calling number')
			//return;
		}else if(calling_numer_exception == true && document.getElementById('anumber'+currrow).value=='Incoming Call') 	
		{
			exception_flag = 'No'
		}
		
		for(var currele = 0;currele<jsonlen;currele++)
		{
			var found1 = false;
			countrycode = responseJson[currele].country_code;
			
			if(document.getElementById('tgtstate_Value'+currrow).value != '')
			{
				CalledNumber_CC = document.getElementById('tgtstate_Value'+currrow).value;
				if (CalledNumber_CC==countrycode){
					tgtcntry = responseJson[currele].country;
					tgtntwrk = responseJson[currele].network;
					console.log(tgtcntry+tgtntwrk);
					//targetNW_key = currele;
					called_numer_exception = false;
					found1 =true;
					break;
				}else{
					called_numer_exception = true
				}
			}
			else
			{
				CalledNumber_CC = (document.getElementById('bnumber'+currrow).value).substring(0,6)
			
			var j;
			for(j=6;j>0;j--){
				if (CalledNumber_CC==countrycode){
					tgtcntry = responseJson[currele].country;
					tgtntwrk = responseJson[currele].network;
					console.log(tgtcntry+tgtntwrk);
					//targetNW_key = currele;
					found1 =true;
					break;
				}else{
					CalledNumber_CC = CalledNumber_CC.substring(0,j-1);
					called_numer_exception = true
				}
			}
			
			}
			if(found1 == true){
				called_numer_exception = false
				break;
			}
		}
		var momtva = document.getElementById('momt'+currrow).value;	
		if(called_numer_exception == true && document.getElementById('bnumber'+currrow).value!='NONUMBER') 
		{
			//alertify.alert('Please enter correct country code for Called number')
			//return;
		}else if(called_numer_exception == true && ( document.getElementById('bnumber'+currrow).value=='NONUMBER')	)
		{
			exception_flag = 'No'
		}
		var oReq4 = new XMLHttpRequest();
		oReq4.open("GET", '/getopcocode?retval='+Opco);
		oReq4.onreadystatechange = function () {
		if(oReq4.readyState === XMLHttpRequest.DONE && oReq4.status === 200) {
			reponsetxt4 = oReq4.responseText;
			opcoarr = reponsetxt4.split('||');
			opcocode = opcoarr[1].split('_');
			countrycode = opcocode[1]
			console.log(reponsetxt4);
			var tatjson = '[{"countrycode":"'+countrycode+'","VGEcode":"'+vgecode+'"}]';
			var oReq3 = new XMLHttpRequest();
			oReq3.open("GET", '/getannotationspec?retval='+tatjson);
			oReq3.onreadystatechange = function () {
			if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
				console.log(oReq3.responseText);
				if(oReq3.responseText=="Not_Found"){
					alertify.alert('Annotation template is not available, please insert annotation manually ')//('Specification Not found for this usage type .!!')
					exception_flag = 'Yes'
					return;
				}else{					
				
					reponsetxt3 = oReq3.responseText
					responseJson1 = JSON.parse(reponsetxt3);
					var j;
					var flag;					
					if(responseJson1.length==1){
						j=0;
						flag= false;
						if((responseJson1[0].vge_item_name)== VGE_ITEMNAME){
							j=0;
							flag = true;
						}
						if(flag == false){
							alertify.alert('Annotation template mismatch for the selected usage type, please insert annotation manually ')//('Couldn`t find the ref key in spec .!!!')
							exception_flag = 'Yes'
							return;
						}							
					}else if(responseJson1.length>1){
						flag = false;
						if(flag == false){
							for(var i=0;i<responseJson1.length;i++){
								console.log(((responseJson1[i].vge_item_name).replace(/\Voice - /g, ''))+','+VGE_ITEMNAME);
								if(((responseJson1[i].vge_item_name).replace(/\Voice - /g, '')) == VGE_ITEMNAME){
									j=i;
									flag = true;
									break;
								}
							}
							if(flag == false){
								alertify.alert ('Annotation template mismatch for the selected usage type, please insert annotation manually ') //('Couldn`t find the ref key in spec .!!!')
								exception_flag = 'Yes'
								return;
							}
						}
					}
					if(document.getElementById('anumber'+currrow).value == 'Incoming Call')
					{
							calling_numer_exception = false
					}
					// Include the Calling and Called Number Validations- in line to the specification
						
					if(calling_numer_exception == true ){
						//alert(calling_numer_exception);
					  if(responseJson1[j].tat_source_country != '' || responseJson1[j].source_country  == '' || responseJson1[j].source_country =='NULL' || vgecode == '106' || momtva === 'MT' ){
						calling_numer_exception = false;
						exception_flag = 'No'
					  }else{
					    alertify.alert('Please enter correct country code for Calling number')
						exception_flag = 'Yes'
						return;
					  }
					}else{ /* Do Nothing */}
					
					
					if(called_numer_exception == true ){
						//alert(document.getElementById('usagetype'+currrow).value);
					  if(responseJson1[j].tat_target_country!='' || responseJson1[j].target_country =='' || responseJson1[j].target_country =='NULL' ||  document.getElementById('servicetype'+currrow).value=='DATA' ){
					  
						called_numer_exception = false;
						exception_flag = 'No'
					  }else{
					    alertify.alert('Please enter correct country code for Called number')
						exception_flag = 'Yes'
						return;
					  }
					}else{ /* Do Nothing */ }
					
					//*********************************************************************************					

					
				}
					 if (exception_flag=='No' && ele_flag=='more')
					{
						var modal = document.getElementById('myModal'+currrow);
						modal.style.display = "block";
					}
			}
			};
			oReq3.send();
		}
		};
		oReq4.send();
		/*if (exception_flag=='No' && ele_flag=='more')
		{
			var modal = document.getElementById('myModal'+currrow);
			modal.style.display = "block";
		}*/
	}	
	};
	oReq1.send();
	
}


/*function Annotation(annotationid,ele_flag)

{

	var rowidarr = annotationid.split("morepng")
	var currrow = rowidarr[1];
	var exception_flag ;
	exception_flag = 'No';
	var Opco = document.getElementById('OPCOsel').value;
	var source = document.getElementById('feedtype').value;
	var vgecode = document.getElementById('nusgcode'+currrow).value;
	var VGE_ITEMNAME = document.getElementById('usagetype'+currrow).value;

	var countrycode = '';
	var CallingNumber_CC = '';
	var CalledNumber_CC = '';
	
	var Tadigco = "";
	var network = "";
	var mccmnco = "";

	var srccnty = "";
	var srcntwrk = "";

	var tgtcntry = "";

	var tgtntwrk = "";
	//var sourceNW_key = "";
	//var targetNW_key = "";
	
	var oReq1 = new XMLHttpRequest();
	oReq1.open("GET", '/getcountry_code');
	oReq1.onreadystatechange = function () {
	if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
		//console.log(oReq1.responseText);
		reponsetxt = oReq1.responseText
		responseJson = JSON.parse(reponsetxt);
		jsonlen = responseJson.length

		for(var currele = 0;currele<jsonlen;currele++)
		{
			var found = false;
			countrycode = responseJson[currele].country_code;
			CallingNumber_CC = (document.getElementById('anumber'+currrow).value).substring(0,6)
			var i;
			for(i=6;i>0;i--){
				if ( (CallingNumber_CC==countrycode) ){  //&& (responseJson[currele].network =='Vodafone')
					srccnty = responseJson[currele].country;
					srcntwrk = responseJson[currele].network;
					Tadigco = responseJson[currele].plmn_code;
					mccmnco = responseJson[currele].mcc_mnc;
					console.log(srccnty+Tadigco+mccmnco+srcntwrk);
					found =true;
					//sourceNW_key = currele;
					break;
				}else{
					CallingNumber_CC = CallingNumber_CC.substring(0,i-1);
					exception_flag = 'Yes'
				}
			}
			if(found == true){
				exception_flag = 'No'
				break;
			}
		}
		if(exception_flag == 'Yes')
		{
			alertify.alert('Please enter correct country code for Calling number')
			return;
		}
		
		for(var currele = 0;currele<jsonlen;currele++)
		{
			var found1 = false;
			countrycode = responseJson[currele].country_code;
			CalledNumber_CC = (document.getElementById('bnumber'+currrow).value).substring(0,6)
			var j;
			for(j=6;j>0;j--){
				if (CalledNumber_CC==countrycode){
					tgtcntry = responseJson[currele].country;
					tgtntwrk = responseJson[currele].network;
					console.log(tgtcntry+tgtntwrk);
					//targetNW_key = currele;
					found1 =true;
					break;
				}else{
					CalledNumber_CC = CalledNumber_CC.substring(0,j-1);
					exception_flag = 'Yes'
				}
			}
			if(found1 == true){
				exception_flag = 'No'
				break;
			}
		}

		if(exception_flag == 'Yes' && document.getElementById('bnumber'+currrow).value!='NONUMBER' && document.getElementById('bnumber'+currrow).value!='Incoming Call')
		{
			alertify.alert('Please enter correct country code for Called number')
			return;
		}		
		var oReq4 = new XMLHttpRequest();
		oReq4.open("GET", '/getopcocode?retval='+Opco);
		oReq4.onreadystatechange = function () {
		if(oReq4.readyState === XMLHttpRequest.DONE && oReq4.status === 200) {
			reponsetxt4 = oReq4.responseText;
			opcoarr = reponsetxt4.split('||');
			opcocode = opcoarr[1].split('_');
			countrycode = opcocode[1]
			console.log(reponsetxt4);
			var tatjson = '[{"countrycode":"'+countrycode+'","VGEcode":"'+vgecode+'"}]';
			var oReq3 = new XMLHttpRequest();
			oReq3.open("GET", '/getannotationspec?retval='+tatjson);
			oReq3.onreadystatechange = function () {
			if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
				console.log(oReq3.responseText);
				if(oReq3.responseText=="Not_Found"){
					alertify.alert('Annotation template is not available, please insert annotation manually ')//('Specification Not found for this usage type .!!')
					return;
				}else{ 
					reponsetxt3 = oReq3.responseText
					responseJson1 = JSON.parse(reponsetxt3);
					var j;
					var flag;
					if(responseJson1.length==1){
						j=0;
						flag= false;
						if((responseJson1[0].vge_item_name)== VGE_ITEMNAME){
							j=0;
							flag = true;
						}
						if(flag == false){
							alertify.alert('Annotation template mismatch for the selected usage type, please insert annotation manually ')//('Couldn`t find the ref key in spec .!!!')
							return;
						}												
				}else if(responseJson1.length>1){
						 flag = false;
						if(flag == false){
							for(var i=0;i<responseJson1.length;i++){
								console.log(((responseJson1[i].vge_item_name).replace(/\Voice - /g, ''))+','+VGE_ITEMNAME);
								if(((responseJson1[i].vge_item_name).replace(/\Voice - /g, '')) == VGE_ITEMNAME){
									j=i;
									flag = true;
									break;
								}
							}
							if(flag == false){
								alertify.alert ('Annotation template mismatch for the selected usage type, please insert annotation manually ') //('Couldn`t find the ref key in spec .!!!')
								return;
							}
						}
					}
					if(responseJson1[j].tadig == "PLMN_CODE"){
						document.getElementById('tadigcode'+currrow).value = Tadigco;
					}else if(responseJson1[j].tadig == "NULL"){
						document.getElementById('tadigcode'+currrow).value = "";
					}else{
						document.getElementById('tadigcode'+currrow).value = responseJson1[j].tadig;
					}
					if(responseJson1[j].mccmnc == "MCC_MNC"){
						document.getElementById('nccnmc'+currrow).value = mccmnco;
					}else if(responseJson1[j].mccmnc == "NULL"){
						document.getElementById('nccnmc'+currrow).value = "";
					}else{
						document.getElementById('nccnmc'+currrow).value = responseJson1[j].mccmnc;
					}
					
					if(responseJson1[j].tat_source_country == ""){
						document.getElementById('sourcecountry'+currrow).value = srccnty;
					}else{
						document.getElementById('sourcecountry'+currrow).value = "";
					}
	
					if(responseJson1[j].tat_source_network == ""){
						if(responseJson1[j].source_network == "NULL"){
							document.getElementById('sourcenetwork'+currrow).value = "";
							document.getElementById('sourcenetwork'+currrow).conxt = "NULL";// --referance
							document.getElementById('sourcenetwork'+currrow).title = srcntwrk;
						}else if((responseJson1[j].source_network.startsWith('VF_'))||(responseJson1[j].source_network.startsWith('VONE_'))){
							document.getElementById('sourcenetwork'+currrow).value = srcntwrk;
							document.getElementById('sourcenetwork'+currrow).conxt = "VF_Vone";// --referance
							document.getElementById('sourcenetwork'+currrow).title = responseJson1[j].source_network.toLowerCase();	
						}//else if(!(responseJson1[j].source_network.startsWith('VF_'))||!(responseJson1[j].source_network.startsWith('VONE_'))){
						else{
							document.getElementById('sourcenetwork'+currrow).value = srcntwrk;
							document.getElementById('sourcenetwork'+currrow).conxt = "default";// --referance
							document.getElementById('sourcenetwork'+currrow).title = responseJson1[j].source_network;
						}
					}else{
						if(responseJson1[j].source_network == "NULL"){
							document.getElementById('sourcenetwork'+currrow).value = "";
							document.getElementById('sourcenetwork'+currrow).conxt = "NULL";// --referance
							document.getElementById('sourcenetwork'+currrow).title = srcntwrk;
						}else if((responseJson1[j].source_network.startsWith('VF_'))||(responseJson1[j].source_network.startsWith('VONE_'))){
							document.getElementById('sourcenetwork'+currrow).value = "";
							document.getElementById('sourcenetwork'+currrow).conxt = "VF_Vone";// --referance  str.toLowerCase()
							var str = (responseJson1[j].source_network).toLowerCase();
							document.getElementById('sourcenetwork'+currrow).title = str;
						}else{
							document.getElementById('sourcenetwork'+currrow).value = srcntwrk;
							document.getElementById('sourcenetwork'+currrow).conxt = "default";// --referance
							document.getElementById('sourcenetwork'+currrow).title = responseJson1[j].source_network;
						}
					}
					
					if(responseJson1[j].tat_target_country == ""){
						document.getElementById('targetcountry'+currrow).value = tgtcntry;
					}else{
						document.getElementById('targetcountry'+currrow).value = "";
					}
					
					if(responseJson1[j].tat_target_network == ""){
						if(responseJson1[j].target_network == "NULL"){
							document.getElementById('targetnetwork'+currrow).value = "";
							document.getElementById('targetnetwork'+currrow).conxt = "NULL";// --referance
							document.getElementById('targetnetwork'+currrow).title = tgtntwrk;
						}else if((responseJson1[j].target_network.startsWith('VF_'))||(responseJson1[j].target_network.startsWith('VONE_'))){
							document.getElementById('targetnetwork'+currrow).value = tgtntwrk;
							document.getElementById('targetnetwork'+currrow).conxt = "VF_Vone";// --referance
							document.getElementById('targetnetwork'+currrow).title = responseJson1[j].target_network.toLowerCase();
						}//else if(!(responseJson1[j].target_network.startsWith('VF_'))||!(responseJson1[j].target_network.startsWith('VONE_')))
						else{
							document.getElementById('targetnetwork'+currrow).value = tgtntwrk;
							document.getElementById('targetnetwork'+currrow).conxt = "default";// --referance
							document.getElementById('targetnetwork'+currrow).title = responseJson1[j].target_network;
						}
					}else{
						if(responseJson1[j].target_network == "NULL"){
							document.getElementById('targetnetwork'+currrow).value = "";
							document.getElementById('targetnetwork'+currrow).conxt = "NULL";// --referance
							document.getElementById('targetnetwork'+currrow).title = tgtntwrk;
						}else if((responseJson1[j].target_network.startsWith('VF_'))||(responseJson1[j].target_network.startsWith('VONE_'))){
							document.getElementById('targetnetwork'+currrow).value = "";
							document.getElementById('targetnetwork'+currrow).conxt = "VF_Vone";// --referance
							document.getElementById('targetnetwork'+currrow).title = responseJson1[j].target_network.toLowerCase();
						}else{
							document.getElementById('targetnetwork'+currrow).value = tgtntwrk;
							document.getElementById('targetnetwork'+currrow).conxt = "default";// --referance
							document.getElementById('targetnetwork'+currrow).title = responseJson1[j].target_network;
						}
					}				
				
				}
			}
			};
			oReq3.send();
		}
		};
		oReq4.send();
		/*if (exception_flag=='No' && ele_flag=='more')
		{
			var modal = document.getElementById('myModal'+currrow);
			modal.style.display = "block";
		}/
	}	
	};
	oReq1.send();
	

}
*/


function Annotation(annotationid,ele_flag)
{

	var rowidarr = annotationid.split("morepng")
	var currrow = rowidarr[1];
	var exception_flag ;
	exception_flag = 'No';
	var calling_numer_exception = false;
	var called_numer_exception = false;	
	var Opco = document.getElementById('OPCOsel').value;
	var source = document.getElementById('feedtype').value;
	var vgecode = document.getElementById('nusgcode'+currrow).value;
	var VGE_ITEMNAME = document.getElementById('usagetype'+currrow).value;

	/*if(vgecode!='106' && document.getElementById('anumber'+currrow).value == 'Incoming Call'){
		//alertify.alert('Please enter correct country code for Calling number');
		return;
	}*/

	var countrycode = '';
	var CallingNumber_CC = '';
	var CalledNumber_CC = '';
	
	var Tadigco = "";
	var network = "";
	var mccmnco = "";

	var srccnty = "";
	var srcntwrk = "";

	var tgtcntry = "";

	var tgtntwrk = "";
	//var sourceNW_key = "";
	//var targetNW_key = "";
	
	var oReq1 = new XMLHttpRequest();
	oReq1.open("GET", '/getcountry_code');
	oReq1.onreadystatechange = function () {
	if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {
		//console.log(oReq1.responseText);
		reponsetxt = oReq1.responseText
		responseJson = JSON.parse(reponsetxt);
		jsonlen = responseJson.length

		for(var currele = 0;currele<jsonlen;currele++)
		{
			var found = false;
			countrycode = responseJson[currele].country_code;
			//alert(document.getElementById('srcstate_Value'+currrow).value);
			if(document.getElementById('srcstate_Value'+currrow).value != '')
			{
				console.log(CallingNumber_CC);
				console.log(countrycode)
				CallingNumber_CC = document.getElementById('srcstate_Value'+currrow).value;
				if (CallingNumber_CC==countrycode){  //&& (responseJson[currele].network =='Vodafone')
					srccnty = responseJson[currele].country;
					srcntwrk = responseJson[currele].network;
					Tadigco = responseJson[currele].plmn_code;
					mccmnco = responseJson[currele].mcc_mnc;
					console.log(srccnty+Tadigco+mccmnco+srcntwrk);
					found =true;
					calling_numer_exception = false
					//sourceNW_key = currele;
					break;
				}else{
					calling_numer_exception = false
				}
				
			}
			else
			{
				CallingNumber_CC = (document.getElementById('anumber'+currrow).value).substring(0,6)
				var i;
				for(i=6;i>0;i--){
				if ( (CallingNumber_CC==countrycode) ){  //&& (responseJson[currele].network =='Vodafone')
					srccnty = responseJson[currele].country;
					srcntwrk = responseJson[currele].network;
					Tadigco = responseJson[currele].plmn_code;
					mccmnco = responseJson[currele].mcc_mnc;
					console.log(srccnty+Tadigco+mccmnco+srcntwrk);
					found =true;
					//sourceNW_key = currele;
					break;
				}else{
					CallingNumber_CC = CallingNumber_CC.substring(0,i-1);
					calling_numer_exception = true
				}
			}
			
			}
			if(found == true){
				calling_numer_exception = false
				break;
			}
		}
		if(calling_numer_exception == true && document.getElementById('anumber'+currrow).value!='Incoming Call')  
		{
			//alertify.alert('Please enter correct country code for Calling number')
			//return;
		}else if(calling_numer_exception == true && document.getElementById('anumber'+currrow).value=='Incoming Call') 	
		{
			exception_flag = 'No'
		}
		for(var currele = 0;currele<jsonlen;currele++)
		{
			var found1 = false;
			countrycode = responseJson[currele].country_code;
			//CalledNumber_CC = (document.getElementById('bnumber'+currrow).value).substring(0,6)
			if(document.getElementById('tgtstate_Value'+currrow).value != '')
			{
				CalledNumber_CC = document.getElementById('tgtstate_Value'+currrow).value;
			}
			else
			{
				CalledNumber_CC = (document.getElementById('bnumber'+currrow).value).substring(0,6)
			}
			var j;
			for(j=6;j>0;j--){
				if (CalledNumber_CC==countrycode){
					tgtcntry = responseJson[currele].country;
					tgtntwrk = responseJson[currele].network;
					console.log(tgtcntry+tgtntwrk);
					//targetNW_key = currele;
					found1 =true;
					break;
				}else{
					CalledNumber_CC = CalledNumber_CC.substring(0,j-1);
					called_numer_exception = true
				}
			}
			if(found1 == true){
				called_numer_exception = false
				break;
			}
		}

		if(called_numer_exception == true && document.getElementById('bnumber'+currrow).value!='NONUMBER') 
		{
			//alertify.alert('Please enter correct country code for Called number')
			//return;
		}else if(called_numer_exception == true && ( document.getElementById('bnumber'+currrow).value=='NONUMBER')	)
		{
			exception_flag = 'No'
		}
		var oReq4 = new XMLHttpRequest();
		oReq4.open("GET", '/getopcocode?retval='+Opco);
		oReq4.onreadystatechange = function () {
		if(oReq4.readyState === XMLHttpRequest.DONE && oReq4.status === 200) {
			reponsetxt4 = oReq4.responseText;
			opcoarr = reponsetxt4.split('||');
			opcocode = opcoarr[1].split('_');
			countrycode = opcocode[1]
			console.log(reponsetxt4);
			var tatjson = '[{"countrycode":"'+countrycode+'","VGEcode":"'+vgecode+'"}]';
			var oReq3 = new XMLHttpRequest();
			oReq3.open("GET", '/getannotationspec?retval='+tatjson);
			oReq3.onreadystatechange = function () {
			if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
				console.log(oReq3.responseText);
				if(oReq3.responseText=="Not_Found"){
					//alertify.alert('Annotation template is not available, please insert annotation manually ')//('Specification Not found for this usage type .!!')
					return;
				}else{ 	
							
					reponsetxt3 = oReq3.responseText
					responseJson1 = JSON.parse(reponsetxt3);
					var j;
					var flag;
					if(responseJson1.length==1){
						j=0;
						flag= false;
						if((responseJson1[0].vge_item_name)== VGE_ITEMNAME){
							j=0;
							flag = true;
						}
						if(flag == false){
							//alertify.alert('Annotation template mismatch for the selected usage type, please insert annotation manually ')//('Couldn`t find the ref key in spec .!!!')
							return;
						}												
				}else if(responseJson1.length>1){
						 flag = false;
						if(flag == false){
							for(var i=0;i<responseJson1.length;i++){
								console.log(((responseJson1[i].vge_item_name).replace(/\Voice - /g, ''))+','+VGE_ITEMNAME);
								if(((responseJson1[i].vge_item_name).replace(/\Voice - /g, '')) == VGE_ITEMNAME){
									j=i;
									flag = true;
									break;
								}
							}
							if(flag == false){
								//alertify.alert ('Annotation template mismatch for the selected usage type, please insert annotation manually ') //('Couldn`t find the ref key in spec .!!!')
								return;
							}
						}
					}

					
					if(responseJson1[j].tadig == "PLMN_CODE"){
						document.getElementById('tadigcode'+currrow).value = Tadigco;
					}else if((responseJson1[j].tadig).indexOf('VF_')!=-1 || (responseJson1[j].tadig).indexOf('VONE_')!=-1 ){
						document.getElementById('tadigcode'+currrow).value = Tadigco;
					}else if(responseJson1[j].tadig == "NULL"){
						document.getElementById('tadigcode'+currrow).value = "";
					}else{
						document.getElementById('tadigcode'+currrow).value = responseJson1[j].tadig;
					}
					if(responseJson1[j].mccmnc == "MCC_MNC"){
						document.getElementById('nccnmc'+currrow).value = mccmnco;
					}else if((responseJson1[j].mccmnc).indexOf('VF_')!=-1 || (responseJson1[j].mccmnc).indexOf('VONE_')!=-1){
						document.getElementById('nccnmc'+currrow).value = mccmnco;
					}else if(responseJson1[j].mccmnc == "NULL"){
						document.getElementById('nccnmc'+currrow).value = "";
					}else{
						document.getElementById('nccnmc'+currrow).value = responseJson1[j].mccmnc;
					}
					var momtva = document.getElementById('momt'+currrow).value;	
					var continue_flag
					var continue_fg

						// Include the Calling and Called Number Validations- in line to the specification
						
						if(calling_numer_exception == true ){
						
						  //if(responseJson1[j].tat_source_country != '' || responseJson1[j].source_country  == '' || responseJson1[j].source_country =='NULL' || vgecode == '106' ){
						  if(responseJson1[j].tat_source_country != '' || responseJson1[j].source_country  == '' || (responseJson1[j].source_country).indexOf('NULL')!= -1 || vgecode == '106' || momtva ==='MT' ){
							srccnty =""
							calling_numer_exception = false;
							exception_flag = 'No'
						  }else{
							//alertify.alert('Please enter correct country code for Calling number')
							exception_flag = 'Yes'
							return;
						  }
						}else{ /* Do Nothing */}
						
						
						
						if(called_numer_exception == true ){
						
						  //if(responseJson1[j].tat_target_country!='' || responseJson1[j].target_country =='' || responseJson1[j].target_country =='NULL' || ( document.getElementById('bnumber'+currrow).value=='NONUMBER') ){
						  if(responseJson1[j].tat_target_country!='' || responseJson1[j].target_country =='' || (responseJson1[j].target_country).indexOf('NULL')!=-1 || ( document.getElementById('bnumber'+currrow).value=='NONUMBER') ){

							tgtcntry = ""
							called_numer_exception = false;							
							exception_flag = 'No'
						  }else{
							//alertify.alert('Please enter correct country code for Called number')
							exception_flag = 'Yes'
							return;
						  }
						}else{ /* Do Nothing */ }
						
						//*********************************************************************************	
						// In case of voice incoming roaming [MT] pick the source country and network from the called Number
						
						if(momtva == 'MT'){
							if(srccnty != '')
							{
								tempcnty = 	srccnty;
								tempntwk = srcntwrk;
								srccnty = tgtcntry;						
								srcntwrk= tgtntwrk;
								Tadigco = ""
								mccmnco = ""
								tgtcntry = tempcnty;
								tgtntwrk = tempntwk;	
							}	
							else
							{
								srccnty = tgtcntry;						
								srcntwrk= tgtntwrk;
								Tadigco = ""
								mccmnco = ""
								tgtcntry = "";
								tgtntwrk = "";	
							}		
						}		
						
						//alert(continue_flag);
						 if(continue_flag ='False')
						 {
								if (responseJson1[j].tat_source_country == ""){

								var $select = $('#'+('sourcecountry'+currrow)).selectize();
								
								$select[0].selectize.setValue(srccnty);
								}else{
									var $select = $('#'+('sourcecountry'+currrow)).selectize();
									$select[0].selectize.setValue("");
								}	
								//Null value setting for Source country in case of spec contains 'NULL' in 'Source_Country'
								if ( (responseJson1[j].source_country).indexOf('NULL') !=-1 ){
									var $select = $('#'+('sourcecountry'+currrow)).selectize();
									$select[0].selectize.setValue("");
								}
						 }
						setTimeout(function(){
						
									if(responseJson1[j].tat_source_network == ""){
										if(responseJson1[j].source_network == "NULL"){
										var $select = $('#sourcenetwork'+currrow).selectize();
										$select[0].selectize.setValue(""); 
										document.getElementById('sntk_Conxt'+currrow).value = "NULL";// --referance
										document.getElementById('sntk_Value'+currrow).value = srcntwrk;
									}else if((responseJson1[j].source_network.indexOf('VF_') != -1)||(responseJson1[j].source_network.indexOf('VONE_') != -1)){

										var $select = $('#sourcenetwork'+currrow).selectize();
										$select[0].selectize.setValue(srcntwrk); 
										document.getElementById('sntk_Conxt'+currrow).value= "VF_Vone";// --referance
										document.getElementById('sntk_Value'+currrow).value = responseJson1[j].source_network.toLowerCase();	
									}
									else{
										var $select = $('#sourcenetwork'+currrow).selectize();
										$select[0].selectize.setValue(srcntwrk); 
										document.getElementById('sntk_Conxt'+currrow).value = "default";// --referance
										document.getElementById('sntk_Value'+currrow).value = responseJson1[j].source_network;										
									}
								}else{					
									if(responseJson1[j].source_network == "NULL"){
										var $select = $('#sourcenetwork'+currrow).selectize();
										$select[0].selectize.setValue(""); 
										document.getElementById('sntk_Conxt'+currrow).value = "NULL";// --referance
										document.getElementById('sntk_Value'+currrow).value = srcntwrk;
									}else if((responseJson1[j].source_network.indexOf('VF_') != -1)||(responseJson1[j].source_network.indexOf('VONE_') != -1)){
										var $select = $('#sourcenetwork'+currrow).selectize();
										$select[0].selectize.setValue(""); 
										document.getElementById('sntk_Conxt'+currrow).value  = "VF_Vone";// --referance  str.toLowerCase()
										var str = (responseJson1[j].source_network).toLowerCase();
										document.getElementById('sntk_Value'+currrow).value = str;
									}else{
										var $select = $('#sourcenetwork'+currrow).selectize();
										$select[0].selectize.setValue(srcntwrk); 
										document.getElementById('sntk_Conxt'+currrow).value = "default";// --referance
										document.getElementById('sntk_Value'+currrow).value = responseJson1[j].source_network;
									}
								}


								
						},(2000));	
			
								
					 if(continue_fg ='False')
					 {
							 if(responseJson1[j].tat_target_country == ""){
							 
							var $select = $('#'+('targetcountry'+currrow)).selectize();
								$select[0].selectize.setValue(tgtcntry);
							}else{

								var $select = $('#'+('targetcountry'+currrow)).selectize();
								$select[0].selectize.setValue("");
							}
							//Null value setting for target country in case of spec contains 'NULL' in 'Target_Country'
							if ( (responseJson1[j].target_country).indexOf('NULL') !=-1 ){
								var $select = $('#'+('targetcountry'+currrow)).selectize();
								$select[0].selectize.setValue("");
							}							
					 }
					setTimeout(function(){
						if(responseJson1[j].tat_target_network == ""){
								if(responseJson1[j].target_network == "NULL"){
								
								var $select = $('#targetnetwork'+currrow).selectize();
								$select[0].selectize.setValue( ""); 
								document.getElementById('tgt_Conxt'+currrow).value = "NULL";// --referance
								document.getElementById('tgt_Value'+currrow).value = tgtntwrk;
							}else if((responseJson1[j].target_network.indexOf('VF_') != -1)||(responseJson1[j].target_network.indexOf('VONE_') != -1)){
								var $select = $('#targetnetwork'+currrow).selectize();
								$select[0].selectize.setValue(tgtntwrk);
								document.getElementById('tgt_Conxt'+currrow).value= "VF_Vone";// --referance
								document.getElementById('tgt_Value'+currrow).value = responseJson1[j].target_network.toLowerCase();
							}
							else{
								var $select = $('#targetnetwork'+currrow).selectize();
								$select[0].selectize.setValue(tgtntwrk);
								document.getElementById('tgt_Conxt'+currrow).value = "default";// --referance
								document.getElementById('tgt_Value'+currrow).value  = responseJson1[j].target_network;
							}
						
						}else{
							if(responseJson1[j].target_network == "NULL"){
								var $select = $('#targetnetwork'+currrow).selectize();
								$select[0].selectize.setValue("");
								document.getElementById('tgt_Conxt'+currrow).value  = "NULL";// --referance
								document.getElementById('tgt_Value'+currrow).value = tgtntwrk;
							}else if((responseJson1[j].target_network.indexOf('VF_') != -1)||(responseJson1[j].target_network.indexOf('VONE_') != -1)){
								var $select = $('#targetnetwork'+currrow).selectize();
								$select[0].selectize.setValue("");
								document.getElementById('tgt_Conxt'+currrow).value = "VF_Vone";// --referance
								document.getElementById('tgt_Value'+currrow).value = responseJson1[j].target_network.toLowerCase();
							}else{
								var $select = $('#targetnetwork'+currrow).selectize();
								$select[0].selectize.setValue(tgtntwrk); 
								document.getElementById('tgt_Conxt'+currrow).value = "default";// --referance
								document.getElementById('tgt_Value'+currrow).value  = responseJson1[j].target_network;
							}
							
						}
				
					},2000);
					
											
				}
			}
			};
			oReq3.send();
		}
		};
		oReq4.send();
		//alert("lat:"+document.getElementById('sourcenetwork'+currrow).title);
		/*if (exception_flag =='No' && ele_flag=='more')
		{
			var modal = document.getElementById('myModal'+currrow);
			modal.style.display = "block";

		}*/
	}	
	};
	oReq1.send();
}


//Function to get the Annotation amount format based on the OPCO

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function pad_end(num, size) {
    var s = num+"";
    while (s.length < size) s =  s + "0";
    return s;
} 

function opco_annotation_amt_formatter(opco,amount_val)
{
 
 // AMOUNT formatting
	var output;
	output ='';

		if(opco=='United Kingdom' && (amount_val!='') )
		{
							// Amount formatting- Updated Logic ***********
							if( amount_val=='0' )
							{
								output = '0'
								return (output.toString());	
							}							
							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = (parseInt(Amount))*1000
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = (parseInt(Amount_prefix))*1000		
								}else if(n==1)
								{
									if(amount_container[1]=='0')
									{ output = (parseInt(Amount_prefix))*1000 }
									else
									{output = parseInt(parseFloat(((Float_Amount*1000)).toFixed(2)));}
								}
								else if(n==2 || n==3)
								{
									output = parseInt(parseFloat((Float_Amount*1000).toFixed(2)));
								}else if(n>3){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());		

		}else if(opco=='Germany' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '+0000000.000000'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								if(Amount.length>7)
								{
									output = 'Invalid Amount format for current OPCO, please provide the same .!!' 
									return (output.toString());
								}
								output = pad(parseInt(Amount),7)
								output = '+'+output+'.000000'
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = pad(parseInt(Amount),7)
									output = '+'+output+'.000000'	
								}else if(n==1 || n<=6)
								{
									var decimal = pad_end((amount_container[1]),6)
									var intpart = pad(parseInt(Amount_prefix),7)
									output ='+'+intpart+'.'+decimal
								}else if(n>6){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());				
		
		}else if(opco=='Netherland' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0.0'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+'.0'
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+'.0'	
								}else if(n==1 || n<=3)
								{
									var decimal = amount_container[1]
									var intpart = Amount_prefix
									output =intpart+'.'+decimal
								}else if(n>3){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
			
		}else if(opco=='Ireland' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0.0000'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+'.0000'
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+'.0'	
								}else if(n==1 || n<=4)
								{
									var decimal = pad_end(amount_container[1],4)
									var intpart = Amount_prefix
									output =intpart+'.'+decimal
									//alert(output);
								}else if(n>4){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
		
		}else if(opco=='Spain' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0.0'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+'.0'
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+'.0'	
								}else if(n==1 || n<=4)
								{
									var decimal = amount_container[1]
									var intpart = Amount_prefix
									output =intpart+'.'+decimal
								}else if(n>4){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
		
		}else if(opco=='Italy' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0,0000'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+',0000'
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+',0000'	
								}else if(n==1 || n<=4)
								{
									var decimal = pad_end(amount_container[1],4)
									var intpart = Amount_prefix
									output =intpart+','+decimal
								}else if(n>4){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
		
		}else if(opco=='Portugal' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+''
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+''	
								}else if(n==1 || n<=2)
								{
									var decimal =amount_container[1]
									var intpart = Amount_prefix
									if(intpart=='0'){intpart='';}
									output =intpart+'.'+decimal
								}else if(n>2){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
		
		}else if(opco=='Czech Republic' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0.00'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+'.00'
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+'.00'	
								}else if(n==1 || n<=2)
								{
									var decimal =pad_end((amount_container[1]),2)
									var intpart = Amount_prefix
									output =intpart+'.'+decimal
								}else if(n>2){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
		
		}else if(opco=='Hungary' && (amount_val!='')){
							if( amount_val=='0' )
							{
								output = '0'
								return (output.toString());	
							}

							var Amount ;
							var Float_Amount;
							Amount = amount_val.toString();
							Float_Amount = parseFloat(amount_val);
							if (Amount.indexOf('.')==-1)
							{
								output = Amount
								output = output+''
							}else if(Amount.indexOf('.')!==-1)
							{
								var amount_container = Amount.split('.')
								Amount_prefix = amount_container[0];
								var n = amount_container[1].length;
								if (n==0)
								{
									output = Amount
									output = output+''	
								}else if(n==1 || n<=2)
								{
									var decimal =amount_container[1]
									var intpart = Amount_prefix
									if(intpart=='0'){intpart='';}
									output =intpart+'.'+decimal
								}else if(n>2){
								  output = 'Invalid Amount format for current OPCO, please provide the same .!!'
								}
							}						
					return (output.toString());	
		
		}else if(opco=='Malaysia' && (amount_val!='')){
			output = amount_val
			return (output.toString());		
		}
 }



function submitannot(annotationid)
{
	//Anno_Title(annotationid)
	var rowidarr ;
	var src_country_exception = false;
	var tgt_country_exception = false;
	rowidarr = annotationid.split("Submitannot")
	var currrow ;
	currrow = rowidarr[1];
	var modal;
	modal = document.getElementById('myModal'+currrow);
	var Opco;
	Opco = document.getElementById('OPCOsel').value;
	
	var countrycode ;
	var orig_type_id ;
	countrycode = '';
	orig_type_id = '';
	
	//validate all the mandatory field's
	if(document.getElementById('sourcecountry'+currrow).value =='' || document.getElementById('sourcecountry'+currrow).value == 'Please Select')
	{
	  src_country_exception = true;
	  //alertify.alert('Please select the Source country .!!')
	  //return;
	}else if( (document.getElementById('targetcountry'+currrow).value=='' || document.getElementById('targetcountry'+currrow).value == 'Please Select' ) && (document.getElementById('servicetype'+currrow).value!='DATA'))
	{
		 tgt_country_exception = true;
		 //alertify.alert('Please select the Target country .!!')
		 //return;
	}else if(document.getElementById("Amt"+currrow).value==''){
		 alertify.alert('Please provide the Amount .!!')
		 return;	
	}
	
	
	var source;
	source = document.getElementById('feedtype').value; //---done
	var orgi_typ_id_usg ; 
	orgi_typ_id_usg = ''; //---done
	var tadig;
	tadig = document.getElementById("tadigcode"+currrow).value; //---done
	var mccmnc;
	mccmnc = document.getElementById("nccnmc"+currrow).value; //---done
	var srccnty ; //---done
	var srcntwrk ; //---done
	var tgtntwrk ; //---done
	var tgtcntry ; //---done
	var roamtyp ; //---done
	var momt;
	momt = document.getElementById("momt"+currrow).value; //---done
	//alert(momt);
	//var servicetype = document.getElementById("proposition"+currrow).value;
	//servicetype = servicetype.substring(0,8);
	var servicetype ;
	servicetype = ''; //---done
	var amt;
	var src_ntk_1st_val;
	var tgt_ntk_1st_val;
	
	let options_src = $('#sourcenetwork'+currrow)[0].selectize.options;
	let count_src = Object.keys(options_src);
	if(count_src.length>=1){
		src_ntk_1st_val = count_src[0]
	}
	let options_tgt = $('#targetnetwork'+currrow)[0].selectize.options;
	let count_tgt = Object.keys(options_tgt);
	if(count_tgt.length>=1){
		tgt_ntk_1st_val = count_tgt[0]
	}


// AMOUNT formatting
	amt = opco_annotation_amt_formatter(Opco,document.getElementById("Amt"+currrow).value)	
	if ((amt.toString()).indexOf('Invalid') == 0){
		alertify.alert('Invalid Amt format for current OPCO, please provide the same .!!')
		return;		
	}else{
		amt = amt;
	}
	
	var vgecode = document.getElementById("nusgcode"+currrow).value; //---done
	var Indeterminate_Flag = ""; //---done

	if(document.getElementById("roaming"+currrow).value == "N" || document.getElementById("roaming"+currrow).value == "I")
	{
		roamtyp = 1;
	}
	else
	{
		roamtyp = 0;
		//momt = "";  
	}
	
	var srccntryval = document.getElementById('sourcecountry'+currrow).value;

	
	var srcntwrkval = '';
	if(document.getElementById('sntk_Conxt'+currrow).value == "NULL"){

		if(document.getElementById('sourcenetwork'+currrow).value != '' && document.getElementById('sourcenetwork'+currrow).value != 'Please Select'){
			srcntwrkval = document.getElementById('sourcenetwork'+currrow).value;			
		}else{
			if(srccntryval == 'Andorra' || srccntryval == 'Chile' || srccntryval == 'Colombia' || srccntryval =='India' || srccntryval =='International' || srccntryval =='Italy' || srccntryval == 'Paraquay' || srccntryval == 'Somalia' || srccntryval =='Suriname' || srccntryval == 'Turks and Caicos Islands (UK)' || 	srccntryval == 'UK' || 	srccntryval == 'United States' || 	srccntryval == 'Uruguay')
			{  
				var src_cntry_excep_check = document.getElementById('sntk_Value'+currrow).value;
				if((count_src.toString()).indexOf(src_cntry_excep_check) !=-1 ){
					srcntwrkval = src_cntry_excep_check;
					if(srccntryval =='India'){
						srcntwrkval = tgt_ntk_1st_val; 
					}					
				}else{
					srcntwrkval = src_ntk_1st_val; 
				}
			}
			else{
			 srcntwrkval = src_ntk_1st_val ; 
			}		
		}
		//srcntwrkval = document.getElementById('sourcenetwork'+currrow).title;
	}else if(document.getElementById('sntk_Conxt'+currrow).value == "default"){
		srcntwrkval = document.getElementById('sourcenetwork'+currrow).value;
	}else{
		srcntwrkval = document.getElementById('sourcenetwork'+currrow).value;
	}
	
	var tgtcntryval = document.getElementById('targetcountry'+currrow).value;
	
	var tgtntwrkval = "";
	if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
		if(document.getElementById('targetnetwork'+currrow).value != '' && document.getElementById('targetnetwork'+currrow).value != 'Please Select' ){
			tgtntwrkval = document.getElementById('targetnetwork'+currrow).value;			
		}else{
			if(tgtcntryval == 'Andorra' || tgtcntryval == 'Chile' || tgtcntryval == 'Colombia' || tgtcntryval =='India' || tgtcntryval =='International' || tgtcntryval =='Italy' || tgtcntryval == 'Paraquay' || tgtcntryval == 'Somalia' || tgtcntryval =='Suriname' || tgtcntryval == 'Turks and Caicos Islands (UK)' || 	tgtcntryval == 'UK' || 	tgtcntryval == 'United States' || 	tgtcntryval == 'Uruguay')
			{ 
				var tgt_cntry_excep_check = document.getElementById('tgt_Value'+currrow).value;
				if((count_tgt.toString()).indexOf(tgt_cntry_excep_check) !=-1 ){
					tgtntwrkval = tgt_cntry_excep_check;
					if(tgtcntryval =='India'){
						tgtntwrkval = tgt_ntk_1st_val; 
					}
				}else{
					tgtntwrkval = tgt_ntk_1st_val; 
				}			
			}
			else{
			 tgtntwrkval = tgt_ntk_1st_val ; 
			}				
		}			
		//tgtntwrkval = document.getElementById('targetnetwork'+currrow).title;		
	}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
		tgtntwrkval = document.getElementById('targetnetwork'+currrow).value;
	}else{
		tgtntwrkval = document.getElementById('targetnetwork'+currrow).value;
	}
	

	
	
	var bnumbflag = document.getElementById("bumbflag"+currrow).value;
	if(srcntwrkval!='' &&  typeof(srcntwrkval) != 'undefined' )
	{
		if(srcntwrkval.indexOf('&')!=-1){
			srcntwrkval = srcntwrkval.replace('&','%26');
		}
	}	
	if(tgtntwrkval!='' && typeof(tgtntwrkval) != 'undefined' )
	{
		if(tgtntwrkval.indexOf('&')!=-1){
			tgtntwrkval = tgtntwrkval.replace('&','%26');
		}	
	}
	var srcjson =  '[{"country":"'+srccntryval+'","network":"'+srcntwrkval+'"}]';
	if(document.getElementById('servicetype'+currrow).value!='DATA') //******************************
	{
	 var tgtjson = '[{"country":"'+tgtcntryval+'","network":"'+tgtntwrkval+'"}]';
	}else
	{
	  var tgtjson = '[{"country":"UK","network":"Vodafone"}]';
	}
		
	//alert(srcjson + '   and   '+tgtjson)
	//return;
	
	
	var oReq4 = new XMLHttpRequest();
	oReq4.open("GET", '/getopcocode?retval='+Opco);
	oReq4.onreadystatechange = function () {
	if(oReq4.readyState === XMLHttpRequest.DONE && oReq4.status === 200) {
		reponsetxt4 = oReq4.responseText;
		opcoarr = reponsetxt4.split('||');
		opcocode = opcoarr[1].split('_');
		countrycode = opcocode[1]
		var tatjson = '[{"countrycode":"'+countrycode+'","VGEcode":"'+vgecode+'"}]';
		var oReq3 = new XMLHttpRequest();
		oReq3.open("GET", '/getannotationspec?retval='+tatjson);
		oReq3.onreadystatechange = function () {
		if(oReq3.readyState === XMLHttpRequest.DONE && oReq3.status === 200) {
			reponsetxt3 = oReq3.responseText
			if(oReq3.responseText=="Not_Found"){
				alertify.alert('Annotation template is not available, please insert annotation manually ')//('Specification Not found for this usage type .!!')
				return;
			}
			responseJson3 = JSON.parse(reponsetxt3);
			var VGE_ITEMNAME = document.getElementById('usagetype'+currrow).value;
			var j;
			var flag;
			if(responseJson3.length==1){
				j=0;
				flag= false;
				if((responseJson3[0].vge_item_name)== VGE_ITEMNAME){
					j=0;
					flag = true;
				}
				if(flag == false){
					alertify.alert('Annotation template mismatch for the selected usage type, please insert annotation manually ')//('Couldn`t find the ref key in spec .!!!')
					return;
				}
			}else if(responseJson3.length>1){
				 flag = false;

				if(flag == false){
					for(var i=0;i<responseJson3.length;i++){
						console.log(((responseJson3[i].vge_item_name).replace(/\Voice - /g, ''))+','+VGE_ITEMNAME);
						if(((responseJson3[i].vge_item_name).replace(/\Voice - /g, '')) == VGE_ITEMNAME){
							j=i;
							flag = true;
							break;
						}
					}
					if(flag == false){
						alertify.alert('Annotation template mismatch for the selected usage type, please insert annotation manually ')//('Couldn`t find the ref key in spec .!!!')

						return;
					}
				}
			}
			
			//check for the momt_flag
			//alert(responseJson3[j].mo_mt_flag)
			if(responseJson3[j].mo_mt_flag== 'yes'){
				momt = momt 
				//alert(momt);
			}else if(responseJson3[j].mo_mt_flag == 'No'){
				momt = ''
			}
			
			//Tadig id and Mcc_mnc exception's
			if(responseJson3[j].tadig=='NULL' || responseJson3[j].tadig=='')
			{
				tadig =''
			}
			if(responseJson3[j].mccmnc=='NULL' || responseJson3[j].mccmnc=='')
			{
				mccmnc =''
			}	
		
			// Src and Trggt ntk validation 
			  if(responseJson3[j].tat_source_network!=''  && document.getElementById('sourcenetwork'+currrow).value=='')
			  {
				alertify.alert('Please slelect the Source Network')
				return;
			  }
			  if(responseJson3[j].tat_target_network!='' && document.getElementById('targetnetwork'+currrow).value=='')
			  {
				alertify.alert('Please slelect the Target Network')
				return;
			  }			
			
			
			orig_type_id = responseJson3[j].orig_type_id_usg;	
			if(orig_type_id == "TYPE_ID_USG"){
				if (document.getElementById("inusgcod"+currrow).value == '-' || document.getElementById("inusgcod"+currrow).value == '')
				{	
					orgi_typ_id_usg = document.getElementById("usgcode"+currrow).value;
				}
				else
				{
					orgi_typ_id_usg = document.getElementById("inusgcod"+currrow).value;
				}
			}else if(orig_type_id == "VGE_CODE"){
				orgi_typ_id_usg = vgecode ;
			}
			
				// Source and Target country mandatory validation according to the specification only if source_country/target_country doesn't contain Null value throw exception
				
				if(src_country_exception ==true){
				
					if((responseJson3[j].source_country).indexOf('NULL')!=-1 || responseJson3[j].source_country === ''){
						//No exception
						srcjson = '[{"country":"UK","network":"Vodafone"}]';
					}else{
					     alertify.alert('Please select the Source country .!!')
					     return;					
					}
				
				}

				if(tgt_country_exception ==true){
					if((responseJson3[j].target_country).indexOf('NULL')!=-1 || responseJson3[j].target_country == ''){
						//No exception
						tgtjson = '[{"country":"UK","network":"Vodafone"}]';
					}else{
					     alertify.alert('Please select the Target country .!!')
					     return;					
					}				
				}
			
			
			var oReq1 = new XMLHttpRequest();
			oReq1.open("GET", '/getcountrycode?retval='+srcjson);
			oReq1.onreadystatechange = function () {
			if(oReq1.readyState === XMLHttpRequest.DONE && oReq1.status === 200) {


				reponsetxt = oReq1.responseText
				responseJson = JSON.parse(reponsetxt);
				//************************************
				var src_cntry_db_ref;
				src_cntry_db_ref = responseJson3[j].source_country
				if(src_cntry_db_ref.indexOf('NULL')!=-1)
				{
					srccnty = '';
				}else{
					srccnty = responseJson[0].country_code 
				}	
				
				if(document.getElementById('sntk_Conxt'+currrow).value == "NULL"){
					srcntwrk = "";
					
					//get the target network here
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									console.log('log:'+responseJson1)
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}
									// Check for the Roaming scenario where we need to pick the called number country code over the currently selected country in GUI as Target_Country
									if( responseJson3[j].tat_target_country == 'Roamed Country' && responseJson3[j].target_country == 'Called Number COUNTRY_CODE' ){
										
										   tgtcntry = document.getElementById('tgtstate_Value'+currrow).value ;									
									}
									if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
										if(document.getElementById('tgt_Value'+currrow).value== 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('tgt_Value'+currrow).value == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('tgt_Value'+currrow).value;
										}
									}else{
										if(document.getElementById('tgt_Conxt'+currrow).value == "VF_Vone"){
											var headder1 = document.getElementById('tgt_Value'+currrow).value
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													tgtntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												
												document.getElementById("Annotation"+currrow).value = annotation;													
												document.getElementById("Annotation"+currrow).title = annotation;													
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
										if(responseJson3[j].target_country  == '491722270333')
										{
											tgtcntry = '49'
										}		
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
									document.getElementById("Annotation"+currrow).title = annotation;
								 }
								};			
							oReq2.send(); 					
					
				}else if(document.getElementById('sntk_Conxt'+currrow).value == "default"){
					if(document.getElementById('sntk_Value'+currrow).value == 'MNC'){
						srcntwrk = responseJson[0].mnc;
				//get the target network here
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}	
									// Check for the Roaming scenario where we need to pick the called number country code over the currently selected country in GUI as Target_Country
									if( responseJson3[j].tat_target_country == 'Roamed Country' && responseJson3[j].target_country == 'Called Number COUNTRY_CODE' ){
										
										   tgtcntry = document.getElementById('tgtstate_Value'+currrow).value ;									
									}									
									if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
										if(document.getElementById('tgt_Value'+currrow).value == 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('tgt_Value'+currrow).value == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('tgt_Value'+currrow).value ;
										}
									}else{
										if(document.getElementById('tgt_Conxt'+currrow).value == "VF_Vone"){
											var headder1 = document.getElementById('tgt_Value'+currrow).value
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													tgtntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												document.getElementById("Annotation"+currrow).value = annotation;
												document.getElementById("Annotation"+currrow).title = annotation;
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
									document.getElementById("Annotation"+currrow).title = annotation;
								 }
								};			
							oReq2.send(); 							
						
					}else if(document.getElementById('sntk_Value'+currrow).value== 'MCCMNC'){
						srcntwrk = responseJson[0].mcc_mnc;
				//get the target network here
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}
									// Check for the Roaming scenario where we need to pick the called number country code over the currently selected country in GUI as Target_Country
									if( responseJson3[j].tat_target_country == 'Roamed Country' && responseJson3[j].target_country == 'Called Number COUNTRY_CODE' ){
										
										   tgtcntry = document.getElementById('tgtstate_Value'+currrow).value ;									
									}									
									if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
										if(document.getElementById('tgt_Value'+currrow).value == 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('tgt_Value'+currrow).value == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('tgt_Value'+currrow).value;
										}
									}else{
										if(document.getElementById('tgt_Conxt'+currrow).value == "VF_Vone"){
											var headder1 = document.getElementById('tgt_Value'+currrow).value
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													tgtntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												document.getElementById("Annotation"+currrow).value = annotation;
												document.getElementById("Annotation"+currrow).title = annotation;
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
									document.getElementById("Annotation"+currrow).title = annotation;
								 }
								};			
							oReq2.send(); 							
						
					}else{
						srcntwrk = document.getElementById('sntk_Value'+currrow).value;
				//get the target network here
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}	
									// Check for the Roaming scenario where we need to pick the called number country code over the currently selected country in GUI as Target_Country
									if( responseJson3[j].tat_target_country == 'Roamed Country' && responseJson3[j].target_country == 'Called Number COUNTRY_CODE' ){
										
										   tgtcntry = document.getElementById('tgtstate_Value'+currrow).value ;									
									}									
									if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
										if(document.getElementById('tgt_Value'+currrow).value == 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('tgt_Value'+currrow).value == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('tgt_Value'+currrow).value;
										}
									}else{
										if(document.getElementById('tgt_Conxt'+currrow).value == "VF_Vone"){
											var headder1 = document.getElementById('tgt_Value'+currrow).value
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													tgtntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												document.getElementById("Annotation"+currrow).value = annotation;
												document.getElementById("Annotation"+currrow).title = annotation;												
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
									document.getElementById("Annotation"+currrow).title = annotation;
								 }
								};			
							oReq2.send(); 							
					}
				}else{
					if(document.getElementById('sntk_Conxt'+currrow).value == "VF_Vone"){
						var headder = document.getElementById('sntk_Value'+currrow).value;
						var oReq7 = new XMLHttpRequest();
						var soujson =  '[{"header":"'+headder+'","network":"'+srcntwrkval+'","country":"'+srccntryval+'"}]';
						if(document.getElementById('momt'+currrow).value === 'MT')
						{
							var soujson =  '[{"header":"'+headder+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
						}	
						console.log(soujson);
						oReq7.open("GET", '/getvgenetwork_code?retval='+soujson);
						oReq7.onreadystatechange = function () {
						if(oReq7.readyState === XMLHttpRequest.DONE && oReq7.status === 200) {
							var reponsetxt7 = oReq7.responseText;
							
							if(reponsetxt7.indexOf('Not_Found')!= 0)
							{
								console.log('src response:- '+reponsetxt7)
								var responseJson7 = JSON.parse(reponsetxt7);
								var json_var = responseJson7[0];
								srcntwrk = json_var[headder];														
							}else{
							    srcntwrk = '';	
							}
							console.log('vf_vone_srcntk:-'+srcntwrk);
							//get the target network here
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}	
									// Check for the Roaming scenario where we need to pick the called number country code over the currently selected country in GUI as Target_Country
									if( responseJson3[j].tat_target_country == 'Roamed Country' && responseJson3[j].target_country == 'Called Number COUNTRY_CODE' ){
										
										   tgtcntry = document.getElementById('tgtstate_Value'+currrow).value ;									
									}									
									if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
										if(document.getElementById('tgt_Value'+currrow).value == 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('tgt_Value'+currrow).value == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('tgt_Value'+currrow).value;
										}
									}else{
										if(document.getElementById('tgt_Conxt'+currrow).value == "VF_Vone"){
											var headder1 = document.getElementById('tgt_Value'+currrow).value
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													tgtntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												document.getElementById("Annotation"+currrow).value = annotation;
												document.getElementById("Annotation"+currrow).title = annotation;
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
									document.getElementById("Annotation"+currrow).title = annotation;
								 }
								};			
							oReq2.send(); 								
							
						
						}

						};
						oReq7.send();
					}else{
						srcntwrk = responseJson[0].plmn_code;
				//get the target network here
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}	
									// Check for the Roaming scenario where we need to pick the called number country code over the currently selected country in GUI as Target_Country
									if( responseJson3[j].tat_target_country == 'Roamed Country' && responseJson3[j].target_country == 'Called Number COUNTRY_CODE' ){
										
										   tgtcntry = document.getElementById('tgtstate_Value'+currrow).value ;									
									}									
									if(document.getElementById('tgt_Conxt'+currrow).value == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('tgt_Conxt'+currrow).value == "default"){
										if(document.getElementById('tgt_Value'+currrow).value == 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('tgt_Value'+currrow).value == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('tgt_Value'+currrow).value ;
										}
									}else{
										if(document.getElementById('tgt_Conxt'+currrow).value == "VF_Vone"){
											var headder1 = document.getElementById('tgt_Value'+currrow).value
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													tgtntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												document.getElementById("Annotation"+currrow).value = annotation;
												document.getElementById("Annotation"+currrow).title = annotation;
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										if(responseJson3[j].target_country=='NULL' || responseJson3[j].target_country=='')
												{
													tgtcntry =''
												}
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
									document.getElementById("Annotation"+currrow).title = annotation;
								 }
								};			
							oReq2.send(); 							

					}    
				}
				
						//if(document.getElementById('servicetype'+currrow).value!='DATA')
						//{
						
						//change
						/*--
								var oReq2 = new XMLHttpRequest();
								oReq2.open("GET", '/getcountrycode?retval='+tgtjson);
								oReq2.onreadystatechange = function () {
								if(oReq2.readyState === XMLHttpRequest.DONE && oReq2.status === 200) {

									reponsetxt1 = oReq2.responseText
									responseJson1 = JSON.parse(reponsetxt1);
									
									if(document.getElementById('servicetype'+currrow).value!='DATA') //***************
									{
									 tgtcntry = responseJson1[0].country_code
									}else
									{
									  tgtcntry = '' 
									}									
									if(document.getElementById('targetnetwork'+currrow).conxt == "NULL"){
										tgtntwrk = "";
									}else if(document.getElementById('targetnetwork'+currrow).conxt == "default"){
										if(document.getElementById('targetnetwork'+currrow).title == 'MNC'){
											tgtntwrk = responseJson1[0].mnc;
										}else if(document.getElementById('targetnetwork'+currrow).title == 'MCCMNC'){
											tgtntwrk = responseJson1[0].mcc_mnc;
										}else{
											tgtntwrk = document.getElementById('targetnetwork'+currrow).title;
										}
									}else{
										if(document.getElementById('targetnetwork'+currrow).conxt == "VF_Vone"){
											var headder1 = document.getElementById('targetnetwork'+currrow).title
											var oReq6 = new XMLHttpRequest();
											var trgjson;
											if(document.getElementById('servicetype'+currrow).value!='DATA') //**********************
											{
											 trgjson =  '[{"header":"'+headder1+'","network":"'+tgtntwrkval+'","country":"'+tgtcntryval+'"}]';
											}else
											{
											  trgjson =  '[{"header":"VF_UK_ROAMING_CODE","network":"Vodafone","country":"UK"}]';
											}
											oReq6.open("GET", '/getvgenetwork_code?retval='+trgjson);
											oReq6.onreadystatechange = function () {
											if(oReq6.readyState === XMLHttpRequest.DONE && oReq6.status === 200) {								
												var reponsetxt6 = oReq6.responseText;							
												if(reponsetxt6.indexOf('Not_Found')!= 0)
												{
													console.log('tgt response:- '+reponsetxt6)
													var responseJson6 = JSON.parse(reponsetxt6);
													var json_var = responseJson6[0];
													tgtntwrk = json_var[headder1];														
												}else{
													srcntwrk = '';	
												}
												console.log(tgtntwrk);
												
												//redundant for picking target network
												if(source == "CSA")
												{
													if(document.getElementById('servicetype'+currrow).value=='DATA')
													{
														tgtcntry=''
														tgtntwrk=''
													}
													var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
												}
												else
												{	
													var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
												}
												document.getElementById("Annotation"+currrow).value = annotation;													
												return;	
											}
											};
											oReq6.send();
										}else{
											tgtntwrk = responseJson1[0].plmn_code;
										}
									}
							
									if(source == "CSA")
									{
										if(document.getElementById('servicetype'+currrow).value=='DATA')
										{
											tgtcntry=''
											tgtntwrk=''
										}
										var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
									}
									else
									{	
										var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
									}
									document.getElementById("Annotation"+currrow).value = annotation;
								 }
								};			
							oReq2.send(); 
							
						--*/	
						//change
						
						/*}else{
							tgtcntry=''
							tgtntwrk=''
							if(source == "CSA")
							{
								var annotation = source+"|"+orgi_typ_id_usg+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+vgecode+"|"+Indeterminate_Flag+"|";
							}
							else
							{	
								var annotation = source+"|"+vgecode+"|"+tadig+"|"+mccmnc+"|"+srccnty+"|"+srcntwrk+"|"+tgtcntry+"|"+tgtntwrk+"|"+roamtyp+"|"+momt+"|"+servicetype+"|"+amt+"|"+orgi_typ_id_usg+"|"+Indeterminate_Flag+"|"+bnumbflag;
							}
							document.getElementById("Annotation"+currrow).value = annotation;
						}*/
			}
			};
			oReq1.send();
			
		}
		};
		oReq3.send();
	}
	};
	oReq4.send();
	modal.style.display = "none";
}


function BPF_Upload_in_VEBP(filename)
{	
   if(document.getElementById('Bpffile_Name').value == '')	
   {
	   alertify.alert('Couldn`t find the BPF file try generating a new one to Upload in VEBP.!!!')
   }else if(document.getElementById('OPCOsel').value == 'Please Select'){
	 
	  alertify.alert('Please, select the OPCO .!!')
   }else if(document.getElementById('test_env_vebp').value == ''){
	
	 alertify.alert('Please, select the Test Environment .!!')
   }
   else{
	   
	    var BPF_file_type = document.getElementById('FileTyp_s').value
	    var BPF_filename = document.getElementById('Bpffile_Name').value
	    var BPF_OPCO = document.getElementById('OPCOsel').value
	    var BPF_test_env = document.getElementById('test_env_vebp').value
		var Qwry_string = '[{"BPF_file_type":"'+BPF_file_type+'","BPF_filename":"'+BPF_filename+'","BPF_OPCO":"'+BPF_OPCO+'","BPF_test_env":"'+BPF_test_env+'"}]' 		//Mac_file_type+"$"+Mac_filename+"$"+Mac_OPCO+"$"+Mac_test_env
		//alertify.alert("BPF Upload is in Progress for "+Qwry_string+"..!!")
		var oReq = new XMLHttpRequest();
		oReq.open("GET",'/VEBP_BPF_Upload?retval='+Qwry_string);
		oReq.onreadystatechange = function () 
		{
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
					var bpf_upload_status = reponsetxt.split('$');
					var fstatus = bpf_upload_status[0];
					var fremarks = bpf_upload_status[1];
					var myWindow = window.open("", "MsgWindow", "toolbar=yes,scrollbars=yes,resizable=yes,top=480,left=500,width=400,height=200");
					//myWindow.document.write("<html> <title>VEBP Upload Results</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/3/w3.css\"> <body style='width:90%'>  <div class=\"w3-container\">   <h2>VGE Test Automation</h2>   <p>Please find the below VEBP upload details:</p>    <table class=\"w3-table-all\">     <thead>       <tr class=\"w3-light-grey\">         <th>File Type</th>         <th>File Name</th>  <th>OPCO</th>  <th>Test Environment</th>       <th>Status</th>         <th>Remarks</th>       </tr>     </thead>     <tr>       <td>MAC</td>       <td>Hello</td>   <td>UK</td> <td>SIT</td>    <td>Complete</td>       <td>Success</td>     </tr>   </table> </div>  </body> </html>");
					myWindow.document.write("<html> <title>VEBP Upload Results</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/3/w3.css\"> <body style='width:100%'>  <div class=\"w3-container\">   <h2>VGE Test Automation</h2>   <p>Please find the below VEBP upload details:</p>    <table class=\"w3-table-all\">     <thead>       <tr class=\"w3-light-grey\">         <th>File Type</th>         <th>File Name</th>  <th>OPCO</th>  <th>Test Environment</th>       <th>Status</th>         <th>Remarks</th>       </tr>     </thead>     <tr>       <td>BPF</td>       <td>"+BPF_filename +"</td>   <td>"+ BPF_OPCO +"</td> <td>"+BPF_test_env+"</td>    <td>"+fstatus+"</td>       <td>"+fremarks+"</td>     </tr>   </table> </div>  </body> </html>");
			}
		};
		oReq.send();	   
   }    	
}
function MAC_Upload_in_VEBP(filename)
{	
   if(document.getElementById('Mac_file_name').value == '')
   {
	   alertify.alert('Couldn`t find the MAC file try generating a new one to Upload in VEBP.!!!')
   }else if(document.getElementById('OPCOsel_Mac').value == 'Please select'){
	 
	  alertify.alert('Please, select the OPCO .!!')
   }else if(document.getElementById('test_env_vebp').value == ''){
	
	 alertify.alert('Please, select the Test Environment .!!')
   }	   
   else{
	   
	    var Mac_file_type = document.getElementById('FileTyp_s').value
	    var Mac_filename = document.getElementById('Mac_file_name').value
	    var Mac_OPCO = document.getElementById('OPCOsel_Mac').value
	    var Mac_test_env = document.getElementById('test_env_vebp').value
		var Qwry_string = '[{"Mac_file_type":"'+Mac_file_type+'","Mac_filename":"'+Mac_filename+'","Mac_OPCO":"'+Mac_OPCO+'","Mac_test_env":"'+Mac_test_env+'"}]' 		//Mac_file_type+"$"+Mac_filename+"$"+Mac_OPCO+"$"+Mac_test_env
		
		//alertify.alert("MAC Upload is in Progress for "+Qwry_string+"..!!")
		var oReq = new XMLHttpRequest();
		oReq.open("GET",'/VEBP_MAC_Upload?retval='+Qwry_string);
		oReq.onreadystatechange = function () 
		{
			if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) 
			{
				reponsetxt = oReq.responseText;
				console.log(reponsetxt);
					var Mac_upload_status = reponsetxt.split('$');
					var fstatus = Mac_upload_status[0];
					var fremarks = Mac_upload_status[1];
					var myWindow = window.open("", "MsgWindow", "toolbar=yes,scrollbars=yes,resizable=yes,top=480,left=500,width=400,height=200");
					//myWindow.document.write("<html> <title>VEBP Upload Results</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/3/w3.css\"> <body style='width:90%'>  <div class=\"w3-container\">   <h2>VGE Test Automation</h2>   <p>Please find the below VEBP upload details:</p>    <table class=\"w3-table-all\">     <thead>       <tr class=\"w3-light-grey\">         <th>File Type</th>         <th>File Name</th>  <th>OPCO</th>  <th>Test Environment</th>       <th>Status</th>         <th>Remarks</th>       </tr>     </thead>     <tr>       <td>MAC</td>       <td>Hello</td>   <td>UK</td> <td>SIT</td>    <td>Complete</td>       <td>Success</td>     </tr>   </table> </div>  </body> </html>");
					myWindow.document.write("<html> <title>VEBP Upload Results</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/3/w3.css\"> <body style='width:100%'>  <div class=\"w3-container\">   <h2>VGE Test Automation</h2>   <p>Please find the below VEBP upload details:</p>    <table class=\"w3-table-all\">     <thead>       <tr class=\"w3-light-grey\">         <th>File Type</th>         <th>File Name</th>  <th>OPCO</th>  <th>Test Environment</th>       <th>Status</th>         <th>Remarks</th>       </tr>     </thead>     <tr>       <td>MAC</td>       <td>"+Mac_filename +"</td>   <td>"+ Mac_OPCO +"</td> <td>"+Mac_test_env+"</td>    <td>"+fstatus+"</td>       <td>"+fremarks+"</td>     </tr>   </table> </div>  </body> </html>");
					//alertify.alert("`MAC Upload Status`~~  "+Mac_upload_status);
				//alert('End to End code Integration for Mac is done, Field validations and logical validations are in progress stay tuned :) .!!!');		
			}
		};
		oReq.send(); 
		
   }    	
}



// Kenan Account creation functions ******************************