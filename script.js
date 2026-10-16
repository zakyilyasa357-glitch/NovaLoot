// ==========================================
// 1. DATA GAME HARUS DI BARIS PALING ATAS
// ==========================================
const dataGame = {
    'Free Fire': {
        publisher: 'Garena',
        image: 'images/ff.jpg',
        denom: [
            { nama: '50 Diamonds', harga: 'Rp 8.000' },
            { nama: '140 Diamonds', harga: 'Rp 20.000' },
            { nama: '355 Diamonds', harga: 'Rp 50.000' }
        ]
    },
    'Mobile Legends': {
        publisher: 'Moonton',
        image: 'images/mlbb.jpg',
        denom: [
            { nama: '86 Diamonds', harga: 'Rp 19.500' },
            { nama: '172 Diamonds', harga: 'Rp 38.000' },
            { nama: '257 Diamonds', harga: 'Rp 57.000' }
        ]
    },
    'Roblox': {
        publisher: 'Roblox Corporation',
        image: 'images/roblox.jpg',
        denom: [
            { nama: '50 Robux', harga: 'Rp 21.750' },
            { nama: '100 Robux', harga: 'Rp 28.500' },
            { nama: '200 Robux', harga: 'Rp 55.000' }
        ]
    },
    'Valorant': {
        publisher: 'Riot Games',
        image: 'images/valorant.jpg',
        denom: [
            { nama: '300 VP', harga: 'Rp 35.000' },
            { nama: '625 VP', harga: 'Rp 70.000' }
        ]
    },
    'PUBG Mobile': {
        publisher: 'Tencent Games',
        image: 'images/pubg.jpg',
        denom: [
            { nama: '60 UC', harga: 'Rp 15.000' },
            { nama: '325 UC', harga: 'Rp 75.000' }
        ]
    },
    'Magic Chess: Go Go': {
        publisher: 'Moonton',
        image: 'images/mcgg.jpg',
        denom: [
            { nama: '50 Diamonds', harga: 'Rp 12.000' }
        ]
    },
    'Clash of Clans': {
        publisher: 'Supercell',
        image: 'images/coc.jpg',
        denom: [
            { nama: '80 Gems', harga: 'Rp 16.000' }
        ]
    },
    'Clash Royale': {
        publisher: 'Supercell',
        image: 'images/clashroyale.jpg',
        denom: [
            { nama: '80 Gems', harga: 'Rp 16.000' }
        ]
    }
};

// Variable Penampung Pilihan Pembeli
let gameTerpilih = '';
let denomTerpilih = '';
let hargaTerpilih = '';
let metodeTerpilih = '';

// ==========================================
// 2. FUNGSI UTAMA BUKA MODAL DETAIL
// ==========================================
function bukaModal(namaGame) {
    console.log("Tombol diklik untuk game:", namaGame); // Untuk mengecek di Console F12

    const modal = document.getElementById('gameDetailModal');
    if (!modal) {
        alert("Error: Elemen ID 'gameDetailModal' tidak ditemukan di index.html!");
        return;
    }

    const game = dataGame[namaGame] || dataGame['Roblox'];
    gameTerpilih = namaGame;
    denomTerpilih = '';
    hargaTerpilih = '';
    metodeTerpilih = '';
    
    // Set Teks & Gambar
    const titleElem = document.getElementById('detailTitle');
    const pubElem = document.getElementById('detailPublisher');
    const bannerElem = document.getElementById('detailBanner');
    const iconElem = document.getElementById('detailIcon');

    if (titleElem) titleElem.innerText = namaGame;
    if (pubElem) pubElem.innerText = game.publisher;
    if (bannerElem) bannerElem.src = game.image;
    if (iconElem) iconElem.src = game.image;

    // Render List Denom (Nominal)
    const denomContainer = document.getElementById('denomList');
    if (denomContainer) {
        denomContainer.innerHTML = '';
        game.denom.forEach(item => {
            denomContainer.innerHTML += `
                <div class="denom-card" onclick="pilihDenom('${item.nama}', '${item.harga}', this)">
                    <h4>${item.nama}</h4>
                    <div class="price">${item.harga}</div>
                </div>
            `;
        });
    }

    // Tampilkan Modal
    modal.style.display = 'block';
}

function tutupDetailModal() {
    const modal = document.getElementById('gameDetailModal');
    if (modal) modal.style.display = 'none';
}

function pilihDenom(namaNominal, hargaNominal, element) {
    denomTerpilih = namaNominal;
    hargaTerpilih = hargaNominal;
    document.querySelectorAll('.denom-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}

function pilihMetode(namaMetode, element) {
    metodeTerpilih = namaMetode;
    document.querySelectorAll('.pay-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}

function prosesCheckout() {
    const userId = document.getElementById('inputUserId').value;
    const zoneId = document.getElementById('inputZoneId').value;

    if (!denomTerpilih) { alert('Silakan pilih Nominal (Denom) terlebih dahulu!'); return; }
    if (!metodeTerpilih) { alert('Silakan pilih Metode Pembayaran terlebih dahulu!'); return; }
    if (!userId) { alert('Silakan masukkan User ID Game Anda!'); return; }

    const noAdmin = "62895635117021";
    let pesan = `Halo Admin NovaLoot, saya ingin memesan top up:${"%0A%0A"}` +
                `🎮 Game: ${gameTerpilih}${"%0A"}` +
                `💎 Nominal: ${denomTerpilih}${"%0A"}` +
                `💵 Harga: ${hargaTerpilih}${"%0A"}` +
                `💳 Metode Bayar: ${metodeTerpilih}${"%0A"}` +
                `👤 User ID: ${userId}` + (zoneId ? ` (${zoneId})` : '') + `${"%0A%0A"}` +
                `Mohon instruksi pengerjaannya ya!`;

    window.open(`https://wa.me/${noAdmin}?text=${pesan}`, '_blank');
}