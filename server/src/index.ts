import express from "express";
import dotevn from "dotenv";
import cors from "cors"
import checkConnection from "./config/connection";
import initRouter from "./router";
dotevn.config();

const app = express();
app.use(express.json())
app.use(cors({
   origin: "http://localhost:3000"
}))
app.use(express.urlencoded({extended: true}))
initRouter(app);
const port = process.env.PORT || 4000;
checkConnection();
app.listen(port, () => {
   console.log(`[server]: Server is running at http://localhost:${port}`);
});
