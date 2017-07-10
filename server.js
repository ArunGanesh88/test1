var express = require('express');
var https = require('https');
var morgan = require('morgan');
var path = require('path');
var exapp = require('xlsx');
node_xj = require("xls-to-json");
node_xlsxj = require("xlsx-to-json");
var zpad = require('zpad');
var multer  =   require('multer');
var mysql = require('mysql');
var MySQLPool = require("mysql-pool").MySQLPool;
var session = require('express-session');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var app = express();
var changeCase = require('change-case');
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());
var excel = require("exceljs");
//var spawnSync = require('spawn-sync');
var fs = require("fs");
app.use(bodyParser.json());
var changeCase = require('change-case');
 //var AdmZip = require('adm-zip');
 var archiver = require('archiver');
//var Pool = require('pg').Pool
var waitUntil = require('wait-until');
const fs_extra = require('fs-extra')
read = require('fs').readFileSync
// var webdriver = require('selenium-webdriver');
 httpsOptions = {
        key: read('ssl/vgebillingtat.key', 'utf8'),
        cert: read('ssl/vgebillingtat_vodafone_com.crt', 'utf8'),
		passphrase:'vgetat',
        ca: [
            read('ssl/TrustedRoot.crt', 'utf8'),
            read('ssl/DigiCertCA.crt', 'utf8')
        ]
    };
var config = {
  user: 'postgres',
  database: 'VGE_CDRGeneration',  
  password: 'Mav@2016',
  host: '127.0.0.1', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 100000, // max number of clients in the pool 
  idleTimeoutMillis: 500, // how long a client is allowed to remain idle before being closed 
};
var pool  = mysql.createPool({
  connectionLimit : 100000,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  idleTimeoutMillis: 500,
  database        : 'VGE_CDRGeneration'
});
var sess;
app.post('/login',function(req,res){
  sess = req.session;
  var retval = req.query.retval;
  var jsonobj = JSON.parse(retval); 
  var password = jsonobj[0].password;
  var email = jsonobj[0].username;
	//var pool = new Pool(config);
  var dbusername;
  var dbpass;
  var dbrights;
  //console.log(email);
	pool.query("select A.*,B.username as usr1,B.password as pass1,B.rights as rts1,B.Name as nme1  from user_details B join user_details_backend A on B.username = A.username where A.username='"+email+"'",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
	  res.send('not cool');
    }
	else
	{
		if(result.length >= 1)
		{
				//console.log(result);
				dbusername = email;
				dbpass = result[0].password;
				dbrights = result[0].rights;
				if(dbusername == email && dbpass == password)
				{
					sess.email=jsonobj[0].username+"|"+result[0].rights+"|"+result[0].Name;
					res.send('done');
				}
				else
				{			
					res.send('not cool');
					
				}
		}
		else
		{
			res.send('not cool');
		
		}
	}
    //output: 1 
  });
  //sess.email="arunganesha@maveric-systems.com|admin|Admin";
  
});

app.use(morgan('combined'));
app.get('/startvbs', function (req, res) {
	const exec = require("child_process").exec
	exec('VodafoneTestAutomation.vbs').unref()
});
app.get('/', function (req, res) {
	sess = req.session;
	if(sess.email) {
		res.sendFile(path.join(__dirname, 'ui', 'Index.html'));
	}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}
});

app.get('/Login.html', function (req, res) {
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
});

app.get('/admin.html', function (req, res) {
sess = req.session;
  if(sess.email) {
		if(sess.email.indexOf('admin')>=0)
		{
			res.sendFile(path.join(__dirname, 'ui', 'admin.html'));
		}
		else
		{
			res.sendFile(path.join(__dirname, 'ui', 'Index.html'));
		}	
	}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}	
});

app.get('/UsageAdmin.html', function (req, res) {
sess = req.session;
  if(sess.email) {
		if(sess.email.indexOf('admin')>=0)
		{
			res.sendFile(path.join(__dirname, 'ui', 'UsageAdmin.html'));
		}
		else
		{
			res.sendFile(path.join(__dirname, 'ui', 'Index.html'));
		}
		}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}	
});

app.get('/ProvisioningAdmin.html', function (req, res) {
sess = req.session;
  if(sess.email) {
		if(sess.email.indexOf('admin')>=0)
		{
			res.sendFile(path.join(__dirname, 'ui', 'ProvisioningAdmin.html'));
		}
		else
		{
			res.sendFile(path.join(__dirname, 'ui', 'Index.html'));
		}
		}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}	
});

app.get('/ProvisioningReferencedata.html', function (req, res) {
sess = req.session;
  if(sess.email) {
			res.sendFile(path.join(__dirname, 'ui', 'ProvisioningReferencedata.html'));
  }	
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}	
});

app.get('/UsageReferenceData.html', function (req, res) {
sess = req.session;
  if(sess.email) {
			res.sendFile(path.join(__dirname, 'ui', 'UsageReferenceData.html'));
  }	
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}	
});


app.get('/CUSTOMERONBOARDING.html', function (req, res) {
  sess = req.session;
  if(sess.email) {	
	res.sendFile(path.join(__dirname, 'ui', 'CUSTOMERONBOARDING.html'));
}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}
});


app.post('/gettemplates',function (req, res) {
	////var pool = new Pool(config);
	pool.query('select distinct TemplateName from CDR_Templates', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
});

app.post('/gettemplates_mac',function (req, res) {
	////var pool = new Pool(config);
	pool.query('select distinct template_name from mac_temp_t order by template_name ASC', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
});

app.post('/updateuserDB',function (req, res) {
	////var pool = new Pool(config);
	var resjsob;
	pool.query('select A.*,B.username as usr1,B.password as pass1,B.rights as rts1,B.Name as nme1  from user_details A left join user_details_backend B on A.username = B.username', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{	
		res.send(JSON.stringify(result));
	}
});
});

app.post('/updateuserDBag',function (req, res) {
	var returnedval = req.query.retval;
	var spltval = returnedval.split('|');
	var typup = spltval[0];
	console.log(spltval[1]);
	var jsonval = JSON.parse(spltval[1]);
	if(typup === 'insert')
	{
		pool.query("insert into user_details_backend (username,rights,Name,password) values ('"+jsonval.username+"','"+jsonval.rights+"','"+jsonval.Name+"','"+jsonval.password+"')", function(err,result2,fields) {
			if(err)
				{
					 return console.error('error running query', err);
				}	
			pool.query("UPDATE user_details set password = '' WHERE username='"+jsonval.username+"'", function(err,result4,fields) {
				if(err)
				{
					 return console.error('error running query', err);
				}
				console.log('hh')
				res.send('done');			
			});
		});		
		
	}
	else if(typup === 'update')
	{
		pool.query("UPDATE user_details_backend set password = '"+jsonval.password+"' WHERE username='"+jsonval.username+"'", function(err,result3,fields) {
			pool.query("UPDATE user_details set password = '' WHERE username='"+jsonval.username+"'", function(err,result4,fields) {
						res.send('done');	
			});
		});		
	}
	else if(typup === 'delete')
	{
		pool.query("DELETE FROM user_details_backend WHERE username='"+jsonval.usr1+"'", function(err,result3,fields) {
			
						res.send('done');	
			
		});		
	}
	
});

app.post('/deltemplates',function (req, res) {
	
	////var pool = new Pool(config);
	pool.query('delete from CDR_Templates where TemplateName =\''+req.query.retval+'\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		fs.unlink('./CDRTemplate/'+req.query.retval);	
		res.send('success');
	}
    //output: 1 
  });
  
});

app.post('/deltemplates_mac',function (req, res) {
	
	////var pool = new Pool(config);
	pool.query('delete from mac_temp_t where template_name =\''+req.query.retval+'\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		fs.unlink('./MACTemplate/'+req.query.retval);	
		res.send('success');
	}
    //output: 1 
  });
  
});


app.get('/dwntemplates', function (req, res,next) {
	
  res.download(path.join(__dirname, 'CDRTemplate', req.query.retval));
});

app.get('/dwnusermanual', function (req, res,next) {
	
  res.download(path.join(__dirname, 'UserManual', req.query.retval+'.docx'));
});

app.get('/dwntemplates_mac', function (req, res,next) {
	
  res.download(path.join(__dirname, 'MACTemplate', req.query.retval));
});

app.post('/uploadcdrtemplate', function(req, res) {
  
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  var sampleFile = req.files.usercdrtemplate;
 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('./CDRTemplate/'+req.files.usercdrtemplate.name, function(err) {
    if (err)
	{
      return res.status(500).send(err);
	 }
	else
	{
		////var pool = new Pool(config);
		pool.query("insert into CDR_Templates (TemplateName) values ('"+req.files.usercdrtemplate.name+"')", function(err,result,fields) {
		if(err) {
			return console.error('error running query', err);
		}
		else
		{
			
			res.sendFile(path.join(__dirname,'ui', 'BulkUploadCDR.html'));
		}
		});	
		
	}
  });
});

app.post('/uploadmactemplate', function(req, res) {
  
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  var sampleFile = req.files.usermactemplate;
 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('./MACTemplate/'+req.files.usermactemplate.name, function(err) {
    if (err)
	{
      return res.status(500).send(err);
	 }
	else
	{
		////var pool = new Pool(config);
		pool.query("insert into mac_temp_t (template_name) values ('"+req.files.usermactemplate.name+"')", function(err,result,fields) {
		if(err) {
			return console.error('error running query', err);
		}
		else
		{
			
			res.sendFile(path.join(__dirname,'ui', 'BulkUploadProvisioning.html'));
		}
		});	
		
	}
  });
});


// Bulk Upload Mac 

// Ireland

app.post('/uploadmac_IE',function(req,res){
		//console.log(req.query.retval);
		var opco = req.query.retval;
		var sampleFile = req.files.usermac;  //usercdr
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
		var curropcocode;
		jmin = jmin.substring(jmin.length-2,jmin.length)
		var jsec = jdat.getSeconds();
		jsec = '0'+jsec;
		jsec = jsec.substring(jsec.length-2,jsec.length);
		console.log('User_MAC_'+opco+'_'+jyr+jmonth+jdate+jhr+jmin+jsec)
		console.log('./BulkMACGeneration/User_MAC_'+opco+'_'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx')
		sampleFile.mv('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx', function(err) {
		//sampleFile.mv('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls', function(err) {
		if (err)
		{
			console.log('error moving the uploaded mac to folder')
			return res.status(500).send(err);
		}
		else
		{



			var rrow = 0;
			var filenamejson ='UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec;
			var currfilepath = './BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'
			/*node_xj({
				input: currfilepath,  // input xls 
				output: "./TempJson/"+filenamejson[0]+"json", // output json 
				sheet: "MacSpecification"  // specific sheetname 
				}, function(err,result,fields) {*/
			
			node_xlsxj({
				input: currfilepath,  // input xls 
				output: "./TempJson/"+filenamejson[0]+"json", // output json 
				sheet: "MACSpecification"  // specific sheetname 
				}, function(err,result,fields) {
				
				
				if(err) {
					console.error(err);
				} else {
						var jsonobj = result;
						var totlen = jsonobj.length;
						var insertstr = '';
						totlen1 = jsonobj.length;
						var continue_flag ;
						var row_ref;
						continue_flag= 'yes'
						var header_flaw;
						header_flaw = 'no'
						for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
						{
						
						
							//Column Header validations
							if( (jsonobj[currcallrec].hasOwnProperty('Use_Case'))  && (jsonobj[currcallrec].hasOwnProperty('Opco_Ban'))  && (jsonobj[currcallrec].hasOwnProperty('MSISDN'))  && (jsonobj[currcallrec].hasOwnProperty('Date') )  && (jsonobj[currcallrec].hasOwnProperty('Tarrif'))   && (jsonobj[currcallrec].hasOwnProperty('No_Of_Services'))  ){
								console.log('All is well')					
							}else{
								// Error Handling								
								continue_flag = 'no'
								header_flaw ='yes'
								row_ref = currcallrec;
								break;														
							}
						
							//Mandatory validations 
							if(jsonobj[currcallrec].Use_Case == '' || jsonobj[currcallrec].Opco_Ban == '' || jsonobj[currcallrec].MSISDN == '' || jsonobj[currcallrec].Date == '' || jsonobj[currcallrec].Tarrif == '' || jsonobj[currcallrec].No_Of_Services == '' )
							{
								//res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls'));
								
								// Error Handling								
								continue_flag = 'no'
								row_ref = currcallrec;
								break;	
							}
							//Mandatory validations 
							
							if(jsonobj[currcallrec].Use_Case != '')
							{
							if(insertstr === '')
							{
								insertstr = "('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_Ban+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Date+"','"+jsonobj[currcallrec].Tarrif+"','"+jsonobj[currcallrec].No_Of_Services+"')";
							}
							else
							{
								insertstr = insertstr+",('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_Ban+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Date+"','"+jsonobj[currcallrec].Tarrif+"','"+jsonobj[currcallrec].No_Of_Services+"')";
							}
							}		
						
						}
						
						if(continue_flag=='yes')
						{
										////var pool = new Pool(config);
										
										pool.query("INSERT INTO mac_bulkupload_ie  (filename,opco,type_of_mod_IE,BAN_IE,MSISDN_IE,Mod_date_IE,PP_NAME_IE,No_of_Rec_IE ) VALUES "+insertstr , function(err,result,fields) {
										if(err) {
											return console.error('error running query insert', err);
										}
										else
										{	
										}
										});	
										
										// core logic for IE_MAC
										
										
										setTimeout(function() {
									
											////var pool = new Pool(config);
											pool.query('select mac_bulkupload_ie.filename, mac_bulkupload_ie.opco,mac_bulkupload_ie.type_of_mod_IE,mac_bulkupload_ie.BAN_IE,mac_bulkupload_ie.msisdn_ie,mac_bulkupload_ie.Mod_date_IE,mac_bulkupload_ie.PP_NAME_IE,mac_bulkupload_ie.No_of_Rec_IE, ie_price_plan_t.package_plan_code,ie_price_plan_t.bundle_soc_code,ie_price_plan_t.bundle_soc_description from mac_bulkupload_ie LEFT JOIN ie_price_plan_t ON mac_bulkupload_ie.PP_NAME_IE = ie_price_plan_t.vge_direct_dynamic_tarrif where mac_bulkupload_ie.filename = \''+filenamejson+'\'', function(err,result,fields) {
											if(err) {
													return console.error('error running query', err);
												}
												else
												{
												
													
													console.log('select mac_bulkupload_ie.filename, mac_bulkupload_ie.opco,mac_bulkupload_ie.type_of_mod_IE,mac_bulkupload_ie.BAN_IE,mac_bulkupload_ie.MSISDN_IE,mac_bulkupload_ie.Mod_date_IE,mac_bulkupload_ie.PP_NAME_IE,mac_bulkupload_ie.No_of_Rec_IE, ie_price_plan_t.package_plan_code,ie_price_plan_t.bundle_soc_code,ie_price_plan_t.bundle_soc_description from mac_bulkupload_ie LEFT JOIN ie_price_plan_t ON mac_bulkupload_ie.PP_NAME_IE = ie_price_plan_t.vge_direct_dynamic_tarrif where mac_bulkupload_ie.filename = \''+filenamejson+'\';')
													
													//console.log('DB records found:- '+ result)
													console.log('DB records found:- '+ result.length)
													
													// Ireland start
													  console.log('Hi sudheer .!!');	
													  
													  //var returnedval = req.query.retval;
													  //var jsonobj = JSON.parse(returnedval);
													  var jdat1 =  new Date();
													  var jyr1 = jdat1.getFullYear();
													  var jmonth1 = jdat1.getMonth()+1;
													  jmonth1 = '0'+jmonth1;
													  jmonth1 = jmonth1.substring(jmonth1.length-2,jmonth1.length)
													  var jdate1 = jdat1.getDate();
													  jdate1 = '0'+jdate1;
													  jdate1 = jdate1.substring(jdate1.length-2,jdate1.length)
													  var jhr1 = jdat1.getHours();
													  jhr1 = '0'+jhr1;
													  jhr1 = jhr1.substring(jhr1.length-2,jhr1.length)
													  var jmin1 = jdat1.getMinutes();
													  jmin1 = '0'+jmin1;
													  jmin1 = jmin1.substring(jmin1.length-2,jmin1.length)
													  var jsec1 = jdat1.getSeconds();
													  jsec1 = '0'+jsec1;
													  jsec1 = jsec1.substring(jsec1.length-2,jsec1.length)
													 

													  var Month_flag='';
													  if(jmonth1=='01'){Month_flag='JAN'}else if (jmonth1=='02'){Month_flag='FEB'} else if (jmonth1=='03'){Month_flag='MAR'} else if (jmonth1=='04'){Month_flag='APR'} else if (jmonth1=='05'){Month_flag='MAY'} else if (jmonth1=='06'){Month_flag='JUN'} else if (jmonth1=='07'){Month_flag='JUL'} else if (jmonth1=='08'){Month_flag='AUG'} else if (jmonth1=='09'){Month_flag='SEP'} else if (jmonth1=='10'){Month_flag='OCT'} else if (jmonth1=='11'){Month_flag='NOV'} else if (jmonth1=='12'){Month_flag='DEC'} 
													  console.log('Curr_month flag:- '+Month_flag);
													  
													  var zipfinename = 'IE_MAC_'+Month_flag+'_'+jyr1+jmonth1+jdate1+jhr1+jmin1+jsec1;
													  fs.mkdirSync(__dirname+'\\macTestData\\'+zipfinename);
													  console.log(jyr1+jmonth1+jdate1+jhr1+jmin1+jsec1);
													  console.log('Month Flag is:-'+ jmonth1)
													  
													  //fs.createReadStream('macTestData/R.001233.S.VGE MAC Package Report.xlsx').pipe(fs.createWriteStream('macTestData/'+zipfinename+'/R.001233.S.VGE MAC Package Report.xlsx'));
													  //fs.createReadStream('macTestData/COR1139.S.Bundle Codes VGE Version.xlsx').pipe(fs.createWriteStream('macTestData/'+zipfinename+'/COR1139.S.Bundle Codes VGE Version.xlsx'));
													  fs.createReadStream('macTestData/R.001246.S.Connect Disconnect VGE.xlsx').pipe(fs.createWriteStream('macTestData/'+zipfinename+'/R.001246.S.Connect Disconnect VGE.xlsx'));
													  var workbook =  new excel.Workbook();


													  //MAC package report variables
													  
													  
														var Mod_Type;
														var No_of_Mac_records;
														var Execution_flag;
														Execution_flag = 'yes';
														
														var Fiscal_Period ;
														var Mac_pkg_Date;
														var Subscriber_Number;
														var Value_Segment_Group;
														var Top_Level_Parent;	
														var Top_Level_Parent_Name;	
														var Customer_Number;
														var Package_Code;
														var Package_Code_Other
														var Connections;
														var Total_Disconnections;
														var Package_Migrations_From;
														var Package_Migrations_To;
														var Net_Growth;
														
														var Customer_Top_Level_Parent1;
														var Customer_Top_Level_Parent2;
														var Customer_Group_Code;
														var Customer_Name;	
														var Subscriber_Number1;	
														var Subscriber_Number2;
														var Non_Core_Bundle_Code;
														var Non_Core_Bundle_Desc;
														var Bundle_Start_Date;
														var Eff_End_Date;
														var Metrics;
														var Subscribers;
													 
													  workbook.xlsx.readFile('macTestData/R.001233.S.VGE MAC Package Report.xlsx')
														.then(function() { 
														if(Execution_flag == 'yes')
														{	var r =4;
															console.log('DB records found:- '+ result.length)
															for(var currcallrec = 0;currcallrec<result.length;currcallrec++)
																{
																	Mod_Type = result[currcallrec].type_of_mod_ie; 
																	No_of_Mac_records=result[currcallrec].no_of_rec_ie	;
																	mac_rec =0;
																	mac_rec = parseInt(No_of_Mac_records,10);
																	
																	Fiscal_Period= jyr1+jmonth1;
																	console.log('modified date:-'+result[currcallrec].mod_date_ie)
																	Mac_pkg_Date= (result[currcallrec].mod_date_ie)//.replace(/\-/g,'/');
																	Subscriber_Number=result[currcallrec].msisdn_ie;
																	if((Subscriber_Number.substring(0,1))== '0')
																	{
																	   Subscriber_Number = (Subscriber_Number.substring(1,Subscriber_Number.length))
																	}
																	
																	Value_Segment_Group='Corporate';
																	Top_Level_Parent='';	
																	Top_Level_Parent_Name='';
																	Customer_Number=result[currcallrec].ban_ie;
																	console.log('c.no:'+ Customer_Number)
																	Package_Code= result[currcallrec].package_plan_code;
																	Package_Code_Other='';
																	if(Mod_Type=='Add'){
																		Connections='1';
																		Total_Disconnections='0';
																		Net_Growth='1';
																	}else if(Mod_Type=='Terminate'){
																		Connections='0';
																		Total_Disconnections='(1)';					
																		Net_Growth='(1)';
																	}
																	Package_Migrations_From='0';
																	Package_Migrations_To='0';
																	
																	
																	console.log('Mac_records_output'+mac_rec);
																	
																	 // Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI 
																	 if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
																	{
																		
																		var worksheet = workbook.getWorksheet(1);
																		var row = worksheet.getRow(r);
																		row.getCell(1).value = Fiscal_Period;
																		row.getCell(2).value =  Mac_pkg_Date;
																		row.getCell(3).value = '0'+Subscriber_Number;
																		row.getCell(4).value = Value_Segment_Group;
																		row.getCell(5).value = Top_Level_Parent;
																		row.getCell(6).value = Top_Level_Parent_Name;
																		row.getCell(7).value = Customer_Number;
																		row.getCell(8).value = Package_Code;
																		row.getCell(9).value = Package_Code_Other;
																		row.getCell(10).value = Connections;
																		row.getCell(11).value = Total_Disconnections;
																		row.getCell(12).value = Package_Migrations_From;
																		row.getCell(13).value = Package_Migrations_To;
																		row.getCell(14).value = Net_Growth;
																		row.commit();
																		r=r+1;
																	}
																	
																	 if( mac_rec>1 && mac_rec<5000 )
																	{
																		for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
																		{
																			var worksheet = workbook.getWorksheet(1);
																			var row = worksheet.getRow(r);				
																			row.getCell(1).value = Fiscal_Period;
																			row.getCell(2).value =  Mac_pkg_Date;
																			row.getCell(3).value = '0'+(parseInt(Subscriber_Number)+Rec_ini);
																			row.getCell(4).value = Value_Segment_Group;
																			row.getCell(5).value = Top_Level_Parent;
																			row.getCell(6).value = Top_Level_Parent_Name;
																			row.getCell(7).value = Customer_Number;
																			row.getCell(8).value = Package_Code;
																			row.getCell(9).value = Package_Code_Other;
																			row.getCell(10).value = Connections;
																			row.getCell(11).value = Total_Disconnections;
																			row.getCell(12).value = Package_Migrations_From;
																			row.getCell(13).value = Package_Migrations_To;
																			row.getCell(14).value = Net_Growth;
																			row.commit();
																			r=r+1;
																		}
																	}					
																			
																	// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI
																}
																workbook.xlsx.writeFile('macTestData/'+zipfinename+'/R.001233.S.VGE MAC Package Report.xlsx');
																workbook.save;
																workbook.close;
														}
														if((Execution_flag == 'yes'))
															
															{

																	workbook.xlsx.readFile('macTestData/COR1139.S.Bundle Codes VGE Version.xlsx')
																	.then(function() { 
																		var r =6;
																		for(var currcallrec = 0;currcallrec<result.length;currcallrec++)
																		{
																			Mod_Type = result[currcallrec].type_of_mod_ie; 
																			No_of_Mac_records=result[currcallrec].no_of_rec_ie;
																			mac_rec =0;
																			mac_rec = parseInt(No_of_Mac_records,10);
																			
																			Customer_Top_Level_Parent1 ='';
																			Customer_Top_Level_Parent2 ='';
																			Customer_Group_Code='';
																			Customer_Number=result[currcallrec].ban_ie;
																			console.log('c.no:'+ Customer_Number)
																			Customer_Name='';
																			Subscriber_Number1=result[currcallrec].msisdn_ie;
																			if((Subscriber_Number1.substring(0,1))== '0')
																			{
																			   Subscriber_Number1 = (Subscriber_Number1.substring(1,Subscriber_Number1.length))
																			}						
																			Subscriber_Number2='';
																			Package_Code=result[currcallrec].package_plan_code;
																			Non_Core_Bundle_Code=result[currcallrec].bundle_soc_code;
																			Non_Core_Bundle_Desc=result[currcallrec].bundle_soc_description;
																			Bundle_Start_Date=(result[currcallrec].mod_date_ie)//.replace(/\-/g,'/');
																			if(Mod_Type=='Add'){
																				Eff_End_Date='';
																			}else if(Mod_Type=='Terminate'){
																				Eff_End_Date=(result[currcallrec].mod_date_ie)//.replace(/\-/g,'/');
																			}
																				
																			Metrics	='';	
																			Subscribers	='1';			
																			
																			console.log('Mac_records_output'+mac_rec);
																			
																			// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI 
																			if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
																			{
																				
																				var worksheet = workbook.getWorksheet(1);
																				var row = worksheet.getRow(r);
																				row.getCell(1).value = Customer_Top_Level_Parent1;
																				row.getCell(2).value = Customer_Top_Level_Parent2;
																				row.getCell(3).value = Customer_Group_Code;
																				row.getCell(4).value = Customer_Number;
																				row.getCell(5).value = Customer_Name;
																				row.getCell(6).value = '0'+Subscriber_Number1;
																				row.getCell(7).value = Subscriber_Number2;
																				row.getCell(8).value = Package_Code;
																				row.getCell(9).value = Non_Core_Bundle_Code;
																				row.getCell(10).value = Non_Core_Bundle_Desc;
																				row.getCell(11).value = Bundle_Start_Date;
																				row.getCell(12).value = Eff_End_Date;
																				//row.getCell(13).value = Metrics;
																				row.getCell(14).value = Subscribers;
																				row.commit();
																				r=r+1;
																			}
																			
																			 if( mac_rec>1 && mac_rec<5000 )
																			{
																				for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
																				{
																					var worksheet = workbook.getWorksheet(1);
																					var row = worksheet.getRow(r);
																					
																					row.getCell(1).value = Customer_Top_Level_Parent1;
																					row.getCell(2).value = Customer_Top_Level_Parent2;
																					row.getCell(3).value = Customer_Group_Code;
																					row.getCell(4).value = Customer_Number;
																					row.getCell(5).value = Customer_Name;
																					row.getCell(6).value = '0'+(parseInt(Subscriber_Number1)+Rec_ini);
																					row.getCell(7).value = Subscriber_Number2;
																					row.getCell(8).value = Package_Code;
																					row.getCell(9).value = Non_Core_Bundle_Code;
																					row.getCell(10).value = Non_Core_Bundle_Desc;
																					row.getCell(11).value = Bundle_Start_Date;
																					row.getCell(12).value = Eff_End_Date;
																					//row.getCell(13).value = Metrics;
																					row.getCell(14).value = Subscribers;
																					row.commit();
																					r=r+1;
																				}
																			}					
																					
																			// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI
																		}
																		workbook.xlsx.writeFile('macTestData/'+zipfinename+'/COR1139.S.Bundle Codes VGE Version.xlsx');
																		workbook.save;
																		workbook.close;
																				
																		//console.log(Date());
																		
															if (Execution_flag == 'yes')
															{	
																	//fix-
																	 fs.appendFile('BPF/Master_Temp_to_Store_Bpf_Formatting_Status.txt', "\r\n"+zipfinename+'$ZIP_in',  function(err){
																	  ////var pool = new Pool(config);
																		var exec = require("child_process").exec
																		exec('FormatBPF.vbs').unref()	
																	  console.log('Server Updated Current New folder in Master Temp file:- '+zipfinename+'$ZIP_in');
																		if(err) {
																		  return console.error('Error running update New folder in Master Temp file .!!', err);
																		}
																		else
																		{
																			var fstatus = zipfinename+'$Complete'
																			var Temp_content ;
																			//console.log('fstatus value is: '+zipfinename+'$Complete')
																			waitUntil()
																			.interval(500)
																			.times(Infinity)
																			.condition(function() {
																			
																			fs.readFile('BPF/Master_Temp_to_Store_Bpf_Formatting_Status.txt', 'utf8', function(err, data) {
																			  if (err){
																				  return console.error('Error reading New folder in Master Temp file .!!', err);
																			  }
																			  else
																			  {
																				  console.log('OK read the Master Temp file !!');
																				  //console.log(data)
																				  Temp_content = data.toString();
																				  if(Temp_content.indexOf(fstatus)!=-1)
																				  {
																					Temp_content ="Update Done"
																				  }
																			  }		  
																			});
																			return (Temp_content == "Update Done" ? true : false);
																			})
																			.done(function(result) {
																				//res.send(zipfinename+'.zip');
																				res.download(path.join(__dirname, 'macTestData', zipfinename+'.zip'));
																			});	
																			
																		}
																	 
																	 })  
																	 
															}
																	});	
																console.log('Zip file name is: - '+zipfinename);																	
															}	
														});
													// Ireland end */
												
												}
											});
									console.log('inserting Data into DB');}, 1000);	
						}else{
								if(continue_flag=='no')
								
								{
										
										var workbook =  new excel.Workbook();
										
										workbook.xlsx.readFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function()
											{ 
													
															if (continue_flag=='no'){
																	var worksheet = workbook.getWorksheet(1);
																	var mac_spec_sheet_name = worksheet.name
																	
																	if(header_flaw =='yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(12).value = 'Remarks'
																		if(mac_spec_sheet_name=='MACSpecification')
																		{
																		  row.getCell(12).value = 'Column Headers are Incorrect please give correct one`s .!!'
																		}else{
																		  row.getCell(12).value = 'Please provide the correct worksheet name `MACSpecification` .!!'
																		}																		
																		remarks.commit();
																		row.commit();																	
																	}else{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(12).value = 'Remarks'
																		row.getCell(12).value = 'Mandatory Field/s missing kindly provide the same .!!'
																		remarks.commit();
																		row.commit();
																	}																	
															}
													
														workbook.xlsx.writeFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function(err){
														if(err){}
														else{
															console.log('rowid2:'+row_ref)
															workbook.save;
															workbook.close;
															res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'));
														}
														});
													
													
											});		
										
															
								}						
							//console.log('Exception Captured')
							//return;
						}

					}
				}); 
		
		}
		//res.sendFile(path.join(__dirname,'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
		
    });
});

