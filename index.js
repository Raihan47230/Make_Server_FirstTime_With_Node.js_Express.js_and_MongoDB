const express=require('express')
const phones = require('./Phone.json');
const app =express();
const port=5000

app.get('/',(req,res)=>{
     res.send('hello server side i am here  ...........')
})


app.get('/data',(req,res)=>{
     res.send('hello i am data route for you')
})
app.get('/Raihan',(req,res)=>{
     res.send('hello i am tailwind css for you!')
})
app.get('/phone',(req,res)=>{
     res.send(phones)
})

app.get('/phone/:id',(req,res)=>{
     const product_id = parseInt(req.params.id);
     console.log(`this is id no: ${product_id}`)
     const phone= phones.find(phone=>phone.product_id === product_id) || {}
     res.send(phone)
})

app.listen(port,()=>{
     console.log(`Example app lissening on port sssss 0000 ${port}`)
})