function add(inputtxt)
{ 
var letters = /^[A-Za-z]+$/;
if(inputtxt.value.match(letters))
{
document.getElementById("msg").innerHTML="<span style='color:green'>"+ inputtxt.value +"</span>" + " has been added";
return true;
}
else
{
    document.getElementById("msg").innerHTML="<span style='color:red'>"+ "Invalid TV Show name"+"</span>" ;
return false;
}
};


