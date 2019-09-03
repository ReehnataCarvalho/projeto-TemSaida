const { connect } = require('./ContatoRepository');
const contatosModel = require('./ContatoSchema')

connect()


const getAll = async () => {
    return contatosModel.find((error, contatos) => {
        return contatos
    })
}

const getById = (id) => {
    return contatosModel.findById(id)
}

const add = (contato) => {
    const novoContato = new contatosModel(contato)
    return novoContato.save()
}

const remove = (id) => {
    return contatosModel.findByIdAndDelete(id)
}

  module.exports = {
    getAll,
    getById,
    add,
    remove
  }