const express = require('express')
const conectarBD = require('../configdb/db')
const cors = require('cors')
const conf = require('../configdb/config');

const app = express();
const puerto = conf.PORT;

conectarBD();
app.use(cors());
app.use(express.json());

app.use('/api/clientes',require('../routes/clientesRutas'))
app.use('/api/productos',require('../routes/productosRutas'))

app.get('/',(req,res)=>{
    res.send('hola desde el nav')
});
app.listen(puerto,()=>console.log(`hola desde el sv puerto ${puerto}`))
