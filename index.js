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
<title>CLARA TV CLOUD - GLOBAL</title>

<style>
body { background:#000; color:#d4af37; font-family:Segoe UI; margin:0; text-align:center; }
header { background:#111; padding:12px; border-bottom:2px solid #d4af37; }
.main { max-width:900px; margin:15px auto; aspect-ratio:16/9; border:2px solid #222; }
video, iframe { width:100%; height:100%; border:none; }
.category { text-align:left; margin:15px; color:#fff; border-left:4px solid #d4af37; padding-left:10px; }
.grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:8px; padding:0 10px; }
button { background:#111; color:#fff; border:1px solid #333; padding:8px; border-radius:6px; cursor:pointer; font-size:11px; }
button:hover { background:#d4af37; color:#000; }
.active { background:#d4af37 !important; color:#000 !important; }
</style>

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

</head>

<body>

<header><h2>⭐ CLARA TV CLOUD</h2></header>

<div class="main">
<video id="tv" controls autoplay></video>
</div>

<div class="category">📡 BRASIL AO VIVO</div>
<div class="grid">

<button onclick="play('https://cdn-01-vidtvbrasil.soulweb.com.br/recordnews/recordnews/playlist.m3u8',this)">RECORD NEWS ✔</button>

<button onclick="play('https://video01.logicahost.com.br/tvcultura/tvcultura/playlist.m3u8',this)">TV CULTURA ✔</button>

<button onclick="play('https://video01.logicahost.com.br/redetv/redetv/playlist.m3u8',this)">REDETV ✔</button>

</div>

<div class="category">🌎 INTERNACIONAL</div>
<div class="grid">

<button onclick="play('https://dwstream3-lh.akamaihd.net/i/dwstream3_live@124409/master.m3u8',this)">DW NEWS ✔</button>

<button onclick="play('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',this)">DEMO GLOBAL ✔</button>

</div>

<div class="category">🎬 FILMES (YOUTUBE)</div>
<div class="grid">

<button onclick="yt('5_XEEpGEU_Y',this)">AÇÃO</button>

<button onclick="yt('Xm6_U6O6A_8',this)">TERROR</button>

<button onclick="yt('GOfX4V_66v8',this)">DESENHOS</button>

</div>

<script>
const video = document.getElementById('tv');
let hls;

function clearBtn(){
document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
}

function play(url,el){
clearBtn();
el.classList.add('active');

if(hls){ hls.destroy(); }

if(Hls.isSupported()){
hls = new Hls();
hls.loadSource(url);
hls.attachMedia(video);
video.play();
}else{
video.src = url;
video.play();
}
}

function yt(id,el){
clearBtn();
el.classList.add('active');

if(hls){ hls.destroy(); }

video.outerHTML = '<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1" allow="autoplay"></iframe>';
}
</script>

</body>
</html>
`);
});

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
