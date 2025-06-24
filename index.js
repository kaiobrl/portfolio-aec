let ultimoFoco = null;

function abrirModal(img) {
    document.getElementById('modal-img').src = img.src;
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    ultimoFoco = document.activeElement;
    modal.focus();
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
    if (ultimoFoco) ultimoFoco.focus();
}

// Fechar modal com ESC
window.addEventListener('keydown', function(event) {
    const modal = document.getElementById('modal');
    if (modal.style.display === 'flex' && (event.key === 'Escape' || event.key === 'Esc')) {
        fecharModal();
    }
});

// Fechar modal clicando fora da imagem
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (modal.style.display === 'flex' && event.target === modal) {
        fecharModal();
    }
});

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
    document.body.focus();
}