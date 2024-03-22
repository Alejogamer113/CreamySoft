const express = require('express')
const app = express()
const hbs = require('hbs');
const port = 3300


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log("error al implementar vista parcial")});

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname+'/public/dashboard/examples/dashboard.html')
// })

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/categorias', (req, res) => {
    res.render(__dirname+'/views/categorias.hbs')
  })

  app.get('/productos', (req, res) => {
    res.render(__dirname+'/views/productos.hbs')
  })

  app.get('/insumos', (req, res) => {
    res.render(__dirname+'/views/insumos.hbs')
  })

  app.get('/pedidos', (req, res) => {
    res.render(__dirname+'/views/pedidos.hbs')
  })

  app.get('/ventas', (req, res) => {
    res.render(__dirname+'/views/ventas.hbs')
  })
app.listen(port, () => {
  console.log(`Ejecucion en el puerto http://localhost:${port}`)
})