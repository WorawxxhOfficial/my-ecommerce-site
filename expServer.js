const express = require('express');
const path = require('path');
const app = express();

// server static file from the current project floder
app.use(express.static(__dirname));

app.get('/', (re, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000")
})