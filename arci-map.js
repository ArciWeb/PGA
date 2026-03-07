// ==========================================
// 1. DÁTA BUDOV A SÚRADNICE
// ==========================================

const buildingsData = {
    "noviny": { name: "Novinový stánok", x: 78.0, y: 56.5, size: 85, img: "buda_noviny.png", detail: "mapa-news.png", action: "openArciNews" },
    "kostol": { name: "Kostol", x: 19.5, y: 28.0, size: 95, img: "buda_kostol.png", detail: "mapa-kostol.png", action: "openGameCalendar" },
    "official": { name: "Official Rank", x: 50.5, y: 36.5, size: 95, img: "buda_official.png", detail: "mapa-official.png", action: "showRankTable_Official" },
    "pga": { name: "PGA Rank", x: 60.0, y: 33.5, size: 100, img: "buda_pga.png", detail: "mapa-pga.png", action: "showRankTable_PGA" },
    "fedex": { name: "Fedex Rank", x: 63.0, y: 40.5, size: 75, img: "buda_fedex.png", detail: "mapa-fedex.png", action: "showRankTable_FEDEX" },
    "players": { name: "Players Rank", x: 72.5, y: 34.0, size: 100, img: "buda_players.png", detail: "mapa-players.png", action: "showRankTable_Association" },
    "world": { name: "World Tour Rank", x: 50.5, y: 24.0, size: 105, img: "buda_worldtour.png", detail: "mapa-worldtour.png", action: "showRankTable_Tour" },
    "ea": { name: "EA Rank", x: 84.5, y: 35.5, size: 100, img: "buda_ea.png", detail: "mapa-ea.png", action: "showRankTable_EA" },
    "amateur": { name: "Amateur Rank", x: 73.0, y: 39.5, size: 65, img: "buda_amateur.png", detail: "mapa-amateur.png", action: "showRankTable_Amateur" },
    "elo": { name: "ELO Rank", x: 95.5, y: 44.5, size: 95, img: "buda_elo.png", detail: "mapa-elo.png", action: "showRankTable_ELO" },
    "stadion": { name: "Štadión", x: 24.0, y: 60.5, size: 380, img: "buda_stadion.png", detail: "mapa-cards.png", action: "showGlobalPlayerCards" },
    "osobne": { name: "Osobné úspechy", x: 13.5, y: 87.0, size: 160, img: "buda_zahradka.png", detail: "mapa-personal.png", action: "openPersonalAchievements" },
    "global": { name: "Globálne úspechy", x: 26.5, y: 95.0, size: 110, img: "buda_tabula.png", detail: "mapa-global.png", action: "openGlobalAchievementsList" },
    "kniznica": { name: "Knižnica", x: 41.0, y: 48.5, size: 115, img: "buda_kniznica.png", detail: "mapa-hof.png", action: "openHallOfFame" },
    "super": { name: "Súperov dom", x: 62.5, y: 54.0, size: 90, img: "buda_super.png", detail: "mapa-vs.png", action: "openComparator" },
    "gym": { name: "Telocvičňa", x: 71.0, y: 56.0, size: 95, img: "buda_gym.png", detail: "mapa-trophy.png", action: "openTrophyGallery" },
    "udrzba": { name: "Údržba", x: 8.5, y: 42.0, size: 75, img: "buda_udrzba.png", detail: "mapa-udrzba.png", action: "openSettings" },
    "plavaren": { name: "Plaváreň", x: 89.0, y: 65.0, size: 190, img: "buda_plavaren.png", detail: "mapa-happy.png", action: "openHappinessOverview" },
    "sponsor": { name: "Sponsor Palác", x: 36.0, y: 31.0, size: 115, img: "buda_palac.png", detail: "mapa-sponsor.png", action: "openSponsorInfo" },
    "arcibot": { name: "ArciBot", x: 12.5, y: 65.5, size: 35, img: "buda_arcibot.png", detail: "mapa-arcibot.png", action: "openAiAssistant" },
    "banka": { name: "Net Worth Banka", x: 24.5, y: 73.5, size: 105, img: "buda_banka.png", detail: "mapa-bank.png", action: "openNetWorth" },
    "bankomat": { name: "Bankomat", x: 28.5, y: 74.0, size: 30, img: "buda_bankomat.png", detail: "mapa-balance.png", action: "openMyPlayer" },
    "vila": { name: "Moja Vila", x: 53.0, y: 53.5, size: 120, img: "buda_vila.png", detail: "mapa-villa.png", action: "openLifestyleManager" },
    "shop": { name: "ArciShop", x: 47.5, y: 79.5, size: 135, img: "buda_arcishop.png", detail: "mapa-shop.png", action: "openArciShop" },
    "cards": { name: "ArciCards", x: 59.0, y: 80.5, size: 95, img: "buda_arcicards.png", detail: "mapa-arcicards.png", action: "openArciCardsHub" },
    "invest": { name: "ArciInvest", x: 38.5, y: 88.0, size: 135, img: "buda_arciinvest.png", detail: "mapa-invest.png", action: "openArciInvest" },
    "tip": { name: "ArciTip", x: 66.5, y: 83.5, size: 95, img: "buda_arcitip.png", detail: "mapa-tip.png", action: "openArciTip" },
    "casino": { name: "ArciBet Casino", x: 78.5, y: 82.5, size: 105, img: "buda_arcibet.png", detail: "mapa-arcibet.png", action: "openArciCasino" },
    "illegal": { name: "Podsvetie", x: 91.0, y: 87.5, size: 85, img: "buda_illegal.png", detail: "mapa-illegal.png", action: "openArciUnderground" }
};

