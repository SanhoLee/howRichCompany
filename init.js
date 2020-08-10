// 단일 파일을 실행시키기 위한 방법
// node {filename}
const express = require("express");

const app = express();
app.listen(4000, () => {
  console.log("Is that working???");
});

app.get("/", () => {
  console.log("lalalal");
});
