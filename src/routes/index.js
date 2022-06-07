import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoots.js";

const routes = (app) => {
    app.route('/').get((req, res)=> {
        res.status(200).send({titulo:"Api working"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;