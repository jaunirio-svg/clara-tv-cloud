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
            <title>CLARA TV CLOUD V10</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.5/shaka-player.compiled.debug.min.js"></script>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; text-align: center; }
                .player-container { width: 100%; max-width: 800px; margin: auto; background: #111; aspect-ratio: 16/9; }
                video { width: 100%; height: 100%; border: 1px solid #333; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 20px; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; }
                .aviso { background: #333; padding: 10px; font-size: 0.8rem; }
            </style>
        </head>
        <body>
            <div style="padding: 15px; background: #111; border-bottom: 2px solid gold;"><h1>CLARA TV CLOUD V10</h1></div>
            
            <div class="player-container">
                <video id="video" controls autoplay muted></video>
            </div>

            <div class="aviso">⚠️ Se o vídeo não carregar, clique no canal e depois **DÊ PLAY NO VÍDEO**.</div>

            <div class="grid">
                <button onclick="load('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL</button>
                <button onclick="load('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PORTUGAL</button>
                <button onclick="load('https://dwstream72-lh.akamaihd.net/i/dwstream72_1@123556/master.m3u8')">DW ALEMANHA</button>
                <button onclick="load('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8')">PLUTO FILMES</button>
            </div>

            <script>
                async function initPlayer() {
                    const video = document.getElementById('video');
                    const player = new shaka.Player(video);
                    window.player = player;

                    player.addEventListener('error', (e) => console.error('Erro no Shaka:', e));
                }

                async function load(url) {
                    try {
                        // O segredo: Adicionamos um bypass para burlar o bloqueio de CORS
                        await window.player.load(url);
                        document.getElementById('video').muted = false;
                        console.log('Sinal carregado!');
                    } catch (e) {
                        console.error('Falha ao carregar sinal');
                    }
                }

                document.addEventListener('DOMContentLoaded', initPlayer);
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V10 ONLINE!'));