//itsnow

app.post('/uploadmac_GER',function(req,res){


		//console.log(req.query.retval);
		var opco = req.query.retval;
		var sampleFile = req.files.usermac;  //usercdr
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
		var curropcocode;
		jmin = jmin.substring(jmin.length-2,jmin.length)
		var jsec = jdat.getSeconds();
		jsec = '0'+jsec;
		jsec = jsec.substring(jsec.length-2,jsec.length);

		sampleFile.mv('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx', function(err) {
		//sampleFile.mv('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls', function(err) {
		if (err)
		{
			console.log('error moving the uploaded mac to folder')
			return res.status(500).send(err);
		}
		else
		{
			var rrow = 0;
			var filenamejson ='UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec;
			var currfilepath = './BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'
			node_xlsxj({
				input: currfilepath,  // input xls 
				output: "./TempJson/"+filenamejson[0]+"json", // output json 
				sheet: "MACSpecification"  // specific sheetname 
				}, function(err,result,fields) {
				if(err) {
					console.error(err);
				} else {
						var jsonobj = result;
						var totlen = jsonobj.length;
						var insertstr = '';
						totlen1 = jsonobj.length;
						var continue_flag ;
						var row_ref;
						continue_flag= 'yes'
						var header_flaw;
						header_flaw = 'no'	
						var crea_date_flaw;
						crea_date_flaw = 'no'							
						
						for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
						{
						
							//Column Headers validations
							if( (jsonobj[currcallrec].hasOwnProperty('Use_Case'))  && (jsonobj[currcallrec].hasOwnProperty('Opco_Ban'))  && (jsonobj[currcallrec].hasOwnProperty('MSISDN'))  && (jsonobj[currcallrec].hasOwnProperty('Name1') )  && (jsonobj[currcallrec].hasOwnProperty('Name2'))   && (jsonobj[currcallrec].hasOwnProperty('Creation_Date')) && (jsonobj[currcallrec].hasOwnProperty('Effective_Date')) && (jsonobj[currcallrec].hasOwnProperty('Tarrif_Code')) && (jsonobj[currcallrec].hasOwnProperty('Tarrif_Description')) && (jsonobj[currcallrec].hasOwnProperty('Old_Value')) && (jsonobj[currcallrec].hasOwnProperty('No_Of_Services'))   ){
								console.log('All is well')					
							}else{	
								// Error Handling								
								continue_flag = 'no'
								header_flaw ='yes'
								row_ref = currcallrec;
								break;														
							}						
							
						
						
							//Mandatory Fields check
							if(jsonobj[currcallrec].Use_Case == '')
							{
								continue_flag = 'no'
								row_ref = currcallrec;
								break;	
								
							}else if( (jsonobj[currcallrec].Use_Case == 'Change MSISDN') || (jsonobj[currcallrec].Use_Case == 'Change Tariff') || (jsonobj[currcallrec].Use_Case == 'BAN Change'))
							{
								if( jsonobj[currcallrec].Use_Case == '' || jsonobj[currcallrec].Opco_Ban == '' || jsonobj[currcallrec].MSISDN == '' || jsonobj[currcallrec].Creation_Date == '' || jsonobj[currcallrec].Effective_Date == '' || jsonobj[currcallrec].Tarrif_Code == '' || jsonobj[currcallrec].Old_Value == '' || jsonobj[currcallrec].No_Of_Services == ''  )
								{									
									continue_flag = 'no'
									row_ref = currcallrec;
									break;	
								}
							}else {
								if( jsonobj[currcallrec].Use_Case == '' || jsonobj[currcallrec].Opco_Ban == '' || jsonobj[currcallrec].MSISDN == '' || jsonobj[currcallrec].Creation_Date == '' || jsonobj[currcallrec].Effective_Date == '' || jsonobj[currcallrec].Tarrif_Code == '' || jsonobj[currcallrec].Old_Value != '' || jsonobj[currcallrec].No_Of_Services == ''  )
								{
									continue_flag = 'no'
									row_ref = currcallrec;
									break;	
								}																				
							}
							
							if(jsonobj[currcallrec].Creation_Date != '' )
							{		  
								var colen_instance = ((jsonobj[currcallrec].Creation_Date).match(/\-/g) || []).length;
								var space_instance = ((jsonobj[currcallrec].Creation_Date).match(/\ /g) || []).length;
								var dot_instance = ((jsonobj[currcallrec].Creation_Date).match(/\:/g) || []).length;
								console.log(colen_instance+'space'+space_instance+'dot'+dot_instance)
								if(colen_instance!= 2  || space_instance!=1 || dot_instance!=2 )
								{
									// Error Handling								
									continue_flag = 'no'
									crea_date_flaw ='yes'
									row_ref = currcallrec;
									break;	
								}				
							}
							//Mandatory Fields check	
							
							//console.log('Use Case:'+ jsonobj[currcallrec].Use_Case)
							if(jsonobj[currcallrec].Use_Case != '')
							{
							if(insertstr === '')
							{
								insertstr = "('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_Ban+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Name1+"','"+jsonobj[currcallrec].Name2+"','"+jsonobj[currcallrec].Creation_Date+"','"+jsonobj[currcallrec].Effective_Date+"','"+jsonobj[currcallrec].Tarrif_Code+"','"+jsonobj[currcallrec].Tarrif_Description+"','"+jsonobj[currcallrec].Old_Value+"','"+jsonobj[currcallrec].No_Of_Services+"')";
							}
							else
							{
								insertstr = insertstr+",('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_Ban+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Name1+"','"+jsonobj[currcallrec].Name2+"','"+jsonobj[currcallrec].Creation_Date+"','"+jsonobj[currcallrec].Effective_Date+"','"+jsonobj[currcallrec].Tarrif_Code+"','"+jsonobj[currcallrec].Tarrif_Description+"','"+jsonobj[currcallrec].Old_Value+"','"+jsonobj[currcallrec].No_Of_Services+"')";
							}
							}		
						
						}
						
						if(continue_flag=='yes')
						{
									console.log('Insert String:'+ insertstr)
									////var pool = new Pool(config);
										//console.log()
										pool.query("INSERT INTO mac_bulkupload_ger  (filename,opco,DE_use_case,DE_BAN,DE_MSISDN,DE_Name1,DE_Name2,DE_cre_date,DE_eff_date,DE_Tarrif_code,DE_Tarrif_code_desc,DE_Old_value,DE_No_of_Rec_Mac ) VALUES "+insertstr , function(err,result,fields) {
										if(err) {
											return console.error('error running query', err);
										}
										else
										{	
										}
										});	
										
										// core logic for IE_MAC
										
										
										setTimeout(function() {
									
											//var pool = new Pool(config);
											pool.query('select mac_bulkupload_ger.filename,mac_bulkupload_ger.opco,mac_bulkupload_ger.DE_use_case,mac_bulkupload_ger.DE_BAN,mac_bulkupload_ger.DE_MSISDN,mac_bulkupload_ger.DE_Name1,mac_bulkupload_ger.DE_Name2,mac_bulkupload_ger.DE_cre_date,mac_bulkupload_ger.DE_eff_date,mac_bulkupload_ger.DE_Tarrif_code,mac_bulkupload_ger.DE_Tarrif_code_desc,mac_bulkupload_ger.DE_Old_value,mac_bulkupload_ger.DE_No_of_Rec_Mac,germany_usecase_t.transaction_type,germany_usecase_t.transaction_type_desc from mac_bulkupload_ger LEFT JOIN germany_usecase_t ON mac_bulkupload_ger.DE_use_case = germany_usecase_t.usecase where mac_bulkupload_ger.filename = \''+filenamejson+'\'', function(err,result,fields) {
											if(err) {
													return console.error('error running query', err);
												}
												else
												{		
												
													//core logic to build the germany Mac\
													
													  //var returnedval = req.query.retval;
													 // var jsonobj = JSON.parse(returnedval);
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
													 
													  var randfileid = 	Math.floor(100 + Math.random() * 900);
													  var filename = 'DWH_VGE_CSA_TRANSACTIONS_'+jyr+jmonth+jdate+jhr+jmin+jsec;
													 
													 var DE_use_case;
													 var REPORT_MONTH;
													 var REPORT_DESC;
													 var BAN;
													 var DATE;
													 var SUBSCRIBER_NO;
													 var LAST_OR_BUSINESS_NAME_1;
													 var LAST_OR_BUSINESS_NAME_3;
													 var TRANSACTION_TYPE;
													 var L5_TARIFF_DESC;
													 var TRANSACTION_EFFECTIVE_DATE;
													 var TRANSACTION_CREATION_DATE;
													 var TRANSACTION_CREATION_TIME;
													 var TRANSACTION_TYPE_DESC;
													 var TARIFF_OPTION;
													 var L4_TARIFF_DESC;
													 var SOC;
													 var SOC_DESC;
													 var COMMITMENT_PERIOD;
													 var COMMITMENT_PERIOD_START_DATE;
													 var COMMITMENT_PERIOD_END_DATE;
													 var CANCELLATION_DATE;
													 var OLD_VALUE;
													 var CLIENT_ID;
													 var CNT_TRANSACTION;
													  
													  
													  Mac_rec = '';
													  console.log('No of DB records:- '+result.length)
													  
													  for(var currcallrec = 0;currcallrec<result.length;currcallrec++)
													  {
														DE_use_case=  result[currcallrec].DE_use_case;
														REPORT_MONTH = jyr+jmonth+'                                                                                ';
														REPORT_MONTH = REPORT_MONTH.substring(0,6);
														REPORT_DESC = 'MAC_REPORT'+'                                                                                ';
														REPORT_DESC = REPORT_DESC.substring(0,20);
														
														var ban = parseInt( result[currcallrec].DE_BAN);
														var ban_f= zpad(ban, 10); 
														console.log(ban_f);
														
														BAN = ban_f +'                                                                                ';
														BAN = BAN.substring(0,10);
														DATE = jdate+jmonth+jyr+'                                                                                ';
														DATE = DATE.substring(0,8);
														//MSISDN = jsonobj[currcallrec].DE_MSISDN;
														SUBSCRIBER_NO = 'GSM'+ result[currcallrec].DE_MSISDN+'                                                                                ';
														SUBSCRIBER_NO = SUBSCRIBER_NO.substring(0,20);
														LAST_OR_BUSINESS_NAME_1 =  result[currcallrec].DE_Name1+'                                                                        ';
														LAST_OR_BUSINESS_NAME_1 = LAST_OR_BUSINESS_NAME_1.substring(0,30);
														LAST_OR_BUSINESS_NAME_3 =  result[currcallrec].DE_Name2+'                                                                        ';
														LAST_OR_BUSINESS_NAME_3 = LAST_OR_BUSINESS_NAME_3.substring(0,30);
														
														//Date logic
														var creation_date =  result[currcallrec].DE_cre_date;
														creation_date =  creation_date.replace( /\-/g,'');
														console.log('creation date:-'+ creation_date)
														var creation_time = creation_date.split(' ');
														var creation_time_f = creation_time[1].replace( /\:/g,'');
														console.log('creation time:- '+creation_time_f)
														var eff_date =  result[currcallrec].DE_eff_date;
														eff_date =  eff_date.replace( /\-/g,'');
														console.log('eff date:-'+ eff_date)
														
														
														TRANSACTION_TYPE =  result[currcallrec].transaction_type+'                                                                        ';
														TRANSACTION_TYPE = TRANSACTION_TYPE.substring(0,2);
														L5_TARIFF_DESC =  result[currcallrec].DE_Tarrif_code_desc+'                                                                        ';
														L5_TARIFF_DESC = L5_TARIFF_DESC.substring(0,71);
														TRANSACTION_EFFECTIVE_DATE = eff_date+'                                                                        ';
														TRANSACTION_EFFECTIVE_DATE = TRANSACTION_EFFECTIVE_DATE.substring(0,8);
														TRANSACTION_CREATION_DATE = creation_date+'                                                                        ';
														TRANSACTION_CREATION_DATE = TRANSACTION_CREATION_DATE.substring(0,8);
														TRANSACTION_CREATION_TIME = creation_time_f+'                                                                        ';
														TRANSACTION_CREATION_TIME = TRANSACTION_CREATION_TIME.substring(0,7);
														TRANSACTION_TYPE_DESC =  result[currcallrec].transaction_type_desc+'                                                                        ';
														TRANSACTION_TYPE_DESC = TRANSACTION_TYPE_DESC.substring(0,50);
														TARIFF_OPTION =  result[currcallrec].DE_Tarrif_code+'                                                                        ';
														TARIFF_OPTION = TARIFF_OPTION.substring(0,9);
														L4_TARIFF_DESC =  result[currcallrec].DE_Tarrif_code_desc+'                                                                        ';
														L4_TARIFF_DESC = L4_TARIFF_DESC.substring(0,71);
														SOC = ''+'                                                                        ';
														SOC = SOC.substring(0,9);
														SOC_DESC = ''+'                                                                                                                                                                                                                        ';
														SOC_DESC = SOC_DESC.substring(0,200);
														COMMITMENT_PERIOD = ''+'                                                                        ';
														COMMITMENT_PERIOD = COMMITMENT_PERIOD.substring(0,6);
														COMMITMENT_PERIOD_START_DATE = ''+'                                                                        ';
														COMMITMENT_PERIOD_START_DATE = COMMITMENT_PERIOD_START_DATE.substring(0,8);
														COMMITMENT_PERIOD_END_DATE = ''+'                                                                        ';
														COMMITMENT_PERIOD_END_DATE = COMMITMENT_PERIOD_END_DATE.substring(0,8);
														CANCELLATION_DATE = ''+'                                                                        ';
														CANCELLATION_DATE = CANCELLATION_DATE.substring(0,8);
														OLD_VALUE =  result[currcallrec].DE_Old_value+'                                                                        ';
														OLD_VALUE = OLD_VALUE.substring(0,40);
														CLIENT_ID = ''+'                                                                        ';
														CLIENT_ID = CLIENT_ID.substring(0,11);
														CNT_TRANSACTION = ''+'                                                                        ';
														CNT_TRANSACTION = CNT_TRANSACTION.substring(0,6);

														de_no_of_rec_mac = parseInt( result[currcallrec].DE_No_of_Rec_Mac);
														console.log(de_no_of_rec_mac)
														
														if (de_no_of_rec_mac<=1){
															
															
															Mac_rec = Mac_rec+REPORT_MONTH+REPORT_DESC+BAN+DATE+SUBSCRIBER_NO+LAST_OR_BUSINESS_NAME_1+LAST_OR_BUSINESS_NAME_3+TRANSACTION_TYPE+L5_TARIFF_DESC+TRANSACTION_EFFECTIVE_DATE+TRANSACTION_CREATION_DATE+TRANSACTION_CREATION_TIME+TRANSACTION_TYPE_DESC+TARIFF_OPTION+L4_TARIFF_DESC+SOC+SOC_DESC+COMMITMENT_PERIOD+COMMITMENT_PERIOD_START_DATE+COMMITMENT_PERIOD_END_DATE+CANCELLATION_DATE+OLD_VALUE+CLIENT_ID+CNT_TRANSACTION+"\n";
														
														}else if(de_no_of_rec_mac>1){
															var k = 0;
															for(var currcdr = 0;currcdr<de_no_of_rec_mac;currcdr++)
															{
																SUBSCRIBER_NO = 'GSM'+(parseInt( result[currcallrec].DE_MSISDN)+currcdr)+'                                                                                ';
																SUBSCRIBER_NO = SUBSCRIBER_NO.substring(0,20);
																
																Mac_rec = Mac_rec+REPORT_MONTH+REPORT_DESC+BAN+DATE+SUBSCRIBER_NO+LAST_OR_BUSINESS_NAME_1+LAST_OR_BUSINESS_NAME_3+TRANSACTION_TYPE+L5_TARIFF_DESC+TRANSACTION_EFFECTIVE_DATE+TRANSACTION_CREATION_DATE+TRANSACTION_CREATION_TIME+TRANSACTION_TYPE_DESC+TARIFF_OPTION+L4_TARIFF_DESC+SOC+SOC_DESC+COMMITMENT_PERIOD+COMMITMENT_PERIOD_START_DATE+COMMITMENT_PERIOD_END_DATE+CANCELLATION_DATE+OLD_VALUE+CLIENT_ID+CNT_TRANSACTION+"\n";
																
															}	
														}
														
															console.log('Mac txt:-'+Mac_rec)
															if(currcallrec==(result.length)-1)
															{
																console.log('key step')
																fs.writeFile('macTestData/'+filename, Mac_rec,  function(err){
																	if(err) {
																		return console.error('error Updating mac content Ger', err);
																	}
																	else
																	{														
																		res.download(path.join(__dirname, 'macTestData', filename));	
																	}	
																
																})																								
															}
															
													  }
																							  
													//core logic to build the germany Mac
												}	
											});
									console.log('inserting Data into DB');}, 1000);	
						}else{
								if(continue_flag=='no')								
								{										
										var workbook =  new excel.Workbook();
										
										workbook.xlsx.readFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function()
											{ 												
															if (continue_flag=='no'){
																	var worksheet = workbook.getWorksheet(1);
																	var mac_spec_sheet_name = worksheet.name
																	
																	if(header_flaw =='yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(12).value = 'Remarks'
																		if(mac_spec_sheet_name=='MACSpecification')
																		{
																		  row.getCell(12).value = 'Column Headers are Incorrect please give correct one`s .!!'
																		}else{
																		  row.getCell(12).value = 'Please provide the correct worksheet name `MACSpecification` .!!'
																		}																		
																		remarks.commit();
																		row.commit();																	
																	}else if (crea_date_flaw == 'yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(12).value = 'Remarks'
																		row.getCell(12).value = 'Please provide the correct Creation_Date format `2017-05-02 00:00:00` .!!'
																		remarks.commit();
																		row.commit();
																	}else{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(12).value = 'Remarks'
																		row.getCell(12).value = 'Incorrect Mandatory Field/s kindly provide the same .!!'
																		remarks.commit();
																		row.commit();
																	}																	
															}												
														workbook.xlsx.writeFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function(err){
														if(err){}
														else{
															console.log('rowid2:'+row_ref)
															workbook.save;
															workbook.close;
															res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'));
														}
														});													
											});		
								}						
							//console.log('Exception Captured')
							//return;
						}			
									
									
							
					}
				}); 
		
		}
		//res.sendFile(path.join(__dirname,'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
		
    });

});


app.post('/uploadmac_NL',function(req,res){
		//console.log(req.query.retval);
		var opco = req.query.retval;
		//var feedtype = retvalarr[1];
		var sampleFile = req.files.usermac; 
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
		var curropcocode;
		jmin = jmin.substring(jmin.length-2,jmin.length)
		var jsec = jdat.getSeconds();
		jsec = '0'+jsec;
		jsec = jsec.substring(jsec.length-2,jsec.length);
		sampleFile.mv('./BulkMACGeneration/usermac'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx', function(err) {
		if (err)
		{
			console.log('error moving the uploaded mac to folder')
			return res.status(500).send(err);
			//return res.status(500).send(err);
		}
		else
		{
			var rrow = 0;
			var filenamejson = 'usermac'+jyr+jmonth+jdate+jhr+jmin+jsec;
			var currfilepath = './BulkMACGeneration/usermac'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'
			node_xlsxj({
				input: currfilepath,  // input xls 
				output: "./TempJson/"+filenamejson[0]+"json", // output json 
				sheet: "MACSpecification"  // specific sheetname 
				}, function(err,result,fields) {
				if(err) {
					console.error(err);
				} else {
						var jsonobj = result;
						var totlen = jsonobj.length;
						var insertstr = '';
						totlen1 = jsonobj.length;
						var continue_flag ;
						var row_ref;
						continue_flag= 'yes'
						var header_flaw;
						header_flaw = 'no'						
						for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
						{
							if(jsonobj[currcallrec].Use_Case != "")
							{
							//Column Header Validations
							if( (jsonobj[currcallrec].hasOwnProperty('Use_Case'))  && (jsonobj[currcallrec].hasOwnProperty('Opco_Ban'))  && (jsonobj[currcallrec].hasOwnProperty('MSISDN'))  && (jsonobj[currcallrec].hasOwnProperty('Date') )  && (jsonobj[currcallrec].hasOwnProperty('Price_Plan_Name'))   && (jsonobj[currcallrec].hasOwnProperty('Price_Plan_Description')) && (jsonobj[currcallrec].hasOwnProperty('MAC')) && (jsonobj[currcallrec].hasOwnProperty('Add_On_Name')) && (jsonobj[currcallrec].hasOwnProperty('Add_On_Description')) && (jsonobj[currcallrec].hasOwnProperty('Add_on_Con_Discon')) && (jsonobj[currcallrec].hasOwnProperty('No_Of_Service'))  ){
								console.log('All is well')					
							}else{
								// Error Handling								
								continue_flag = 'no'
								header_flaw ='yes'
								row_ref = currcallrec;
								break;														
							}
													
							//Mandatory Validations
							if (jsonobj[currcallrec].Use_Case == '')
							{
								// Error Handling								
								continue_flag = 'no'
								row_ref = currcallrec;
								break;
								
							}else if(jsonobj[currcallrec].Use_Case=='Add'||jsonobj[currcallrec].Use_Case=='Terminate')
							{
								if(jsonobj[currcallrec].Opco_Ban == '' ||jsonobj[currcallrec].MSISDN == '' ||jsonobj[currcallrec].Date == '' ||jsonobj[currcallrec].Price_Plan_Name == ''  || jsonobj[currcallrec].MAC == '' || jsonobj[currcallrec].Add_On_Name == '' ||jsonobj[currcallrec].Add_on_Con_Discon == '' || jsonobj[currcallrec].No_Of_Service == '' )
								{
									// Error Handling								
									continue_flag = 'no'
									row_ref = currcallrec;
									break;
								}
							}
							
							
							if(jsonobj[currcallrec].Use_Case != '')
							{
							if(insertstr === '')
							{
								insertstr = "('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_Ban+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Date+"','"+jsonobj[currcallrec].Price_Plan_Name+"','"+jsonobj[currcallrec].Price_Plan_Description+"','"+jsonobj[currcallrec].MAC+"','"+jsonobj[currcallrec].Add_On_Name+"','"+jsonobj[currcallrec].Add_On_Description+"','"+jsonobj[currcallrec].Add_on_Con_Discon+"','"+jsonobj[currcallrec].No_Of_Service+"')";
							}
							else
							{
								insertstr = insertstr+",('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_Ban+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Date+"','"+jsonobj[currcallrec].Price_Plan_Name+"','"+jsonobj[currcallrec].Price_Plan_Description+"','"+jsonobj[currcallrec].MAC+"','"+jsonobj[currcallrec].Add_On_Name+"','"+jsonobj[currcallrec].Add_On_Description+"','"+jsonobj[currcallrec].Add_on_Con_Discon+"','"+jsonobj[currcallrec].No_Of_Service+"')";
							}
							}		
						}
						}
						
						if(continue_flag=='yes')
						{						
									////var pool = new Pool(config);
										//console.log()
										pool.query("INSERT INTO mac_bulkupload_nl  (filename,opco,Use_Case_NL,BAN_NL,MSISDN_NL,Date_NL,Price_Plan_Name_NL,Price_Plan_Description_NL,MAC_NL,Add_On_Name_NL,Add_On_Description_NL,Add_on_Con_Discon_NL,No_Of_Service_NL ) VALUES "+insertstr , function(err,result,fields) {

										
										if(err) {
											return console.error('error running query', err);
										}
										else
										{	
										}
										});	
									setTimeout(function() {
									//select A.*, B."OPCO_NAME",B."Currency_Code",B."OPCO_CODE",B."OPCO_Description",C."kenan_usg_description",C."nmr",C."vone_c",C."vone_red",C."c_c",C."vge_d",C."vge_d_red",c."kenan_type_id_usg",c."vge_codes",D."vge_item_mobile",D."vge_item_roaming" from cdr_bulkupload A  left join "OPCO" B on A."opconame" = B."OPCO_Description"  left join "usage_type" C on A."usagetype"=C."kenan_type_id_usg" left join "usage_mo_mt_roaming" D on c."vge_codes" = D."vge_code" and  (A."filename" = 'usercdr20170415003936' and B."Status" = 'Active')
									//var pool = new Pool(config);
									//pool.query('select mac_bulkupload_UK.filename, mac_bulkupload_UK.opco,mac_bulkupload_UK.BAN_UK,mac_bulkupload_UK.MSISDN_UK,mac_bulkupload_UK.Email_Address_UK,mac_bulkupload_UK.Existing_PP_UK,mac_bulkupload_UK.Existing_PP_Desc_UK,mac_bulkupload_UK.NEW_PP_UK,mac_bulkupload_UK.NEW_PP_Desc_UK,mac_bulkupload_UK.Mod_date_UK,mac_bulkupload_UK.type_of_mod_UK,mac_bulkupload_UK.No_of_Rec_UK from mac_bulkupload_UK  where mac_bulkupload_UK.filename = \''+filenamejson+'\'', function(err,result,fields) {
									pool.query('select * from mac_bulkupload_nl where mac_bulkupload_nl.filename = \''+filenamejson+'\'', function(err,result,fields) {

									if(err) {
											return console.error('error running query', err);
										}
										else
										{
											console.log('select * from mac_bulkupload_uk where filename = \''+filenamejson+'\';')
													
													console.log('DB records found:- '+ result)
													console.log('DB records found:- '+ result.length)
													
													// Ireland start
													  console.log('Hi sudheer .!!');
											//var strtxt = '';
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

											var filename = 'NL_MAC_'+jyr+jmonth+jdate+jhr+jmin+jsec+'.txt';
											console.log(filename);

											//fs.writeFile('TestData/'+filename, mactxt,  function(err){});
											//var Usage_id
											var BillingAccount_Number;
											var MSISDN_Number;
											var Date_nL;
											var PriceP_Name;
											var PriceP_Desc;
											var MAC;
											var Add_onName;
											var Add_onDesc;
											var Add_onCondiscn;
											var mactxt = "BAN|MSISDN|DATE|PP_NAME|PP_DESC|MAC|ADD_ON_NAME|ADD_ON_DESCRIPTION|ADD_ON_CON_DISCON"+"\r\n";
											var No_of_Rec_NL;
											var mac_rec;
											// mactxt = ''
											for(var currcallrec = 0;currcallrec<result.length;currcallrec++)
											{
											//	Mod_Type=jsonobj[currcallrec].type_of_mod_NL+'1';
												//console.log(Mod_Type)
												BillingAccount_Number = result[currcallrec].ban_nl;
												console.log(BillingAccount_Number);
												MSISDN_Number = parseInt(result[currcallrec].msisdn_nl);
												console.log(MSISDN_Number);
												MAC = result[currcallrec].mac_nl;
												console.log(MAC);
												PriceP_Name= result[currcallrec].price_plan_name_nl;
												PriceP_Desc = result[currcallrec].price_plan_description_nl;
												console.log(PriceP_Name);
												console.log(result[currcallrec].date_nl);
												Date_nL = (result[currcallrec].date_nl).replace(/\-/g,'/');
												console.log(Date_nL);
												console.log(Date_nL);
												Add_onName = result[currcallrec].add_on_name_nl;
												Add_onDesc = result[currcallrec].add_on_description_nl;
												Add_onCondiscn = result[currcallrec].add_on_con_discon_nl;
												No_of_Rec_NL=result[currcallrec].no_of_service_nl;
												mac_rec =0;
												mac_rec = parseInt(No_of_Rec_NL);
												if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
												{
													mactxt = mactxt + BillingAccount_Number+'|'+MSISDN_Number+'|'+Date_nL+'|'+PriceP_Name+'|'+PriceP_Desc+'|'+MAC+'|'+Add_onName+'|'+Add_onDesc+'|'+Add_onCondiscn+"\r\n";
												}
												if( mac_rec>1 && mac_rec<5000 )
												{
													for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
													{
														mactxt = mactxt + BillingAccount_Number+'|'+MSISDN_Number+'|'+Date_nL+'|'+PriceP_Name+'|'+PriceP_Desc+'|'+MAC+'|'+Add_onName+'|'+Add_onDesc+'|'+Add_onCondiscn+"\r\n";
														MSISDN_Number = MSISDN_Number+1;
													}
												}
											}
												fs.writeFile('macTestData/'+filename, mactxt,  function(err){
												res.download(path.join(__dirname, 'macTestData', filename));
												});
											
											}
									});
									console.log('inserting Data into DB');}, 1000);
						}else{
								if(continue_flag=='no')
								
								{
										
										var workbook =  new excel.Workbook();
										
										workbook.xlsx.readFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function()
											{ 
													
															if (continue_flag=='no'){
																	var worksheet = workbook.getWorksheet(1);
																	var mac_spec_sheet_name = worksheet.name
																	
																	if(header_flaw =='yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(12).value = 'Remarks'
																		if(mac_spec_sheet_name=='MACSpecification')
																		{
																		  row.getCell(12).value = 'Column Headers are Incorrect please give correct one`s .!!'
																		}else{
																		  row.getCell(12).value = 'Please provide the correct worksheet name `MACSpecification` .!!'
																		}																		
																		remarks.commit();
																		row.commit();																	
																	}else{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(12).value = 'Remarks'
																		row.getCell(12).value = 'Incorrect Mandatory Field/s kindly provide the same .!!'
																		remarks.commit();
																		row.commit();
																	}																	
															}
													
														workbook.xlsx.writeFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function(err){
														if(err){}
														else{
															console.log('rowid2:'+row_ref)
															workbook.save;
															workbook.close;
															res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'));
														}
														});
													
											});		
										
								}
						}			
					}
				});
			}
				//res.sendFile(path.join(__dirname,'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
		
    });
});

