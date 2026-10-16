// Fungsi membuka modal saat tombol beli diklik
const modal = document.getElementById('orderModal');

function bukaModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Fungsi memproses pesanan setelah pembayaran/upload bukti
function kirimWhatsApp(event) {
    event.preventDefault();

    const nominal = document.getElementById('nominalGame').value;
    const userId = document.getElementById('userId').value;
    const zoneId = document.getElementById('zoneId').value;
    const buktiInput = document.getElementById('buktiTransfer');

    // Validasi apakah bukti transfer sudah diunggah oleh pembeli
    if (!buktiInput.files || buktiInput.files.length === 0) {
        alert("Mohon lakukan transfer dan lampirkan bukti pembayaran terlebih dahulu!");
        return;
    }

    const fileBukti = buktiInput.files[0];

    // Ganti nomor WhatsApp Admin (gunakan format 62)
    const noAdmin = "+62 895-6351-17021"; 

    // Teks pesan otomatis ke WhatsApp
    const pesan = `Halo Admin, saya sudah melakukan pembayaran/transfer untuk top up game:%0A` +
                  `- Produk: ${nominal}%0A` +
                  `- User ID: ${userId}%0A` +
                  `- Server ID: ${zoneId}%0A` +
                  `- Nama File Bukti: ${fileBukti.name}%0A%0A` +
                  `Bukti foto transfer sudah saya persiapkan untuk dikirim di chat ini. Mohon segera diproses ya!`;

    // Buka WhatsApp di tab baru
    window.open(`https://wa.me/${noAdmin}?text=${pesan}`, '_blank');
}