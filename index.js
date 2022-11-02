var a=document.getElementById("us").value;
function check(){
    // var b="kavin";
    const b=["kavin","guru","diva","aswinth"];
    var c=0;
    for(i=0;i<4;i++){
        if(a==b[i]){
            c=1;
            break;
        }
    }
    if(c==1){
    otp=prompt("please enter the otp","");
   
if(otp==2345){
    document.getElementById("p1").innerHTML="chick";
}
else{
    alert("sorry otp is wrong");
}}
else{
    alert("please check the username or you alread have accound");
}}



var z=document.getElementById("pass").value;
function summit(){
    const b=["kavin","guru","diva","aswinth"];
    const c=["kavin","guru","diva","aswinth"];
    var y=0;
    for(i=0;i<4;i++){
        if(b[i]==a && c[i]==z){
            alert("your user name and password is correct");
            y=1;
            break;
        }
    }
    if(y!=1){
        alert("invalide password")
       }

}