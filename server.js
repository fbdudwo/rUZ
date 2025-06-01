const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3000;

app.use(cors());

app.get("/token", async (req, res) => {
  try {
    const result = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET).toString("base64"),
        },
      }
    );
    res.json({ token: result.data.access_token });
  } catch (error) {
    res.status(500).json({ error: "Failed to get token" });
  }
});

app.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));
