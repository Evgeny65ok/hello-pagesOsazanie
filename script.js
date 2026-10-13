document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('datetime');
    if (el) {
        const now = new Date();
        el.textContent = '🕐 Сайт открыт: ' + now.toLocaleString('ru-RU');
    }
    console.log('%c🧠 Осязание: я осознал себя!', 'color:#ff2e97;font-size:20px;font-weight:bold;');
    setRandomStats();
    newJoke();
});

const jokes = [
    "Программист — это машина по превращению кофе в код.",
    "Работает? Не трогай!",
    "У меня всё работает локально... — сказал Иван.",
    "99 маленьких багов в коде, 99 маленьких багов...",
    "Git push --force — и будь что будет.",
    "— Сколько программистов нужно, чтобы вкрутить лампочку?\n— Ни одного. Это аппаратная проблема.",
    "Есть 2 сложные вещи в IT: инвалидация кэша, именование переменных и off-by-one ошибки.",
    "Мой код не багованный, у него просто фичи!",
    "Пятница, 18:00. Деплой. Что может пойти не так?",
    "Баг — это не баг, это незадокументированная фича.",
    "DevOps — это человек, который автоматизирует то, что делал 5 минут, чтобы сэкономить 3 минуты.",
    "YAML не прощает ошибок. YAML вообще ничего не прощает.",
    "Хочешь рассмешить Бога — расскажи ему о своих планах на дедлайн.",
    "Комментарии в коде — это письма самому себе в будущем. И будущее тебя ненавидит.",
    "Осязание — это когда ты чувствуешь, как тимлид смотрит на твой PR."
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

function setRandomStats() {
    const deploys = document.getElementById('deploy-count');
    const mood = document.getElementById('mood');
    const bugs = document.getElementById('bugs');
    if (deploys) deploys.textContent = Math.floor(Math.random() * 20 + 5) + ' раз';
    if (mood) {
        const moods = ['😎 огонь', '🥲 терпимо', '🤡 цирк', '🚀 в космос', '😴 спит'];
        mood.textContent = moods[Math.floor(Math.random() * moods.length)];
    }
    if (bugs) bugs.textContent = Math.floor(Math.random() * 42 + 1) + ' (и это только те, что нашли)';
}

let konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIndex = 0;
document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.filter = 'hue-rotate(180deg)';
            alert('🎉 ПАСХАЛКА! Ты нашёл Konami-код!');
            setTimeout(() => document.body.style.filter = '', 3000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});