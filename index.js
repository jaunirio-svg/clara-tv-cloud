const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CLARA STREAM CLOUD</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #050505; color: #d4af37; font-family: sans-serif; margin: 0; padding: 10px; text-align: center; }
                .player-box { width: 100%; max-width: 900px; margin: auto; border: 2px solid #222; border-radius: 12px; background: #000; overflow: hidden; }
                video { width: 100%; aspect-ratio: 16/9; }
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; max-width: 900px; margin: 20px auto; }
                button { background: #151515; color: white; border: 1px solid #d4af37; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: bold; }
                button:hover { background: #d4af37; color: black; }
                .cat-title { text-align: left; max-width: 900px; margin: 10px auto; border-left: 4px solid #d4af37; padding-left: 10px; }
            </style>
        </head>
        <body>
            <h1>⭐ CLARA <span style="color:white">STREAM CLOUD</span></h1>
            <div class="player-box"><video id="video" controls autoplay></video></div>
            <div class="cat-title">📺 CANAIS AO VIVO</div>
            <div class="grid">
                <button onclick="play('https://eu1.jmvstream.com/w/lp-115/live.m3u8')">RECORD TV RJ</button>
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL HD</button>
                <button onclick="play('https://i.mjh.nz/PlutoTV/br.m3u8')">PLUTO TV CINE</button>
            </div>
            <script>
                const video = document.getElementById('video');
                const hls = new Hls();
                function play(url) {
                    if (Hls.isSupported()) {
                        hls.loadSource(url); hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
                    }
                }
                play('https://i.mjh.nz/PlutoTV/br.m3u8');
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA CLOUD ONLINE!'));
