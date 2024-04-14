# Тестирование:

E2E - тестирование на реальных данных, c реальным backend, когда открывается браузер, программа тыкает на кнопки, отправляет различные данные. Тут проверяем ключевую функциональность, регистрацию, авторизацию, оплату и т.д.

Integration - тестирование модулей, не по отдельности, а в связке

Скриншотные тесты - тестирование на основании скриншотов приложения

Unit - это модульное тестирование, тесты пишутся для отдельных функций, классов

Links:

Unit - https://jestjs.io/ru/docs/getting-started

# React Testing Library
- findBy; findAll - для асинхрогного тестирования
- getBy; getAll - получаем элемент
- queryBy; queryAll - элемента нет в дереве (отсутствует)