const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Обслуживание статических файлов из папки "build" вашего React-приложения
app.use(express.static(path.join(__dirname, 'build')));

// Маршрут для обработки всех запросов и отправки файла index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});