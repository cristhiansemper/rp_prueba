const express = require('express');
const app = express();
//primer cambio
app.get('/', (req,res) => res.send('hello world'));

app.listen(3000);
console.log('Server on port 3000');
