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
            <title>CLARA TV V29 - OFICIAL</title>
            <style>
                body { background: #000; color: gold; font-family: sans-serif; margin: 0; text-align: center; }
                header { background: #111; padding: 15px; border-bottom: 2px solid gold; font-weight: bold; }
                .video-container { width: 100%; max-width: 850px; margin: 15px auto; aspect-ratio: 16/9; background: #050505; border: 1px solid #333; }
                iframe { width: 100%; height: 100%; border: none; }
                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; padding: 20px; max-width: 850px; margin: auto; }
                button { background: #1a1a1a; color: #fff; border: 1px solid gold; padding: 12px; border-radius: 5px; cursor: pointer; font-size: 0.75rem; font-weight: bold; }
                button:hover { background: gold; color: #000; }
                .aviso { font-size: 0.7rem; color: #777; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <header>⭐ CLARA TV <span style="color:white">V29 - SINAL REAL</span></header>
            
            <div class="video-container">
                <iframe id="tela" src="https://www.youtube.com/embed/9UIsS5YI_6U?autoplay=1" allowfullscreen allow="autoplay"></iframe>
            </div>
            
            <div class="aviso">SE O CANAL NÃO ABRIR, CLIQUE NO BOTÃO E DEPOIS NO "PLAY" NO MEIO DA TELA</div>

            <div class="grid">
                <button onclick="change('https://www.youtube.com/embed/9UIsS5YI_6U')">RECORD NEWS</button>
                <button onclick="change('https://www.youtube.com/embed/9Auq9mYxFEE')">CINE PRIMER</button>
                <button onclick="change('https://www.youtube.com/embed/UCvYyI6I6YI')">SBT AO VIVO</button>
                <button onclick="change('https://www.youtube.com/embed/5_XEEpGEU_Y')">FILMES AÇÃO</button>
                <button onclick="change('https://www.youtube.com/embed/88K7W_o3E0x')">JOVEM PAN</button>
                <button onclick="change('https://www.youtube.com/embed/v_S7T_fshI8')">BAND NEWS</button>
            </div>

            <script>
                function change(url) {
                    // Adiciona parâmetros de autoplay e mute para garantir o carregamento
                    document.getElementById('tela').src = url + "?autoplay=1&mute=0";
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log('🚀 V29 ONLINE!'));
