const express = require("express");
const PORT = 4000;

const app = express();

app.use(express.json());

app.get("/health", (req,res) => {
    res.json({ok: true, message: "Server is running and alive !"});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})