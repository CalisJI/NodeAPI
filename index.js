const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  const data = {
    name: "Calis",
    age: 25,
    city: "Da Nang",
  };
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API service running on port ${PORT}`);
});
