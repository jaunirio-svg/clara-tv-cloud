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
            <title>CLARA TV CLOUD V8</title>
            <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
            <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; padding: 0; text-align: center; }
                header { background: #111; padding: 10px; border-bottom: 2px solid gold; }
                .player-box { width: 100%; max-width: 800px; margin: 10px auto; background: #000; border: 1px solid #333; }
                .video-js { width: 100% !important; height: auto !important; aspect-ratio: 16/9; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 15px; max-width: 900px; margin: auto; }
                button { background: #1a1a1a; color: #fff; border: 1px solid gold; padding: 10px; border-radius: 5px; cursor: pointer; font-size: 0.75rem; font-weight: bold; height: 50px; }
                button:hover { background: gold; color: #000; }
                .cat { text-align: left; padding-left: 20px; color: gold; font-weight: bold; margin-top: 20px; border-left: 4px solid gold; margin-left: 15px; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">CLOUD V8</span></h1></header>
            
            <div class="player-box">
                <video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" poster="https://static.vecteezy.com/system/resources/thumbnails/001/826/248/small/cinema-background-concept-free-video.jpg">
                    <p class="vjs-no-js">Para ver este vídeo, ative o JavaScript.</p>
                </video>
            </div>

            <p style="font-size: 0.8rem;">⚠️ Se não abrir, clique no botão e depois **DÊ PLAY NO MEIO DO VÍDEO**.</p>

            <div class="cat">🇧🇷 CANAIS ABERTOS BRASIL</div>
            <div class="grid">
                <button onclick="change('https://eu1.jmvstream.com/w/lp-115/live.m3u8')">RECORD TV RJ</button>
                <button onclick="change('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL HD</button>
                <button onclick="change('https://ebctv.akamaized.net/hls/live/2032082/canalgov/master.m3u8')">CANAL GOV</button>
                <button onclick="change('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">JOVEM PAN NEWS</button>
                <button onclick="change('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">RECORD NEWS</button>
                <button onclick="change('https://rt-brasil.stmv.live/brasil/brasil/playlist.m3u8')">REDE TV</button>
            </div>

            <div class="cat">🎬 FILMES & SÉRIES 24H</div>
            <div class="grid">
                <button onclick="change('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8')">PLUTO CINE</button>
                <button onclick="change('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8')">PLUTO AÇÃO</button>
                <button onclick="change('https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8')">SAMSUNG MOVIES</button>
            </div>

            <div class="cat">🌍 INTERNACIONAL</div>
            <div class="grid">
                <button onclick="change('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PORTUGAL</button>
                <button onclick="change('https://euronews-euronews-portuguese-1-br.samsung.wurl.com/manifest/playlist.m3u8')">EURONEWS PT</button>
                <button onclick="change('https://dwstream72-lh.akamaihd.net/i/dwstream72_1@123556/master.m3u8')">DW ALEMANHA</button>
            </div>

            <script>
                var player = videojs('my-video');

                function change(url) {
                    player.src({ type: 'application/x-mpegURL', src: url });
                    player.muted(true); // Começa mudo para o navegador permitir o play
                    player.play();
                }

                // Inicia com Record RJ
                window.onload = () => {
                    change('https://eu1.jmvstream.com/w/lp-115/live.m3u8');
                };
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V8 NO AR!'));