app.post('/uploadmac_UK',function(req,res){
		//console.log(req.query.retval);

		var opco = req.query.retval;
		//var feedtype = retvalarr[1];
		var sampleFile = req.files.usermac; 
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
		var curropcocode;
		jmin = jmin.substring(jmin.length-2,jmin.length)
		var jsec = jdat.getSeconds();
		jsec = '0'+jsec;
		jsec = jsec.substring(jsec.length-2,jsec.length);
		sampleFile.mv('./BulkMACGeneration/usermac'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx', function(err) {
		if (err)
		{
			console.log('error moving the uploaded mac to folder')
			return res.status(500).send(err);
			//return res.status(500).send(err);
		}
		else
		{
			var rrow = 0;
			var filenamejson = 'usermac'+jyr+jmonth+jdate+jhr+jmin+jsec;
			var currfilepath = './BulkMACGeneration/usermac'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'
			node_xlsxj({
				input: currfilepath,  // input xls 
				output: "./TempJson/"+filenamejson[0]+"json", // output json 
				sheet: "MACSpecification"  // specific sheetname 
				}, function(err,result,fields) {
				if(err) {
					console.error(err);
				} else {
						var jsonobj = result;
						var totlen = jsonobj.length;
						var insertstr = '';
						totlen1 = jsonobj.length;
						var continue_flag ;
						var row_ref;
						continue_flag= 'yes'
						var header_flaw;
						header_flaw = 'no'
						
						for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
						{
							
							if(jsonobj[currcallrec].Use_Case != "")
							{
							//Column Header Validations
							if( (jsonobj[currcallrec].hasOwnProperty('Use_Case'))  && (jsonobj[currcallrec].hasOwnProperty('Opco_BAN'))  && (jsonobj[currcallrec].hasOwnProperty('MSISDN'))  && (jsonobj[currcallrec].hasOwnProperty('Email_Address') )  && (jsonobj[currcallrec].hasOwnProperty('Existing_Price_Plan_OR_SOC'))   && (jsonobj[currcallrec].hasOwnProperty('Existing_Price_Plan_OR_SOC_Desc'))  && (jsonobj[currcallrec].hasOwnProperty('New_Price_Plan_OR_SOC'))   && (jsonobj[currcallrec].hasOwnProperty('New_Price_Plan_OR_SOC_Desc'))   && (jsonobj[currcallrec].hasOwnProperty('Date_of_Modification'))   && (jsonobj[currcallrec].hasOwnProperty('No_Of_Services')) ){
								console.log('All is well')					
							}else{
								// Error Handling								
								continue_flag = 'no'
								header_flaw ='yes'
								row_ref = currcallrec;
								break;														
							}							
													
							//Mandatory validations
							if(jsonobj[currcallrec].Use_Case == '')
							{
								// Error Handling								
								continue_flag = 'no'
								row_ref = currcallrec;
								break;	
							}else if(jsonobj[currcallrec].Use_Case =='Add'||jsonobj[currcallrec].Use_Case =='SOC Add')
							{
								if(jsonobj[currcallrec].Opco_BAN == ''||jsonobj[currcallrec].MSISDN == ''||jsonobj[currcallrec].New_Price_Plan_OR_SOC == '' ||jsonobj[currcallrec].Date_of_Modification == '' || jsonobj[currcallrec].Existing_Price_Plan_OR_SOC != ''|| jsonobj[currcallrec].Existing_Price_Plan_OR_SOC_Desc != ''  ||jsonobj[currcallrec].No_Of_Services == '' )
								{
									// Error Handling								
									continue_flag = 'no'
									row_ref = currcallrec;
									break;	
								}
								
							}else if(jsonobj[currcallrec].Use_Case =='Move')
							{
								if(jsonobj[currcallrec].Opco_BAN == ''||jsonobj[currcallrec].MSISDN == ''||jsonobj[currcallrec].Existing_Price_Plan_OR_SOC == '' ||jsonobj[currcallrec].New_Price_Plan_OR_SOC == '' || jsonobj[currcallrec].Date_of_Modification == '' || jsonobj[currcallrec].No_Of_Services == '' )
								{
									// Error Handling								
									continue_flag = 'no'
									row_ref = currcallrec;
									break;	
								}
							}else if(jsonobj[currcallrec].Use_Case =='Terminate' || jsonobj[currcallrec].Use_Case =='SOC Terminate')
							{
								if(jsonobj[currcallrec].Opco_BAN == '' ||jsonobj[currcallrec].MSISDN == ''||jsonobj[currcallrec].Existing_Price_Plan_OR_SOC == '' || jsonobj[currcallrec].Date_of_Modification == '' || jsonobj[currcallrec].New_Price_Plan_OR_SOC != ''||jsonobj[currcallrec].New_Price_Plan_OR_SOC_Desc != ''  ||jsonobj[currcallrec].No_Of_Services == '' )
								{
									// Error Handling								
									continue_flag = 'no'
									row_ref = currcallrec;
									break;	
								}
							}
							
							//Mandatory validations
							
							
							if(jsonobj[currcallrec].Use_Case != '')
							{
							if(insertstr === '')
							{
								insertstr = "('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_BAN+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Email_Address+"','"+jsonobj[currcallrec].Existing_Price_Plan_OR_SOC+"','"+jsonobj[currcallrec].Existing_Price_Plan_OR_SOC_Desc+"','"+jsonobj[currcallrec].New_Price_Plan_OR_SOC+"','"+jsonobj[currcallrec].New_Price_Plan_OR_SOC_Desc+"','"+jsonobj[currcallrec].Date_of_Modification+"','"+jsonobj[currcallrec].No_Of_Services+"')";
							}
							else
							{
								insertstr = insertstr+",('"+filenamejson+"','"+opco+"','"+jsonobj[currcallrec].Use_Case+"','"+jsonobj[currcallrec].Opco_BAN+"','"+jsonobj[currcallrec].MSISDN+"','"+jsonobj[currcallrec].Email_Address+"','"+jsonobj[currcallrec].Existing_Price_Plan_OR_SOC+"','"+jsonobj[currcallrec].Existing_Price_Plan_OR_SOC_Desc+"','"+jsonobj[currcallrec].New_Price_Plan_OR_SOC+"','"+jsonobj[currcallrec].New_Price_Plan_OR_SOC_Desc+"','"+jsonobj[currcallrec].Date_of_Modification+"','"+jsonobj[currcallrec].No_Of_Services+"')";
							}
							}
						}	
						
						}
						//console.log(insertstr)
						if(continue_flag=='yes')
						{						
										////var pool = new Pool(config);
											//console.log()
											pool.query("INSERT INTO mac_bulkupload_uk  (filename,opco,type_of_mod_UK,BAN_UK,MSISDN_UK,Email_Address_UK,Existing_PP_UK,Existing_PP_Desc_UK,NEW_PP_UK,NEW_PP_Desc_UK,Mod_date_UK,No_of_Rec_UK ) VALUES "+insertstr , function(err,result,fields) {

											
											if(err) {
												return console.error('error running query', err);
											}
											else
											{	
											}
											});	
										setTimeout(function() {
										//select A.*, B."OPCO_NAME",B."Currency_Code",B."OPCO_CODE",B."OPCO_Description",C."kenan_usg_description",C."nmr",C."vone_c",C."vone_red",C."c_c",C."vge_d",C."vge_d_red",c."kenan_type_id_usg",c."vge_codes",D."vge_item_mobile",D."vge_item_roaming" from cdr_bulkupload A  left join "OPCO" B on A."opconame" = B."OPCO_Description"  left join "usage_type" C on A."usagetype"=C."kenan_type_id_usg" left join "usage_mo_mt_roaming" D on c."vge_codes" = D."vge_code" and  (A."filename" = 'usercdr20170415003936' and B."Status" = 'Active')
										//var pool = new Pool(config);
										//pool.query('select mac_bulkupload_UK.filename, mac_bulkupload_UK.opco,mac_bulkupload_UK.BAN_UK,mac_bulkupload_UK.MSISDN_UK,mac_bulkupload_UK.Email_Address_UK,mac_bulkupload_UK.Existing_PP_UK,mac_bulkupload_UK.Existing_PP_Desc_UK,mac_bulkupload_UK.NEW_PP_UK,mac_bulkupload_UK.NEW_PP_Desc_UK,mac_bulkupload_UK.Mod_date_UK,mac_bulkupload_UK.type_of_mod_UK,mac_bulkupload_UK.No_of_Rec_UK from mac_bulkupload_UK  where mac_bulkupload_UK.filename = \''+filenamejson+'\'', function(err,result,fields) {
										pool.query('select * from mac_bulkupload_uk where mac_bulkupload_uk.filename = \''+filenamejson+'\'', function(err,result,fields) {

										if(err) {
												return console.error('error running query', err);
											}
											else
											{
												console.log('select * from mac_bulkupload_uk where filename = \''+filenamejson+'\';')
														
														console.log('DB records found:- '+ result)
														console.log('DB records found:- '+ result.length)
														
														// Ireland start
														  console.log('Hi sudheer .!!');
												//var strtxt = '';
												var r=2
												var mac_rec;
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
												var filename = 'VGE_REPORT_DAILY_'+jyr+jmonth+jdate+jhr+jmin+jsec+'.csv';
												//console.log(result.length);
												var workbook =  new excel.Workbook();
												workbook.csv.readFile('./macTestData/NewMAC.csv')
												 .then(function() {
													 console.log('DB records found:- '+ result.length)
												for(var currselrow = 0;currselrow<result.length;currselrow++)
												{
													var njson = result[currselrow]
													//var entrow = 'no';
													//var feedtype = '';
													//var opconame = '';
													var Mod_Type='';
													var BillingAccount_Number='';
													var MSISDN_Number='';
													var Email_addrs='';
													var Exist_plan='';
													var Exist_plandesc='';
													var New_plan='';
													var New_plandesc='';
													var Mod_date='';
													var No_of_Mac_records;
													//feedtype = result[currselrow].feedtype;		
													//opconame =  result[currselrow].opconame;		
													Mod_Type = result[currselrow].type_of_mod_uk ;		
													BillingAccount_Number = result[currselrow].ban_uk ;		
													MSISDN_Number = result[currselrow].msisdn_uk ;		
													Email_addrs = result[currselrow].email_address_uk ;		
													Exist_plan = result[currselrow].existing_pp_uk ;		
													Exist_plandesc = result[currselrow].existing_pp_desc_uk ;		
													New_plan = result[currselrow].new_pp_uk ;		
													New_plandesc = result[currselrow].new_pp_desc_uk ;		
													Mod_date = result[currselrow].mod_date_uk  ;		
													//console.log(Mod_date);
													No_of_Mac_records=result[currselrow].no_of_rec_uk;
													console.log(No_of_Mac_records);
													mac_rec =0;
													
													mac_rec = parseInt(No_of_Mac_records,10);
													console.log('Mac_records_output'+mac_rec);
													if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
													{
														var worksheet = workbook.getWorksheet(1);
														var row = worksheet.getRow(r);
														row.getCell(1).value = BillingAccount_Number
																row.getCell(2).value = MSISDN_Number
																row.getCell(3).value = changeCase.upperCase(Email_addrs)
																row.getCell(4).value = Exist_plan
																row.getCell(5).value = Exist_plandesc
																row.getCell(6).value = New_plan
																row.getCell(7).value = New_plandesc
																row.getCell(8).value = Mod_date
																row.getCell(9).value = Mod_Type
																row.commit();
																r=r+1;
													}
													
													 if( mac_rec>1 && mac_rec<5000 )
													{
														for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
														{
															var worksheet = workbook.getWorksheet(1);
															var row = worksheet.getRow(r);
															row.getCell(1).value = BillingAccount_Number 
																	row.getCell(2).value = parseInt(MSISDN_Number)+Rec_ini
																	row.getCell(3).value = changeCase.upperCase(Email_addrs)
																	row.getCell(4).value = Exist_plan
																	row.getCell(5).value = Exist_plandesc
																	row.getCell(6).value = New_plan
																	row.getCell(7).value = New_plandesc
																	row.getCell(8).value = Mod_date
																	row.getCell(9).value = Mod_Type
																	row.commit();
																	r=r+1;							  
														}
													}
														//Opco_data_date_flag = jsonobj[currcallrec].Opco_data_date_flag;
														
													}							
													
													
														//return 
														return workbook.csv.writeFile('./macTestData/'+filename); 
														
										
														
													 })
														//	workbook.save;
														//console.log('./macTestData/'+filename);
														//res.download(path.join(__dirname, 'macTestData', zipfinename+'.zip'));
													//	function(result){
														//res.download(500)(path.join(__dirname, 'macTestData', filename));}
														//res.send(filename); 
														workbook.save;
														setTimeout(function(){
														res.download(path.join(__dirname, 'macTestData', filename));
														},3000);
												}
										});
										console.log('inserting Data into DB');}, 1000);	
						}else{
								if(continue_flag=='no')
								
								{
										
										var workbook =  new excel.Workbook();
										
										workbook.xlsx.readFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function()
											{ 
													
															if (continue_flag=='no'){
																	var worksheet = workbook.getWorksheet(1);
																	var mac_spec_sheet_name = worksheet.name
																	
																	if(header_flaw =='yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(12).value = 'Remarks'
																		if(mac_spec_sheet_name=='MACSpecification')
																		{
																		  row.getCell(12).value = 'Column Headers are Incorrect please give correct one`s .!!'
																		}else{
																		  row.getCell(12).value = 'Please provide the correct worksheet name `MACSpecification` .!!'
																		}																		
																		remarks.commit();
																		row.commit();																	
																	}else{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(12).value = 'Remarks'
																		row.getCell(12).value = 'Incorrect Mandatory Field/s kindly provide the same .!!'
																		remarks.commit();
																		row.commit();
																	}																	
															}
													
														workbook.xlsx.writeFile('./BulkMACGeneration/UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function(err){
														if(err){}
														else{
															console.log('rowid2:'+row_ref)
															workbook.save;
															workbook.close;
															res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'));
														}
														});
													
													
											});		
										
															
								}						
							//console.log('Exception Captured')
							//return;
						}										
										
					}
				});
			}
				//res.sendFile(path.join(__dirname,'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
		
    });
});



//****************************************************************************************************************************

