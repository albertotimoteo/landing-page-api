const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

const lead = require("./routes/lead")

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/lead", lead)

app.get("/", (_, res) => {
  res.send("API working")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
