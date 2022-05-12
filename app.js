const express = require('express')
const app = express()

const PORT = 8080

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('', (req, res)=>{
    res.render('pages/home')
})

function startServer() {
    app.listen(PORT)
    console.log("Server runing in: localhost:" + PORT)
}
startServer()
