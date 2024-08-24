const mongoose = require('mongoose');

const conf = require('../configdb/config');
const conectarBD=()=>{
    mongoose
        .connect(conf.DB_MONGO)
        .then(()=>console.log('conect'))
        .catch((e)=>console.error(e))
}

module.exports = conectarBD