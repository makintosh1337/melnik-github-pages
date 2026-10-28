# Задание 7. GitHub Pages

Выполнил: Мельник А.А.

React и TypeScript. В development данные получаются с json-server, в production с GitHub Raw.

## Локальный запуск

```sh
npm ci
npm run serve
```

В другом терминале из этого же каталога:

```sh
npm start
```

Клиент: http://localhost:3000. Данные: http://localhost:3001/api/data.

## Сборка и публикация

```sh
npm run build
npm run deploy
```

Скрипт predeploy очищает предыдущую сборку, собирает React и копирует JSON в build/static/db.
Скрипт deploy отправляет сборку в gh-pages. Требуется Git с доступом на запись в репозиторий.
Источник GitHub Pages: ветка gh-pages, каталог / (root).
Файл 404.html содержит копию index.html.

Сайт: https://makintosh1337.github.io/melnik-github-pages/

Репозиторий: https://github.com/makintosh1337/melnik-github-pages

JSON: https://raw.githubusercontent.com/makintosh1337/melnik-github-pages/gh-pages/static/db/data.json
