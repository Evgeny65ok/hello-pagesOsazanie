// 🩸 obsession.js — Полный тренажёр (с твоими 60 текстами и фичами из чек-листа)

// ===== ТЕКСТЫ (ТВОИ 60 ТЕКСТОВ - RU + EN) =====
const TEXTS = {
    ru: {
        short: [
            "Новый фильм Обсессия Никки и Беар выходит в 2026 году.",
            "Никки встречает Беар в маленьком городе поздней осенью.",
            "Их встреча случайна но судьба готовит большое испытание.",
            "Беар скрывает тайну которая может разрушить их любовь.",
            "Никки пытается понять правду и теряет внутренний покой.",
            "Каждый кадр фильма наполнен тревогой и тихой нежностью.",
            "Режиссёр создал атмосферу одержимости страсти и надежды.",
            "Музыка в фильме усиливает чувство потери и ожидания.",
            "Финал картины остаётся открытым и вызывает долгие споры.",
            "Обсессия это история о любви которая становится ловушкой."
        ],
        medium: [
            "Фильм Обсессия Никки и Беар выходит на экраны в 2026 году. Это драматическая история о двух людях, чьи судьбы переплелись случайно, но навсегда. Никки — молодая художница, ищущая вдохновение. Беар — загадочный музыкант с тяжёлым прошлым. Их встреча в маленьком приморском городке меняет всё. Одержимость друг другом растёт с каждым днём.",
            "Сюжет фильма строится вокруг тайны, которую Беар хранит много лет. Никки чувствует, что любимый что-то скрывает, но не решается спросить. Постепенно её одержимость превращается в страх. Режиссёр мастерски показывает, как любовь может стать опасной. Зритель вместе с героиней ищет правду до самого финала. Картина держит напряжение всё время.",
            "Актёрский состав фильма Обсессия Никки и Беар впечатляет. Главные роли исполнили молодые, но уже известные актёры. Их химия на экране делает историю живой и настоящей. Критики уже называют картину одной из самых ожидаемых премьер 2026 года. Операторская работа создаёт атмосферу тумана и тревоги. Каждый кадр выглядит как картина.",
            "Музыка занимает особое место в фильме. Композитор написал партитуру, которая усиливает каждую эмоцию героев. Тихие фортепианные темы сменяются напряжёнными струнными. Зритель буквально чувствует одержимость Никки и боль Беар. Саундтрек уже вышел отдельным альбомом и стал популярным. Многие называют музыку лучшей частью картины.",
            "Главная тема фильма — одержимость. Это не просто любовь, а чувство, которое поглощает человека целиком. Никки теряет себя в отношениях с Беар. Она перестаёт рисовать, видеться с друзьями, думать о будущем. Беар тоже одержим, но своей тайной. Фильм задаёт вопрос: где грань между любовью и болезнью? Ответ каждый находит сам.",
            "Место действия фильма — небольшой городок на берегу холодного моря. Туман, дождь, старые дома создают особую атмосферу. Никки приехала сюда, чтобы начать новую жизнь. Беар живёт здесь много лет и знает каждый камень. Именно здесь их одержимость друг другом расцветает. Город становится ещё одним героем фильма.",
            "Финал фильма Обсессия Никки и Беар вызвал много споров. Одни считают его открытым, другие — трагическим. Никки остаётся одна на пустом берегу. Беар исчезает, оставив только письмо. Что в этом письме — неизвестно. Режиссёр намеренно не даёт ответов. Зритель уходит из зала с вопросом и тревогой.",
            "Премьера фильма состоялась на крупном международном фестивале. Зал аплодировал стоя несколько минут. Критики отметили сильную игру главных актёров. Особенно хвалили сцены молчания, где эмоции передаются взглядом. Фильм уже получил несколько наград. Многие предсказывают ему успех на церемонии Оскар. Это действительно большое кино.",
            "Обсессия Никки и Беар — это не просто мелодрама. Это психологическая драма о зависимости от другого человека. Никки и Беар не могут жить друг без друга. Но их чувство разрушает обоих. Фильм показывает, как красивая история любви превращается в кошмар. Это предупреждение всем, кто путает страсть с одержимостью. Очень сильное кино.",
            "Многие зрители узнают себя в героях фильма. Кто-то вспоминает свою первую любовь. Кто-то — болезненные отношения, из которых трудно выйти. Именно поэтому картина так трогает сердца. Обсессия — универсальная тема, знакомая каждому. Режиссёр говорит об этом честно и без прикрас. Фильм остаётся в памяти надолго."
        ],
        long: [
            "Фильм Обсессия Никки и Беар выходит в прокат в 2026 году и уже сейчас считается одной из главных премьер года. Это история о двух молодых людях, чьи жизни меняются после случайной встречи в маленьком приморском городке. Никки — талантливая художница, которая приехала сюда, чтобы найти вдохновение и убежать от прошлого. Беар — загадочный музыкант, который играет по вечерам в местном баре и почти ни с кем не общается. Их первая встреча происходит в дождливый вечер. Никки заходит в бар, чтобы переждать ливень, и слышит музыку, которая её поражает. Так начинается их история, полная страсти, тайн и одержимости. Фильм снят в жанре психологической драмы и исследует тонкую грань между любовью и зависимостью.",
            "Главная героиня фильма Никки — сложный и противоречивый персонаж. С одной стороны, она сильная и независимая женщина, которая привыкла добиваться своего. С другой — она одинока и уязвима, ищет человека, который поймёт её без слов. Когда она встречает Беар, её мир переворачивается. Впервые за долгое время она чувствует, что её понимают. Но постепенно это чувство перерастает в одержимость. Никки начинает следить за Беар, проверять его телефон, задавать слишком много вопросов. Она теряет контроль над собой и своими эмоциями. Её друзья замечают перемены, но она не слушает их.",
            "Беар — не менее загадочный герой фильма. Он молод, красив и талантлив, но в его глазах постоянная печаль. Он играет на пианино в маленьком баре и почти не разговаривает с посетителями. Никто в городе не знает, откуда он приехал и что скрывает. Зритель постепенно узнаёт, что в прошлом Беар пережил страшную трагедию. Он потерял близкого человека и с тех пор боится привязываться к кому-либо. Его одержимость прошлым не даёт ему жить настоящим.",
            "Визуальный стиль фильма Обсессия Никки и Беар заслуживает отдельного разговора. Оператор использовал холодные тона — синий, серый, зелёный — чтобы передать атмосферу тревоги. Дождь идёт почти в каждой сцене, создавая ощущение тоски и безысходности. Камера часто следует за героями со спины, будто зритель тоже наблюдает за ними, как одержимый. Крупные планы лиц показывают каждую эмоцию, каждую тень сомнения.",
            "Музыка в фильме играет ключевую роль и стала отдельным персонажем истории. Композитор создал партитуру, которая сочетает фортепиано, струнные и электронные звуки. Основная тема фильма — простая мелодия, которая повторяется в разных вариациях на протяжении всей картины. В сценах любви она звучит нежно и тепло. В сценах одержимости — тревожно и диссонирующе. Беар играет эту мелодию в баре, и именно она становится символом их отношений.",
            "Тема одержимости в фильме раскрывается через множество деталей. Это не только отношения Никки и Беар, но и их отношение к прошлому, к работе, к самим себе. Никки одержима желанием понять Беар. Беар одержим своей тайной и чувством вины. Второстепенные персонажи тоже страдают от своих одержимостей. Подруга Никки одержима карьерой и не замечает, как теряет семью. Фильм показывает, что одержимость — универсальное человеческое состояние.",
            "Критики приняли фильм Обсессия Никки и Беар неоднозначно. Одни назвали его шедевром психологической драмы, другие — слишком медленным и мрачным. Все сошлись в одном: игра главных актёров великолепна. Молодая актриса, исполнившая роль Никки, показала невероятный диапазон эмоций. Её партнёр, играющий Беар, создал образ человека, разрываемого внутренними противоречиями. Некоторые сцены вошли в учебники актёрского мастерства.",
            "Финал фильма стал предметом жарких споров среди зрителей. Никки остаётся одна на пустом берегу, глядя в холодное море. Беар уехал, оставив ей письмо, содержание которого зритель не слышит. Одни считают, что он признаётся в любви и обещает вернуться. Другие уверены, что он прощается навсегда. Третьи видят в этом символ того, что одержимость не имеет конца. Режиссёр в интервью сказал, что специально не дал ответа.",
            "Обсессия Никки и Беар — это фильм о современной любви и её тёмной стороне. В эпоху социальных сетей одержимость стала нормой. Мы следим за жизнью других, сравниваем себя с ними, хотим быть ближе, чем возможно. Фильм показывает, к чему это может привести. Никки и Беар — не злодеи, а жертвы собственных чувств. Их история трогает, потому что она знакома каждому. Кто из нас не терял себя в отношениях?",
            "В заключение стоит сказать, что Обсессия Никки и Беар — важное событие в современном кино. Фильм поднимает сложные темы, не боится быть медленным и тихим. Он требует от зрителя внимания и готовности думать. Актёрская игра, режиссура, операторская работа, музыка — всё на высшем уровне. Картина уже вошла в историю как одна из самых обсуждаемых премьер 2026 года. Она получила награды, собрала кассу и нашла свою аудиторию."
        ]
    },
    en: {
        short: [
            "The new film Obsession Nikki and Bear comes out in 2026.",
            "Nikki meets Bear in a small town in late autumn.",
            "Their meeting is random but fate prepares a great trial.",
            "Bear hides a secret that could destroy their love.",
            "Nikki tries to understand the truth and loses her peace.",
            "Every frame of the film is filled with anxiety and quiet tenderness.",
            "The director created an atmosphere of obsession passion and hope.",
            "The music in the film enhances the feeling of loss and waiting.",
            "The film ending remains open and causes long debates.",
            "Obsession is a story about love that becomes a trap."
        ],
        medium: [
            "The film Obsession Nikki and Bear comes to screens in 2026. It is a dramatic story about two people whose fates intertwined by chance, but forever. Nikki is a young artist seeking inspiration. Bear is a mysterious musician with a heavy past. Their meeting in a small seaside town changes everything. Obsession with each other grows every day.",
            "The plot of the film is built around a secret that Bear has kept for many years. Nikki feels that her beloved is hiding something, but does not dare to ask. Gradually her obsession turns into fear. The director masterfully shows how love can become dangerous. The viewer searches for the truth along with the heroine until the very end.",
            "The cast of Obsession Nikki and Bear is impressive. The main roles were played by young but already famous actors. Their chemistry on screen makes the story alive and real. Critics already call the picture one of the most anticipated premieres of 2026. The cinematography creates an atmosphere of fog and anxiety. Every frame looks like a painting.",
            "Music occupies a special place in the film. The composer wrote a score that enhances every emotion of the characters. Quiet piano themes are replaced by tense strings. The viewer literally feels Nikki obsession and Bear pain. The soundtrack has already been released as a separate album and has become popular.",
            "The main theme of the film is obsession. It is not just love, but a feeling that consumes a person entirely. Nikki loses herself in her relationship with Bear. She stops painting, seeing friends, thinking about the future. Bear is also obsessed, but with his secret. The film asks where is the line between love and illness.",
            "The setting of the film is a small town on the shore of a cold sea. Fog, rain, old houses create a special atmosphere. Nikki came here to start a new life. Bear has lived here for many years and knows every stone. It is here that their obsession with each other blossoms. The town becomes another character of the film.",
            "The ending of Obsession Nikki and Bear caused much debate. Some consider it open, others tragic. Nikki is left alone on an empty shore. Bear disappears, leaving only a letter. What is in this letter is unknown. The director intentionally gives no answers. The viewer leaves the hall with a question and anxiety.",
            "The premiere of the film took place at a major international festival. The hall applauded standing for several minutes. Critics noted the strong performance of the main actors. The scenes of silence, where emotions are conveyed by a glance, were especially praised. The film has already received several awards. Many predict success at the Oscars.",
            "Obsession Nikki and Bear is not just a melodrama. It is a psychological drama about dependence on another person. Nikki and Bear cannot live without each other. But their feeling destroys both. The film shows how a beautiful love story turns into a nightmare. This is a warning to everyone who confuses passion with obsession.",
            "Many viewers recognize themselves in the characters of the film. Someone remembers their first love. Someone remembers painful relationships that are hard to leave. That is why the picture touches hearts so much. Obsession is a universal theme familiar to everyone. The director speaks about it honestly and without embellishment."
        ],
        long: [
            "The film Obsession Nikki and Bear comes to theaters in 2026 and is already considered one of the main premieres of the year. This is a story about two young people whose lives change after a chance meeting in a small seaside town. Nikki is a talented artist who came here to find inspiration and escape from the past. Bear is a mysterious musician who plays in the evenings at a local bar and hardly talks to anyone. Their first meeting happens on a rainy evening. Nikki enters the bar to wait out the downpour and hears music that amazes her. Thus begins their story, full of passion, secrets and obsession.",
            "The main heroine of the film Nikki is a complex and contradictory character. On one hand, she is a strong and independent woman who is used to getting her way. On the other, she is lonely and vulnerable, looking for a person who will understand her without words. When she meets Bear, her world turns upside down. For the first time in a long while she feels understood. But gradually this feeling grows into obsession. Nikki starts following Bear, checking his phone, asking too many questions. She loses control over herself and her emotions.",
            "Bear is an equally mysterious character of the film. He is young, handsome and talented, but there is constant sadness in his eyes. He plays piano in a small bar and hardly talks to visitors. No one in town knows where he came from or what he hides. The viewer gradually learns that in the past Bear experienced a terrible tragedy. He lost a loved one and since then is afraid to get attached to anyone. His obsession with the past does not let him live in the present.",
            "The visual style of Obsession Nikki and Bear deserves a separate discussion. The cinematographer used cold tones blue gray green to convey the atmosphere of anxiety. Rain falls in almost every scene, creating a feeling of longing and hopelessness. The camera often follows the characters from behind, as if the viewer is also watching them like an obsessed person. Close ups of faces show every emotion every shadow of doubt.",
            "The music in the film plays a key role and has become a separate character of the story. The composer created a score that combines piano strings and electronic sounds. The main theme of the film is a simple melody that repeats in different variations throughout the picture. In scenes of love it sounds tender and warm. In scenes of obsession it sounds anxious and dissonant. Bear plays this melody in the bar and it becomes a symbol of their relationship.",
            "The theme of obsession in the film is revealed through many details. It is not only the relationship of Nikki and Bear, but also their attitude to the past to work to themselves. Nikki is obsessed with the desire to understand Bear. Bear is obsessed with his secret and guilt. Secondary characters also suffer from their obsessions. The film shows that obsession is a universal human condition. It can be destructive but it can also become a driving force.",
            "Critics received the film Obsession Nikki and Bear ambiguously. Some called it a masterpiece of psychological drama others too slow and gloomy. All agreed on one thing the performance of the main actors is magnificent. The young actress who played Nikki showed an incredible range of emotions. Her partner playing Bear created the image of a man torn by inner contradictions. Some scenes have entered textbooks of acting.",
            "The ending of the film became the subject of heated debate among viewers. Nikki is left alone on an empty shore looking at the cold sea. Bear has left leaving her a letter whose contents the viewer does not hear. Some believe that he confesses his love and promises to return. Others are sure that he says goodbye forever. Still others see in this a symbol that obsession has no end. The director said he intentionally gave no answer.",
            "Obsession Nikki and Bear is a film about modern love and its dark side. In the era of social networks obsession has become the norm. We follow the lives of others compare ourselves with them want to be closer than possible. The film shows what this can lead to. Nikki and Bear are not villains but victims of their own feelings. Their story touches because it is familiar to everyone. Who among us has not lost themselves in a relationship.",
            "In conclusion it is worth saying that Obsession Nikki and Bear is an important event in modern cinema. The film raises complex themes is not afraid to be slow and quiet. It requires attention and a willingness to think from the viewer. Acting direction cinematography music everything is at the highest level. The picture has already entered history as one of the most discussed premieres of 2026."
        ]
    }
};

