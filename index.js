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
            <title>CLARA TV V28</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@1.4.10"></script>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; display: flex; flex-direction: column; align-items: center; }
                .player-box { width: 100%; max-width: 800px; aspect-ratio: 16/9; background: #111; margin-top: 10px; }
                video { width: 100%; height: 100%; border-bottom: 2px solid gold; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 20px; width: 100%; max-width: 800px; }
                button { background: #222; color: #fff; border: 1px solid gold; padding: 15px 5px; cursor: pointer; border-radius: 5px; font-weight: bold; font-size: 0.7rem; }
                button:active { background: gold; color: #000; }
            </style>
        </head>
        <body>
            <div class="player-box">
                <video id="video" controls autoplay playsinline></video>
            </div>

            <div class="grid">
                <button onclick="play('https://shls-recordnews-br-prod.akamaized.net/out/v1/70868798e401490280f33198083c2710/index.m3u8')">RECORD NEWS</button>
                <button onclick="play('https://stmv1.paineltv.com.br/canaltv/canaltv/playlist.m3u8')">CANAL TV</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PT</button>
                <button onclick="play('https://tvbrasil-hls.ebc.com.br/hls/tvbrasil/index.m3u8')">TV BRASIL</button>
                <button onclick="play('https://live-01-01-jovempan.noticias.v3.fabric.aws/v1/master.m3u8')">JOVEM PAN</button>
            </div>

            <script>
                var video = document.getElementById('video');
                var hls = new Hls();

                function play(url) {
                    if (Hls.isSupported()) {
                        hls.destroy();
                        hls = new Hls();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                            video.play();
                        });
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                        video.play();
                    }
                }
                
                // Iniciar com Record News Direto da Akamai (mais resistente a bloqueios)
                window.onload = () => play('https://shls-recordnews-br-prod.akamaized.net/out/v1/70868798e401490280f33198083c2710/index.m3u8');
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V28 NO AR!'));
