/**
 * Created by Vaibhav on 8/23/2017.
 */

var colors=col(6);
var square=document.getElementsByClassName("squ");
var t=ran();
var picked=colors[t];
var b=document.getElementById("pc");
b.innerText=picked;
var d=document.getElementById("r");

for (var i=0;i<colors.length;i++) {
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function () {
        var a=this.style.background;
        if(a==picked)
        {
            d.innerText="CORRECT";
            alert("correct");
            change(picked);

        }
        else
        {
            d.innerText="TRY AGAIN";
            alert("wrong");
            this.style.background="#232323";

        }
    });
}

function change(picked) {
    for(var i=0;i<square.length;i++)
    {
        square[i].style.background=picked;
    }

}
function  ran() {
    return(Math.floor(Math.random()*colors.length))
}
// square[1].addEventListener("click",function () {
//     alert(clicked);
//
// })

function col(n) {
    var arr=[];

    for(var i=0;i<n;i++)
    {
        arr[i]=rado();
    }
    return(arr);

}
function rado() {
    var r,g,b;
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return("rgb("+r+", "+g+", "+b+")");

}