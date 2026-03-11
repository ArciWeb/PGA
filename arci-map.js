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



    "global": { name: "Globálne Achievmenty", x: 28.5, y: 97.0, doorX: 28.5, doorY: 95.0, size: 110, img: "buda_tabula.png", detail: "mapa-global.png", action: "openGlobalAchievementsList" },
    "kniznica": { name: "Sieň Slávy", x: 40.7, y: 50.5, doorX: 40.7, doorY: 50.5, size: 115, img: "buda_kniznica.png", detail: "mapa-hof.png", action: "openHallOfFame" },
    "gym": { name: "Trofeje", x: 71.0, y: 56.0, doorX: 70.0, doorY: 56.0, size: 95, img: "buda_gym.png", detail: "mapa-trophy.png", action: "openTrophyGallery" },
    "sponsor": { name: "Sponzori", x: 36.4, y: 31.3, doorX: 34.5, doorY: 30.6, size: 115, img: "buda_palac.png", detail: "mapa-sponsor.png", action: "openSponsorInfo" },
    "arcibot": { name: "ArciBot", x: 12.5, y: 65.5, doorX: 12.5, doorY: 65.5, size: 35, img: "buda_arcibot.png", detail: "mapa-arcibot.png", action: "openAiAssistant" },

    "super": { name: "Porovnanie Hráčov", x: 62.5, y: 54.0, doorX: 60.5, doorY: 54.0, size: 90, img: "buda_super.png", detail: "mapa-vs.png", action: "openComparator" },


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

