import express from "express";
import autorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", autorController.listarAutores)
    .get("/autor/:id", autorController.listarAutoresPorId)
    .post("/autor", autorController.cadastrarAutor)
    .put("/autor/:id",autorController.atualizarAutor)
    .delete("/autor/:id",autorController.excluirAutor)

export default router;