var inpVal=document.querySelectorAll("input")
var dobVal=document.querySelectorAll("select")
function fun()
{
    var fname=inpVal[0].value;
    var sname=inpVal[1].value;
    var email=inpVal[2].value;
    var pass=inpVal[3].value;
    var dd=dobVal[0].value;
    var mm=dobVal[1].value;
    var yy=dobVal[2].value;
    localStorage.setItem('FirstName',fname);
    localStorage.setItem('SurName',sname);
    localStorage.setItem("Gender",gender);
    localStorage.setItem("Date",dd);
    localStorage.setItem("Month",mm);
    localStorage.setItem("Year",yy);
    sessionStorage.setItem('Email',email);
    sessionStorage.setItem('Password',pass);
    console.log(fname,dd,mm,yy);
    document.getElementById("signupButton").type="submit";
}
var gender;
function gen(g)
{
    gender=g;
}