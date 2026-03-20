const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CLARA TV - TESTE DE SINAL</title>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; text-align: center; margin: 0; }
                header { background: #111; padding: 15px; border-bottom: 2px solid gold; }
                .video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 800px; margin: 20px auto; border: 2px solid #333; }
                .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; padding: 20px; max-width: 900px; margin: auto; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 15px; cursor: pointer; font-weight: bold; border-radius: 8px; }
            </style>
        </head>
        <body>
            <header><h1>⭐ CLARA TV <span style="color:white">TESTE DE FORÇA</span></h1></header>
            
            <div class="video-container">
                <iframe id="tv-frame" src="https://www.youtube.com/embed/live_stream?channel=UC9UIsS5YI_6U2YI6I_6YI6A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>

            <div class="grid">
                <button onclick="change('https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1')">📺 CANAL TESTE 1</button>
                <button onclick="change('https://www.youtube.com/embed/5_XEEpGEU_Y?autoplay=1')">📺 CANAL TESTE 2</button>
                <button onclick="change('https://www.youtube.com/embed/live_stream?channel=UCi8p6Zp6Yd9YmY6I_6YI6A')">📺 TESTE AO VIVO</button>
            </div>

            <script>
                function change(url) {
                    document.getElementById('tv-frame').src = url;
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 TESTE DE FORÇA ONLINE!'));
