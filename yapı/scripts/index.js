
//resim aç ve gizle
function gizleGoster(ID) {
 let secilenID = document.getElementById(ID);
 if (secilenID.style.display == "none") {
     secilenID.style.display = "";
 } else {
   secilenID.style.display = "none";
 }
}
//resim aç gizle bitiş

// modal 
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
//buton
btn.onclick = function() {
  modal.style.display = "block";
}
//span
span.onclick = function() {
  modal.style.display = "none";
}
// modal kapanış
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//modal bitiş