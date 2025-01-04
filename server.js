const express = require("express");
const ytdlp = require("yt-dlp-exec");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();
const app = express();
const PORT = 5000;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

app.use(cors());

app.get("/video-info", async (req, res) => {
  const videoUrl = req.query.url;

  if (!videoUrl) {
    return res.status(400).json({ error: "No URL provided" });
  }

  try {
    const info = await ytdlp(videoUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      noCheckCertificate: true,
    });

    const videoId = info.id;

    // Fetch video details
    const videoApiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const videoResponse = await axios.get(videoApiUrl);
    const videoSnippet = videoResponse.data.items[0].snippet;

    const channelId = videoSnippet.channelId;

    // Fetch channel details
    const channelApiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`;
    const channelResponse = await axios.get(channelApiUrl);
    const channelSnippet = channelResponse.data.items[0].snippet;

    res.json({
      title: info.title,
      duration: info.duration,
      thumbnail: info.thumbnail,
      author: videoSnippet.channelTitle,
      authorImg: channelSnippet.thumbnails.default.url, // Fetch author image
      channelUrl: `https://www.youtube.com/channel/${channelId}`,
      videoUrl: info.url,
    });
  } catch (err) {
    console.error("Error fetching video info:", err.message);
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
