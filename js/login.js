function successfullogin(){
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;
    localStorage.setItem('userEmail', email);
  
    const storedatar = JSON.parse(localStorage.getItem('formdata')) || [];
    
    const user = storedatar.find(data => data.email == email);
  
    if(user && user.password === password){
      
      document.getElementById('loginemail').style.border = 'none'
      document.getElementById('loginpassword').style.border = 'none'
      alert('Login successful')
      window.location.href = 'navbar.html';
  
    }
    else{
      
      document.getElementById('loginemail').style.border = '3px solid red'
      document.getElementById('loginpassword').style.border = '3px solid red'
  
      document.getElementById('validatelogin').innerHTML = 'enter valid password or email.'
    }
  }
  
  