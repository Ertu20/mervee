document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.quote-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // İlk slide'ı göster
    showSlide(currentSlide);

    // Her 3 saniyede bir sonraki slide'a geç
    setInterval(nextSlide, 3000);
});
