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
            <title>CLARA IPTV PRO</title>
            <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; padding: 0; }
                .container { width: 100%; max-width: 900px; margin: auto; }
                .video-js { width: 100% !important; height: auto; aspect-ratio: 16/9; border-bottom: 3px solid gold; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 20px; }
                button { background: #111; color: gold; border: 1px solid gold; padding: 15px; cursor: pointer; font-weight: bold; border-radius: 5px; text-transform: uppercase; font-size: 0.7rem; }
                button:active { background: gold; color: black; }
                .aviso { font-size: 0.8rem; color: #888; padding: 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <video id="player" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" data-setup='{"fluid": true}'>
                    <source src="https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8" type="application/x-mpegURL">
                </video>

                <div class="aviso">⚠️ SE NÃO ABRIR DE PRIMEIRA, CLIQUE NO CANAL E DÊ PLAY NO VÍDEO.</div>

                <div class="grid">
                    <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL (HD)</button>
                    <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PORTUGAL</button>
                    <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">RECORD NEWS</button>
                    <button onclick="play('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">JOVEM PAN</button>
                    <button onclick="play('https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8')">SAMSUNG MOVIES</button>
                    <button onclick="play('https://dwstream72-lh.akamaihd.net/i/dwstream72_1@123556/master.m3u8')">DW MUNDO</button>
                </div>
            </div>

            <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
            <script>
                var player = videojs('player');

                function play(url) {
                    player.src({
                        src: url,
                        type: 'application/x-mpegURL'
                    });
                    player.play();
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 IPTV V23 OPERACIONAL!'));
