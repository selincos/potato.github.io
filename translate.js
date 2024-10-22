const translations = {
    en: {
        // Genel metinler
        title: "Detox and Diet",
        "home-link": "Home",
        "diet-plans-link": "Diet Plans",
        "recipes-link": "Recipes",
        "useful-tips-link": "Useful Tips",
        "contact-link": "Contact",
        "footer-text": "&copy; 2024 Detox and Diet. All rights reserved.",
        
        // Ana Sayfa
        "hero-heading": "Your Guide to a Healthy Lifestyle",
        "hero-text": "Start your health journey with our weekly diet plans and detox guides!",
        "discover-btn": "Discover Diet Plans",
        "feature-1-title": "Weekly Diet Plans",
        "feature-1-text": "Customized diet plans for your goals.",
        "feature-2-title": "Healthy Recipes",
        "feature-2-text": "Delicious and nutritious recipes to try.",
        "feature-3-title": "Detox Programs",
        "feature-3-text": "Cleanse your body with our detox guides.",

        // Diet Plans Sayfası
        "diet-plan-heading": "Weekly Diet Plans",
        "diet-plan-text": "Choose from our selection of tailored diet plans to suit your goals.",
        "view-plan-btn": "View Plan",

        // Recipes Sayfası
        "recipes-heading": "Healthy Recipes",
        "recipes-intro": "Discover a variety of delicious and nutritious recipes to support your health journey.",
    },
    tr: {
        // Genel metinler
        title: "Detoks ve Diyet",
        "home-link": "Ana Sayfa",
        "diet-plans-link": "Diyet Programları",
        "recipes-link": "Tarifler",
        "useful-tips-link": "Faydalı Bilgiler",
        "contact-link": "İletişim",
        "footer-text": "&copy; 2024 Detoks ve Diyet. Tüm hakları saklıdır.",

        // Ana Sayfa
        "hero-heading": "Sağlıklı Yaşam Rehberiniz",
        "hero-text": "Haftalık diyet planlarımız ve detoks rehberlerimizle sağlıklı yaşam yolculuğunuza başlayın!",
        "discover-btn": "Diyet Programlarını Keşfet",
        "feature-1-title": "Haftalık Diyet Planları",
        "feature-1-text": "Hedeflerinize uygun kişiselleştirilmiş diyet planları.",
        "feature-2-title": "Sağlıklı Tarifler",
        "feature-2-text": "Lezzetli ve besleyici tarifler.",
        "feature-3-title": "Detoks Programları",
        "feature-3-text": "Vücudunuzu detoks rehberlerimizle arındırın.",

        // Diet Plans Sayfası
        "diet-plan-heading": "Haftalık Diyet Programları",
        "diet-plan-text": "Hedeflerinize uygun kişiselleştirilmiş diyet planlarımızdan birini seçin.",
        "view-plan-btn": "Planı Görüntüle",

        // Recipes Sayfası
        "recipes-heading": "Sağlıklı Tarifler",
        "recipes-intro": "Sağlıklı yaşam yolculuğunuzu destekleyen çeşitli lezzetli ve besleyici tarifleri keşfedin.",
    }
};

function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[id]");
    elementsToTranslate.forEach((element) => {
        const translationKey = element.id;
        element.textContent = translations[language][translationKey];
    });
}

// Sayfa yüklendiğinde varsayılan dili belirleyelim:
document.addEventListener("DOMContentLoaded", () => {
    setLanguage('en'); // Varsayılan dil İngilizce
});
