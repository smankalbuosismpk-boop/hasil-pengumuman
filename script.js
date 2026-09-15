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
    username: "ABDULOH MUHAMMAD FARHAN",
    nic: "202612001",
    ttl: "SUKABUMI, 23 JULI 2010",
    status: "LOLOS",
  },
  {
    username: "ADINDA RIZKI APRILIYANTI",
    nic: "202612002",
    ttl: "PEMALANG, 3 APRIL 2011",
    status: "LOLOS",
  },
  {
    username: "ALMA SIFA AZ-ZAHRA",
    nic: "202612003",
    ttl: "SUKABUMI, 21 JULI 2010",
    status: "LOLOS",
  },
  {
    username: "BUNYAMIN",
    nic: "202612004",
    ttl: "SUKABUMI, 5 OKTOBER 2009",
    status: "LOLOS",
  },
  {
    username: "DERIS YUSUF",
    nic: "202612005",
    ttl: "SUKABUMI, 21 JANUARI 2010",
    status: "LOLOS",
  },
  {
    username: "DIERA NAZWAKIRANA PUTRI",
    nic: "202612006",
    ttl: "SUKABUMI, 18 OKTOBER 2011",
    status: "PEMANTAUAN",
  },
  {
    username: "FAJAR KUSNADI",
    nic: "202612007",
    ttl: "BEKASI, 16 JUNI 2011",
    status: "SUSULAN",
  },
  {
    username: "FEBBIANA AFRADHYTA",
    nic: "202612008",
    ttl: "SUKABUMI, 2 FEBRUARI 2011",
    status: "LOLOS",
  },
  {
    username: "FITRIANI",
    nic: "202612009",
    ttl: "SUKABUMI, 3 MARET 2010",
    status: "LOLOS",
  },
  {
    username: "GMELIN NOERZAFAR LAWANA",
    nic: "202612010",
    ttl: "SUKABUMI, 12 FEBRUARI 2010",
    status: "LOLOS",
  },
  {
    username: "ILHAM",
    nic: "202612011",
    ttl: "SUKABUMI, 3  2010",
    status: "LOLOS",
  },
  {
    username: "ILHAM FAUZAN",
    nic: "202612012",
    ttl: "SUKABUMI, 19 ",
    status: "LOLOS",
  },
  {
    username: "INTAN MUTIA SRI HARTINI",
    nic: "202612013",
    ttl: "SUKABUMI, 3 JULI 2011",
    status: "LOLOS",
  },
  {
    username: "IQBAL MAULANA JOIS",
    nic: "202612014",
    ttl: "SUKABUMI, 4 MEI 2010",
    status: "LOLOS",
  },
  {
    username: "JIHAN AYUWANDIRA",
    nic: "202612015",
    ttl: "SUKABUMI, 19 SEPTEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "MELANI OKTAVIANI",
    nic: "202612016",
    ttl: "SUKABUMI, 10 OKTOBER 2010",
    status: "PEMANTAUAN",
  },
  {
    username: "MOHAMAD RENGGO WIDODO",
    nic: "202612017",
    ttl: "SAROLANGUN, 2 FEBRUARI 2011",
    status: "LOLOS",
  },
  {
    username: "MUHAMAD ALDIANSYAH WIRAGUNA",
    nic: "202612018",
    ttl: "SUKABUMI, 30 MEI 2010",
    status: "LOLOS",
  },
  {
    username: "MUHAMAD PARDAN KURNIAWAN",
    nic: "202612019",
    ttl: "SUKABUMI, 22 JANUARI 2011",
    status: "LOLOS",
  },
  {
    username: "MUHAMMAD ARDI FADILLAH",
    nic: "202612020",
    ttl: "SUKABUMI, 25 OKTOBER 2010",
    status: "LOLOS",
  },
  {
    username: "MUHAMMAD FIKRI",
    nic: "202612021",
    ttl: "SUKABUMI, 24 SEPTEMBER 2010",
    status: "SUSULAN",
  },
  {
    username: "MUHAMMAD NAJIB",
    nic: "202612022",
    ttl: "SUKABUMI, 28 JULI 2010",
    status: "LOLOS",
  },
  {
    username: "MUHAMMAD REVAN ADISTA PRATAMA",
    nic: "202612023",
    ttl: "SUKABUMI, 2 DESEMBER 2011",
    status: "LOLOS",
  },
  {
    username: "MUHAMMAD TAUFIQ ABYAN TAMAM",
    nic: "202612024",
    ttl: "SUKABUMI, 21 JUNI 2010",
    status: "LOLOS",
  },
  {
    username: "MUTIARA CHYNTIA",
    nic: "202612025",
    ttl: "SUKABUMI, 10 DESEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "NADIA MARWAH",
    nic: "202612026",
    ttl: "SUKABUMI, 14 AGUSTUS 2009",
    status: "LOLOS",
  },
  {
    username: "NADILA JULIANTI",
    nic: "202612027",
    ttl: "SUKABUMI, 29 JULI 2010",
    status: "LOLOS",
  },
  {
    username: "NAZWA NAYLA SAFITRI",
    nic: "202612028",
    ttl: "SUKABUMI, 18 APRIL 2011",
    status: "LOLOS",
  },
  {
    username: "NENG NUR RISMAYANTI",
    nic: "202612029",
    ttl: "SUKABUMI, 25 SEPTEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "NURLAYLA",
    nic: "202612030",
    ttl: "SUKABUMI, 14 MEI 2010",
    status: "PEMANTAUAN",
  },
  {
    username: "NURUL AYUNI",
    nic: "202612031",
    ttl: "SUKABUMI, 22 APRIL 2010",
    status: "LOLOS",
  },
  {
    username: "RADITYA ALVINO RAFFASYA",
    nic: "202612032",
    ttl: "SUKABUMI, 21 SEPTEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "RAESEL RASESA HASNA",
    nic: "202612033",
    ttl: "SUKABUMI, 25 FEBRUARI 2012",
    status: "LOLOS",
  },
  {
    username: "RENATA AJENG PRATIWI",
    nic: "202612034",
    ttl: "SUKABUMI, 5 JUNI 2011",
    status: "LOLOS",
  },
  {
    username: "SAHAL MARZUQI",
    nic: "202612035",
    ttl: "SUKABUMI, 2 AGUSTUS 2010",
    status: "LOLOS",
  },
  {
    username: "SAHLA",
    nic: "202612036",
    ttl: "SUKABUMI, 14 SEPTEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "SATRIA WIGUNA PUTRA",
    nic: "202612037",
    ttl: "SUKABUMI, 27 JUNI 2011",
    status: "LOLOS",
  },
  {
    username: "SELA AGUSTINA",
    nic: "202612038",
    ttl: "SUKABUMI, 17 AGUSTUS 2010",
    status: "LOLOS",
  },
  {
    username: "SEPTIAN FAUZI H.",
    nic: "202612039",
    ttl: "SUKABUMI, 23 SEPTEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "SISKA AMELIA",
    nic: "202612040",
    ttl: "SUKABUMI, ",
    status: "PEMANTAUAN",
  },
  {
    username: "SITI KAIDA HUMAIROH",
    nic: "202612041",
    ttl: "SUKABUMI, 18 MARET 2010",
    status: "LOLOS",
  },
  {
    username: "SITI NUROHMAH",
    nic: "202612042",
    ttl: "SUKABUMI, 25 JANUARI 2011",
    status: "LOLOS",
  },
  {
    username: "SITI RAHMAH",
    nic: "202612043",
    ttl: "SUKABUMI, 9 JULI 2010",
    status: "PEMANTAUAN",
  },
  {
    username: "SITI ZAINAB KEYLA",
    nic: "202612044",
    ttl: "SUKABUMI, 25 OKTOBER 2009",
    status: "LOLOS",
  },
  {
    username: "SOLIHATUN NISA",
    nic: "202612045",
    ttl: "SUKABUMI, 1 JULI 2011",
    status: "LOLOS",
  },
  {
    username: "SYAFIRA NUR FAUZIYAH",
    nic: "202612046",
    ttl: "SUKABUMI, 14 MEI 2011",
    status: "PEMANTAUAN",
  },
  {
    username: "SYIFA PEBRIANA",
    nic: "202612047",
    ttl: "SUKABUMI, 9 FEBRUARI 2010",
    status: "LOLOS",
  },
  {
    username: "TALYA SUBUH",
    nic: "202612048",
    ttl: "SUKABUMI, 11 JULI 2011",
    status: "LOLOS",
  },
  {
    username: "TEGAR ADITYA PUTRA",
    nic: "202612049",
    ttl: "JAKARTA, 13 JULI 2010",
    status: "LOLOS",
  },
  {
    username: "TIA NUR WAHIDAH",
    nic: "202612050",
    ttl: "SUKABUMI, 13 FEBRUARI 2010",
    status: "LOLOS",
  },
  {
    username: "VITALOKA SALSABILA PRIATNA",
    nic: "202612051",
    ttl: "SUKABUMI, 12 JUNI 2011",
    status: "LOLOS",
  },
  {
    username: "WIDIYA RAHMADHANI",
    nic: "202612052",
    ttl: "JAKARTA, 22 AGUSTUS 2010",
    status: "SUSULAN",
  },
  {
    username: "WINA EMELIA PUTRI",
    nic: "202612053",
    ttl: "SUKABUMI, 26 OKTOBER 2010",
    status: "LOLOS",
  },
  {
    username: "ZAHRA AULIA",
    nic: "202612054",
    ttl: "SUKABUMI, 27 DESEMBER 2010",
    status: "LOLOS",
  },
  {
    username: "ZAHWA CAHYA FATIMAH",
    nic: "202612055",
    ttl: "SUKABUMI, 17 Desember 2011",
    status: "PEMANTAUAN",
  },
  {
    username: "ZIHAN MELANI",
    nic: "202612056",
    ttl: "SUKABUMI, 7 MEI 2010",
    status: "LOLOS",
  },
];

