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
        image: 'image/ml-banner.avif',
        denom: [
            { nama: '86 Diamonds', harga: 'Rp 19.500' },
            { nama: '172 Diamonds', harga: 'Rp 38.000' },
            { nama: '257 Diamonds', harga: 'Rp 57.000' }
        ]
    },
    'Roblox': {
        publisher: 'Roblox Corporation',
        image: 'image/banner-roblox.jpeg',
        denom: [
            { nama: '50 Robux', harga: 'Rp 21.750' },
            { nama: '100 Robux', harga: 'Rp 28.500' },
            { nama: '200 Robux', harga: 'Rp 55.000' }
        ]
    },
    'Valorant': {
        publisher: 'Riot Games',
        image: 'image/valorant.jpg',
        denom: [
            { nama: '300 VP', harga: 'Rp 35.000' },
            { nama: '625 VP', harga: 'Rp 70.000' }
        ]
    },
    'PUBG Mobile': {
        publisher: 'Tencent Games',
        image: 'image/pubg.jpg',
        denom: [
            { nama: '60 UC', harga: 'Rp 15.000' },
            { nama: '325 UC', harga: 'Rp 75.000' }
        ]
    },
    'Magic Chess: Go Go': {
        publisher: 'Moonton',
        image: 'image/mcgg.jpg',
        denom: [
            { nama: '50 Diamonds', harga: 'Rp 12.000' }
        ]
    },
    'Clash of Clans': {
        publisher: 'Supercell',
        image: 'image/coc.jpg',
        denom: [
            { nama: '80 Gems', harga: 'Rp 16.000' }
        ]
    },
    'Clash Royale': {
        publisher: 'Supercell',
        image: 'image/clashroyale.jpg',
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
// 1. DAFTAR DATA GAME (Bisa ditambah sesuai kebutuhan)
const gamesList = [
    { id: 'free-fire', name: 'Free Fire', category: 'Mobile', image: 'image/ff.jpg' },
    { id: 'mobile-legends', name: 'Mobile Legends', category: 'Mobile', image: 'image/ml.jpg' },
    { id: 'roblox', name: 'Roblox', category: 'PC/Mobile', image: 'image/roblox.jpg' },
    { id: 'valorant', name: 'Valorant', category: 'PC', image: 'image/valorant.jpg' },
    { id: 'pubg-mobile', name: 'PUBG Mobile', category: 'Mobile', image: 'image/pubg.jpg' },
    { id: 'magic-chess', name: 'Magic Chess: Go Go', category: 'Mobile', image: 'image/magic-chess.jpg' },
    { id: 'clash-of-clans', name: 'Clash of Clans', category: 'Mobile', image: 'image/coc.jpg' },
    { id: 'clash-royale', name: 'Clash Royale', category: 'Mobile', image: 'image/clash-royale.jpg' },
    { id: 'genshin-impact', name: 'Genshin Impact', category: 'Multiplatform', image: 'image/genshin.jpg' },
    { id: 'honkai-star-rail', name: 'Honkai: Star Rail', category: 'Multiplatform', image: 'image/hsr.jpg' }
];

// 2. FUNGSI UNTUK MENAMPILKAN KARTU GAME KE HALAMAN
function renderGames(data) {
    const container = document.getElementById('gameGrid'); // Container tempat kartu game
    if (!container) return;

    if (data.length === 0) {
        container.innerHTML = `<div style="color: #94a3b8; text-align: center; width: 100%; padding: 20px;">Game tidak ditemukan...</div>`;
        return;
    }

    container.innerHTML = data.map(game => `
        <a href="detail.html?game=${game.id}" class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
        </a>
    `).join('');
}

// 3. FUNGSI PENCARIAN OTOMATIS (FILTERING)
function searchGame() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Filter array berdasarkan nama game
    const filteredGames = gamesList.filter(game => 
        game.name.toLowerCase().includes(searchInput)
    );

    // Tampilkan ulang game yang sesuai
    renderGames(filteredGames);
}

// Jalankan pertama kali saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderGames(gamesList);
});
// ==========================================
// 1. KODE PENCARIAN & FILTER GAME (UNTUK INDEX.HTML)
// ==========================================
function filterGames() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const keyword = input.value.toLowerCase().trim();
    const gameCards = document.querySelectorAll('.game-grid .game-card');

    gameCards.forEach(card => {
        const gameTitle = card.innerText.toLowerCase();
        if (gameTitle.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const visibleCards = Array.from(document.querySelectorAll('.slider-track .game-card'))
                .filter(card => card.style.display !== 'none');

            if (visibleCards.length > 0) {
                const targetUrl = visibleCards[0].getAttribute('href');
                if (targetUrl) {
                    window.location.href = targetUrl;
                }
            } else {
                alert('Game tidak ditemukan!');
            }
        }
    });
}