/*app.post('/uploadcdr',function(req,res){
		//console.log(req.query.retval);
		var retvalarr = req.query.retval.split('|');
		var opco = retvalarr[0];
		var feedtype = retvalarr[1];
		var sampleFile = req.files.usercdr; 
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
		var curropcocode;
		jmin = jmin.substring(jmin.length-2,jmin.length)
		var jsec = jdat.getSeconds();
		jsec = '0'+jsec;
		jsec = jsec.substring(jsec.length-2,jsec.length);
		sampleFile.mv('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx', function(err) {
		if (err)
		{
			return res.status(500).send(err);
		}
		else
		{
			var rrow = 0;
			var filenamejson = 'usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec;
			var currfilepath = './BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'
			node_xlsxj({
				input: currfilepath,  // input xls 
				output: "./TempJson/"+filenamejson[0]+"json", // output json 
				sheet: "UsageSpecification"  // specific sheetname 
				}, function(err,result,fields) {
				if(err) {
					console.error(err);
				} else {
						var jsonobj = result;
						var totlen = jsonobj.length;
						var insertstr = '';
						totlen1 = jsonobj.length;
						var continue_flag ;
						var row_ref;
						continue_flag= 'yes'
						var header_flaw;
						header_flaw = 'no'
						var call_int_flaw;
						call_int_flaw = 'no'
						for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
						{
						
							//Column Header validations
							if( (jsonobj[currcallrec].hasOwnProperty('Usage_Type'))  && (jsonobj[currcallrec].hasOwnProperty('Calling_Number'))  && (jsonobj[currcallrec].hasOwnProperty('Called_Number'))  && (jsonobj[currcallrec].hasOwnProperty('Source_Country') )  && (jsonobj[currcallrec].hasOwnProperty('Source_Network'))   && (jsonobj[currcallrec].hasOwnProperty('Source_Target')) && (jsonobj[currcallrec].hasOwnProperty('Target_Network'))  && (jsonobj[currcallrec].hasOwnProperty('Start_Time'))  && (jsonobj[currcallrec].hasOwnProperty('Call_Duration'))  && (jsonobj[currcallrec].hasOwnProperty('Upload'))  && (jsonobj[currcallrec].hasOwnProperty('Download'))  && (jsonobj[currcallrec].hasOwnProperty('Amount'))  && (jsonobj[currcallrec].hasOwnProperty('No_of_Events'))  && (jsonobj[currcallrec].hasOwnProperty('Call_Interval'))  && (jsonobj[currcallrec].hasOwnProperty('Annotation'))  ){
								console.log('All is well')					
							}else{
								// Error Handling								
								continue_flag = 'no'
								header_flaw ='yes'
								row_ref = currcallrec;
								break;														
							}						

							//Mandatory validations 
							if(jsonobj[currcallrec].Usage_Type == '' || jsonobj[currcallrec].Calling_Number == '' || jsonobj[currcallrec].Start_Time == '' || jsonobj[currcallrec].Call_Duration == '' || jsonobj[currcallrec].Called_Number == ''  )
							{
								//res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls'));
								
								// Error Handling								
								continue_flag = 'no'
								row_ref = currcallrec;
								break;	
							}
							
							if( parseInt(jsonobj[currcallrec].No_of_Events) > 1 && (jsonobj[currcallrec].Call_Interval == '' ) )
							{
								//res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls'));
								
								// Error Handling								
								continue_flag = 'no'
								call_int_flaw = 'yes'
								row_ref = currcallrec;
								break;	
							}
							//Mandatory validations 							
						
						
							if(jsonobj[currcallrec].Usage_Type != '')
							{
							if(insertstr === '')
							{
								insertstr = "('"+filenamejson+"','"+opco+"','"+feedtype+"','"+jsonobj[currcallrec].Usage_Type+"','"+jsonobj[currcallrec].Calling_Number+"','"+jsonobj[currcallrec].Called_Number+"','"+jsonobj[currcallrec].Source_Country+"','"+jsonobj[currcallrec].Source_Network+"','"+jsonobj[currcallrec].Source_Target+"','"+jsonobj[currcallrec].Target_Network+"','"+jsonobj[currcallrec].Start_Time+"','"+jsonobj[currcallrec].Call_Duration+"','"+jsonobj[currcallrec].Upload+"','"+jsonobj[currcallrec].Download+"','"+jsonobj[currcallrec].Amount+"','"+jsonobj[currcallrec].No_of_Events+"','"+jsonobj[currcallrec].Call_Interval+"','"+jsonobj[currcallrec].Annotation+"')";
							}
							else
							{
								insertstr = insertstr+",('"+filenamejson+"','"+opco+"','"+feedtype+"','"+jsonobj[currcallrec].Usage_Type+"','"+jsonobj[currcallrec].Calling_Number+"','"+jsonobj[currcallrec].Called_Number+"','"+jsonobj[currcallrec].Source_Country+"','"+jsonobj[currcallrec].Source_Network+"','"+jsonobj[currcallrec].Source_Target+"','"+jsonobj[currcallrec].Target_Network+"','"+jsonobj[currcallrec].Start_Time+"','"+jsonobj[currcallrec].Call_Duration+"','"+jsonobj[currcallrec].Upload+"','"+jsonobj[currcallrec].Download+"','"+jsonobj[currcallrec].Amount+"','"+jsonobj[currcallrec].No_of_Events+"','"+jsonobj[currcallrec].Call_Interval+"','"+jsonobj[currcallrec].Annotation+"')";
							}
							}		
						
						}
						
						if(continue_flag=='yes')
						{
						
										////var pool = new Pool(config);
											//console.log()
											pool.query("INSERT INTO \"cdr_bulkupload\" (\"filename\",\"opconame\",\"feedtype\",\"usagetype\",\"callingnumber\",\"callednumber\",\"sourcecountry\",\"sourcenetwork\",\"targetcountry\",\"targetnetwork\",\"starttime\",\"callduration\",\"upload\",\"download\",\"amount\",\"noofevents\",\"callinterval\",\"annotation\") VALUES "+insertstr , function(err,result,fields) {
											if(err) {
												return console.error('error running query', err);
											}
											else
											{	
											}
											});	
										setTimeout(function() {
										//select A.*, B."OPCO_NAME",B."Currency_Code",B."OPCO_CODE",B."OPCO_Description",C."kenan_usg_description",C."nmr",C."vone_c",C."vone_red",C."c_c",C."vge_d",C."vge_d_red",c."kenan_type_id_usg",c."vge_codes",D."vge_item_mobile",D."vge_item_roaming" from cdr_bulkupload A  left join "OPCO" B on A."opconame" = B."OPCO_Description"  left join "usage_type" C on A."usagetype"=C."kenan_type_id_usg" left join "usage_mo_mt_roaming" D on c."vge_codes" = D."vge_code" and  (A."filename" = 'usercdr20170415003936' and B."Status" = 'Active')
										//var pool = new Pool(config);
										pool.query('select A.*,B."Status",B."OPCO_NAME",B."Currency_Code",B."OPCO_CODE",B."OPCO_Description",C."kenan_usg_description",c."kenan_type_id_usg",c."vge_codes",D."vge_item_mobile",D."vge_item_roaming" from cdr_bulkupload A  left join "OPCO" B on A."opconame" = B."OPCO_Description"  left join "usage_type" C on A."usagetype"=C."kenan_type_id_usg" left join "usage_mo_mt_roaming" D on c."vge_codes" = D."vge_code" where  A."filename" = \''+filenamejson+'\' and B."Status"=\'Active\'', function(err,result,fields) {
										if(err) {
												return console.error('error running query', err);
											}
											else
											{
												var strtxt = '';
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
												var curropcocode;
												jmin = jmin.substring(jmin.length-2,jmin.length)
												var jsec = jdat.getSeconds();
												jsec = '0'+jsec;
												jsec = jsec.substring(jsec.length-2,jsec.length)
												var noofevents;
												var totlen1 = 0;
												//console.log(totlen1);
												for(var currselrow = 0;currselrow<result.length;currselrow++)
												{
														noofevents =  parseInt(result[currselrow].noofevents);	
														//console.log(isNaN(noofevents));
														if(isNaN(noofevents))
														{
															noofevents =1;
														}
														else
														{
															
														}
														totlen1 = totlen1+noofevents;
														//console.log(noofevents);
												}
												//console.log(totlen1);
												var totlen = "00000000000"+totlen1;
												var fcount = totlen.substring(totlen.length-11,totlen.length);
												cdrtxt = "HDR"+jyr+jmonth+jdate+jhr+jmin+jsec+fcount+"VGE             1.5                 "+"\r\n";
												var hdrtxt = cdrtxt;
												var randfileid = 	Math.floor(100 + Math.random() * 900);
												var currid = Math.floor(100000000 + Math.random() * 900000000);
												console.log(result[0].OPCO_NAME);
												var curropconamecarr= result[0].OPCO_NAME.split('CSA_');
												var curropcocode= result[0].OPCO_CODE;
												var curropconamec = 	curropconamecarr[1];
												var ffid = (curropcocode+"0000"+currid).substring(0,11);
												var filename= 'ARBOR_VGE_CSAUSAGE_'+curropconamec+"_"+jyr+jmonth+jdate+jhr+jmin+jsec+'_'+randfileid+'_'+ffid;
												//console.log(result.length);
												for(var currselrow = 0;currselrow<result.length;currselrow++)
												{
													var njson = result[currselrow]
													var entrow = 'no';
													var feedtype = '';
													var opconame = '';
													var proposition = '';
													var callingnumber = '';
													var callednumber= '';
													var timestamp= '';
													var sourcecountry= '';
													var SourceNetwork= '';
													var UsageType='';
													var TargetCountry='';
													var Currency_Code='';
													var TargetNetwork='';
													var StartTime='';
													var CallDuration='';
													var Upload='';
													var Download='';
													var opco_currency_code='';
													var Annotation='';
													var OPCO_CODE='';
													var OPCO_Description='';
													var OPCORatedAmount='';
													var Amount=0;
													var kenandesc='';
													var kenan_usg_description='';
													var kenan_type_id_usg='';
													var noofevents='';
													var callinterval='';
													var vge_codes='';
													var vge_item_mobile='';
													var vge_item_roaming='';
													//for(key in njson)
													//{
													feedtype = result[currselrow].feedtype;		
													opconame =  result[currselrow].opconame;		
													UsageType =result[currselrow].usagetype;		
													callingnumber = result[currselrow].callingnumber;		
													callednumber = result[currselrow].callednumber;		
													sourcecountry = result[currselrow].sourcecountry;		
													SourceNetwork = result[currselrow].sourcenetwork;		
													TargetCountry = result[currselrow].targetcountry;		
													TargetNetwork = result[currselrow].targetnetwork;		
													StartTime = result[currselrow].starttime;		
													var callyear =StartTime.substring(0,4);
													var callmth =StartTime.substring(4,6);
													var calldte =StartTime.substring(6,8);
													var callhh =StartTime.substring(8,10);
													var callmm =StartTime.substring(10,12);
													var callss =StartTime.substring(12,14);
													StartTime = callyear+'-'+callmth+'-'+calldte+' '+callhh+':'+callmm+':'+callss;
													//console.log(StartTime);
													var tstp =new Date(StartTime);
													CallDuration = result[currselrow].callduration;		
													Upload = result[currselrow].upload;		
													Download = result[currselrow].download;		
													OPCORatedAmount = result[currselrow].amount;
													//console.log(OPCORatedAmount);
													if(OPCORatedAmount === '')
													{
														OPCORatedAmount = 0;
													}		
													Annotation = result[currselrow].annotation;		
													OPCO_CODE = result[currselrow].OPCO_CODE;		
													OPCO_Description = result[currselrow].OPCO_Description;		
													kenan_usg_description = result[currselrow].kenan_usg_description;		
													kenan_type_id_usg = result[currselrow].kenan_type_id_usg;		
													vge_codes = result[currselrow].vge_codes;		
													vge_item_mobile = result[currselrow].vge_item_mobile;		
													vge_item_roaming = result[currselrow].vge_item_roaming;		
													Currency_Code = result[currselrow].Currency_Code;		
													noofevents = result[currselrow].noofevents;
													if(noofevents === '')
													{
														noofevents = 1;
													}		
													callinterval = result[currselrow].callinterval;		
													for(currite = 1;currite<=noofevents;currite++)
													{	
														if(currite === 1)
														{
															timestamp = StartTime;
														}	
														else
														{
															if(callinterval === 'Every Second')
															{
																tstp.setSeconds(tstp.getSeconds() + 1);
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
																timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;

															}	
															if(callinterval === 'Once a Minute')
															{
																tstp.setSeconds(tstp.getSeconds() + 60);
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
																timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
															}
															if(callinterval === 'Hourly')
															{
																tstp.setSeconds(tstp.getSeconds() + 3600);
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
																timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
																
															}
															if(callinterval === 'Daily')
															{
																tstp.setSeconds(tstp.getSeconds() + 86400);
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
																timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
															}
															if(callinterval === 'Weekly')
															{
																tstp.setSeconds(tstp.getSeconds() + 604800);
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
																timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
															}
														}
														timestamp = timestamp.replace(" ","");
														timestamp = timestamp.replace("-","");
														timestamp = timestamp.replace("-","");
														timestamp = timestamp.replace(":","");
														timestamp = timestamp.replace(":","");
														timestamp = timestamp+'              ';
														timestamp = timestamp.substring(0,14);		
														currid = currid+1;
														curropcocode = OPCO_CODE;
														anumber = callingnumber+'                                                                        ';
														anumber = anumber.substring(0,72);
														bnumber = callednumber+'                                                                        ';
														bnumber = bnumber.substring(0,72);
														customer_tag = '                              ';
														duration = CallDuration+'                  ';
														duration = duration.substring(0,18);
														secondunit= Upload+'                  ';
														secondunit = secondunit.substring(0,18);
														thirdunit = Download+'                  ';
														thirdunit = thirdunit.substring(0,18);
														usagecode = kenan_type_id_usg+'          ';
														usagecode = usagecode.substring(0,10);
														billclass = '      ';
														provider_id = '       ';
														
														//timestamp =StartTime; opconame
														
														// Amount formatting- Updated Logic ***********
														// Updated amount formatting logic with round-off to two decimals for all the OPCO's	
															var input;
															var f_input;
															var str_input;
															var output;
															input = OPCORatedAmount;   
															str_input = input.toString();
															f_input = parseFloat(input);	
															
															
															if(str_input.indexOf('.')==-1)
															{

																if(str_input!='0')
																{
																  //output = str_input.replace(/0+$/,'');
																  output = (parseInt(str_input))*100
																}else if(str_input=='0'){
																  output =str_input;
																}	
															
															}else{
																var amount_container = str_input.split('.')
																var amt_prefix = amount_container[0];
																var n = amount_container[1].length;		

																		if (n==0)
																		{
																			output = (parseInt(amt_prefix))*100		
																		}else if(n==1)
																		{
																			if(amount_container[1]=='0')
																			{ output =  (parseInt(amt_prefix))*100 }
																			else
																			{
																				output = (Math.round((f_input * 1000)/10)/100).toFixed(1);    
																				output = parseInt(parseFloat((output*100).toFixed(2)));
																			}
																		}
																		else if(n==2 || n>2 )
																		{
																			output = (Math.round((f_input * 1000)/10)/100).toFixed(2);    
																			output = parseInt(parseFloat((output*100).toFixed(2)));				
																		}
																
															}														
														
														Amount = (output.toString())+'                  ';	
														Amount = Amount.substring(0,18);  
														if(vge_item_mobile === 'MT')
														{
															if(vge_item_roaming === 'I' || vge_item_roaming === 'N')
															{
																External_id = callednumber+'                                                                        ';
															}
															else
															{
																External_id = callingnumber+'                                                                        ';
															}
														}
														else
														{
															External_id = callingnumber+'                                                                        ';
														}
														External_id = External_id.substring(0,72);
														Annotation = Annotation+"                                                                                                                                                                                                                                                               ";
														Annotation = Annotation.substring(0,255);
														//Opco_data_date_flag = jsonobj[currcallrec].Opco_data_date_flag;
														opco_currency_code = Currency_Code+'     ';
														opco_currency_code = opco_currency_code.substring(0,5);
														if(secondunit!=0 || thirdunit !=0)
														{
															duration = 0;
															duration = parseInt(secondunit)+parseInt(thirdunit);
															duration = duration+'                  ';
															duration = duration.substring(0,18);
														}
														//cdrtxt 
														cdrtxt = cdrtxt+"VGE"+curropcocode+"0000"+currid+"   4"+anumber+bnumber+customer_tag+External_id+timestamp+duration+usagecode+billclass+provider_id+secondunit+thirdunit+"     "+opco_currency_code+"0  "+Amount+Annotation+"\r\n";
														rrow = rrow+1
														strtxt = strtxt+" "+proposition+" "+feedtype+" "+opconame+" "+callingnumber+" "+callednumber+" "+sourcecountry+" "+SourceNetwork+" "+TargetCountry+" "+TargetNetwork+" "+StartTime+" "+CallDuration+" "+Upload+" "+Download+" "+OPCORatedAmount+" "+Annotation+" "+OPCO_CODE+" "+OPCO_Description+" "+kenan_usg_description+" "+kenan_type_id_usg+" "+vge_codes+" "+vge_item_mobile+" "+vge_item_roaming+"\r\n"
													}
													
												//}	
												
												}
												var traitxt = hdrtxt.replace("HDR","TRA");
												cdrtxt = cdrtxt+traitxt;
												//console.log(cdrtxt);
												fs.writeFile('TestData/'+filename, cdrtxt,  function(err){
													//res.send(traitxt+'||'+filename);
													//res.sendFile(path.join(__dirname,'TestData', filename));
													res.download(path.join(__dirname, 'TestData', filename));
												});
												//console.log(strtxt);
												console.log(rrow);
												
											}
										});
										console.log('inserting Data into DB');}, 1000);	
						}else{
								if(continue_flag=='no')
								
								{
										
										var workbook =  new excel.Workbook();
										
										workbook.xlsx.readFile('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function()
											{ 
															if (continue_flag=='no'){
																	var worksheet = workbook.getWorksheet(1);
																	var mac_spec_sheet_name = worksheet.name
																	
																	if(header_flaw =='yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(16).value = 'Remarks'
																		if(mac_spec_sheet_name=='UsageSpecification')
																		{
																		  row.getCell(16).value = 'Column Headers are Incorrect please give correct one`s .!!'
																		}else{
																		  row.getCell(16).value = 'Please provide the correct worksheet name `UsageSpecification` .!!'
																		}																		
																		remarks.commit();
																		row.commit();																	
																	}else if(call_int_flaw =='yes' )
																	{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(16).value = 'Remarks'
																		row.getCell(16).value = 'Please provide the valid `Call_Interval` .!!'
																		remarks.commit();
																		row.commit();																	
																	}else{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(16).value = 'Remarks'
																		row.getCell(16).value = 'Incorrect Mandatory Field/s kindly provide the same .!!'
																		remarks.commit();
																		row.commit();
																	}																	
															}	
													
														workbook.xlsx.writeFile('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function(err){
														if(err){}
														else{
															console.log('rowid2:'+row_ref)
															workbook.save;
															workbook.close;
															res.download(path.join(__dirname, 'BulkCDRGeneration', 'usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'));
														}
														});
													
													
											});		
										
															
								}						
							//console.log('Exception Captured')
							//return;
						}


										
					}
				});
			}
				//res.sendFile(path.join(__dirname,'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
		
    });
});*/
app.post('/uploadcdr',function(req,res){
		//console.log(req.query.retval);
		
		var retvalarr = req.query.retval.split('|');
		var opco = retvalarr[0];
		var feedtype = retvalarr[1];
		var sampleFile = req.files.usercdr; 
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
		var curropcocode;
		jmin = jmin.substring(jmin.length-2,jmin.length)
		var jsec = jdat.getSeconds();
		jsec = '0'+jsec;
		jsec = jsec.substring(jsec.length-2,jsec.length);
		sampleFile.mv('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx', function(err) {
		if (err)
		{
			return res.status(500).send(err);
		}
		else
		{
			var rrow = 0;
			var filenamejson = 'usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec;
			var currfilepath = './BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'
			fs.appendFile('BulkCDRGeneration/Master_Temp_to_Store_cdr_Formatting_Status.txt', "\r\n"+filenamejson+'|'+opco+'|'+feedtype+'|New',  function(err){
			////var pool = new Pool(config);	
			var exec = require("child_process").exec
			exec('generateannotation-xls.vbs').unref()	
			if(err) {
				return console.error('Error running update BPF Record in Master Temp file .!!', err);
			}	
			else
			{
				var Temp_content1 = ""
				var fstatus = 'New'
				waitUntil()
				.interval(500)
				.times(Infinity)
				.condition(function() {
				fs.readFile('BulkCDRGeneration/Master_Temp_to_Store_cdr_Formatting_Status.txt', 'utf8', function(err, data) {
				if (err){
					return console.error('Error reading BPF Record in Master Temp file .!!', err);
				}
				else
				{
					console.log('OK read the Master Temp file !!');
					console.log(data)
					var Temp_content = data.toString();
					console.log(Temp_content);
					if(Temp_content.indexOf(fstatus) ===-1)
					{
						Temp_content1 ="Update Done"
					}
					console.log(Temp_content1);
					
				}		
				});
				return (Temp_content1 == "Update Done" ? true : false);
				})
				.done(function(result) {
					node_xlsxj({
					input: currfilepath,  // input xls 
					output: "./TempJson/"+filenamejson[0]+"json", // output json 
					sheet: "UsageSpecification"  // specific sheetname 
					}, function(err,result,fields) {
					if(err) {
						console.error(err);
					} else 
					{
						var jsonobj = result;
						var totlen = jsonobj.length;
						var insertstr = '';
						totlen1 = jsonobj.length;
						var continue_flag ;
						var row_ref;
						continue_flag= 'yes'
						var header_flaw;
						header_flaw = 'no'
						var call_int_flaw;
						call_int_flaw = 'no'
						for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
						{
							
							if(jsonobj[currcallrec].Usage_Type != "")
							{
							//Column Header validations
							if( (jsonobj[currcallrec].hasOwnProperty('Usage_Type'))  && (jsonobj[currcallrec].hasOwnProperty('Calling_Number'))  && (jsonobj[currcallrec].hasOwnProperty('Called_Number'))  && (jsonobj[currcallrec].hasOwnProperty('Source_Country') )  && (jsonobj[currcallrec].hasOwnProperty('Source_Network'))   && (jsonobj[currcallrec].hasOwnProperty('Target_Country')) && (jsonobj[currcallrec].hasOwnProperty('Target_Network'))  && (jsonobj[currcallrec].hasOwnProperty('Start_Time'))  && (jsonobj[currcallrec].hasOwnProperty('Call_Duration'))  && (jsonobj[currcallrec].hasOwnProperty('Upload'))  && (jsonobj[currcallrec].hasOwnProperty('Download'))  && (jsonobj[currcallrec].hasOwnProperty('Amount'))  && (jsonobj[currcallrec].hasOwnProperty('No_of_Events'))  && (jsonobj[currcallrec].hasOwnProperty('Call_Interval'))  && (jsonobj[currcallrec].hasOwnProperty('Annotation'))  ){
								console.log('All is well')					
							}else{
								// Error Handling								
								continue_flag = 'no'
								header_flaw ='yes'
								row_ref = currcallrec;
								break;														
							}						

							//Mandatory validations 
							if(jsonobj[currcallrec].Usage_Type == '' || jsonobj[currcallrec].Calling_Number == '' || jsonobj[currcallrec].Start_Time == '' || jsonobj[currcallrec].Call_Duration == '' || jsonobj[currcallrec].Called_Number == ''  )
							{
								//res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls'));
								
								// Error Handling								
								continue_flag = 'no'
								row_ref = currcallrec;
								break;	
							}
							
							if( parseInt(jsonobj[currcallrec].No_of_Events) > 1 && (jsonobj[currcallrec].Call_Interval == '' ) )
							{
								//res.download(path.join(__dirname, 'BulkMACGeneration', 'UserMAC'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xls'));
								
								// Error Handling								
								continue_flag = 'no'
								call_int_flaw = 'yes'
								row_ref = currcallrec;
								break;	
							}
							//Mandatory validations 							
						
						
							if(jsonobj[currcallrec].Usage_Type != '')
							{
							if(insertstr === '')
							{
								insertstr = "('"+filenamejson+"','"+opco+"','"+feedtype+"','"+jsonobj[currcallrec].Usage_Type+"','"+jsonobj[currcallrec].Calling_Number+"','"+jsonobj[currcallrec].Called_Number+"','"+jsonobj[currcallrec].Source_Country+"','"+jsonobj[currcallrec].Source_Network+"','"+jsonobj[currcallrec].Target_Country+"','"+jsonobj[currcallrec].Target_Network+"','"+jsonobj[currcallrec].Start_Time+"','"+jsonobj[currcallrec].Call_Duration+"','"+jsonobj[currcallrec].Upload+"','"+jsonobj[currcallrec].Download+"','"+jsonobj[currcallrec].Amount+"','"+jsonobj[currcallrec].No_of_Events+"','"+jsonobj[currcallrec].Call_Interval+"','"+jsonobj[currcallrec].Annotation+"')";
							}
							else
							{
								insertstr = insertstr+",('"+filenamejson+"','"+opco+"','"+feedtype+"','"+jsonobj[currcallrec].Usage_Type+"','"+jsonobj[currcallrec].Calling_Number+"','"+jsonobj[currcallrec].Called_Number+"','"+jsonobj[currcallrec].Source_Country+"','"+jsonobj[currcallrec].Source_Network+"','"+jsonobj[currcallrec].Target_Country+"','"+jsonobj[currcallrec].Target_Network+"','"+jsonobj[currcallrec].Start_Time+"','"+jsonobj[currcallrec].Call_Duration+"','"+jsonobj[currcallrec].Upload+"','"+jsonobj[currcallrec].Download+"','"+jsonobj[currcallrec].Amount+"','"+jsonobj[currcallrec].No_of_Events+"','"+jsonobj[currcallrec].Call_Interval+"','"+jsonobj[currcallrec].Annotation+"')";
							}
							}		
						
						}
					}	
					if(continue_flag=='yes')
					{
						////var pool = new Pool(config);
							//console.log()
							pool.query("INSERT INTO cdr_bulkupload (filename,opconame,feedtype,usagetype,callingnumber,callednumber,sourcecountry,sourcenetwork,targetcountry,targetnetwork,starttime,callduration,upload,download,amount,noofevents,callinterval,annotation) VALUES "+insertstr , function(err,result,fields) {
							if(err) {
								return console.error('error running query', err);
							}
							else
							{	
								//var pool = new Pool(config);
								//console.log()
								pool.query("INSERT INTO cdr_format_table (FileName,Status,Remarks) VALUES ('"+filenamejson+"','New','New')" , function(err,result,fields) {
								if(err) {
									return console.error('error running query', err);
								}
								else
								{
									setTimeout(function() {
									//select A.*, B."OPCO_NAME",B."Currency_Code",B."OPCO_CODE",B."OPCO_Description",C."kenan_usg_description",C."nmr",C."vone_c",C."vone_red",C."c_c",C."vge_d",C."vge_d_red",c."kenan_type_id_usg",c."vge_codes",D."vge_item_mobile",D."vge_item_roaming" from cdr_bulkupload A  left join "OPCO" B on A."opconame" = B."OPCO_Description"  left join "usage_type" C on A."usagetype"=C."kenan_type_id_usg" left join "usage_mo_mt_roaming" D on c."vge_codes" = D."vge_code" and  (A."filename" = 'usercdr20170415003936' and B."Status" = 'Active')
									//var pool = new Pool(config);
									pool.query('select A.*,B.Status,B.OPCO_NAME,B.Currency_Code,B.OPCO_CODE,B.OPCO_Description,C.kenan_usg_description,c.kenan_type_id_usg,c.vge_codes,D.vge_item_mobile,D.vge_item_roaming from cdr_bulkupload A  left join OPCO B on A.opconame = B.OPCO_Description  left join usage_type C on A.usagetype=C.kenan_type_id_usg left join usage_mo_mt_roaming D on c.vge_codes = D.vge_code where  A.filename = \''+filenamejson+'\' and B.Status=\'Active\'', function(err,result,fields) {
									if(err) {
											return console.error('error running query', err);
										}
										else
										{
											var strtxt = '';
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
											var curropcocode;
											jmin = jmin.substring(jmin.length-2,jmin.length)
											var jsec = jdat.getSeconds();
											jsec = '0'+jsec;
											jsec = jsec.substring(jsec.length-2,jsec.length)
											var noofevents;
											var totlen1 = 0;
											//console.log(totlen1);
											for(var currselrow = 0;currselrow<result.length;currselrow++)
											{
													noofevents =  parseInt(result[currselrow].noofevents);	
													//console.log(isNaN(noofevents));
													if(isNaN(noofevents))
													{
														noofevents =1;
													}
													else
													{
														
													}
													totlen1 = totlen1+noofevents;
													//console.log(noofevents);
											}
											//console.log(totlen1);
											var totlen = "00000000000"+totlen1;
											var fcount = totlen.substring(totlen.length-11,totlen.length);
											cdrtxt = "HDR"+jyr+jmonth+jdate+jhr+jmin+jsec+fcount+"VGE             1.5                 "+"\r\n";
											var hdrtxt = cdrtxt;
											var randfileid = 	Math.floor(100 + Math.random() * 900);
											var currid = Math.floor(100000000 + Math.random() * 900000000);
											console.log(result[0].OPCO_NAME);
											var curropconamecarr= result[0].OPCO_NAME.split('CSA_');
											var curropcocode= result[0].OPCO_CODE;
											var curropconamec = 	curropconamecarr[1];
											var ffid = (curropcocode+"0000"+currid).substring(0,11);
											var filename= 'ARBOR_VGE_CSAUSAGE_'+curropconamec+"_"+jyr+jmonth+jdate+jhr+jmin+jsec+'_'+randfileid+'_'+ffid;
											//console.log(result.length);
											for(var currselrow = 0;currselrow<result.length;currselrow++)
											{
												var njson = result[currselrow]
												var entrow = 'no';
												var feedtype = '';
												var opconame = '';
												var proposition = '';
												var callingnumber = '';
												var callednumber= '';
												var timestamp= '';
												var sourcecountry= '';
												var SourceNetwork= '';
												var UsageType='';
												var TargetCountry='';
												var Currency_Code='';
												var TargetNetwork='';
												var StartTime='';
												var CallDuration='';
												var Upload='';
												var Download='';
												var opco_currency_code='';
												var Annotation='';
												var OPCO_CODE='';
												var OPCO_Description='';
												var OPCORatedAmount='';
												var Amount=0;
												var kenandesc='';
												var kenan_usg_description='';
												var kenan_type_id_usg='';
												var noofevents='';
												var callinterval='';
												var vge_codes='';
												var vge_item_mobile='';
												var vge_item_roaming='';
												//for(key in njson)
												//{
												feedtype = result[currselrow].feedtype;		
												opconame =  result[currselrow].opconame;		
												UsageType =result[currselrow].usagetype;		
												callingnumber = result[currselrow].callingnumber;		
												callednumber = result[currselrow].callednumber;		
												sourcecountry = result[currselrow].sourcecountry;		
												SourceNetwork = result[currselrow].sourcenetwork;		
												TargetCountry = result[currselrow].targetcountry;		
												TargetNetwork = result[currselrow].targetnetwork;		
												StartTime = result[currselrow].starttime;		
												var callyear =StartTime.substring(0,4);
												var callmth =StartTime.substring(4,6);
												var calldte =StartTime.substring(6,8);
												var callhh =StartTime.substring(8,10);
												var callmm =StartTime.substring(10,12);
												var callss =StartTime.substring(12,14);
												StartTime = callyear+'-'+callmth+'-'+calldte+' '+callhh+':'+callmm+':'+callss;
												//console.log(StartTime);
												var tstp =new Date(StartTime);
												CallDuration = result[currselrow].callduration;		
												Upload = result[currselrow].upload;		
												Download = result[currselrow].download;		
												OPCORatedAmount = result[currselrow].amount;
												//console.log(OPCORatedAmount);
												if(OPCORatedAmount === '')
												{
													OPCORatedAmount = 0;
												}		
												Annotation = result[currselrow].annotation;		
												OPCO_CODE = result[currselrow].OPCO_CODE;		
												OPCO_Description = result[currselrow].OPCO_Description;		
												kenan_usg_description = result[currselrow].kenan_usg_description;		
												kenan_type_id_usg = result[currselrow].kenan_type_id_usg;		
												vge_codes = result[currselrow].vge_codes;		
												vge_item_mobile = result[currselrow].vge_item_mobile;		
												vge_item_roaming = result[currselrow].vge_item_roaming;		
												Currency_Code = result[currselrow].Currency_Code;		
												noofevents = result[currselrow].noofevents;
												if(noofevents === '')
												{
													noofevents = 1;
												}		
												callinterval = result[currselrow].callinterval;		
												for(currite = 1;currite<=noofevents;currite++)
												{	
													if(currite === 1)
													{
														timestamp = StartTime;
													}	
													else
													{
														if(callinterval === 'Every Second')
														{
															tstp.setSeconds(tstp.getSeconds() + 1);
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
															timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;

														}	
														if(callinterval === 'Once a Minute')
														{
															tstp.setSeconds(tstp.getSeconds() + 60);
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
															timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
														}
														if(callinterval === 'Hourly')
														{
															tstp.setSeconds(tstp.getSeconds() + 3600);
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
															timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
															
														}
														if(callinterval === 'Daily')
														{
															tstp.setSeconds(tstp.getSeconds() + 86400);
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
															timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
														}
														if(callinterval === 'Weekly')
														{
															tstp.setSeconds(tstp.getSeconds() + 604800);
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
															timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
														}
													}
													timestamp = timestamp.replace(" ","");
													timestamp = timestamp.replace("-","");
													timestamp = timestamp.replace("-","");
													timestamp = timestamp.replace(":","");
													timestamp = timestamp.replace(":","");
													timestamp = timestamp+'              ';
													timestamp = timestamp.substring(0,14);		
													currid = currid+1;
													curropcocode = OPCO_CODE;
													anumber = callingnumber+'                                                                        ';
													anumber = anumber.substring(0,72);
													bnumber = callednumber+'                                                                        ';
													bnumber = bnumber.substring(0,72);
													customer_tag = '                              ';
													duration = CallDuration+'                  ';
													duration = duration.substring(0,18);
													secondunit= Upload+'                  ';
													secondunit = secondunit.substring(0,18);
													thirdunit = Download+'                  ';
													thirdunit = thirdunit.substring(0,18);
													usagecode = kenan_type_id_usg+'          ';
													usagecode = usagecode.substring(0,10);
													billclass = '      ';
													provider_id = '       ';
													
													//timestamp =StartTime;
													// Amount formatting- Updated Logic ***********
													Amount = OPCORatedAmount;
													Float_Amount = parseFloat(OPCORatedAmount);
													Amount = Amount.toString();
													if (Amount.indexOf('.')==-1)
													{
														Amount = Amount;
													}	
													if(Amount.indexOf('.')!==-1)
													{
														var amount_container = Amount.split('.')
														Amount = amount_container[0];
														var n = amount_container[1].length;
														if (n==0)
														{
															Amount = Amount;		
														}else if(n==1)
														{
															if(amount_container[1]==0)
																{ Amount = Amount;}
															else
															{Amount = parseInt(Float_Amount*10);}
														}
														else if(n==2)
														{
															if(amount_container[1].substring(1,2)==0)
															{
																Amount = ((parseInt(Float_Amount*100)).toString());
																Amount = Amount.substring(0,Amount.length-1);
															}
															else
															{	Amount = parseInt(Float_Amount*100);}			
														}
														else
														{			
														}		
													}
													// Amount formatting
													Amount = Amount+'                  ';	
													Amount = Amount.substring(0,18);  
													if(vge_item_mobile === 'MT')
													{
														External_id = callednumber+'                                                                        ';
													}
													else
													{
														External_id = callingnumber+'                                                                        ';
													}
													
													External_id = External_id.substring(0,72);
													var annotsplt = Annotation.split("|");
													var roamindicator = annotsplt[8]
													if(roamindicator === "1")
													{	
														if (vge_item_mobile == "MO")
														{
															anumber = annotsplt[4]+'                                                                        ';
															anumber = anumber.substring(0,72);
														}
														else if(vge_item_mobile == "MT")
														{
															bnumber = annotsplt[6]+'                                                                        ';
															bnumber = bnumber.substring(0,72);
														}
													}
													Annotation = Annotation+"                                                                                                                                                                                                                                                               ";
													Annotation = Annotation.substring(0,255);
													
													//Opco_data_date_flag = jsonobj[currcallrec].Opco_data_date_flag;
													opco_currency_code = Currency_Code+'     ';
													opco_currency_code = opco_currency_code.substring(0,5);
													if(secondunit!=0 || thirdunit !=0)
													{
														duration = 0;
														duration = parseInt(secondunit)+parseInt(thirdunit);
														duration = duration+'                  ';
														duration = duration.substring(0,18);
													}
													//cdrtxt 
													cdrtxt = cdrtxt+"VGE"+curropcocode+"0000"+currid+"   4"+anumber+bnumber+customer_tag+External_id+timestamp+duration+usagecode+billclass+provider_id+secondunit+thirdunit+"     "+opco_currency_code+"0  "+Amount+Annotation+"\r\n";
													rrow = rrow+1
													strtxt = strtxt+" "+proposition+" "+feedtype+" "+opconame+" "+callingnumber+" "+callednumber+" "+sourcecountry+" "+SourceNetwork+" "+TargetCountry+" "+TargetNetwork+" "+StartTime+" "+CallDuration+" "+Upload+" "+Download+" "+OPCORatedAmount+" "+Annotation+" "+OPCO_CODE+" "+OPCO_Description+" "+kenan_usg_description+" "+kenan_type_id_usg+" "+vge_codes+" "+vge_item_mobile+" "+vge_item_roaming+"\r\n"
												}
												
											//}	
											
											}
											var traitxt = hdrtxt.replace("HDR","TRA");
											cdrtxt = cdrtxt+traitxt;
											//console.log(cdrtxt);
											fs.writeFile('TestData/'+filename, cdrtxt,  function(err){
												//res.send(traitxt+'||'+filename);
												//res.sendFile(path.join(__dirname,'TestData', filename));
												res.download(path.join(__dirname, 'TestData', filename));
											});
											//console.log(strtxt);
											console.log(rrow);
											
										}
									});
									console.log('inserting Data into DB');}, 2000);
								}
								});
							}
						});	
						}	
						else
						{
								if(continue_flag=='no')
								
								{
										
										var workbook =  new excel.Workbook();
										
										workbook.xlsx.readFile('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function()
											{ 
															if (continue_flag=='no'){
																	var worksheet = workbook.getWorksheet(1);
																	var mac_spec_sheet_name = worksheet.name
																	
																	if(header_flaw =='yes'){
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref-1))
																		remarks.getCell(16).value = 'Remarks'
																		if(mac_spec_sheet_name=='UsageSpecification')
																		{
																		  row.getCell(16).value = 'Column Headers are Incorrect please give correct one`s .!!'
																		}else{
																		  row.getCell(16).value = 'Please provide the correct worksheet name `UsageSpecification` .!!'
																		}																		
																		remarks.commit();
																		row.commit();																	
																	}else if(call_int_flaw =='yes' )
																	{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(16).value = 'Remarks'
																		row.getCell(16).value = 'Please provide the valid `Call_Interval` .!!'
																		remarks.commit();
																		row.commit();																	
																	}else{
																		var row = worksheet.getRow(row_ref+2);
																		var remarks = worksheet.getRow(1);
																		console.log('rowid1:'+(row_ref))
																		remarks.getCell(16).value = 'Remarks'
																		row.getCell(16).value = 'Incorrect Mandatory Field/s kindly provide the same .!!'
																		remarks.commit();
																		row.commit();
																	}																	
															}	
													
														workbook.xlsx.writeFile('./BulkCDRGeneration/usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx').then(function(err){
														if(err){}
														else{
															console.log('rowid2:'+row_ref)
															workbook.save;
															workbook.close;
															res.download(path.join(__dirname, 'BulkCDRGeneration', 'usercdr'+jyr+jmonth+jdate+jhr+jmin+jsec+'.xlsx'));
														}
														});
													
													
											});		
										
															
								}						
							//console.log('Exception Captured')
							//return;
						}
					}
				});
				});
			}	
			});
		}	//res.sendFile(path.join(__dirname,'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
		
    });
});


app.get('/CDRTemplate', function (req, res) {
  sess = req.session;
  if(sess.email) {	
	res.sendFile(path.join(__dirname, 'BulkCDRGeneration', 'Bulk_CDR_Generation.xls'));
}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}
});

app.get('/BulkUploadCDR.html', function (req, res) {
  sess = req.session;
  if(sess.email) {	
	res.sendFile(path.join(__dirname, 'ui', 'BulkUploadCDR.html'));
}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}
});

app.get('/BulkUploadProvisioning.html', function (req, res) {
  sess = req.session;
  if(sess.email) {	
	res.sendFile(path.join(__dirname, 'ui', 'BulkUploadProvisioning.html'));
}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}
});

app.get('/admin', function (req, res) {
  sess = req.session;
  console.log(sess.email);
  var splittvalarr = sess.email.split("|");
  var useright = splittvalarr[1];
  if(sess.email) {	
	if(useright == 'admin')
	{
		res.send('done');
	}
	else
	{
		res.send('not cool');
	}
}
	else
	{
		res.send('not cool');
	}
});

app.get('/getusername', function (req, res) {
  sess = req.session;
  console.log(sess.email);
  var splittvalarr = sess.email.split("|");
  var username = splittvalarr[2]+'|'+splittvalarr[1];
  if(sess.email) {	
	res.send(username);
}
	else
	{
		res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
	}
});

app.get('/logout', function (req, res) {
console.log('logout');
	req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/Login.html');
  }
	});
});



/*app.get('/runselenium', function (req, res) {
    By = webdriver.By,
    until = webdriver.until;
	var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
	driver.get('http://www.google.com/ncr');
	driver.findElement(By.name('q')).sendKeys('webdriver');
	driver.findElement(By.name('btnG')).click();
	driver.wait(until.titleIs('webdriver - Google Search'), 1000);
	driver.quit();
	 res.send("complete");
});*/

app.get('/createBPFAccounts', function (req, res) {
  var returnedval = req.query.retval;
  console.log(returnedval);
  var jsonobj = JSON.parse(returnedval);
  var sheetname;
  var bpf_records_ref;
  var act_bpf_rec;
  var jdat =  new Date();
  var jyr = jdat.getFullYear();
  var jmonth = jdat.getMonth()+1;
  var BPF_A_M_input = [];
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
  var filename = 'BPF_'+jyr+jmonth+jdate+jhr+jmin+jsec;
  var read_opts = {"cellNF":true,"cellStyles":true,"bookVBA":true,"cellHTML":false};
  var myXlsx  = exapp.readFile('BPF/BPF.xlsm',read_opts);
  	
  exapp.writeFile(myXlsx,'BPF/'+filename+'_archive.xlsm');
  ////var pool = new Pool(config);
	pool.query("INSERT INTO BPF_format_table (FileName,Status,Remarks) VALUES ('"+filename+".xlsm','New','New')", function(err,result,fields) {
	var filestatus = 'New';
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		var fstatus = "new" 
		waitUntil()
		.interval(500)
		.times(Infinity)
		.condition(function() {
		//var pool = new Pool(config);
		pool.query("select Status From BPF_format_table where FileName = '"+filename+".xlsm'", function(err,result,fields) {
		if(err) {
			return console.error('error running query', err);
		}
		else
		{
			fstatus = result[0].Status;
		}
		});	
		return (fstatus == "Complete" ? true : false);
		})
		.done(function(result) {
			res.send(filename+'.xlsm');
		});
		
	}
	});
});