// ==========================================
// 2. JADRO MOTORU MAPY (Z-Index vrstvy a Zoom)
// ==========================================

let arciScale = 1;

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

    // Generovanie HTML pre bočné menu budov
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
        <style>#arci-city-game-container::-webkit-scrollbar { display: none; } #buildingNavMenu::-webkit-scrollbar { display: none; }</style>
        
        <div id="scaleContainer" style="width: 2000px; height: 1125px; transition: width 0.1s ease-out, height 0.1s ease-out;">
            <div class="map-wrapper" id="mapWrapper" style="position: relative; width: 2000px; height: 1125px; overflow: hidden; transform-origin: 0 0; transition: transform 0.1s ease-out;">
                <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                <div id="buildingsLayer"></div>
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

        <button onclick="toggleBuildingMenu(event)" style="position:fixed; top:15px; right:85px; z-index:940; padding:5px 15px; background: #333; color: gold; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 1rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">⋮</button>
        
        <div id="buildingNavMenu" style="display:none; position:fixed; top:50px; right:15px; width: 220px; max-height: 70vh; background: rgba(0,0,0,0.95); border: 2px solid gold; border-radius: 10px; z-index: 945; overflow-y: auto; box-shadow: 0 0 20px rgba(0,0,0,0.8); flex-direction: column; scrollbar-width: none;">
            ${buildingMenuItems}
        </div>

        <button onclick="exitMap()" style="position:fixed; top:15px; right:15px; z-index:940; padding:5px 15px; background: red; color: white; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 0.5rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">MENU</button>
    `;

    renderBuildings();
    if (DEBUG_WAYPOINTS) drawDebugWaypoints();
    
    const mapWrapper = document.getElementById('mapWrapper');
    const scaleContainer = document.getElementById('scaleContainer');
    
    arciScale = Math.max(getMinScale(), 1);
    mapWrapper.style.transform = `scale(${arciScale})`;
    
    scaleContainer.style.width = (2000 * arciScale) + 'px';
    scaleContainer.style.height = (1125 * arciScale) + 'px';
    
    initArciPinchZoom(mapWrapper);
    
    setTimeout(() => { centerCamera(); }, 150);
}

// ==========================================
// 2. JADRO MOTORU MAPY (Z-Index vrstvy a Zoom)
// ==========================================

let arciScale = 1;

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
        <style>#arci-city-game-container::-webkit-scrollbar { display: none; } #buildingNavMenu::-webkit-scrollbar { display: none; }</style>
        
        <div id="scaleContainer" style="width: 2000px; height: 1125px; transition: width 0.1s ease-out, height 0.1s ease-out;">
            <div class="map-wrapper" id="mapWrapper" style="position: relative; width: 2000px; height: 1125px; overflow: hidden; transform-origin: 0 0; transition: transform 0.1s ease-out;">
                <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                <div id="buildingsLayer"></div>
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

        <button onclick="toggleBuildingMenu(event)" style="position:fixed; top:15px; right:85px; z-index:940; padding:5px 15px; background: #333; color: gold; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 1rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">⋮</button>
        
        <div id="buildingNavMenu" style="display:none; position:fixed; top:50px; right:15px; width: 220px; max-height: 70vh; background: rgba(0,0,0,0.95); border: 2px solid gold; border-radius: 10px; z-index: 945; overflow-y: auto; box-shadow: 0 0 20px rgba(0,0,0,0.8); flex-direction: column; scrollbar-width: none;">
            ${buildingMenuItems}
        </div>

        <button onclick="exitMap()" style="position:fixed; top:15px; right:15px; z-index:940; padding:5px 15px; background: red; color: white; border: 3px solid white; border-radius: 30px; font-weight: 900; font-size: 0.5rem; cursor: pointer; box-shadow: 0 0 15px rgba(0,0,0,0.5);">MENU</button>
    `;

    renderBuildings();
    if (DEBUG_WAYPOINTS) drawDebugWaypoints();
    
    const mapWrapper = document.getElementById('mapWrapper');
    const scaleContainer = document.getElementById('scaleContainer');
    
    arciScale = Math.max(getMinScale(), 1);
    mapWrapper.style.transform = `scale(${arciScale})`;
    
    scaleContainer.style.width = (2000 * arciScale) + 'px';
    scaleContainer.style.height = (1125 * arciScale) + 'px';
    
    initArciPinchZoom(mapWrapper);
    
    setTimeout(() => { centerCamera(); }, 150);
}

