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
            <title>CLARA TV CLOUD - OFICIAL</title>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid gold; }
                .player-wrapper { width: 100%; max-width: 850px; margin: 15px auto; aspect-ratio: 16/9; border: 2px solid #222; background: #050505; }
                iframe { width: 100%; height: 100%; border: none; }
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; padding: 20px; max-width: 900px; margin: auto; }
                button { background: #1a1a1a; color: white; border: 1px solid gold; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.75rem; }
                button:hover { background: gold; color: black; }
                .cat { text-align: left; margin: 20px 20px 5px; color: gold; font-weight: bold; border-left: 4px solid gold; padding-left: 10px; text-transform: uppercase; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">CLOUD V12</span></h1></header>
            
            <div class="player-wrapper">
                <iframe id="main-player" src="https://www.youtube.com/embed/live_stream?channel=UC88K7W_o3E0x0vA-u0612MA" allowfullscreen allow="autoplay"></iframe>
            </div>

            <div class="cat">📺 CANAIS AO VIVO (OFICIAL)</div>
            <div class="grid">
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC88K7W_o3E0x0vA-u0612MA')">JOVEM PAN NEWS</button>
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC9UIsS5YI_6U2YI6I_6YI6A')">RECORD NEWS</button>
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC6uI1u3YI6I6YI6I_6YI6A')">CNN BRASIL</button>
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCv_S7T_fshI8vG6X6X_6YI6A')">BAND JORNALISMO</button>
            </div>

            <div class="cat">🎬 FILMES E ENTRETENIMENTO</div>
            <div class="grid">
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCvYyI6I6YI6I_6YI6A')">SBT AO VIVO</button>
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UC6uI1u3YI6I6YI6I_6YI6A')">TV CULTURA</button>
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCvYyI6I6YI6I_6YI6A')">PLUTO TV (LINK EXTERNO)</button>
            </div>

            <script>
                function change(url) {
                    document.getElementById('main-player').src = url;
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 CLARA V12 ESTÁVEL!'));
