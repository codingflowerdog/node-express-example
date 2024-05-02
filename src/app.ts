import express from 'express';
import {resourceRouter} from "./routes/resourceRouter";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// JSON 파싱을 위한 미들웨어 등록
app.use(express.json());

// 라우터 등록
app.use("/", resourceRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});