const express = require('express');
const app = express();



app.get("/", (req, res) => {
  res.send("Hello, world!");
})


const PORT = 3333;
app.listen(PORT, () => console.log(`Sever is running in port ${PORT}`))