// ===== СОСТОЯНИЕ =====
let currentText = "";
let chars = [];
let currentIndex = 0;
let correctCount = 0;
let totalTyped = 0;
let errorCount = 0;
let startTime = null;
let timerInterval = null;
let isActive = false;
let soundEnabled = true;
let audioCtx = null;

// ===== ЗВУК =====
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playClickSound(isError = false) {
    if (!soundEnabled || !audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (isError) {
        osc.frequency.value = 150;
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    } else {
        osc.frequency.value = 800 + Math.random() * 200;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    }
    
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    initTrainer();
    initFloatingFx();
    loadBestScore();
    setupHotkeys();
});

function initTrainer() {
    const newBtn = document.getElementById('new-text');
    const langSel = document.getElementById('lang-select');
    const lenSel = document.getElementById('len-select');

    if (!newBtn) return;

    newBtn.addEventListener('click', () => {
        pickRandomText(langSel.value, lenSel.value);
    });

    langSel.addEventListener('change', () => pickRandomText(langSel.value, lenSel.value));
    lenSel.addEventListener('change', () => pickRandomText(langSel.value, lenSel.value));

    document.getElementById('btn-close').addEventListener('click', () => {
        document.getElementById('result-modal').classList.remove('active');
        pickRandomText(langSel.value, lenSel.value);
    });

    document.getElementById('btn-screenshot').addEventListener('click', takeScreenshot);

    // Кастомный текст
    document.getElementById('btn-custom').addEventListener('click', () => {
        const custom = prompt("Вставь свой текст для тренировки:");
        if (custom && custom.trim().length > 0) {
            currentText = custom.trim();
            chars = currentText.split('');
            resetState();
            renderText();
            document.body.classList.remove('typing-focus');
        }
    });

    // Звук
    document.getElementById('btn-sound').addEventListener('click', (e) => {
        soundEnabled = !soundEnabled;
        e.target.textContent = soundEnabled ? '🔊' : '🔇';
    });

    // Reset
    document.getElementById('btn-reset').addEventListener('click', () => {
        pickRandomText(langSel.value, lenSel.value);
    });

    document.addEventListener('keydown', handleKeyDown);
    pickRandomText('ru', 'short');
}

