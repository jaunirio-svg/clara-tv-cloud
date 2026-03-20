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
            <title>CLARA TV CLOUD V5</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #000; color: #fff; font-family: sans-serif; margin: 0; padding: 0; text-align: center; }
                .header { background: #111; padding: 15px; border-bottom: 2px solid #d4af37; }
                .player-box { width: 100%; max-width: 800px; margin: 10px auto; background: #000; aspect-ratio: 16/9; border: 1px solid #222; position: relative; }
                video { width: 100%; height: 100%; display: block; }
                .controls { padding: 15px; max-width: 900px; margin: auto; }
                .category { text-align: left; color: #d4af37; font-weight: bold; margin: 20px 0 10px; border-left: 4px solid #d4af37; padding-left: 10px; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
                button { background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px; border-radius: 8px; cursor: pointer; transition: 0.3s; font-size: 0.8rem; }
                button:hover { background: #d4af37; color: #000; border-color: #fff; }
                .active { background: #d4af37 !important; color: #000 !important; font-weight: bold; }
                #status { background: #d4af37; color: #000; padding: 5px; font-size: 0.8rem; font-weight: bold; display: none; }
            </style>
        </head>
        <body>
            <div class="header"><h1 style="margin:0; font-size:1.4rem; color:#d4af37;">CLARA TV <span style="color:white">CLOUD V5</span></h1></div>
            <div id="status">CARREGANDO SINAL...</div>
            <div class="player-box">
                <video id="video" controls autoplay playsinline muted></video>
            </div>

            <div class="controls">
                <div class="category">📺 BRASIL AO VIVO</div>
                <div class="grid">
                    <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8', this)">TV BRASIL HD</button>
                    <button onclick="play('https://ebctv.akamaized.net/hls/live/2032082/canalgov/master.m3u8', this)">CANAL GOV</button>
                    <button onclick="play('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8', this)">JOVEM PAN NEWS</button>
                    <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8', this)">RECORD NEWS</button>
                </div>

                <div class="category">🎬 FILMES E SÉRIES</div>
                <div class="grid">
                    <button onclick="play('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8', this)">PLUTO CINE SUCESSOS</button>
                    <button onclick="play('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8', this)">PLUTO AÇÃO</button>
                    <button onclick="play('https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8', this)">SAMSUNG MOVIES</button>
                </div>

                <div class="category">🌐 MUNDO (INTERNACIONAL)</div>
                <div class="grid">
                    <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8', this)">RTP INTERNACIONAL</button>
                    <button onclick="play('https://euronews-euronews-portuguese-1-br.samsung.wurl.com/manifest/playlist.m3u8', this)">EURONEWS PT</button>
                </div>
            </div>

            <script>
                const video = document.getElementById('video');
                const status = document.getElementById('status');
                let hls = new Hls();

                function play(url, btn) {
                    status.style.display = 'block';
                    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                    if(btn) btn.classList.add('active');

                    if (Hls.isSupported()) {
                        hls.destroy();
                        hls = new Hls();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            status.style.display = 'none';
                            video.play().catch(e => {
                                console.log("Autoplay barrado, aguardando clique.");
                            });
                        });
                    } 
                    // Suporte para iPhone/Safari
                    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                        video.addEventListener('loadedmetadata', () => {
                            status.style.display = 'none';
                            video.play();
                        });
                    }
                }

                // Inicia com um canal oficial super estável
                window.onload = () => {
                   play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8');
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V5 NO AR!'));
