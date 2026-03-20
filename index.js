const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CLARA TV CLOUD V11</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <script src="https://cdn.jsdelivr.net/npm/dplayer@latest/dist/DPlayer.min.js"></script>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; padding: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid gold; }
                #dplayer { width: 100%; max-width: 800px; margin: 15px auto; aspect-ratio: 16/9; background: #000; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 20px; max-width: 900px; margin: auto; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.7rem; text-transform: uppercase; }
                button:active { background: gold; color: #000; }
                .aviso { background: #d4af37; color: #000; padding: 5px; font-size: 0.8rem; font-weight: bold; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">CLOUD V11</span></h1></header>
            <div class="aviso">⚠️ TOQUE NO VÍDEO PARA LIBERAR O SOM APÓS CARREGAR</div>
            
            <div id="dplayer"></div>

            <div class="grid">
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">📺 TV Brasil</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">🌍 RTP PORTUGAL</button>
                <button onclick="play('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8')">🎬 PLUTO CINE</button>
                <button onclick="play('https://dwstream72-lh.akamaihd.net/i/dwstream72_1@123556/master.m3u8')">🌍 DW (Alemanha)</button>
            </div>

            <script>
                const dp = new DPlayer({
                    container: document.getElementById('dplayer'),
                    autoplay: false,
                    video: {
                        url: 'https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8',
                        type: 'hls'
                    }
                });

                function play(url) {
                    dp.switchVideo({ url: url, type: 'hls' });
                    dp.play();
                    // Garante que o som será liberado no clique
                    dp.video.muted = false;
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V11 NO AR!'));
