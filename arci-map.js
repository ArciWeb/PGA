// ==========================================
// 1. DÁTA BUDOV A SÚRADNICE
// ==========================================

const buildingsData = {
	    "jamka": { name: "Turnaj", x: 2.2, y: 60.4, doorX: 1.3, doorY: 61.2, size: 35, img: "buda_turnaj.png", detail: "mapa-turnaj.png", action: "openScannerModal" },

    "udrzba": { name: "Údržba", x: 8.5, y: 42.0, doorX: 8.5, doorY: 42.0, size: 75, img: "buda_udrzba.png", detail: "mapa-udrzba.png", action: "openSettings" },
    "bankomat": { name: "Bankomat", x: 29.5, y: 69.4, doorX: 30.4, doorY: 70.7, size: 30, img: "buda_bankomat.png", detail: "mapa-balance.png", action: "openMyPlayer" },
    "banka": { name: "Net Worth Banka", x: 24.9, y: 73, doorX: 27.5, doorY: 72.2, size: 105, img: "buda_banka.png", detail: "mapa-bank.png", action: "openNetWorth" },
        "noviny": { name: "Novinový stánok", x: 74.3, y: 62.3, doorX: 74.3, doorY: 62.3, size: 85, img: "buda_noviny.png", detail: "mapa-news.png", action: "openArciNews" },
        "shop": { name: "ArciShop", x: 47.5, y: 79.5, doorX: 47.5, doorY: 79.5, size: 135, img: "buda_arcishop.png", detail: "mapa-shop.png", action: "openArciShop" },

        "cards": { name: "ArciCards", x: 59.2, y: 80.5, doorX: 59.2, doorY: 80.5, size: 95, img: "buda_arcicards.png", detail: "mapa-arcicards.png", action: "openArciCardsHub" },
    "vila": { name: "Životný Štýl", x: 53.0, y: 53.5, doorX: 53.0, doorY: 53.5, size: 120, img: "buda_vila.png", detail: "mapa-villa.png", action: "openLifestyleManager" },

    "illegal": { name: "Podsvetie", x: 94.7, y: 76.9, doorX: 94.7, doorY: 76.9, size: 85, img: "buda_illegal.png", detail: "mapa-illegal.png", action: "openArciUnderground" }, 

    "invest": { name: "ArciInvest", x: 39.8, y: 89.6, doorX: 39.8, doorY: 89.6, size: 135, img: "buda_arciinvest.png", detail: "mapa-invest.png", action: "openArciInvest" },
        "casino": { name: "ArciBet Casino", x: 78.5, y: 82.5, doorX: 78.5, doorY: 82.5, size: 105, img: "buda_arcibet.png", detail: "mapa-arcibet.png", action: "openArciCasino" },
    "tip": { name: "ArciTip Stávková", x: 66.7, y: 83.5, doorX: 66.7, doorY: 83.5, size: 95, img: "buda_arcitip.png", detail: "mapa-tip.png", action: "openArciTip" },
    
    "oblubene": { name: "Obľúbený Hrači", x: 58.1, y: 88.4, doorX: 58, doorY: 83.2, size: 38, img: "buda_oblubene.png", detail: "mapa-oblubene.png", action: "openFavoritesModal" },
    
    "osobne": { name: "Osobné úspechy", x: 13.3, y: 86.8, doorX: 9.3, doorY: 77.8, size: 160, img: "buda_zahradka.png", detail: "mapa-personal.png", action: "openPersonalAchievements" },
    "plavaren": { name: "História Spokojnosti", x: 90.9, y: 62.3, doorX: 86.9, doorY: 63.4, size: 162, img: "buda_plavaren.png", detail: "mapa-happy.png", action: "openHappinessOverview" },
    "kostol": { name: "Kalendár", x: 19.5, y: 28.0, doorX: 19.5, doorY: 28.0, size: 95, img: "buda_kostol.png", detail: "mapa-kostol.png", action: "openGameCalendar" },



    "global": { name: "Globálne Achievmenty", x: 26.5, y: 95.0, doorX: 26.5, doorY: 95.0, size: 110, img: "buda_tabula.png", detail: "mapa-global.png", action: "openGlobalAchievementsList" },
    "kniznica": { name: "Sieň Slávy", x: 40.7, y: 50.5, doorX: 40.7, doorY: 50.5, size: 115, img: "buda_kniznica.png", detail: "mapa-hof.png", action: "openHallOfFame" },
    "gym": { name: "Trofeje", x: 71.0, y: 56.0, doorX: 70.0, doorY: 56.0, size: 95, img: "buda_gym.png", detail: "mapa-trophy.png", action: "openTrophyGallery" },
    "sponsor": { name: "Sponzori", x: 36.4, y: 31.3, doorX: 34.5, doorY: 30.6, size: 115, img: "buda_palac.png", detail: "mapa-sponsor.png", action: "openSponsorInfo" },
    "arcibot": { name: "ArciBot", x: 12.5, y: 65.5, doorX: 12.5, doorY: 65.5, size: 35, img: "buda_arcibot.png", detail: "mapa-arcibot.png", action: "openAiAssistant" },

    "super": { name: "Porovnanie Hráčov", x: 62.5, y: 54.0, doorX: 62.5, doorY: 54.0, size: 90, img: "buda_super.png", detail: "mapa-vs.png", action: "openComparator" },

    "world": { name: "World Tour Rank", x: 33.5, y: 24.5, doorX: 31.9, doorY: 23.2, size: 105, img: "buda_worldtour.png", detail: "mapa-worldtour.png", action: "showRankTable_Tour" },
    "official": { name: "Official Rank", x: 51.9, y: 35.0, doorX: 50.9, doorY: 35.0, size: 95, img: "buda_official.png", detail: "mapa-official.png", action: "showRankTable_Official" },
    "pga": { name: "PGA Rank", x: 60.0, y: 33.5, doorX: 59.0, doorY: 33.5, size: 100, img: "buda_pga.png", detail: "mapa-pga.png", action: "showRankTable_PGA" },
    "fedex": { name: "Fedex Rank", x: 63.0, y: 37.8, doorX: 62.0, doorY: 37.8, size: 75, img: "buda_fedex.png", detail: "mapa-fedex.png", action: "showRankTable_FEDEX" },
    "players": { name: "Players Rank", x: 72.5, y: 34.0, doorX: 71.5, doorY: 34.0, size: 100, img: "buda_players.png", detail: "mapa-players.png", action: "showRankTable_Association" },

    "ea": { name: "EA Rank", x: 84.5, y: 35.5, doorX: 83.5, doorY: 35.5, size: 100, img: "buda_ea.png", detail: "mapa-ea.png", action: "showRankTable_EA" },
    "amateur": { name: "Amateur Rank", x: 74.7, y: 40.2, doorX: 73.7, doorY: 40.2, size: 65, img: "buda_amateur.png", detail: "mapa-amateur.png", action: "showRankTable_Amateur" },
    "elo": { name: "ELO Rank", x: 95.8, y: 44.5, doorX: 94.8, doorY: 44.5, size: 95, img: "buda_elo.png", detail: "mapa-elo.png", action: "showRankTable_ELO" },
    "stadion": { name: "Rebríček PGA Cards", x: 22.8, y: 55.5, doorX: 27.6, doorY: 55, size: 240, img: "buda_stadion.png", detail: "mapa-cards.png", action: "showGlobalPlayerCards" }
};

