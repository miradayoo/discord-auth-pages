const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("MiraBot 인증 서버입니다.");
});

app.get("/verify", (req, res) => {
  res.send("✅ 유저 인증 완료! (이건 샘플 페이지)");
});

app.get("/terms", (req, res) => {
  res.send("<h1>서비스 약관</h1><p>여기에 너의 약관 내용을 작성.</p>");
});

app.get("/privacy", (req, res) => {
  res.send("<h1>개인정보 보호정책</h1><p>여기에 개인정보 처리방침을 작성.</p>");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
