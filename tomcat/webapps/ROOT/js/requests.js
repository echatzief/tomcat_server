function createUser(){
  var name = document.getElementById('nameSignUp').value
  var email = document.getElementById('emailSignUp').value
  var password = document.getElementById('passwordSignUp').value 
  reqwest({
    url: '/createUser', 
    method: 'post', 
    data: { 
      name: name, 
      email: email,
      password: password, 
    }, 
    success: function(resp){
      console.log("Yes we did it");
      console.log(resp)

      //Clear the inputs
      document.getElementById('nameSignUp').value = ""
      document.getElementById('emailSignUp').value =""
      document.getElementById('passwordSignUp').value =""
      
      if(resp.status == 202) {
        $("body").overhang({
          type: "error",
          message: "Choose other credentials.",
          closeConfirm: true,
        });
 
      } else {
        $("body").overhang({
          type: "success",
          message: "You have created successfully a new account.",
          closeConfirm: true
        });
      }
    },
  })
}

function loginUser(){
  var email = document.getElementById('emailSignIn').value
  var password = document.getElementById('passwordSignIn').value 

  reqwest({
    url: '/login', 
    method: 'post', 
    data: { 
      email: email,
      password: password, 
    },
    success: function(resp){
      console.log("Yes we did it");
      console.log(resp)

      //Clear the inputs
      document.getElementById('emailSignIn').value = ""
      document.getElementById('passwordSignIn').value = "" 
 

      if(resp.status == 202) {
        $("body").overhang({
	  type: "error",
	  message: "Wrong credentials.",
	  closeConfirm: true,
        });

      } else {
        localStorage.setItem("loginCookie","imLogged")
	window.location.href="/u"
     }
    }
  })
}

$(document).ready(function() {
  
 $('#signIn').click(function(){
 
   //Clear the fields  
   document.getElementById('emailSignUp').value = ""
   document.getElementById('emailSignIn').value = ""
   document.getElementById('passwordSignUp').value = ""
   document.getElementById('passwordSignIn').value = ""
   document.getElementById('nameSignUp').value = ""

   //Remove the previous errors
   $('#errorName').remove()
   $('#errorEmail').remove()
   $('#errorPass').remove()
 })
 $('#signUp').click(function(){
   
   //Clear the fields
   document.getElementById('emailSignUp').value = ""
   document.getElementById('emailSignIn').value = ""
   document.getElementById('passwordSignUp').value = ""
   document.getElementById('passwordSignIn').value = ""
   document.getElementById('nameSignUp').value = ""

   //Remove the previous errors
   $('#errorName').remove()
   $('#errorEmail').remove()
   $('#errorPass').remove()
 })
 $('#signInAction').click(function(){
    var email = document.getElementById('emailSignIn').value 
    var password = document.getElementById('passwordSignIn').value 
    var errors = 0
 
    //Remove the previous errors
    $('#errorEmail').remove()
    $('#errorPass').remove()

    //Check for errors
    if(email.length < 1 || !email.includes('@')){  
      $('#emailSignIn').after('<div id="errorEmail" style="color:#cc0000">Please check the field input.</div>')
      errors++;
    } 
    
    if(password.length <1 ){
       $('#passwordSignIn').after('<div id="errorPass" style="color:#cc0000">Please check the field input.</div>')
       errors++;
    }

    // Login if everything is fine
    if(errors == 0){
      loginUser()
    }
  })
  $('#signUpAction').click(function(){
    var name = document.getElementById('nameSignUp').value 
    var email = document.getElementById('emailSignUp').value 
    var password = document.getElementById('passwordSignUp').value 
    var errors = 0
 
    //Remove the previous errors
    $('#errorName').remove()
    $('#errorEmail').remove()
    $('#errorPass').remove()

    //Check for errors
    if(name.length <1 ){
      $('#nameSignUp').after('<div id="errorName" style="color:#cc0000">Please check the field input.</div>')
      errors++;
    }
    if(email.length < 1 || !email.includes('@')){  
      $('#emailSignUp').after('<div id="errorEmail" style="color:#cc0000">Please check the field input.</div>')
      errors++;
    } 
    
    if(password.length <1 ){
       $('#passwordSignUp').after('<div id="errorPass" style="color:#cc0000">Please check the field input.</div>')
       errors++;
    }

    // Login if everything is fine
    if(errors == 0){
      createUser()
    }
  })
});