// ==========================================
// 2. JADRO MOTORU MAPY (Z-Index vrstvy a Zoom)
// ==========================================

let arciScale = 1;
let isDebugMode = false; // Predvolene je vývojársky režim VYPNUTÝ

// Nové premenné pre nastavenia (Načítavajú sa z uloženej pamäte, alebo dajú predvolené)
let speedMultiplier = parseFloat(localStorage.getItem('arciSpeed')) || 0.6;
let walkOnRoadsOnly = localStorage.getItem('arciRoads') === 'true'; 
let currentBuildingIndex = -1; // Sleduje, pri ktorej budove hráč naposledy bol
let directEntry = localStorage.getItem('arciEntry') === 'true'; 

// --- KONFIGURÁCIA NPC POSTÁV ---
// Tu môžeš pridávať nové ID (npc13, npc14...) a nastavovať im vlastnú veľkosť (width)
const npcConfigs = {
    "npc1":  { width: 20 },
    "npc2":  { width: 15 },
    "npc3":  { width: 18 },
    "npc4":  { width: 42 },
    "npc5":  { width: 50 },
    "npc6":  { width: 45 },
    "npc7":  { width: 45 },
    "npc8":  { width: 45 },
    "npc9":  { width: 25 },
    "npc10": { width: 25 },
    "npc11": { width: 45 },
    "npc12": { width: 22 }
};

let activeNPCs = []; // Sledovanie aktívnych postáv na mape
const MIN_NPCS = 8;
const MAX_NPCS = 11;
const NPC_STAY_DURATION = 10000; // 10 sekúnd státia pri budove
const occupiedDoors = new Set(); // Sleduje obsadené vchody (aby sa tam netlačili viacerí)

function getMinScale() {
    const mapW = 2000;
    const mapH = 1125;
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    return Math.max(winW / mapW, winH / mapH);
}

