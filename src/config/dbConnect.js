import mongoose from "mongoose";

mongoose.connect("mongodb+srv://poggian85:Caceta321'@cluster0.a3acu.mongodb.net/api-livraria");

let db = mongoose.connection;

export default db;