// 🔥 Скрипт Влада — шутки и игра

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🔥 Влад на связи!', 'color:#e63946;font-size:20px;font-weight:bold;');
    newJoke();
    initGame();
});

// ===== Генератор шуток =====
const jokes = [
    "Программист — это человек, который решает проблему, о которой вы не знали, способом, который вы не понимаете.",
    "Мой код работает. Я не знаю почему. Не трогай.",
    "Купил книгу «Как программировать на Java». Теперь у меня 3 книги «Как программировать на Java» и ни одной прочитанной.",
    "Есть 10 типов людей: те, кто понимает двоичную систему, и те, кто нет.",
    "Хороший код — это код, который понятен через 6 месяцев. Плохой — который понятен только сейчас.",
    "— Что делает программист, когда хочет расслабиться?\n— Открывает второй монитор.",
    "Программирование — это как секс: одна ошибка, и ты пишешь документацию ещё 9 месяцев.",
    "Я не ленивый. Я энергоэффективный.",
    "Почему программисты путают Хэллоуин и Рождество? Потому что OCT 31 = DEC 25.",
    "Bug — это просто feature с плохим пиаром.",
    "Тимлид: «Ты справишься к пятнице?» Я: «Да». Пятница: «Ой».",
    "Мой пароль — это название моего первого кота + год рождения мамы. Удачи, хакеры.",
    "Программисты не умирают, они просто выходят из строя.",
    "DevOps: «Работает в продакшене». QA: «Только что упало». DevOps: «Не трогал».",
    "Чем отличается программист от робота? Робот не пьёт кофе. Пока."
];

function newJoke() {
    const el = document.getElementById('joke');
    if (!el) return;
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    el.style.opacity = 0;
    setTimeout(() => {
        el.textContent = random;
        el.style.transition = 'opacity 0.4s';
        el.style.opacity = 1;
    }, 150);
}

// ===== Мини-игра: клик-клик =====
let score = 0;
let timeLeft = 10;
let gameActive = false;
let timer = null;

function initGame() {
    const btn = document.getElementById('game-btn');
    const startBtn = document.getElementById('start-game');
    if (!btn || !startBtn) return;

    btn.addEventListener('click', () => {
        if (!gameActive) return;
        score++;
        document.getElementById('score').textContent = score;
        // Случайная позиция кнопки в её контейнере
        const container = btn.parentElement;
        const maxX = container.clientWidth - btn.clientWidth;
        const maxY = 200;
        btn.style.position = 'relative';
        btn.style.left = Math.random() * maxX + 'px';
        btn.style.top = Math.random() * maxY + 'px';
    });

    startBtn.addEventListener('click', () => {
        if (gameActive) return;
        score = 0;
        timeLeft = 10;
        gameActive = true;
        document.getElementById('score').textContent = '0';
        document.getElementById('time').textContent = '10';
        document.getElementById('game-message').textContent = '🔥 ЖМИ на кнопку со всей силы!';

        timer = setInterval(() => {
            timeLeft--;
            document.getElementById('time').textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                gameActive = false;
                const msgs = [
                    '🥵 Горячо! Твой рекорд: ' + score,
                    '🔥 Неплохо! Твой рекорд: ' + score,
                    '😎 Огонь! Твой рекорд: ' + score,
                    '🌋 Вулкан! Твой рекорд: ' + score
                ];
                document.getElementById('game-message').textContent = msgs[Math.floor(Math.random() * msgs.length)];
            }
        }, 1000);
    });
}