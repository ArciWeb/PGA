// ==========================================
// 1. DÁTA BUDOV A SÚRADNICE
// ==========================================

const buildingsData = {
    "udrzba": { name: "Údržba", x: 8.5, y: 42.0, size: 75, img: "buda_udrzba.png", detail: "mapa-udrzba.png", action: "openSettings" },
    "kostol": { name: "Kostol", x: 19.5, y: 29.0, size: 95, img: "buda_kostol.png", detail: "mapa-kostol.png", action: "openGameCalendar" },
    "arcibot": { name: "ArciBot", x: 12.5, y: 65.5, size: 35, img: "buda_arcibot.png", detail: "mapa-arcibot.png", action: "openAiAssistant" },
    "osobne": { name: "Osobné úspechy", x: 13.5, y: 86.0, size: 120, img: "buda_zahradka.png", detail: "mapa-personal.png", action: "openPersonalAchievements" },
    "stadion": { name: "Štadión", x: 21.0, y: 59.5, size: 380, img: "buda_stadion.png", detail: "mapa-cards.png", action: "showGlobalPlayerCards" },
    "banka": { name: "Net Worth Banka", x: 24.5, y: 73.5, size: 105, img: "buda_banka.png", detail: "mapa-bank.png", action: "openNetWorth" },
    "global": { name: "Globálne úspechy", x: 23.5, y: 95.0, size: 110, img: "buda_tabula.png", detail: "mapa-global.png", action: "openGlobalAchievementsList" },
    "sponsor": { name: "Sponsor Palác", x: 37.0, y: 32.0, size: 105, img: "buda_palac.png", detail: "mapa-sponsor.png", action: "openSponsorInfo" },
    "kniznica": { name: "Knižnica", x: 41.0, y: 48.5, size: 115, img: "buda_kniznica.png", detail: "mapa-hof.png", action: "openHallOfFame" },
    "invest": { name: "ArciInvest", x: 35.5, y: 83.0, size: 135, img: "buda_arciinvest.png", detail: "mapa-invest.png", action: "openArciInvest" },
    "bankomat": { name: "Bankomat", x: 28.5, y: 74.0, size: 30, img: "buda_bankomat.png", detail: "mapa-balance.png", action: "openMyPlayer" },
    "official": { name: "Official Rank", x: 51.5, y: 37.5, size: 95, img: "buda_official.png", detail: "mapa-official.png", action: "showRankTable_Official" },
    "pga": { name: "PGA Rank", x: 58.0, y: 39.5, size: 100, img: "buda_pga.png", detail: "mapa-pga.png", action: "showRankTable_PGA" },
    "vila": { name: "Moja Vila", x: 53.0, y: 53.5, size: 90, img: "buda_vila.png", detail: "mapa-villa.png", action: "openLifestyleManager" },
    "shop": { name: "ArciShop", x: 47.5, y: 79.5, size: 135, img: "buda_arcishop.png", detail: "mapa-shop.png", action: "openArciShop" },
    "fedex": { name: "Fedex Rank", x: 65.0, y: 41.5, size: 75, img: "buda_fedex.png", detail: "mapa-fedex.png", action: "showRankTable_FEDEX" },
    "super": { name: "Súperov dom", x: 62.5, y: 54.0, size: 90, img: "buda_super.png", detail: "mapa-vs.png", action: "openComparator" },
    "cards": { name: "ArciCards", x: 59.0, y: 80.5, size: 95, img: "buda_arcicards.png", detail: "mapa-arcicards.png", action: "openArciCardsHub" },
    "players": { name: "Players Rank", x: 72.5, y: 33.0, size: 100, img: "buda_players.png", detail: "mapa-players.png", action: "showRankTable_Association" },
    "gym": { name: "Telocvičňa", x: 71.0, y: 56.0, size: 95, img: "buda_gym.png", detail: "mapa-trophy.png", action: "openTrophyGallery" },
    "tip": { name: "ArciTip", x: 67.5, y: 81.5, size: 95, img: "buda_arcitip.png", detail: "mapa-tip.png", action: "openArciTip" },
    "world": { name: "World Tour Rank", x: 78.5, y: 44.0, size: 95, img: "buda_worldtour.png", detail: "mapa-worldtour.png", action: "showRankTable_Tour" },
    "noviny": { name: "Novinový stánok", x: 78.0, y: 56.5, size: 85, img: "buda_noviny.png", detail: "mapa-news.png", action: "openArciNews" },
    "casino": { name: "ArciBet Casino", x: 78.5, y: 82.5, size: 105, img: "buda_arcibet.png", detail: "mapa-arcibet.png", action: "openArciCasino" },
    "ea": { name: "EA Rank", x: 83.5, y: 33.5, size: 100, img: "buda_ea.png", detail: "mapa-ea.png", action: "showRankTable_EA" },
    "amateur": { name: "Amateur Rank", x: 90.0, y: 44.5, size: 65, img: "buda_amateur.png", detail: "mapa-amateur.png", action: "showRankTable_Amateur" },
    "plavaren": { name: "Plaváreň", x: 89.0, y: 65.0, size: 150, img: "buda_plavaren.png", detail: "mapa-happy.png", action: "openHappinessOverview" },
    "illegal": { name: "Podsvetie", x: 91.0, y: 87.5, size: 85, img: "buda_illegal.png", detail: "mapa-illegal.png", action: "openArciUnderground" },
    "elo": { name: "ELO Rank", x: 96.5, y: 44.5, size: 95, img: "buda_elo.png", detail: "mapa-elo.png", action: "showRankTable_ELO" }
};

