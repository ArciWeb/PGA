// ==========================================
// 1. DÁTA BUDOV A SÚRADNICE
// ==========================================

const buildingsData = {
    "udrzba": { name: "Údržba", x: 6.8, y: 37.5, img: "buda_udrzba.png", detail: "mapa-udrzba.png", action: "openSettings" },
    "kostol": { name: "Kostol", x: 21.0, y: 15.5, img: "buda_kostol.png", detail: "mapa-kostol.png", action: "openGameCalendar" },
    "arcibot": { name: "ArciBot", x: 11.2, y: 58.5, img: "buda_arcibot.png", detail: "mapa-arcibot.png", action: "openAiAssistant" },
    "osobne": { name: "Osobné úspechy", x: 10.5, y: 79.0, img: "buda_zahradka.png", detail: "mapa-personal.png", action: "openPersonalAchievements" },
    "stadion": { name: "Štadión", x: 22.5, y: 50.5, img: "buda_stadion.png", detail: "mapa-cards.png", action: "showGlobalPlayerCards" },
    "banka": { name: "Net Worth Banka", x: 22.2, y: 69.5, img: "buda_banka.png", detail: "mapa-bank.png", action: "openNetWorth" }, // Opravený preklep v action
    "global": { name: "Globálne úspechy", x: 20.5, y: 89.5, img: "buda_tabula.png", detail: "mapa-global.png", action: "openGlobalAchievementsList" },
    "sponsor": { name: "Sponsor Palác", x: 37.5, y: 12.5, img: "buda_palac.png", detail: "mapa-sponsor.png", action: "openSponsorInfo" },
    "kniznica": { name: "Knižnica", x: 39.5, y: 42.5, img: "buda_kniznica.png", detail: "mapa-hof.png", action: "openHallOfFame" },
    "invest": { name: "ArciInvest", x: 34.2, y: 78.5, img: "buda_arciinvest.png", detail: "mapa-invest.png", action: "openArciInvest" },
    "bankomat": { name: "Bankomat", x: 28.5, y: 63.5, img: "buda_bankomat.png", detail: "mapa-balance.png", action: "openMyPlayer" },
    "official": { name: "Official Rank", x: 49.5, y: 25.5, img: "buda_official.png", detail: "mapa-official.png", action: "showRankTable('Official')" },
    "pga": { name: "PGA Rank", x: 55.5, y: 23.0, img: "buda_pga.png", detail: "mapa-pga.png", action: "showRankTable('PGA')" },
    "vila": { name: "Moja Vila", x: 51.5, y: 47.5, img: "buda_vila.png", detail: "mapa-villa.png", action: "openLifestyleManager" },
    "shop": { name: "ArciShop", x: 44.5, y: 73.5, img: "buda_arcishop.png", detail: "mapa-shop.png", action: "openArciShop" },
    "fedex": { name: "Fedex Rank", x: 62.5, y: 29.5, img: "buda_fedex.png", detail: "mapa-fedex.png", action: "showRankTable('FEDEX')" },
    "super": { name: "Súperov dom", x: 60.5, y: 49.5, img: "buda_super.png", detail: "mapa-vs.png", action: "openComparator" },
    "cards": { name: "ArciCards", x: 56.5, y: 75.5, img: "buda_arcicards.png", detail: "mapa-arcicards.png", action: "openArciCardsHub" },
    "players": { name: "Players Rank", x: 69.5, y: 23.0, img: "buda_players.png", detail: "mapa-players.png", action: "showRankTable('Association')" },
    "gym": { name: "Telocvičňa", x: 67.5, y: 50.5, img: "buda_gym.png", detail: "mapa-trophy.png", action: "openTrophyGallery" },
    "tip": { name: "ArciTip", x: 65.5, y: 76.5, img: "buda_arcitip.png", detail: "mapa-tip.png", action: "openArciTip" },
    "world": { name: "World Tour Rank", x: 74.5, y: 32.5, img: "buda_worldtour.png", detail: "mapa-worldtour.png", action: "showRankTable('Tour')" },
    "noviny": { name: "Novinový stánok", x: 75.5, y: 49.5, img: "buda_noviny.png", detail: "mapa-news.png", action: "openArciNews" },
    "casino": { name: "ArciBet Casino", x: 75.5, y: 74.5, img: "buda_arcibet.png", detail: "mapa-arcibet.png", action: "openArciCasino" },
    "ea": { name: "EA Rank", x: 81.5, y: 16.5, img: "buda_ea.png", detail: "mapa-ea.png", action: "showRankTable('EA')" },
    "amateur": { name: "Amateur Rank", x: 87.5, y: 37.5, img: "buda_amateur.png", detail: "mapa-amateur.png", action: "showRankTable('Amateur')" },
    "plavaren": { name: "Plaváreň", x: 86.5, y: 56.5, img: "buda_plavaren.png", detail: "mapa-happy.png", action: "openHappinessOverview" },
    "illegal": { name: "Podsvetie", x: 88.5, y: 81.5, img: "buda_illegal.png", detail: "mapa-illegal.png", action: "openArciUnderground" },
    "elo": { name: "ELO Rank", x: 94.5, y: 35.5, img: "buda_elo.png", detail: "mapa-elo.png", action: "showRankTable('ELO')" }
};

