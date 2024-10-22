document.addEventListener("DOMContentLoaded", function() {
    // Sayfa tamamen yüklendiğinde 'loading' sınıfını kaldırıyoruz
    window.onload = function() {
        document.body.classList.remove('loading');
        document.getElementById('loading-screen').style.display = 'none'; // Yükleme ekranını gizle
    };
});
