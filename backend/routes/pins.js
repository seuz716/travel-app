const router = require("express").Router();
const Pin = require("../models/Pin.js");

//create a pin

router.post("/", async (req, res)=>{
    const newPin = new Pin(req.body)
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all pins

module.exports = router;