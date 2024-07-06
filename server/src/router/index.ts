import express from "express";
import insertRouter from "./insert.router"
import authRouter from "./auth.router"
import categoryRouter from "./category.router"
import postRouter from "./post.router"
const initRouter = (app: express.Express) => {
    app.use('/api/v1/insert', insertRouter);
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/category", categoryRouter);
    app.use("/api/v1/post",postRouter)
};

export default initRouter;