function startArciCityGame() {
    const container = document.getElementById('arci-city-game-container');
    
    const savedX = localStorage.getItem('arciPlayerX') || "10";
    const savedY = localStorage.getItem('arciPlayerY') || "40";

    let buildingMenuItems = "";
    for (let key in buildingsData) {
        buildingMenuItems += `<div onclick="navigateFromMenu('${key}', event)" style="padding: 12px; color: white; border-bottom: 1px solid rgba(255,215,0,0.3); cursor: pointer; text-align: left; font-weight: bold; font-family: sans-serif; font-size: 0.9rem;">🏢 ${buildingsData[key].name}</div>`;
    }

    container.style.display = 'block';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '900'; 
    container.style.background = '#000';
    container.style.overflow = 'auto'; 
    container.style.scrollbarWidth = 'none'; 
    
    container.innerHTML = `
        <style>#arci-city-game-container::-webkit-scrollbar { display: none; } #buildingNavMenu::-webkit-scrollbar { display: none; } #settingsNavMenu::-webkit-scrollbar { display: none; }</style>
        
        <div id="scaleContainer" style="width: 2000px; height: 1125px; transition: width 0.1s ease-out, height 0.1s ease-out;">
            <div class="map-wrapper" id="mapWrapper" style="position: relative; width: 2000px; height: 1125px; overflow: hidden; transform-origin: 0 0; transition: transform 0.1s ease-out;">
                <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                <div id="buildingsLayer"></div>
                <div id="npcLayer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 2;"></div>
                <div id="debugLayer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 400;"></div>
                <img src="panáčik_stoji.png" id="player-character" style="position: absolute; left: ${savedX}%; top: ${savedY}%; width: 45px; transform: translate(-50%, -100%); z-index: 500; transition: none; pointer-events: none; filter: drop-shadow(0px 5px 5px rgba(0,0,0,0.5));">
            </div>
        </div>
        
        <div id="buildingDetailLayer" onclick="closeBuildingDetail()" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); z-index: 950; flex-direction: column; align-items: center; justify-content: center;">
            <img id="detailImg" src="" onclick="executeBuildingAction(event)" style="width: 95vw; max-height: 80vh; object-fit: contain; border: 5px solid gold; border-radius: 20px; box-shadow: 0 0 50px gold; cursor: pointer; transition: transform 0.2s;">
            <div id="buildingActionText" style="color: gold; font-weight: bold; margin-top: 15px; font-size: 1.2rem; text-shadow: 2px 2px #000; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px; text-align: center;">
                👆 KLIKNI NA FOTKU PRE VSTUP
            </div>
        </div>

        <div id="miniMapLayer" onclick="closeMiniMap()" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.9); z-index: 960; flex-direction: column; align-items: center; justify-content: center;">
            <img src="Map_Background_Small.png" style="width: 95vw; max-height: 85vh; object-fit: contain; border: 3px solid gold; border-radius: 15px; box-shadow: 0 0 30px gold;">
            <div style="color: gold; font-weight: bold; margin-top: 15px; font-size: 1.2rem; text-shadow: 2px 2px #000; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px; text-align: center;">
                👆 KLIKNI KAMKOĽVEK PRE ZATVORENIE MAPY
            </div>
        </div>

        <button onclick="toggleSettingsMenu(event)" style="position:fixed; top:15px; right:145px; z-index:940; padding:5px 15px; background: #333; color: gold; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 1rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">⚙️</button>
        <button onclick="toggleBuildingMenu(event)" style="position:fixed; top:15px; right:85px; z-index:940; padding:5px 15px; background: #333; color: gold; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 1rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">⋮</button>
        <button onclick="exitMap()" style="position:fixed; top:15px; right:15px; z-index:940; padding:5px 15px; background: red; color: white; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 0.5rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">MENU</button>
        
        <button onclick="goToNextBuilding(event)" style="position:fixed; bottom:20px; right:20px; z-index:940; width:60px; height:60px; background: #333; color: gold; border: 3px solid gold; border-radius: 50%; font-weight: 900; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 0 20px rgba(0,0,0,0.8);">➡️</button>

        <div id="settingsNavMenu" style="display:none; position:fixed; top:55px; right:145px; width: 220px; background: rgba(0,0,0,0.95); border: 2px solid gold; border-radius: 10px; z-index: 945; flex-direction: column; padding: 15px; box-shadow: 0 0 20px rgba(0,0,0,0.8); color: white; font-family: sans-serif;">
            <h3 style="margin-top: 0; color: gold; text-align: center; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 10px;">Nastavenia</h3>
            
            <label style="font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">Rýchlosť chôdze:</label>
            <select onchange="changeMovementSpeed(this.value)" style="width: 100%; margin-bottom: 15px; padding: 5px; background: #222; color: white; border: 1px solid gold; border-radius: 5px;">
                <option value="1.2" ${speedMultiplier === 1.2 ? 'selected' : ''}>Pomaly</option>
                <option value="0.6" ${speedMultiplier === 0.6 ? 'selected' : ''}>Stredne</option>
                <option value="0.25" ${speedMultiplier === 0.25 ? 'selected' : ''}>Rýchlo</option>
                <option value="0.08" ${speedMultiplier === 0.08 ? 'selected' : ''}>Piker (Super rýchlo)</option>
            </select>

            <label style="font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">Kliknutie na mapu:</label>
            <select onchange="changeMovementMode(this.value)" style="width: 100%; margin-bottom: 15px; padding: 5px; background: #222; color: white; border: 1px solid gold; border-radius: 5px;">
                <option value="free" ${!walkOnRoadsOnly ? 'selected' : ''}>Voľný pohyb</option>
                <option value="roads" ${walkOnRoadsOnly ? 'selected' : ''}>Len po cestičkách</option>
            </select>

            <label style="font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">Vstup do budovy:</label>
            <select onchange="changeEntryMode(this.value)" style="width: 100%; margin-bottom: 15px; padding: 5px; background: #222; color: white; border: 1px solid gold; border-radius: 5px;">
                <option value="click" ${!directEntry ? 'selected' : ''}>Kliknúť na fotku</option>
                <option value="direct" ${directEntry ? 'selected' : ''}>Rovno vstúpiť</option>
            </select>

            <button onclick="openMiniMap(event)" style="width: 100%; padding: 8px; background: gold; color: black; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-top: 5px;">Zobraziť Mapu</button>
        </div>

        <div id="buildingNavMenu" style="display:none; position:fixed; top:55px; right:85px; width: 220px; max-height: 70vh; background: rgba(0,0,0,0.95); border: 2px solid gold; border-radius: 10px; z-index: 945; overflow-y: auto; box-shadow: 0 0 20px rgba(0,0,0,0.8); flex-direction: column; scrollbar-width: none;">
            ${buildingMenuItems}
        </div>
    `;

    renderBuildings();
    drawDebugWaypoints();
    
    const mapWrapper = document.getElementById('mapWrapper');
    const scaleContainer = document.getElementById('scaleContainer');
    
    arciScale = Math.max(getMinScale(), 1);
    mapWrapper.style.transform = `scale(${arciScale})`;
    
    scaleContainer.style.width = (2000 * arciScale) + 'px';
    scaleContainer.style.height = (1125 * arciScale) + 'px';
    
    initArciPinchZoom(mapWrapper);
    
    setTimeout(() => { 
        centerCamera(); 
        initNPCSystem(); // Spustenie NPC po načítaní mapy
    }, 150);
}

