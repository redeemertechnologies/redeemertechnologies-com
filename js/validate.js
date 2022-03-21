document.write("<script src='js/misc.js' type='text/javascript'></script>")
/* validate contact form*/
function sendContact(elem)
{
	document.getElementById("name").className="fieldset";
	document.getElementById("phone").className="fieldset";
	document.getElementById("email").className="fieldset";
	document.getElementById("comments").className="fieldset";
	
	var name = trim(document.getElementById("name").value);
	var phone = trim(document.getElementById("phone").value);
	var email = trim(document.getElementById("email").value);
	var comments = trim(document.getElementById("comments").value);
		
	var valid=1;
	var first="";
	
	if(name.length==0 || name=="Name")
	{
		document.getElementById("name").className='fieldset_error';
		first="name";
		valid=0;
	}
		
	if(email.length==0 || email=="Email Address")
	{
		document.getElementById("email").className='fieldset_error';
		if(first.length==0)
			first="email";
		valid=0;
	}
	
	if(comments.length==0 || comments=="Message")
	{
		document.getElementById("comments").className='fieldset_error';
		if(first.length==0)
			first="comments";
		valid=0;
	}
	
	if(valid==0)
	{
		
		document.getElementById(first).focus();
		return false;
	}else{
		
			if(email.length>0)
			{
				var valid=isEmail(email);
					
				if(!(valid))
				{
					document.getElementById("statusSpan").style.display="block";
					document.getElementById("statusSpan").style.color="#FF0000";
					document.getElementById("statusSpan").innerHTML = "Invalid Email<br />";
					document.getElementById("email").className='fieldset_error';
					document.getElementById("email").focus();
					return false;
				}
			}
			
			document.getElementById("statusSpan").style.display="block";
			document.getElementById("statusSpan").innerHTML = "Please wait...";
			$.post("sendContact.php", {
				name : name,
				phone : phone,
				email : email,
				comments : comments,
			}, function(response){
				$('#statusSpan').html("Enquiry has been sent succesfully");
				document.getElementById("name").value="Name";
				document.getElementById("phone").value="Telephone No.";
				document.getElementById("email").value="Email Address";
				document.getElementById("comments").value="Message";
				
			});
	}
}

function resetContact(ele)
{
	$('#statusSpan').hide();
	for(i=1;i<4;i++) {
  		document.getElementById(i).style.color="";
  	}
}