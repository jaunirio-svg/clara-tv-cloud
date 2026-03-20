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
            <title>CLARA TV PREMIUM</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                * { box-sizing: border-box; }
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; padding: 0; }
                header { background: #111; padding: 15px; border-bottom: 2px solid gold; text-align: center; }
                .player-container { width: 100%; max-width: 800px; margin: 20px auto; background: #050505; border: 1px solid #333; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; }
                video { width: 100%; height: 100%; outline: none; }
                .controls { max-width: 800px; margin: auto; padding: 15px; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
                button { background: #1a1a1a; color: gold; border: 1px solid gold; padding: 15px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.75rem; transition: 0.3s; }
                button:hover { background: gold; color: black; }
                .status { font-size: 0.8rem; color: #888; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">PRO V24</span></h1></header>
            
            <div class="player-container">
                <video id="video" controls autoplay muted></video>
            </div>

            <div class="controls">
                <div class="status">● SINAL IPTV DIRETO</div>
                <div class="grid">
                    <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL</button>
                    <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PORTUGAL</button>
                    <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">RECORD NEWS</button>
                    <button onclick="play('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">JOVEM PAN</button>
                    <button onclick="play('https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8')">SAMSUNG MOVIES</button>
                </div>
            </div>

            <script>
                var video = document.getElementById('video');
                var hls = new Hls();

                function play(url) {
                    if (Hls.isSupported()) {
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                            video.play();
                            video.muted = false; // Tenta tirar o mute ao clicar
                        });
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                        video.addEventListener('canplay', function() {
                            video.play();
                        });
                    }
                }

                // Iniciar com TV Brasil
                play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8');
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V24 ONLINE E ORGANIZADA!'));