app.get('/CreateBPF', function (req, res) {
  var returnedval = req.query.retval;
  var jsonobj = JSON.parse(returnedval);
  var sheetname;
  var bpf_records_ref;
  var act_bpf_rec;
  var jdat =  new Date();
  var jyr = jdat.getFullYear();
  var jmonth = jdat.getMonth()+1;
  var BPF_A_M_input = [];
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
  var filename = 'BPF_'+jyr+jmonth+jdate+jhr+jmin+jsec;
 var read_opts = {"cellNF":true,"cellStyles":true,"bookVBA":true,"cellHTML":false};
  var myXlsx  = exapp.readFile('BPF/BPF.xlsm',read_opts);
  var sheetrow1 = 6;
  var sheetrow2 = 6;
  var sheetrow3 = 6;
  var sheetrow4 = 6;
  var sheetrow5 = 6;
  for(var currrec = 0;currrec<jsonobj.length;currrec++)
  {
	console.log(jsonobj[currrec].usecase);
	bpf_records_ref = parseInt(jsonobj[currrec].bpf_records,10);
	act_bpf_rec=0;
	act_bpf_rec = parseInt(bpf_records_ref,10);
	console.log('Bpf_record count :  '+act_bpf_rec);
	if(jsonobj[currrec].usecase === 'Add')
	{
						var Acc_create_dup_rec_flag ='No'
						//logic to capture the duplicate values flag to send the unique combinations to Account Create
						var temp = jsonobj[currrec].propadd + jsonobj[currrec].BAN_add + jsonobj[currrec].parentaccidad + jsonobj[currrec].Date_Add + jsonobj[currrec].usridad;
						var counter = 0;
							if (temp === "" || temp === null) {
							} else
							{
								BPF_A_M_input.push(temp);  // the array will dynamically grow
							}	
							for(var i = 0; i <= BPF_A_M_input.length; i++) {
									if(BPF_A_M_input[i] === temp) {
									   counter = counter+1;
									}
							}
							temp="";									
					// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI 
					if(act_bpf_rec=='' || act_bpf_rec<1 || act_bpf_rec==1 || act_bpf_rec>5000 || act_bpf_rec!==act_bpf_rec)
					{
						if(jsonobj[currrec].propadd != 'Please Select')
						{
							sheetname = 'SERVICE_CREATE';
							myXlsx.Sheets[sheetname]['B'+sheetrow1] = {"v":jsonobj[currrec].propadd,"t":"s","r":"<t>"+jsonobj[currrec].propadd+"</t>","h":jsonobj[currrec].propadd};
							myXlsx.Sheets[sheetname]['C'+sheetrow1] = {"v":jsonobj[currrec].serviceidad,"t":"s","r":"<t>"+jsonobj[currrec].serviceidad+"</t>","h":jsonobj[currrec].serviceidad};
							myXlsx.Sheets[sheetname]['D'+sheetrow1] = {"v":jsonobj[currrec].usridad,"t":"s","r":"<t>"+jsonobj[currrec].usridad+"</t>","h":jsonobj[currrec].usridad};
							myXlsx.Sheets[sheetname]['E'+sheetrow1] = {"v":jsonobj[currrec].parentaccidad,"t":"s","r":"<t>"+jsonobj[currrec].parentaccidad+"</t>","h":jsonobj[currrec].parentaccidad};
							myXlsx.Sheets[sheetname]['F'+sheetrow1] = {"v":jsonobj[currrec].BAN_add,"t":"s","r":"<t>"+jsonobj[currrec].BAN_add+"</t>","h":jsonobj[currrec].parentaccidad};
							myXlsx.Sheets[sheetname]['G'+sheetrow1] = {"v":jsonobj[currrec].Date_Add,"t":"s","r":"<t>"+jsonobj[currrec].Date_Add+"</t>","h":jsonobj[currrec].Date_Add};
							myXlsx.Sheets[sheetname]['I'+sheetrow1] = {"v":jsonobj[currrec].priceplanad,"t":"s","r":"<t>"+jsonobj[currrec].priceplanad+"</t>","h":jsonobj[currrec].priceplanad};
							myXlsx.Sheets[sheetname]['J'+sheetrow1] = {"v":jsonobj[currrec].flatchrg,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg+"</t>","h":jsonobj[currrec].flatchrg};
							myXlsx.Sheets[sheetname]['K'+sheetrow1] = {"v":jsonobj[currrec].flatchrg2,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg2+"</t>","h":jsonobj[currrec].flatchrg2};
							myXlsx.Sheets[sheetname]['L'+sheetrow1] = {"v":jsonobj[currrec].flatchrg3,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg3+"</t>","h":jsonobj[currrec].flatchrg3};
							myXlsx.Sheets[sheetname]['M'+sheetrow1] = {"v":jsonobj[currrec].Number_Masking,"t":"s","r":"<t>"+jsonobj[currrec].Number_Masking+"</t>","h":jsonobj[currrec].Number_Masking};
							myXlsx.Sheets[sheetname]['N'+sheetrow1] = {"v":jsonobj[currrec].Device_Type,"t":"s","r":"<t>"+jsonobj[currrec].Device_Type+"</t>","h":jsonobj[currrec].Device_Type};
							sheetrow1 = sheetrow1+1								

							if(counter==1 || BPF_A_M_input.length =='1')
							{
								sheetname = 'ACCOUNT_CREATE';
								myXlsx.Sheets[sheetname]['B'+sheetrow4] = {"v":jsonobj[currrec].propadd,"t":"s","r":"<t>"+jsonobj[currrec].propadd+"</t>","h":jsonobj[currrec].propadd};
								myXlsx.Sheets[sheetname]['C'+sheetrow4] = {"v":"User","t":"s","r":"<t>User</t>","h":"User"};
								myXlsx.Sheets[sheetname]['E'+sheetrow4] = {"v":jsonobj[currrec].Date_Add,"t":"s","r":"<t>"+jsonobj[currrec].Date_Add+"</t>","h":jsonobj[currrec].Date_Add};
								myXlsx.Sheets[sheetname]['H'+sheetrow4] = {"v":jsonobj[currrec].parentaccidad,"t":"s","r":"<t>"+jsonobj[currrec].parentaccidad+"</t>","h":jsonobj[currrec].parentaccidad};
								myXlsx.Sheets[sheetname]['AM'+sheetrow4] = {"v":jsonobj[currrec].AL_Fcharge1,"t":"s","r":"<t>"+jsonobj[currrec].AL_Fcharge1+"</t>","h":jsonobj[currrec].AL_Fcharge1};
								myXlsx.Sheets[sheetname]['AN'+sheetrow4] = {"v":jsonobj[currrec].AL_Fcharge2,"t":"s","r":"<t>"+jsonobj[currrec].AL_Fcharge2+"</t>","h":jsonobj[currrec].AL_Fcharge2};
								myXlsx.Sheets[sheetname]['AO'+sheetrow4] = {"v":jsonobj[currrec].AL_Fcharge3,"t":"s","r":"<t>"+jsonobj[currrec].AL_Fcharge3+"</t>","h":jsonobj[currrec].AL_Fcharge3};
								myXlsx.Sheets[sheetname]['I'+sheetrow4] = {"v":jsonobj[currrec].usridad,"t":"s","r":"<t>"+jsonobj[currrec].usridad+"</t>","h":jsonobj[currrec].usridad};
								myXlsx.Sheets[sheetname]['AA'+sheetrow4] = {"v":jsonobj[currrec].usridad,"t":"s","r":"<t>"+jsonobj[currrec].usridad+"</t>","h":jsonobj[currrec].usridad};
								myXlsx.Sheets[sheetname]['AL'+sheetrow4] = {"v":jsonobj[currrec].priceplanad,"t":"s","r":"<t>"+jsonobj[currrec].priceplanad+"</t>","h":jsonobj[currrec].priceplanad};
								//myXlsx.Sheets[sheetname]['AM'+sheetrow4] = {"v":jsonobj[currrec].flatchrg,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg+"</t>","h":jsonobj[currrec].flatchrg};
								//myXlsx.Sheets[sheetname]['AN'+sheetrow4] = {"v":jsonobj[currrec].flatchrg2,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg2+"</t>","h":jsonobj[currrec].flatchrg2};
								//myXlsx.Sheets[sheetname]['AO'+sheetrow4] = {"v":jsonobj[currrec].flatchrg3,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg3+"</t>","h":jsonobj[currrec].flatchrg3};
															
								sheetrow4 = sheetrow4+1	
							}	
						}
					}
					if( act_bpf_rec>1 && act_bpf_rec<5000 )
					{
							if(counter==1 || BPF_A_M_input.length =='1')
							{
								sheetname = 'ACCOUNT_CREATE';
								myXlsx.Sheets[sheetname]['B'+sheetrow4] = {"v":jsonobj[currrec].propadd,"t":"s","r":"<t>"+jsonobj[currrec].propadd+"</t>","h":jsonobj[currrec].propadd};
								myXlsx.Sheets[sheetname]['C'+sheetrow4] = {"v":"User","t":"s","r":"<t>User</t>","h":"User"};
								myXlsx.Sheets[sheetname]['E'+sheetrow4] = {"v":jsonobj[currrec].Date_Add,"t":"s","r":"<t>"+jsonobj[currrec].Date_Add+"</t>","h":jsonobj[currrec].Date_Add};
								myXlsx.Sheets[sheetname]['H'+sheetrow4] = {"v":jsonobj[currrec].parentaccidad,"t":"s","r":"<t>"+jsonobj[currrec].parentaccidad+"</t>","h":jsonobj[currrec].parentaccidad};
								myXlsx.Sheets[sheetname]['AM'+sheetrow4] = {"v":jsonobj[currrec].AL_Fcharge1,"t":"s","r":"<t>"+jsonobj[currrec].AL_Fcharge1+"</t>","h":jsonobj[currrec].AL_Fcharge1};
								myXlsx.Sheets[sheetname]['AN'+sheetrow4] = {"v":jsonobj[currrec].AL_Fcharge2,"t":"s","r":"<t>"+jsonobj[currrec].AL_Fcharge2+"</t>","h":jsonobj[currrec].AL_Fcharge2};
								myXlsx.Sheets[sheetname]['AO'+sheetrow4] = {"v":jsonobj[currrec].AL_Fcharge3,"t":"s","r":"<t>"+jsonobj[currrec].AL_Fcharge3+"</t>","h":jsonobj[currrec].AL_Fcharge3};
								myXlsx.Sheets[sheetname]['I'+sheetrow4] = {"v":jsonobj[currrec].usridad,"t":"s","r":"<t>"+jsonobj[currrec].usridad+"</t>","h":jsonobj[currrec].usridad};
								myXlsx.Sheets[sheetname]['AA'+sheetrow4] = {"v":jsonobj[currrec].usridad,"t":"s","r":"<t>"+jsonobj[currrec].usridad+"</t>","h":jsonobj[currrec].usridad};
								myXlsx.Sheets[sheetname]['AL'+sheetrow4] = {"v":jsonobj[currrec].priceplanad,"t":"s","r":"<t>"+jsonobj[currrec].priceplanad+"</t>","h":jsonobj[currrec].priceplanad};
								//myXlsx.Sheets[sheetname]['AM'+sheetrow4] = {"v":jsonobj[currrec].flatchrg,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg+"</t>","h":jsonobj[currrec].flatchrg};
								//myXlsx.Sheets[sheetname]['AN'+sheetrow4] = {"v":jsonobj[currrec].flatchrg2,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg2+"</t>","h":jsonobj[currrec].flatchrg2};
								//myXlsx.Sheets[sheetname]['AO'+sheetrow4] = {"v":jsonobj[currrec].flatchrg3,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg3+"</t>","h":jsonobj[currrec].flatchrg3};								
								sheetrow4 = sheetrow4+1
							}	
						for(var Rec_ini = 0;Rec_ini<act_bpf_rec;Rec_ini++)
						{
							console.log(Rec_ini)
							console.log(act_bpf_rec)
							if(jsonobj[currrec].propadd != 'Please Select')
							{
							sheetname = 'SERVICE_CREATE';
							myXlsx.Sheets[sheetname]['B'+sheetrow1] = {"v":jsonobj[currrec].propadd,"t":"s","r":"<t>"+jsonobj[currrec].propadd+"</t>","h":jsonobj[currrec].propadd};
							myXlsx.Sheets[sheetname]['C'+sheetrow1] = {"v":parseInt(jsonobj[currrec].serviceidad)+Rec_ini,"t":"s","r":"<t>"+jsonobj[currrec].serviceidad+"</t>","h":jsonobj[currrec].serviceidad};
							myXlsx.Sheets[sheetname]['D'+sheetrow1] = {"v":jsonobj[currrec].usridad,"t":"s","r":"<t>"+jsonobj[currrec].usridad+"</t>","h":jsonobj[currrec].usridad};
							myXlsx.Sheets[sheetname]['E'+sheetrow1] = {"v":jsonobj[currrec].parentaccidad,"t":"s","r":"<t>"+jsonobj[currrec].parentaccidad+"</t>","h":jsonobj[currrec].parentaccidad};
							myXlsx.Sheets[sheetname]['F'+sheetrow1] = {"v":jsonobj[currrec].BAN_add,"t":"s","r":"<t>"+jsonobj[currrec].BAN_add+"</t>","h":jsonobj[currrec].parentaccidad};
							myXlsx.Sheets[sheetname]['G'+sheetrow1] = {"v":jsonobj[currrec].Date_Add,"t":"s","r":"<t>"+jsonobj[currrec].Date_Add+"</t>","h":jsonobj[currrec].Date_Add};
							myXlsx.Sheets[sheetname]['I'+sheetrow1] = {"v":jsonobj[currrec].priceplanad,"t":"s","r":"<t>"+jsonobj[currrec].priceplanad+"</t>","h":jsonobj[currrec].priceplanad};
							myXlsx.Sheets[sheetname]['J'+sheetrow1] = {"v":jsonobj[currrec].flatchrg,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg+"</t>","h":jsonobj[currrec].flatchrg};
							myXlsx.Sheets[sheetname]['K'+sheetrow1] = {"v":jsonobj[currrec].flatchrg2,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg2+"</t>","h":jsonobj[currrec].flatchrg};
							myXlsx.Sheets[sheetname]['L'+sheetrow1] = {"v":jsonobj[currrec].flatchrg3,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg3+"</t>","h":jsonobj[currrec].flatchrg};
							myXlsx.Sheets[sheetname]['M'+sheetrow1] = {"v":jsonobj[currrec].Number_Masking,"t":"s","r":"<t>"+jsonobj[currrec].Number_Masking+"</t>","h":jsonobj[currrec].flatchrg};
							myXlsx.Sheets[sheetname]['N'+sheetrow1] = {"v":jsonobj[currrec].Device_Type,"t":"s","r":"<t>"+jsonobj[currrec].Device_Type+"</t>","h":jsonobj[currrec].flatchrg};
							sheetrow1 = sheetrow1+1								
							}						  
						}
					}			
	}
	else if(jsonobj[currrec].usecase === 'Move')
	{

					if(act_bpf_rec=='' || act_bpf_rec<1 || act_bpf_rec==1 || act_bpf_rec>5000 || act_bpf_rec!==act_bpf_rec)
					{
								if(jsonobj[currrec].propmov != 'Please Select')
								{
									sheetname = 'SERVICE_MODIFY';
									myXlsx.Sheets[sheetname]['B'+sheetrow2] = {"v":jsonobj[currrec].propmov,"t":"s","r":"<t>"+jsonobj[currrec].propmov+"</t>","h":jsonobj[currrec].propmov};
									myXlsx.Sheets[sheetname]['C'+sheetrow2] = {"v":jsonobj[currrec].servmov,"t":"s","r":"<t>"+jsonobj[currrec].servmov+"</t>","h":jsonobj[currrec].servmov};
									//myXlsx.Sheets[sheetname]['D'+sheetrow2] = {"v":jsonobj[currrec].usridmov,"t":"s","r":"<t>"+jsonobj[currrec].usridmov+"</t>","h":jsonobj[currrec].usridmov};
									myXlsx.Sheets[sheetname]['G'+sheetrow2] = {"v":jsonobj[currrec].Date_Mov,"t":"s","r":"<t>"+jsonobj[currrec].Date_Mov+"</t>","h":jsonobj[currrec].Date_Mov};
									myXlsx.Sheets[sheetname]['I'+sheetrow2] = {"v":jsonobj[currrec].ppmov,"t":"s","r":"<t>"+jsonobj[currrec].ppmov+"</t>","h":jsonobj[currrec].ppmov};
									myXlsx.Sheets[sheetname]['J'+sheetrow2] = {"v":jsonobj[currrec].fcmov,"t":"s","r":"<t>"+jsonobj[currrec].fcmov+"</t>","h":jsonobj[currrec].fcmov};
									myXlsx.Sheets[sheetname]['K'+sheetrow2] = {"v":jsonobj[currrec].flatchrg2_mov,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg2_mov+"</t>","h":jsonobj[currrec].flatchrg2_mov};
									myXlsx.Sheets[sheetname]['L'+sheetrow2] = {"v":jsonobj[currrec].flatchrg3_mov,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg3_mov+"</t>","h":jsonobj[currrec].flatchrg3_mov};
									myXlsx.Sheets[sheetname]['M'+sheetrow2] = {"v":jsonobj[currrec].Number_Masking_mov,"t":"s","r":"<t>"+jsonobj[currrec].Number_Masking_mov+"</t>","h":jsonobj[currrec].Number_Masking_mov};
									myXlsx.Sheets[sheetname]['N'+sheetrow2] = {"v":jsonobj[currrec].Device_Type_mov,"t":"s","r":"<t>"+jsonobj[currrec].Device_Type_mov+"</t>","h":jsonobj[currrec].Device_Type_mov};
								    sheetrow2 = sheetrow2+1
								}
					}
					
					if( act_bpf_rec>1 && act_bpf_rec<5000 )
					{
						for(var Rec_ini = 0;Rec_ini<act_bpf_rec;Rec_ini++)
						{
								if(jsonobj[currrec].propmov != 'Please Select')
								{
									sheetname = 'SERVICE_MODIFY';
									myXlsx.Sheets[sheetname]['B'+sheetrow2] = {"v":jsonobj[currrec].propmov,"t":"s","r":"<t>"+jsonobj[currrec].propmov+"</t>","h":jsonobj[currrec].propmov};
									myXlsx.Sheets[sheetname]['C'+sheetrow2] = {"v":parseInt(jsonobj[currrec].servmov)+Rec_ini,"t":"s","r":"<t>"+jsonobj[currrec].servmov+"</t>","h":jsonobj[currrec].servmov};
									//myXlsx.Sheets[sheetname]['D'+sheetrow2] = {"v":jsonobj[currrec].usridmov,"t":"s","r":"<t>"+jsonobj[currrec].usridmov+"</t>","h":jsonobj[currrec].usridmov};
									myXlsx.Sheets[sheetname]['G'+sheetrow2] = {"v":jsonobj[currrec].Date_Mov,"t":"s","r":"<t>"+jsonobj[currrec].Date_Mov+"</t>","h":jsonobj[currrec].Date_Mov};
									myXlsx.Sheets[sheetname]['I'+sheetrow2] = {"v":jsonobj[currrec].ppmov,"t":"s","r":"<t>"+jsonobj[currrec].ppmov+"</t>","h":jsonobj[currrec].ppmov};
									myXlsx.Sheets[sheetname]['J'+sheetrow2] = {"v":jsonobj[currrec].fcmov,"t":"s","r":"<t>"+jsonobj[currrec].fcmov+"</t>","h":jsonobj[currrec].fcmov};
									myXlsx.Sheets[sheetname]['K'+sheetrow2] = {"v":jsonobj[currrec].flatchrg2_mov,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg2_mov+"</t>","h":jsonobj[currrec].flatchrg2_mov};
									myXlsx.Sheets[sheetname]['L'+sheetrow2] = {"v":jsonobj[currrec].flatchrg3_mov,"t":"s","r":"<t>"+jsonobj[currrec].flatchrg3_mov+"</t>","h":jsonobj[currrec].flatchrg3_mov};
									myXlsx.Sheets[sheetname]['M'+sheetrow2] = {"v":jsonobj[currrec].Number_Masking_mov,"t":"s","r":"<t>"+jsonobj[currrec].Number_Masking_mov+"</t>","h":jsonobj[currrec].Number_Masking_mov};
									myXlsx.Sheets[sheetname]['N'+sheetrow2] = {"v":jsonobj[currrec].Device_Type_mov,"t":"s","r":"<t>"+jsonobj[currrec].Device_Type_mov+"</t>","h":jsonobj[currrec].Device_Type_mov};
								    sheetrow2 = sheetrow2+1
								}
						}		
					}		
		
	}
	else if(jsonobj[currrec].usecase === 'Terminate')
	{
			if(jsonobj[currrec].Termination_typ === 'SERVICE')
			{		
					if(act_bpf_rec=='' || act_bpf_rec<1 || act_bpf_rec==1 || act_bpf_rec>5000 || act_bpf_rec!==act_bpf_rec)
					{
								if(jsonobj[currrec].servter != '')
								{
								sheetname = 'SERVICE_CEASE';
								myXlsx.Sheets[sheetname]['B'+sheetrow3] = {"v":jsonobj[currrec].servter,"t":"s","r":"<t>"+jsonobj[currrec].servter+"</t>","h":jsonobj[currrec].servter};
								myXlsx.Sheets[sheetname]['C'+sheetrow3] = {"v":jsonobj[currrec].Date_Ter,"t":"s","r":"<t>"+jsonobj[currrec].Date_Ter+"</t>","h":jsonobj[currrec].Date_Ter};
								sheetrow3 = sheetrow3+1
								}
					}
					
					if( act_bpf_rec>1 && act_bpf_rec<5000 )
					{
						for(var Rec_ini = 0;Rec_ini<act_bpf_rec;Rec_ini++)
						{
								if(jsonobj[currrec].servter != '')
								{
									sheetname = 'SERVICE_CEASE';
									myXlsx.Sheets[sheetname]['B'+sheetrow3] = {"v":parseInt(jsonobj[currrec].servter)+Rec_ini,"t":"s","r":"<t>"+jsonobj[currrec].servter+"</t>","h":jsonobj[currrec].servter};
									myXlsx.Sheets[sheetname]['C'+sheetrow3] = {"v":jsonobj[currrec].Date_Ter,"t":"s","r":"<t>"+jsonobj[currrec].Date_Ter+"</t>","h":jsonobj[currrec].Date_Ter};
									sheetrow3 = sheetrow3+1
								}
						}		
					}		
			}
			
			if(jsonobj[currrec].Termination_typ === 'USER')
			{		
					if(act_bpf_rec=='' || act_bpf_rec<1 || act_bpf_rec==1 || act_bpf_rec>5000 || act_bpf_rec!==act_bpf_rec)
					{
								if(jsonobj[currrec].userter != '' || jsonobj[currrec].site_id_ter!='')
								{
									sheetname = 'ACCOUNT_CEASE';
									myXlsx.Sheets[sheetname]['B'+sheetrow5] = {"v":jsonobj[currrec].Date_Ter,"t":"s","r":"<t>"+jsonobj[currrec].Date_Ter+"</t>","h":jsonobj[currrec].Date_Ter};
									myXlsx.Sheets[sheetname]['E'+sheetrow5] = {"v":jsonobj[currrec].site_id_ter,"t":"s","r":"<t>"+jsonobj[currrec].site_id_ter+"</t>","h":jsonobj[currrec].site_id_ter};
									myXlsx.Sheets[sheetname]['F'+sheetrow5] = {"v":jsonobj[currrec].userter,"t":"s","r":"<t>"+jsonobj[currrec].userter+"</t>","h":jsonobj[currrec].userter};
									sheetrow5 = sheetrow5+1
								}
					}
			}						
	}		

  }
 exapp.writeFile(myXlsx,'BPF/'+filename+'_archive.xlsm');
fs.appendFile('BPF/Master_Temp_to_Store_Bpf_Formatting_Status.txt', "\r\n"+filename+'$New',  function(err){
	var exec = require("child_process").exec
	exec('FormatBPF.vbs').unref()
  ////var pool = new Pool(config);		    console.log('Server Updated Current BPF record in Master Temp file:- '+filename+'$New');
	if(err) {
      return console.error('Error running update BPF Record in Master Temp file .!!', err);
    }
	else
	{
		var fstatus = filename+'$Complete'
		var Temp_content ;
		console.log('fstatus value is: '+filename+'$Complete')
		waitUntil()
		.interval(500)
		.times(Infinity)
		.condition(function() {
		
		fs.readFile('BPF/Master_Temp_to_Store_Bpf_Formatting_Status.txt', 'utf8', function(err, data) {
		  if (err){
			  return console.error('Error reading BPF Record in Master Temp file .!!', err);
		  }
		  else
		  {
			  console.log('OK read the Master Temp file !!');
			  console.log(data)
			  Temp_content = data.toString();
			  if(Temp_content.indexOf(fstatus)!=-1)
			  {
				Temp_content ="Update Done"
			  }
		  }		  
		});
		return (Temp_content == "Update Done" ? true : false);
		})
		.done(function(result) {
			res.send(filename+'.xlsm');
		});	
		
	}
 
 })


/*  ////var pool = new Pool(config);
	pool.query("INSERT INTO \"BPF_format_table\" (\"FileName\",\"Status\",\"Remarks\") VALUES ('"+filename+".xlsm','New','New')", function(err,result,fields) {
	var filestatus = 'New';
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		var fstatus = "new" 
		waitUntil()
		.interval(500)
		.times(Infinity)
		.condition(function() {
		//var pool = new Pool(config);
		pool.query("select \"Status\" From \"BPF_format_table\" where \"FileName\" = '"+filename+".xlsm'", function(err,result,fields) {
		if(err) {
			return console.error('error running query', err);
		}
		else
		{
			fstatus = result[0].Status;
		}
		});	
		return (fstatus == "Complete" ? true : false);
		})
		.done(function(result) {
			res.send(filename+'.xlsm');
		});
		
	}
	});*/
});

app.get('/CDRDBUpdate', function (req, res) {
	var returnedval = req.query.retval;
	var jsonretval = JSON.parse(returnedval);
	////var pool = new Pool(config);
	console.log()
	pool.query("INSERT INTO cdr_db_1 (reftimestamp,secondunit,thirdunit,filetype,numcdr,frequency,OPCONamec,usagecode,OPCOcode,opconame,CDRType,Service_Type,usage_Type,Subscriber_Number,ANumber,BNumber,callTS,Duration,Amount,opco_currency_code,Annotation,External_id,Opco_data_date_flag) VALUES ('"+jsonretval[0].reftimestamp+"','"+jsonretval[0].secondunit+"','"+jsonretval[0].thirdunit+"','"+jsonretval[0].src+"','"+jsonretval[0].numcdr+"','"+jsonretval[0].frequency+"','"+jsonretval[0].OPCONamec+"','"+jsonretval[0].usagecode+"','"+jsonretval[0].OPCOcode+"','"+jsonretval[0].opconame+"','"+jsonretval[0].CDRType+"','"+jsonretval[0].Service_Type+"','"+jsonretval[0].usage_Type+"','"+jsonretval[0].Subscriber_Number+"','"+jsonretval[0].ANumber+"','"+jsonretval[0].BNumber+"','"+jsonretval[0].callTS+"','"+jsonretval[0].Duration+"','"+jsonretval[0].Amount+"','"+jsonretval[0].opco_currency_code+"','"+jsonretval[0].Annotation+"','"+jsonretval[0].External_id+"','"+jsonretval[0].Opco_data_date_flag+"')", function(err,result,fields) {
	if(err) {
			return console.error('error running query', err);
	}
	else
	{	
		res.send("complete");
	}
	});
});

app.get('/CreateCDR', function (req, res) {

//app.use(bodyParser.json({"limit": "100mb","type":"application/json"}));
//app.use(bodyParser.urlencoded({"limit": "100mb", "extended": true, "parameterLimit":200000,"type":"application/x-www-form-urlencoding"}));
  var returnedval = req.query.retval;
  //var jsonobj = JSON.parse(returnedval);
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
  var totlen1 = 0;
  ////var pool = new Pool(config);
  var jsonobj;
  pool.query("select * from cdr_db_1 where reftimestamp ='"+returnedval+"'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		jsonstr =  JSON.stringify(result);
		console.log(jsonstr);
		jsonobj = JSON.parse(jsonstr);
		console.log(jsonobj);
	}
	
  for(var currcallrec1 = 0;currcallrec1<jsonobj.length;currcallrec1++)
  {
		totlen1 = totlen1+parseInt(jsonobj[currcallrec1].numcdr);
  }
  var totlen = "00000000000"+totlen1;
  var fcount = totlen.substring(totlen.length-11,totlen.length);
  var cdrtxt = "HDR"+jyr+jmonth+jdate+jhr+jmin+jsec+fcount+"VGE             1.5                 "+"\r\n";
  var hdrtxt = cdrtxt
  var cuuropco;
  var curropconamecarr= jsonobj[0].OPCONamec.split('CSA_');
  var cuuropco = jsonobj[0].opconame;
  var curropconamec = 	curropconamecarr[1];
  var curropcocode;
  curropcocode = jsonobj[0].OPCOcode;
  var anumber;
  var bnumber;
  var randfileid = 	Math.floor(100 + Math.random() * 900);
  var currid = Math.floor(100000000 + Math.random() * 900000000);
  var ffid = (curropcocode+"0000"+currid).substring(0,11);
  var filename = 'ARBOR_VGE_CSAUSAGE_'+curropconamec+"_"+jyr+jmonth+jdate+jhr+jmin+jsec+'_'+randfileid+'_'+ffid;
  console.log(filename);
  //fs.writeFile('TestData/'+filename, cdrtxt,  function(err){});
  var timestamp;
  var duration;
  var usagetype;
  var usagecode;
  var secondunit;
  var thirdunit;
  var cdrcount;
  var frequency;
  var tstp;
  var Amount; 
  var External_id;
  var Annotation;
  var Opco_data_date_flag;
  var opco_currency_code;
 // cdrtxt = ''
  for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
  {
	cdrcount = parseInt(jsonobj[currcallrec].numcdr);
	frequency = jsonobj[currcallrec].frequency;
	usagetype = jsonobj[currcallrec].usage_Type;
	customer_tag = '                              ';
	duration = jsonobj[currcallrec].Duration+'                  ';
	duration = duration.substring(0,18);
	secondunit= jsonobj[currcallrec].secondunit+'                  ';
	secondunit = secondunit.substring(0,18);
	thirdunit = jsonobj[currcallrec].thirdunit+'                  ';
	thirdunit = thirdunit.substring(0,18);
	usagecode = jsonobj[currcallrec].usagecode+'          ';
	usagecode = usagecode.substring(0,10);
	billclass = '      ';
	provider_id = '       ';
	tstp =new Date(jsonobj[currcallrec].callTS);


// Updated amount formatting logic with round-off to two decimals for all the OPCO's	
	var input;
	var f_input;
	var str_input;
	var output;
	input = jsonobj[currcallrec].Amount;   
	str_input = input.toString();
	f_input = parseFloat(input);	
	
	
	if(str_input.indexOf('.')==-1)
	{

		if(str_input!='0')
		{
		  //output = str_input.replace(/0+$/,'');
		  output = (parseInt(str_input))*100
		}else if(str_input=='0'){
		  output =str_input;
		}	
	
	}else{
		var amount_container = str_input.split('.')
		var amt_prefix = amount_container[0];
		var n = amount_container[1].length;		

				if (n==0)
				{
					output = (parseInt(amt_prefix))*100		
				}else if(n==1)
				{
					if(amount_container[1]=='0')
					{ output =  (parseInt(amt_prefix))*100 }
					else
					{
						output = (Math.round((f_input * 1000)/10)/100).toFixed(1);    
						output = parseInt(parseFloat((output*100).toFixed(2)));
					}
				}
				else if(n==2 || n>2 )
				{
					output = (Math.round((f_input * 1000)/10)/100).toFixed(2);    
					output = parseInt(parseFloat((output*100).toFixed(2)));				
				}
		
	}


	
	Amount = (output.toString())+'                  ';	
	Amount = Amount.substring(0,18);  
	External_id = jsonobj[currcallrec].External_id+'                                                                        ';
	External_id = External_id.substring(0,72);
	Annotation = jsonobj[currcallrec].Annotation;
	var annotforsplit  = jsonobj[currcallrec].Annotation;
	var annotsplt = annotforsplit.split("|");
	var roamindicator = annotsplt[8]
	var momt = jsonobj[currcallrec].Subscriber_Number
	console.log(roamindicator);
	console.log(momt);
	anumber = jsonobj[currcallrec].ANumber+'                                                                        ';
	bnumber = jsonobj[currcallrec].BNumber+'                                                                        ';
	if(roamindicator === "1")
	{
		if (momt == "MO")
		{
			anumber = annotsplt[4]+'                                                                        ';
		}
		else if(momt == "MT")
		{
			bnumber = annotsplt[6]+'                                                                        ';
		}
	}
	anumber = anumber.substring(0,72);
	bnumber = bnumber.substring(0,72);
	console.log(anumber);
	Annotation = Annotation+"                                                                                                                                                                                                                                                               ";
	Annotation = Annotation.substring(0,255);
	Opco_data_date_flag = jsonobj[currcallrec].Opco_data_date_flag;
	opco_currency_code = jsonobj[currcallrec].opco_currency_code+'     ';
	opco_currency_code = opco_currency_code.substring(0,5);
	if(jsonobj[currcallrec].secondunit !=0 || jsonobj[currcallrec].thirdunit !=0)
	{
		duration = 0;
		duration = parseInt(jsonobj[currcallrec].secondunit)+parseInt(jsonobj[currcallrec].thirdunit);
		duration = duration+'                  ';
		duration = duration.substring(0,18);
	}
	for(var currcdr = 1;currcdr<=cdrcount;currcdr++)
	{
		if(currcdr === 1)
		{
			timestamp = jsonobj[currcallrec].callTS;
		}
		else if(jsonobj[currcallrec].Service_Type=='DATA' && jsonobj[currcallrec].Opco_data_date_flag =='Yes')
		{
			timestamp = jsonobj[currcallrec].callTS;
		}
		else
		{
				//console.log('success sudheer')
				if(frequency === 'Every Second')
				{
					tstp.setSeconds(tstp.getSeconds() + 1);
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
					timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;

				}
				if(frequency === 'Once a Minute')
				{
					tstp.setSeconds(tstp.getSeconds() + 60);
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
					timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
				}
				if(frequency === 'Hourly')
				{
					tstp.setSeconds(tstp.getSeconds() + 3600);
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
					timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
				}
				if(frequency === 'Daily')
				{
					tstp.setSeconds(tstp.getSeconds() + 86400);
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
					timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
				}
				if(frequency === 'Weekly')
				{
					tstp.setSeconds(tstp.getSeconds() + 604800);
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
					timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
				}
		}
		timestamp = timestamp.replace(" ","");
		timestamp = timestamp.replace("-","");
		timestamp = timestamp.replace("-","");
		timestamp = timestamp.replace(":","");
		timestamp = timestamp.replace(":","");
		timestamp = timestamp+'              ';
		timestamp = timestamp.substring(0,14);												//after customer Tag its External ID(72 length)
		currid = currid+1;
		cdrtxt = cdrtxt+"VGE"+curropcocode+"0000"+currid+"   4"+anumber+bnumber+customer_tag+External_id+timestamp+duration+usagecode+billclass+provider_id+secondunit+thirdunit+"     "+opco_currency_code+"0  "+Amount+Annotation+"\r\n";
	}	
  }
  
  //fs.appendFile('TestData/'+filename, cdrtxt, function (err){});		
  var traitxt = hdrtxt.replace("HDR","TRA");
  cdrtxt = cdrtxt+traitxt;
  //fs.appendFile('input.txt', traitxt, function (err){});
  fs.writeFile('TestData/'+filename, cdrtxt,  function(err){})
  res.send(traitxt+'||'+filename);
  });
});

