const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const controller = require('./ContatoController')
const PORT = 8080;


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/contatos', async (request, response) => {
  controller.getAll()
    .then(contato => response.send(contato))
})

app.get('/contatos/:id', (request, response) => {
  const id = request.params.id
  controller.getById(id)
    .then(contato => {
      if(!contato){ 
        response.sendStatus(404) 
      } else {
        response.send(contato)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

app.post('/contato', (request, response) => {
  controller.add(request.body)
    .then(contato => {
      const _id = contato._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})

app.delete('/contatos/:id', (request, response) => {
  controller.remove(request.params.id)
    .then(contato => {
      if(contato === null || contato === undefined){ // if(!contato)
        response.sendStatus(404) // not found
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400) //bad request
      } else {
        response.sendStatus(500)
      }
    })
})


app.listen(PORT, function () {
    console.log('Servidor rodando na porta ', PORT)
  });
  