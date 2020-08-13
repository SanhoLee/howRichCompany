// 단일 파일을 실행시키기 위한 방법
// node {filename}
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`We are Listening : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
