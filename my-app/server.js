const cookieSession = require("cookie-session");
const express = require('express');
const passport = require("passport");
const cors = require("cors");
const path = require('path');
const app = express();

app.use(express.json());

app.use(cors({
  origin:"http://localhost:3000",
  path: '/',
  credentials: 'include',
}));

app.use(cookieSession({
  name: "session",
  keys: ["lama"],
  maxAge: 24 * 60 * 60 * 1000
  })
);

app.use(passport.initialize(), passport.session());
app.use(express.static(path.join(__dirname, 'build')));

app.use("/auth", require("./backend/routes/auth"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Сервер запущен на порту ${process.env.PORT || 3001}`);
});