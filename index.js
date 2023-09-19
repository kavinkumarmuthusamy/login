
function check() {
    let a = document.getElementById("us").value;
    var b = "kavin";
    console.log(a);
    if (a == b) {
        otp = prompt("please enter the otp", "");

        if (otp == 2345) {
            // document.getElementById("p1").innerHTML = "chick";
            location.replace("forget.html");
        }
        else {
            alert("sorry otp is wrong");
        }
    }
    else {
        alert("please check the username or you alread have accound");
    }
}

// get start fumction

const scriptURL = 'https://script.google.com/macros/s/AKfycbz15HWw775zclHeCF40rp1smc3ali57TkO5DdNUGyVm3jKij532aC-0zf4_dFFwo7FD/exec';
const form = document.forms['validate'];
const dataList = document.getElementById('data-list');

var object={}
form.addEventListener('submit', e => {
e.preventDefault();
const formData = new FormData(form);
const email = formData.get('user'); 
const password = formData.get('pass'); // Get the email value from the form

// Check if the email is already in the data fetched from the Google Apps Script
if (checkEmailInData(email,password)) {
alert("Email already exists. Please use a different email.");
} else {
   alert("Invalid user name");
}
});
// Function to check if email exists in the data fetched from the Google Apps Script
function checkEmailInData(email,password) {
const dataListItems = object;
for (let i = 0; i < dataListItems.length; i++) {
const a=dataListItems[i].email;
const b=dataListItems[i].password;
// const listItemText = dataListItems[i].textContent;
if (a==email&&b==password) {
return true; // Email already exists
}
}
return false; // Email not found
}

fetch(scriptURL)
.then(response => response.json())
.then(data => {
object=data;
})
.catch(error => {
console.error('Error fetching data:', error);
});
