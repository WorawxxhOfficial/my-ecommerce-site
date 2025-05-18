const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');

router.post('/', (req, res) => {
    const { fname, lname, occupation, occupationCategory, email, password } = req.body;

    let users = [];

    if (fs.existsSync(filePath)) {
        let data = fs.readFileSync(filePath, 'utf8');
        users = JSON.parse(data);
        users.push({ fname, lname, occupation, occupationCategory, email, password });
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        res.status(200).json({ message: 'User registered successfully' });
    } else {
        users.push({ fname, lname, occupation, occupationCategory, email, password });
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        res.status(200).json({ message: 'User registered successfully' });
    }
});

module.exports = router;