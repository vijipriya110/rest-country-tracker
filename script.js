var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
input.placeholder="Afghanistan";
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.style.marginLeft="5px";
button.style.color="blue";
button.addEventListener("click",foo);
let area=document.createElement("div");
area.setAttribute("id","area");
let region=document.createElement("div");
region.setAttribute("id","region");
let flag=document.createElement("div");
flag.setAttribute("id","flag");
let population=document.createElement("div");
population.setAttribute("id","population");
let capital=document.createElement("div");
capital.setAttribute("id","capital");
div.append(input,button,area,region,flag,population,capital);
document.body.append(div);
async function foo(){
    var res=document.getElementById("name").value;
    console.log(res);
    var res=await fetch("https://restcountries.com/v2/all");
    var res1=await res.json();
    console.log(res1);
    console.log(res1[0].area);
    console.log(res1[0].region);
    console.log(res1[0].flag);
    console.log(res1[0].population);
    console.log(res1[0].capital);

    area.innerHTML=`The Afghanistan Area:${res1[0].area}`;
    region.innerHTML=`The Afghanistan Region:${res1[0].region}`;
    flag.innerHTML=`The Afghanistan Flag:${res1[0].flag}`;
    population.innerHTML=`The Afghanistan Population:${res1[0].population}`;
    capital.innerHTML=`The Afghanistan Capital:${res1[0].capital}`;

}