// ==========================================
// FUNKCIE PRE ROZBAĽOVACIE MENU BUDOV
// ==========================================

function toggleBuildingMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('buildingNavMenu');
    if (menu) {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
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
// 4. POHYB A VYKRESLOVANIE (OPRAVENÉ HITBOXY)
// ==========================================

function renderBuildings() {
    const layer = document.getElementById('buildingsLayer');
    if(!layer) return;
    
    for (let key in buildingsData) {
        const b = buildingsData[key];
        const sizePercent = b.size !== undefined ? b.size : 100;
        const widthPx = 180 * (sizePercent / 100);

        // 1. NEVIDITEĽNÝ HITBOX PRE PRESNÉ KLIKNUTIE
        const hitbox = document.createElement('div');
        hitbox.style.position = 'absolute';
        hitbox.style.left = b.x + '%';
        // Hitbox posunieme kúsok nižšie, aby pokrýval dvere/spodok budovy a nie vzduch nad ňou
        hitbox.style.top = (b.y - 2) + '%'; 
        hitbox.style.width = (widthPx * 0.5) + 'px'; // Hitbox je o polovicu menší ako obrázok
        hitbox.style.height = (widthPx * 0.6) + 'px';
        hitbox.style.transform = 'translate(-50%, -100%)';
        hitbox.style.cursor = 'pointer';
        hitbox.style.zIndex = Math.floor(b.y) + 10; // Musí byť vysoko, aby chytal kliky
        hitbox.onclick = (e) => { e.stopPropagation(); moveToBuilding(key); };
        
        // Ak by si chcel vidieť, kde presne je klikacia zóna, odkomentuj toto:
        // hitbox.style.border = '2px solid rgba(0, 255, 0, 0.5)';
        // hitbox.style.background = 'rgba(0, 255, 0, 0.2)';

        // 2. SAMOTNÝ OBRÁZOK
        const img = document.createElement('img');
        img.src = b.img; 
        img.style.position = 'absolute';
        img.style.left = b.x + '%'; 
        img.style.top = b.y + '%';
        img.style.transform = 'translate(-50%, -100%)';
        img.style.width = widthPx + 'px';
        img.style.maxWidth = 'none'; 
        img.style.zIndex = Math.floor(b.y); 
        img.style.filter = 'drop-shadow(2px 2px 5px rgba(0,0,0,0.5))';
        // TOTO JE MÁGIA: Obrázok ignoruje kliknutia na svoje priehľadné miesta!
        img.style.pointerEvents = 'none'; 
        
        layer.appendChild(img);
        layer.appendChild(hitbox);
    }
}

function handleMapClick(e) {
    const menu = document.getElementById('buildingNavMenu');
    if (menu) menu.style.display = 'none';

    const wrapper = document.getElementById('mapWrapper');
    const rect = wrapper.getBoundingClientRect();
    
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    console.log(`📍 Klikol si na súradnice: x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`);
    navigatePlayerIntelligently(x, y);
}

let isTrackingCamera = false;
let trackEndTime = 0;

function movePlayerStep(x, y, timeInSeconds) {
    const player = document.getElementById('player-character');
    if(!player) return;
    
    player.style.transition = `left ${timeInSeconds}s linear, top ${timeInSeconds}s linear`;
    player.style.left = x + '%'; 
    player.style.top = y + '%';
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
    const b = buildingsData[key];
    navigatePlayerIntelligently(b.x, b.y, () => {
        showBuildingDetail(b);
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

// Nechaj na TRUE a v hre uvidíš červené čiary. Ak budú sedieť, prepni na false!
const DEBUG_WAYPOINTS = true; 

// NOVÁ, PRESNE VYPOČÍTANÁ IZOMETRICKÁ SIEŤ (kopíruje šedý asfalt)
const roadNodes = [
    // --- Horná cesta ---
    { id: 1, x: 28, y: 26 }, // Začiatok pri Kostole
    { id: 2, x: 46, y: 33 }, // Križovatka pod Official Rank
    { id: 3, x: 68, y: 40 }, // Križovatka pod PGA Rank
    { id: 4, x: 88, y: 47 }, // Koniec pri EA Rank
    
    // --- Stredná cesta ---
    { id: 5, x: 16, y: 49 }, // Slepá ulička nad Štadiónom
    { id: 6, x: 35, y: 56 }, // Križovatka pri Knižnici
    { id: 7, x: 57, y: 63 }, // Križovatka pod Súperov dom / Gym
    { id: 8, x: 75, y: 69 }, // Križovatka pri Plavárni
    { id: 9, x: 92, y: 75 }, // Koniec pri Podsvetí
    
    // --- Spodná cesta ---
    { id: 10, x: 12, y: 88 }, // Mostík vľavo dole
    { id: 11, x: 24, y: 75 }, // Križovatka pod Fontánou / pri ArciInvest
    { id: 12, x: 46, y: 82 }, // Križovatka pod ArciShop / Vila
    { id: 13, x: 64, y: 88 }, // Križovatka pod ArciTip / Casino
    { id: 14, x: 86, y: 95 }  // Spodný pravý roh
];

// Prepojenia (červené čiary)
const roadEdges = [
    // Horizontálne (šikmé zľava doprava)
    [1, 2], [2, 3], [3, 4],
    [5, 6], [6, 7], [7, 8], [8, 9],
    [10, 11], [11, 12], [12, 13], [13, 14],
    
    // Vertikálne (šikmé prepojenia zhora nadol)
    [2, 6], [6, 11], // Centrálna chrbtica 1
    [3, 7], [7, 12], // Centrálna chrbtica 2
    [8, 13]          // Pravá spojnica
];

function drawDebugWaypoints() {
    const layer = document.getElementById('debugLayer');
    if (!layer) return;
    
    roadEdges.forEach(edge => {
        const n1 = roadNodes.find(n => n.id === edge[0]);
        const n2 = roadNodes.find(n => n.id === edge[1]);
        if (n1 && n2) {
            const line = document.createElement('div');
            const dist = Math.hypot(n2.x - n1.x, n2.y - n1.y);
            const angle = Math.atan2(n2.y - n1.y, n2.x - n1.x) * 180 / Math.PI;
            
            line.style.position = 'absolute';
            line.style.left = `${n1.x}%`;
            line.style.top = `${n1.y}%`;
            line.style.width = `${dist}%`;
            line.style.height = '4px';
            line.style.background = 'rgba(255, 0, 0, 0.7)';
            line.style.transformOrigin = '0 50%';
            line.style.transform = `rotate(${angle}deg)`;
            layer.appendChild(line);
        }
    });

    roadNodes.forEach(node => {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.left = `${node.x}%`;
        dot.style.top = `${node.y}%`;
        dot.style.width = '12px';
        dot.style.height = '12px';
        dot.style.background = 'yellow';
        dot.style.border = '2px solid red';
        dot.style.borderRadius = '50%';
        dot.style.transform = 'translate(-50%, -50%)';
        layer.appendChild(dot);
    });
}

let pathQueue = [];
let isMoving = false;
let currentMovementTimeout = null;
let activeCallback = null;

function navigatePlayerIntelligently(targetX, targetY, onComplete = null) {
    activeCallback = onComplete;
    
    clearTimeout(currentMovementTimeout);
    isMoving = false; 
    
    const player = document.getElementById('player-character');
    let startX = parseFloat(player.style.left || localStorage.getItem('arciPlayerX') || "10");
    let startY = parseFloat(player.style.top || localStorage.getItem('arciPlayerY') || "40");

    const directDist = Math.hypot(targetX - startX, targetY - startY);
    if (directDist < 8) {
        pathQueue = [{ x: targetX, y: targetY }];
    } else {
        pathQueue = calculateShortestPathGraph(startX, startY, targetX, targetY);
    }

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
    
    let timeInSeconds = (dist / 10.0) * 0.6; 
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

        let neighbors = roadEdges.filter(e => e[0] === currId || e[1] === currId)
                                 .map(e => e[0] === currId ? e[1] : e[0]);

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