// ==========================================
// FUNKCIE PRE NASTAVENIA, MAPU A ĎALŠIU BUDOVU
// ==========================================

function goToNextBuilding(event) {
    if (event) event.stopPropagation();
    
    const keys = Object.keys(buildingsData); 
    if (keys.length === 0) return;

    currentBuildingIndex++; 
    
    if (currentBuildingIndex >= keys.length) {
        currentBuildingIndex = 0;
    }

    const nextBuildingKey = keys[currentBuildingIndex];
    moveToBuilding(nextBuildingKey);
}

function toggleSettingsMenu(event) {
    if (event) event.stopPropagation();
    const sMenu = document.getElementById('settingsNavMenu');
    const bMenu = document.getElementById('buildingNavMenu');
    if (sMenu) {
        if (sMenu.style.display === 'none') {
            sMenu.style.display = 'flex';
            if (bMenu) bMenu.style.display = 'none'; 
        } else {
            sMenu.style.display = 'none';
        }
    }
}

function changeMovementSpeed(val) {
    speedMultiplier = parseFloat(val);
    localStorage.setItem('arciSpeed', speedMultiplier); 
}

function changeMovementMode(val) {
    walkOnRoadsOnly = (val === 'roads');
    localStorage.setItem('arciRoads', walkOnRoadsOnly); 
}

function changeEntryMode(val) {
    directEntry = (val === 'direct');
    localStorage.setItem('arciEntry', directEntry); 
}

function openMiniMap(event) {
    if (event) event.stopPropagation();
    const layer = document.getElementById('miniMapLayer');
    const sMenu = document.getElementById('settingsNavMenu');
    if (layer) layer.style.display = 'flex';
    if (sMenu) sMenu.style.display = 'none'; 
}

function closeMiniMap() {
    const layer = document.getElementById('miniMapLayer');
    if (layer) layer.style.display = 'none';
}

// ==========================================
// FUNKCIE PRE ROZBAĽOVACIE MENU BUDOV
// ==========================================

function toggleBuildingMenu(event) {
    if (event) event.stopPropagation();
    const bMenu = document.getElementById('buildingNavMenu');
    const sMenu = document.getElementById('settingsNavMenu');
    if (bMenu) {
        if (bMenu.style.display === 'none') {
            bMenu.style.display = 'flex';
            if (sMenu) sMenu.style.display = 'none'; 
        } else {
            bMenu.style.display = 'none';
        }
    }
}

function navigateFromMenu(key, event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('buildingNavMenu');
    if (menu) menu.style.display = 'none';
    
    moveToBuilding(key);
}

function initArciPinchZoom(el) {
    let initialDist = 0;
    const scaleContainer = document.getElementById('scaleContainer');

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
            
            const minScale = getMinScale();
            
            arciScale = Math.min(Math.max(minScale, arciScale * zoom), 3);
            el.style.transform = `scale(${arciScale})`;
            
            scaleContainer.style.width = (2000 * arciScale) + 'px';
            scaleContainer.style.height = (1125 * arciScale) + 'px';
            
            initialDist = dist;
        }
    }, {passive: false});
}

