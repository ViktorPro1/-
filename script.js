// Темна/світла тема
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Світла тема';
    } else {
        themeToggle.textContent = 'Темна тема';
    }
});

// Простий скрол аніматор для секцій
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Показати вікно лише раз на місяць
function shouldShowPopup() {
    const lastShown = localStorage.getItem('donationLastShown');
    if (!lastShown) return true;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    return Date.now() - parseInt(lastShown) > oneMonth;
}

// Закрити вікно
function closeDonationPopup() {
    document.getElementById('donation-popup').style.display = 'none';
    localStorage.setItem('donationLastShown', Date.now());
}

// Через 2 хв показати (якщо можна)
setTimeout(() => {
    if (shouldShowPopup()) {
        document.getElementById('donation-popup').style.display = 'flex';
    }
}, 2 * 60 * 1000); // 2 хвилини

