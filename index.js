const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>CLARA TV DEFINITIVA</title>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; text-align: center; }
                .video-box { width: 100vw; height: 60vh; background: #111; border-bottom: 2px solid gold; }
                iframe { width: 100%; height: 100%; border: none; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; padding: 20px; }
                button { background: #222; color: gold; border: 1px solid gold; padding: 15px; cursor: pointer; font-weight: bold; border-radius: 5px; }
                button:active { background: gold; color: #000; }
            </style>
        </head>
        <body>
            <div class="video-box">
                <iframe id="tv" src="https://www.youtube.com/embed/9UIsS5YI_6U?autoplay=1&mute=1&showinfo=0&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            
            <h3>Selecione o Canal:</h3>
            <div class="grid">
                <button onclick="ch('9UIsS5YI_6U')">RECORD NEWS</button>
                <button onclick="ch('88K7W_o3E0x')">JOVEM PAN</button>
                <button onclick="ch('v_S7T_fshI8')">BAND NEWS</button>
                <button onclick="ch('6uI1u3YI6I6')">TV CULTURA</button>
                <button onclick="ch('vYyI6I6YI6I')">SBT</button>
                <button onclick="ch('p9I2vS_K4Wc')">FILMES 24H</button>
            </div>

            <script>
                function ch(id) {
                    // O segredo está em atualizar o SRC inteiro para forçar o reload do vídeo
                    document.getElementById('tv').src = "https://www.youtube.com/embed/" + id + "?autoplay=1&mute=0&showinfo=0&rel=0";
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V22 NA FORÇA BRUTA!'));
