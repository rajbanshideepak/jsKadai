window.addEventListener("load",()=>{
// let downloadfile =document.getElementById('download');
let remove = document.getElementById('delete');
let name =document.getElementById('name');
let age =document.getElementById('age');
let email =document.getElementById('email');
let send =document.getElementById('send');
// console.log(name);
send.addEventListener("click",redirect,false);
remove.addEventListener("click",sakujo,false);
// downloadfile.addEventListener("click",download,false);
function loadTable(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = this.responseText;
            name.value=age.value=email.value="";
          }
        };
        xhttp.open("GET", "profile.php?status=load", true);
        xhttp.send();
}
loadTable();
function redirect(e){
    e.preventDefault();
    var url="status=input&&name="+name.value+"&&age="+age.value+"&&email="+email.value;
    console.log(url);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = this.responseText;
            name.value=age.value=email.value="";
            loadTable();
          }
        };
        xhttp.open("GET", "profile.php?"+url, true);
        xhttp.send();
    // window.location.href="profile.php?"+url;
}
function sakujo(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = this.responseText;
            name.value=age.value=email.value="";
          }
        };
        xhttp.open("GET", "profile.php?status=remove", true);
        xhttp.send();
}
// function download(){
//     var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("data").innerHTML = this.responseText;
//             name.value=age.value=email.value="";
//             loadTable();
//           }
//         };
//         xhttp.open("GET", "profile.php?status=download", true);
//         xhttp.send();
// }
},false);email