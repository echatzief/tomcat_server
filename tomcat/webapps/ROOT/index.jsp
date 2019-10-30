<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login Now</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./node_modules/overhang/dist/overhang.min.css">
    <script src="./node_modules/overhang/dist/overhang.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css">
    <link rel="shortcut icon" type="image/png" href="./favicon.png"/>
    <link rel="shortcut icon" type="image/png" href="./favicon.png"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reqwest/2.0.5/reqwest.min.js"></script>
    <script src="../js/requests.js"></script> 
  </head>
  <body>
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <input id="nameSignUp" type="text" placeholder="Name" />
          <input id="emailSignUp" type="text" placeholder="Email" />
          <input id="passwordSignUp" type="password" placeholder="Password" />
          <button style="margin-top:2%" id="signUpAction">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <input id="emailSignIn" type="text" placeholder="Email" />
          <input id="passwordSignIn" type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button id="signInAction">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" id="signIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start the journey with us</p>
            <button class="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <script src="../js/index.js"></script> 
  </body>
</html>
