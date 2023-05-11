const mng = require('mongoose')

const Registro = new mng.Schema({
    
    Username: String,
    Password: String,

});

module.exports = mng.model("Registro", Registro)