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
            <title>CLARA TV V30</title>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; text-align: center; }
                .main { width: 100%; max-width: 800px; margin: auto; padding: 10px; }
                .screen { width: 100%; aspect-ratio: 16/9; background: #111; border: 2px solid #333; margin-bottom: 20px; }
                iframe { width: 100%; height: 100%; border: none; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 15px; border-radius: 5px; cursor: pointer; font-weight: bold; }
                button:active { background: gold; color: #000; }
                .status { color: #555; font-size: 0.8rem; margin: 10px; }
            </style>
        </head>
        <body>
            <div class="main">
                <h2>⭐ CLARA TV <span style="color:white">V30</span></h2>
                <div class="screen">
                    <iframe id="player" src="https://www.youtube.com/embed/9UIsS5YI_6U?autoplay=1&mute=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="status">SINAL VIA EMBED EXTERNO (ANTI-BLOQUEIO)</div>
                <div class="grid">
                    <button onclick="go('9UIsS5YI_6U')">RECORD NEWS</button>
                    <button onclick="go('UCvYyI6I6YI')">SBT AO VIVO</button>
                    <button onclick="go('88K7W_o3E0x')">JOVEM PAN</button>
                    <button onclick="go('v_S7T_fshI8')">BAND NEWS</button>
                    <button onclick="go('9Auq9mYxFEE')">CINE PRIMER</button>
                </div>
                <p style="font-size: 0.7rem; color: #444; margin-top: 20px;">DICA: Se a imagem não aparecer, clique no título do vídeo dentro da tela.</p>
            </div>
            <script>
                function go(id) {
                    var p = document.getElementById('player');
                    // Tenta carregar como canal de stream ou vídeo comum
                    if(id.length > 11) {
                        p.src = "https://www.youtube.com/embed/live_stream?channel=" + id + "&autoplay=1";
                    } else {
                        p.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
                    }
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V30 NO AR!'));
