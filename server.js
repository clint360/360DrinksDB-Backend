const express = require('express');
const cors = require('cors');
const app = express();

var corOptions = {
  origin: 'https://localhost:8080'
}

//middlewares
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//routers
const router = require('../routes/productRouter.js')
app.use('/api/products', router)
//test
app.get('/', (req, res) => {
  res.json({ message: `hello from api` })
});

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
  console.log(`Server is listening on Port ${PORT}`)
})  
