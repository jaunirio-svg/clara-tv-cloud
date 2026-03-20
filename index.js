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
            <title>CLARA TV CLOUD - GLOBAL ELITE</title>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <style>
                body { background: #050505; color: #eee; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; overflow-x: hidden; }
                header { background: linear-gradient(to bottom, #111, #000); padding: 15px; border-bottom: 2px solid #d4af37; position: sticky; top: 0; z-index: 1000; }
                h1 { color: #d4af37; font-size: 1.4rem; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
                .player-container { width: 100%; max-width: 900px; margin: 10px auto; background: #000; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                video { width: 100%; aspect-ratio: 16/9; background: #000; }
                .content { padding: 15px; max-width: 1000px; margin: auto; }
                .category-title { color: #d4af37; text-align: left; font-size: 1.1rem; font-weight: bold; border-left: 4px solid #d4af37; padding-left: 10px; margin: 20px 0 10px; text-transform: uppercase; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
                button { background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px 5px; border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: 0.3s; height: 55px; display: flex; align-items: center; justify-content: center; font-weight: 500; }
                button:hover { background: #d4af37; color: #000; border-color: #fff; transform: scale(1.03); }
                .active { background: #d4af37 !important; color: #000 !important; font-weight: bold; border: 2px solid #fff; }
                @media (max-width: 600px) { h1 { font-size: 1.1rem; } button { font-size: 0.75rem; } }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA <span style="color:white">TV CLOUD GLOBAL</span></h1></header>
            
            <div class="player-container"><video id="video" controls autoplay></video></div>

            <div class="content">
                <div class="category-title">🇧🇷 BRASIL & RIO DE JANEIRO</div>
                <div class="grid" id="br-grid"></div>

                <div class="category-title">🎬 FILMES E SÉRIES 24H</div>
                <div class="grid" id="movies-grid"></div>

                <div class="category-title">🌐 INTERNACIONAL (MUNDO)</div>
                <div class="grid" id="int-grid"></div>

                <div class="category-title">📰 NOTÍCIAS & DOCUMENTÁRIOS</div>
                <div class="grid" id="news-grid"></div>
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

                // --- LISTA DE CANAIS ---
                const brChannels = [
                    {n: "RECORD TV RJ", u: "https://eu1.jmvstream.com/w/lp-115/live.m3u8"},
                    {n: "SBT (ALT)", u: "https://cdn.jmvstream.com/w/lp-115/live.m3u8"},
                    {n: "TV BRASIL HD", u: "https://ebctv.akamaized.net/hls/live/2032080/tvbrasil/master.m3u8"},
                    {n: "REDE TV (ALT)", u: "https://RT-BRASIL.stmv.live/BRASIL/BRASIL/playlist.m3u8"},
                    {n: "CANAL GOV", u: "https://ebctv.akamaized.net/hls/live/2032082/canalgov/master.m3u8"}
                ];

                const movieChannels = [
                    {n: "PLUTO CINE SUCESSOS", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5692795899990b790a1c360c/master.m3u8"},
                    {n: "PLUTO FILMES AÇÃO", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/569279c699990b790a1c3614/master.m3u8"},
                    {n: "PLUTO TERROR", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5a3d4600e008ca115d978a3c/master.m3u8"},
                    {n: "SAMSUNG MOVIES", u: "https://samsung-samsungtvplus-1-br.samsung.wurl.com/manifest/playlist.m3u8"},
                    {n: "PLUTO SÉRIES", u: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/ch/5f318991754024000787e387/master.m3u8"}
                ];

                const intChannels = [
                    {n: "RTP INTERNACIONAL", u: "https://rtp-pull-clean.akamaized.net/liverepeater/smil:rtpi.smil/playlist.m3u8"},
                    {n: "DW DEUTSCH (ALE)", u: "https://dwstream72-lh.akamaihd.net/i/dwstream72_1@123556/master.m3u8"},
                    {n: "TV MONDE (FRA)", u: "https://ott.tv5monde.com/v1/hls/atv/67586940-d983-49d6-848f-3766627f6e07/a6067b5e-4c75-40b4-8390-8451f2f89f2f.m3u8"},
                    {n: "RT NEWS (RUS)", u: "https://rt-esp.akamaized.net/hls/live/2017749/esp/master.m3u8"},
                    {n: "RAI NEWS (ITA)", u: "https://rainewslive-lh.akamaihd.net/i/rainewslive@138406/master.m3u8"}
                ];

                const newsChannels = [
                    {n: "JOVEM PAN NEWS", u: "https://newstv-newstv-1-br.samsung.wurl.com/manifest/playlist.m3u8"},
                    {n: "CNN BRASIL (ALT)", u: "https://sh-01.stmv.live/cnn-brasil/cnn-brasil/playlist.m3u8"},
                    {n: "EURONEWS (ESP)", u: "https://euronews-euronews-portuguese-1-br.samsung.wurl.com/manifest/playlist.m3u8"},
                    {n: "RECORD NEWS", u: "https://recordnews-recordnews-1-br.samsung.wurl.com/manifest/playlist.m3u8"}
                ];

                function createGrid(list, gridId) {
                    const grid = document.getElementById(gridId);
                    list.forEach(c => {
                        const b = document.createElement('button');
                        b.innerText = c.n;
                        b.onclick = () => play(c.u, b);
                        grid.appendChild(b);
                    });
                }

                createGrid(brChannels, 'br-grid');
                createGrid(movieChannels, 'movies-grid');
                createGrid(intChannels, 'int-grid');
                createGrid(newsChannels, 'news-grid');

                play(brChannels[0].u); // Começa com Record RJ
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA GLOBAL ELITE ONLINE!'));
