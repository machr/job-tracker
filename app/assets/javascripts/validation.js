function checkPass(event)
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('password').value;
    var pass2 = document.getElementById('confirm_password').value;

    //Store the Confimation Message Object ...
    // var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    //Compare the values in the password field
    //and the confirmation field
    if(password.value != confirm_password.value){
        event.preventDefault();
        //The passwords match.
        //Set the color to the good color and inform
        //the user that they have entered the correct password
        // pass2.style.backgroundColor = goodColor;
        // message.style.color = goodColor;

        console.log("Passwords Do Not Match!");
        // return false;
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        // pass2.style.backgroundColor = badColor;
        // message.style.color = badColor;
        console.log("Passwords Match!");
        return true;
    }
}

$(document).ready(function() {
  var submit = document.getElementById('register');
  submit.addEventListener('click', checkPass);
})
