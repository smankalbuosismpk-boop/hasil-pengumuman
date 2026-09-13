/* 
   DATA PESERTA
   Status yang tersedia:
   1. "LOLOS"          -> Lolos Ke Tahap Selanjutnya
   2. "PEMANTAUAN"     -> Dalam Pemantauan
   3. "SUSULAN"        -> Wawancara Susulan
   4. "TIDAK_LOLOS"    -> Tidak Lolos
*/
const dataPeserta = [
    {
        username: "andi",
        nic: "OSIS001",
        ttl: "Jakarta, 10 Mei 2008",
        status: "LOLOS"
    },
    {
        username: "budi",
        nic: "MPK002",
        ttl: "Bandung, 15 Agustus 2008",
        status: "PEMANTAUAN"
    },
    {
        username: "citra",
        nic: "OSIS003",
        ttl: "Surabaya, 05 Maret 2008",
        status: "SUSULAN"
    },
    {
        username: "dani",
        nic: "MPK004",
        ttl: "Semarang, 20 Desember 2007",
        status: "TIDAK_LOLOS"
    }
];

// Inisialisasi Elemen HTML
const form = document.getElementById('checkForm');
const errorMsg = document.getElementById('errorMsg');

const resultLolos = document.getElementById('resultLolos');
const resultPemantauan = document.getElementById('resultPemantauan');
const resultSusulan = document.getElementById('resultSusulan');
const resultTidakLolos = document.getElementById('resultTidakLolos');

// Event Handler Form Submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputUsername = document.getElementById('username').value.trim().toLowerCase();
    const inputNic = document.getElementById('nic').value.trim().toLowerCase();
    const inputTtl = document.getElementById('ttl').value.trim().toLowerCase();

    // Pencarian Data Peserta
    const peserta = dataPeserta.find(p => 
        p.username.toLowerCase() === inputUsername &&
        p.nic.toLowerCase() === inputNic &&
        p.ttl.toLowerCase() === inputTtl
    );

    if (peserta) {
        errorMsg.style.display = 'none';
        form.style.display = 'none';

        const detailHTML = `
            <div class="detail-row">
                <span class="detail-label">Nama / Username</span>
                <span class="detail-value">${peserta.username}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Nomor Induk Calon</span>
                <span class="detail-value">${peserta.nic}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">TTL</span>
                <span class="detail-value">${peserta.ttl}</span>
            </div>
        `;

        // Logika Percabangan 4 Status
        if (peserta.status === "LOLOS") {
            document.getElementById('infoLolos').innerHTML = detailHTML;
            resultLolos.style.display = 'block';
        } else if (peserta.status === "PEMANTAUAN") {
            document.getElementById('infoPemantauan').innerHTML = detailHTML;
            resultPemantauan.style.display = 'block';
        } else if (peserta.status === "SUSULAN") {
            document.getElementById('infoSusulan').innerHTML = detailHTML;
            resultSusulan.style.display = 'block';
        } else {
            document.getElementById('infoTidakLolos').innerHTML = detailHTML;
            resultTidakLolos.style.display = 'block';
        }
    } else {
        // Tampilkan Pesan Kesalahan
        errorMsg.style.display = 'block';
        errorMsg.style.animation = 'none';
        errorMsg.offsetHeight; /* Trigger Reflow Animation */
        errorMsg.style.animation = null; 
    }
});

// Fungsi Reset Form
function resetForm() {
    resultLolos.style.display = 'none';
    resultPemantauan.style.display = 'none';
    resultSusulan.style.display = 'none';
    resultTidakLolos.style.display = 'none';
    
    errorMsg.style.display = 'none';
    form.style.display = 'block';
    form.reset();
}