function setupHotkeys() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const langSel = document.getElementById('lang-select');
            const lenSel = document.getElementById('len-select');
            pickRandomText(langSel.value, lenSel.value);
        }
    });
}

function pickRandomText(lang, len) {
    const pool = TEXTS[lang]?.[len] || TEXTS.ru.short;
    currentText = pool[Math.floor(Math.random() * pool.length)];
    chars = currentText.split('');
    resetState();
    renderText();
    document.body.classList.remove('typing-focus');
}

function resetState() {
    currentIndex = 0;
    correctCount = 0;
    totalTyped = 0;
    errorCount = 0;
    isActive = false;
    startTime = null;
    if (timerInterval) clearInterval(timerInterval);
    
    document.getElementById('timer').textContent = '0';
    document.getElementById('wpm').textContent = '0';
    document.getElementById('accuracy').textContent = '100';
}

function renderText() {
    const box = document.getElementById('target-text');
    let html = '';
    for (let i = 0; i < chars.length; i++) {
        let cls = 'char';
        if (chars[i] === ' ') cls += ' space';
        
        if (i < currentIndex) {
            cls += ' correct';
        } else if (i === currentIndex) {
            cls += ' current';
        }
        
        const ch = chars[i] === ' ' ? '&nbsp;' : chars[i].replace(/&/g, '&amp;').replace(/</g, '&lt;');
        html += `<span class="${cls}" id="char-${i}">${ch}</span>`;
    }
    box.innerHTML = html;
}

