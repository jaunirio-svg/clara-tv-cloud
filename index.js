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
            <title>CLARA TV CLOUD - ELITE</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #080808; color: #eee; font-family: 'Segoe UI', sans-serif; margin: 0; padding: 10px; text-align: center; }
                h1 { color: #d4af37; font-size: 1.5rem; text-shadow: 0 0 10px rgba(212,175,55,0.5); }
                .player-box { width: 100%; max-width: 850px; margin: auto; border: 2px solid #d4af37; border-radius: 15px; background: #000; overflow: hidden; position: sticky; top: 10px; z-index: 100; }
                video { width: 100%; aspect-ratio: 16/9; }
                .container { max-width: 900px; margin: auto; padding-top: 20px; }
                .category { text-align: left; border-left: 5px solid #d4af37; padding-left: 10px; margin: 25px 0 10px; font-weight: bold; color: #d4af37; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
                button { background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px 5px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: 0.2s; height: 50px; overflow: hidden; }
                button:hover { background: #d4af37; color: #000; font-weight: bold; border-color: #fff; }
                .active { background: #d4af37 !important; color: #000 !important; font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>⭐ CLARA <span style="color:white">TV CLOUD</span></h1>
            <div class="player-box"><video id="video" controls autoplay></video></div>

            <div class="container">
                <div class="category">🎥 FILMES E SÉRIES (PLUTO TV)</div>
                <div class="grid" id="pluto-list"></div>

                <div class="category">📺 CANAIS DO BRASIL & RJ</div>
                <div class="grid" id="br-list"></div>

                <div class="category">🌎 INTERNACIONAL GRATUITO</div>
                <div class="grid" id="int-list"></div>
            </div>

            <script>
                const video = document.getElementById('video');
                const hls = new Hls();

                function play(url, btn) {
                    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                    if(btn) btn.classList.add('active');
                    
                    if (Hls.isSupported()) {
                        hls.loadSource(url); hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url; video.play();
                    }
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }

                // CONFIGURAÇÃO DOS CANAIS AUTOMÁTICOS
                const chPluto = [
                    {n: "Pluto Cine Sucessos", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8"},
                    {n: "Pluto Filmes Ação", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8"},
                    {n: "Pluto TV Terror", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5a3d4600e008ca115d978a3c/master.m3u8"},
                    {n: "Pluto TV Comédia", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/56927af899990b790a1c3621/master.m3u8"},
                    {n: "MasterChef 24h", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5f318d19754024000787e3d1/master.m3u8"}
                ];

                const chBR = [
                    {n: "Record TV RJ", u: "https://eu1.jmvstream.com/w/lp-115/live.m3u8"},
                    {n: "TV Brasil HD", u: "https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8"},
                    {n: "SBT (Alternativo)", u: "https://cdn.jmvstream.com/w/lp-115/live.m3u8"},
                    {n: "Canal Gov", u: "https://ebctv.akamaized.net/hls/live/2032082/canalgov/master.m3u8"},
                    {n: "Jovem Pan News", u: "https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8"}
                ];

                function loadGrid(list, elementId) {
                    const grid = document.getElementById(elementId);
                    list.forEach(c => {
                        const b = document.createElement('button');
                        b.innerText = c.n;
                        b.onclick = () => play(c.u, b);
                        grid.appendChild(b);
                    });
                }

                loadGrid(chPluto, 'pluto-list');
                loadGrid(chBR, 'br-list');
                play(chPluto[0].u); // Começa com o primeiro filme
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA CLOUD ELITE ATIVA!'));