// ==========================================
// 2. KODE DATABASE & DETAIL GAME (UNTUK DETAIL.HTML)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Database lengkap dengan publisher & description untuk setiap game
    const gameDatabase = {
        'mobile-legends': {
            name: 'Mobile Legends: Bang Bang',
            publisher: 'Moonton',
            banner: 'image/ml-banner.avif',
            icon: 'image/mlbb.jpg',
            inputPlaceholder: 'Masukkan User ID & Zone ID',
            description: 'Top up Diamond Mobile Legends resmi, aman, dan instan. Masukkan ID Anda dan pilih nominal diamond yang diinginkan.',
            items: [
                { id: 'ml-86', name: '86 Diamonds', price: 19500 },
                { id: 'ml-172', name: '172 Diamonds', price: 38000 },
                { id: 'ml-257', name: '257 Diamonds', price: 57000 },
                { id: 'ml-wp', name: 'Weekly Diamond Pass', price: 28000 }
            ]
        },
        'free-fire': {
            name: 'Free Fire',
            publisher: 'Garena',
            banner: 'image/ff-banner.jpg',
            icon: 'image/ff.jpg',
            inputPlaceholder: 'Masukkan Player ID',
            description: 'Top up Diamond Free Fire instan dalam hitungan detik. Cukup masukkan ID Free Fire Anda dan selesaikan pembayaran.',
            items: [
                { id: 'ff-140', name: '140 Diamonds', price: 19000 },
                { id: 'ff-355', name: '355 Diamonds', price: 46000 },
                { id: 'ff-720', name: '720 Diamonds', price: 92000 }
            ]
        },
        'aov': {
            name: 'Arena of Valor (AOV)',
            publisher: 'Garena',
            banner: 'image/banner-aov.jpg',
            icon: 'image/aov.jpeg',
            inputPlaceholder: 'Masukkan OpenID AOV',
            description: 'Beli Voucher Arena of Valor termurah dan terpercaya. Proses otomatis langsung masuk ke akun Anda.',
            items: [
                { id: 'aov-40', name: '40 Vouchers', price: 10000 },
                { id: 'aov-90', name: '90 Vouchers', price: 20000 },
                { id: 'aov-230', name: '230 Vouchers', price: 50000 }
            ]
        },
        'ace-racer': {
            name: 'Ace Racer',
            publisher: 'NetEase Games',
            banner: 'image/banner-ace.jpg',
            icon: 'image/ace.webp',
            inputPlaceholder: 'Masukkan User ID Ace Racer',
            description: 'Top up Tokens Ace Racer langsung masuk untuk mempercepat progres balapan Anda.',
            items: [
                { id: 'ace-60', name: '60 Tokens', price: 15000 },
                { id: 'ace-300', name: '300 Tokens', price: 75000 }
            ]
        },
        'age-of-magic': {
            name: 'Age of Magic',
            publisher: 'Playkot LTD',
            banner: 'image/banner-aom.jpg',
            icon: 'image/aom.jpg',
            inputPlaceholder: 'Masukkan Player ID',
            description: 'Top up Gold Age of Magic aman, cepat, dan tanpa perlu login akun game Anda.',
            items: [
                { id: 'aom-100', name: '100 Gold', price: 16000 },
                { id: 'aom-500', name: '500 Gold', price: 79000 }
            ]
        },
        'blood-strike': {
            name: 'Blood Strike',
            publisher: 'NetEase Games',
            banner: 'image/banner-blood.jpg',
            icon: 'image/blood.webp',
            inputPlaceholder: 'Masukkan User ID Blood Strike',
            description: 'Beli Gold Blood Strike instan kilat untuk perlengkapan tempur terbaikmu.',
            items: [
                { id: 'bs-100', name: '100 Gold', price: 15000 },
                { id: 'bs-500', name: '500 Gold', price: 70000 }
            ]
        },
        'codm': {
            name: 'Call of Duty Mobile',
            publisher: 'Garena',
            banner: 'image/banner-codm.jpg',
            icon: 'image/codm.png',
            inputPlaceholder: 'Masukkan OpenID CODM',
            description: 'Top up CP Call of Duty Mobile resmi Garena dengan proses instan 24 jam.',
            items: [
                { id: 'codm-31', name: '31 CP', price: 5000 },
                { id: 'codm-63', name: '63 CP', price: 10000 },
                { id: 'codm-128', name: '128 CP', price: 20000 }
            ]
        },
        'valorant': {
            name: 'Valorant',
            publisher: 'Riot Games',
            banner: 'image/banner-valorant.jpg',
            icon: 'image/valorant.avif',
            inputPlaceholder: 'Masukkan Riot ID (Name#TAG)',
            description: 'Top Up Valorant Points (VP) resmi Riot Games untuk beli skin senjata impianmu.',
            items: [
                { id: 'val-125', name: '125 VP', price: 16000 },
                { id: 'val-420', name: '420 VP', price: 50000 }
            ]
        },
        'clash-of-clans': {
            name: 'Clash of Clans',
            publisher: 'Supercell',
            banner: 'image/banner-coc.webp',
            icon: 'image/Coc.png',
            inputPlaceholder: 'Masukkan Player Tag (#TAG)',
            description: 'Beli Gems dan Gold Pass Clash of Clans untuk mempercepat pembangunan desa.',
            items: [
                { id: 'coc-80', name: '80 Gems', price: 16000 },
                { id: 'coc-gp', name: 'Gold Pass', price: 120000 }
            ]
        },
        'clash-royale': {
            name: 'Clash Royale',
            publisher: 'Supercell',
            banner: 'image/CR-banner.avif',
            icon: 'image/CR.png',
            inputPlaceholder: 'Masukkan Player Tag (#TAG)',
            description: 'Top up Gems dan Diamond Pass Clash Royale secara aman dan instan.',
            items: [
                { id: 'cr-80', name: '80 Gems', price: 16000 },
                { id: 'cr-pass', name: 'Diamond Pass', price: 180000 }
            ]
        },
        'pubg-mobile': {
            name: 'PUBG Mobile',
            publisher: 'Tencent Games',
            banner: 'image/banner-pubg.jpg',
            icon: 'image/PUBG.webp',
            inputPlaceholder: 'Masukkan User ID PUBG Mobile',
            description: 'Top up UC PUBG Mobile resmi dan aman untuk membeli Royale Pass dan skin eksklusif.',
            items: [
                { id: 'pubg-60', name: '60 UC', price: 15000 },
                { id: 'pubg-325', name: '325 UC', price: 75000 }
            ]
        },
        'magic-chess': {
            name: 'Magic Chess: Go Go',
            publisher: 'Moonton',
            banner: 'image/mcgg-banner.png',
            icon: 'image/mcgg.webp',
            inputPlaceholder: 'Masukkan User ID & Zone ID',
            description: 'Top up Pass dan Token Magic Chess: Go Go instan dan otomatis masuk.',
            items: [
                { id: 'mcgg-100', name: '100 Token', price: 15000 },
                { id: 'mcgg-500', name: '500 Token', price: 70000 }
            ]
        },
        'roblox': {
            name: 'Roblox',
            publisher: 'Roblox Corporation',
            banner: 'image/banner-roblox.jpeg',
            icon: 'image/roblox.webp',
            inputPlaceholder: 'Masukkan Username Roblox',
            description: 'Top up Robux Roblox resmi, aman, dan instan untuk kustomisasi avatar dan pembelian item game.',
            items: [
                { id: 'rbx-400', name: '400 Robux', price: 75000 },
                { id: 'rbx-800', name: '800 Robux', price: 150000 },
                { id: 'rbx-1700', name: '1700 Robux', price: 300000 }
            ]
        },
    };

    // Ambil parameter dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get('game') || 'mobile-legends';
    const currentGame = gameDatabase[gameKey] || gameDatabase['mobile-legends'];

    // Injeksi otomatis ke elemen HTML detail.html
    const titleElement = document.getElementById('gameTitle');
    if (titleElement) titleElement.innerText = currentGame.name;

    const publisherEl = document.getElementById('publisherTag');
    if (publisherEl) publisherEl.innerText = currentGame.publisher;

    const descEl = document.getElementById('gameDesc');
    if (descEl) descEl.innerText = currentGame.description;

    const bannerImg = document.getElementById('bannerImg');
    if (bannerImg) bannerImg.src = currentGame.banner;

    const iconImg = document.getElementById('iconImg');
    if (iconImg) iconImg.src = currentGame.icon;

    const idInput = document.getElementById('userIdInput');
    if (idInput) idInput.placeholder = currentGame.inputPlaceholder;

    const nominalContainer = document.getElementById('denomList');
    if (nominalContainer && currentGame.items) {
        nominalContainer.innerHTML = currentGame.items.map(item => `
            <div class="denom-card" onclick="selectNominal('${item.id}', '${item.name}', ${item.price})">
                <h4>${item.name}</h4>
                <p>Rp ${item.price.toLocaleString('id-ID')}</p>
            </div>
        `).join('');
    }
});

function selectNominal(itemId, itemName, itemPrice) {
    localStorage.setItem('selectedItemName', itemName);
    localStorage.setItem('selectedItemPrice', itemPrice);
}
function toggleMoreGames() {
    const hiddenGames = document.querySelectorAll('.extra-games');
    const loadMoreText = document.getElementById('loadMoreText');
    
    let isHidden = false;
    hiddenGames.forEach(game => {
        if (game.style.display === 'none' || game.style.display === '') {
            game.style.display = 'flex';
            isHidden = true;
        } else {
            game.style.display = 'none';
        }
    });

    if (isHidden) {
        loadMoreText.innerText = 'Tampilkan Lebih Sedikit';
    } else {
        loadMoreText.innerText = 'Tampilkan Lainnya';
    }
}

    if (isHidden) {
        btnText.innerHTML = '<span>Tampilkan Lebih Sedikit</span> <i class="fa-solid fa-chevron-up"></i>';
    } else {
        btnText.innerHTML = '<span>Tampilkan Lainnya</span> <i class="fa-solid fa-chevron-down"></i>';
    }
