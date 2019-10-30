//Get the cookie and check if the user is logged

let cookie = localStorage.getItem('loginCookie')
let logoutButton = document.getElementById('logout');
 
if(!cookie){
  window.location.href="/"
} else if(cookie != "imLogged"){
  localStorage.removeItem('loginCookie')
  window.location.href="/"
}

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('loginCookie');
  window.location.href="/"
});
