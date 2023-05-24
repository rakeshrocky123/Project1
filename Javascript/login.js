var inpVal=document.querySelectorAll("input");

function loginFun()
{
    var userID=inpVal[0].value;
    var password=inpVal[1].value;
    var Email=sessionStorage.getItem("Email");
    var pass=sessionStorage.getItem("Password");
    if(userID==Email && password==pass)
    {
        document.body.style.backgroundColor="red";
        document.getElementById("loginButton").type="submit";
    }
    else if(userID!=Email && password==pass)
    {
        document.querySelector("h4").innerHTML="Wrong User ID";
    }
    else if(userID===Email && password!=pass)
    {
        document.querySelector("h4").innerHTML="Wrong User password";        
    }
    else
    {
        document.querySelector("h4").innerHTML="Wrong User ID and Password";        
    }
}
function imageOpen()
{
    document.querySelector("img").style.transform="rotateY(180deg)";
    document.querySelector("img").src="../Asset/emojisky.com-23866.png";
    document.getElementById("inpPass").type="text";   
}
function imagesClose()
{
    document.querySelector("img").style.transform="rotateY(0deg)";
    document.querySelector("img").src="../Asset/monkeyClose.png";
    document.getElementById("inpPass").type="password";    
}