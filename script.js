var temp1, temp2, sign1, c=0, m=0;


function show (num){
    if (/*document.getElementById("display").value==0 ||*/ c!=0) 
    {
        document.getElementById("display").value="";
        document.getElementById("display").value+=num;
        c=0;
    }
    else
    {
        document.getElementById("display").value+=num;  
    }         
}
function clr()
{
    document.getElementById("display").value="";
    document.getElementById("display").placeholder=0;
    document.getElementById("display1").value="";
    document.getElementById("display1").placeholder = "Enter Binary Digits Again";
    sign1="";
}

function opt (sign)
{
    temp1= parseInt(document.getElementById("display").value, 2);
    sign1=(sign);
    c++;
}



function cal()
{
    temp2 = parseInt(document.getElementById("display").value, 2);
    if(sign1 =='+')
    {
        var res= (temp1+temp2).toString(2);
        document.getElementById("display").value = res;
    }
    else if(sign1 =='-')
    {
        var res= (temp1-temp2).toString(2);
        document.getElementById("display").value = res;
    }
    else if(sign1 =='*')
    {
        var res= (temp1*temp2).toString(2);
        document.getElementById("display").value = res;
    }
    else if (sign1== '/')
    {
        var res= (temp1/temp2).toString(2);
        document.getElementById("display").value = res;
    }
    document.getElementById("display1").value = temp1  + " " + sign1 + " " + temp2 + " = " + parseInt(res,2) + " (" + res + ")";
}

function backs()
{
    document.getElementById("display1").value="";
    document.getElementById("display1").placeholder = "Complete Your Calculation";
    var str = document.getElementById("display").value;
    if(str.length>1)
    {
        document.getElementById("display").value = str.substring(0,str.length-1);
    }
    else
    {
        document.getElementById("display").value="";
        document.getElementById("display").placeholder=0;
    }
}


window.addEventListener("keydown", keyp);
function keyp(k)
{
    if (k.keyCode == "48" || k.keyCode == "45")
    {
        show(0);
    }
    if (k.keyCode == "49" || k.keyCode == "35")
    {
        show(1);
    }
    if (k.keyCode == "107")
    {
        opt('+');
    }
    if (k.keyCode == "109")
    {
        opt('-');
    }
    if (k.keyCode == "106")
    {
        opt('*');
    }
    if (k.keyCode == "111"|| k.keyCode == "191")
    {
        opt('/');
    }
    if (k.keyCode == "13")
    {
        cal();
    }
    if (k.keyCode == "8")
    {
        backs();
    }
    if (k.keyCode == "27")
    {
        clr();
    }

    if (k.keyCode == "50"  || k.keyCode == "40" || k.keyCode == "51" || k.keyCode == "34" ||k.keyCode == "52" || k.keyCode == "37" || k.keyCode == "53" || k.keyCode == "12" || k.keyCode == "54" || k.keyCode == "39" || k.keyCode == "55" || k.keyCode == "36" || k.keyCode == "56" || k.keyCode == "38" || k.keyCode == "57" || k.keyCode == "33")
    {
        alert("Binary has only two digits. Either 0 or 1.")
    }
        
}