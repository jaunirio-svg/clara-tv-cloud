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
            <title>CLARA TV CLOUD - V18 FINAL</title>
            <style>
                body { background: #000; color: #d4af37; font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; text-align: center; }
                header { background: linear-gradient(to bottom, #1a1a1a, #000); padding: 15px; border-bottom: 2px solid #d4af37; position: sticky; top: 0; z-index: 100; }
                .main-screen { width: 100%; max-width: 900px; margin: 15px auto; aspect-ratio: 16/9; background: #000; border: 2px solid #222; box-shadow: 0 0 30px rgba(212,175,55,0.3); }
                iframe { width: 100%; height: 100%; border: none; }
                .container { max-width: 1000px; margin: auto; padding-bottom: 50px; }
                .category { text-align: left; margin: 20px 15px 10px; color: #fff; font-weight: bold; border-left: 4px solid #d4af37; padding-left: 10px; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(135px, 1fr)); gap: 10px; padding: 0 15px; }
                button { background: #111; color: #eee; border: 1px solid #333; padding: 10px 5px; border-radius: 8px; cursor: pointer; font-size: 0.72rem; transition: 0.2s; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                button:hover { background: #d4af37; color: #000; transform: scale(1.05); }
                .active { background: #d4af37 !important; color: #000 !important; border: 2px solid #fff; }
                .status-dot { height: 8px; width: 8px; background-color: #2ecc71; border-radius: 50%; display: inline-block; margin-right: 5px; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA <span style="color:white">TV CLOUD V18</span></h1></header>
            
            <div class="main-screen">
                <iframe id="tv-frame" src="https://www.youtube.com/embed/live_stream?channel=UCvYyI6I6YI6I_6YI6A&autoplay=1" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            </div>

            <div class="container">
                <div class="category"><span class="status-dot"></span> 🇧🇷 BRASIL - CANAIS ABERTOS</div>
                <div class="grid">
                    <button onclick="ch('UCvYyI6I6YI6I_6YI6A', this)">SBT AO VIVO</button>
                    <button onclick="ch('UC9UIsS5YI_6U2YI6I_6YI6A', this)">RECORD NEWS</button>
                    <button onclick="ch('UC88K7W_o3E0x0vA-u0612MA', this)">JOVEM PAN NEWS</button>
                    <button onclick="ch('UCv_S7T_fshI8vG6X6X_6YI6A', this)">BAND NEWS</button>
                    <button onclick="ch('UC6uI1u3YI6I6YI6I_6YI6A', this)">TV CULTURA</button>
                    <button onclick="ch('UCup_6t8WpX5C0v_6X-6YI6A', this)">REDE TV</button>
                    <button onclick="ch('UCZp9Y6I_6YI6I_6YI6A', this)">TV BRASIL</button>
                </div>

                <div class="category"><span class="status-dot"></span> 🎬 FILMES & DESENHOS 24H</div>
                <div class="grid">
                    <button onclick="ext('5_XEEpGEU_Y', this)">FILMES AÇÃO</button>
                    <button onclick="ext('9Auq9mYxFEE', this)">CINE PRIMER</button>
                    <button onclick="ext('GOfX4V_66v8', this)">DESENHOS 24H</button>
                    <button onclick="ext('p9I2vS_K4Wc', this)">SÉRIES RETRÔ</button>
                    <button onclick="ext('Xm6_U6O6A_8', this)">TERROR 24H</button>
                    <button onclick="ext('Y6I_6YI6I_6', this)">DOCUMENTÁRIOS</button>
                </div>

                <div class="category"><span class="status-dot"></span> 🌍 INTERNACIONAL</div>
                <div class="grid">
                    <button onclick="ch('UC_qS1U_fshI8vG6X6X_6YI6A', this)" class="active">RTP PORTUGAL</button>
                    <button onclick="ch('UCi8p6Zp6Yd9YmY6I_6YI6A', this)">EURONEWS (PT)</button>
                    <button onclick="ch('UC16niRr50-MSBwiO3YWE3RA', this)">BBC NEWS (UK)</button>
                    <button onclick="ch('UC83XU9-p_30I9X3S7_6S9YA', this)">DW (ALEMANHA)</button>
                    <button onclick="ch('UC704HOnnF_h8f_WpT8G_X-g', this)">FRANCE 24 (FR)</button>
                </div>
            </div>

            <script>
                function ch(id, btn) {
                    document.getElementById('tv-frame').src = 'https://www.youtube.com/embed/live_stream?channel=' + id + '&autoplay=1';
                    updateUI(btn);
                }
                function ext(id, btn) {
                    document.getElementById('tv-frame').src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
                    updateUI(btn);
                }
                function updateUI(btn) {
                    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V18 FINAL ONLINE!'));
