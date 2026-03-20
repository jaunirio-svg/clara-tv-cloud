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
            <title>CLARA TV ULTRA</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.10/hls.min.js"></script>
            <style>
                body { background: #000; color: #d4af37; font-family: sans-serif; margin: 0; display: flex; flex-direction: column; align-items: center; }
                .header { width: 100%; background: #111; padding: 15px; border-bottom: 2px solid #d4af37; text-align: center; font-weight: bold; font-size: 1.2rem; }
                .video-box { width: 95%; max-width: 800px; margin: 20px 0; aspect-ratio: 16/9; background: #050505; border: 2px solid #222; position: relative; }
                video { width: 100%; height: 100%; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; width: 95%; max-width: 800px; padding: 15px; }
                button { background: #1a1a1a; color: gold; border: 1px solid gold; padding: 15px 5px; border-radius: 5px; cursor: pointer; font-size: 0.7rem; font-weight: bold; text-transform: uppercase; }
                button:hover { background: gold; color: #000; }
                .loading-msg { position: absolute; top: 45%; width: 100%; text-align: center; color: #555; z-index: -1; }
            </style>
        </head>
        <body>
            <div class="header">⭐ CLARA TV <span style="color:white">ULTRA V26</span></div>
            
            <div class="video-box">
                <div class="loading-msg">CARREGANDO SINAL...</div>
                <video id="video" controls autoplay playsinline></video>
            </div>

            <div class="grid">
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">📺 TV BRASIL</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">📺 RTP PORTUGAL</button>
                <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 RECORD NEWS</button>
                <button onclick="play('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 JOVEM PAN</button>
                <button onclick="play('https://samsung-samsungtvplus-3-br.samsung.wurl.com/manifest/playlist.m3u8')">🎬 FILMES 24H</button>
            </div>

            <script>
                var video = document.getElementById('video');
                var hls = new Hls();

                function play(url) {
                    if (Hls.isSupported()) {
                        hls.destroy(); // Limpa sinal anterior
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

                // Iniciar automaticamente
                window.onload = () => play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8');
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V26 ONLINE!'));
