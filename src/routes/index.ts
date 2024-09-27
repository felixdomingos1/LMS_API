import { Router } from "express";
import { usuarioRouter } from "./userRoutes/userRouter";
import { cursoRouter } from "./cursoRoutes/cursoRouter";
import { categoriaRouter } from "./categoriaRoutes/categoriaRouter";
import { pagamentoRouter } from "./pagamentoRoutes/pagamentoRouter";

const routes = Router();


routes.get("/", (req, res) => {
    res.json({ message: "TUDO FUNCIONANDO . . .  OK!", status:200 });
});

routes.use("/api/usuario", usuarioRouter);
routes.use("/api/curso", cursoRouter);
routes.use("/api/categoria", categoriaRouter);
routes.use("/api/pagamentos", pagamentoRouter);

export { routes }