function handleKeyDown(e) {
    if (['Shift', 'Control', 'Alt', 'Meta', 'Tab', 'CapsLock'].includes(e.key)) return;
    if (document.getElementById('result-modal').classList.contains('active')) return;
    if (chars.length === 0) return;

    if (!audioCtx) initAudio();

    if (!isActive && e.key.length === 1) {
        isActive = true;
        startTime = Date.now();
        document.body.classList.add('typing-focus');
        timerInterval = setInterval(updateTimer, 200);
    }

    const expectedChar = chars[currentIndex];

    // Backspace
    if (e.key === 'Backspace') {
        if (currentIndex > 0) {
            currentIndex--;
            const span = document.getElementById(`char-${currentIndex}`);
            if (span) {
                span.className = 'char current' + (chars[currentIndex] === ' ' ? ' space' : '');
            }
            renderText();
        }
        return;
    }

    // Enter
    if (e.key === 'Enter') {
        const langSel = document.getElementById('lang-select');
        const lenSel = document.getElementById('len-select');
        pickRandomText(langSel.value, lenSel.value);
        return;
    }

    // Символ
    if (e.key.length === 1) {
        totalTyped++;
        
        if (e.key === expectedChar) {
            correctCount++;
            playClickSound(false);
            const span = document.getElementById(`char-${currentIndex}`);
            if (span) {
                span.classList.remove('current');
                span.classList.add('correct');
            }
            currentIndex++;
            
            if (currentIndex >= chars.length) {
                finishTyping();
                return;
            }
            
            const nextSpan = document.getElementById(`char-${currentIndex}`);
            if (nextSpan) {
                nextSpan.classList.add('current');
                nextSpan.scrollIntoView({ block: 'nearest' });
            }
        } else {
            errorCount++;
            playClickSound(true);
            const span = document.getElementById(`char-${currentIndex}`);
            if (span) {
                span.classList.add('wrong');
                setTimeout(() => span.classList.remove('wrong'), 200);
            }
        }
        
        const acc = totalTyped ? Math.round((correctCount / totalTyped) * 100) : 100;
        document.getElementById('accuracy').textContent = acc;
    }
}

