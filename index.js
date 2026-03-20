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
            <title>CLARA TV CLOUD - FINAL</title>
            <style>
                body { background: #000; color: #d4af37; font-family: 'Segoe UI', sans-serif; margin: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid #d4af37; position: sticky; top: 0; z-index: 100; }
                .main-video { width: 100%; max-width: 900px; margin: 15px auto; aspect-ratio: 16/9; background: #050505; border: 2px solid #222; box-shadow: 0 0 20px rgba(212,175,55,0.2); }
                iframe { width: 100%; height: 100%; border: none; }
                .container { max-width: 1000px; margin: auto; padding-bottom: 50px; }
                .category { text-align: left; margin: 25px 15px 10px; border-left: 5px solid #d4af37; padding-left: 15px; font-weight: bold; text-transform: uppercase; font-size: 1.1rem; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; padding: 0 15px; }
                button { background: #1a1a1a; color: white; border: 1px solid #333; padding: 12px 5px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.8rem; transition: 0.3s; height: 55px; }
                button:hover { background: #d4af37; color: black; border-color: white; transform: scale(1.05); }
                .active { background: #d4af37 !important; color: black !important; font-weight: bold; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">CLOUD FINAL</span></h1></header>
            
            <div class="main-video">
                <iframe id="tv-frame" src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            </div>

            <div class="container">
                <div class="category">🇧🇷 TV ABERTA BRASIL</div>
                <div class="grid">
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC9UIsS5YI_6U2YI6I_6YI6A', this)">RECORD NEWS</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC88K7W_o3E0x0vA-u0612MA', this)">JOVEM PAN</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCvYyI6I6YI6I_6YI6A', this)">SBT (AO VIVO)</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCv_S7T_fshI8vG6X6X_6YI6A', this)">BAND NEWS</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC6uI1u3YI6I6YI6I_6YI6A', this)">TV CULTURA</button>
                </div>

                <div class="category">🎬 FILMES E SÉRIES 24H</div>
                <div class="grid">
                    <button onclick="change('https://www.youtube.com/embed/5_XEEpGEU_Y?autoplay=1', this)">FILMES DE AÇÃO</button>
                    <button onclick="change('https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1', this)">CINE PRIMER</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCvYyI6I6YI6I_6YI6A', this)">SÉRIES 24H</button>
                </div>

                <div class="category">🌎 MUNDO (NOTÍCIAS)</div>
                <div class="grid">
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCi8p6Zp6Yd9YmY6I_6YI6A', this)">EURONEWS (PT)</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC_qS1U_fshI8vG6X6X_6YI6A', this)">RTP (PORTUGAL)</button>
                    <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC16niRr50-MSBwiO3YWE3RA', this)">BBC NEWS</button>
                </div>
            </div>

            <script>
                function change(url, btn) {
                    document.getElementById('tv-frame').src = url;
                    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                    if(btn) btn.classList.add('active');
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA TV FINAL ONLINE!'));
