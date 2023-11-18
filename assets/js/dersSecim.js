// Ders classı oluşturuldu
class ders {
  constructor(kod, ad, ogretmenAd, sube, yer, kytogr, kont) {
    this.kod = kod;
    this.ad = ad;
    this.ogretmenAd = ogretmenAd;
    this.sube = sube;
    this.yer = yer;
    this.kytogr = kytogr;
    this.kont = kont;
  }
}
// Ogrenci classı oluşturuldu
class ogrenci {
  constructor(Name, OgrenciNo, eposta, dogumtarihi, iletisim, sifre) {
    this.Name = Name;
    this.OgrenciNo = OgrenciNo;
    this.eposta = eposta;
    this.dogumtarihi = dogumtarihi;
    this.iletisim = iletisim;
    this.sifre = sifre;
    this.dersListe = [];
  }
  // Öğrencinin aldığı dersleri almak için method
  ogrDersListe(dersListe) {
    this.dersListe = dersListe;
  }
}
// Yeni ogrenciler oluşturuldu
var aliriza = new ogrenci(
  "Ali Rıza Durak",
  "18025001",
  "alirizadurak@gmail.com",
  "01.01.1900",
  "05555555555",
  "1"
);
var zulal = new ogrenci(
  "Zülal Sarıoğlu",
  "18025002",
  "zülalsarioglu@gmail.com",
  "01.01.1905",
  "05555555555",
  "1"
);
var alienes = new ogrenci(
  "Ali Enes Damat",
  "18025003",
  "alienesdamat@gmail.com",
  "01.01.1900",
  "05555555555",
  "1"
);
var omerfaruk = new ogrenci(
  "Ömer Faruk Mahmutoğlu",
  "18025004",
  "omerfarukmahmutoglu@gmail.com",
  "01.01.1900",
  "05555555555",
  "1"
);
var gulsum = new ogrenci(
  "Gülsüm Öz",
  "18025005",
  "gulsumoz@gmail.com",
  "01.01.1900",
  "05555555555",
  "1"
);
var senaceren = new ogrenci(
  "Sena Ceren Kurnaz",
  "18025006",
  "senacerenkurnaz@gmail.com",
  "01.01.1900",
  "05555555555",
  "1"
);
// Yeni dersler oluşturuldu
var MAT101 = new ders(
  "MAT101",
  "Matematik I",
  "Erhan Kaya ",
  "Şube-1",

  "A-101",
  20,
  20
);
var TRH101 = new ders(
  "TRH101",
  "Tarih I",
  "Mehmet Hoca",
  "Şube-1",

  "B-102",
  15,
  18
);
var FZK101 = new ders(
  "FZK101",
  "Fizik I",
  "Ayşe Hoca",
  "Şube-1",

  "C-103",
  10,
  11
);
var BIY101 = new ders(
  "BİY101",
  "Biyoloji I",
  "Ahmet Hoca",
  "Şube-1",
  "D-104",
  12,
  14
);
var KMY101 = new ders(
  "KMY101",
  "Kimya I",
  "Fatma Hoca",
  "Şube-1",
  "E-105",
  15,
  16
);
var GEO101 = new ders(
  "GEO101",
  "Geometri I",
  "Yasin Hoca",
  "Şube-1",
  "F-106",
  15,
  16
);
var ISG101 = new ders(
  "ISG101",
  "İş Sağlığı I",
  "Salih Hoca",
  "Şube-1",
  "G-107",
  15,
  25
);
var ETK101 = new ders(
  "ETK101",
  "Etik I",
  "Şeyma Hoca",
  "Şube-1",
  "H-108",
  15,
  25
);
// Kullanıcıların tutulacağı array oluşturuldu
var kullanicilar = [];
// Kullanıcılar array e eklendi
kullanicilar.push(alienes, aliriza, zulal, omerfaruk, gulsum, senaceren);
// İstenen dersin seçilebilmesini sağlayan DOM elemntine ulaşıldı
const select = document.getElementById("dersler");
// Deslerin tutulacağı bir array oluşturuldu
let dersler = [];
// Dersler array e eklendi
dersler.push(MAT101, TRH101, KMY101, FZK101, BIY101, GEO101, ISG101, ETK101);
// Seçilen dersler için bir array oluşturduk
let secilenDersler = [];
// Derslerin başlangıçtaki kontenjanlarını tutmak için değişkenler oluşturduk
let matIlk = dersler[0].kytogr;
let trhIlk = dersler[1].kytogr;
let kmyIlk = dersler[2].kytogr;
let fzkIlk = dersler[3].kytogr;
let biyIlk = dersler[4].kytogr;
let geoIlk = dersler[5].kytogr;
let isgIlk = dersler[6].kytogr;
let etkIlk = dersler[7].kytogr;
// Ders programında derslerin ait olduğu zamanlara gitmesi için td ler classnamelerine göre seçildi
let mat = document.getElementsByClassName("mat");
let fizik = document.getElementsByClassName("fizik");
let biyo = document.getElementsByClassName("biyo");
let geo = document.getElementsByClassName("geo");
let isg = document.getElementsByClassName("isg");
let etik = document.getElementsByClassName("etik");
let tarih = document.getElementsByClassName("tarih");
let kimya = document.getElementsByClassName("kimya");
// Ders çakışstırma işlemi için projedeki statik tdler seçildi
var td = document.getElementsByTagName("td");
// Ders kodunu select value su içinde bulunan stringden almak için slice işlemi yaptık
const value = select.value.slice(0, select.value.indexOf("|"));
// Select'in seçili olan indexini aldık
const sLessonValue = document.getElementById("dersler").selectedIndex;
// Selectin içinde dersleri listelememizi sağlayan fonksiyon
var liste = () => {
  select.innerHTML = "";
  dersler.forEach((ders) => {
    select.innerHTML += `<option>
    ${ders.kod}|${ders.ad}|${ders.ogretmenAd}|${ders.sube}|${ders.yer}|${ders.kytogr}/${ders.kont}
    </option>`;
  });
};
// Giriş formumuzun DOM elementine ulaştık
var form = document.getElementById("form");
// Giriş yapan kullanıcıyı tutmak için bir değişken belirledik
let aktif = "";
// Öğrenci bilgilerini listeleyeceğimiz DOM elementini seçtik
var bilgiDOM = document.getElementById("bilgi");
// Kullanıcı girişi yapılacak fonksiyon
function girisYap() {
  // Kullanıcı adı ve şifreyi inputlardan aldık
  var kullaniciAdi = document.getElementById("userName").value;
  var sifre = document.getElementById("password").value;
  // Kullanıcılar arrayinden bilgileri eşleşen kullanıcıyı filtreledik
  const kullanici = kullanicilar.filter(
    (i) => i.OgrenciNo == kullaniciAdi && i.sifre == sifre
  );
  // Kullanıcı bilgileri eşleşmediği durumda kullanıc değişkennin uzunluğu olmayacağı için uyarı verildi
  if (kullanici.length < 1) {
    alert("Girilen kullanıcı bilgileri yanlış");
  } else {
    // Giriş yapan kullanıcının öğrenci numarası aktif değişkenine atandı
    aktif = kullanici[0].OgrenciNo;
    alert("Hoşgeldiniz");
    // Giriş yapıldığı için giriş formunun gizlenmesi sağlandı
    form.style.display = "none";
    // Kullanıcı bilgi ekranına geçmek için ilgili DOM elementi görünür hale getirildi
    bilgiDOM.style.display = "block";
    // İlgili DOM elemntinin içine ilgili kullanıcı bilgileri yazıldı
    bilgiDOM.innerHTML = `<table class="table-striped table-bordered" >

      <thead> Öğrenci Bilgileri:
      </thead>
    <br>
      <tbody>
        <tr>  
          <td>İsim :</td>
          <td>${kullanici[0].Name}</td>
        </tr>

        <tr>
          <td>Öğrenci Numarası :</td>
          <td>${kullanici[0].OgrenciNo}</td>
        </tr>

        <tr>
          <td>E-Posta Adresi :</td>
          <td>${kullanici[0].eposta}</td>
        </tr>

        <tr>
          <td>Doğum Tarihi :</td>
          <td>${kullanici[0].dogumtarihi}</td>
        </tr>

        <tr>
          <td>İletişim Bilgileri :</td>
          <td>${kullanici[0].iletisim}</td>
        </tr>
      </tbody>
      </table> 
    `;
  }
  navUpdate();
}
// Ders seçim ekranında seçilecek dersler listesinin görülmesi için ilgili fonksiyon çağırıldı
liste();
// Ders eklemek için ilgili fonksiyon
function dersEkle() {
  // Ders kodunu select value su içinde bulunan stringden almak için slice işlemi yaptık
  const value = select.value.slice(0, select.value.indexOf("|"));
  // Selectin seçili indexini aldık
  const sLessonValue = document.getElementById("dersler").selectedIndex;
  // Seçilen dersin bir daha seçilememesi için koşul
  if (
    secilenDersler.find((i) => i.kod == value)
      ? secilenDersler.find((i) => i.kod == value).kod
      : null == dersler[sLessonValue].kod
  ) {
    alert("Bu ders zaten ekli");

    console.log(secilenDersler);
  }
  dersler.forEach((ders) => {
    // KOntenjan dolu mu değil mi diye kontrol yapıldı
    if (ders.kod == value && ders.kytogr >= ders.kont) {
      alert("Kontenjan Dolu");
    }
    // Dersin aşağıdaki koşullar sağlandığında listeye ve ders programına eklenmesini sağlayan koşul
    else if (
      ders.kod == value &&
      ders.kytogr < ders.kont &&
      secilenDersler.includes(dersler[sLessonValue]) == false
    ) {
      secilenDersler.push(ders);

      if (value == "MAT101") {
        var arr = [].slice.call(mat); //html collection to array
        arr.forEach((item) => {
          item.innerHTML += "Matematik";
        });
      }
      if (value == "FZK101") {
        var arr = [].slice.call(fizik);
        arr.forEach((item) => {
          item.innerHTML += "Fizik";
        });
      }
      if (value == "BİY101") {
        var arr = [].slice.call(biyo);
        arr.forEach((item) => {
          item.innerHTML += "Biyoloji";
        });
      }
      if (value == "KMY101") {
        var arr = [].slice.call(kimya);
        arr.forEach((item) => {
          item.innerHTML += "Kimya";
        });
      }
      if (value == "GEO101") {
        var arr = [].slice.call(geo);
        arr.forEach((item) => {
          item.innerHTML += "Geometri";
        });
      }
      if (value == "ISG101") {
        var arr = [].slice.call(isg);
        arr.forEach((item) => {
          item.innerHTML += "İş Sağlığı";
        });
      }
      if (value == "ETK101") {
        var arr = [].slice.call(etik);
        arr.forEach((item) => {
          item.innerHTML += "Etik";
        });
      }
      if (value == "TRH101") {
        var arr = [].slice.call(tarih);
        arr.forEach((item) => {
          item.innerHTML += "Tarih";
        });
      }
    }

  });
  // Ui da bug oluşmaması için çağırılması gereken fonksiyonlar çağırıldı
  select.innerHTML = "";
  liste();
  dersListele();
}
function dersListele() {
  // `alınanDersler` tablosunu temizleyin.
  const alınanDersler = document.getElementById("alınanDersler");
  alınanDersler.innerHTML = "";
  // `secilenDersler` dizisindeki her ders için bir satır oluşturun.
  secilenDersler.forEach((item) => {
    // Bir satır oluşturun.
    const value = item.kod;
    const tr = document.createElement("tr");

    // Ders adını içeren bir hücre oluşturun.
    const adTd = document.createElement("td");
    adTd.textContent = item.ad;
    tr.appendChild(adTd);

    // Ders kodunu içeren bir hücre oluşturun.
    const kodTd = document.createElement("td");
    kodTd.textContent = item.kod;
    tr.appendChild(kodTd);

    // Sil düğmesini içeren bir hücre oluşturun.
    const deleteTD = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      // Ders koduna göre dersi listeden silin.
      secilenDersler = secilenDersler.filter((ders) => ders.kod !== item.kod);

      liste();
      // Silinen ders ders progamından kaldırıldı
      if (value == "MAT101") {
        var arr = [].slice.call(mat);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "FZK101") {
        var arr = [].slice.call(fizik);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "BİY101") {
        var arr = [].slice.call(biyo);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "KMY101") {
        var arr = [].slice.call(kimya);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "GEO101") {
        var arr = [].slice.call(geo);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "ISG101") {
        var arr = [].slice.call(isg);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "ETK101") {
        var arr = [].slice.call(etik);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      if (value == "TRH101") {
        var arr = [].slice.call(tarih);
        arr.forEach((item) => {
          item.innerHTML = "";
        });
      }

      // Silinen dersi tablodan kaldırın.
      alınanDersler.removeChild(tr);

    });
    // Satıra Delete td si ve buttonunu ekleme
    deleteTD.appendChild(deleteBtn);
    tr.appendChild(deleteTD);

    // Satırı tabloya ekleyin.
    alınanDersler.appendChild(tr);
  });
}
// Öğrencinin onayladığı dersleri kendi bşlgi sistemine eklemesini sağlar
function ogrDersOnay() {
  if (!aktif) {
    alert("Lütfen önce giriş yapın.");
  }
  // Seçilen dersler öğrenci bilgi ekranına eklendi
  else {
    kullanicilar.find((i) => i.OgrenciNo == aktif).ogrDersListe(secilenDersler);

    secilenDersler.forEach((e) => e.kytogr++);
    alınanDersler.innerHTML = "";
    select.innerHTML = "";
    for (let i = 0; i < td.length; i++) {
      switch (td[i].innerHTML) {
        case "Tarih":
          td[i].innerHTML = "";
          break;
        case "İş Sağlığı":
          td[i].innerHTML = "";
          break;
        case "Etik":
          td[i].innerHTML = "";
          break;
        case "Geometri":
          td[i].innerHTML = "";
          break;
        case "Biyoloji":
          td[i].innerHTML = "";
          break;
        case "Fizik":
          td[i].innerHTML = "";
          break;
        case "Kimya":
          td[i].innerHTML = "";
          break;

        default:
          break;
      }
    }
    // Selectin ui nı güncellemek için fonksiyon çağırıldı
    liste();
    alert("Dersleriniz bilgi ekranına eklendi!");

    kullanicilar
      .filter((i) => i.OgrenciNo == aktif)[0]
      .dersListe.map((i) => {
        // Ders bilgi ekranına eklencek dersler için tablo elemanları oluşturuldu
        const table = document.createElement("table");
        const tr = document.createElement("tr");
        const kodTd = document.createElement("td");
        const adTd = document.createElement("td");
        const ogradTd = document.createElement("td");
        const subeTd = document.createElement("td");
        const yerTd = document.createElement("td");
        const tr2 = document.createElement("tr");
        const deleteTd = document.createElement("td");
        const deleteBtn = document.createElement("button");
        // Dersin bilgileri ilgili tablo elemanının içine yazıldı
        kodTd.textContent = i.kod;
        adTd.textContent = i.ad;
        ogradTd.textContent = i.ogretmenAd;
        subeTd.textContent = i.sube;
        yerTd.textContent = i.yer;
        deleteBtn.textContent = "Delete";
        // Tablo elemamları ui da ilgili yerlere yerleştirldi
        tr.appendChild(kodTd);
        tr.appendChild(adTd);
        tr.appendChild(ogradTd);
        tr.appendChild(subeTd);
        tr.appendChild(yerTd);
        tr2.appendChild(deleteTd);
        deleteTd.appendChild(deleteBtn);
        table.appendChild(tr);
        table.appendChild(tr2);
        bilgiDOM.appendChild(table);
        table.className = "table-striped table-bordered";
        deleteBtn.style.backgroundColor = "Red";
        deleteBtn.style.color = "White";
        deleteBtn.style.border = "none";
        deleteBtn.style.width = "100%";
        deleteBtn.style.padding = "6px 0px";
        deleteBtn.style.cursor = "pointer";
        deleteTd.style.textAlign = "center";
        // Eklenen dersin silinmesi için click fonksiyonu
        deleteBtn.addEventListener("click", () => {
          kullanicilar
            .find((i) => i.OgrenciNo == aktif)
            .dersListe.filter((j) => j.kod != i.kod);
          bilgiDOM.removeChild(table);
          i.kytogr--;
          alert(i.ad + " dersiniz başarıyla silindi!");
          // KOntenjanlar güncellensin diye gerekli işlemler
          select.innerHTML = "";
          liste();
        });
      });

    // Ders seçim ekranındaki dersler sıfırlandı
    secilenDersler = [];
  }
}

