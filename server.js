// server.js (Express app)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Mujtaba');
});

app.get('/about', (req, res) => {
    res.send('Hello, Mujtaba at the about page');
});

app.get('/error', (req, res) => {
    res.status(404).send("not found");
})

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}

module.exports = app;