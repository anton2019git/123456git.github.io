// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Закриття меню при кліку на посилання
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
}

// Модальні вікна
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const exploreBtn = document.getElementById('exploreBtn');
const registerModal = document.getElementById('registerModal');
const loginModal = document.getElementById('loginModal');
const exploreModal = document.getElementById('exploreModal');
const closeBtns = document.querySelectorAll('.close');

// Відкриття модальних вікон
if (registerBtn && registerModal) {
    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'block';
    });
}

if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
}

if (exploreBtn && exploreModal) {
    exploreBtn.addEventListener('click', () => {
        exploreModal.style.display = 'block';
    });
}

// Закриття модальних вікон
if (closeBtns) {
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
}

// Закриття при кліку поза модального вікна
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Валідація та обробка форм
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePassword = (password) => {
    return password.length >= 6;
};

// Обробка форми реєстрації
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        if (!validateEmail(email)) {
            alert('Будь ласка, введіть коректний email!');
            return;
        }

        if (!validatePassword(password)) {
            alert('Пароль повинен містити щонайменше 6 символів!');
            return;
        }

        alert(`Реєстрація успішна, ${name}!`);
        registerForm.reset();
        registerModal.style.display = 'none';
    });
}

// Обробка форми входу
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (!validateEmail(email)) {
            alert('Будь ласка, введіть коректний email!');
            return;
        }

        if (!validatePassword(password)) {
            alert('Пароль повинен містити щонайменше 6 символів!');
            return;
        }

        alert('Вхід успішний!');
        loginForm.reset();
        loginModal.style.display = 'none';
    });
}

// Обробка контактної форми
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (!validateEmail(email)) {
            alert('Будь ласка, введіть коректний email!');
            return;
        }

        if (message.length < 10) {
            alert('Повідомлення повинно містити щонайменше 10 символів!');
            return;
        }

        alert(`Повідомлення відправлено, ${name}!`);
        contactForm.reset();
    });
}

// Обробка ссылок "Читать больше"
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const placeId = link.getAttribute('href').substring(1);
        alert(`Докладна інформація про ${placeId} буде доступна незабаром!`);
        // Здесь можно реализовать модальное окно или переход на страницу с деталями
    });
});

// Плавна прокрутка для всіх посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
