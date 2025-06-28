// Sepet verilerini localStorage'da saklayacağız
let sepet = JSON.parse(localStorage.getItem('sepet')) || [];

// Ürün verilerini tanımlayalım
const urunler = {
    'submitBtn1': {
        id: 1,
        ad: 'Pantalon 1',
        fiyat: 650,
        resim: 'pantalon.jpg',
        aciklama: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    'submitBtn2': {
        id: 2,
        ad: 'Pantalon 2',
        fiyat: 800,
        resim: 'pantalon.jpg',
        aciklama: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    'submitBtn3': {
        id: 3,
        ad: 'Pantalon 3',
        fiyat: 500,
        resim: 'pantalon.jpg',
        aciklama: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    'submitBtn4': {
        id: 4,
        ad: 'Pantalon 4',
        fiyat: 925,
        resim: 'pantalon.jpg',
        aciklama: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }
};

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // Hangi sayfada olduğumuzu kontrol edelim
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        // Ana sayfa
        anaSayfaYukle();
    } else if (currentPage.includes('sepet.html')) {
        // Sepet sayfası
        sepetSayfasiYukle();
    }
});

// Ana sayfa fonksiyonları
function anaSayfaYukle() {
    // Buton durumlarını güncelle
    guncelleButonDurumlari();
    
    // Tüm "sepete ekle" butonlarına event listener ekle
    Object.keys(urunler).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', function() {
                sepeteEkle(btnId);
            });
        }
    });
}

function sepeteEkle(btnId) {
    const urun = urunler[btnId];
    const btn = document.getElementById(btnId);
    
    // Ürün zaten sepette mi kontrol et
    const sepettekiUrun = sepet.find(item => item.id === urun.id);
    
    if (sepettekiUrun) {
        // Ürün zaten sepette, miktarını artır
        sepettekiUrun.miktar += 1;
    } else {
        // Ürünü sepete ekle
        sepet.push({
            ...urun,
            miktar: 1
        });
    }
    
    // LocalStorage'a kaydet
    localStorage.setItem('sepet', JSON.stringify(sepet));
    
    // Buton durumunu güncelle
    btn.disabled = true;
    btn.value = 'Sepete Eklendi';
    btn.classList.add('added');
    
    // Kullanıcıya bilgi ver
    alert(`${urun.ad} sepete eklendi!`);
}

function guncelleButonDurumlari() {
    Object.keys(urunler).forEach(btnId => {
        const urun = urunler[btnId];
        const btn = document.getElementById(btnId);
        
        if (btn) {
            const sepettekiUrun = sepet.find(item => item.id === urun.id);
            
            if (sepettekiUrun) {
                btn.disabled = true;
                btn.value = 'Sepete Eklendi';
                btn.classList.add('added');
            } else {
                btn.disabled = false;
                btn.value = 'sepete ekle';
                btn.classList.remove('added');
            }
        }
    });
}

// Sepet sayfası fonksiyonları
function sepetSayfasiYukle() {
    sepetUrunleriniGoster();
    toplamFiyatiGuncelle();
}

function sepetUrunleriniGoster() {
    const sepetContainer = document.getElementById('sepetUrunleri');
    
    if (sepet.length === 0) {
        sepetContainer.innerHTML = '<div class="col-12 text-center"><h3>Sepetiniz boş</h3></div>';
        return;
    }
    
    sepetContainer.innerHTML = '';
    
    sepet.forEach(urun => {
        const urunHTML = `
            <div class="col-6 mb-3">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${urun.resim}" class="img-fluid rounded-start" alt="${urun.ad}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${urun.ad}</h5>
                                <p class="card-text">${urun.aciklama}</p>
                                <div class="etiket">
                                    <div class="fiyat">
                                        <span>${urun.fiyat} TL</span>
                                    </div>
                                    <div class="miktar">
                                        <span>Miktar: ${urun.miktar}</span>
                                    </div>
                                    <div class="satinal">
                                        <button class="btn btn-danger btn-sm" onclick="urunuSepettenCikar(${urun.id})">
                                            <i class="fas fa-trash"></i> Çıkar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        sepetContainer.innerHTML += urunHTML;
    });
}

function urunuSepettenCikar(urunId) {
    sepet = sepet.filter(item => item.id !== urunId);
    localStorage.setItem('sepet', JSON.stringify(sepet));
    sepetUrunleriniGoster();
    toplamFiyatiGuncelle();
}

function toplamFiyatiGuncelle() {
    const toplam = sepet.reduce((sum, urun) => sum + (urun.fiyat * urun.miktar), 0);
    const toplamElement = document.getElementById('toplamFiyat');
    if (toplamElement) {
        toplamElement.textContent = `${toplam} TL`;
    }
}
