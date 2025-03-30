function abrirModal(img) {
    document.getElementById('modal-img').src = img.src;
    document.getElementById('modal').style.display = 'flex';
}
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}
