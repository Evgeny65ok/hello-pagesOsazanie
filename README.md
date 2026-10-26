# 🧠 Проект «Осязание»

> Сайт, который себя осознал и теперь деплоится сам.

## 🔗 Прямые ссылки

- 🌐 **Сайт:** https://Evgeny65ok.github.io/hello-pagesOsazanie/
- 🚀 **Deployments:** https://github.com/Evgeny65ok/hello-pagesOsazanie/deployments
- ⚙️ **Environments:** https://github.com/Evgeny65ok/hello-pagesOsazanie/settings/environments

## 👥 Команда «Осязание»

| Роль | Имя | Фишка |
|------|-----|-------|
| 👑 Тимлид | Евгений Белевитин | Говорит «это быстро» |
| ⚙️ DevOps | Кирилл Мамаев | Его боится YAML |
| 💻 Программист 1 | Влад Дербенцев-Федосов | Коммитит в пятницу |
| 🐛 Программист 2 | Иван Потапов | «У меня локально работает» |

## 📄 Страницы

- [x] 🏠 Главная (`index.html`) — Женя
- [x] 👽 О нас (`about.html`) — Кирилл
- [x] 🔥 Услуги (`services.html`) — Влад
- [x] 📝 Блог (`blog.html`) — Влад
- [x] 📞 Контакты (`contacts.html`) — Иван
- [x] 🩸 Обсессия (`obsession.html`) — Женя (тренажёр слепой печати, 60 текстов)
## 🛠 Стек

- HTML5 + CSS3 + JavaScript (vanilla)
- GitHub Actions (CI/CD)
- GitHub Pages (хостинг + CDN)

## 📊 Схема CI/CD

```mermaid
graph LR
    A[git push to main] --> B[Job: ci]
    B --> C{Files OK?}
    C -->|Yes| D[Job: deploy]
    C -->|No| E[Deploy cancelled]
    D --> F[GitHub Pages]
    F --> G[Live site + CDN]
```
## 📊 Скриншоты
<img width="1785" height="992" alt="image" src="https://github.com/user-attachments/assets/9159bc3b-64f3-4ff2-9c21-b72f96d30a3d" />
<img width="1686" height="895" alt="image" src="https://github.com/user-attachments/assets/81c1d4e0-56fb-42af-aefd-6eb9e43676fc" />
<img width="1642" height="1020" alt="image" src="https://github.com/user-attachments/assets/30e55af1-5daa-44af-8ed6-c3dcf4a7e507" />
<img width="1585" height="599" alt="image" src="https://github.com/user-attachments/assets/6cde2897-fd7b-483e-8b82-18b651842cc2" />

## 🎮 Пасхалка

На сайте нажми: **↑ ↑ ↓ ↓ ← → ← → B A** — и увидишь магию.

## 🚀 Как обновить

```bash
git add .
git commit -m "feat: ..."
git push origin main
```

Через 1–2 минуты изменения на живом сайте.