// ==========================================
// 2. JADRO MOTORU MAPY (Z-Index vrstvy)
// ==========================================

function startArciCityGame() {
    const container = document.getElementById('arci-city-game-container');
    
    // Načítanie súradníc z pamäte
    const savedX = localStorage.getItem('arciPlayerX') || "10";
    const savedY = localStorage.getItem('arciPlayerY') || "40";

    // Nastavenie kontajnera mapy
    container.style.display = 'block';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '900'; 
    container.style.background = '#000';
    container.style.overflow = 'auto'; 
    
    container.innerHTML = `
        <div class="map-wrapper" id="mapWrapper" style="position: relative; width: 2000px; height: 1125px; overflow: hidden; transform-origin: 0 0; transition: transform 0.1s ease-out;">
            <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
            <div id="buildingsLayer"></div>
            <img src="panáčik_stoji.png" id="player-character" style="position: absolute; left: ${savedX}%; top: ${savedY}%; width: 45px; transform: translate(-50%, -100%); z-index: 500; transition: none; pointer-events: none; filter: drop-shadow(0px 5px 5px rgba(0,0,0,0.5));">
        </div>
        
        <div id="buildingDetailLayer" onclick="closeBuildingDetail()" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); z-index: 950; flex-direction: column; align-items: center; justify-content: center;">
            <img id="detailImg" src="" onclick="executeBuildingAction(event)" style="width: 95vw; max-height: 80vh; object-fit: contain; border: 5px solid gold; border-radius: 20px; box-shadow: 0 0 50px gold; cursor: pointer; transition: transform 0.2s;">
            <div style="color: gold; font-weight: bold; margin-top: 15px; font-size: 1.5rem; text-shadow: 2px 2px #000; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px;">
                👆 KLIKNI NA FOTKU PRE VSTUP DO BUDOVY
            </div>
        </div>

        <button onclick="exitMap()" style="position:fixed; top:15px; right:15px; z-index:960; padding:15px 25px; background: red; color: white; border: 3px solid white; border-radius: 50px; font-weight: 900; font-size: 1.2rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">NÁVRAT DO MENU</button>
    `;

    renderBuildings();
    
    // Aktivácia Pinch-to-Zoom pre mobil
    const mapWrapper = document.getElementById('mapWrapper');
    initArciPinchZoom(mapWrapper);
    
    setTimeout(centerCamera, 150);
    setTimeout(() => { 
        const p = document.getElementById('player-character');
        if(p) p.style.transition = "left 3.0s ease-out, top 3.0s ease-out"; 
    }, 300);
}

