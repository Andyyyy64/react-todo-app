const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    const str = [{
        "name": "Andy"
    }]
    res.end(JSON.stringify(str))
})

router.post("/addtodo", (req, res) => {
    res.end("NA")
})

module.exports = router