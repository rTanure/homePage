const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res)=>{
//     res.render('pages/home')
// })

app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})
