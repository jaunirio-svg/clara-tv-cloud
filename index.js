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
            <title>CLARA TV - SISTEMA OPERACIONAL</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #000; color: #d4af37; font-family: sans-serif; margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center; }
                .header { width: 100%; background: #111; padding: 15px; border-bottom: 2px solid #d4af37; text-align: center; font-weight: bold; }
                .player-box { width: 100%; max-width: 850px; aspect-ratio: 16/9; background: #050505; margin: 15px 0; border: 1px solid #222; }
                video { width: 100%; height: 100%; display: block; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; width: 95%; max-width: 850px; padding: 10px; }
                button { background: #1a1a1a; color: #fff; border: 1px solid #d4af37; padding: 12px; border-radius: 4px; cursor: pointer; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; }
                button:hover { background: #d4af37; color: #000; }
                .status-bar { font-size: 0.7rem; color: #666; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <div class="header">⭐ CLARA TV PRO - V27</div>
            
            <div class="player-box">
                <video id="video" controls autoplay playsinline></video>
            </div>
            <div class="status-bar">STATUS: SINAL ATIVO | MODO: HLS/ADAPTIVE</div>

            <div class="grid">
                <button onclick="play('https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8')">📺 TV BRASIL</button>
                <button onclick="play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 RECORD NEWS</button>
                <button onclick="play('https://jovempan-jovempan-1-br.samsung.wurl.com/manifest/playlist.m3u8')">📺 JOVEM PAN</button>
                <button onclick="play('https://samsung-samsungtvplus-3-br.samsung.wurl.com/manifest/playlist.m3u8')">🎬 SAMSUNG MOVIES</button>
                <button onclick="play('https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8')">🌍 RTP INTERNACIONAL</button>
            </div>

            <script>
                const video = document.getElementById('video');
                let hls = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });

                function play(url) {
                    if (Hls.isSupported()) {
                        hls.detachMedia();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            video.play().catch(() => {
                                video.muted = true;
                                video.play();
                            });
                        });
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                        video.play();
                    }
                }

                // Iniciar com Record News (Link mais estável)
                window.onload = () => play('https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8');
                
                // Recuperação de erro automática
                hls.on(Hls.Events.ERROR, function (event, data) {
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR: hls.startLoad(); break;
                            case Hls.ErrorTypes.MEDIA_ERROR: hls.recoverMediaError(); break;
                            default: hls.destroy(); break;
                        }
                    }
                });
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V27 - PRONTO PARA RODAR!'));