function exitMap() {
    const container = document.getElementById('arci-city-game-container');
    container.style.display = 'none';
    container.innerHTML = ""; 
    isTrackingCamera = false; 
    clearTimeout(currentMovementTimeout);
    isMoving = false;
    
    // Vyčistenie NPC pri ukončení
    activeNPCs.forEach(npc => {
        if(npc.timeout) clearTimeout(npc.timeout);
    });
    activeNPCs = [];
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
// 4. POHYB, VYKRESLOVANIE A DYNAMICKÝ DEBUG MÓD
// ==========================================

window.arciDebug = function() {
    isDebugMode = !isDebugMode;
    console.log(`🛠️ Režim ladenia bol ${isDebugMode ? 'ZAPNUTÝ' : 'VYPNUTÝ'}`);
    renderBuildings();
    drawDebugWaypoints();
};

window.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key.toLowerCase() === 'd') {
        window.arciDebug();
    }
});

function renderBuildings() {
    const layer = document.getElementById('buildingsLayer');
    if(!layer) return;
    
    layer.innerHTML = "";
    
    for (let key in buildingsData) {
        const b = buildingsData[key];
        const sizePercent = b.size !== undefined ? b.size : 100;
        const widthPx = 180 * (sizePercent / 100);

        const hitbox = document.createElement('div');
        hitbox.style.position = 'absolute';
        hitbox.style.left = b.x + '%';
        hitbox.style.top = b.y + '%'; 
        hitbox.style.width = (widthPx * 0.25) + 'px'; 
        hitbox.style.height = '40px';
        hitbox.style.transform = 'translate(-50%, -100%)';
        hitbox.style.cursor = 'pointer';
        hitbox.style.zIndex = Math.floor(b.y) + 10; 
        
        hitbox.onclick = (e) => { 
            e.stopPropagation(); 
            if (isDebugMode) {
                console.log(`🏢 Budova: ${b.name} | Súradnice: x: ${b.x.toFixed(1)}, y: ${b.y.toFixed(1)}`);
            } else {
                moveToBuilding(key);
            }
        };

        const img = document.createElement('img');
        img.style.position = 'absolute';
        img.style.left = b.x + '%'; 
        img.style.top = b.y + '%';
        img.style.transform = 'translate(-50%, -100%)';
        img.style.width = widthPx + 'px';
        img.style.maxWidth = 'none'; 
        img.style.zIndex = Math.floor(b.y); 
        img.style.pointerEvents = 'none'; 

        if (isDebugMode) {
            img.src = ""; 
            img.alt = `🏢 ${b.name}`; 
            img.style.border = "1px solid red";
            img.style.background = "rgba(0,0,0,0.6)";
            img.style.color = "white";
            img.style.padding = "5px";
            img.style.fontSize = "12px";
            
            hitbox.style.border = '2px solid lime';
            hitbox.style.background = 'rgba(0, 255, 0, 0.4)';
        } else {
            img.src = b.img; 
            img.style.filter = 'drop-shadow(2px 2px 5px rgba(0,0,0,0.5))';
            img.alt = "";
            hitbox.style.border = 'none';
            hitbox.style.background = 'transparent';
        }
        
        layer.appendChild(img);
        layer.appendChild(hitbox);
    }
}

function handleMapClick(e) {
    const bMenu = document.getElementById('buildingNavMenu');
    const sMenu = document.getElementById('settingsNavMenu');
    if (bMenu) bMenu.style.display = 'none';
    if (sMenu) sMenu.style.display = 'none';

    const wrapper = document.getElementById('mapWrapper');
    const rect = wrapper.getBoundingClientRect();
    
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    if (walkOnRoadsOnly) {
        navigatePlayerViaRoads(x, y);
    } else {
        navigatePlayerDirectly(x, y);
    }
}

let isTrackingCamera = false;
let trackEndTime = 0;

function movePlayerStep(x, y, timeInSeconds) {
    const player = document.getElementById('player-character');
    if(!player) return;
    
    player.style.transition = `left ${timeInSeconds}s linear, top ${timeInSeconds}s linear`;
    player.style.left = x + '%'; 
    player.style.top = y + '%';
    // UPRAVENÉ: Používame presne Math.floor(y) + 1 pre správne prekresľovanie (rovnako ako NPC)
    player.style.zIndex = Math.floor(y) + 1; 
    
    localStorage.setItem('arciPlayerX', x); 
    localStorage.setItem('arciPlayerY', y);
    
    trackEndTime = Date.now() + (timeInSeconds * 1000) + 500;
    if (!isTrackingCamera) {
        isTrackingCamera = true;
        requestAnimationFrame(trackCameraLoop);
    }
}

function trackCameraLoop() {
    if (Date.now() > trackEndTime) {
        isTrackingCamera = false;
        return;
    }
    centerCamera();
    requestAnimationFrame(trackCameraLoop);
}

function centerCamera() {
    const player = document.getElementById('player-character');
    const container = document.getElementById('arci-city-game-container');
    
    if(player && container) {
        const pRect = player.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        
        container.scrollLeft += (pRect.left + pRect.width / 2) - (cRect.left + cRect.width / 2);
        container.scrollTop += (pRect.top + pRect.height / 2) - (cRect.top + cRect.height / 2);
    }
}

