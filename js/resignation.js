function submited(){
    let name = document.getElementById('name').value;
    let nemecapital = name.charAt(0)
    let email = document.getElementById('email').value;
    let phoneno = document.getElementById('phoneno').value;
    let password = document.getElementById('password').value;
    let confrompassword  = document.getElementById('comfrompassword').value;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
    let getpasswordlength = password.length;
    let phonenolength = phoneno.length;
    
  
    if(name.length == 0 && email.length == 0 && phonenolength == 0 && getpasswordlength == 0 && confrompassword.length == 0){
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('namevalidation').innerHTML = 'Please enter your name'
      
      
  
      
      document.getElementById('email').style.border = '2px solid red'
      document.getElementById('emailvalidation').innerHTML = 'Please enter your Email'
      
  
      document.getElementById('phoneno').style.border = '2px solid red'
      document.getElementById('phonenovalidation').innerHTML = 'Please enter your Phone no.'
    
  
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'Please enter your Password'
 
  
      document.getElementById('comfrompassword').style.border = '2px solid red'
      document.getElementById('confrompasswordvalidation').innerHTML = 'Please enter your Confirm password'
     
  
  
    }
    else if(name.length == 0){
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('namevalidation').innerHTML = 'Please enter your name.'
    }
  
    else if(!nemecapital.match(upperCaseLetters)){
      
  
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('namevalidation').innerHTML = 'Your name should start form Capital latter.'
  
    }
    else if(email.length == 0){
      document.getElementById('name').style.border = 'none'
      document.getElementById('email').style.border = '2px solid red'
      document.getElementById('emailvalidation').innerHTML = 'Please enter your Email'
  
    }
    else if(phoneno.length == 9){
      document.getElementById('email').style.border = 'none'
  
      document.getElementById('phoneno').style.border = '2px solid red'
      document.getElementById('phonenovalidation').innerHTML = 'Please enter your Phone no.'
  
      }
    else if(password.length == 0){
      document.getElementById('Password').style.border = 'none'
  
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'Please enter your Password'
  
    }
    else if(email.length == 0 && password.length == 0){
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'Please enter your Password'
      document.getElementById('email').style.border = '2px solid red'
      document.getElementById('emailvalidation').innerHTML = 'Please enter your Password'
  
    }
    
    else if(getpasswordlength < 8){
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'Minimum 8 characters required'
    
  
    }
    else if(!password.match(numbers)){
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'atlast 1 No. required'
    
  
    }
    else if(!password.match(upperCaseLetters)){
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'atlast 1 Uppercase letter required'
  
    }
    else if(!password.match(lowerCaseLetters)){
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'atlast 1 Lowercase letter required'
  
    }
    else if(!password.match(specialcharacter)){
      document.getElementById('password').style.border = '2px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'atlast 1 special character required'
  
    }
    else if(password != confrompassword){
      document.getElementById('password').style.border = 'none'
  
      document.getElementById('passwordvalidation').style.border = '3px solid red'
      document.getElementById('passwordvalidation').innerHTML = 'Password did not match'
      
  
    }
    else{
      document.getElementById('comfrompassword').style.border = 'none'
  
      let storedata = JSON.parse(localStorage.getItem('formdata')) || [];
  
      const duplicate = storedata.some(data => data.email === email || data.phoneno === phoneno);
      
      if(duplicate){
        alert('use another email or phone number');
        return;
      }
  
  
  const formdata = {
    name: name,
    email: email,
    phoneno: phoneno,
    password: password
  };
  
  
  storedata.push(formdata);
  
  localStorage.setItem('formdata', JSON.stringify(storedata));
  
     window.location.href = "login.html";
        alert('Your account has been created successfully!.');
  
    }
  }