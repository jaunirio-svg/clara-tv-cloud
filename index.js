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
            <title>CLARA TV CLOUD V20</title>
            <style>
                body { background: #000; color: #d4af37; font-family: sans-serif; margin: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid #d4af37; }
                .screen-box { width: 100%; max-width: 850px; margin: 15px auto; aspect-ratio: 16/9; background: #050505; border: 2px solid #333; position: relative; }
                iframe { width: 100%; height: 100%; border: none; display: none; }
                #placeholder { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #888; }
                .cat { text-align: left; margin: 20px 15px 5px; color: gold; font-weight: bold; border-left: 4px solid gold; padding-left: 10px; font-size: 0.8rem; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 0 15px; margin-bottom: 20px; }
                button { background: #1a1a1a; color: white; border: 1px solid #444; padding: 10px; border-radius: 6px; cursor: pointer; font-size: 0.7rem; height: 50px; font-weight: bold; }
                button:hover { background: gold; color: black; border-color: white; }
                .active { background: gold !important; color: black !important; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">V20</span></h1></header>
            
            <div class="screen-box">
                <div id="placeholder">ESCOLHA UM CANAL ABAIXO PARA INICIAR</div>
                <iframe id="main-tv" allowfullscreen allow="autoplay"></iframe>
            </div>

            <div class="cat">📺 TV ABERTA</div>
            <div class="grid">
                <button onclick="ch('UCvYyI6I6YI6I_6YI6A', this)">SBT</button>
                <button onclick="ch('UC9UIsS5YI_6U2YI6I_6YI6A', this)">RECORD NEWS</button>
                <button onclick="ch('UCv_S7T_fshI8vG6X6X_6YI6A', this)">BAND NEWS</button>
                <button onclick="ch('UC6uI1u3YI6I6YI6I_6YI6A', this)">TV CULTURA</button>
                <button onclick="ch('UCup_6t8WpX5C0v_6X-6YI6A', this)">REDE TV</button>
            </div>

            <div class="cat">⚽ ESPORTES & DOCS</div>
            <div class="grid">
                <button onclick="ch('UC88K7W_o3E0x0vA-u0612MA', this)">JOVEM PAN ESPORTES</button>
                <button onclick="ext('p9I2vS_K4Wc', this)">SÉRIES RETRÔ</button>
                <button onclick="ext('UCvYyI6I6YI6I_6YI6A', this)">DOCUMENTÁRIOS</button>
            </div>

            <div class="cat">🙏 RELIGIOSOS</div>
            <div class="grid">
                <button onclick="ch('UCY9Y6I_6YI6I_6YI6A', this)">TV APARECIDA</button>
                <button onclick="ch('UCvI6YI6YI6I_6YI6A', this)">CANÇÃO NOVA</button>
                <button onclick="ch('UCi8p6Zp6Yd9YmY6I_6YI6A', this)">TV EVANGELIZAR</button>
            </div>

            <script>
                function ch(id, btn) {
                    const frame = document.getElementById('main-tv');
                    const holder = document.getElementById('placeholder');
                    holder.style.display = 'none';
                    frame.style.display = 'block';
                    frame.src = 'https://www.youtube.com/embed/live_stream?channel=' + id + '&autoplay=1&mute=0';
                    updateBtn(btn);
                }
                function ext(id, btn) {
                    const frame = document.getElementById('main-tv');
                    const holder = document.getElementById('placeholder');
                    holder.style.display = 'none';
                    frame.style.display = 'block';
                    frame.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&mute=0';
                    updateBtn(btn);
                }
                function updateBtn(btn) {
                    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V20 ONLINE!'));
