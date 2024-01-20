function welcom(){
    alert('Page loaded Welcome back');
}

/*var age = prompt ("enter your age");
if (age>=18)
document.write("can drive<br>");
else
    document.write("cant drive<br>");
var grade = prompt ("enter your Grade");
switch(grade){
    case 'a':
    case 'A':document.write("Good job <br>");
            break;
    case 'b':
    case 'B':document.write("Can do better <br>");
            break;
    case 'c':
    case 'C':document.write("FAilled <br>");
            break;
    default:document.write("unknown grade<br>");

}

var count=0,x=0;
do{
    document.write("count = " + count + "<br>");
    count++;
}while(count<5);
document.write("count ended<br>");
document.write('Count from 0 to age<br>');
document.write("age is: "+age+": ");
while(x<100){
    if(x==age){
        document.write(x);
        break;
    }
document.write(x+" ");
x++;
}

var row=prompt("enter number of row ");
var i,j;

for (i=0;i<row;i++){
    for(j=1;j<=i;j++)
        document.write(i+" ");
    document.write("<br>");
}

var nam=prompt ('Enter your name');
var lName=prompt('Enter your Last Name');

function sayHello(x,m){
    document.write('Hello '+x+' '+m+'<br>');
}

var x1=prompt('Enter your first number to compare');
var x2=prompt('Enter your second number to compare');
var x3=prompt('Enter your Thrid number to compare');

function maxx(a,b,c){
    var maax;
    if(a>b){
        if(a>c){
            max=a;
        }else max=c;
    }else if(b>c)
    {max=b;}
    else maax=c;
    alert('Max VAlue is : '+maax+'<br>');
}
var maxV=max(x1,x2,x3);
document.write(maxV);*/

function OrderDetails(){
    console.log("hhhhhh");
    var lpq=document.getElementById('lpq').value;
    var lpp=document.getElementById('lpp').value;
    var dpq=document.getElementById('dpq').value;
    var dpp=document.getElementById('dpp').value;
    var oredTab=document.getElementById('tab');
    if(lpq=="")
    alert("Laptop Price cannot be empty");
    if(lpp=="")
    alert("Laptop Quantity cannot be empty");
    if(dpq=="")
    alert("Desktop Price cannot be empty");
    if(dpp=="")
    alert("Desktop Quantity cannot be empty");
    tlp=lpq*lpp;
    tdp=dpq*dpp;
    var tot=tlp+tdp;
    alert('Total is: '+tot);
    console.log('hello');
    oredTab.innerHTML="<table>"+
    "<tr><th>Item</th><th>Quantity</th><th>Price</th><th>Total item</th></tr>"+
    "<tr><td>laptop</td><td>"+lpq+"</td><td>"+lpp+"</td><td>"+tlp+"</td></tr>"+
    "<tr><td>Desktop</td><td>"+dpq+"</td><td>"+dpp+"</td><td>"+tdp+"</td></tr></table>";

}

function printValue(){
    var nam=document.form1.name1.value;
    console.log("hello asdfg " +nam);
    alert("welcome"+nam);
}

function cubeNumb(){
    var x=document.getElementsByName("gender");
    var s= x.length*x.length*x.length;
    alert("Gender is used: "+x.length+" cubic of gender is : "+s);
}

function validatePass(){
    var pass=document.getElementById("pass1").value;
    var pass2=document.getElementById("pass2").value;
    console.log('pass: '+pass+' pass2: '+pass2);
    if(pass==pass2){
        alert('New password created you can proceed');
        return true;
    }
    else{
        alert('the 2 password you entered are not the same');
        return false;
    }
}

function arr(){
var fruit=['orange','apple','kiwi'];
alert("<br><br>lenght of the fruit array is: "+ fruit.length+
"<br>fruit array is composed of: ");
for(i=0;i<fruit.length;i++){
    alert(fruit[i]+" ");
}
const car=[];
car[0]="Mercedes";
car[1]="Bmw";
car[2]="Kia";
var i;
for(i=0;i<car.length;i++){
    alert(car[i]+" ");
}
car.pop();
car.push("Honda");
}

function arrFilling(){
    var c=document.getElementById('col').value;
    var x=document.getElementById('arrEle');
    var i;
    var num=[];
    console.log('Size:'+ c);
    for(i=0;i<c;i++){
        num[i]=Math.floor(Math.random()*100)+1;
    }
    x.innerHTML="array elements are: ";
    for(i=0;i<c;i++){
        x.innerHTML+=num[i]+' ; ';
    }
}

function itemView(){
    var nbIt=document.getElementById('nbItem').value;
    var i;
    var g=document.getElementById('item');
    var displayItem='<button type="button" id="disp" onClick="disp()">Display Items</button> ';
    var sumItem='<button type="button" id="disp" onClick="suum()">Sum Items</button> ';
    var avgItem='<button type="button" id="disp" onClick="avg()">Average Items</button> ';
    var itemValue='<input type="text" id="item"+i>';
    console.log(g);
    for(i=0;i<nbIt;i++){
        g.innerHTML+='Item '+ (i+1)+' '+itemValue+'<br>';
    }
    g.innerHTML+=displayItem+sumItem+avgItem;

}s
function disp(){
    var nbIt=document.getElementById('nbItem').value;
    var itemValue=document.getElementById('item')
    var i,j;
    var arr=[i][j];
    var di=document.getElementById('dd');
    var tab='<table width="200" border="1">'+
        '<tr><th>item</th><th>Value</th></tr>';
    for(i=0;i<nbIt;i++){
        tab+='<tr><td>'+(i+1)+'</td><td>'+i+'</td></tr>';
    }
    tab+=+'</table>';
    di.innerHTML=tab;

}




