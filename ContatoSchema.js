const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContatoSchema = new Schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: {type: String, required: true },
    email: {type: String, required: true },
    telefone: {type: String, required: true },
    mensagem: {type: String, required: true }
})

const contatosModel = mongoose.model("contato", ContatoSchema);

module.exports = contatosModel;