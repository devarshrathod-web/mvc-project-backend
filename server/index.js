const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const user = require('./model/user')
const connectDB = require('./controller/db')
const app = express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080; 

app.get('/', (req, res) => {
  res.send("silvia pls comeback")
})

app.post('/add', async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json(newUser)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.get('/get', async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})
app.put('/update/:id', async (req, res) => {
  try {
    const updateUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateUser);
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.delete('/delete/:id', async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "user delete successfully" })
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})


app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server running on ${PORT}`)
})