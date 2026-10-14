// 🩸 Обсессия — Тренажёр слепой печати (30 RU + 30 EN = 60 текстов)

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
            "Фильм Обсессия Никки и Беар выходит в прокат в 2026 году и уже сейчас считается одной из главных премьер года. Это история о двух молодых людях, чьи жизни меняются после случайной встречи в маленьком приморском городке. Никки — талантливая художница, которая приехала сюда, чтобы найти вдохновение и убежать от прошлого. Беар — загадочный музыкант, который играет по вечерам в местном баре и почти ни с кем не общается. Их первая встреча происходит в дождливый вечер. Никки заходит в бар, чтобы переждать ливень, и слышит музыку, которая её поражает. Так начинается их история, полная страсти, тайн и одержимости. Фильм снят в жанре психологической драмы и исследует тонкую грань между любовью и зависимостью. Режиссёр использует длинные планы, тишину и естественный свет, чтобы передать внутреннее состояние героев. Картина уже получила награды на нескольких фестивалях.",
            "Главная героиня фильма Никки — сложный и противоречивый персонаж. С одной стороны, она сильная и независимая женщина, которая привыкла добиваться своего. С другой — она одинока и уязвима, ищет человека, который поймёт её без слов. Когда она встречает Беар, её мир переворачивается. Впервые за долгое время она чувствует, что её понимают. Но постепенно это чувство перерастает в одержимость. Никки начинает следить за Беар, проверять его телефон, задавать слишком много вопросов. Она теряет контроль над собой и своими эмоциями. Её друзья замечают перемены, но она не слушает их. Художественная работа, которая раньше приносила ей радость, теперь кажется бессмысленной. Единственное, что имеет значение, — это Беар. Фильм показывает, как одержимость разрушает личность.",
            "Беар — не менее загадочный герой фильма. Он молод, красив и талантлив, но в его глазах постоянная печаль. Он играет на пианино в маленьком баре и почти не разговаривает с посетителями. Никто в городе не знает, откуда он приехал и что скрывает. Зритель постепенно узнаёт, что в прошлом Беар пережил страшную трагедию. Он потерял близкого человека и с тех пор боится привязываться к кому-либо. Его одержимость прошлым не даёт ему жить настоящим. Когда появляется Никки, он сначала пытается держаться на расстоянии. Но её настойчивость и искренность ломают его защиту. Беар влюбляется, но понимает, что не может дать Никки то, что она хочет. Его тайна становится стеной между ними.",
            "Визуальный стиль фильма Обсессия Никки и Беар заслуживает отдельного разговора. Оператор использовал холодные тона — синий, серый, зелёный — чтобы передать атмосферу тревоги. Дождь идёт почти в каждой сцене, создавая ощущение тоски и безысходности. Камера часто следует за героями со спины, будто зритель тоже наблюдает за ними, как одержимый. Крупные планы лиц показывают каждую эмоцию, каждую тень сомнения. Свет в фильме всегда приглушённый, даже в сценах счастья. Это подчёркивает, что радость героев временна. Отдельно стоит отметить сцены у моря: серые волны, холодный ветер, пустой берег. Эти кадры стали символами фильма. Визуально картина напоминает работы европейских мастеров психологического кино.",
            "Музыка в фильме играет ключевую роль и стала отдельным персонажем истории. Композитор создал партитуру, которая сочетает фортепиано, струнные и электронные звуки. Основная тема фильма — простая мелодия, которая повторяется в разных вариациях на протяжении всей картины. В сценах любви она звучит нежно и тепло. В сценах одержимости — тревожно и диссонирующе. Беар играет эту мелодию в баре, и именно она становится символом их отношений с Никки. Саундтрек вышел отдельным альбомом и быстро занял первые места в чартах. Многие критики называют музыку лучшей частью фильма. Она усиливает каждую эмоцию и остаётся в памяти зрителя после просмотра. Композитор получил несколько наград за эту работу.",
            "Тема одержимости в фильме раскрывается через множество деталей. Это не только отношения Никки и Беар, но и их отношение к прошлому, к работе, к самим себе. Никки одержима желанием понять Беар. Беар одержим своей тайной и чувством вины. Второстепенные персонажи тоже страдают от своих одержимостей. Подруга Никки одержима карьерой и не замечает, как теряет семью. Бармен, где играет Беар, одержим несбыточной мечтой о музыке. Фильм показывает, что одержимость — универсальное человеческое состояние. Она может быть разрушительной, но может и стать двигателем. Главное — вовремя понять, где заканчивается любовь и начинается болезнь. Режиссёр не даёт простых ответов, заставляя зрителя думать.",
            "Критики приняли фильм Обсессия Никки и Беар неоднозначно. Одни назвали его шедевром психологической драмы, другие — слишком медленным и мрачным. Все сошлись в одном: игра главных актёров великолепна. Молодая актриса, исполнившая роль Никки, показала невероятный диапазон эмоций. Её партнёр, играющий Беар, создал образ человека, разрываемого внутренними противоречиями. Некоторые сцены вошли в учебники актёрского мастерства. Особенно хвалили финальную сцену на берегу, где герои молчат несколько минут. Режиссёр получил приз за лучшую режиссуру на международном фестивале. Фильм уже собрал значительную кассу и продолжает идти в кинотеатрах. Многие предсказывают ему номинации на Оскар в нескольких категориях.",
            "Финал фильма стал предметом жарких споров среди зрителей. Никки остаётся одна на пустом берегу, глядя в холодное море. Беар уехал, оставив ей письмо, содержание которого зритель не слышит. Одни считают, что он признаётся в любви и обещает вернуться. Другие уверены, что он прощается навсегда. Третьи видят в этом символ того, что одержимость не имеет конца. Режиссёр в интервью сказал, что специально не дал ответа. Каждый зритель должен сам решить, что произошло. Такой подход разделил аудиторию: кто-то почувствовал себя обманутым, кто-то — благодарным за доверие. Финал обсуждают в социальных сетях месяцами, и это доказывает силу картины.",
            "Обсессия Никки и Беар — это фильм о современной любви и её тёмной стороне. В эпоху социальных сетей одержимость стала нормой. Мы следим за жизнью других, сравниваем себя с ними, хотим быть ближе, чем возможно. Фильм показывает, к чему это может привести. Никки и Беар — не злодеи, а жертвы собственных чувств. Их история трогает, потому что она знакома каждому. Кто из нас не терял себя в отношениях? Кто не боялся остаться один? Фильм не осуждает героев, а пытается понять их. Именно поэтому он вызывает такие сильные эмоции. Это не развлечение, а разговор о важном. Картина останется актуальной ещё много лет.",
            "В заключение стоит сказать, что Обсессия Никки и Беар — важное событие в современном кино. Фильм поднимает сложные темы, не боится быть медленным и тихим. Он требует от зрителя внимания и готовности думать. Актёрская игра, режиссура, операторская работа, музыка — всё на высшем уровне. Картина уже вошла в историю как одна из самых обсуждаемых премьер 2026 года. Она получила награды, собрала кассу и нашла свою аудиторию. Но главное — она заставила людей говорить о любви, одержимости и границах между ними. Фильм рекомендуется к просмотру всем, кто ценит серьёзное кино. Это история, которая остаётся с тобой надолго после финальных титров."
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
            "The film's ending remains open and causes long debates.",
            "Obsession is a story about love that becomes a trap."
        ],
        medium: [
            "The film Obsession Nikki and Bear comes to screens in 2026. It is a dramatic story about two people whose fates intertwined by chance, but forever. Nikki is a young artist seeking inspiration. Bear is a mysterious musician with a heavy past. Their meeting in a small seaside town changes everything. Obsession with each other grows every day.",
            "The plot of the film is built around a secret that Bear has kept for many years. Nikki feels that her beloved is hiding something, but does not dare to ask. Gradually her obsession turns into fear. The director masterfully shows how love can become dangerous. The viewer searches for the truth along with the heroine until the very end.",
            "The cast of Obsession Nikki and Bear is impressive. The main roles were played by young but already famous actors. Their chemistry on screen makes the story alive and real. Critics already call the picture one of the most anticipated premieres of 2026. The cinematography creates an atmosphere of fog and anxiety. Every frame looks like a painting.",
            "Music occupies a special place in the film. The composer wrote a score that enhances every emotion of the characters. Quiet piano themes are replaced by tense strings. The viewer literally feels Nikki's obsession and Bear's pain. The soundtrack has already been released as a separate album and has become popular. Many call the music the best part of the picture.",
            "The main theme of the film is obsession. It is not just love, but a feeling that consumes a person entirely. Nikki loses herself in her relationship with Bear. She stops painting, seeing friends, thinking about the future. Bear is also obsessed, but with his secret. The film asks: where is the line between love and illness?",
            "The setting of the film is a small town on the shore of a cold sea. Fog, rain, old houses create a special atmosphere. Nikki came here to start a new life. Bear has lived here for many years and knows every stone. It is here that their obsession with each other blossoms. The town becomes another character of the film.",
            "The ending of Obsession Nikki and Bear caused much debate. Some consider it open, others tragic. Nikki is left alone on an empty shore. Bear disappears, leaving only a letter. What is in this letter is unknown. The director intentionally gives no answers. The viewer leaves the hall with a question and anxiety.",
            "The premiere of the film took place at a major international festival. The hall applauded standing for several minutes. Critics noted the strong performance of the main actors. The scenes of silence, where emotions are conveyed by a glance, were especially praised. The film has already received several awards. Many predict success at the Oscars.",
            "Obsession Nikki and Bear is not just a melodrama. It is a psychological drama about dependence on another person. Nikki and Bear cannot live without each other. But their feeling destroys both. The film shows how a beautiful love story turns into a nightmare. This is a warning to everyone who confuses passion with obsession. Very strong cinema.",
            "Many viewers recognize themselves in the characters of the film. Someone remembers their first love. Someone remembers painful relationships that are hard to leave. That is why the picture touches hearts so much. Obsession is a universal theme familiar to everyone. The director speaks about it honestly and without embellishment. The film stays in memory for a long time."
        ],
        long: [
            "The film Obsession Nikki and Bear comes to theaters in 2026 and is already considered one of the main premieres of the year. This is a story about two young people whose lives change after a chance meeting in a small seaside town. Nikki is a talented artist who came here to find inspiration and escape from the past. Bear is a mysterious musician who plays in the evenings at a local bar and hardly talks to anyone. Their first meeting happens on a rainy evening. Nikki enters the bar to wait out the downpour and hears music that amazes her. Thus begins their story, full of passion, secrets and obsession. The film is made in the genre of psychological drama and explores the fine line between love and dependence. The director uses long shots, silence and natural light to convey the inner state of the characters.",
            "The main heroine of the film Nikki is a complex and contradictory character. On one hand, she is a strong and independent woman who is used to getting her way. On the other, she is lonely and vulnerable, looking for a person who will understand her without words. When she meets Bear, her world turns upside down. For the first time in a long while she feels understood. But gradually this feeling grows into obsession. Nikki starts following Bear, checking his phone, asking too many questions. She loses control over herself and her emotions. Her friends notice the changes, but she does not listen to them. The art work that used to bring her joy now seems meaningless. The only thing that matters is Bear. The film shows how obsession destroys a personality.",
            "Bear is an equally mysterious character of the film. He is young, handsome and talented, but there is constant sadness in his eyes. He plays piano in a small bar and hardly talks to visitors. No one in town knows where he came from or what he hides. The viewer gradually learns that in the past Bear experienced a terrible tragedy. He lost a loved one and since then is afraid to get attached to anyone. His obsession with the past does not let him live in the present. When Nikki appears, he first tries to keep his distance. But her persistence and sincerity break his defenses. Bear falls in love, but understands that he cannot give Nikki what she wants. His secret becomes a wall between them.",
            "The visual style of Obsession Nikki and Bear deserves a separate discussion. The cinematographer used cold tones — blue, gray, green — to convey the atmosphere of anxiety. Rain falls in almost every scene, creating a feeling of longing and hopelessness. The camera often follows the characters from behind, as if the viewer is also watching them like an obsessed person. Close-ups of faces show every emotion, every shadow of doubt. The light in the film is always dim, even in scenes of happiness. This emphasizes that the joy of the characters is temporary. The scenes by the sea deserve special mention: gray waves, cold wind, empty shore. These shots became symbols of the film. Visually the picture resembles the works of European masters of psychological cinema.",
            "The music in the film plays a key role and has become a separate character of the story. The composer created a score that combines piano, strings and electronic sounds. The main theme of the film is a simple melody that repeats in different variations throughout the picture. In scenes of love it sounds tender and warm. In scenes of obsession it sounds anxious and dissonant. Bear plays this melody in the bar, and it is it that becomes a symbol of their relationship with Nikki. The soundtrack was released as a separate album and quickly took first places in the charts. Many critics call the music the best part of the film. It enhances every emotion and stays in the viewer's memory after watching. The composer received several awards for this work.",
            "The theme of obsession in the film is revealed through many details. It is not only the relationship of Nikki and Bear, but also their attitude to the past, to work, to themselves. Nikki is obsessed with the desire to understand Bear. Bear is obsessed with his secret and guilt. Secondary characters also suffer from their obsessions. Nikki's friend is obsessed with her career and does not notice how she loses her family. The bartender where Bear plays is obsessed with an unrealizable dream of music. The film shows that obsession is a universal human condition. It can be destructive, but it can also become a driving force. The main thing is to understand in time where love ends and illness begins. The director gives no simple answers, forcing the viewer to think.",
            "Critics received the film Obsession Nikki and Bear ambiguously. Some called it a masterpiece of psychological drama, others — too slow and gloomy. All agreed on one thing: the performance of the main actors is magnificent. The young actress who played Nikki showed an incredible range of emotions. Her partner, playing Bear, created the image of a man torn by inner contradictions. Some scenes have entered textbooks of acting. The final scene on the shore, where the characters are silent for several minutes, was especially praised. The director received a prize for best direction at an international festival. The film has already collected a significant box office and continues to run in cinemas. Many predict Oscar nominations in several categories.",
            "The ending of the film became the subject of heated debate among viewers. Nikki is left alone on an empty shore, looking at the cold sea. Bear has left, leaving her a letter whose contents the viewer does not hear. Some believe that he confesses his love and promises to return. Others are sure that he says goodbye forever. Still others see in this a symbol that obsession has no end. The director said in an interview that he intentionally gave no answer. Each viewer must decide for themselves what happened. This approach divided the audience: some felt deceived, others grateful for the trust. The ending is discussed on social networks for months, and this proves the power of the picture.",
            "Obsession Nikki and Bear is a film about modern love and its dark side. In the era of social networks, obsession has become the norm. We follow the lives of others, compare ourselves with them, want to be closer than possible. The film shows what this can lead to. Nikki and Bear are not villains, but victims of their own feelings. Their story touches because it is familiar to everyone. Who among us has not lost themselves in a relationship? Who has not been afraid to be alone? The film does not judge the characters, but tries to understand them. That is why it evokes such strong emotions. This is not entertainment, but a conversation about what matters. The picture will remain relevant for many years.",
            "In conclusion, it is worth saying that Obsession Nikki and Bear is an important event in modern cinema. The film raises complex themes, is not afraid to be slow and quiet. It requires attention and a willingness to think from the viewer. Acting, direction, cinematography, music — everything is at the highest level. The picture has already entered history as one of the most discussed premieres of 2026. It received awards, collected box office and found its audience. But the main thing is that it made people talk about love, obsession and the boundaries between them. The film is recommended for viewing by everyone who values serious cinema. This is a story that stays with you long after the final credits."
        ]
    }
};

