const express = require('express');
const bodyParser = require('body-parser');
const paypal = require('paypal-rest-sdk');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Настройка paypal-rest-sdk с использованием ваших API ключей
paypal.configure({
  'mode': 'sandbox',
  'client_id': 'YOUR_CLIENT_ID',
  'client_secret': 'YOUR_CLIENT_SECRET'
});

// Обработчик маршрута для создания платежа
app.post('/create-payment', (req, res) => {
  const paymentData = {
    // Данные платежа (пример)
  };

  // Создание платежа через API PayPal
  paypal.payment.create(paymentData, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).send(error.message);
    } else {
      res.json({ paymentId: payment.id });
    }
  });
});

// Обработчик маршрута для выполнения платежа
app.post('/execute-payment', (req, res) => {
  const { paymentId, payerId } = req.body;

  const execute_payment_json = {
    payer_id: payerId
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).send(error.message);
    } else {
      res.sendStatus(200);
    }
  });
});

// Middleware для обслуживания статических файлов React-приложения
app.use(express.static(path.join(__dirname, 'client/build')));

// Обработка всех остальных запросов - отправка статического файла React-приложения
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});