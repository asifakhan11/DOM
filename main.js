//alert("hi");
function myFunction() {
    document.getElementById("form").submit();
  }
function  checkPass(){
    let mypass =document.getElementById("pass").value;
    if(mypass != 12345678){
        alert ("Password Incorrect")
    }else{
        document.getElementById("text").innerHTML = "Information Correct";
    }
}

function myFunc() {
    document.getElementById("formvol").submit();
}
function volSphere(){
    var radius = document.getElementById("radius").value;
    var vol = (4/3) * Math.PI * Math.pow(radius, 3);
    alert("The volume is " + vol)
}