let currentText = "";
let startTime = null;
let timerInterval = null;
let isActive = false;
let correctChars = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🩸 Обсессия — тренажёр загружен', 'color:#8b0000;font-size:20px;font-weight:bold;');
    initTrainer();
});

function initTrainer() {
    const newBtn = document.getElementById('new-text');
    const startBtn = document.getElementById('start-typing');
    const input = document.getElementById('user-input');
    const langSel = document.getElementById('lang-select');
    const lenSel = document.getElementById('len-select');

    if (!newBtn) return;

    newBtn.addEventListener('click', () => pickRandomText(langSel.value, lenSel.value));

    startBtn.addEventListener('click', () => {
        if (!currentText) return;
        input.disabled = false;
        input.value = "";
        input.focus();
        isActive = true;
        startTime = null;
        if (timerInterval) clearInterval(timerInterval);
        document.getElementById('timer').textContent = '0';
        document.getElementById('wpm').textContent = '0';
        document.getElementById('accuracy').textContent = '100';
        document.getElementById('result').textContent = '';
    });

    input.addEventListener('input', onType);
    pickRandomText('ru', 'short');
}

function pickRandomText(lang, len) {
    const pool = TEXTS[lang][len];
    currentText = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById('target-text').textContent = currentText;
    document.getElementById('user-input').value = "";
    document.getElementById('user-input').disabled = true;
    document.getElementById('result').textContent = '';
    isActive = false;
    if (timerInterval) clearInterval(timerInterval);
    startTime = null;
    document.getElementById('timer').textContent = '0';
    document.getElementById('wpm').textContent = '0';
    document.getElementById('accuracy').textContent = '100';
}

function onType() {
    if (!isActive) return;
    const input = document.getElementById('user-input');
    const typed = input.value;

    if (startTime === null && typed.length > 0) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 200);
    }

    correctChars = 0;
    for (let i = 0; i < typed.length && i < currentText.length; i++) {
        if (typed[i] === currentText[i]) correctChars++;
    }

    const acc = typed.length ? Math.round((correctChars / typed.length) * 100) : 100;
    document.getElementById('accuracy').textContent = acc;

    if (typed === currentText) finishTyping();
}

function updateTimer() {
    if (!startTime) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = elapsed;
    const minutes = elapsed / 60;
    if (minutes > 0) {
        const wpm = Math.round((correctChars / 5) / minutes);
        document.getElementById('wpm').textContent = wpm;
    }
}

function finishTyping() {
    if (timerInterval) clearInterval(timerInterval);
    isActive = false;
    const elapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    const wpm = elapsed > 0 ? Math.round((currentText.length / 5) / (elapsed / 60)) : 0;
    document.getElementById('result').textContent =
        '🩸 Готово! Время: ' + elapsed + ' сек, скорость: ' + wpm + ' WPM';
    document.getElementById('user-input').disabled = true;
}
