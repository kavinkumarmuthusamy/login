
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


function store() {
    let g=0;
    event.preventDefault();
    let z = document.getElementById("username").value;
    //   firstname  
    if (z.length <= 4 || z.length >= 14 || z == undefined) {
        console.log(z);
        document.getElementById("username").className = "butred";
        document.getElementById("iconf").className = "ion-android-alert";
        document.getElementById("conf").innerHTML = "* please enter valid first name";
        g=1;
    } else {
        let res = 0;
        const zrr = z.split("");
        for (let i = 0; i < zrr.length; i++) {
            if (!(isNaN(zrr[i]))) {
                res = 1;
                break;
            }
        } if (res == 0) {
            document.getElementById("username").className = "but";
            document.getElementById("iconf").className = "ion-ios-checkmark";
            document.getElementById("conf").innerHTML = "";
        }
        else {
            document.getElementById("username").className = "butred";
            document.getElementById("iconf").className = "ion-android-alert";
            document.getElementById("conf").innerHTML = "* please enter letter";
            g=1;
        }
    }

    //    lastname

    let y = document.getElementById("lname").value;
    if (y.length > 1 || y.length < 1 || !(isNaN(y))) {
        document.getElementById("lname").className = "butred";
        document.getElementById("iconl").className = "ion-android-alert";
        document.getElementById("conl").innerHTML = "* please enter 1 letter";
        g=1;
    } else {
        document.getElementById("lname").className = "but";
        document.getElementById("iconl").className = "ion-ios-checkmark";
        document.getElementById("conl").innerHTML = "";
    }

    //  email

    let x = document.getElementById("email").value;
    const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    if (x === "" || !(regExp.test(x))) {
        document.getElementById("email").className = "butred";
        document.getElementById("icone").className = "ion-android-alert";
        document.getElementById("cone").innerHTML = "* please enter valid email";
        g=1;
    } else {
        document.getElementById("email").className = "but";
        document.getElementById("icone").className = "ion-ios-checkmark";
        document.getElementById("cone").innerHTML = "";
    }

    //mobilenumber
    let w = document.getElementById("number").value;
    if (w >= 1000000000 && w <= 9999999999) {
        document.getElementById("number").className = "but";
        document.getElementById("iconn").className = "ion-ios-checkmark";
        document.getElementById("conn").innerHTML = "";
    }
    else {
        document.getElementById("number").className = "butred";
        document.getElementById("iconn").className = "ion-android-alert";
        document.getElementById("conn").innerHTML = "* please enter only 10 number";
        g=1;
    }

    // date of birth
    let v = document.getElementById("dofb").value;
    const r = new Date();
   if(v>r||v==null){
    document.getElementById("dofb").className = "butred";
        document.getElementById("icond").className = "ion-android-alert";
        document.getElementById("cond").innerHTML = "* please enter date of birth";
        g=1;
   }
   else{
    document.getElementById("dofb").className = "but";
    document.getElementById("icond").className = "ion-ios-checkmark";
    document.getElementById("cond").innerHTML = "";
   }

//    password 

let u = document.getElementById("password").value;
let srr=u.split("");
let s=0;
let rr=["!","@","#","$"];
for(let i=0;i<srr.length;i++){
if(!isNaN(srr[i])){
    s=1;
    console.log(s)
}
}
for(let i=0;i<srr.length;i++){
for(let j=0;j<rr.length;j++){
    if(s==1&&srr[i]==rr[j]){
        s=2;
    }
}
}
if(s==2&&u.length>=8&&u.length<=12){
    document.getElementById("password").className = "but";
    document.getElementById("iconp").className = "ion-ios-checkmark";
    document.getElementById("conp").innerHTML = "";
}else{
    document.getElementById("password").className = "butred";
    document.getElementById("iconp").className = "ion-android-alert";
    document.getElementById("conp").innerHTML = "* please enter password with about rules";
    g=1;
}

// conform password

let t = document.getElementById("confirmpassword").value;
if(u==t){
    document.getElementById("confirmpassword").className = "but";
    document.getElementById("iconc").className = "ion-ios-checkmark";
    document.getElementById("conc").innerHTML = "";
   }
   else{
        document.getElementById("confirmpassword").className = "butred";
        document.getElementById("iconc").className = "ion-android-alert";
        document.getElementById("conc").innerHTML = "* please enter same password";
        g=1;
   }
//    total
if(g==0){
    let text="Thank for fill the form\nsall we move webpage";
    if(confirm(text)==true){
        location.replace("forget.html");
    }else{
        alert(" Thank You ");
    }

}
   }

// get start fumction
    
function summit(){
    let a = document.getElementById("us").value;
    let b = document.getElementById("pass").value;
    let c="kavin";
    let d="kavin@123";
    if(a==c&&b==d){
        location.replace("forget.html");
    }else{
        alert("It is not correct user name and password");
    }

}