app.get('/CreateMultipleCDR', function (req, res) {
  console.log('reached till here');	
  var returnedval = req.query.retval;
  var zdat =  new Date();
  var zyr = zdat.getFullYear();
  var zmonth = zdat.getMonth()+1;
  zmonth = '0'+zmonth;
  zmonth = zmonth.substring(zmonth.length-2,zmonth.length)
  var zdate = zdat.getDate();
  zdate = '0'+zdate;
  zdate = zdate.substring(zdate.length-2,zdate.length)
  var zhr = zdat.getHours();
  zhr = '0'+zhr; 
  zhr = zhr.substring(zhr.length-2,zhr.length)
  var zmin = zdat.getMinutes();
  zmin = '0'+zmin;
  zmin = zmin.substring(zmin.length-2,zmin.length)
  var zsec = zdat.getSeconds();
  zsec = '0'+zsec;
  zsec = zsec.substring(zsec.length-2,zsec.length)
  var fileconcat = '';
  var zipfinename = 'CDR__'+zyr+zmonth+zdate+zhr+zmin+zsec
  fs.mkdirSync(__dirname+'\\TestData\\'+zipfinename);
  ////var pool = new Pool(config);
   pool.query("select * from cdr_db_1 where reftimestamp ='"+returnedval+"'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		jsonstr =  JSON.stringify(result);
		console.log(jsonstr);
		jsonobj = JSON.parse(jsonstr);
		console.log(jsonobj);
	}
  for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
  {
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
	var totlen1 = 0;
	totlen1 = parseInt(jsonobj[currcallrec].numcdr);
	var totlen = "00000000000"+totlen1;
	var fcount = totlen.substring(totlen.length-11,totlen.length);
	var cdrtxt = "HDR"+jyr+jmonth+jdate+jhr+jmin+jsec+fcount+"VGE             1.5                 "+"\r\n";
	var hdrtxt = cdrtxt
	var cuuropco;
	var curropconamecarr= jsonobj[0].OPCONamec.split('CSA_');
	var cuuropco = jsonobj[0].opconame;
	var curropconamec = 	curropconamecarr[1];
	var curropcocode;
	curropcocode = jsonobj[0].OPCOcode;
	var anumber;
	var bnumber;
	var randfileid = 	Math.floor(100 + Math.random() * 900);
	var currid = Math.floor(100000000 + Math.random() * 900000000);
	var ffid = (curropcocode+"0000"+currid).substring(0,11);
	var filename = 'ARBOR_VGE_CSAUSAGE_'+curropconamec+"_"+jyr+jmonth+jdate+jhr+jmin+jsec+'_'+randfileid+'_'+ffid;
	console.log(filename);
	//fs.writeFile('TestData/'+filename, cdrtxt,  function(err){});
	var timestamp;
	var duration;
	var secondunit;
	var thirdunit;
	var usagetype;
	var usagecode;
	var cdrcount;
	var frequency;
	var tstp;
	var Amount;
	var External_id;
	var Annotation;
	var Opco_data_date_flag;
	var opco_currency_code;
	////var pool = new Pool(config);
	cdrcount = parseInt(jsonobj[currcallrec].numcdr);
	frequency = jsonobj[currcallrec].frequency;
	usagetype = jsonobj[currcallrec].usage_Type;
	anumber = jsonobj[currcallrec].ANumber+'                                                                        ';
	anumber = anumber.substring(0,72);
	bnumber = jsonobj[currcallrec].BNumber+'                                                                        ';
	bnumber = bnumber.substring(0,72);
	customer_tag = '                              ';
	duration = jsonobj[currcallrec].Duration+'                  ';
	duration = duration.substring(0,18);
	secondunit = jsonobj[currcallrec].secondunit+'                  ';
	secondunit = secondunit.substring(0,18);
	thirdunit = jsonobj[currcallrec].thirdunit+'                  ';
	thirdunit = thirdunit.substring(0,18);
	usagecode = jsonobj[currcallrec].usagecode+'          ';
	usagecode = usagecode.substring(0,10);
	billclass = '      ';
	provider_id = '       ';
	tstp =new Date(jsonobj[currcallrec].callTS);

// Updated amount formatting logic with round-off to two decimals for all the OPCO's	
	var input;
	var f_input;
	var str_input;
	var output;
	input = jsonobj[currcallrec].Amount;   
	str_input = input.toString();
	f_input = parseFloat(input);	
	
	
	if(str_input.indexOf('.')==-1)
	{

		if(str_input!='0')
		{
		  //output = str_input.replace(/0+$/,'');
		  output = (parseInt(str_input))*100
		}else if(str_input=='0'){
		  output =str_input;
		}	
	
	}else{
		var amount_container = str_input.split('.')
		var amt_prefix = amount_container[0];
		var n = amount_container[1].length;		

				if (n==0)
				{
					output = (parseInt(amt_prefix))*100		
				}else if(n==1)
				{
					if(amount_container[1]=='0')
					{ output =  (parseInt(amt_prefix))*100 }
					else
					{
						output = (Math.round((f_input * 1000)/10)/100).toFixed(1);    
						output = parseInt(parseFloat((output*100).toFixed(2)));
					}
				}
				else if(n==2 || n>2 )
				{
					output = (Math.round((f_input * 1000)/10)/100).toFixed(2);    
					output = parseInt(parseFloat((output*100).toFixed(2)));				
				}
		
	}

	
	Amount = (output.toString())+'                  ';	
	Amount = Amount.substring(0,18);  
	External_id = jsonobj[currcallrec].External_id+'                                                                        ';
	External_id = External_id.substring(0,72);
	Annotation = jsonobj[currcallrec].Annotation;	
	var annotforsplit  = jsonobj[currcallrec].Annotation;
	var annotsplt = annotforsplit.split("|");
	var roamindicator = annotsplt[8]
	var momt = annotsplt[9]
	console.log(roamindicator);
	console.log(momt);
	anumber = jsonobj[currcallrec].ANumber+'                                                                        ';
	bnumber = jsonobj[currcallrec].BNumber+'                                                                        ';
	if(roamindicator === "1")
	{
		if (momt == "MO")
		{
			anumber = annotsplt[4]+'                                                                        ';
		}
		else if(momt == "MT")
		{
			bnumber = annotsplt[6]+'                                                                        ';
		}
	}
	anumber = anumber.substring(0,72);
	bnumber = bnumber.substring(0,72);
	console.log(anumber);
	Annotation = Annotation+"                                                                                                                                                                                                                                                               ";
	Annotation = Annotation.substring(0,255);
	Opco_data_date_flag = jsonobj[currcallrec].Opco_data_date_flag;
	opco_currency_code = jsonobj[currcallrec].opco_currency_code+'     ';
	opco_currency_code = opco_currency_code.substring(0,5);
	if(jsonobj[currcallrec].secondunit !=0 || jsonobj[currcallrec].thirdunit !=0)
	{
		duration = 0;
		duration = parseInt(jsonobj[currcallrec].secondunit)+parseInt(jsonobj[currcallrec].thirdunit);
		duration = duration+'                  ';
		duration = duration.substring(0,18);
	}
	for(var currcdr = 1;currcdr<=cdrcount;currcdr++)
	{
		if(currcdr === 1)
		{
			timestamp = jsonobj[currcallrec].callTS;
		}
		else if(jsonobj[currcallrec].Service_Type=='DATA' && jsonobj[currcallrec].Opco_data_date_flag =='Yes')
		{
			timestamp = jsonobj[currcallrec].callTS;
		}		
		else
		{
			if(frequency === 'Every Second')
			{
				tstp.setSeconds(tstp.getSeconds() + 1);
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
				timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;

			}
			if(frequency === 'Once a Minute')
			{
				tstp.setSeconds(tstp.getSeconds() + 60);
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
				timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
			}
			if(frequency === 'Hourly')
			{
				tstp.setSeconds(tstp.getSeconds() + 3600);
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
				timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
			}
			if(frequency === 'Daily')
			{
				tstp.setSeconds(tstp.getSeconds() + 86400);
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
				timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
			}
			if(frequency === 'Weekly')
			{
				tstp.setSeconds(tstp.getSeconds() + 604800);
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
				timestamp = tstp.getFullYear()+"-"+fmonval+"-"+datval+" "+hrval+":"+minval+":"+secval;
			}
		}
		timestamp = timestamp.replace(" ","");
		timestamp = timestamp.replace("-","");
		timestamp = timestamp.replace("-","");
		timestamp = timestamp.replace(":","");
		timestamp = timestamp.replace(":","");
		timestamp = timestamp+'              ';
		timestamp = timestamp.substring(0,14);
		currid = currid+1;
		cdrtxt = cdrtxt+"VGE"+curropcocode+"0000"+currid+"   4"+anumber+bnumber+customer_tag+External_id+timestamp+duration+usagecode+billclass+provider_id+secondunit+thirdunit+"     "+opco_currency_code+"0  "+Amount+Annotation+"\r\n";
	}
	var traitxt = hdrtxt.replace("HDR","TRA");
	cdrtxt = cdrtxt+traitxt;
	console.log(__dirname+'\\TestData\\'+filename);
	fs.writeFile('TestData/'+zipfinename+'/'+filename, cdrtxt, function (err){});	
  }
  
  //var zip = new AdmZip();
  console.log(zipfinename);
  //zip.addLocalFolder(__dirname+'\\TestData\\'+zipfinename,zipfinename+'.zip');
  //zip.writeZip(__dirname+'\\TestData\\'+zipfinename+'.zip');
  var output = fs.createWriteStream(__dirname + '\\TestData\\'+zipfinename+'.zip');
  var archive = archiver('zip', {
    store: true // Sets the compression method to STORE. 
	});
	output.on('close', function() {
	console.log(archive.pointer() + ' total bytes');
	console.log('archiver has been finalized and the output file descriptor has closed.');
	});
	// good practice to catch this error explicitly 
	archive.on('error', function(err) {
	throw err;
	});
 
// pipe archive data to the file 
	archive.pipe(output);
	archive.directory('TestData/'+zipfinename);
	archive.finalize();
  console.log(zipfinename);
  res.send(zipfinename);
  });
});



app.get('/addtrailer',function (req, res) {
	 var returnedval = req.query.retval;
	 var trtxtsplt = returnedval.split('||');
	fs.appendFile('TestData/'+trtxtsplt[1], trtxtsplt[0], function (err){});
	res.send("success");
});
app.get('/getopco',function (req, res) {
	////var pool = new Pool(config);
	pool.query('select distinct OPCO_Description from OPCO where Status = \'Active\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
});

app.get('/GetPPdesc',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query("select * from mac_price_ref_t where CODE ='"+propval+"'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		if(result.length >= 1)
		{
			res.send(result[0].DESCRIP);
		}
		else
		{
			res.send('');
		}
	}
    //output: 1 
  });
  
});
app.get('/GetPPcode',function (req, res) {
	var propval = req.query.retval;
	var pparr =propval.split('|');
	var pp = pparr[0];
	var opco = pparr[1];
	////var pool = new Pool(config);
	var currpp = pparr[2];
	
	pool.query("select CODE  from mac_price_ref_t where DESCRIP ='"+pp+"' and OPCO_NAME= '"+opco+"'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		var match = 'no';
		console.log(result);
		if(result.length >= 1)
		{
			for(var i = 0;i<=result.length;i++)
			{
				if(result[i] != null)
				{
					if(currpp === result[i].CODE)
					{
						match = 'yes';
						break;
					}
				}			
			}
			if(match === 'yes')
			{
				console.log(currpp);
				res.send(currpp);
			}
			else
			{
				res.send(result[0].CODE);
			}
			
		}
		else
		{
			res.send('');
		}
	}
    //output: 1 
  });
  
});


app.get('/getService',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	var propcat;
	pool.query("select distinct proposition_category from proposition_category where proposition_desc = '"+propval+"'",function(err,result,fields){
	propcat = result[0].proposition_category;
	pool.query('select distinct service_type from usage_type where '+propcat+' = \'X\' order by service_type', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });
  
});

app.get('/getroamingdetails',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query('select vge_item_mobile,vge_item_roaming from usage_mo_mt_roaming where vge_code = \''+propval+'\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		if(result.length >= 1)
		{
			console.log(result.length);
			res.send(JSON.stringify(result));
		}
		else
		{
			res.send('NOROWS');
		}
	}
    //output: 1 
   });
  
});

