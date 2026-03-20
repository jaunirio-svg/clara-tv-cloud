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
            <title>CLARA TV CLOUD V4</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #050505; color: #eee; font-family: sans-serif; margin: 0; text-align: center; }
                header { background: #111; padding: 10px; border-bottom: 2px solid gold; position: sticky; top: 0; z-index: 100; }
                .video-box { width: 100%; max-width: 800px; margin: 10px auto; background: #000; aspect-ratio: 16/9; border: 1px solid #333; }
                video { width: 100%; height: 100%; }
                .container { padding: 10px; max-width: 900px; margin: auto; }
                .cat { text-align: left; color: gold; font-weight: bold; margin: 15px 0 5px; border-left: 3px solid gold; padding-left: 10px; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 8px; }
                button { background: #222; color: #fff; border: 1px solid #444; padding: 10px 5px; border-radius: 5px; cursor: pointer; font-size: 0.75rem; min-height: 45px; }
                button:hover { background: gold; color: #000; }
                .status { font-size: 0.8rem; color: #888; margin-top: 5px; }
            </style>
        </head>
        <body>
            <header><h1 style="margin:0; font-size: 1.2rem; color: gold;">⭐ CLARA TV CLOUD</h1></header>
            
            <div class="video-box"><video id="video" controls autoplay muted></video></div>
            <div id="msg" class="status">Selecione um canal abaixo</div>

            <div class="container">
                <div class="cat">🇧🇷 BRASIL (LISTA ATUALIZADA)</div>
                <div class="grid" id="br"></div>

                <div class="cat">🎬 FILMES 24H</div>
                <div class="grid" id="movies"></div>

                <div class="cat">🌐 MUNDO (INT)</div>
                <div class="grid" id="int"></div>
            </div>

            <script>
                const video = document.getElementById('video');
                const msg = document.getElementById('msg');
                let hls = new Hls();

                function play(url, nome) {
                    msg.innerText = "Carregando: " + nome;
                    // Força HTTPS em links conhecidos
                    url = url.replace("http://", "https://");

                    if (Hls.isSupported()) {
                        hls.destroy();
                        hls = new Hls();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            video.play().catch(() => { msg.innerText = "Clique no Play para iniciar"; });
                            msg.innerText = "Assistindo: " + nome;
                        });
                        hls.on(Hls.Events.ERROR, () => { msg.innerText = "Erro: Canal fora do ar ou bloqueado"; });
                    }
                }

                // CANAIS TESTADOS E FUNCIONANDO (HTTPS)
                const canais = {
                    br: [
                        {n: "Record TV RJ", u: "https://eu1.jmvstream.com/w/lp-115/live.m3u8"},
                        {n: "TV Brasil HD", u: "https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8"},
                        {n: "Canal Gov", u: "https://ebctv.akamaized.net/hls/live/2032082/canalgov/master.m3u8"},
                        {n: "Jovem Pan News", u: "https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8"}
                    ],
                    movies: [
                        {n: "Pluto Cine Sucessos", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8"},
                        {n: "Pluto Ação", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8"},
                        {n: "MasterChef 24h", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5f318d19754024000787e3d1/master.m3u8"}
                    ],
                    int: [
                        {n: "RTP Internacional", u: "https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8"},
                        {n: "Euronews PT", u: "https://euronews-euronews-portuguese-1-br.samsung.wurl.com/manifest/playlist.m3u8"}
                    ]
                };

                function fill(arr, id) {
                    const g = document.getElementById(id);
                    arr.forEach(c => {
                        const b = document.createElement('button');
                        b.innerText = c.n;
                        b.onclick = () => play(c.u, c.n);
                        g.appendChild(b);
                    });
                }

                fill(canais.br, 'br');
                fill(canais.movies, 'movies');
                fill(canais.int, 'int');
                
                // Inicia com um canal estável
                play(canais.br[0].u, canais.br[0].n);
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V4 ONLINE!'));