function updateTimer() {
    if (!startTime) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = elapsed;
    
    const minutes = elapsed / 60;
    if (minutes > 0.05) {
        const wpm = Math.round((correctCount / 5) / minutes);
        document.getElementById('wpm').textContent = wpm;
    }
}

function finishTyping() {
    if (timerInterval) clearInterval(timerInterval);
    isActive = false;
    
    const elapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    const minutes = elapsed / 60;
    const wpm = minutes > 0.01 ? Math.round((correctCount / 5) / minutes) : 0;
    const accuracy = totalTyped ? Math.round((correctCount / totalTyped) * 100) : 0;

    document.getElementById('r-wpm').textContent = wpm;
    document.getElementById('r-accuracy').textContent = accuracy;
    document.getElementById('r-time').textContent = elapsed;
    document.getElementById('r-chars').textContent = chars.length;

    saveBestScore(wpm, accuracy);

    const jokes = [
        "🩸 Никки печатает быстрее, чем Беар убегает от прошлого.",
        "🩸 Ты напечатал это? Беар впечатлён. Никки — нет.",
        "🩸 Скорость как у Никки в погоне за правдой. Правда была быстрее."
    ];
    document.getElementById('result-joke').textContent = jokes[Math.floor(Math.random() * jokes.length)];

    const imgEl = document.getElementById('result-photo-img');
    if (imgEl && typeof RESULT_IMAGES !== 'undefined' && RESULT_IMAGES.length > 0) {
        imgEl.src = RESULT_IMAGES[Math.floor(Math.random() * RESULT_IMAGES.length)];
    }

    setTimeout(() => {
        document.getElementById('result-modal').classList.add('active');
        document.body.classList.remove('typing-focus');
    }, 300);
}