// ==========================================
// 2. JADRO MOTORU (Generovanie a pamäť)
// ==========================================

function startArciCityGame() {
    const container = document.getElementById('arci-city-game-container');
    
    // Načítanie súradníc z pamäte pri KAŽDOM otvorení mapy
    // Ak otváraš mapu prvýkrát, panáčik bude na X:10, Y:40. Inak tam, kde si skončil.
    const savedX = localStorage.getItem('arciPlayerX') || "10";
    const savedY = localStorage.getItem('arciPlayerY') || "40";

    container.style.display = 'block';
    
    // Vždy pri otvorení prekreslíme mapu, aby bola "čerstvá" a panáčik stál správne
    container.innerHTML = `
        <div class="map-wrapper" id="mapWrapper">
            <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)">
            <div id="buildingsLayer"></div>
            <img src="panáčik_stoji.png" id="player-character" style="left: ${savedX}%; top: ${savedY}%; transition: none;">
        </div>
        
        <div id="buildingDetailLayer" onclick="closeBuildingDetail()">
            <img id="detailImg" src="" onclick="executeBuildingAction(event)">
            <div style="color: gold; font-weight: bold; margin-top: 15px; font-size: 1.5rem; text-shadow: 2px 2px #000; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px;">
                👆 KLIKNI NA FOTKU PRE VSTUP
            </div>
        </div>

        <button onclick="exitMap()" style="position:fixed; top:15px; right:15px; z-index:2100000; padding:15px 25px; background: red; color: white; border: 3px solid white; border-radius: 50px; font-weight: 900; font-size: 1.2rem; cursor: pointer;">ZAVRIEŤ MAPU</button>
    `;

    renderBuildings();
    
    // Po krátkom čase vycentrujeme kameru na panáčika a zapneme mu animáciu pohybu
    setTimeout(centerCamera, 150);
    setTimeout(() => { 
        const p = document.getElementById('player-character');
        if(p) p.style.transition = "left 0.8s ease-out, top 0.8s ease-out"; 
    }, 300);
}

function exitMap() {
    // Klasické manuálne zatvorenie mapy tlačidlom X
    const container = document.getElementById('arci-city-game-container');
    container.style.display = 'none';
    container.innerHTML = ""; 
}

function executeBuildingAction(event) {
    if (event) event.stopPropagation(); // Zabráni okamžitému zavretiu fotky
    
    if (window.currentMapAction) {
        // Skryjeme mapu (tvoja hra si aj tak spraví po svojom, my len pre istotu)
        document.getElementById('arci-city-game-container').style.display = 'none';
        
        const action = window.currentMapAction;
        
        // Spustenie samotnej akcie z tvojej hry
        try {
            if (typeof action === 'string' && action.includes('(')) {
                eval(action); 
            } else if (typeof window[action] === 'function') {
                window[action]();
            } else {
                console.error("Akcia " + action + " nebola nájdená v tvojom kóde!");
            }
        } catch(e) { 
            console.error("Chyba pri spúšťaní akcie: ", e); 
        }
    }
}

// ==========================================
// 3. POHYB A VYKRESLOVANIE
// ==========================================

function renderBuildings() {
    const layer = document.getElementById('buildingsLayer');
    if(!layer) return;
    
    // Vykreslí všetkých 29 budov na ich presné pozície
    for (let key in buildingsData) {
        const b = buildingsData[key];
        const img = document.createElement('img');
        img.src = b.img; 
        img.className = 'building';
        img.style.left = b.x + '%'; 
        img.style.top = b.y + '%';
        img.onclick = (e) => { e.stopPropagation(); moveToBuilding(key); };
        layer.appendChild(img);
    }
}

function handleMapClick(e) {
    // Výpočet kliku myšou/prstom na mape a presun panáčika
    const wrapper = document.getElementById('mapWrapper');
    const rect = wrapper.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    movePlayer(x, y);
}

function movePlayer(x, y) {
    const player = document.getElementById('player-character');
    if(!player) return;
    
    // Presun
    player.style.left = x + '%'; 
    player.style.top = y + '%';
    
    // OKAMŽITÉ ULOŽENIE DO PAMÄTE PREHLIADAČA (TOTO JE TEN TRIK!)
    localStorage.setItem('arciPlayerX', x); 
    localStorage.setItem('arciPlayerY', y);
    
    setTimeout(centerCamera, 400);
}

function centerCamera() {
    // Automatické posunutie obrazovky (scrollovanie) za panáčikom
    const player = document.getElementById('player-character');
    if(player) player.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

function moveToBuilding(key) {
    const b = buildingsData[key];
    movePlayer(b.x, b.y);
    // Panáčik príde k budove, uloží si polohu a po chvíli sa otvorí detail fotky
    setTimeout(() => { showBuildingDetail(b); }, 900);
}

function showBuildingDetail(b) {
    const layer = document.getElementById('buildingDetailLayer');
    const img = document.getElementById('detailImg');
    if(!layer || !img) return;
    
    img.src = b.detail;
    window.currentMapAction = b.action; // Uložíme si, čo sa má spustiť po kliknutí na fotku
    layer.style.display = 'flex';
}

function closeBuildingDetail() {
    // Kliknutím mimo fotku sa detail zavrie
    const layer = document.getElementById('buildingDetailLayer');
    if(layer) layer.style.display = 'none';
}
