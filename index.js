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
            <title>CLARA TV CLOUD V6</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #000; color: #fff; font-family: sans-serif; margin: 0; padding: 0; text-align: center; }
                .header { background: #111; padding: 10px; border-bottom: 2px solid gold; }
                .player-box { width: 100%; max-width: 800px; margin: 10px auto; background: #000; aspect-ratio: 16/9; position: relative; border: 1px solid #333; }
                video { width: 100%; height: 100%; cursor: pointer; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 15px; max-width: 900px; margin: auto; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; }
                button:active { transform: scale(0.95); background: gold; color: #000; }
                .instrucao { color: gold; font-size: 0.9rem; margin: 5px; animation: blink 1s infinite; }
                @keyframes blink { 50% { opacity: 0.5; } }
            </style>
        </head>
        <body>
            <div class="header"><h1 style="margin:0; font-size:1.2rem; color:gold;">⭐ CLARA TV <span style="color:white">CLOUD V6</span></h1></div>
            
            <p id="hint" class="instrucao">Aperte em um canal e depois CLIQUE NO VÍDEO para som/imagem</p>
            
            <div class="player-box">
                <video id="video" poster="https://static.vecteezy.com/system/resources/thumbnails/001/826/248/small/cinema-background-concept-free-video.jpg" playsinline muted controls></video>
            </div>

            <div class="grid">
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">📺 TV BRASIL HD</button>
                <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 RECORD NEWS</button>
                <button onclick="play('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 JOVEM PAN</button>
                <button onclick="play('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8')">🎬 PLUTO FILMES</button>
                <button onclick="play('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8')">💥 PLUTO AÇÃO</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">🌍 RTP INT (PORT)</button>
            </div>

            <script>
                const video = document.getElementById('video');
                let hls = new Hls();

                function play(url) {
                    document.getElementById('hint').innerText = "CARREGANDO... (Clique no vídeo se não abrir)";
                    
                    if (Hls.isSupported()) {
                        hls.destroy();
                        hls = new Hls();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                            video.play();
                            video.muted = false; // Tenta tirar o mute no clique
                        });
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                        video.play();
                    }
                }

                // Desbloqueio de áudio ao clicar no player
                video.addEventListener('click', () => {
                    video.muted = false;
                    video.play();
                });
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V6 ONLINE!'));