const dersSecimEkraniDOM = document.getElementById("dersSecimEkrani");
// Giriş ekranının gösterilmesi için gerekli olan fonksiyon
function girisEkrani() {
  if (document.getElementById("form")) {
    form.style.display = "block";
  } else {
    console.log("form DOM'da yok");
  }

  if (document.getElementById("bilgi")) {
    bilgiDOM.style.display = "none";
  } else {
    console.log("bilgiDOM DOM'da yok");
  }

  if (document.getElementById("dersSecimEkrani")) {
    dersSecimEkraniDOM.style.display = "none";
  } else {
    console.log("dersSecimEkrani DOM'da yok");
  }
}
// Ders seçim ekranının gösterilmesi için gerekli fonksiyon
function dersSecimEkrani() {
  if (document.getElementById("dersSecimEkrani")) {
    dersSecimEkraniDOM.style.display = "block";
  } else {
    console.log("form DOM'da yok");
  }

  if (document.getElementById("bilgi")) {
    bilgiDOM.style.display = "none";
  } else {
    console.log("bilgiDOM DOM'da yok");
  }

  if (document.getElementById("form")) {
    form.style.display = "none";
  } else {
    console.log("dersSecimEkrani DOM'da yok");
  }
}
// Öğrenci bilgi ekranının gösterilmesi için gerekli olan fonksiyon
function bilgiEkrani() {
  if (document.getElementById("dersSecimEkrani")) {
    dersSecimEkraniDOM.style.display = "none";
  } else {
    console.log("form DOM'da yok");
  }

  if (document.getElementById("bilgi")) {
    bilgiDOM.style.display = "block";
  } else {
    console.log("bilgiDOM DOM'da yok");
  }

  if (document.getElementById("form")) {
    form.style.display = "none";
  } else {
    console.log("dersSecimEkrani DOM'da yok");
  }
}
function navUpdate() {
  if (!aktif) {
    document.getElementById("dersSecimEkraniA").style.display = "none";
    document.getElementById("bilgiEkraniA").style.display = "none";
    document.getElementById("cikisyap").style.display = "none";
  } else {
    document.getElementById("dersSecimEkraniA").style.display = "block";
    document.getElementById("bilgiEkraniA").style.display = "block";
    document.getElementById("cikisyap").style.display = "block";
  }
}

function cikisYap() {
  aktif = null;
  navUpdate();
  girisEkrani();
}