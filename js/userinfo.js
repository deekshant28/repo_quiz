let uname =sessionStorage.getItem("name");
let upoints=sessionStorage.getItem("points");
let utime=sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML= uname;
document.querySelector("span.points").innerHTML=upoints;
document.querySelector("span.time").innerHTML=utime;