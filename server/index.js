const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json)
app.use(cors())

mongoose.connect("mongodb+srv://ayushbheemaiah:Ab_356355@cluster0.olcm022.mongodb.net/")