
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
    
function summit(){
    let a = document.getElementById("us").value;
    let b = document.getElementById("pass").value;
    let c="kavin";
    let d="Kavin@1234";
    if(a==c&&b==d){
        location.replace("demo.html");
    }else{
        alert("It is not correct user name and password");
    }

}




