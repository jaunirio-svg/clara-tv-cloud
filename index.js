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
<title>CLARA TV CLOUD - BRASIL FULL</title>

<style>
body { background:#000; color:#d4af37; font-family:Segoe UI; margin:0; text-align:center; }
header { background:#111; padding:10px; border-bottom:2px solid #d4af37; }
.main { max-width:900px; margin:15px auto; aspect-ratio:16/9; border:2px solid #222; }
iframe { width:100%; height:100%; border:none; }
.category { text-align:left; margin:15px; color:#fff; border-left:4px solid #d4af37; padding-left:10px; }
.grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:8px; padding:0 10px; }
button { background:#111; color:#fff; border:1px solid #333; padding:8px; border-radius:6px; cursor:pointer; font-size:11px; }
button:hover { background:#d4af37; color:#000; }
.active { background:#d4af37 !important; color:#000 !important; }
</style>
</head>

<body>

<header><h2>📺 CLARA TV BRASIL AO VIVO</h2></header>

<div class="main">
<iframe id="tv" src="https://www.youtube.com/embed/live_stream?channel=UC88K7W_o3E0x0vA-u0612MA&autoplay=1" allow="autoplay"></iframe>
</div>

<div class="category">📡 CANAIS ABERTOS BRASIL</div>
<div class="grid">

<button onclick="ch('UC88K7W_o3E0x0vA-u0612MA',this)">JOVEM PAN</button>
<button onclick="ch('UC16niRr50-MSBwiO3YWE3RA',this)">CNN BRASIL*</button>
<button onclick="ch('UC6uI1u3YI6I6YI6I_6YI6A',this)">TV CULTURA</button>
<button onclick="ch('UCup_6t8WpX5C0v_6X-6YI6A',this)">REDETV</button>
<button onclick="ch('UC9UIsS5YI_6U2YI6I_6YI6A',this)">RECORD NEWS</button>

</div>

<div class="category">📰 NOTÍCIAS 24H</div>
<div class="grid">

<button onclick="ch('UC83XU9-p_30I9X3S7_6S9YA',this)">DW</button>
<button onclick="ch('UC704HOnnF_h8f_WpT8G_X-g',this)">FRANCE24</button>
<button onclick="ch('UC16niRr50-MSBwiO3YWE3RA',this)">BBC</button>

</div>

<div class="category">🎬 FILMES GRÁTIS</div>
<div class="grid">

<button onclick="vid('5_XEEpGEU_Y',this)">AÇÃO</button>
<button onclick="vid('Xm6_U6O6A_8',this)">TERROR</button>
<button onclick="vid('GOfX4V_66v8',this)">DESENHOS</button>

</div>

<script>
const frame = document.getElementById('tv');

function clearBtn(){
document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
}

function ch(id,el){
clearBtn();
el.classList.add('active');
frame.src="https://www.youtube.com/embed/live_stream?channel="+id+"&autoplay=1";
}

function vid(id,el){
clearBtn();
el.classList.add('active');
frame.src="https://www.youtube.com/embed/"+id+"?autoplay=1";
}
</script>

</body>
</html>
`);
});

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
