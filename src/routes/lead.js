const express = require("express")
const router = express.Router()
const Lead = require("../models/Lead")

router.post("/", async (req, res) => {
  try {
    const { email, phone, name } = req.body
    await Lead.create({ email, phone, name })
    res.status(200).json({ message: "Lead enviado!" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err })
  }
})

module.exports = router
