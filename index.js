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
            <style>
                body { background: #000; color: #d4af37; font-family: sans-serif; margin: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid #d4af37; position: sticky; top: 0; z-index: 100; }
                .screen { width: 100%; max-width: 850px; margin: 15px auto; aspect-ratio: 16/9; background: #050505; border: 2px solid #222; }
                iframe { width: 100%; height: 100%; border: none; }
                .cat { text-align: left; margin: 20px 15px 5px; color: gold; font-weight: bold; border-left: 4px solid gold; padding-left: 10px; font-size: 0.9rem; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 8px; padding: 0 15px; }
                button { background: #1a1a1a; color: white; border: 1px solid #333; padding: 10px 5px; border-radius: 6px; cursor: pointer; font-size: 0.75rem; height: 50px; transition: 0.3s; }
                button:hover { background: #d4af37; color: black; font-weight: bold; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">CLOUD V14</span></h1></header>
            
            <div class="screen">
                <iframe id="main-tv" src="https://www.youtube.com/embed/live_stream?channel=UC9UIsS5YI_6U2YI6I_6YI6A&autoplay=1" allowfullscreen allow="autoplay"></iframe>
            </div>

            <div class="cat">📺 CANAIS ABERTOS (OFICIAIS)</div>
            <div class="grid">
                <button onclick="ch('UC9UIsS5YI_6U2YI6I_6YI6A')">RECORD NEWS</button>
                <button onclick="ch('UC88K7W_o3E0x0vA-u0612MA')">JOVEM PAN</button>
                <button onclick="ch('UCv_S7T_fshI8vG6X6X_6YI6A')">BAND JORNALISMO</button>
                <button onclick="ch('UCvYyI6I6YI6I_6YI6A')">SBT AO VIVO</button>
                <button onclick="ch('UC6uI1u3YI6I6YI6I_6YI6A')">TV CULTURA</button>
                <button onclick="ch('UCvYyI6I6YI6I_6YI6A')">REDE TV (OFF)</button>
            </div>

            <div class="cat">🎥 FILMES, DESENHOS E SÉRIES</div>
            <div class="grid">
                <button onclick="ext('https://www.youtube.com/embed/5_XEEpGEU_Y')">FILMES AÇÃO</button>
                <button onclick="ext('https://www.youtube.com/embed/9Auq9mYxFEE')">CINE PRIMER</button>
                <button onclick="ext('https://www.youtube.com/embed/GOfX4V_66v8')">DESENHOS 24H</button>
                <button onclick="ext('https://www.youtube.com/embed/p9I2vS_K4Wc')">SÉRIES RETRÔ</button>
            </div>

            <div class="cat">🌍 INTERNACIONAL</div>
            <div class="grid">
                <button onclick="ch('UCi8p6Zp6Yd9YmY6I_6YI6A')">EURONEWS PT</button>
                <button onclick="ch('UC_qS1U_fshI8vG6X6X_6YI6A')">RTP PORTUGAL</button>
            </div>

            <script>
                function ch(id) {
                    document.getElementById('main-tv').src = 'https://www.youtube.com/embed/live_stream?channel=' + id + '&autoplay=1';
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
                function ext(url) {
                    document.getElementById('main-tv').src = url + '?autoplay=1';
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V14 ESTÁVEL!'));
