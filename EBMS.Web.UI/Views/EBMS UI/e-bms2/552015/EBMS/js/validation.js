function validate(form)
		
	{	
		var errors=[];
		
		var errornumber1=0;
		var errornumber2=0;
		var errornumber3=0;
		var errornumber4=0;
		var errornumber5=0;
		var errornumber6=0;
		var errornumber7=0;
		var errornumber8=0;
		var errornumber9=0;
		var errornumber0=0;
		
		var totalnumber=0;
		
		var totalerror=0;
		
		ctr=0;
	
	var re=/^[\w ]+$/;
	/*var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z](2,4))$/;*/
	
	var feedback="";
	var email=document.getElementById('email').value;
	var elength=email.length;
	var atpos=email.indexOf('@');
	var atdot=email.lastIndexOf('.');
	var tld=email.substring(atdot);
	
	feedback+= "string length = " + elength + "<br>";
	feedback+= "@ is located at = " + atpos + "<br>";
	feedback+= "last . is located at = " + atdot + "<br>";
	feedback+= "top-level domain = " + tld + "<br>";

	
	if(atpos<1 || atdot<1)
	{
		ctr++;
		/*errornumber1+=1;
		
	/*errors.push("Invalid email address!");*/
	
		document.getElementById("email").style.borderColor = "red";
		 
	
	}
	else if (atpos>atdot)
	{
	
	ctr++;
	/*errornumber2+=1;
		
	/*errors.push("@ sign is not in the right position!");*/
	
	}
	else {  }
	
	document.getElementById('feedback').innerHTML=feedback;


	if(form.fname.value==""){
		
		ctr++;
		/*errornumber3+=1;
		
		/*errors.push("FirstName is required!");*/	
	}else if(!re.test(form.fname.value)){
		
		ctr++;/*errornumber4+=1;
		
		/*errors.push("FirstName contains invalid characters!");*/
	}
	
	
	if(form.lname.value==""){
			ctr++;
			document.getElementById("lastname").style.backgroundColor = "yellow";
			/*errornumber5+=1;
		
		/*errors.push("LastName is required!");*/
	} else if(!re.test(form.lname.value)){
		ctr++;
		/*errornumber6+=1;
		
		/*errors.push("LastName contains invalid characters!");*/
	}
	
	if(form.birthday.value=="")
	{
	ctr++;
	/*errornumber7+=1;
		
	/*errors.push("Birthday is required!");*/
	
	}
	
	/*if(!re.test(form.mname.value))
		{
		errors.push("MiddleName contains invalid characters!");
		}*/
	
	if(form.address.value==""){
	ctr++;
	/*errornumber8+=1;
		
		/*errors.push("Address is required!");*/
	}/*else if(!re.test(form.address.value)){
		errors.push("Address contains invalid characters!");
	}*/
	
	
	
	/*
	if (errors.length>0){
		var msg= "ERRORS:\n\n";
		for(var i=0; i<errors.length; i++){
			msg+=errors[i]+ "\n";
		
		}
		
		alert(msg);
		return false;
		
		
	
	}
	
	
	return true;*/
	
	
	
	/*totalerror=errornumber1+errornumber2+errornumber3+errornumber4+errornumber5+errornumber6+errornumber7+errornumber8;*/
	
	
		
	if(ctr>0){
	{
	
	alert("Please fill out necessary fields!");
	/*alert("error" + + +ctr+ ".");*/
		
	}
	
		return false;
		
	}
	
	return true;
	
}





