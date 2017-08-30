/**
 * Created by Vaibhav on 8/23/2017.
 */
var colors=col(6);
var square=document.getElementsByClassName("squ");
var t=ran();
var picked=colors[t];
var b=document.getElementById("pc");
b.innerText=picked;
// var d=document.getElementsByClassName("ra");
var d=document.querySelector(".ra");
var m=document.querySelector(".me");
$("#strip").css("background","white");
$(".ra").click(function () {
     colors=col(6);
     t=ran();
     picked=colors[t];
     b=document.getElementById("pc");
     b.innerText=picked;
    for (var i=0;i<colors.length;i++) {
        square[i].style.background = colors[i];

    }
    //alert("how");

});
// $(".m").click(function () {
//     colors=col(6);
//     t=ran();
//     picked=colors[t];
//     b=document.getElementById("pc");
//     b.innerText=picked;
//     for (var i=0;i<colors.length;i++) {
//         square[i].style.background = colors[i];
//     }
//
//
// });
$(".e").click(function () {
// this.addclass("b");
//     $(this).addclass("b");
    $(this).addClass("b");
    $(".h").removeClass("b");
    colors=col(3);
    t=ran();
    picked=colors[t];
    b=document.getElementById("pc");
    b.innerText=picked;
    for (var i=0;i<colors.length;i++) {
        square[i].style.background = colors[i];


    }
    for (var i=3;i<6;i++) {
        square[i].style.background="#232323";
    }
});
$(".h").click(function () {
    $(this).addClass('b');
    $(".e").removeClass("b");
// this.addclass("b");
    colors=col(6);
    t=ran();
    picked=colors[t];
    b=document.getElementById("pc");
    b.innerText=picked;
    for (var i=0;i<colors.length;i++) {
        square[i].style.background = colors[i];


    }

});



// for (var i=0;i<colors.length;i++) {
//     square[i].style.background = colors[i];
//
// }

for (var i=0;i<colors.length;i++) {
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function () {
        var a=this.style.background;
        var k=document.querySelector("h1");
        if(a==picked)
        {
            d.innerText="PLAY AGAIN";
            m.innerText="CORRECT";
         //   $(".d").text("correct");
            alert("correct");
            change(picked);
            k.style.background=picked;


        }
        else
        {
            m.innerText ="TRY AGAIN";
            //$(".d").text("try again");
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