const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/user.json');

router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (fs.existsSync(filePath)) {
        let data = fs.readFileSync(filePath, 'utf8');
        let users = JSON.parse(data);

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } else {
        res.status(401).json({ message: 'User not found' });
    }
});

module.exports = router;