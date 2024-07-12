# Polyus_test_task
### Описание тестового задания:
1. Сделать "таблицу", где каждая ячейка может редактироваться, включая серую шапку;
2. Изначально показывается таблица с данными как в макете;
3. Через 5 секунд после того, как пользователь изменил данные в любой ячейке, появляется прогресс бар и счетчик секунд до отправки (10 секунд);
4. Если пользователь продолжает вводить данные в любой ячейке, счетчик и прогресс бар исчезают. Потом возвращаемся к п. 3.
5. Если введенные данные совпадают с тем, что было изначально, счетчик и прогресс бар не появляются;
6. Если счетчик и прогресс-бар дошли до 0, вывести данные отредактированных ячеек в консоль вместе с их id;
7. Сделать валидацию полей при редактировании:
    - Если в ячейке число, может вводиться только число.
    - Если проценты, то можно вводить только число, а знак % остается в поле ввода всегда.
    - Если фамилия и инициалы, то можно вводить только кириллицу и точки.
    - Если сочетание букв и цифр, можно не валидировать.
8. Таблица должна адекватно смотреться в браузере с шириной 1920 пикс и выше. Адаптив не нужен. Шрифт – любой;
9. Результат - ссылка на репозиторий на гитхабе.

# Node.js Support
Vite no longer supports Node.js 14 / 16 / 17 / 19, which reached its EOL. Node.js 18 / 20+ is now required.

# Параметры сборки и запуска проекта

Для сборки и запуска проекта локально выполните следующие шаги:

1. Установите зависимости:
   ```bash
   npm install
   # или
   yarn install

2. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   # или
   yarn dev

3. Сборка проекта:
   ```bash
   npm run build
   # или
   yarn build

4. Просмотр собранного проекта:
   ```bash
   npm run preview
   # или
   yarn preview

5. Запуск линтера для проверки кода:
   ```bash
   npm run lint
   # или
   yarn lint