// POMOCNÁ FUNKCIA PRE ZOOMOVANIE MAPY PRSTAMI
let arciScale = 1;
function initArciPinchZoom(el) {
    let initialDist = 0;

    el.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            initialDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
        }
    }, {passive: false});

    el.addEventListener('touchmove', e => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
            const zoom = dist / initialDist;
            
            // NATVRDO: Vypočítame aktuálnu vnútornú šírku kontajnera pri každom pohybe
            const containerWidth = el.parentElement.clientWidth;
            // Zabezpečíme, že mapa (2000px) nikdy nebude užšia ako samotný kontajner/obrazovka
            const minScale = containerWidth / 2000;
            
            arciScale = Math.min(Math.max(minScale, arciScale * zoom), 3);
            el.style.transform = `scale(${arciScale})`;
            initialDist = dist;
        }
    }, {passive: false});
}

function exitMap() {
    const container = document.getElementById('arci-city-game-container');
    container.style.display = 'none';
    container.innerHTML = ""; 
}

// ==========================================
// 3. OTVORENIE HRY BEZ ZATVORENIA MAPY!
// ==========================================

function executeBuildingAction(event) {
    if (event) event.stopPropagation(); 
    
    if (window.currentMapAction) {
        const action = window.currentMapAction;
        try {
            if (action.startsWith('showRankTable_')) {
                const rankType = action.split('_')[1]; 
                if (typeof window.showRankTable === 'function') {
                    window.showRankTable(rankType);
                } else {
                    console.error("Tabuľka nenájdená!");
                }
            } 
            else {
                if (typeof window[action] === 'function') {
                    window[action]();
                } else {
                    console.error("Akcia " + action + " nebola nájdená!");
                }
            }
        } catch(e) { 
            console.error("Chyba pri spúšťaní akcie: ", e); 
        }
    }
}

// ==========================================
// 4. POHYB A VYKRESLOVANIE
// ==========================================

function renderBuildings() {
    const layer = document.getElementById('buildingsLayer');
    if(!layer) return;
    
    for (let key in buildingsData) {
        const b = buildingsData[key];
        const img = document.createElement('img');
        img.src = b.img; 
        
        img.style.position = 'absolute';
        img.style.transform = 'translate(-50%, -100%)';
        img.style.cursor = 'pointer';
        img.style.filter = 'drop-shadow(2px 2px 5px rgba(0,0,0,0.5))';
        
        // Výpočet vlastnej šírky na základe parametra 'size'
        const sizePercent = b.size !== undefined ? b.size : 100;
        const widthPx = 180 * (sizePercent / 100);
        
        img.style.width = widthPx + 'px';
        img.style.maxWidth = 'none'; 
        
        img.style.left = b.x + '%'; 
        img.style.top = b.y + '%';
        img.style.zIndex = Math.floor(b.y); 
        
        img.onclick = (e) => { e.stopPropagation(); moveToBuilding(key); };
        layer.appendChild(img);
    }
}

function handleMapClick(e) {
    const wrapper = document.getElementById('mapWrapper');
    const rect = wrapper.getBoundingClientRect();
    
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Pomôcka pre teba - Vypíše súradnice do konzoly (F12)
    console.log(`📍 Klikol si na súradnice: x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`);
    
    movePlayer(x, y);
}

function movePlayer(x, y) {
    const player = document.getElementById('player-character');
    if(!player) return;
    
    player.style.left = x + '%'; 
    player.style.top = y + '%';
    player.style.zIndex = Math.floor(y) + 1; 
    
    localStorage.setItem('arciPlayerX', x); 
    localStorage.setItem('arciPlayerY', y);
    
    setTimeout(centerCamera, 400);
}

function centerCamera() {
    const player = document.getElementById('player-character');
    if(player) player.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

function moveToBuilding(key) {
    const b = buildingsData[key];
    movePlayer(b.x, b.y);
    setTimeout(() => { showBuildingDetail(b); }, 3100); 
}

function showBuildingDetail(b) {
    const layer = document.getElementById('buildingDetailLayer');
    const img = document.getElementById('detailImg');
    if(!layer || !img) return;
    
    img.src = b.detail;
    window.currentMapAction = b.action; 
    layer.style.display = 'flex'; 
}

function closeBuildingDetail() {
    const layer = document.getElementById('buildingDetailLayer');
    if(layer) layer.style.display = 'none';
}
