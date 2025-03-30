function abrirModal(img) {
    document.getElementById('modal-img').src = img.src;
    document.getElementById('modal').style.display = 'flex';
}
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onscroll = function() {
    let btnTopo = document.getElementById("btnTopo");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

function scrollParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}