// ===== LOCAL STORAGE =====
function saveBestScore(wpm, accuracy) {
    const best = JSON.parse(localStorage.getItem('obsession_best') || '{"wpm":0,"accuracy":0}');
    if (wpm > best.wpm) {
        best.wpm = wpm;
        best.accuracy = accuracy;
        localStorage.setItem('obsession_best', JSON.stringify(best));
    }
}

function loadBestScore() {
    const best = JSON.parse(localStorage.getItem('obsession_best') || '{"wpm":0,"accuracy":0}');
    const el = document.getElementById('best-score');
    if (el) {
        el.textContent = best.wpm > 0 ? `🏆 Лучший WPM: ${best.wpm} (${best.accuracy}%)` : '🏆 Рекордов пока нет';
    }
}

// ===== СКРИНШОТ =====
async function takeScreenshot() {
    const card = document.getElementById('result-card');
    const btn = document.getElementById('btn-screenshot');
    if (!card || !btn) return;
    
    const oldText = btn.textContent;
    btn.textContent = '⏳ Копирую...';
    btn.disabled = true;

    try {
        const canvas = await html2canvas(card, {
            backgroundColor: '#1a0000',
            scale: window.devicePixelRatio * 2,
            useCORS: true,
            allowTaint: true,
            logging: false
        });

        canvas.toBlob(async (blob) => {
            if (!blob) throw new Error("No blob");
            try {
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                showToast('✅ Скопировано!');
            } catch (e) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'obsession-result.png';
                a.click();
                URL.revokeObjectURL(url);
                showToast('💾 Скачано!');
            }
            btn.textContent = '✅ Готово!';
            setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 2000);
        }, 'image/png');
    } catch (err) {
        showToast('❌ Ошибка');
        btn.textContent = oldText;
        btn.disabled = false;
    }
}

function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `position:fixed; top:30px; left:50%; transform:translateX(-50%) translateY(-100px); background:#c1121f; color:white; padding:14px 26px; border-radius:8px; font-weight:bold; z-index:99999; transition:transform 0.3s;`;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.style.transform = 'translateX(-50%) translateY(0)');
    setTimeout(() => {
        t.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => t.remove(), 400);
    }, 2500);
}

// ===== ФОН =====
function initFloatingFx() {
    const bubbles = document.getElementById('blood-bubbles');
    if (bubbles) {
        for (let i = 0; i < 22; i++) {
            const b = document.createElement('div');
            b.className = 'blood-bubble';
            const size = 15 + Math.random() * 45;
            b.style.width = size + 'px';
            b.style.height = size + 'px';
            b.style.left = Math.random() * 100 + 'vw';
            b.style.animationDuration = (14 + Math.random() * 16) + 's';
            b.style.animationDelay = (-Math.random() * 20) + 's';
            bubbles.appendChild(b);
        }
    }
}