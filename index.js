const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = "COLOQUE O CAMINHO"

app.get('/lerCsv', (req,res) => {
  fs.readFile(path, {encoding: 'utf-8'}, function(err,data){
    if(err){
      throw err
    }
    content = data
    
    const linhas = data.split('\n')
    const valores = []
    let colunaslInha
    linhas.forEach(linha => {
        colunaslInha = linha.split(';')
        valores.push({
          val1: colunaslInha[4],
          val2: colunaslInha[5],
          val3: colunaslInha[6]
        })
    })
    res.json(valores)
    console.log(valores)
  })  
})


app.listen(8080)