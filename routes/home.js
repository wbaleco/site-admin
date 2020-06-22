const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.send("Página inicial do site");

});

module.exports = router;