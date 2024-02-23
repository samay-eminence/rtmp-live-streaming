const express = require("express");
const NodeMediaServer = require("node-media-server");

const app = express();
const port = 3000;

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: 8000,
    mediaroot: "./media",
    allow_origin: "*",
  },
};

const nms = new NodeMediaServer(config);

nms.run();

app.get("/", (req, res) => {
  res.send("Live streaming server is running...");
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
