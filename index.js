const express = require('express');
const path = require('path')
const sqlite3 = require('sqlite3').verbose();



const app = express();

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))



//Banco de Dados 
const db_name = path.join(__dirname, "data", "database.db");
const db = new sqlite3.Database(db_name, err =>{
  if(err){
    return console.error(err.message);
  }
  console.log("Conexão feita com sucesso ao Banco de dados 'database.db'")
})





//Servidor start
app.listen(3000, () =>{
  console.log("Servidor iniciado")
})

app.get('/', (req, res) =>{
  res.render("index")
})

