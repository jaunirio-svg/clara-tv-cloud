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
            <title>CLARA TV CLOUD V9</title>
            <script src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; padding: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid gold; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
                #player { width: 100%; max-width: 850px; margin: 15px auto; aspect-ratio: 16/9; background: #050505; border: 1px solid #222; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 20px; max-width: 900px; margin: auto; }
                button { background: #1a1a1a; color: white; border: 1px solid gold; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.75rem; transition: 0.3s; }
                button:hover { background: gold; color: black; }
                .cat { text-align: left; margin: 20px 20px 5px; color: gold; font-weight: bold; border-left: 4px solid gold; padding-left: 10px; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">CLOUD V9</span></h1></header>
            
            <div id="player"></div>
            <p style="font-size: 0.8rem; color: #888;">💡 Se o canal não abrir, clique no botão novamente.</p>

            <div class="cat">🇧🇷 TV ABERTA BRASIL</div>
            <div class="grid">
                <button onclick="change('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL HD</button>
                <button onclick="change('https://eu1.jmvstream.com/w/lp-115/live.m3u8')">RECORD TV RJ</button>
                <button onclick="change('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">RECORD NEWS</button>
                <button onclick="change('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">JOVEM PAN NEWS</button>
            </div>

            <div class="cat">🎬 FILMES & SÉRIES 24H</div>
            <div class="grid">
                <button onclick="change('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8')">PLUTO CINE</button>
                <button onclick="change('https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8')">PLUTO AÇÃO</button>
                <button onclick="change('https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8')">SAMSUNG MOVIES</button>
            </div>

            <div class="cat">🌍 MUNDO</div>
            <div class="grid">
                <button onclick="change('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PORTUGAL</button>
                <button onclick="change('https://euronews-euronews-portuguese-1-br.samsung.wurl.com/manifest/playlist.m3u8')">EURONEWS PT</button>
            </div>

            <script>
                var player = new Clappr.Player({
                    source: 'https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8',
                    parentId: '#player',
                    width: '100%',
                    height: '100%',
                    autoPlay: false,
                    mute: true, // Obrigatório para navegadores permitirem carregar
                    mimeType: 'application/x-mpegURL'
                });

                function change(url) {
                    player.load(url);
                    player.play();
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V9 ONLINE!'));
