const buildingsData = {
    "arcibet": { name: "ArciBet Kasíno", x: 74, y: 76, img: "buda_arcibet.png", detail: "mapa-arcibet.png", action: "openArciCasino" },
    "kostol": { name: "Kostol", x: 23, y: 15, img: "buda_kostol.png", detail: "mapa-kostol.png", action: "openGameCalendar" },
    "udrzba": { name: "Údržba", x: 8, y: 35, img: "buda_udrzba.png", detail: "mapa-udrzba.png", action: "openSettings" }
    // Sem neskôr dopíšeme zvyšných 26 budov...
};

function startArciCityGame() {
    const container = document.getElementById('arci-city-game-container');
    container.style.display = 'block';
    
    container.innerHTML = `
        <div class="map-wrapper" id="mapWrapper">
            <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)">
            <img src="panáčik_stoji.png" id="player-character" style="left: 50%; top: 50%;">
            <div id="buildingsLayer"></div>
        </div>
        <button onclick="document.getElementById('arci-city-game-container').style.display='none'" 
                style="position:fixed; top:20px; right:20px; z-index:1000000; padding:10px;">ZATVORIŤ MAPU</button>
    `;

    renderBuildings();
}

function renderBuildings() {
    const layer = document.getElementById('buildingsLayer');
    for (let key in buildingsData) {
        const b = buildingsData[key];
        const img = document.createElement('img');
        img.src = b.img;
        img.className = 'building';
        img.style.left = b.x + '%';
        img.style.top = b.y + '%';
        img.style.zIndex = Math.floor(b.y); // Jednoduchý Y-sorting
        img.onclick = (e) => {
            e.stopPropagation();
            moveToBuilding(key);
        };
        layer.appendChild(img);
    }
}

function handleMapClick(e) {
    const wrapper = document.getElementById('mapWrapper');
    const rect = wrapper.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    movePlayer(x, y);
}

function movePlayer(x, y) {
    const player = document.getElementById('player-character');
    player.style.left = x + '%';
    player.style.top = y + '%';
    player.style.zIndex = Math.floor(y);
}

function moveToBuilding(key) {
    const b = buildingsData[key];
    movePlayer(b.x, b.y);
    
    // Počkáme 1 sekundu (kým panáčik dokĺže) a otvoríme detail
    setTimeout(() => {
        alert("Prišiel si k budove: " + b.name + ". Teraz by sa otvorila fotka " + b.detail);
        // Tu neskôr napojíme tvoju funkciu window[b.action]()
    }, 1000);
}
