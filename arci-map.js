
// EXTRÉMNE PRESNÉ SÚRADNICE (X, Y v %)
const buildingsData = {
    "udrzba": { name: "Údržba", x: 6.8, y: 37.5, img: "buda_udrzba.png", detail: "mapa-udrzba.png", action: "openSettings" },
    "kostol": { name: "Kostol", x: 21.0, y: 15.5, img: "buda_kostol.png", detail: "mapa-kostol.png", action: "openGameCalendar" },
    "arcibot": { name: "ArciBot", x: 11.2, y: 58.5, img: "buda_arcibot.png", detail: "mapa-arcibot.png", action: "openAiAssistant" },
    "osobne": { name: "Osobné úspechy", x: 10.5, y: 79.0, img: "buda_zahradka.png", detail: "mapa-personal.png", action: "openPersonalAchievements" },
    "stadion": { name: "Štadión", x: 22.5, y: 50.5, img: "buda_stadion.png", detail: "mapa-cards.png", action: "showGlobalPlayerCards" },
    "banka": { name: "Net Worth Banka", x: 22.2, y: 69.5, img: "buda_banka.png", detail: "mapa-bank.png", action: "openNetWorth" },
    "global": { name: "Globálne úspechy", x: 20.5, y: 89.5, img: "buda_tabula.png", detail: "mapa-global.png", action: "openGlobalAchievementsList" },
    "sponsor": { name: "Sponsor Palác", x: 37.5, y: 12.5, img: "buda_palac.png", detail: "mapa-sponsor.png", action: "openSponsorInfo" },
    "kniznica": { name: "Knižnica", x: 39.5, y: 42.5, img: "buda_kniznica.png", detail: "mapa-hof.png", action: "openHallOfFame" },
    "invest": { name: "ArciInvest", x: 34.2, y: 78.5, img: "buda_arciinvest.png", detail: "mapa-invest.png", action: "openArciInvest" },
    "bankomat": { name: "Bankomat", x: 28.5, y: 63.5, img: "buda_bankomat.png", detail: "mapa-balance.png", action: "openMyPlayer" },
    "official": { name: "Official Rank", x: 49.5, y: 25.5, img: "buda_official.png", detail: "mapa-official.png", action: () => showRankTable('Official') },
    "pga": { name: "PGA Rank", x: 55.5, y: 23.0, img: "buda_pga.png", detail: "mapa-pga.png", action: () => showRankTable('PGA') },
    "vila": { name: "Moja Vila", x: 51.5, y: 47.5, img: "buda_vila.png", detail: "mapa-villa.png", action: "openLifestyleManager" },
    "shop": { name: "ArciShop", x: 44.5, y: 73.5, img: "buda_arcishop.png", detail: "mapa-shop.png", action: "openArciShop" },
    "fedex": { name: "Fedex Rank", x: 62.5, y: 29.5, img: "buda_fedex.png", detail: "mapa-fedex.png", action: () => showRankTable('FEDEX') },
    "super": { name: "Súperov dom", x: 60.5, y: 49.5, img: "buda_super.png", detail: "mapa-vs.png", action: "openComparator" },
    "cards": { name: "ArciCards", x: 56.5, y: 75.5, img: "buda_arcicards.png", detail: "mapa-arcicards.png", action: "openArciCardsHub" },
    "players": { name: "Players Rank", x: 69.5, y: 23.0, img: "buda_players.png", detail: "mapa-players.png", action: () => showRankTable('Association') },
    "gym": { name: "Telocvičňa", x: 67.5, y: 50.5, img: "buda_gym.png", detail: "mapa-trophy.png", action: "openTrophyGallery" },
    "tip": { name: "ArciTip", x: 65.5, y: 76.5, img: "buda_arcitip.png", detail: "mapa-tip.png", action: "openArciTip" },
    "world": { name: "World Tour Rank", x: 74.5, y: 32.5, img: "buda_worldtour.png", detail: "mapa-worldtour.png", action: () => showRankTable('Tour') },
    "noviny": { name: "Novinový stánok", x: 75.5, y: 49.5, img: "buda_noviny.png", detail: "mapa-news.png", action: "openArciNews" },
    "casino": { name: "ArciBet Casino", x: 75.5, y: 74.5, img: "buda_arcibet.png", detail: "mapa-arcibet.png", action: "openArciCasino" },
    "ea": { name: "EA Rank", x: 81.5, y: 16.5, img: "buda_ea.png", detail: "mapa-ea.png", action: () => showRankTable('EA') },
    "amateur": { name: "Amateur Rank", x: 87.5, y: 37.5, img: "buda_amateur.png", detail: "mapa-amateur.png", action: () => showRankTable('Amateur') },
    "plavaren": { name: "Plaváreň", x: 86.5, y: 56.5, img: "buda_plavaren.png", detail: "mapa-happy.png", action: "openHappinessOverview" },
    "illegal": { name: "Podsvetie", x: 88.5, y: 81.5, img: "buda_illegal.png", detail: "mapa-illegal.png", action: "openArciUnderground" },
    "elo": { name: "ELO Rank", x: 94.5, y: 35.5, img: "buda_elo.png", detail: "mapa-elo.png", action: () => showRankTable('ELO') }
};

let currentBuildingAction = null;

function startArciCityGame() {
    const container = document.getElementById('arci-city-game-container');
    container.style.display = 'block';
    
    container.innerHTML = `
        <div class="map-wrapper" id="mapWrapper">
            <img src="Map_Background.png" class="map-bg" onclick="handleMapClick(event)">
            <div id="buildingsLayer"></div>
            <img src="panáčik_stoji.png" id="player-character" style="left: 10%; top: 40%;">
        </div>
        
        <div id="buildingDetailLayer" onclick="closeBuildingDetail()">
            <img id="detailImg" src="" style="max-width: 90%; border: 5px solid white; border-radius: 15px;" onclick="executeBuildingAction(event)">
            <p style="color: white; font-weight: bold; margin-top: 10px;">KLIKNI NA OBRÁZOK PRE VSTUP</p>
        </div>

        <button onclick="document.getElementById('arci-city-game-container').style.display='none'" 
                style="position:fixed; top:15px; right:15px; z-index:2100000; padding:12px; background: red; color: white; border: none; border-radius: 8px; font-weight: bold;">ZATVORIŤ MAPU</button>
    `;

    renderBuildings();
    // Centrovať kameru na panáčika pri štarte
    setTimeout(centerCamera, 100);
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
    
    // Sledovanie kamerou po krátkom čase
    setTimeout(centerCamera, 400);
}

function centerCamera() {
    const player = document.getElementById('player-character');
    player.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

function moveToBuilding(key) {
    const b = buildingsData[key];
    movePlayer(b.x, b.y);
    
    setTimeout(() => {
        showBuildingDetail(b);
    }, 900);
}

function showBuildingDetail(b) {
    const layer = document.getElementById('buildingDetailLayer');
    const img = document.getElementById('detailImg');
    img.src = b.detail;
    currentBuildingAction = b.action;
    layer.style.display = 'flex';
}

function closeBuildingDetail() {
    document.getElementById('buildingDetailLayer').style.display = 'none';
}

function executeBuildingAction(event) {
    event.stopPropagation();
    if (currentBuildingAction) {
        document.getElementById('arci-city-game-container').style.display = 'none';
        closeBuildingDetail();
        
        // Spustiť akciu hry
        if (typeof currentBuildingAction === 'function') {
            currentBuildingAction();
        } else if (typeof window[currentBuildingAction] === 'function') {
            window[currentBuildingAction]();
        }
    }
}
