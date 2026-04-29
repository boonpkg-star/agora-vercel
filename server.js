const express = require("express");
const cors = require("cors");
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const app = express();
app.use(cors());
app.use(express.json());

// 🔴 ใส่ของคุณตรงนี้
const APP_ID = "ec22b65b56c0403aa678ffcd1c6b96eb";
const APP_CERTIFICATE = "ca9f38041cae49b2923a15f3c13cfb55";

app.post("/token", (req, res) => {
  const { channelName, uid } = req.body;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    uid,
    RtcRole.PUBLISHER,
    Math.floor(Date.now() / 1000) + 3600
  );

  res.json({ token, appId: APP_ID });
});

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});