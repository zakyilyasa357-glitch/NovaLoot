// Fungsi membuka modal saat tombol beli diklik
const modal = document.getElementById('orderModal');
function bukaModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}

// Fungsi mengirim data pesanan otomatis ke WhatsApp Admin
function kirimWhatsApp(event) {
    event.preventDefault();
    const nominal = document.getElementById('nominalGame').value;
    const userId = document.getElementById('userId').value;
    const zoneId = document.getElementById('zoneId').value;
    
    // Ganti nomor WhatsApp di bawah dengan nomor Anda (awali dengan 62)
    const noAdmin = "+62 895-6351-17021"; 
    
    const pesan = `Halo Admin, saya ingin memesan top up:%0A- Produk: ${nominal}%0A- User ID: ${userId}%0A- Server ID: ${zoneId}%0A%nMohon segera diproses ya!`;
    
    window.open(`https://wa.me/${noAdmin}?text=${pesan}`, '_blank');
}