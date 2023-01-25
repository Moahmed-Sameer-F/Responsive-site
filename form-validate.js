function valid1() {
    var n=document.form1.nam.value;

    var mail=document.form1.mail.value;
    var at_pos=mail.indexOf("@");
    var dot_pos=mail.lastIndexOf(".");

    var number=document.form1.num.value;

    var psw=document.form1.pass.value;
    var repsw=document.form1.repass.value;


    if(n==null || n=="")
    {
        alert("Enter name!!");
        return false;
    }
    else if(at_pos<1 || dot_pos<at_pos+2 ){
        alert("Please enter a valid e-mail address!!");
        return false;

    }
    else if(isNaN(number) || number.length<1){
        alert("Enter valid mobile number!!");
        return false;
    }

    else if(psw.search(/[A-Z]/)<0 || psw.search(/[0-9]/)<0){
        alert("password should contains atleast one number and one upper-case letter");
        return false;
    }
    else if(repsw.length<1){
        alert("Re-enter the password!!");
        return false;
    }
    else if(repsw!=psw){
       alert("Password didn't match!!");
        return false;
    }

  
    else{
        alert(n);
        return true;
    }
    
}
function strengthValidate(){

    p3=document.form1.pass.value;

    if(p3.length<=6){

       var w= document.getElementById("strength")

       w.innerHTML="Password is weak";

       w.style.color="red"

    }

    else if(p3.length>6){


        if(p3.match(/[a-z]/g).length==2 && p3.match(/[0-9]/g).length==2 ){

            var m= document.getElementById("strength")

       m.innerHTML="Password is medium";

       m.style.color="orange"

    }

        if(p3.match(/[a-z]/g).length>2 && p3.match(/[A-Z]/g).length>2 &&  p3.match(/[0-9]/g).length>2){

            var s= document.getElementById("strength")

       s.innerHTML="Password is strong";

       s.style.color="green"

        }

        }

    }