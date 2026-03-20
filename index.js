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
            <title>CLARA TV CLOUD V7</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; padding: 0; text-align: center; }
                .header { background: #111; padding: 10px; border-bottom: 2px solid gold; }
                .player-box { width: 100%; max-width: 800px; margin: 10px auto; background: #111; aspect-ratio: 16/9; border: 2px solid #333; display: flex; align-items: center; justify-content: center; }
                video { width: 100%; height: 100%; display: block; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 20px; max-width: 900px; margin: auto; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; text-transform: uppercase; font-size: 0.7rem; }
                button:hover { background: gold; color: #000; }
                #aviso { background: red; color: white; padding: 5px; font-size: 0.8rem; display: none; }
            </style>
        </head>
        <body>
            <div class="header"><h1>⭐ CLARA TV <span style="color:white">CLOUD V7</span></h1></div>
            <div id="aviso">ERRO NO SINAL. TENTE OUTRO CANAL.</div>
            
            <div class="player-box">
                <video id="video" controls playsinline autoplay></video>
            </div>

            <p>Se o vídeo não abrir, <b>clique no vídeo</b> para dar o Play manual.</p>

            <div class="grid">
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">📺 TV Brasil HD</button>
                <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 Record News</button>
                <button onclick="play('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8')">🎬 Filmes (Pluto)</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">🌍 RTP (Portugal)</button>
                <button onclick="play('https://dwstream72-lh.akamaihd.net/i/dwstream72_1@123556/master.m3u8')">🌍 DW (Alemanha)</button>
            </div>

            <script>
                const video = document.getElementById('video');
                const aviso = document.getElementById('aviso');
                let hls = new Hls();

                function play(url) {
                    aviso.style.display = 'none';
                    if (Hls.isSupported()) {
                        hls.destroy();
                        hls = new Hls({
                            xhrSetup: function (xhr, url) { xhr.withCredentials = false; }
                        });
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            video.muted = true; // Inicia mudo para o Chrome não bloquear
                            video.play().catch(() => console.log("Play barrado"));
                        });
                        hls.on(Hls.Events.ERROR, (e, data) => {
                            if (data.fatal) aviso.style.display = 'block';
                        });
                    }
                }

                // Inicia o primeiro canal automaticamente
                window.onload = () => play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8');
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V7 NO AR!'));