app.get('/getProposition',function (req, res) {
	////var pool = new Pool(config);
	pool.query('select distinct proposition_desc from proposition_category where status=\'Active\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

// old befor db update
/*app.get('/getusage',function (req, res) {
	var serviceval = req.query.retval;
	console.log(serviceval);
	var jsonobj = JSON.parse(serviceval);
	////var pool = new Pool(config);
	var propositionval = jsonobj[0].Porposition;
	var serviceprop = jsonobj[0].Servicetyp;
	var propcat;
	pool.query("select distinct \"proposition_category\" from \"proposition_category\" where \"proposition_desc\" = '"+propositionval+"'",function(err,result,fields){
		propcat = result[0].proposition_category;
		console.log(propcat);
	
	//console.log(propcat);
	           
	pool.query("select distinct \"kenan_usg_description\" from \"usage_type\" where service_type ='"+serviceprop+"' and "+propcat+" = 'X' and (vge_codes != '' and vge_codes != '-')  order by kenan_usg_description", function(err,result,fields) {
	
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
	});
  });
  
}); */

// Updated post DB update
app.get('/getusage',function (req, res) {
	var serviceval = req.query.retval;
	console.log(serviceval);
	var jsonobj = JSON.parse(serviceval);
	////var pool = new Pool(config);
	var propositionval = jsonobj[0].Porposition;
	var serviceprop = jsonobj[0].Servicetyp;
	var selected_opco_db_ref = jsonobj[0].selected_opco_db_ref;
	var propcat;
	pool.query("select distinct proposition_category from proposition_category where proposition_desc = '"+propositionval+"'",function(err,result,fields){
		propcat = result[0].proposition_category;
		console.log(propcat);
	
	//console.log(propcat);
	           
	pool.query("select distinct kenan_usg_description from usage_type where service_type ='"+serviceprop+"' and "+propcat+" = 'X' and (vge_codes != '' and vge_codes != '-')  and ( tat_custom_country_flag LIKE  '%"+selected_opco_db_ref+"%' ) order by kenan_usg_description", function(err,result,fields) {
	
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log('DB row length'+result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
	});
  });
  
});



app.get('/getopcocode', function (req, res) {
	 var returnedval = req.query.retval;
	 ////var pool = new Pool(config);
	 var curropcocode;
	 //console.log("select distinct \"OPCO_CODE\",\"OPCO_NAME\",\"Currency_Code\" from \"OPCO\" where \"OPCO_Description\" = '"+returnedval+"' and \"Status\" = \'Active\'");
	 pool.query("select distinct OPCO_CODE,OPCO_NAME,Currency_Code,opco_data_date_flag from OPCO where OPCO_Description = '"+returnedval+"' and Status = \'Active\'",function(err,result,fields){
	if(err) {
		return console.error('error running query', err);
	}
	else
	{
			curropcocode = result[0].OPCO_CODE+"||"+result[0].OPCO_NAME+"||"+result[0].Currency_Code+"||"+result[0].opco_data_date_flag;
			console.log(curropcocode);
			res.send(curropcocode);
	}
	}); 
});

app.get('/getkenanid', function (req, res) {
	
	 var returnedval = req.query.retval;
	 console.log(returnedval);
	var jsonobj = JSON.parse(returnedval);
	var usgtype = jsonobj[0].usgtype;
	var selected_opco_db_ref = jsonobj[0].selected_opco_db_ref;	 
	 if(usgtype.indexOf('replceyes') != -1)
	 {
		usgtype = usgtype.replace('replceyes','')
		usgtype = usgtype.replace('-','–')
	 }
	 var cuukenanid;
	 pool.query("select distinct kenan_type_id_usg,vge_codes,IN_TYPE_ID_USG from usage_type where kenan_usg_description = '"+usgtype+"' and tat_custom_country_flag like '%"+selected_opco_db_ref+"%'",function(err,result,fields){
	if(err) {
		return console.error('error running query', err);
	}
	else
	{		if(result.length >= 1)
			{
				cuukenanid = result[0].kenan_type_id_usg+"||"+result[0].vge_codes+"||"+result[0].IN_TYPE_ID_USG;
				console.log(cuukenanid);
				res.send(cuukenanid);
			}
	}
	}); 
	
});




app.get('/WriteBPFExcel', function (req, res) {
  var returnedval = req.query.retval;	
  //console.log(returnedval);
  var workbook1 = new excel.Workbook();
  workbook1.creator = 'Me';
  workbook1.lastModifiedBy = 'Me';
  workbook1.created = new Date();
  workbook1.modified = new Date();
  var sheet1 = workbook1.addWorksheet('ACCOUNT_CREATE');
  var sheet2 = workbook1.addWorksheet('ACCOUNT_MODIFY');
  var sheet3 = workbook1.addWorksheet('ACCOUNT_CEASE');
  var sheet4 = workbook1.addWorksheet('SERVICE_CREATE');
  var sheet5 = workbook1.addWorksheet('SERVICE_MODIFY');
  var sheet4 = workbook1.addWorksheet('SERVICE_CEASE');
  sheet1.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
  sheet1.getCell('B2').value = 'Proposition';
  sheet1.getCell('C2').value = 'Level';
  sheet1.mergeCells('D2:H2');
  sheet1.getCell('D2').value = 'AccountDetails';
  sheet1.getCell('I2').value = 'Name';
  sheet1.mergeCells('J2:O2');
  sheet1.getCell('J2').value = 'BillingAddress';
  sheet1.getCell('P2').value = 'Service Centers';
  sheet1.mergeCells('Q2:T2');
  sheet1.getCell('Q2').value = 'Contact';
  sheet1.mergeCells('U2:V2');
  sheet1.getCell('U2').value = 'Bill Formating';
  sheet1.getCell('W2').value = 'Currency';
  sheet1.mergeCells('X2:AA2');
  sheet1.getCell('X2').value = 'Unique ID\'s';
  sheet1.mergeCells('AB2:AJ2');
  sheet1.getCell('AB2').value = 'Additional Information';
  sheet1.mergeCells('AL2:AO2');
  sheet1.getCell('AL2').value = 'PricePlan and Charges (if a charge needs to be assigned at account level )';
  var nrow =sheet1.addRow(['','Proposition Type','Account Level','Account No','Active Date','Inactive Date','Account Category','Parent Account ID','Name','Bill Address 1','Bill Address 2','Bill Address 3','Bill Address City','Bill Zip Code','Bill Country','Legal Entity','Customer Contact Person','Customer Contact Country Code','Customer Contact Phone','Customer Contact E-Mail ','Language','Bill Cycle','Currency','SAP Account Number','OPCO_BAN','Site ID','User ID','Payment Terms','Purchase Order','Profit Center','Country of Service','Registration Number','VAT Registration Number','GAN ID','Contract ID','Type of User','Price Plan','Billing Account No','Flat Charge1','Flat Charge2','Flat Charge3']);
  nrow.alignment = { vertical: 'middle', horizontal: 'center' };
  sheet1.getRow(2).alignment = { vertical: 'middle', horizontal: 'center' };
  nrow.border = {
    top: {style:'thin'},
    left: {style:'thin'},
    bottom: {style:'thin'},
    right: {style:'thin'}
};
sheet1.getRow(2).border = {
    top: {style:'thin'},
    left: {style:'thin'},
    bottom: {style:'thin'},
    right: {style:'thin'}
};
  sheet1.getRow(2).fill ={
    type: 'pattern',
    pattern:'solid',
	fgColor:{argb:'ffb5b3b3'},
    bgColor:{argb:'ffb5b3b3'}
	};
	sheet1.getRow(2).height =  25.5;
	sheet1.getRow(3).height =  36;
	sheet1.getRow(1).height =  12.75;
	sheet1.getColumn(1).width =  2.29;
	var splitretval = returnedval.split('>>');
	var totcustaccstr = splitretval[0]
	var totcuACCarr = totcustaccstr.split('>');
	var totcustacc = parseInt(totcuACCarr[1]);
	var currcuststr = '';
	var custdetsplit = [];	
	var companyname = '';
	var refnum = 0;
	var splitsitestr = '';
	for(var currcustomer = 1;currcustomer<splitretval.length-1;currcustomer++)
	{
		var splitsitestr = '';
		refnum = refnum+1
		currcuststr = splitretval[currcustomer];
		custdetsplit = currcuststr.split('|');
		splituserstr = '';
		splituser = '';
		for(var currdat = 0;currdat<=custdetsplit.length-1;currdat++)
		{	
			var currdatval  = custdetsplit[currdat].split('>');
			if(currdatval[0] === 'CustomerAccountName')
			{
				companyname =  currdatval[1];
				//console.log(companyname);	
			}
			if(currdatval[0] === 'Proposition')
			{
				Proposition =  currdatval[1];
				//console.log(companyname);	
			}
			if(currdatval[0] === 'City')
			{
				var City =  currdatval[1];
				//console.log(City);	
			}
			if(currdatval[0] === 'State')
			{
				var State =  currdatval[1];
				//console.log(State);	
			}
			if(currdatval[0] === 'ZIP/Postal Code')
			{
				var ZIPPostalCode =  currdatval[1];
				//console.log(ZIPPostalCode);	
			}
			if(currdatval[0] === 'Country')
			{
				var Country =  currdatval[1];
				//console.log(Country);	
			}
			if(currdatval[0] === 'Franchise')
			{
				var Franchise =  currdatval[1];
				//console.log(Franchise);	
			}
			if(currdatval[0] === 'Payment Method')
			{
				var PaymentMethod =  currdatval[1];
				//console.log(PaymentMethod);	
			}	
			if(currdatval[0] === 'Billing Account')
			{
				var billacccount =  parseInt(currdatval[1]);
				//console.log(billacccount);	
			}
			if(currdatval[0] === 'BillingAccountName')
			{
				var BillingAccountName =  currdatval[1];
				//console.log(BillingAccountName);	
			}
			if(currdatval[0].includes('--'))
			{
				splitsitestr = splitsitestr+'||'+custdetsplit[currdat];
				//console.log(splitsitestr);
			}
			if(currdatval[0].includes('$$'))
			{
				splituser = splituser+'||'+custdetsplit[currdat];
				//console.log(splituser);
			}
		}
		sheet1.addRow(['',Proposition,'Customer',12345678,new Date(),'','VAT REGISTERED','',companyname+currcustomer,'International House','7 High Street','',City,ZIPPostalCode,'GB','VGEL GBF6(UK VAT reg)','','','','','EN','GBS09-MTH-01st-31st-UK','GBP','','','','']);
		for(var currbillacc = 1;currbillacc<=billacccount;currbillacc++)
		{	
			var sitesplitarr = [];
			refnum = refnum+1;	
			var kenanbillnum = 12345679+refnum
			sheet1.addRow(['',Proposition,'Billing',12345679+refnum,new Date(),'','VAT REGISTERED','12345678',BillingAccountName+currbillacc,'International House','7 High Street','',City,ZIPPostalCode,'GB','VGEL GBF6(UK VAT reg)','','','','','EN','GBS09-MTH-01st-31st-UK','GBP','1000042839','670183940','','',90,'','GBF6003021','GB','','GB394536322']);
			sitesplitarr = splitsitestr.split('||');		
			for(var currsite = 1;currsite<sitesplitarr.length;currsite++)
			{
				
				var splithyp = sitesplitarr[currsite].split('--');
				var linkedbillacc = parseInt(splithyp[0]);
				//console.log(splithyp[1]);
				if(linkedbillacc === currbillacc)
				{
					var splitsitefval = splithyp[1].split('>');		
					//console.log(splitsitefval[0]);
					if(splitsitefval[0] === 'Site Account')
					{
						var SiteAccount = parseInt(splitsitefval[1]);
						//console.log(SiteAccount);
					}
					if(splitsitefval[0] === 'Siteaccname')
					{
						var SiteAccountprefix = splitsitefval[1];
						//console.log(SiteAccountprefix);
					}
				}
			}
			for(var currsiteaccl=1;currsiteaccl<=SiteAccount;currsiteaccl++)
			{
				usersplitarr = splituser.split('||');
				refnum = refnum+1;
				sheet1.addRow(['',Proposition,'Site','',new Date(),'','',kenanbillnum,SiteAccountprefix+currsiteaccl,'International House','7 High Street','',City,ZIPPostalCode,'GB','VGEL GBF6(UK VAT reg)','','','','','EN','GBS09-MTH-01st-31st-UK','GBP','1000042839','670183940','','',90,'','GBF6003021','GB','','GB394536322']);
				for(var curruser = 1;curruser<usersplitarr.length;curruser++)
				{
					var splithyp1 = usersplitarr[curruser].split('--');
					var userbill = parseInt(splithyp1[0]);
					var splitdolr = splithyp1[1].split('$$');
					var linkedsiteacc = parseInt(splitdolr[0]);
					//console.log(linkedsiteacc);
					if(userbill === currbillacc)
					{
						if(linkedsiteacc === currsiteaccl)
						{
						
							var splituserval = splitdolr[1].split('>');
							if(splituserval[0] === 'SUser Account')	
							{
								var UserAccount = parseInt(splituserval[1]);
								//console.log(UserAccount);	
							}
							if(splituserval[0] === 'SUseraccname')	
							{
								var UserAccountName = splituserval[1];
								//console.log(UserAccountName);
							}			
						}
					}
				}
				for(var curruseraccl=1;curruseraccl<=UserAccount;curruseraccl++)
				{
					refnum = refnum+1;
					sheet1.addRow(['',Proposition,'User','',new Date(),'','','12345678',UserAccountName+curruseraccl,'International House','7 High Street','',City,ZIPPostalCode,'GB','VGEL GBF6(UK VAT reg)','','','','','EN','GBS09-MTH-01st-31st-UK','GBP','1000042839','670183940','','',90,'','GBF6003021','GB','','GB394536322']);
				}
			}
		}
		//sheet1.addRow({AccountType: 'Customer Account', ReferenceNumber: currcustomer+1,ActiveDate:new Date(),AccountCategory:'Enterprise VAT Reg.',MarketCode:'VGE',RateClass:'Rate Class - All',RegulatoryAuthority:'Europe'});
	}	
  workbook1.xlsx.writeFile("./ui/BPF_Creation_Template.xlsx").then(function() {
    console.log("BPF xlsx file is written.");
  res.send('success');
});
});





app.get('/WriteExcel', function (req, res) {
  var returnedval = req.query.retval;	
  var workbook1 = new excel.Workbook();
  workbook1.creator = 'Me';
  workbook1.lastModifiedBy = 'Me';
  workbook1.created = new Date();
  workbook1.modified = new Date();
  var sheet1 = workbook1.addWorksheet('Sheet1');
  var reColumns=[
    {header:'',key:'AccountType'},
    {header:'',key:'ReferenceNumber'},
    {header:'',key:'ActiveDate'},
	{header:'',key:'PreviousCutoffDate'},
	{header:'',key:'ParentReferenceNumber'},
	{header:'',key:'ParentAccountId'},
	{header:'',key:'AccountCategory'},
	{header:'',key:'MarketCode'},
	{header:'',key:'RateClass'},
	{header:'',key:'RegulatoryAuthority'},
	{header:'',key:'Prefix'},
	{header:'',key:'FirstName'},	
	{header:'',key:'Middle Name'},
	{header:'',key:'Last Name'},
	{header:'',key:'Suffix'},
	{header:'',key:'Company'},
	{header:'',key:'Title'},
	{header:'',key:'DayPhone'},
	{header:'',key:'EveningPhone'},
	{header:'',key:'AddressLine1'},
	{header:'',key:'AddressLine2'},
	{header:'',key:'AddressLine3'},
	{header:'',key:'City'},
	{header:'',key:'StateProvince'},
	{header:'',key:'ZIPPostalCode'},
	{header:'',key:'Country'},
	{header:'',key:'Franchise'},
	{header:'',key:'County'},
	{header:'',key:'Geocode'},
	{header:'',key:'AddressLine1'},
	{header:'',key:'AddressLine2'},
	{header:'',key:'AddressLine3'},
	{header:'',key:'City'},
	{header:'',key:'StateProvince'},
	{header:'',key:'ZIPPostalCode'},
	{header:'',key:'Country'},
	{header:'',key:'Franchise'},
	{header:'',key:'County'},
	{header:'',key:'Geocode'},
	{header:'',key:'Security Word'},
	{header:'',key:'National ID'},
	{header:'',key:'Remarks'},
	{header:'',key:'SICCode'},
	{header:'',key:'SalesCode'},
	{header:'',key:'PurchaseOrder'},
	{header:'',key:'PAYMENTMode'},
	{header:'',key:'BankAccount'},
	{header:'',key:'BankName'},
	{header:'',key:'BankRoutingNumber'},
	{header:'',key:'BankAgencyName'},	
	{header:'',key:'BankAgencyCode'},
	{header:'',key:'AlternateBank'},
	{header:'',key:'ClearingHouse'},
	{header:'',key:'Billing'},
	{header:'',key:'Remittance'},
	{header:'',key:'ServiceInquiry'},
	{header:'',key:'Print'},
	{header:'',key:'Collections'},
	{header:'',key:'FaxNumber'},
	{header:'',key:'Email'},
	{header:'',key:'StatementFaxNumber'},
	{header:'',key:'StatementEmail'},
	{header:'',key:'PrimaryContact'},
	{header:'',key:'PrimaryPhone'},
	{header:'',key:'SecondaryContact'},
	{header:'',key:'SecondaryPhone'},
	{header:'',key:'Language'},
	{header:'',key:'BILLPeriod'},
	{header:'',key:'BillDispatchmethod'},
	{header:'',key:'BILLFormat'},
	{header:'',key:'MassageGroup'},
	{header:'',key:'InsertGroup'},
	{header:'',key:'BILLHOLD'},
	{header:'',key:'ExchangeRateClass'},
	{header:'',key:'Currency'},
	{header:'',key:'VIPCode'},
	{header:'',key:'ReceivingCostCenter'},
	{header:'',key:'OwningCostCenter'},
	{header:'',key:'CreditRating'},
	{header:'',key:'CreditLimit'},
	{header:'',key:'Creditstatus'},
	{header:'',key:'GlobalContracts'},
	{header:'',key:'ChargeThreshold'},
	{header:'',key:'PAYMENTTERM'},
	{header:'',key:'BILLHOLDIND'},
	{header:'',key:'DISPATCHADDRESS'},
	{header:'',key:'ALTERNATECURRENCY'},
	{header:'',key:'E-BillingCDRFeed'},
	{header:'',key:'AutoInvoiceGenerationFlag'},
	{header:'',key:'ProformaInvoiceRequest'},
	{header:'',key:'ProformaRequestorMailId'},
	{header:'',key:'FrameworkAgreement'},
	{header:'',key:'ProtectCustomerAddress'},
	{header:'',key:'BillingAccountStatus'},
	{header:'',key:'Profit_Center'},
	{header:'',key:'Service_Flat_Charge'},
	{header:'',key:'Country_of_Service'},
	{header:'',key:'Contract_Number'},
	{header:'',key:'Customer_Code'},
	{header:'',key:'Customer_Group_Reference'},
	{header:'',key:'TEMA'},
	{header:'',key:'AccountFlatCharge'},
	{header:'',key:'InvoiceType'},
	{header:'',key:'ClarifyID'},
	{header:'',key:'AMLPID'},
	{header:'',key:'VATRegistrationNumber'},
	{header:'',key:'SAPAccountNumber'},
	{header:'',key:'DateofAgreement'},
	{header:'',key:'PurchaseOrderNumber'},
	{header:'',key:'BANReference'},
	{header:'',key:'SiebelReference'},
	{header:'',key:'LegacyBillingId'},
	{header:'',key:'CCDNo'},
	{header:'',key:'SiteDescription'},
	{header:'',key:'SiteReference'},
	{header:'',key:'SiteName'},
	{header:'',key:'ServiceLocationNumber'},
	{header:'',key:'SitePONumber'},
	{header:'',key:'User_ID'},
	{header:'',key:'Voice_Mail'},
	{header:'',key:'Voice_Mail_Short_Number'},
	{header:'',key:'Voice_Mail_Short_Number_Extn'}	
];
	sheet1.mergeCells('A1:D1');
	sheet1.mergeCells('B3:F3');
	sheet1.mergeCells('B4:F4');
	sheet1.getCell('A1').value = 'Account Creation Template';
	sheet1.getCell('A1').fill ={
    type: 'pattern',
    pattern:'solid',
	fgColor:{argb:'ff66d78c'},
    bgColor:{argb:'ff66d78c'}
};
	sheet1.getCell('A3').value = 'Reference Number';
	sheet1.getCell('A4').value = 'Parent Reference Number';
	sheet1.getCell('B3').value = 'This is internal to this batch. It is used when the entire Hierarchy of accounts is created newly.';
	sheet1.getCell('B4').value = 'If the parent account and child accounts are created together the Parent Id can be referenced by this field. This facilitates to create the hierarchy to create together';
	sheet1.getCell('B4').alignment = {wrapText:true};
	sheet1.getCell('G3').value = 'Entity';
	sheet1.getCell('H3').value = 'VGE';
	sheet1.getCell('A1').font = {
	bold:true
	};
	sheet1.getCell('A3').font = {
	bold:true
	};
	sheet1.getCell('G3').font = {
	name: 'Comic Sans MS',
	size: 14,
	bold:true
	};
	sheet1.getCell('A4').font = {
	bold:true
	};
	sheet1.getRow(4).height =  34.5;
	for(var crow = 5;crow<=198;crow++)
	{
			sheet1.getCell('A'+crow).value = '';
			var hrow = sheet1.getRow(crow);
			hrow.hidden = true;
	}
	sheet1.mergeCells('A199:B199');
	sheet1.getCell('A199').value = 'Reference Internal to Sheet';
	sheet1.mergeCells('C199:J199');
	sheet1.getCell('C199').value = 'Account Details';
	sheet1.mergeCells('K199:S199');
	sheet1.getCell('K199').value = 'Billing Name';
	sheet1.mergeCells('T199:AC199');
	sheet1.getCell('T199').value = 'Billing Address';
	sheet1.mergeCells('AD199:AM199');
	sheet1.getCell('AD199').value = 'Alternate Address';
	sheet1.mergeCells('AN199:AS199');
	sheet1.getCell('AN199').value = 'Security';
	sheet1.mergeCells('AT199:BA199');
	sheet1.getCell('AT199').value = 'Pay Method';
	sheet1.mergeCells('BB199:BF199');
	sheet1.getCell('BB199').value = 'Service Centers';
	sheet1.mergeCells('BG199:BN199');
	sheet1.getCell('BG199').value = 'Contact';
	sheet1.mergeCells('BO199:BU199');
	sheet1.getCell('B0199').value = 'Bill Formating';
	sheet1.mergeCells('BV199:CE199');
	sheet1.getCell('BV199').value = 'Rating';
	sheet1.mergeCells('CF199:CY199');
	sheet1.getCell('CF199').value = 'Extended Data';
	sheet1.mergeCells('CZ199:DR199');
	sheet1.getCell('CZ199').value = 'External ID\'s';
	//sheet1.getCell('A199').value = 'Reference Internal to sheet';
	//sheet1.getCell('A200').value = 'Account Type';
	//sheet1.getCell('B200').value = 'Reference Number';
	//sheet1.getCell('C200').value = 'Active Date';
	var nrow =sheet1.addRow(['Account Type','Reference Number','Active Date','Previous Cutoff Date','Parent Reference Number','Parent Account Id','Account Category','Market Code','Rate Class','Regulatory Authority','Prefix','First Name','Middle Name','Last Name','Suffix','Company','Title','Day Phone','Evening Phone','Address Line1','Address Line2','Address Line3','City','State/Province','ZIP/Postal Code','Country','Franchise','County','Geocode','Address Line1','Address Line2','Address Line3','City','State/Province','ZIP/Postal Code','Country','Franchise','County','Geocode','Security Word','National ID','Remarks','SIC Code','Sales Code','Purchase Order','PAYMENT Mode','Bank Account','Bank Name','Bank Routing Number','Bank Agency Name','Bank Agency Code','Alternate Bank','Clearing House','Billing','Remittance','Service Inquiry','Print','Collections','Fax Number','Email','Statement Fax Number','Statement Email','Primary Contact','Primary Phone','Secondary Contact','Secondary Phone','Language','BILL Period','Bill Dispatch method','BILL Format','Massage Group','Insert Group','BILL HOLD','Exchange Rate Class','Currency','VIP Code','Receiving Cost Center','Owning Cost Center','Credit Rating','Credit Limit','Credit status','Global Contracts','Charge Threshold','PAYMENT TERM','BILL HOLD IND','DISPATCH ADDRESS','ALTERNATE CURRENCY','E-Billing CDR Feed','Auto Invoice Generation Flag','Proforma Invoice Request','Proforma Requestor MailId','Framework Agreement','Protect Customer Address','Billing Account Status','Profit_Center','Service_Flat_Charge','Country_of_Service','Contract_Number','Customer_Code','Customer_Group_Reference','TEMA','AccountFlatCharge','InvoiceType','Clarify ID','AML PID','VAT Registration Number','SAP Account Number','Date of Agreement','Purchase Order Number','BAN Reference','Siebel Reference','Legacy Billing Id','CCD No','Site Description','Site Reference','Site Name','Service Location Number','Site PO Number','User_ID','Voice_Mail','Voice_Mail_Short_Number','Voice_Mail_Short_Number_Extn']);
	
	nrow.fill ={
    type: 'pattern',
    pattern:'solid',
	fgColor:{argb:'ff66d78c'},
    bgColor:{argb:'ff66d78c'}
};
	nrow.border = {
    top: {style:'thin'},
    left: {style:'thin'},
    bottom: {style:'thin'},
    right: {style:'thin'}
};
	sheet1.getRow(199).alignment = { vertical: 'middle', horizontal: 'center' };
	sheet1.getRow(200).alignment = { vertical: 'middle', horizontal: 'center' };
	sheet1.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
	//console.log(req.query.retval);
	var splitretval = returnedval.split('>>');
	var totcustaccstr = splitretval[0]
	var totcuACCarr = totcustaccstr.split('>');
	var totcustacc = parseInt(totcuACCarr[1]);
	var currcuststr = '';
	var custdetsplit = [];	
	var companyname = '';
	var refnum = 0;
	var splitsitestr = '';
	for(currcustomer = 1;currcustomer<splitretval.length-1;currcustomer++)
	{
		//console.log('hi')
		var splitsitestr = '';
		refnum = refnum+1
		currcuststr = splitretval[currcustomer];
		custdetsplit = currcuststr.split('|');
		for(var currdat = 0;currdat<=custdetsplit.length-1;currdat++)
		{	
			var currdatval  = custdetsplit[currdat].split('>');
			if(currdatval[0] === 'CustomerAccountName')
			{
				companyname =  currdatval[1];
				//console.log(companyname);	
			}
			if(currdatval[0] === 'City')
			{
				var City =  currdatval[1];
				//console.log(City);	
			}
			if(currdatval[0] === 'State')
			{
				var State =  currdatval[1];
				//console.log(State);	
			}
			if(currdatval[0] === 'ZIP/Postal Code')
			{
				var ZIPPostalCode =  currdatval[1];
				//console.log(ZIPPostalCode);	
			}
			if(currdatval[0] === 'Country')
			{
				var Country =  currdatval[1];
				//console.log(Country);	
			}
			if(currdatval[0] === 'Franchise')
			{
				var Franchise =  currdatval[1];
				//console.log(Franchise);	
			}
			if(currdatval[0] === 'Payment Method')
			{
				var PaymentMethod =  currdatval[1];
				//console.log(PaymentMethod);	
			}	
			if(currdatval[0] === 'Billing Account')
			{
				var billacccount =  parseInt(currdatval[1]);
				//console.log(billacccount);	
			}
			if(currdatval[0] === 'BillingAccountName')
			{
				var BillingAccountName =  currdatval[1];
				//console.log(BillingAccountName);	
			}
			if(currdatval[0].includes('--'))
			{
				splitsitestr = splitsitestr+'||'+custdetsplit[currdat];
				//console.log(splitsitestr);
			}
			
		}
		sheet1.addRow(['Customer Account',refnum,new Date(),'','','','Enterprise VAT Reg.','VGE','Rate Class - All','Europe','','','','','',companyname,'','','','Street','','',City,State,ZIPPostalCode,Country,Franchise,'','','','','','','','',Country,Franchise,'','','','','','','','',PaymentMethod,'','','','','','','','VGEL GBF6(UK VAT reg)','VGEL GBF6(UK VAT reg)','VGEL GBF6(UK VAT reg)','Print Centre','VGEL GBF6(UK VAT reg)','','','','','','','','','English','Monthly - Begin on 1st','Print Bill on Paper','Product Summary Format','Standard','Default','','Default','UK Pound','UK Med - Col 1','VGE','Owning-Cost-Center',0,'','','yes']);
		for(var currbillacc = 1;currbillacc<=billacccount;currbillacc++)
		{	
			var sitesplitarr = [];
			refnum = refnum+1;	
			sheet1.addRow(['Billable Account',refnum,new Date(),'','','','Enterprise VAT Reg.','VGE','Rate Class - All','Europe','','','','','',BillingAccountName+"_"+currbillacc,'','','','1st Street','','',City,State,ZIPPostalCode,Country,Franchise,'','','','','','','','',Country,Franchise,'','','','','','','','',PaymentMethod,'','','','','','','','VGEL GBF6(UK VAT reg)','VGEL GBF6(UK VAT reg)','VGEL GBF6(UK VAT reg)','Print Centre','VGEL GBF6(UK VAT reg)','','','','','','','','','English','Monthly - Begin on 1st','Print Bill on Paper','Product Summary Format','Standard','Default','','Default','UK Pound','UK Med - Col 1','VGE','Owning-Cost-Center',0,'','','yes']);
			sitesplitarr = splitsitestr.split('||');
			for(var currsite = 1;currsite<sitesplitarr.length;currsite++)
			{
				var splithyp = sitesplitarr[currsite].split('--');
				//console.log(splithyp[1]);
				var linkedbillacc = parseInt(splithyp[0]);
				if(linkedbillacc === currbillacc)
				{
					var splitsitefval = splithyp[1].split('>');					
					if(splitsitefval[0] === 'Site Account')
					{
						var SiteAccount = parseInt(splitsitefval[1]);
						//console.log(SiteAccount);
					}
					if(splitsitefval[0] === 'Siteaccname')
					{
						var SiteAccountprefix = splitsitefval[1];
						//console.log(SiteAccountprefix);
					}
				}
			}
			for(var currsiteaccl=1;currsiteaccl<=SiteAccount;currsiteaccl++)
			{
				refnum = refnum+1;
				sheet1.addRow(['Site Account',refnum,new Date(),'','','','Enterprise VAT Reg.','VGE','Rate Class - All','Europe','','','','','',SiteAccountprefix+"_"+currsiteaccl,'','','','1st Street','','',City,State,ZIPPostalCode,Country,Franchise,'','','','','','','','',Country,Franchise,'','','','','','','','',PaymentMethod,'','','','','','','','VGEL GBF6(UK VAT reg)','VGEL GBF6(UK VAT reg)','VGEL GBF6(UK VAT reg)','Print Centre','VGEL GBF6(UK VAT reg)','','','','','','','','','English','Monthly - Begin on 1st','Print Bill on Paper','Product Summary Format','Standard','Default','','Default','UK Pound','UK Med - Col 1','VGE','Owning-Cost-Center',0,'','','yes']);
			}
		}
		//sheet1.addRow({AccountType: 'Customer Account', ReferenceNumber: currcustomer+1,ActiveDate:new Date(),AccountCategory:'Enterprise VAT Reg.',MarketCode:'VGE',RateClass:'Rate Class - All',RegulatoryAuthority:'Europe'});
	}
	workbook1.xlsx.writeFile("./ui/Account_Creation_Template.xlsx").then(function() {
    console.log("xlsx file is written.");
	//console.log(Date());
});
res.send('success');
});
app.get('/ui/Account_Creation_Template', function (req, res,next) {
  res.download(path.join(__dirname, 'ui', 'Account_Creation_Template.xlsx'));
});
app.get('/getdwdcdr', function (req, res,next) {	
  var returnedval = req.query.retval;	
  res.download(path.join(__dirname, 'TestData', returnedval));
});

app.get('/getdwzip', function (req, res,next) {  
	var returnedval = req.query.retval;	
	res.download(path.join(__dirname, 'TestData', returnedval+'.zip'));
});
app.get('/getdwbpf', function (req, res,next) {  
	var returnedval = req.query.retval;	
	res.download(path.join(__dirname, 'BPF', returnedval));
});
app.get('/ui/BPF_Account_Creation_Template', function (req, res,next) {
  res.download(path.join(__dirname, 'ui', 'BPF_Creation_Template.xlsx'));
});
app.get('/PROVISIONING.html', function (req, res) {
sess = req.session;
if(sess.email) {
  res.sendFile(path.join(__dirname, 'ui', 'PROVISIONING.html')); 
}
else
{
	res.sendFile(path.join(__dirname, 'ui', 'Login.html')); 
}
  
});
app.get('/Index.html', function (req, res) {
sess = req.session;
if(sess.email) {
   res.sendFile(path.join(__dirname, 'ui', 'Index.html'));
}
else
{
	res.sendFile(path.join(__dirname, 'ui', 'Login.html')); 
}
 
});
app.get('/USAGECDRGENERATION.html', function (req, res) {
 sess = req.session;
  if(sess.email) {
  res.sendFile(path.join(__dirname, 'ui', 'USAGECDRGENERATION.html'));
}
else
{
	res.sendFile(path.join(__dirname, 'ui', 'Login.html')); 
}

});
app.get('/TemplateUpload.HTML', function (req, res) {
 sess = req.session;
  if(sess.email) {
  res.sendFile(path.join(__dirname, 'ui', 'TemplateUpload.HTML'));
}
else
{
	res.sendFile(path.join(__dirname, 'ui', 'Login.html')); 
}

});
app.get('/BPF.PROVISIONING.html', function (req, res) {
sess = req.session;
  if(sess.email) {
  res.sendFile(path.join(__dirname, 'ui', 'BPF.PROVISIONING.html'));
}
else
{
	res.sendFile(path.join(__dirname, 'ui', 'Login.html')); 
}

});


app.get('/ui/bootstrap-responsive.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap-responsive.min.css'));
});
app.get('/ui/bootstrap-responsive.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap-responsive.css'));
});
app.get('/ui/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});
app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});
app.get('/ui/index.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.css'));
});

app.get('/ui/index.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.png'));
});
app.get('/ui/add.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'add.png'));
});
app.get('/ui/more.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'more.png'));
});
app.get('/ui/copy.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'copy.png'));
});
app.get('/ui/delete.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'delete.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/jquery-3.1.1.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-3.1.1.min.js'));
});
app.get('/ui/selectize.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'selectize.js'));
});
app.get('/ui/selectize.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'selectize.css'));
});
app.get('/ui/normalize.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'normalize.css'));
});
app.get('/ui/main_BPF.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main_BPF.js'));
});
app.get('/ui/CDRJavascript.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'CDRJavascript.js'));
});
app.get('/ui/datetimepicker_css.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'datetimepicker_css.js'));
});
app.get('/ui/images2/cal.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images2/cal.gif'));
});
app.get('/images2/:imgname', function (req, res) {
  var imgname = req.params.imgname;
  res.sendFile(path.join(__dirname, 'images2', imgname));
});

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

app.get('/GetPP_BPF',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct price_plan from bpf_price_plan_t where proposition_type = \'"+propval+"\' and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});

app.get('/GetFC_BPF',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct flat_charge from bpf_flat_charge_t where proposition_type = \'"+propval+"\' and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});

app.get('/GetFC_BPF_acc_level',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct flat_charge from bpf_flat_charge_t where scenario_type = \'ACCOUNT_CREATE\' and proposition_type = \'"+propval+"\' and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});



app.get('/GetPP_BPF_Mov',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct price_plan from bpf_price_plan_t where scenario_type = \'SERVICE_MODIFY\' and proposition_type = \'"+propval+"\'  and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});

app.get('/GetFC_BPF_Mov',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct flat_charge from bpf_flat_charge_t where scenario_type = \'SERVICE_MODIFY\'and proposition_type = \'"+propval+"\' and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});
app.get('/GetDTP_BPF',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct device_type from bpf_device_type_t where  proposition_type = \'"+propval+"\'  and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});
app.get('/GetDTP_BPF_Mov',function (req, res) {
	var propval = req.query.retval;
	console.log(propval);
	////var pool = new Pool(config);
	pool.query("select distinct device_type from bpf_device_type_t where scenario_type = \'SERVICE_MODIFY\'and proposition_type = \'"+propval+"\' and status=\'Active\'", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 

  });
  
});

// Custom Functions Sudheer -- MAC file Generation  ***********************************************

//Function to retrieve the distinct proposition types from proposition_T

app.get('/getPropositionTYPE',function (req, res) {
	////var pool = new Pool(config);
	pool.query('select distinct PROPOSITION_TYPE from PROPOSITION_T where SCENARIO_TYPE= \'SERVICE_CREATE\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getkenanPropositionTYPE',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select * from kenan_proposition_t where status = 'Active' order by proposition_type", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getntwrkcountry',function (req, res) {
	////var pool = new Pool(config);
	pool.query('select distinct country from vge_network_code order by country', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getntwrkname',function (req, res) {
	////var pool = new Pool(config);
	var propval = req.query.retval;
	pool.query('select network from vge_network_code where country = \''+propval+'\'  order by network', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log('ntk len'+result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getmccmnc',function (req, res) {
	////var pool = new Pool(config);
	var propval = req.query.retval;
	var jsonobj = JSON.parse(propval);
	var country = jsonobj[0].country
	var ntwk = jsonobj[0].network
	if((ntwk.toString()).indexOf('zx')!=-1){
		ntwk = ntwk.replace( /\zx/g,'&');
	}
	pool.query('select distinct mcc_mnc,plmn_code,vf_uk_roaming_code,vf_cel_roaming_code,vf_de_roaming_code,vf_it_roaming_code,vf_cz_roaming_code,vf_hu_roaming_code,vf_pt_roaming_code,vf_ie_roaming_code,vf_es_roaming_code,vone_es_roaming_code,vf_nl_roaming_code,vone_nl_roaming_code  from vge_network_code where country = \''+country+'\' and network = \''+ntwk+'\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})


app.get('/getcountrycode',function (req, res) {
	////var pool = new Pool(config);
	var propval = req.query.retval;
	var jsonobj = JSON.parse(propval);
	if(jsonobj[0].country != '')
	{
		pool.query('select distinct country_code,plmn_code,mcc_mnc,mnc from vge_network_code where country = \''+jsonobj[0].country+'\' and network = \''+jsonobj[0].network+'\'', function(err,result,fields) {
		if(err) {
		return console.error('error running query', err);
		}
		else
		{
			console.log(result.length);
			res.send(JSON.stringify(result));
		}
    //output: 1 
  });
  }
  else
  {
	res.send('[{"country_code":"","plmn_code":""}]');
  }
})
app.get('/getcountry_code',function (req, res) {
	////var pool = new Pool(config);
	//pool.query('select distinct country,country_code,plmn_code,mcc_mnc,network from vge_network_code order by country_code', function(err,result,fields) {
	//pool.query('select * from vge_network_code order by country_code DESC', function(err,result,fields) {
	pool.query('select * from vge_network_code order by country_code desc , s_no asc', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else

	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getstate_code',function (req, res) {
	////var pool = new Pool(config);
	//pool.query('select distinct country,country_code,plmn_code,mcc_mnc,network from vge_network_code order by country_code', function(err,result,fields) {
	//pool.query('select * from vge_network_code order by country_code DESC', function(err,result,fields) {
	pool.query('select * from add_countrycode_vgenetcode', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else

	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getvgenetwork_code',function (req, res) {
	////var pool = new Pool(config);
	var propval = req.query.retval;
	var jsonobj = JSON.parse(propval);
	pool.query('select distinct '+jsonobj[0].header+' from vge_network_code where network = \''+jsonobj[0].network +'\' and country = \''+jsonobj[0].country +'\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log('select distinct '+jsonobj[0].header+' from vge_network_code where network = \''+jsonobj[0].network +'\' and country = \''+jsonobj[0].country +'\'')
		console.log(result.length);
		console.log('select distinct '+jsonobj[0].header+' from vge_network_code where network = \''+jsonobj[0].network +'\' and country = \''+jsonobj[0].country +'\'')
		console.log(result.length);
		
		if(result.length>=1){
		 res.send(JSON.stringify(result));
		}else{
			res.send("Not_Found");
		}
	}
    //output: 1 
  });
  
})

app.get('/getannotationspec',function (req, res) {
	////var pool = new Pool(config);
	var propval = req.query.retval;
	var jsonobj = JSON.parse(propval);
	pool.query('select distinct vge_item_name,vge_item_roaming,orig_type_id_usg,tadig,mccmnc,tat_source_country,tat_source_network,source_country,source_network,tat_target_country,tat_target_network,target_country,target_network,mo_mt_flag from annotation_spec_t where availability = \'Yes\' and country = \''+jsonobj[0].countrycode+'\' and availability = \'Yes\' and vge_code = \''+jsonobj[0].VGEcode+'\'', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		if(result.length>=1){
			res.send(JSON.stringify(result));
		}else{
			res.send("Not_Found");
		}
	}
    //output: 1 
  });
  
})
app.get('/getkenancountrycode',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select display_value from kenan_country_code_t order by display_value", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getkenanAccCategory',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select display_value from kenan_account_category_t order by display_value", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getkenanlanguage',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select display_value from kenan_input_language_t order by display_value", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/kenanbillcycle',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select display_value from kenan_bill_period_t order by display_value", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getcurrency',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select display_value from kenan_currency_code_t order by display_value", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})

app.get('/getkenancountry',function (req, res) {
	////var pool = new Pool(config);
	pool.query("select display_value from kenan_country_code_t order by display_value", function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})
app.get('/getexisserPP',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	console.log('iam here')
	var propvalarr = propval.split('|');
	pool.query("select distinct CODE,DESCRIP from mac_price_ref_t where OPCO_NAME='"+propvalarr[0]+"' and CATEGORY = '"+propvalarr[1]+"' order by CODE ASC,DESCRIP ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });
 
 app.get('/getNewserPP',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	var propvalarr = propval.split('|');
	pool.query("select distinct CODE,DESCRIP from mac_price_ref_t where OPCO_NAME='"+propvalarr[0]+"' and CATEGORY = '"+propvalarr[1]+"' order by CODE ASC,DESCRIP ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });

app.get('/getNewserPPdesc',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	var propvalarr = propval.split('|');
	pool.query("select distinct DESCRIP from mac_price_ref_t where OPCO_NAME ='"+propvalarr[0]+"' and CATEGORY = '"+propvalarr[1]+"' order by DESCRIP ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		console.log(JSON.stringify(result))
		res.send(JSON.stringify(result));
		
	}
    //output: 1 
  });
   });   
   
   
app.get('/CreateMAC', function (req, res) {
var returnedval = req.query.retval;
var jsonobj = JSON.parse(returnedval);
var Mod_Type;
var BillingAccount_Number;
var MSISDN_Number;
var Email_addrs;
var Exist_plan;
var Exist_plandesc;
var New_plan;
var New_plandesc;
var Mod_date;
var No_of_Mac_records;
var mac_rec
var r =2;
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
var filename = 'VGE_REPORT_DAILY_'+jyr+jmonth+jdate+jhr+jmin+jsec+'.csv';
var workbook =  new excel.Workbook();
workbook.csv.readFile('./macTestData/NewMAC.csv')
    .then(function() { 
		for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
		{
				Mod_Type = jsonobj[currcallrec].Type_of_Mod; 
                BillingAccount_Number = jsonobj[currcallrec].BAN;  
                MSISDN_Number = jsonobj[currcallrec].MSISDN; 
                Email_addrs = jsonobj[currcallrec].Email_add; 
                Exist_plan=jsonobj[currcallrec].Exis_PP_SOC;
				if(Exist_plan === 'Please Select')
				{
					Exist_plan = '';
				}
				Exist_plandesc=jsonobj[currcallrec].Exis_PP_SOC_desc; 
				if(Exist_plandesc === 'Please Select')
				{
					Exist_plandesc = '';
				}
                New_plan=jsonobj[currcallrec].New_PP_SOC; 
				if(New_plan === 'Please Select')
				{
					New_plan = '';
				}
                New_plandesc=jsonobj[currcallrec].New_PP_SOC_desc; 
				if(New_plandesc === 'Please Select')
				{
					New_plandesc = '';
				}

                Mod_date=jsonobj[currcallrec].Mod_date;
				No_of_Mac_records=jsonobj[currcallrec].Mac_rec_count;
				mac_rec =0;
				mac_rec = parseInt(No_of_Mac_records,10);
				console.log('Mac_records_output'+mac_rec);
					 // Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI 
					 if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
					{
						var worksheet = workbook.getWorksheet(1);
						var row = worksheet.getRow(r);
						row.getCell(1).value = BillingAccount_Number
                                row.getCell(2).value = MSISDN_Number
                                row.getCell(3).value = changeCase.upperCase(Email_addrs)
                                row.getCell(4).value = Exist_plan
                                row.getCell(5).value = Exist_plandesc
                                row.getCell(6).value = New_plan
                                row.getCell(7).value = New_plandesc
                                row.getCell(8).value = Mod_date
								row.getCell(9).value = Mod_Type
                                row.commit();
								r=r+1;
					}
					
					 if( mac_rec>1 && mac_rec<5000 )
					{
						for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
						{
							var worksheet = workbook.getWorksheet(1);
							var row = worksheet.getRow(r);
							row.getCell(1).value = BillingAccount_Number 
									row.getCell(2).value = parseInt(MSISDN_Number)+Rec_ini
									row.getCell(3).value = changeCase.upperCase(Email_addrs)
									row.getCell(4).value = Exist_plan
									row.getCell(5).value = Exist_plandesc
									row.getCell(6).value = New_plan
									row.getCell(7).value = New_plandesc
									row.getCell(8).value = Mod_date
									row.getCell(9).value = Mod_Type
									row.commit();
									r=r+1;							  
						}
					}					
					
					// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI
		}
        return workbook.csv.writeFile('./macTestData/'+filename);   
    })
    workbook.save;
	res.send(filename);   
});
   
 app.get('/getdwnldMAC', function (req, res,next) {	
  var returnedval = req.query.retval;	
  res.download(path.join(__dirname, 'macTestData', returnedval));
});

app.get('/ui/alertify.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'alertify.min.js'));
});

app.get('/ui/alertify.core.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'alertify.core.css'));
});

app.get('/ui/alertify.default.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'alertify.default.css'));
});

app.get('/ui/m_1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm_1.jpg'));
});

app.get('/ui/m_2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm_2.jpg'));
});

app.get('/ui/m_3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm_3.jpg'));
});