// Inisialisasi Elemen HTML
const form = document.getElementById("checkForm");
const errorMsg = document.getElementById("errorMsg");

const resultLolos = document.getElementById("resultLolos");
const resultPemantauan = document.getElementById("resultPemantauan");
const resultSusulan = document.getElementById("resultSusulan");
const resultTidakLolos = document.getElementById("resultTidakLolos");

// Event Handler Form Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputUsername = document
    .getElementById("username")
    .value.trim()
    .toLowerCase();
  const inputNic = document.getElementById("nic").value.trim().toLowerCase();
  const inputTtl = document.getElementById("ttl").value.trim().toLowerCase();

  // Pencarian Data Peserta
  const peserta = dataPeserta.find(
    (p) =>
      p.username.toLowerCase() === inputUsername &&
      p.nic.toLowerCase() === inputNic &&
      p.ttl.toLowerCase() === inputTtl,
  );

  if (peserta) {
    errorMsg.style.display = "none";
    form.style.display = "none";

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
      document.getElementById("infoLolos").innerHTML = detailHTML;
      resultLolos.style.display = "block";
    } else if (peserta.status === "PEMANTAUAN") {
      document.getElementById("infoPemantauan").innerHTML = detailHTML;
      resultPemantauan.style.display = "block";
    } else if (peserta.status === "SUSULAN") {
      document.getElementById("infoSusulan").innerHTML = detailHTML;
      resultSusulan.style.display = "block";
    } else {
      document.getElementById("infoTidakLolos").innerHTML = detailHTML;
      resultTidakLolos.style.display = "block";
    }
  } else {
    // Tampilkan Pesan Kesalahan
    errorMsg.style.display = "block";
    errorMsg.style.animation = "none";
    errorMsg.offsetHeight; /* Trigger Reflow Animation */
    errorMsg.style.animation = null;
  }
});

// Fungsi Reset Form
function resetForm() {
  resultLolos.style.display = "none";
  resultPemantauan.style.display = "none";
  resultSusulan.style.display = "none";
  resultTidakLolos.style.display = "none";

  errorMsg.style.display = "none";
  form.style.display = "block";
  form.reset();
}