function moveToBuilding(key) {
    currentBuildingIndex = Object.keys(buildingsData).indexOf(key); 
    
    const b = buildingsData[key];
    const targetX = b.doorX !== undefined ? b.doorX : b.x;
    const targetY = b.doorY !== undefined ? b.doorY : b.y;

    navigatePlayerViaRoads(targetX, targetY, () => {
        if (directEntry) {
            window.currentMapAction = b.action;
            executeBuildingAction(null); 
        } else {
            showBuildingDetail(b); 
        }
    });
}

function showBuildingDetail(b) {
    const layer = document.getElementById('buildingDetailLayer');
    const img = document.getElementById('detailImg');
    const textLayer = document.getElementById('buildingActionText'); 
    
    if(!layer || !img || !textLayer) return;
    
    img.src = b.detail;
    textLayer.innerText = `👆 KLIKNI NA FOTKU PRE VSTUP DO ${b.name.toUpperCase()}`;
    window.currentMapAction = b.action; 
    layer.style.display = 'flex'; 
}

function closeBuildingDetail() {
    const layer = document.getElementById('buildingDetailLayer');
    if(layer) layer.style.display = 'none';
}

// ==========================================
// 5. OBMEDZENÝ POHYB POSTAVIČKY (WAYPOINTY)
// ==========================================

const roadNodes = [
    { id: 1, x: 24.9, y: 32.7 },
    { id: 2, x: 53.3, y: 41.6 },
    { id: 3, x: 11.1, y: 72 },
    { id: 4, x: 85.4, y: 49.9 },
    { id: 17, x: 55, y: 40.8 },
    { id: 18, x: 66.9, y: 44.9 },
    { id: 19, x: 79.9, y: 47.0 },
    { id: 21, x: 93.2, y: 50.3 },
    { id: 22, x: 80.4, y: 58.9 },
    { id: 23, x: 65.9, y: 63.3 },
    { id: 24, x: 48.9, y: 56.3 },
    { id: 25, x: 36.8, y: 66.6 },
    { id: 26, x: 28.4, y: 58.3 },
    { id: 27, x: 33.5, y: 90.3 },
    { id: 28, x: 56.5, y: 82.7 },
    { id: 29, x: 65.3, y: 86.9 },
    { id: 30, x: 72.6, y: 87 },
    { id: 31, x: 76, y: 82.6 },
    { id: 32, x: 5.3, y: 67.6 },
    { id: 33, x: 36.4, y: 36.9 },
    { id: 34, x: 27, y: 29.5 },
    { id: 35, x: 29.6, y: 72.8 },
    { id: 36, x: 45, y: 85.7 },
    { id: 37, x: 6.7, y: 99.7 }, // Spawn point pre npc
    { id: 5, x: 8.6, y: 44.6 },
    { id: 6, x: 45, y: 53 },
    { id: 7, x: 59.1, y: 60.6 },
    { id: 8, x: 76.2, y: 67.4 },
    { id: 9, x: 86.7, y: 73.4 },
    { id: 15, x: 81.7, y: 85.5 },
    { id: 16, x: 93.5, y: 80.1 },
    { id: 10, x: 22.9, y: 92.6 },
    { id: 11, x: 24, y: 82.7 },
    { id: 12, x: 41.8, y: 95 },
    { id: 13, x: 51.9, y: 80.8 },
    { id: 14, x: 77.9, y: 91.8 }
];

const roadEdges = [
    [1, 2], [2, 4], [3, 5],[1, 5], 
    [6, 7], [7, 8], [8, 9],
    [10, 11], [11, 12], [12, 13], [13, 14],
    [14,15], [9,15], [15,16], [19,17], [19,18], [19,4], [19,2],
    [21,19], [21,17], [21,18], [21,2], [21,4], [17,18], [17,4], [17,2],
    [18,2], [18,4],
    [6,25], [11,25], [26,25], [26,3],
    [22,4], [22,8], [24,6], [24,7],
    [27,12], [27,11], [23,7], [23,8],
    [29,30], [13,28], [13,29], [13,30],
    [30,14], [29,14], [28,29], [28,30], [28,14],[37,11],
    [32,3],[33,1],[33,2],[34,1],[11,35], [25,35], [36,12],[36,13],
    [2, 6], [6, 11],
    [9, 14], [3, 11], [7, 13]
];