app.get('/ui/m_4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm_4.jpg'));
});
app.get('/ui/loading.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'loading.gif'));
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Germany MAC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.get('/CreateMAC_DE', function (req, res) {

  var returnedval = req.query.retval;
  var jsonobj = JSON.parse(returnedval);
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
 
  var randfileid = 	Math.floor(100 + Math.random() * 900);
  var filename = 'DWH_VGE_CSA_TRANSACTIONS_'+jyr+jmonth+jdate+jhr+jmin+jsec;
 
 var DE_use_case;
 var REPORT_MONTH;
 var REPORT_DESC;
 var BAN;
 var DATE;
 var SUBSCRIBER_NO;
 var LAST_OR_BUSINESS_NAME_1;
 var LAST_OR_BUSINESS_NAME_3;
 var TRANSACTION_TYPE;
 var L5_TARIFF_DESC;
 var TRANSACTION_EFFECTIVE_DATE;
 var TRANSACTION_CREATION_DATE;
 var TRANSACTION_CREATION_TIME;
 var TRANSACTION_TYPE_DESC;
 var TARIFF_OPTION;
 var L4_TARIFF_DESC;
 var SOC;
 var SOC_DESC;
 var COMMITMENT_PERIOD;
 var COMMITMENT_PERIOD_START_DATE;
 var COMMITMENT_PERIOD_END_DATE;
 var CANCELLATION_DATE;
 var OLD_VALUE;
 var CLIENT_ID;
 var CNT_TRANSACTION;
  
  
  Mac_rec = '';
  
  for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
  {
	DE_use_case= jsonobj[currcallrec].DE_use_case;
	REPORT_MONTH = jyr+jmonth+'                                                                                ';
	REPORT_MONTH = REPORT_MONTH.substring(0,6);
	REPORT_DESC = 'MAC_REPORT'+'                                                                                ';
	REPORT_DESC = REPORT_DESC.substring(0,20);
	
	var ban = parseInt(jsonobj[currcallrec].DE_BAN);
	var ban_f= zpad(ban, 10); 
	console.log(ban_f);
	
	BAN = ban_f +'                                                                                ';
	BAN = BAN.substring(0,10);
	DATE = jdate+jmonth+jyr+'                                                                                ';
	DATE = DATE.substring(0,8);
	//MSISDN = jsonobj[currcallrec].DE_MSISDN;
	SUBSCRIBER_NO = 'GSM'+jsonobj[currcallrec].DE_MSISDN+'                                                                                ';
	SUBSCRIBER_NO = SUBSCRIBER_NO.substring(0,20);
	LAST_OR_BUSINESS_NAME_1 = jsonobj[currcallrec].DE_Name1+'                                                                        ';
	LAST_OR_BUSINESS_NAME_1 = LAST_OR_BUSINESS_NAME_1.substring(0,30);
	LAST_OR_BUSINESS_NAME_3 = jsonobj[currcallrec].DE_Name2+'                                                                        ';
	LAST_OR_BUSINESS_NAME_3 = LAST_OR_BUSINESS_NAME_3.substring(0,30);
	
	//Date logic
	var creation_date = jsonobj[currcallrec].DE_cre_date;
	creation_date =  creation_date.replace( /\-/g,'');
	console.log('creation date:-'+ creation_date)
	var creation_time = creation_date.split(' ');
	var creation_time_f = creation_time[1].replace( /\:/g,'');
	console.log('creation time:- '+creation_time_f)
	var eff_date = jsonobj[currcallrec].DE_eff_date;
	eff_date =  eff_date.replace( /\-/g,'');
	console.log('eff date:-'+ eff_date)
	
	
	TRANSACTION_TYPE = jsonobj[currcallrec].TRANSACTION_TYPE+'                                                                        ';
	TRANSACTION_TYPE = TRANSACTION_TYPE.substring(0,2);
	L5_TARIFF_DESC = jsonobj[currcallrec].DE_Tarrif_code_desc+'                                                                        ';
	L5_TARIFF_DESC = L5_TARIFF_DESC.substring(0,71);
	TRANSACTION_EFFECTIVE_DATE = eff_date+'                                                                        ';
	TRANSACTION_EFFECTIVE_DATE = TRANSACTION_EFFECTIVE_DATE.substring(0,8);
	TRANSACTION_CREATION_DATE = creation_date+'                                                                        ';
	TRANSACTION_CREATION_DATE = TRANSACTION_CREATION_DATE.substring(0,8);
	TRANSACTION_CREATION_TIME = creation_time_f+'                                                                        ';
	TRANSACTION_CREATION_TIME = TRANSACTION_CREATION_TIME.substring(0,7);
	TRANSACTION_TYPE_DESC = jsonobj[currcallrec].TRANSACTION_TYPE_DESC+'                                                                        ';
	TRANSACTION_TYPE_DESC = TRANSACTION_TYPE_DESC.substring(0,50);
	TARIFF_OPTION = jsonobj[currcallrec].DE_Tarrif_code+'                                                                        ';
	TARIFF_OPTION = TARIFF_OPTION.substring(0,9);
	L4_TARIFF_DESC = jsonobj[currcallrec].DE_Tarrif_code_desc+'                                                                        ';
	L4_TARIFF_DESC = L4_TARIFF_DESC.substring(0,71);
	SOC = ''+'                                                                        ';
	SOC = SOC.substring(0,9);
	SOC_DESC = ''+'                                                                                                                                                                                                                        ';
	SOC_DESC = SOC_DESC.substring(0,200);
	COMMITMENT_PERIOD = ''+'                                                                        ';
	COMMITMENT_PERIOD = COMMITMENT_PERIOD.substring(0,6);
	COMMITMENT_PERIOD_START_DATE = ''+'                                                                        ';
	COMMITMENT_PERIOD_START_DATE = COMMITMENT_PERIOD_START_DATE.substring(0,8);
	COMMITMENT_PERIOD_END_DATE = ''+'                                                                        ';
	COMMITMENT_PERIOD_END_DATE = COMMITMENT_PERIOD_END_DATE.substring(0,8);
	CANCELLATION_DATE = ''+'                                                                        ';
	CANCELLATION_DATE = CANCELLATION_DATE.substring(0,8);
	OLD_VALUE = jsonobj[currcallrec].DE_Old_value+'                                                                        ';
	OLD_VALUE = OLD_VALUE.substring(0,40);
	CLIENT_ID = ''+'                                                                        ';
	CLIENT_ID = CLIENT_ID.substring(0,11);
	CNT_TRANSACTION = ''+'                                                                        ';
	CNT_TRANSACTION = CNT_TRANSACTION.substring(0,6);

	DE_No_of_Rec_Mac = parseInt(jsonobj[currcallrec].DE_No_of_Rec_Mac);
	console.log(DE_No_of_Rec_Mac)
	
	if (DE_No_of_Rec_Mac<=1){
		
		
		Mac_rec = Mac_rec+REPORT_MONTH+REPORT_DESC+BAN+DATE+SUBSCRIBER_NO+LAST_OR_BUSINESS_NAME_1+LAST_OR_BUSINESS_NAME_3+TRANSACTION_TYPE+L5_TARIFF_DESC+TRANSACTION_EFFECTIVE_DATE+TRANSACTION_CREATION_DATE+TRANSACTION_CREATION_TIME+TRANSACTION_TYPE_DESC+TARIFF_OPTION+L4_TARIFF_DESC+SOC+SOC_DESC+COMMITMENT_PERIOD+COMMITMENT_PERIOD_START_DATE+COMMITMENT_PERIOD_END_DATE+CANCELLATION_DATE+OLD_VALUE+CLIENT_ID+CNT_TRANSACTION+"\n";
	
	}else if(DE_No_of_Rec_Mac>1){
		var k = 0;
		for(var currcdr = 0;currcdr<DE_No_of_Rec_Mac;currcdr++)
		{
			SUBSCRIBER_NO = 'GSM'+(parseInt(jsonobj[currcallrec].DE_MSISDN)+currcdr)+'                                                                                ';
			SUBSCRIBER_NO = SUBSCRIBER_NO.substring(0,20);
			Mac_rec = Mac_rec+REPORT_MONTH+REPORT_DESC+BAN+DATE+SUBSCRIBER_NO+LAST_OR_BUSINESS_NAME_1+LAST_OR_BUSINESS_NAME_3+TRANSACTION_TYPE+L5_TARIFF_DESC+TRANSACTION_EFFECTIVE_DATE+TRANSACTION_CREATION_DATE+TRANSACTION_CREATION_TIME+TRANSACTION_TYPE_DESC+TARIFF_OPTION+L4_TARIFF_DESC+SOC+SOC_DESC+COMMITMENT_PERIOD+COMMITMENT_PERIOD_START_DATE+COMMITMENT_PERIOD_END_DATE+CANCELLATION_DATE+OLD_VALUE+CLIENT_ID+CNT_TRANSACTION+"\n";
			
		}	
	}

	
  }
  
  fs.writeFile('macTestData/'+filename, Mac_rec,  function(err){})
  res.send(filename);
   
});


app.get('/getGermany_mac_usecase',function (req, res) {
	////var pool = new Pool(config);
	pool.query(' select usecase from germany_usecase_t where active=\'YES\' order by usecase ', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log('row-length:-'+result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
  
})


app.get('/get_ger_type_desc_DE',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query(' select transaction_type,transaction_type_desc from germany_usecase_t where usecase=\''+propval+'\' and active=\'YES\' ', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log('row-length:-'+result.length);
		var De_pp_details = result[0].transaction_type+"||"+result[0].transaction_type_desc;
		res.send(De_pp_details);
		//console.log(JSON.stringify(result))
	}
    //output: 1 
  });
  
})


app.get('/getNewserPP_DE',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);

	pool.query("select CODE,DESCRIP from mac_price_ref_t where OPCO_ID = '1101' order by CODE ASC,DESCRIP ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });
   
 app.get('/GetPP_DE',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query('select DESCRIP from mac_price_ref_t where CODE=\''+propval+'\' and OPCO_ID = \'1101\' ', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		if(result.length >= 1)
		{
			res.send(result[0].DESCRIP);
		}
		else
		{
			res.send('');
		}
	}
    //output: 1 
  });
  
});  
   
app.get('/GetPP_desc_DE',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query('select CODE from mac_price_ref_t where DESCRIP=\''+propval+'\' and OPCO_ID = \'1101\' ', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		if(result.length >= 1)
		{
			res.send(result[0].CODE);
		}
		else
		{
			res.send('');
		}
	}
    //output: 1 
  });
  
}); 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Germany MAC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Netherland MAC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


 app.get('/CreateMAC_NL', function (req, res) {
	var returnedval = req.query.retval;
	var jsonobj = JSON.parse(returnedval);
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

	var filename = 'NL_MAC_'+jyr+jmonth+jdate+jhr+jmin+jsec+'.txt';
	console.log(filename);

	//fs.writeFile('TestData/'+filename, mactxt,  function(err){});
	//var Usage_id
	var BillingAccount_Number;
	var MSISDN_Number;
	var Date_nL;
	var PriceP_Name;
	var PriceP_Desc;
	var MAC;
	var Add_onName;
	var Add_onDesc;
	var Add_onCondiscn;
	var mactxt = "BAN|MSISDN|DATE|PP_NAME|PP_DESC|MAC|ADD_ON_NAME|ADD_ON_DESCRIPTION|ADD_ON_CON_DISCON"+"\r\n";
	var No_of_Rec_NL;
	var mac_rec;
	// mactxt = ''
	for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
	{
	//	Mod_Type=jsonobj[currcallrec].type_of_mod_NL+'1';
		//console.log(Mod_Type)
		BillingAccount_Number = jsonobj[currcallrec].BAN_NL;
		console.log(BillingAccount_Number)
		MSISDN_Number = parseInt(jsonobj[currcallrec].MSISDN_NL);
		console.log(MSISDN_Number)
		MAC = jsonobj[currcallrec].Mac;
		console.log(MAC)
		PriceP_Name= jsonobj[currcallrec].PP_NAME_NL;
		
		PriceP_Desc = jsonobj[currcallrec].PP_DESC_NL;
		Date_nL = (jsonobj[currcallrec].Mod_date_NL).replace(/\-/g,'/');
		console.log(Date_nL)

		console.log(Date_nL)
		Add_onName = jsonobj[currcallrec].Name_NL;
		Add_onDesc = jsonobj[currcallrec].Desc_NL;
		Add_onCondiscn = jsonobj[currcallrec].Add_onCondiscn;
		No_of_Rec_NL=jsonobj[currcallrec].No_of_Rec_NL;
		mac_rec =0;
		mac_rec = parseInt(No_of_Rec_NL);
		if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
		{
			mactxt = mactxt + BillingAccount_Number+'|'+MSISDN_Number+'|'+Date_nL+'|'+PriceP_Name+'|'+PriceP_Desc+'|'+MAC+'|'+Add_onName+'|'+Add_onDesc+'|'+Add_onCondiscn+"\r\n";
		}
		if( mac_rec>1 && mac_rec<5000 )
		{
			for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
			{
				mactxt = mactxt + BillingAccount_Number+'|'+MSISDN_Number+'|'+Date_nL+'|'+PriceP_Name+'|'+PriceP_Desc+'|'+MAC+'|'+Add_onName+'|'+Add_onDesc+'|'+Add_onCondiscn+"\r\n";
				MSISDN_Number = MSISDN_Number+1;
			}
		}
	}
	fs.writeFile('macTestData/'+filename, mactxt,  function(err){});
	res.send(filename);
  });
  
  
  
  app.get('/getNewserPP_NL',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);

	pool.query("select CODE,DESCRIP from mac_price_ref_t where OPCO_ID = \'1107\' order by CODE ASC,DESCRIP ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });
 app.get('/getNewserPP_NLdesc',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);

	pool.query("select distinct DESCRIP from mac_price_ref_t where OPCO_ID = \'1107\' order by DESCRIP ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });
   
 app.get('/GetPP_NL',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query('select DESCRIP from mac_price_ref_t where CODE=\''+propval+'\' and OPCO_ID = \'1107\' ', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		if(result.length >= 1)
		{
			res.send(result[0].DESCRIP);
		}
		else
		{
			res.send('');
		}
	}
    //output: 1 
  });
  
});  
   
app.get('/GetPP_desc_NL',function (req, res) {
	var propval = req.query.retval;
	var ppdescarr = propval.split("|");
	var ppdesc = ppdescarr[0];
	var currpp = ppdescarr[1];
	console.log(propval);
	////var pool = new Pool(config);
	pool.query('select CODE from mac_price_ref_t where DESCRIP=\''+ppdesc+'\' and OPCO_ID = \'1107\' ', function(err,result,fields) {
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		var match = 'no';
		console.log(result);
		if(result.length >= 1)
		{
			for(var i = 0;i<=result.length;i++)
			{
				if(result[i] != null)
				{
					if(currpp === result[i].CODE)
					{
						match = 'yes';
						break;
					}
				}			
			}
			if(match === 'yes')
			{
				console.log(currpp);
				res.send(currpp);
			}
			else
			{
				res.send(result[0].CODE);
			}
			
		}
		else
		{
			res.send('');
		}  
	}		//output: 1 
  });
  
}); 



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Netherland MAC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Ireland MAC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


app.get('/CreateMAC_IE', function (req, res) {
  console.log('Hi sudheer .!!');	
  
  var returnedval = req.query.retval;
  var jsonobj = JSON.parse(returnedval);
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
 

  var Month_flag='';
  if(jmonth=='01'){Month_flag='JAN'}else if (jmonth=='02'){Month_flag='FEB'} else if (jmonth=='03'){Month_flag='MAR'} else if (jmonth=='04'){Month_flag='APR'} else if (jmonth=='05'){Month_flag='MAY'} else if (jmonth=='06'){Month_flag='JUN'} else if (jmonth=='07'){Month_flag='JUL'} else if (jmonth=='08'){Month_flag='AUG'} else if (jmonth=='09'){Month_flag='SEP'} else if (jmonth=='10'){Month_flag='OCT'} else if (jmonth=='11'){Month_flag='NOV'} else if (jmonth=='12'){Month_flag='DEC'} 
  console.log('Curr_month flag:- '+Month_flag);
  
  var zipfinename = 'IE_MAC_'+Month_flag+'_'+jyr+jmonth+jdate+jhr+jmin+jsec;
  fs.mkdirSync(__dirname+'\\macTestData\\'+zipfinename);
  console.log(jyr+jmonth+jdate+jhr+jmin+jsec);
  console.log('Month Flag is:-'+ jmonth)
  
  //fs.createReadStream('macTestData/R.001233.S.VGE MAC Package Report.xlsx').pipe(fs.createWriteStream('macTestData/'+zipfinename+'/R.001233.S.VGE MAC Package Report.xlsx'));
  //fs.createReadStream('macTestData/COR1139.S.Bundle Codes VGE Version.xlsx').pipe(fs.createWriteStream('macTestData/'+zipfinename+'/COR1139.S.Bundle Codes VGE Version.xlsx'));
  fs.createReadStream('macTestData/R.001246.S.Connect Disconnect VGE.xlsx').pipe(fs.createWriteStream('macTestData/'+zipfinename+'/R.001246.S.Connect Disconnect VGE.xlsx'));
  var workbook =  new excel.Workbook();


  //MAC package report variables
  
  
	var Mod_Type;
	var No_of_Mac_records;
	var Execution_flag;
	Execution_flag = 'yes';
	
	var Fiscal_Period ;
	var Mac_pkg_Date;
	var Subscriber_Number;
	var Value_Segment_Group;
	var Top_Level_Parent;	
	var Top_Level_Parent_Name;	
	var Customer_Number;
	var Package_Code;
	var Package_Code_Other
	var Connections;
	var Total_Disconnections;
	var Package_Migrations_From;
	var Package_Migrations_To;
	var Net_Growth;
	
	var Customer_Top_Level_Parent1;
	var Customer_Top_Level_Parent2;
	var Customer_Group_Code;
	var Customer_Name;	
	var Subscriber_Number1;	
	var Subscriber_Number2;
	var Non_Core_Bundle_Code;
	var Non_Core_Bundle_Desc;
	var Bundle_Start_Date;
	var Eff_End_Date;
	var Metrics;
	var Subscribers;
 
  workbook.xlsx.readFile('macTestData/R.001233.S.VGE MAC Package Report.xlsx')
    .then(function() { 
	if(Execution_flag == 'yes')
	{	var r =4;
		for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
			{
				Mod_Type = jsonobj[currcallrec].type_of_mod_IE; 
				No_of_Mac_records=jsonobj[currcallrec].No_of_Rec_IE;
				mac_rec =0;
				mac_rec = parseInt(No_of_Mac_records,10);
				
				Fiscal_Period= jyr+jmonth;
				Mac_pkg_Date= (jsonobj[currcallrec].Mod_date_IE).replace(/\-/g,'/');
				Subscriber_Number=jsonobj[currcallrec].MSISDN_IE;
				if((Subscriber_Number.substring(0,1))== '0')
				{
				   Subscriber_Number = (Subscriber_Number.substring(1,Subscriber_Number.length))
				}
				
				Value_Segment_Group='Corporate';
				Top_Level_Parent='';	
				Top_Level_Parent_Name='';
				Customer_Number=jsonobj[currcallrec].BAN_IE;
				console.log('c.no:'+ Customer_Number)
				Package_Code= jsonobj[currcallrec].package_plan_code;
				Package_Code_Other='';
				if(Mod_Type=='Add'){
					Connections='1';
					Total_Disconnections='0';
					Net_Growth='1';
				}else if(Mod_Type=='Terminate'){
					Connections='0';
					Total_Disconnections='(1)';					
					Net_Growth='(1)';
				}
				Package_Migrations_From='0';
				Package_Migrations_To='0';
				
				
				console.log('Mac_records_output'+mac_rec);
				
				 // Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI 
				 if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
				{
					
					var worksheet = workbook.getWorksheet(1);
					var row = worksheet.getRow(r);
					row.getCell(1).value = Fiscal_Period;
					row.getCell(2).value =  Mac_pkg_Date;
					row.getCell(3).value = '0'+Subscriber_Number;
					row.getCell(4).value = Value_Segment_Group;
					row.getCell(5).value = Top_Level_Parent;
					row.getCell(6).value = Top_Level_Parent_Name;
					row.getCell(7).value = Customer_Number;
					row.getCell(8).value = Package_Code;
					row.getCell(9).value = Package_Code_Other;
					row.getCell(10).value = Connections;
					row.getCell(11).value = Total_Disconnections;
					row.getCell(12).value = Package_Migrations_From;
					row.getCell(13).value = Package_Migrations_To;
					row.getCell(14).value = Net_Growth;
					row.commit();
					r=r+1;
				}
				
				 if( mac_rec>1 && mac_rec<5000 )
				{
					for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
					{
						var worksheet = workbook.getWorksheet(1);
						var row = worksheet.getRow(r);				
						row.getCell(1).value = Fiscal_Period;
						row.getCell(2).value =  Mac_pkg_Date;
						row.getCell(3).value = '0'+(parseInt(Subscriber_Number)+Rec_ini);
						row.getCell(4).value = Value_Segment_Group;
						row.getCell(5).value = Top_Level_Parent;
						row.getCell(6).value = Top_Level_Parent_Name;
						row.getCell(7).value = Customer_Number;
						row.getCell(8).value = Package_Code;
						row.getCell(9).value = Package_Code_Other;
						row.getCell(10).value = Connections;
						row.getCell(11).value = Total_Disconnections;
						row.getCell(12).value = Package_Migrations_From;
						row.getCell(13).value = Package_Migrations_To;
						row.getCell(14).value = Net_Growth;
						row.commit();
						r=r+1;
					}
				}					
						
				// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI
			}
			workbook.xlsx.writeFile('macTestData/'+zipfinename+'/R.001233.S.VGE MAC Package Report.xlsx');
			workbook.save;
			workbook.close;
	}
	if((Execution_flag == 'yes'))
		
		{

				workbook.xlsx.readFile('macTestData/COR1139.S.Bundle Codes VGE Version.xlsx')
				.then(function() { 
					var r =6;
					for(var currcallrec = 0;currcallrec<jsonobj.length;currcallrec++)
					{
						Mod_Type = jsonobj[currcallrec].type_of_mod_IE; 
						No_of_Mac_records=jsonobj[currcallrec].No_of_Rec_IE;
						mac_rec =0;
						mac_rec = parseInt(No_of_Mac_records,10);
						
						Customer_Top_Level_Parent1 ='';
						Customer_Top_Level_Parent2 ='';
						Customer_Group_Code='';
						Customer_Number=jsonobj[currcallrec].BAN_IE;
						console.log('c.no:'+ Customer_Number)
						Customer_Name='';
						Subscriber_Number1=jsonobj[currcallrec].MSISDN_IE;
						if((Subscriber_Number1.substring(0,1))== '0')
						{
						   Subscriber_Number1 = (Subscriber_Number1.substring(1,Subscriber_Number1.length))
						}						
						Subscriber_Number2='';
						Package_Code=jsonobj[currcallrec].package_plan_code;
						Non_Core_Bundle_Code=jsonobj[currcallrec].bundle_soc_code;
						Non_Core_Bundle_Desc=jsonobj[currcallrec].bundle_soc_description;
						Bundle_Start_Date=(jsonobj[currcallrec].Mod_date_IE).replace(/\-/g,'/');
						if(Mod_Type=='Add'){
							Eff_End_Date='';
						}else if(Mod_Type=='Terminate'){
							Eff_End_Date=(jsonobj[currcallrec].Mod_date_IE).replace(/\-/g,'/');
						}
							
						Metrics	='';	
						Subscribers	='1';			
						
						console.log('Mac_records_output'+mac_rec);
						
						// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI 
						if(mac_rec=='' || mac_rec<1 || mac_rec==1 || mac_rec>5000 || mac_rec!==mac_rec)
						{
							
							var worksheet = workbook.getWorksheet(1);
							var row = worksheet.getRow(r);
							row.getCell(1).value = Customer_Top_Level_Parent1;
							row.getCell(2).value = Customer_Top_Level_Parent2;
							row.getCell(3).value = Customer_Group_Code;
							row.getCell(4).value = Customer_Number;
							row.getCell(5).value = Customer_Name;
							row.getCell(6).value = '0'+Subscriber_Number1;
							row.getCell(7).value = Subscriber_Number2;
							row.getCell(8).value = Package_Code;
							row.getCell(9).value = Non_Core_Bundle_Code;
							row.getCell(10).value = Non_Core_Bundle_Desc;
							row.getCell(11).value = Bundle_Start_Date;
							row.getCell(12).value = Eff_End_Date;
							//row.getCell(13).value = Metrics;
							row.getCell(14).value = Subscribers;
							row.commit();
							r=r+1;
						}
						
						 if( mac_rec>1 && mac_rec<5000 )
						{
							for(var Rec_ini = 0;Rec_ini<mac_rec;Rec_ini++)
							{
								var worksheet = workbook.getWorksheet(1);
								var row = worksheet.getRow(r);
								
								row.getCell(1).value = Customer_Top_Level_Parent1;
								row.getCell(2).value = Customer_Top_Level_Parent2;
								row.getCell(3).value = Customer_Group_Code;
								row.getCell(4).value = Customer_Number;
								row.getCell(5).value = Customer_Name;
								row.getCell(6).value = '0'+(parseInt(Subscriber_Number1)+Rec_ini);
								row.getCell(7).value = Subscriber_Number2;
								row.getCell(8).value = Package_Code;
								row.getCell(9).value = Non_Core_Bundle_Code;
								row.getCell(10).value = Non_Core_Bundle_Desc;
								row.getCell(11).value = Bundle_Start_Date;
								row.getCell(12).value = Eff_End_Date;
								//row.getCell(13).value = Metrics;
								row.getCell(14).value = Subscribers;
								row.commit();
								r=r+1;
							}
						}					
								
						// Logic to update the Excel with duplicate Rows of the current json in-line to the requested Record count in GUI
					}
					workbook.xlsx.writeFile('macTestData/'+zipfinename+'/COR1139.S.Bundle Codes VGE Version.xlsx');
					workbook.save;
					workbook.close;
							
					//console.log(Date());
					
							if (Execution_flag == 'yes')
		{	
				//fix-
				 fs.appendFile('BPF/Master_Temp_to_Store_Bpf_Formatting_Status.txt', "\r\n"+zipfinename+'$ZIP_in',  function(err){
				  ////var pool = new Pool(config);	
				  var exec = require("child_process").exec
				exec('FormatBPF.vbs').unref()
				  console.log('Server Updated Current New folder in Master Temp file:- '+zipfinename+'$ZIP_in');
					if(err) {
					  return console.error('Error running update New folder in Master Temp file .!!', err);
					}
					else
					{
						var fstatus = zipfinename+'$Complete'
						var Temp_content ;
						console.log('fstatus value is: '+zipfinename+'$Complete')
						waitUntil()
						.interval(500)
						.times(Infinity)
						.condition(function() {
						
						fs.readFile('BPF/Master_Temp_to_Store_Bpf_Formatting_Status.txt', 'utf8', function(err, data) {
						  if (err){
							  return console.error('Error reading New folder in Master Temp file .!!', err);
						  }
						  else
						  {
							  console.log('OK read the Master Temp file !!');
							  console.log(data)
							  Temp_content = data.toString();
							  if(Temp_content.indexOf(fstatus)!=-1)
							  {
								Temp_content ="Update Done"
							  }
						  }		  
						});
						return (Temp_content == "Update Done" ? true : false);
						})
						.done(function(result) {
							res.send(zipfinename+'.zip');
						});	
						
					}
				 
				 })  
				 
		}
				});	
			console.log('Zip file name is: - '+zipfinename);						
			
		}	


		//console.log(Date()); 	
    });

	/* if (Execution_flag == 'yes')
	{	
		  
		  var waitTill = new Date(new Date().getTime() + 8 * 1000);
										while(waitTill > new Date()){
										}
											  
		  console.log('Entered to Zip')
		  var output = fs.createWriteStream(__dirname + '\\macTestData\\'+zipfinename+'.zip');
		  var archive = archiver('zip', {
			store: true // Sets the compression method to STORE. 
			});
			output.on('close', function() {
			console.log(archive.pointer() + ' total bytes');
			console.log('archiver has been finalized and the output file descriptor has closed.');
			});
			// good practice to catch this error explicitly 
			archive.on('error', function(err) {
			throw err;
			});
		 
		// pipe archive data to the file 
			archive.pipe(output);
			//fs.accessSync(__dirname + '/macTestData/'+zipfinename+'/COR1139.S.Bundle Codes VGE Version.xlsx');
			//pdfStream = fs.createReadStream(filePath);
			//archive.append(pdfStream, {name: 'COR1139.S.Bundle Codes VGE Version.xlsx'+'.xlsx'});
			//archive.glob('macTestData/'+zipfinename+'/*.xlsx');
			//archive.bulk([
			//{ expand: true, cwd: 'source', src: ['**'], dest: 'source'}
			//]);
			    archive.directory('macTestData/'+zipfinename);	
				archive.finalize();
				console.log(zipfinename);
		
	}*/

//res.send(zipfinename);	

});





 app.get('/getNewserPP_IE',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);

	//pool.query("select package_plan_code,bundle_soc_code,bundle_soc_description from ie_price_plan_t where vge_direct_dynamic_tarrif = \'1105\'",function(err,result,fields){
	pool.query("select vge_direct_dynamic_tarrif from ie_price_plan_t where opco_code = \'1105\' order by vge_direct_dynamic_tarrif ASC",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log(result.length);
		res.send(JSON.stringify(result));
	}
    //output: 1 
  });
   });
 
app.get('/get_type_desc_IE',function (req, res) {
	var propval = req.query.retval;
	////var pool = new Pool(config);
	pool.query("select package_plan_code,bundle_soc_code,bundle_soc_description from ie_price_plan_t where vge_direct_dynamic_tarrif = \'"+propval+"\'",function(err,result,fields){
    if(err) {
      return console.error('error running query', err);
    }
	else
	{
		console.log('row-length:-'+result.length);
		if(result.length >= 1)
		{
		var IE_pp_details = result[0].package_plan_code+"||"+result[0].bundle_soc_code+"||"+result[0].bundle_soc_description;
		
			res.send(IE_pp_details);
		}
		else
		{
			res.send('');
		}
		//console.log(JSON.stringify(result))
	}
    //output: 1 
  });
  
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Ireland MAC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 




// Custom Functions Sudheer -- MAC file Generation  ***********************************************

// Custom Functions Sudheer -- MAC file Generation  ***********************************************
var port = 8081; // Use 8080 for local development because you might already have apache running on 80
https.createServer(httpsOptions, app).listen(8081,function () {
 console.log('Vodafone Test Data Generation app listening on port '+port+'!!')});
var port = 8082; // Use 8080 for local development because you might already have apache running on 80
app.listen(8082, function () {
  console.log('Vodafone Test Data Generation app listening on port '+port+'!!');
});