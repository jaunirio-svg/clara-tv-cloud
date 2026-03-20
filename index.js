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
            <title>CLARA TV VIP</title>
            <script src="https://www.youtube.com/iframe_api"></script>
            <style>
                body { background: #050505; color: gold; font-family: 'Arial', sans-serif; margin: 0; padding: 0; overflow-x: hidden; }
                .header { background: #000; border-bottom: 2px solid gold; padding: 15px; font-size: 1.5rem; font-weight: bold; text-shadow: 2px 2px #000; }
                .video-container { position: relative; width: 100%; max-width: 900px; margin: 20px auto; aspect-ratio: 16/9; background: #000; border: 3px solid #222; box-shadow: 0 0 50px rgba(255,215,0,0.2); }
                #player { width: 100%; height: 100%; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 20px; max-width: 1000px; margin: auto; }
                button { background: #111; color: #fff; border: 1px solid gold; padding: 15px 5px; cursor: pointer; font-weight: bold; border-radius: 5px; font-size: 0.75rem; text-transform: uppercase; transition: 0.3s; }
                button:hover { background: gold; color: #000; transform: scale(1.05); }
                .cat-title { text-align: left; padding-left: 25px; color: gold; font-size: 1rem; margin-top: 20px; text-transform: uppercase; letter-spacing: 2px; border-left: 5px solid gold; margin-left: 20px; }
            </style>
        </head>
        <body>
            <div class="header">⭐ CLARA TV <span style="color:white">PRO V21</span></div>
            
            <div class="video-container"><div id="player"></div></div>

            <div class="cat-title">📡 CANAIS ABERTOS</div>
            <div class="grid">
                <button onclick="load('9UIsS5YI_6U', true)">RECORD NEWS</button>
                <button onclick="load('88K7W_o3E0x', true)">JOVEM PAN</button>
                <button onclick="load('v_S7T_fshI8', true)">BAND NEWS</button>
                <button onclick="load('6uI1u3YI6I6', true)">TV CULTURA</button>
                <button onclick="load('vYyI6I6YI6I', true)">SBT</button>
            </div>

            <div class="cat-title">🎬 FILMES & DOCS</div>
            <div class="grid">
                <button onclick="load('5_XEEpGEU_Y', false)">FILMES AÇÃO</button>
                <button onclick="load('9Auq9mYxFEE', false)">CINE PRIMER</button>
                <button onclick="load('GOfX4V_66v8', false)">DESENHOS 24H</button>
                <button onclick="load('p9I2vS_K4Wc', false)">SÉRIES RETRÔ</button>
            </div>

            <script>
                var player;
                function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                        height: '100%',
                        width: '100%',
                        videoId: '9UIsS5YI_6U', // Começa com Record News
                        playerVars: { 'autoplay': 1, 'mute': 1, 'controls': 1, 'rel': 0 },
                        events: { 'onReady': onPlayerReady }
                    });
                }

                function onPlayerReady(event) { event.target.playVideo(); }

                function load(id, isLive) {
                    if(isLive) {
                        player.loadVideoById({'videoId': id, 'playVideo': true});
                    } else {
                        player.cueVideoById(id);
                        player.playVideo();
                    }
                    window.scrollTo({top: 0, behavior: 'smooth'});
                    player.unMute();
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V21 OPERACIONAL!'));
