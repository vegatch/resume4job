const express = require('express');
const app = express();
const port = 5555

app.use(express.static('public'))
    .get('/', (req, res) =>{

    })

    
    .post('/', (req, res) =>{
        
    })



app.listen(port, ()=> console.log(`server started on port: ${port}`))