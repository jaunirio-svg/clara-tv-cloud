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
            <style>
                body { background: #000; color: #d4af37; font-family: sans-serif; margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center; }
                header { width: 100%; background: #111; padding: 15px; border-bottom: 2px solid #d4af37; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
                .video-wrapper { width: 95%; max-width: 800px; margin: 20px 0; background: #050505; border: 1px solid #333; aspect-ratio: 16/9; position: relative; }
                video { width: 100%; height: 100%; background: #000; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; width: 95%; max-width: 800px; padding: 10px; }
                button { background: #1a1a1a; color: #d4af37; border: 1px solid #d4af37; padding: 12px; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 0.7rem; text-transform: uppercase; transition: 0.2s; }
                button:active { background: #d4af37; color: #000; }
                .instrucao { color: #888; font-size: 0.75rem; margin-top: 5px; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">V25</span></h1></header>
            
            <div class="video-wrapper">
                <video id="tv" controls autoplay playsinline>
                    <source id="source" src="https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8" type="application/x-mpegURL">
                    Seu navegador não suporta IPTV nativo.
                </video>
            </div>

            <div class="instrucao">Se o vídeo não abrir, clique no canal e **aperte o PLAY** no centro da tela.</div>

            <div class="grid">
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">TV BRASIL</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">RTP PORTUGAL</button>
                <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">RECORD NEWS</button>
                <button onclick="play('https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8')">JOVEM PAN</button>
                <button onclick="play('https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8')">SAMSUNG FILMES</button>
            </div>

            <script>
                function play(url) {
                    const v = document.getElementById('tv');
                    v.src = url;
                    v.play().catch(e => console.log("Clique no Play para iniciar"));
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V25 OPERACIONAL!'));
