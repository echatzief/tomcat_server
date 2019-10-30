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
  </head>
  <body>
    <div class="container" id="container">
      <div id="loggedText" style="text-align:center;margin-top:20%;">
       <strong style="font-size:30px;font-family: "B612", sans-serif;">Welcome, 
         <span style="font-size:30px;color:#E0000E">Friend.</span> <br/> Enjoy our services.
       </strong>
       <br/>
       <button id="logout" style="margin:20px;background-color:#E0000E;border-color:#E0000E;color:#fff;text-align:center;">Logout</button>
      </div>
    </div> 
   <script src="./js/user.js"></script> 
  </body>
</html>
