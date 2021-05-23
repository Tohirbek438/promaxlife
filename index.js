let ok = document.getElementById('active');
let modal = document.getElementById('modal');
let close1 = document.getElementById('close');
ok.onclick = function () {
    modal.style.display = "block";
}
close1.onclick = function () {
    close1.parentNode.style.display = "none";
}