function drawDebugWaypoints() {
    const layer = document.getElementById('debugLayer');
    if (!layer) return;
    if (!isDebugMode) {
        layer.innerHTML = "";
        return;
    }
    let svgHTML = `<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: visible;">`;
    roadEdges.forEach(edge => {
        const n1 = roadNodes.find(n => n.id === edge[0]);
        const n2 = roadNodes.find(n => n.id === edge[1]);
        if (n1 && n2) {
            svgHTML += `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" stroke="rgba(255,0,0,0.8)" stroke-width="0.3" vector-effect="non-scaling-stroke" />`;
        }
    });
    roadNodes.forEach(node => {
        svgHTML += `<circle cx="${node.x}" cy="${node.y}" r="0.4" fill="yellow" stroke="red" stroke-width="0.1" vector-effect="non-scaling-stroke" />`;
    });
    for (let key in buildingsData) {
        const b = buildingsData[key];
        svgHTML += `<circle cx="${b.x}" cy="${b.y}" r="0.5" fill="red" stroke="white" stroke-width="0.1" vector-effect="non-scaling-stroke" />`;
        const doorX = b.doorX !== undefined ? b.doorX : b.x;
        const doorY = b.doorY !== undefined ? b.doorY : b.y;
        svgHTML += `<circle cx="${doorX}" cy="${doorY}" r="0.4" fill="lime" stroke="black" stroke-width="0.1" vector-effect="non-scaling-stroke" />`;
    }
    svgHTML += `</svg>`;
    layer.innerHTML = svgHTML;
}

let pathQueue = [];
let isMoving = false;
let currentMovementTimeout = null;
let activeCallback = null;

function navigatePlayerDirectly(targetX, targetY) {
    activeCallback = null;
    clearTimeout(currentMovementTimeout);
    isMoving = false; 
    pathQueue = [{ x: targetX, y: targetY }];
    processNextMovementStep();
}

function navigatePlayerViaRoads(targetX, targetY, onComplete = null) {
    activeCallback = onComplete;
    clearTimeout(currentMovementTimeout);
    isMoving = false; 
    const player = document.getElementById('player-character');
    let startX = parseFloat(player.style.left || localStorage.getItem('arciPlayerX') || "10");
    let startY = parseFloat(player.style.top || localStorage.getItem('arciPlayerY') || "40");
    pathQueue = calculateShortestPathGraph(startX, startY, targetX, targetY);
    processNextMovementStep();
}

function processNextMovementStep() {
    if (pathQueue.length === 0) {
        isMoving = false;
        if (activeCallback) {
            activeCallback();
            activeCallback = null;
        }
        return;
    }
    isMoving = true;
    const nextPoint = pathQueue.shift();
    const player = document.getElementById('player-character');
    let currentX = parseFloat(player.style.left || "0");
    let currentY = parseFloat(player.style.top || "0");
    let dist = Math.hypot(nextPoint.x - currentX, nextPoint.y - currentY);
    let timeInSeconds = (dist / 10.0) * speedMultiplier; 
    if (timeInSeconds < 0.1) timeInSeconds = 0.1;
    movePlayerStep(nextPoint.x, nextPoint.y, timeInSeconds);
    currentMovementTimeout = setTimeout(() => {
        processNextMovementStep();
    }, timeInSeconds * 1000);
}

function calculateShortestPathGraph(startX, startY, targetX, targetY) {
    let startNodeId = getClosestNode(startX, startY);
    let targetNodeId = getClosestNode(targetX, targetY);
    let distances = {};
    let previous = {};
    let queue = [];
    roadNodes.forEach(node => {
        distances[node.id] = Infinity;
        previous[node.id] = null;
        queue.push(node.id);
    });
    distances[startNodeId] = 0;
    while (queue.length > 0) {
        queue.sort((a, b) => distances[a] - distances[b]);
        let currId = queue.shift();
        if (currId === targetNodeId) break;
        let neighbors = roadEdges.filter(e => e[0] === currId || e[1] === currId).map(e => e[0] === currId ? e[1] : e[0]);
        neighbors.forEach(neighborId => {
            if (queue.includes(neighborId)) {
                let currNode = roadNodes.find(n => n.id === currId);
                let neighborNode = roadNodes.find(n => n.id === neighborId);
                let dist = Math.hypot(currNode.x - neighborNode.x, currNode.y - neighborNode.y);
                let altDistance = distances[currId] + dist;
                if (altDistance < distances[neighborId]) {
                    distances[neighborId] = altDistance;
                    previous[neighborId] = currId;
                }
            }
        });
    }
    let calculatedPath = [];
    let currentTrace = targetNodeId;
    if (previous[currentTrace] !== null || currentTrace === startNodeId) {
        while (currentTrace !== null) {
            let n = roadNodes.find(node => node.id === currentTrace);
            calculatedPath.unshift({ x: n.x, y: n.y });
            currentTrace = previous[currentTrace];
        }
    }
    let startNode = roadNodes.find(n => n.id === startNodeId);
    if (startNode) calculatedPath.unshift({ x: startNode.x, y: startNode.y });
    calculatedPath.push({ x: targetX, y: targetY });
    return calculatedPath;
}

function getClosestNode(x, y) {
    let closestId = null;
    let minPath = Infinity;
    roadNodes.forEach(node => {
        let dist = Math.hypot(node.x - x, node.y - y);
        if (dist < minPath) {
            minPath = dist;
            closestId = node.id;
        }
    });
    return closestId;
}

// ==========================================
// 6. SYSTÉM NPC POSTÁV (LOGIKA POHYBU A SPAWNU)
// ==========================================