<style>
    /* IZOLOVANÉ ŠTÝLY PRE PODSVETIE */
    #modalUnderground.modal-overlay {
        display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 9999; justify-content: center; align-items: center;
        backdrop-filter: blur(5px);
    }
    .ug-content-box {
        width: 95%; max-width: 700px; background: #050505; border: 2px solid #4834d4;
        border-radius: 15px; position: relative; color: #fff; display: flex; flex-direction: column;
        max-height: 90vh; box-shadow: 0 0 50px rgba(72, 52, 212, 0.4);
    }
    .ug-header-v2 {
        padding: 20px; border-bottom: 1px solid #222; display: flex; justify-content: space-between; align-items: center;
        background: linear-gradient(to right, #000, #130f40); border-radius: 15px 15px 0 0;
    }
    .ug-tab-nav {
        display: flex; background: #111; padding: 5px; gap: 5px; margin: 10px 20px; border-radius: 10px;
    }
    .ug-tab-v2 {
        flex: 1; padding: 12px; border: none; background: transparent; color: #555;
        font-weight: 900; cursor: pointer; border-radius: 8px; transition: 0.3s; font-size: 0.8rem;
    }
    .ug-tab-v2.active { background: #4834d4; color: #fff; }
    
    .ug-body { flex: 1; overflow-y: auto; padding: 20px; scrollbar-width: thin; }
    
    /* Karty tovaru */
    .drug-item {
        background: #111; border: 1px solid #222; border-radius: 12px; padding: 15px;
        margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;
        transition: 0.2s; border-left: 4px solid #4834d4;
    }
    .drug-item:hover { border-color: #686de0; background: #161616; }
    .drug-meta h4 { margin: 0; color: #fff; font-size: 1.1rem; }
    .drug-meta span { font-size: 0.75rem; color: #666; text-transform: uppercase; }
    
    .buy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
    .btn-buy-v2 {
        padding: 6px; border: 1px solid #333; background: #000; color: #aaa;
        font-size: 0.7rem; cursor: pointer; border-radius: 4px; font-weight: bold;
    }
    .btn-buy-v2:hover { background: #4834d4; color: #fff; border-color: #fff; }

    /* Vyjednávanie */
    .neg-screen { text-align: center; padding: 20px; animation: ugSlideIn 0.3s ease; }
    @keyframes ugSlideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    .patience-container { display: flex; justify-content: center; gap: 8px; margin: 15px 0; }
    .p-dot { width: 12px; height: 12px; border-radius: 50%; background: #222; border: 1px solid #444; }
    .p-dot.active { background: #f9ca24; box-shadow: 0 0 10px #f9ca24; }

    .price-display {
        font-size: 3rem; font-weight: 900; color: #686de0; margin: 10px 0;
        text-shadow: 0 0 20px rgba(104, 109, 224, 0.4);
    }
    .btn-action {
        width: 100%; padding: 15px; margin-top: 10px; border: none; border-radius: 10px;
        font-weight: 900; cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
    }

    /* CUSTOM POPUP OKIENKA */
    #ug-custom-alert-overlay {
        display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); z-index: 10000; justify-content: center; align-items: center;
        backdrop-filter: blur(3px);
    }
    .ug-custom-alert-box {
        background: #111; border: 2px solid #4834d4; border-radius: 12px; padding: 25px;
        max-width: 400px; width: 90%; text-align: center; color: #fff;
        box-shadow: 0 0 30px rgba(72, 52, 212, 0.5); animation: ugPopIn 0.2s ease;
    }
    @keyframes ugPopIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .ug-custom-alert-title { font-size: 1.2rem; font-weight: 900; margin-bottom: 10px; color: #686de0; }
    .ug-custom-alert-text { font-size: 0.9rem; color: #ccc; margin-bottom: 20px; white-space: pre-wrap; }
    .ug-custom-alert-buttons { display: flex; gap: 10px; justify-content: center; }
    .ug-alert-btn {
        padding: 10px 20px; border: none; border-radius: 8px; font-weight: bold;
        cursor: pointer; text-transform: uppercase; transition: 0.2s;
    }
    .ug-alert-btn-ok { background: #4834d4; color: #fff; }
    .ug-alert-btn-ok:hover { background: #686de0; }
    .ug-alert-btn-cancel { background: #333; color: #aaa; }
    .ug-alert-btn-cancel:hover { background: #444; color: #fff; }
    .ug-alert-input {
        width: 80%; padding: 10px; margin-bottom: 20px; border: 1px solid #444;
        background: #000; color: #fff; border-radius: 6px; text-align: center; font-size: 1rem;
    }
</style>

<div id="modalUnderground" class="modal-overlay">
    <div class="ug-content-box">
        <div class="ug-header-v2">
            <div>
                <h2 style="margin:0; letter-spacing:2px; color:#fff;">ARCI<span style="color:#4834d4;">UNDERGROUND</span></h2>
                <small id="ug-balance-display" style="color:#2ecc71; font-weight:bold;">Zostatok: 0.00 €</small>
            </div>
            <button onclick="closeUgModal()" style="background:#e74c3c; border:1px solid #c0392b; color:#fff; font-size:0.8rem; padding:8px 12px; border-radius:6px; font-weight:900; cursor:pointer; text-transform:uppercase; box-shadow: 0 0 10px rgba(231, 76, 60, 0.4); transition:0.2s;">🚪 Opustiť Ghetto</button>
        </div>

        <div style="display:flex; gap:10px; padding: 0 20px; margin-top:10px;">
            <div onclick="openBribeMenu()" style="flex:1; background:#111; padding:10px; border-radius:8px; border-bottom: 2px solid #ff4757; cursor:pointer; transition:0.2s;" onmouseover="this.style.background='#222'" onmouseout="this.style.background='#111'" title="Klikni pre podplatenie polície">
                <div style="display:flex; justify-content:space-between; font-size:0.6rem; color:#ff4757; font-weight:bold;"><span>🚨 POLICE HEAT (Úplatok)</span><span id="txt-ug-heat">0%</span></div>
                <div style="width:100%; height:4px; background:#222; margin-top:5px;"><div id="bar-ug-heat" style="width:0%; height:100%; background:#ff4757; transition: 0.3s;"></div></div>
            </div>
            <div style="flex:1; background:#111; padding:10px; border-radius:8px; border-bottom: 2px solid #2ecc71;">
                <div style="display:flex; justify-content:space-between; font-size:0.6rem; color:#888;"><span>LOYALTY</span><span id="txt-ug-loy">0%</span></div>
                <div style="width:100%; height:4px; background:#222; margin-top:5px;"><div id="bar-ug-loy" style="width:0%; height:100%; background:#2ecc71;"></div></div>
            </div>
        </div>

        <div class="ug-tab-nav">
            <button id="ug-btn-market" class="ug-tab-v2 active" onclick="ugSwitch('market')">🛒 ČIERNY TRH</button>
            <button id="ug-btn-inv" class="ug-tab-v2" onclick="ugSwitch('inv')">📦 SKLAD (FIFO)</button>
            <button id="ug-btn-deals" class="ug-tab-v2" onclick="ugSwitch('deals')">🤝 OBCHODY</button>
        </div>

        <div id="ug-body-content" class="ug-body">
            </div>
    </div>
</div>

<div id="ug-custom-alert-overlay">
    <div class="ug-custom-alert-box">
        <div id="ug-custom-alert-title" class="ug-custom-alert-title">Oznámenie</div>
        <div id="ug-custom-alert-text" class="ug-custom-alert-text"></div>
        <input type="number" id="ug-custom-alert-input" class="ug-alert-input" style="display:none;">
        <div class="ug-custom-alert-buttons" id="ug-custom-alert-buttons">
            </div>
    </div>
</div>

<script>
/* --- ENGINE 2.1 (DEGRADATION, TRASH SYSTEM & IN-GAME CALENDAR) --- */

// --- CUSTOM POPUP FUNKCIE ---
function ugAlert(message, title = "Oznámenie", callback = null) {
    const overlay = document.getElementById('ug-custom-alert-overlay');
    document.getElementById('ug-custom-alert-title').innerText = title;
    document.getElementById('ug-custom-alert-text').innerText = message;
    document.getElementById('ug-custom-alert-input').style.display = 'none';
    
    const btnContainer = document.getElementById('ug-custom-alert-buttons');
    btnContainer.innerHTML = `<button class="ug-alert-btn ug-alert-btn-ok" onclick="ugCloseAlert(true)">OK</button>`;
    
    overlay.style.display = 'flex';
    overlay.dataset.callbackType = 'alert';
    window.ugCurrentCallback = callback;
}

function ugConfirm(message, title = "Potvrdenie", callback) {
    const overlay = document.getElementById('ug-custom-alert-overlay');
    document.getElementById('ug-custom-alert-title').innerText = title;
    document.getElementById('ug-custom-alert-text').innerText = message;
    document.getElementById('ug-custom-alert-input').style.display = 'none';
    
    const btnContainer = document.getElementById('ug-custom-alert-buttons');
    btnContainer.innerHTML = `
        <button class="ug-alert-btn ug-alert-btn-cancel" onclick="ugCloseAlert(false)">Zrušiť</button>
        <button class="ug-alert-btn ug-alert-btn-ok" onclick="ugCloseAlert(true)">Potvrdiť</button>
    `;
    
    overlay.style.display = 'flex';
    overlay.dataset.callbackType = 'confirm';
    window.ugCurrentCallback = callback;
}

function ugPrompt(message, title = "Zadaj hodnotu", callback) {
    const overlay = document.getElementById('ug-custom-alert-overlay');
    document.getElementById('ug-custom-alert-title').innerText = title;
    document.getElementById('ug-custom-alert-text').innerText = message;
    
    const input = document.getElementById('ug-custom-alert-input');
    input.style.display = 'block';
    input.value = '';
    input.focus();

    const btnContainer = document.getElementById('ug-custom-alert-buttons');
    btnContainer.innerHTML = `
        <button class="ug-alert-btn ug-alert-btn-cancel" onclick="ugCloseAlert(null)">Zrušiť</button>
        <button class="ug-alert-btn ug-alert-btn-ok" onclick="ugCloseAlert(document.getElementById('ug-custom-alert-input').value)">OK</button>
    `;
    
    overlay.style.display = 'flex';
    overlay.dataset.callbackType = 'prompt';
    window.ugCurrentCallback = callback;
}

function ugCloseAlert(result) {
    document.getElementById('ug-custom-alert-overlay').style.display = 'none';
    if (typeof window.ugCurrentCallback === 'function') {
        window.ugCurrentCallback(result);
    }
    window.ugCurrentCallback = null;
}

// --- POMOCNÉ FUNKCIE PRE HERNÝ ČAS ---
function ugGetLatestGameFile() {
    if (typeof db !== 'undefined' && db.files && db.files.length > 0) {
        const sortedFiles = [...db.files].sort((a, b) => a.timestamp - b.timestamp);
        return sortedFiles[sortedFiles.length - 1];
    }
    return null;
}

function ugGetCurrentTime() {
    const file = ugGetLatestGameFile();
    if (file && typeof getTournamentDateObj === 'function') {
        return getTournamentDateObj(file.season, file.eventName).getTime();
    }
    return Date.now();
}

function ugGetCurrentDateString() {
    const file = ugGetLatestGameFile();
    if (file && typeof getTournamentDate === 'function') {
        return getTournamentDate(file.season, file.eventName);
    }
    const skMonths = ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'];
    const d = new Date();
    return `${d.getDate()}. ${skMonths[d.getMonth()]} ${d.getFullYear()}`;
}

const DRUGS_CATALOG = [
    { id: 'jh', name: 'Jack Herer', cat: 'WEED', price: 14, qual: 'High' },
    { id: 'ww', name: 'Biela Vdova', cat: 'WEED', price: 11, qual: 'Mid' },
    { id: 'ak', name: 'AK-47', cat: 'WEED', price: 12, qual: 'Mid' },
    { id: 'og', name: 'OG Kush', cat: 'WEED', price: 16, qual: 'High' },
    { id: 'nl', name: 'Northern Lights', cat: 'WEED', price: 13, qual: 'High' },
    { id: 'ah', name: 'Amnesia Haze', cat: 'WEED', price: 15, qual: 'High' },
    { id: 'sk', name: 'Skunk #1', cat: 'WEED', price: 9, qual: 'Low' },
    { id: 'ck_col', name: 'Kokaín Kolumbia', cat: 'HARD', price: 95, qual: 'Elite' },
    { id: 'ck_bol', name: 'Kokaín Bolívia', cat: 'HARD', price: 80, qual: 'High' },
    { id: 'md_blue', name: 'MDMA Punisher', cat: 'PILLS', price: 28, qual: 'High' },
    { id: 'md_pink', name: 'MDMA Ferrari', cat: 'PILLS', price: 22, qual: 'Mid' },
    { id: 'meth_cz', name: 'Pervitín (Czech)', cat: 'HARD', price: 45, qual: 'High' },
    { id: 'lsd_hof', name: 'LSD Hoffman', cat: 'PSY', price: 35, qual: 'Epická' },
    { id: 'her_br', name: 'Heroín Brown', cat: 'HARD', price: 60, qual: 'Mid' }
];

// --- NOVÉ POMOCNÉ FUNKCIE PRE ROZPOZNANIE MAP ZÁKAZNÍKOV ---
function ugGetCustomer(idStr) {
    if (String(idStr).startsWith('map_')) {
        return appState.underground.mapCustomers[idStr];
    }
    return appState.underground.customers[parseInt(idStr)];
}

function ugMarkDoneOrRemove(idStr) {
    if (String(idStr).startsWith('map_')) {
        appState.underground.mapCustomers[idStr].status = 'done';
    } else {
        appState.underground.customers.splice(parseInt(idStr), 1);
    }
}

function ugExitNeg(idStr) {
    if (String(idStr).startsWith('map_')) {
        closeUgModal(); // NPC na mape -> zatvoríme okno a vrátime sa k mape
    } else {
        ugSwitch('deals'); // Podsvetie -> vrátime sa do zoznamu ponúk
    }
}
// -------------------------------------------------------------

function initUg() {
    if (!appState.underground) {
        appState.underground = {
            inventory: [],
            loyalty: 2,
            heat: 0,
            customers: [],
            lastUpdate: 0, 
            totalSales: 0,
            soldThisTurn: false,
            knownCustomers: {}
        };
    }
    if (appState.underground.soldThisTurn === undefined) appState.underground.soldThisTurn = false;
    if (appState.underground.knownCustomers === undefined) appState.underground.knownCustomers = {};
    
    // Nové dáta pre zákazníkov z ulice (NPC na mape)
    if (appState.underground.mapCustomers === undefined) appState.underground.mapCustomers = {};
    if (appState.underground.mapLastUpdate === undefined) appState.underground.mapLastUpdate = 0;
}

// --- POLICAJNÁ RAZIA A ÚPLATKY ---
function checkPoliceRaid() {
    const ug = appState.underground;
    if (ug.heat >= 100) {
        ugAlert("🚨 POLICAJNÁ RAZIA! 🚨\n\nSkoro ťa chytili, ale stihol si všetok tovar spláchnuť do záchoda. Tvoj heat je teraz 0, ale tvoja lojalita padla na 0, pretože zákazníci ti prestali veriť a ušli.", "Zásah polície");
        
        if (!appState.personalStats) appState.personalStats = {};
        let totalTrashed = 0;
        ug.inventory.forEach(i => totalTrashed += i.amt);
        
        if (totalTrashed > 0) {
            appState.personalStats.drugsTrashedTimes = (appState.personalStats.drugsTrashedTimes || 0) + 1;
            appState.personalStats.drugsTrashedGrams = (appState.personalStats.drugsTrashedGrams || 0) + totalTrashed;
            appState.personalStats.inventoryEmptied = 1;
        }

        ug.inventory = [];
        ug.heat = 0;
        ug.loyalty = 0;
        ug.customers = []; // Utečú podsvetie
        for (let k in ug.mapCustomers) ug.mapCustomers[k].status = 'done'; // Utečú aj z ulice
        
        ugRefreshStats();
        ugSwitch('inv'); 
        if(typeof saveAuto === 'function') saveAuto();
        return true; 
    }
    return false; 
}

window.openBribeMenu = function() {
    if (appState.underground.heat <= 0) {
        ugAlert("Polícia o tebe momentálne nevie. Nie je dôvod platiť úplatky.", "Čistý štít");
        return;
    }

    let html = `
        <div class="modal-header" style="background: linear-gradient(90deg, #111, #ff4757); border-bottom: 2px solid #ff0000;">
            <h2>🚔 Podplatenie Polície</h2>
            <button class="close-btn" onclick="closeTopModal()">&times;</button>
        </div>
        <div class="modal-body" style="background: #0a0a0a; padding: 20px; text-align: center;">
            <p style="color: #ccc; margin-bottom: 15px;">Máš aktívny Heat (<span style="color:#ff4757; font-weight:bold;">${Math.floor(appState.underground.heat)}%</span>). Ak dosiahne 100%, prebehne razia a prídeš o všetok tovar aj lojalitu zákazníkov.</p>
            <p style="color: #fff; margin-bottom: 20px;">Koľko chceš zaplatiť skorumpovaným policajtom za vymazanie záznamov?</p>
            
            <div style="display:flex; flex-direction: column; gap: 10px; max-width: 400px; margin: 0 auto;">
                <button onclick="payBribe(100, 10)" style="background: #2c3e50; color:#fff; padding:12px; border:1px solid #34495e; border-radius:8px; cursor:pointer; font-weight:bold; transition:0.2s;" onmouseover="this.style.background='#34495e'" onmouseout="this.style.background='#2c3e50'">Zaplatiť 100 € (-10% Heat)</button>
                <button onclick="payBribe(200, 20)" style="background: #2c3e50; color:#fff; padding:12px; border:1px solid #34495e; border-radius:8px; cursor:pointer; font-weight:bold; transition:0.2s;" onmouseover="this.style.background='#34495e'" onmouseout="this.style.background='#2c3e50'">Zaplatiť 200 € (-20% Heat)</button>
                <button onclick="payBribe(500, 50)" style="background: #2c3e50; color:#fff; padding:12px; border:1px solid #34495e; border-radius:8px; cursor:pointer; font-weight:bold; transition:0.2s;" onmouseover="this.style.background='#34495e'" onmouseout="this.style.background='#2c3e50'">Zaplatiť 500 € (-50% Heat)</button>
                <button onclick="payBribe(1000, 100)" style="background: #8e44ad; color:#fff; padding:12px; border:1px solid #9b59b6; border-radius:8px; cursor:pointer; font-weight:bold; transition:0.2s;" onmouseover="this.style.background='#9b59b6'" onmouseout="this.style.background='#8e44ad'">Zaplatiť 1000 € (Heat na 0%)</button>
            </div>
        </div>
    `;
    createModal(html, 'bribe-modal');
};

window.payBribe = function(cost, heatReduction) {
    if (appState.betting.balance < cost) {
        ugAlert("Nemáš dostatok hotovosti na tento úplatok!", "Nedostatok peňazí");
        return;
    }

    appState.betting.balance -= cost;
    appState.underground.heat = Math.max(0, appState.underground.heat - heatReduction);
    
    ugLogTransaction(`Úplatok policajtom (-${heatReduction}% Heat)`, -cost);

    if (typeof sfx !== 'undefined' && sfx.cash) sfx.cash.play();

    ugAlert(`Úplatok úspešne odovzdaný. Tvoj Heat klesol o ${heatReduction}%.`, "Úplatok prijatý", () => {
        ugRefreshStats();
        closeTopModal();
    });
};

function openArciUnderground() {
    initUg();
    document.getElementById('modalUnderground').style.display = 'flex';
    ugRefreshStats();
    ugSwitch('market');
}

// --- NOVÉ: FUNKCIA PRE OTVORENIE OBCHODU CEZ NPC NA MAPE ---
window.openMapNpcNegotiation = function(npcId, npcName) {
    initUg();
    const ug = appState.underground;
    const now = ugGetCurrentTime();

    // Reset NPC zákazníkov na začiatku nového turnaja
    if (ug.mapLastUpdate !== now) {
        ug.mapCustomers = {};
        ug.mapLastUpdate = now;
    }

    // Ak sme tohto NPC už tento turnaj riešili (okradli, odmietli, predali)
    if (ug.mapCustomers[npcId] && ug.mapCustomers[npcId].status === 'done') {
        ugAlert("Tento zákazník od teba pre tento týždeň už nič nepotrebuje.", "Žiadny dopyt");
        return;
    }

    // Ak ho vidíme prvýkrát tento turnaj, vygenerujeme mu dopyt
    if (!ug.mapCustomers[npcId]) {
        const d = DRUGS_CATALOG[Math.floor(Math.random() * DRUGS_CATALOG.length)];
        ug.mapCustomers[npcId] = {
            name: npcName || "Zákazník z ulice",
            baseName: npcName || "Zákazník z ulice",
            drugId: d.id,
            drugName: d.name,
            amt: Math.floor(Math.random() * 6) + 1,
            offer: d.price * (1.1 + (Math.random() * 0.2)),
            patience: 3,
            status: 'active'
        };
    }

    document.getElementById('modalUnderground').style.display = 'flex';
    ugRefreshStats();
    
    // Vizuálne prepneme UI na Deals (aj keď sme skryli zoznam)
    document.querySelectorAll('.ug-tab-v2').forEach(b => b.classList.remove('active'));
    document.getElementById('ug-btn-deals').classList.add('active');
    
    ugStartNeg(npcId); // Ideme rovno do vyjednávania s ID NPC
};
// -------------------------------------------------------------

function closeUgModal() {
    if(typeof saveAuto === 'function') saveAuto();
    document.getElementById('modalUnderground').style.display = 'none';
    
    if (window.isMapActive) {
        startArciCityGame();
    }
}

function ugRefreshStats() {
    const ug = appState.underground;
    document.getElementById('ug-balance-display').innerText = `Zostatok: ${appState.betting.balance.toFixed(2)} €`;
    document.getElementById('txt-ug-heat').innerText = Math.floor(ug.heat) + '%';
    document.getElementById('bar-ug-heat').style.width = ug.heat + '%';
    document.getElementById('txt-ug-loy').innerText = Math.floor(ug.loyalty) + '%';
    document.getElementById('bar-ug-loy').style.width = ug.loyalty + '%';
}

function ugSwitch(tab) {
    document.querySelectorAll('.ug-tab-v2').forEach(b => b.classList.remove('active'));
    document.getElementById('ug-btn-' + tab).classList.add('active');
    const container = document.getElementById('ug-body-content');
    container.innerHTML = '';

    if (!appState.personalStats) appState.personalStats = {};
    if (tab === 'market') {
        appState.personalStats.ugMarketVisits = (appState.personalStats.ugMarketVisits || 0) + 1;
        ugRenderMarket(container);
    }
    if (tab === 'inv') ugRenderInventory(container);
    if (tab === 'deals') ugRenderDeals(container);
}

function ugRenderMarket(el) {
    let html = `<p style="color:#666; font-size:0.75rem; margin-bottom:15px;">VEĽKOOBCHOD: Čím viac kúpiš, tým lepšia cena.</p>`;
    DRUGS_CATALOG.forEach(d => {
        html += `
        <div class="drug-item">
            <div class="drug-meta">
                <span>${d.cat}</span>
                <h4>${d.name}</h4>
                <small>Základ: ${d.price}€ / g</small>
            </div>
            <div class="buy-grid">
                <button class="btn-buy-v2" onclick="ugBuy('${d.id}', 10)">10g</button>
                <button class="btn-buy-v2" onclick="ugBuy('${d.id}', 20)">20g</button>
                <button class="btn-buy-v2" onclick="ugBuy('${d.id}', 50)">50g</button>
                <button class="btn-buy-v2" onclick="ugBuy('${d.id}', 100)">100g</button>
            </div>
        </div>`;
    });
    el.innerHTML = html;
}

function ugBuy(drugId, amt) {
    const drug = DRUGS_CATALOG.find(d => d.id === drugId);
    let total = drug.price * amt;
    if (amt === 20) total *= 0.95;
    if (amt === 50) total *= 0.90;
    if (amt === 100) total *= 0.80;

    ugConfirm(`Naozaj chceš nakúpiť ${amt}g drogy ${drug.name} za celkovú sumu ${total.toFixed(2)} €?`, "Nákup od dodávateľa", (confirmed) => {
        if (!confirmed) return;

        if (appState.betting.balance >= total) {
            appState.betting.balance -= total;
            
            if (!appState.personalStats) appState.personalStats = {};
            appState.personalStats.drugsBoughtGrams = (appState.personalStats.drugsBoughtGrams || 0) + amt;
            appState.personalStats.moneySpentOnDrugs = (appState.personalStats.moneySpentOnDrugs || 0) + total;
            if (amt === 100) appState.personalStats.bulk100Buys = (appState.personalStats.bulk100Buys || 0) + 1;

            appState.underground.inventory.push({
                id: drug.id,
                name: drug.name,
                amt: amt,
                buyPrice: total / amt,
                time: ugGetCurrentTime(), 
                qual: drug.qual
            });
            
            appState.underground.heat = Math.min(100, appState.underground.heat + (amt/40));
            
            ugLogTransaction(`Nákup: ${amt}g ${drug.name}`, -total);
            ugRefreshStats();
            
            if (checkPoliceRaid()) return; 
            
            ugAlert(`Sklad prijal ${amt}g ${drug.name}.`, "Úspešný nákup", () => {
                ugSwitch('inv');
            });
        } else { 
            ugAlert("Nedostatok hotovosti!", "Chyba nákupu"); 
        }
    });
}

function ugRenderInventory(el) {
    let html = `<h3>Tvoj aktuálny sklad</h3>`;
    if (appState.underground.inventory.length === 0) {
        html += `<p style="text-align:center; color:#444; margin-top:40px;">Sklad je prázdny.</p>`;
    }
    appState.underground.inventory.forEach((item, index) => {
        const ageDays = Math.floor((ugGetCurrentTime() - item.time) / (1000 * 60 * 60 * 24));
        const ageWeeks = Math.floor(ageDays / 7);
        let currentQuality = Math.max(0, 100 - (ageWeeks * 5)); 
        let colorHex = '#2ecc71';
        if(currentQuality < 75) colorHex = '#f1c40f';
        if(currentQuality < 40) colorHex = '#e67e22';
        if(currentQuality <= 10) colorHex = '#e74c3c';
        
        html += `
        <div class="drug-item" style="border-left-color: ${colorHex}">
            <div class="drug-meta">
                <h4>${item.name} (${item.amt}g)</h4>
                <small>Stav: <span style="color:${colorHex}; font-weight:bold;">${currentQuality}%</span> | Vek: ${ageWeeks} týžd.</small>
            </div>
            <div style="text-align:right">
                <div style="font-weight:bold; color:#666; margin-bottom:5px;">${item.buyPrice.toFixed(2)}€/g</div>
                <button onclick="ugTrashItem(${index})" style="background:#e74c3c; border:none; color:#fff; padding:4px 8px; border-radius:4px; font-size:0.7rem; cursor:pointer;">🚽 Spláchnuť</button>
            </div>
        </div>`;
    });
    el.innerHTML = html;
}

function ugTrashItem(index) {
    ugConfirm('Naozaj chceš tento tovar spláchnuť do záchoda?', "Likvidácia tovaru", (confirmed) => {
        if(confirmed) {
            if (!appState.personalStats) appState.personalStats = {};
            appState.personalStats.drugsTrashedTimes = (appState.personalStats.drugsTrashedTimes || 0) + 1;
            appState.personalStats.drugsTrashedGrams = (appState.personalStats.drugsTrashedGrams || 0) + appState.underground.inventory[index].amt;

            appState.underground.inventory.splice(index, 1);
            
            if (appState.underground.inventory.length === 0) appState.personalStats.inventoryEmptied = 1;

            if(typeof saveAuto === 'function') saveAuto();
            ugRenderInventory(document.getElementById('ug-body-content'));
        }
    });
}

function ugGenerateName() {
    const names = ["Adam", "Boris", "Cyril", "Dávid", "Erik", "Filip", "Gabriel", "Hugo", "Ivan", "Jakub", "Karol", "Lukáš", "Martin", "Norbert", "Ondrej", "Patrik", "Richard", "Samuel", "Tomáš", "Viktor", "Zdeno", "Andrej", "Branislav", "Daniel", "Emil", "Igor", "Jozef", "Marek", "Milan","Juraj", "Roman", "Peter"];
    const initials = "ABCDFGHJKLMNOPRSTVZ";
    let n = names[Math.floor(Math.random() * names.length)];
    let i = initials[Math.floor(Math.random() * initials.length)];
    return n + " " + i + ".";
}

function ugRenderDeals(el) {
    const ug = appState.underground;
    const now = ugGetCurrentTime();

    if (ug.lastUpdate !== now) {
        if (!ug.soldThisTurn) {
            ug.heat = Math.max(0, ug.heat - 15); 
            if (ug.heat === 0) {
                if (!appState.personalStats) appState.personalStats = {};
                appState.personalStats.heatCooledToZero = 1;
            }
        }
        
        ug.soldThisTurn = false; 
        ug.customers = [];
        ug.lastUpdate = now;
        
        if (!ug.knownCustomers) ug.knownCustomers = {};

        Object.keys(ug.knownCustomers).forEach(name => {
            if (ug.knownCustomers[name] >= 20) {
                const d = DRUGS_CATALOG[Math.floor(Math.random() * DRUGS_CATALOG.length)];
                ug.customers.push({
                    name: "⭐ " + name,
                    baseName: name,
                    drugId: d.id,
                    drugName: d.name,
                    amt: Math.floor(Math.random() * 6) + 1,
                    offer: d.price * (1.1 + (Math.random() * 0.2)),
                    patience: 3
                });
            }
        });
        
        const count = Math.floor(ug.loyalty / 10) + 5; 
        let nonVips = Object.keys(ug.knownCustomers).filter(n => ug.knownCustomers[n] < 20);

        for (let i = 0; i < count; i++) {
            let selectedName = "";
            let attempts = 0;
            
            if (nonVips.length > 0 && Math.random() > 0.5) {
                let rIdx = Math.floor(Math.random() * nonVips.length);
                selectedName = nonVips[rIdx];
                nonVips.splice(rIdx, 1); 
            } else {
                do {
                    selectedName = ugGenerateName();
                    attempts++;
                } while (ug.customers.find(c => c.baseName === selectedName) && attempts < 50);
            }

            const d = DRUGS_CATALOG[Math.floor(Math.random() * DRUGS_CATALOG.length)];
            ug.customers.push({
                name: selectedName,
                baseName: selectedName,
                drugId: d.id,
                drugName: d.name,
                amt: Math.floor(Math.random() * 6) + 1,
                offer: d.price * (1.1 + (Math.random() * 0.2)),
                patience: 3
            });
        }
    }

    let html = `<h3>Záujemcovia (Aktuálny turnaj)</h3>`;
    if (ug.customers.length === 0) {
        html += `<p style="text-align:center; color:#444;">V tomto týždni ťa nikto nezháňa.</p>`;
    }

    ug.customers.forEach((c, idx) => {
        let isVIP = c.name.startsWith("⭐");
        let nameColor = isVIP ? "#f9ca24" : "#fff";
        let subText = isVIP ? `<span style="color:#f9ca24; font-size:0.65rem;">(VIP Štamgast)</span>` : "";

        html += `
        <div class="drug-item" ${isVIP ? 'style="border-left-color: #f9ca24; background: #1a1a00;"' : ''}>
            <div class="drug-meta">
                <h4 style="color:${nameColor}">${c.name} ${subText}</h4>
                <small>Dopyt: ${c.amt}g ${c.drugName}</small>
            </div>
            <button class="btn-buy-v2" style="background:${isVIP ? '#f9ca24' : '#4834d4'}; color:${isVIP ? '#000' : '#fff'};" onclick="ugStartNeg('${idx}')">OBCHODOVAŤ</button>
        </div>`;
    });
    el.innerHTML = html;
}

function ugStartNeg(idx) {
    const c = ugGetCustomer(idx);
    const container = document.getElementById('ug-body-content');
    
    let dots = '';
    for(let i=0; i<3; i++) dots += `<div class="p-dot ${i < c.patience ? 'active' : ''}"></div>`;

    container.innerHTML = `
    <div class="neg-screen">
        <h2 style="margin:0;">${c.name}</h2>
        <p style="color:#666;">Chce kúpiť ${c.amt}g ${c.drugName}</p>
        <div class="patience-container">${dots}</div>
        
        <div class="price-display">${(c.offer * c.amt).toFixed(2)} €</div>
        <small style="color:#444;">(${(c.offer).toFixed(2)} € / gram)</small>

        <div style="margin-top:30px;">
            <button class="btn-action" style="background:#2ecc71; color:#000;" onclick="ugAccept('${idx}')">PRIJAŤ OBCHOD</button>
            <button class="btn-action" style="background:#f9ca24; color:#000;" onclick="ugRaise('${idx}')">SKÚSIŤ VYŠŠIU CENU (+10%)</button>
            <button class="btn-action" style="background:#9b59b6; color:#fff;" onclick="ugOfferAlt('${idx}')">PONÚKNUŤ INÝ TOVAR</button>
            <button class="btn-action" style="background:#3498db; color:#fff;" onclick="ugOfferAmount('${idx}')">PONÚKNUŤ INÉ MNOŽSTVO</button>
            <button class="btn-action" style="background:#e74c3c; color:#fff;" onclick="ugScamDeal('${idx}')">POROBIŤ ZÁKAZNÍKA (OKRADNÚŤ)</button>
            <button class="btn-action" style="background:none; color:#555; font-size:0.7rem;" onclick="ugIgnoreDeal('${idx}')">VRÁTIŤ SA SPÄŤ / ODMIETNUŤ</button>
        </div>
    </div>`;
    
    if (!appState.personalStats) appState.personalStats = {};
    appState.personalStats.negotiationsStarted = (appState.personalStats.negotiationsStarted || 0) + 1;
}

function ugIgnoreDeal(idx) {
    if (!appState.personalStats) appState.personalStats = {};
    appState.personalStats.dealsIgnored = (appState.personalStats.dealsIgnored || 0) + 1;
    
    // Ak ide o NPC z mapy, označíme ho, že pre tento týždeň odišiel s prázdnou
    if (String(idx).startsWith('map_')) {
        ugMarkDoneOrRemove(idx);
    }
    ugExitNeg(idx);
}

function ugRaise(idx) {
    const c = ugGetCustomer(idx);
    c.patience--;

    if (!appState.personalStats) appState.personalStats = {};

    if (c.patience < 0 || Math.random() > 0.6) {
        appState.underground.loyalty = Math.max(0, appState.underground.loyalty - 1);
        ugMarkDoneOrRemove(idx);
        appState.personalStats.customersLostPatience = (appState.personalStats.customersLostPatience || 0) + 1;
        
        ugAlert("Zákazník stratil nervy a odišiel!", "Zlý odhad", () => {
            ugRefreshStats();
            ugExitNeg(idx);
        });
    } else {
        c.offer *= 1.10; 
        appState.personalStats.successfulPriceRaises = (appState.personalStats.successfulPriceRaises || 0) + 1;
        ugStartNeg(idx);
        ugRefreshStats();
    }
}

function ugOfferAlt(idx) {
    const c = ugGetCustomer(idx);
    let html = `<h3 style="margin-top:0; color:#9b59b6;">Čo mu chceš ponúknuť namiesto ${c.drugName}?</h3>`;
    
    if (appState.underground.inventory.length === 0) {
        html += `<p style="text-align:center; color:#555;">Sklad je prázdny!</p><button class="btn-action" style="background:#333; color:#fff;" onclick="ugStartNeg('${idx}')">SPÄŤ NA VYJEDNÁVANIE</button>`;
    } else {
        appState.underground.inventory.forEach((item, invIdx) => {
            html += `
            <div class="drug-item" style="cursor:pointer;" onclick="ugResolveAlt('${idx}', ${invIdx})">
                <div class="drug-meta">
                    <h4>${item.name}</h4>
                    <small>Máš skladom: ${item.amt}g</small>
                </div>
                <div style="color:#f1c40f; font-weight:bold;">PONÚKNUŤ</div>
            </div>`;
        });
        html += `<button class="btn-action" style="background:#222; color:#aaa; margin-top:15px;" onclick="ugStartNeg('${idx}')">ZRUŠIŤ A VRÁTIŤ SA</button>`;
    }
    document.getElementById('ug-body-content').innerHTML = html;
}

function ugResolveAlt(custIdx, invIdx) {
    const c = ugGetCustomer(custIdx);
    const ug = appState.underground;
    const item = ug.inventory[invIdx];
    
    const catWanted = DRUGS_CATALOG.find(d => d.id === c.drugId)?.cat || '';
    const catOffered = DRUGS_CATALOG.find(d => d.id === item.id)?.cat || '';
    
    let chance = 0;
    if (catWanted === catOffered) chance = 0.70; 
    else chance = 0.10; 

    if (!appState.personalStats) appState.personalStats = {};

    if (Math.random() > chance) {
        ug.loyalty = Math.max(0, ug.loyalty - 1);
        ugMarkDoneOrRemove(custIdx);
        appState.personalStats.failedAltOffers = (appState.personalStats.failedAltOffers || 0) + 1;
        
        ugAlert("Zákazník: 'Čo mi to tu núkaš za blbosti?!' a nasrato odišiel.", "Odmietnutie", () => {
            ugExitNeg(custIdx);
        });
        return;
    }

    const newPricePerGram = item.buyPrice * 1.15;
    const offeredAmount = Math.min(c.amt, item.amt); 
    
    c.drugId = item.id;
    c.drugName = item.name;
    c.amt = offeredAmount;
    c.offer = newPricePerGram;
    
    appState.personalStats.successfulAltOffers = (appState.personalStats.successfulAltOffers || 0) + 1;

    ugAlert(`Zákazník s nechuťou súhlasil s náhradou. Pôvodnú cenu ale nedá, dostaneš zníženú sadzbu.`, "Kompromis", () => {
        ugStartNeg(custIdx);
    });
}

function ugOfferAmount(idx) {
    const c = ugGetCustomer(idx);
    const ug = appState.underground;
    
    let stock = 0;
    ug.inventory.forEach(i => { if(i.id === c.drugId) stock += i.amt; });
    
    if (stock === 0) {
        ugAlert("Nemáš tento tovar na sklade!", "Prázdny sklad");
        return;
    }

    ugPrompt(`Zákazník chce ${c.amt}g ${c.drugName}. Na sklade máš ${stock}g.\nKoľko mu chceš ponúknuť? (Zadaj číslo od 1 do ${stock})`, "Zmena množstva", (input) => {
        if (input === null || input === "") return;
        
        let offeredAmt = parseInt(input);
        if (isNaN(offeredAmt) || offeredAmt < 1 || offeredAmt > stock) {
            ugAlert("Neplatné množstvo.", "Chyba");
            return;
        }

        let diff = Math.abs(c.amt - offeredAmt);
        let baseChance = 0.8 - (diff * 0.15) + (ug.loyalty / 150);
        baseChance = Math.max(0.1, Math.min(0.95, baseChance));

        if (Math.random() > baseChance) {
            ug.loyalty = Math.max(0, ug.loyalty - 1);
            ugMarkDoneOrRemove(idx);
            ugAlert("Zákazník: 'Z takého množstva nič nemám, maj sa!' Zákazník nasrato odišiel.", "Neúspešná dohoda", () => {
                ugExitNeg(idx);
            });
        } else {
            c.amt = offeredAmt;
            ugAlert(`Zákazník súhlasil s novým množstvom: ${offeredAmt}g.`, "Dohoda o množstve", () => {
                ugStartNeg(idx); 
            });
        }
    });
}

function ugScamDeal(idx) {
    const c = ugGetCustomer(idx);
    const ug = appState.underground;
    const expectedMoney = c.offer * c.amt;
    const loyaltyPenalty = expectedMoney / 10;
    
    const bName = c.baseName || c.name;

    ugConfirm(`Naozaj chceš skúsiť tohto zákazníka porobiť o ${expectedMoney.toFixed(2)} €?\nŠanca je 50:50. Reputácia ti klesne o ${loyaltyPenalty.toFixed(1)}% bez ohľadu na výsledok.`, "Pokus o podvod", (confirmed) => {
        if (!confirmed) return;

        ug.loyalty = Math.max(0, ug.loyalty - loyaltyPenalty);
        
        // Strata dôvery pri pokuse o podvod - zákazník sa už nevráti
        if (String(idx).startsWith('map_') && ug.knownCustomers[bName]) {
            delete ug.knownCustomers[bName];
        } else if (ug.knownCustomers[bName]) {
            delete ug.knownCustomers[bName];
        }

        let message = "";
        let title = "";

        if (Math.random() > 0.5) {
            title = "Úspešné porobenie!";
            message = `Zákazník ti dal peniaze, vzal si "tovar" a rýchlo zmizol.\n\nZarobil si: ${expectedMoney.toFixed(2)} €\nStratil si lojalitu: ${loyaltyPenalty.toFixed(1)}%\n\nV štvrti sa ale rýchlo rozkríklo, čo si spravil a všetci ostatní záujemcovia ušli.`;
            appState.betting.balance += expectedMoney;
            ugLogTransaction(`Porobenie zákazníka (${c.name})`, expectedMoney);
            ug.heat = Math.min(100, ug.heat + 2.0); 
        } else {
            title = "Podvod odhalený!";
            message = `Zákazník ti na to neskočil! Rýchlo pochopil, že ho chceš natiahnuť a s nadávkami odišiel.\n\nNezarobil si nič.\nStratil si lojalitu: ${loyaltyPenalty.toFixed(1)}%\n\nV štvrti sa okamžite rozkríklo, o čo si sa pokúsil a všetci ostatní záujemcovia ušli.`;
        }
        
        // ZÁKAZNÍCI UTEČÚ - vyprázdnenie podsvetia aj mapy
        ug.customers = [];
        for (let k in ug.mapCustomers) ug.mapCustomers[k].status = 'done';

        ugRefreshStats();
        
        ugAlert(message, title, () => {
            if (checkPoliceRaid()) return;
            ugExitNeg(idx);
        });
    });
}

function ugAccept(idx) {
    const c = ugGetCustomer(idx);
    const ug = appState.underground;
    const bName = c.baseName || c.name;

    if (!appState.personalStats) appState.personalStats = {};

    let stock = 0;
    ug.inventory.forEach(i => { if(i.id === c.drugId) stock += i.amt; });

    if (stock < c.amt) {
        appState.personalStats.notEnoughStockErrors = (appState.personalStats.notEnoughStockErrors || 0) + 1;
        ugAlert("Nemáš dosť tovaru na sklade!", "Nedostatok tovaru");
        return;
    }

    let needed = c.amt;
    let soldBadQuality = false;

    for (let i = 0; i < ug.inventory.length; i++) {
        if (ug.inventory[i].id === c.drugId) {
            
            const ageDays = Math.floor((ugGetCurrentTime() - ug.inventory[i].time) / (1000 * 60 * 60 * 24));
            const ageWeeks = Math.floor(ageDays / 7);
            const currentQuality = Math.max(0, 100 - (ageWeeks * 5));
            if (currentQuality < 50) soldBadQuality = true;

            if (ug.inventory[i].amt > needed) {
                ug.inventory[i].amt -= needed;
                needed = 0; break;
            } else {
                needed -= ug.inventory[i].amt;
                ug.inventory.splice(i, 1);
                i--;
            }
        }
        if (needed <= 0) break;
    }

    if (ug.inventory.length === 0) appState.personalStats.inventoryEmptied = 1;

    let isRobbed = (ug.loyalty < 5 && Math.random() < 0.10);
    let earnedMoney = isRobbed ? 0 : c.offer * c.amt;

    appState.betting.balance += earnedMoney;
    
    appState.personalStats.drugsSoldGrams = (appState.personalStats.drugsSoldGrams || 0) + c.amt;
    appState.personalStats.totalDrugIncome = (appState.personalStats.totalDrugIncome || 0) + earnedMoney;
    appState.personalStats.totalDealsCompleted = (appState.personalStats.totalDealsCompleted || 0) + 1;
    
    if (earnedMoney >= 500) appState.personalStats.maxSingleDealIncome = 1;

    const catWanted = DRUGS_CATALOG.find(d => d.id === c.drugId)?.cat || '';
    if (catWanted === 'WEED') appState.personalStats.weedSold = (appState.personalStats.weedSold || 0) + c.amt;
    if (catWanted === 'PILLS') appState.personalStats.pillsSold = (appState.personalStats.pillsSold || 0) + c.amt;
    if (catWanted === 'HARD') appState.personalStats.hardSold = (appState.personalStats.hardSold || 0) + c.amt;
    if (catWanted === 'PSY') appState.personalStats.psySold = (appState.personalStats.psySold || 0) + c.amt;
    if (c.drugId === 'ck_col' || c.drugId === 'ck_bol') appState.personalStats.cocaineSold = (appState.personalStats.cocaineSold || 0) + c.amt;
    
    let message = "";
    let title = "";

    if (isRobbed) {
        title = "Okradli ťa!";
        message = `Pretože máš v štvrti mizernú reputáciu, zákazník ti tovar vytrhol z rúk, vytiahol na teba zbraň a ušiel bez platenia!\n\nZarobené: 0.00 €`;
        ug.loyalty = Math.min(100, ug.loyalty + 1.5); 
        if (ug.knownCustomers[bName]) delete ug.knownCustomers[bName];
    } else if (soldBadQuality) {
        appState.personalStats.badQualitySales = (appState.personalStats.badQualitySales || 0) + 1;
        title = "Sťažnosť zákazníka";
        message = `⚠️ Zákazník zistil, že si mu predal starý a nekvalitný odpad! Tvoja reputácia utrpela.\n\nZarobil si: ${earnedMoney.toFixed(2)} €`;
        ug.loyalty = Math.max(0, ug.loyalty - 5); 
        if (ug.knownCustomers[bName]) delete ug.knownCustomers[bName]; 
    } else {
        appState.personalStats.goodQualitySales = (appState.personalStats.goodQualitySales || 0) + 1;
        title = "Úspešný obchod";
        message = `Zákazník bol spokojný s kvalitou.\n\nZarobené: ${earnedMoney.toFixed(2)} €`;
        ug.loyalty = Math.min(100, ug.loyalty + 1.5); 
        ug.knownCustomers[bName] = (ug.knownCustomers[bName] || 0) + 1; 
    }

    ug.heat = Math.min(100, ug.heat + 1.0);
    ug.soldThisTurn = true; 
    
    ugLogTransaction(`Predaj: ${c.amt}g ${c.drugName}`, earnedMoney);
    
    ugMarkDoneOrRemove(idx); // Použitie novej funkcie namiesto splice
    ugRefreshStats();
    
    ugAlert(message, title, () => {
        if (checkPoliceRaid()) return; 
        ugExitNeg(idx);
    });
}

function ugLogTransaction(det, val) {
    if (!appState.myPlayer) appState.myPlayer = { history: [] };
    if (!appState.myPlayer.history) appState.myPlayer.history = [];
    
    const formattedDate = ugGetCurrentDateString();

    let earningsVal = val > 0 ? val : 0;
    let expensesVal = val < 0 ? Math.abs(val) : 0;

    appState.myPlayer.history.push({
        date: formattedDate,
        type: 'DRUGS',
        eventName: det, 
        earnings: earningsVal,
        expenses: expensesVal,
        net: val
    });

if (!appState.lifestyle) {
    appState.lifestyle = {
        housing: 0,        
        upgrades: 0,       
        wellness_sauna: 0, 
        food: 0,           
        kitchen_prep: 0,   
        society: 0,        
        coffee_life: 0,    
        image_watches: 0,  
        transport: 0,      
        computing: 0,      
        comm: 0,           
        gadgets: 0,        
        media: 0,          
        trans_micro: 0,    
        trans_luxury: 0,   
        care_towel: 0,     
        caddie: 0,         
        training_net: 0,   
        image: 0,          
        subscription: 0,   
        charity: 0         
    };
}

    if (typeof saveAuto === 'function') saveAuto();
}
</script>
<div id="arci-city-game-container" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 999999; background: black;">
    </div>

<link rel="stylesheet" href="arci-map.css">

<script src="arci-map.js"></script>

</body>
</html>