function initNPCSystem() {
    // Spustíme slučku manažmentu postáv každých 5 sekúnd
    setInterval(manageNPCs, 5000);
    manageNPCs(); // Prvotné spustenie
}

function manageNPCs() {
    // Ak je postáv menej ako minimum, skúsime jednu pridať
    if (activeNPCs.length < MIN_NPCS) {
        spawnNPC();
    } 
    // Ak je postáv dosť, ale menej ako maximum, skúsime náhodne pridať ďalšiu
    else if (activeNPCs.length < MAX_NPCS) {
        if (Math.random() > 0.6) spawnNPC();
    }
}

function spawnNPC() {
    // Zistíme, ktoré ID sú momentálne "voľné" (nie sú na mape)
    const currentActiveIDs = activeNPCs.map(npc => npc.configID);
    const availableIDs = Object.keys(npcConfigs).filter(id => !currentActiveIDs.includes(id));
    
    // Ak už sú všetky postavy na mape, nepúšťame duplikát
    if (availableIDs.length === 0) return;
    
    // Vyberieme náhodné voľné ID a jeho konfiguráciu
    const chosenID = availableIDs[Math.floor(Math.random() * availableIDs.length)];
    const config = npcConfigs[chosenID];
    const spawnNode = roadNodes.find(n => n.id === 37);
    
    // Vytvorenie elementu postavy
    const npcEl = document.createElement('img');
    npcEl.src = chosenID + ".png"; // Predpokladá súbory npc1.png, npc2.png...
    npcEl.style.position = 'absolute';
    npcEl.style.left = spawnNode.x + '%';
    npcEl.style.top = spawnNode.y + '%';
    npcEl.style.width = config.width + 'px';
    npcEl.style.transform = 'translate(-50%, -100%)';
    // UPRAVENÉ: NPC používa rovnakú logiku Z-Indexu ako hráč (+1)
    npcEl.style.zIndex = Math.floor(spawnNode.y) + 1;
    npcEl.style.pointerEvents = 'none';
    npcEl.style.filter = 'drop-shadow(0px 3px 3px rgba(0,0,0,0.4))';
    
    document.getElementById('npcLayer').appendChild(npcEl);
    
    const npcObj = {
        configID: chosenID,
        el: npcEl,
        x: spawnNode.x,
        y: spawnNode.y,
        visitsLeft: Math.floor(Math.random() * 2) + 3, // Navštívi 3 až 4 miesta
        timeout: null
    };
    
    activeNPCs.push(npcObj);
    npcBrain(npcObj);
}

function npcBrain(npc) {
    // Ak už postava pochodila mesto, ide naspäť na spawn point
    if (npc.visitsLeft <= 0) {
        const exitNode = roadNodes.find(n => n.id === 37);
        const path = calculateShortestPathGraph(npc.x, npc.y, exitNode.x, exitNode.y);
        moveNPC(npc, path, () => {
            despawnNPC(npc);
        });
        return;
    }
    
    // Vyberieme náhodnú budovu zo zoznamu
    const keys = Object.keys(buildingsData);
    const targetKey = keys[Math.floor(Math.random() * keys.length)];
    const b = buildingsData[targetKey];
    
    const doorX = b.doorX !== undefined ? b.doorX : b.x;
    const doorY = b.doorY !== undefined ? b.doorY : b.y;

    // Ak niekto na bode stojí, postava nájde iný cieľ
    if (occupiedDoors.has(targetKey)) {
        npc.timeout = setTimeout(() => npcBrain(npc), 2000);
        return;
    }

    npc.visitsLeft--;
    const path = calculateShortestPathGraph(npc.x, npc.y, doorX, doorY);
    
    moveNPC(npc, path, () => {
        // Postava prišla pred budovu, obsadí miesto a stojí 10s
        occupiedDoors.add(targetKey);
        npc.timeout = setTimeout(() => {
            occupiedDoors.delete(targetKey);
            npcBrain(npc);
        }, NPC_STAY_DURATION);
    });
}

function moveNPC(npc, path, onComplete) {
    if (path.length === 0) {
        onComplete();
        return;
    }
    
    const next = path.shift();
    const dist = Math.hypot(next.x - npc.x, next.y - npc.y);
    
    // NPC chodia konštantnou pomalou rýchlosťou (1.8 je koeficient pomalosti)
    let duration = (dist / 10.0) * 1.8; 
    if (duration < 0.1) duration = 0.1;
    
    npc.el.style.transition = `left ${duration}s linear, top ${duration}s linear`;
    npc.el.style.left = next.x + '%';
    npc.el.style.top = next.y + '%';
    
    // UPRAVENÉ: Z-index sa aktualizuje počas pohybu, aby postava správne zachádzala za budovy
    npc.el.style.zIndex = Math.floor(next.y) + 1;

    npc.x = next.x;
    npc.y = next.y;
    
    npc.timeout = setTimeout(() => {
        moveNPC(npc, path, onComplete);
    }, duration * 1000);
}

function despawnNPC(npc) {
    npc.el.remove();
    activeNPCs = activeNPCs.filter(n => n !== npc);
}
