// Interactive Leaflet.js Restaurant & District Map Engine
const MAPBOX_TOKEN = (typeof window !== 'undefined' && window.MAPBOX_TOKEN) || atob('cGsuZXlKMUlqb2lhSGx3WlhKNmIyUjBaV05vSWl3aVlTSTZJbU50YTNwaE9HaHhiVEJuWldjelptOWthMkkxTkdkM2FUSWlmUS5uZ2V4VlJOazlxS3JqSUJ2b1QyczZn');

// Amsterdam Neighborhood Name Mappings
const amsterdamNeighborhoodNames = {
    '1011': 'Burgwallen-Oude Zijde / Nieuwmarkt',
    '1012': 'Burgwallen-Oude Zijde / De Wallen / Dam',
    '1013': 'Grachtengordel-West / Haarlemmerbuurt / Houthavens',
    '1014': 'Westpoort / Sloterdijk',
    '1015': 'Jordaan / Noordelijke Grachtengordel',
    '1016': 'Jordaan / 9 Straatjes / Grachtengordel-West',
    '1017': 'Zuidelijke Grachtengordel / Weteringschans',
    '1018': 'Weesperbuurt / Plantage / Oostelijke Eilanden',
    '1019': 'Oostelijk Havengebied / KNSM / Java-eiland',
    '1021': 'IJplein / Vogelbuurt',
    '1022': 'Nieuwendam-Noord / Tuindorp Buiksloot',
    '1023': 'Tuindorp Nieuwendam',
    '1024': 'Banne Buiksloot',
    '1025': 'Buikslotermeer',
    '1026': 'Landerijk Noord / Zunderdorp / Ransdorp',
    '1027': 'Durgerdam / Holysloot',
    '1031': 'Overhoeks / Buiksloterham',
    '1032': 'Tuindorp Oostzaan',
    '1033': 'NDSM / Oostzanerwerf',
    '1034': 'Kadoelen / Walvisbuurt',
    '1035': 'Molenwijk',
    '1036': 'Waterlandpleinbuurt',
    '1042': 'Westpoort Haven',
    '1043': 'Sloterdijk Bedrijvenpark',
    '1046': 'Westpoort Coenhaven',
    '1051': 'Staatsliedenbuurt / Westerpark',
    '1052': 'Frederik Hendrikbuurt',
    '1053': 'Kinkerbuurt / Bellamybuurt',
    '1054': 'Helmersbuurt / Vondelparkbuurt',
    '1055': 'Bos en Lommer / Landlust',
    '1056': 'De Baarsjes / Erasmuspark',
    '1057': 'De Baarsjes / Chassébuurt',
    '1058': 'Overtoomse Veld / Postjesbuurt',
    '1059': 'Hoofddorppleinbuurt / Schinkel',
    '1060': 'Slotervaart / Nieuw-West',
    '1061': 'Kolenkitbuurt / Overtoomse Veld Noord',
    '1062': 'Zuidas / Riekerpolder',
    '1063': 'Geuzenveld',
    '1064': 'Slotermeer-Oost',
    '1065': 'Slotervaart-Zuid',
    '1066': 'Sloten / Nieuw Sloten',
    '1067': 'Osdorp-Oost',
    '1068': 'Osdorp-Midden',
    '1069': 'De Aker / Osdorp-West',
    '1071': 'Museumkwartier / Concertgebouwbuurt',
    '1072': 'De Pijp / Oude Pijp',
    '1073': 'De Pijp / Nieuwe Pijp',
    '1074': 'Diamantbuurt / Zuidelijke Pijp',
    '1075': 'Willemspark / Schinkelbuurt',
    '1076': 'Stadionbuurt / Olympisch Stadion',
    '1077': 'Apollobuurt / Beethovenbuurt / Zuidas',
    '1078': 'Rivierenbuurt / Scheldebuurt',
    '1079': 'Rivierenbuurt / Rijnbuurt',
    '1081': 'Buitenveldert-West / Vrije Universiteit',
    '1082': 'Buitenveldert-Midden / Zuidas',
    '1083': 'Buitenveldert-Oost',
    '1086': 'Zeeburgereiland',
    '1087': 'IJburg West & Oost',
    '1091': 'Weesperzijde / Oosterparkbuurt West',
    '1092': 'Oosterparkbuurt Oost',
    '1093': 'Dapperbuurt',
    '1094': 'Transvaalbuurt',
    '1095': 'Indische Buurt West',
    '1096': 'Overamstel / Amstelkwartier',
    '1097': 'Frankendael / Watergraafsmeer',
    '1098': 'Science Park / Middenmeer',
    '1101': 'Bijlmer Centrum / ArenA Poort',
    '1102': 'Bijlmer Oost / Ganzenhoef',
    '1103': 'Venserpolder',
    '1104': 'Bijlmer Oost / Kraaiennest',
    '1105': 'Holendrecht / AMC',
    '1106': 'Reigersbos',
    '1107': 'Gein',
    '1108': 'Driemond / Nellestein',
    '1111': 'Diemen-Centrum',
    '1112': 'Diemen-Zuid',
    '1114': 'Duivendrecht',
    '1181': 'Amstelveen Noord',
    '1182': 'Amstelveen Midden',
    '1183': 'Amstelveen Kostverloren',
    '1184': 'Amstelveen Zuid',
    '1185': 'Amstelveen Groenelaan',
    '1191': 'Ouderkerk aan de Amstel',
    '1441': 'Purmerend-Zuid'
};

// Enschede Neighborhood Name Mappings
const enschedeNeighborhoodNames = {
    '7511': 'Centrum / Oude Markt / Binnenstad',
    '7512': 'Getfert - Perik',
    '7513': 'Boddenkamp - Horstlanden - Veldkamp',
    '7514': 'Deppenbroek - Laares',
    '7521': 'Twekkelerveld - Roombekerveld',
    '7522': 'Bolhaar - Roombekerplas',
    '7523': 'Roombeek - Mekkelholt',
    '7524': 'Lonneker',
    '7525': 'Boekelo - Driene',
    '7531': 'Velve-Lindenhof - Wooldrik',
    '7532': 'Eschmarke - Dolphia',
    '7533': 'Hogeland-Noord',
    '7534': 'Glanerbrug',
    '7535': 'Eekmaat - Glanerbrug Zuid',
    '7541': 'Varvik-Diekman - Cromhoff',
    '7542': 'Wesselerbrink Noord',
    '7543': 'Boswinkel - Stadsveld',
    '7544': 'Wesselerbrink Zuid',
    '7545': 'Pathmos - Stevenfenne',
    '7546': 'Helmerhoek',
    '7547': 'Stroinkslanden',
    '7548': 'Usselo - Broekheurne',
    '7551': 'Hengelo Binnenstad (Adjacent)',
    '7552': 'Hengelo Oost (Adjacent)',
    '7553': 'Hengelo Zuid (Adjacent)',
    '7554': 'Hengelo West (Adjacent)',
    '7555': 'Hengelo Noord (Adjacent)',
    '7556': 'Hengelo Hasseler Es (Adjacent)',
    '7557': 'Hengelo Slangenbeek (Adjacent)',
    '7558': 'Hengelo Veldwijk (Adjacent)',
    '7581': 'Losser (Adjacent)',
    '7582': 'Losser De Lutte (Adjacent)',
    '7586': 'Overdinkel (Adjacent)',
    '7587': 'De Lutte (Adjacent)'
};

function getNeighborhoodName(pc4) {
    if (!pc4) return 'Unknown District';
    if (currentCity === 'enschede') {
        return enschedeNeighborhoodNames[pc4] || `Enschede District ${pc4}`;
    }
    return amsterdamNeighborhoodNames[pc4] || `Amsterdam District ${pc4}`;
}

// State
let currentCity = 'amsterdam';
let mapMode = 'all'; // 'all' (districts + venues), 'districts' (districts only), 'heatmap'
let selectedDistrict = null; // Filter by PC4

let amsterdamData = [];
let enschedeData = [];
let amsterdamStats = {};
let enschedeStats = {};

let amsterdamDistrictRecs = {};
let enschedeDistrictRecs = {};
let districtRecommendations = {};

let allRestaurants = [];
let filteredRestaurants = [];
let stats = {};

let map = null;
let geoJsonLayer = null;
let markersClusterGroup = null;
let heatLayer = null;
let legendControl = null;

// DOM Elements
const restaurantsGrid = document.getElementById('restaurantsGrid');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const districtFilter = document.getElementById('districtFilter');
const cuisineFilter = document.getElementById('cuisineFilter');
const minRating = document.getElementById('minRating');
const sortBy = document.getElementById('sortBy');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');
const exportDataBtn = document.getElementById('exportData');
const resultsCount = document.getElementById('resultsCount');
const totalRestaurants = document.getElementById('totalRestaurants');
const avgRating = document.getElementById('avgRating');
const totalReviews = document.getElementById('totalReviews');
const activeDistrictBanner = document.getElementById('activeDistrictBanner');
const activeDistrictTitle = document.getElementById('activeDistrictTitle');
const activeDistrictSubtitle = document.getElementById('activeDistrictSubtitle');

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', async () => {
    initMap();
    await loadRecommendations();
    await loadStats();
    await loadRestaurants();
    setupEventListeners();
});

// ---------------------------------------------------------------------------
// LEAFLET MAP INITIALIZATION
// ---------------------------------------------------------------------------
function initMap() {
    map = L.map('map', {
        center: [52.3676, 4.9041],
        zoom: 12,
        zoomControl: false,
        preferCanvas: true
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    // High-resolution Retina Dark basemap (Mapbox Dark tiles in Leaflet with Esri fallback)
    const baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + MAPBOX_TOKEN, {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    baseLayer.on('tileerror', function () {
        if (!window._esriFallbackLoaded) {
            window._esriFallbackLoaded = true;
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 16,
                attribution: '&copy; Esri &copy; OpenStreetMap'
            }).addTo(map);
        }
    });

    baseLayer.addTo(map);

    // Initialize cluster group
    initClusterGroup();

    // Add Map Legend
    initLegend();
}

function initLegend() {
    if (legendControl) return;

    legendControl = L.control({ position: 'bottomright' });
    legendControl.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [0, 2, 5, 10, 20, 50];
        const labels = [];
        for (let i = 0; i < grades.length; i++) {
            const from = grades[i];
            const to = grades[i + 1];
            labels.push(
                '<i style="background:' + getColor(from + 1) + '"></i> ' +
                from + (to ? '&ndash;' + to : '+')
            );
        }
        div.innerHTML = '<strong style="display:block; margin-bottom: 6px; font-size: 0.8rem; letter-spacing: 0.5px;">DISTRICT DENSITY</strong>' + labels.join('<br>');
        return div;
    };
    legendControl.addTo(map);
}

function initClusterGroup() {
    if (markersClusterGroup) return;

    markersClusterGroup = L.markerClusterGroup({
        maxClusterRadius: 40,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        iconCreateFunction: function (cluster) {
            const count = cluster.getChildCount();
            let sizeClass = 'cluster-sm';
            if (count > 50) sizeClass = 'cluster-lg';
            else if (count > 20) sizeClass = 'cluster-md';

            return L.divIcon({
                html: `<div class="custom-cluster-badge ${sizeClass}"><span>${count}</span></div>`,
                className: 'custom-cluster-wrap',
                iconSize: [40, 40]
            });
        }
    });

    map.addLayer(markersClusterGroup);
}

// ---------------------------------------------------------------------------
// DISTRICT CHOROPLETH POLYGONS (AMSTERDAM & ENSCHEDE)
// ---------------------------------------------------------------------------
function getColor(d) {
    return d > 50 ? '#800026' :
        d > 20 ? '#BD0026' :
            d > 10 ? '#E31A1C' :
                d > 5 ? '#FC4E2A' :
                    d > 2 ? '#FD8D3C' :
                        d > 0 ? '#FEB24C' :
                            '#FFEDA0';
}

function styleFeature(feature) {
    const isSelected = selectedDistrict && feature.properties.pc4 === selectedDistrict;
    return {
        fillColor: getColor(feature.properties.count || 0),
        weight: isSelected ? 4 : 1.5,
        opacity: isSelected ? 1 : 0.7,
        color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
        dashArray: isSelected ? '' : '2',
        fillOpacity: isSelected ? 0.75 : 0.42
    };
}

async function loadDistrictGeoJSON() {
    try {
        const file = currentCity === 'enschede' ? './enschede_pc4.geojson' : './amsterdam_pc4.geojson';
        const resp = await fetch(file);
        if (!resp.ok) {
            console.warn('Could not load GeoJSON:', file);
            return;
        }

        const geojson = await resp.json();
        const statsByPC4 = computePC4Stats(allRestaurants);

        const enrichedFeatures = geojson.features.map(feat => {
            const pc4 = feat.properties.pc4 || feat.properties.pc4_code;
            const s = statsByPC4[pc4] || { count: 0, avg_rating: 0, top_cuisines: [] };
            return {
                ...feat,
                properties: {
                    ...feat.properties,
                    pc4: pc4,
                    count: s.count,
                    avg_rating: s.avg_rating,
                    top_cuisines: s.top_cuisines
                }
            };
        });

        if (geoJsonLayer && map.hasLayer(geoJsonLayer)) {
            map.removeLayer(geoJsonLayer);
        }

        geoJsonLayer = L.geoJSON({ type: 'FeatureCollection', features: enrichedFeatures }, {
            style: styleFeature,
            onEachFeature: onEachDistrictFeature
        });

        if (mapMode === 'all' || mapMode === 'districts') {
            geoJsonLayer.addTo(map);
            geoJsonLayer.bringToBack();
        }
    } catch (e) {
        console.error('Error loading district map data:', e);
    }
}

function onEachDistrictFeature(feature, layer) {
    layer.on({
        mouseover: highlightDistrict,
        mouseout: resetDistrictHighlight,
        click: onDistrictClick
    });
}

function highlightDistrict(e) {
    const layer = e.target;
    const props = layer.feature.properties;
    const pc4 = props.pc4;
    const neighborhood = getNeighborhoodName(pc4);
    const rec = districtRecommendations[pc4] || {};

    layer.setStyle({
        weight: 4,
        color: '#ffffff',
        dashArray: '',
        fillOpacity: 0.65
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    const sat = rec.saturation || (props.count > 40 ? 'High' : (props.count > 15 ? 'Moderate' : 'Opportunity'));
    const satColor = sat === 'High' ? '#ef4444' : (sat === 'Moderate' ? '#f59e0b' : '#10b981');
    const cuisines = props.top_cuisines && props.top_cuisines.length > 0 ? props.top_cuisines.slice(0, 3).join(', ') : 'Various';

    let tooltipHtml = `
        <div style="min-width: 250px; font-family: Inter, sans-serif; line-height: 1.4;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <strong style="font-size: 1.05rem; color: #ffffff;">${escapeHtml(neighborhood)}</strong>
                <span style="background: #667eea; color: #fff; padding: 2px 6px; border-radius: 999px; font-size: 0.7rem; font-weight: 700;">PC4 ${pc4}</span>
            </div>
            <div style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 6px;">
                🏛️ <strong>${props.count || 0} Venues</strong> &bull; ⭐ <strong>${props.avg_rating || 'N/A'}</strong> &bull; <span style="color: ${satColor}; font-weight: 700;">${sat} Saturation</span>
            </div>
            <div style="font-size: 0.78rem; color: #e2e8f0; margin-bottom: 6px;">
                🍴 <strong>Top Cuisines:</strong> ${escapeHtml(cuisines)}
            </div>
            ${rec.recommendation ? `
            <div style="background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.4); padding: 5px 8px; border-radius: 6px; font-size: 0.74rem; color: #6ee7b7; margin-top: 6px;">
                💡 ${escapeHtml(rec.recommendation)}
            </div>` : ''}
            <div style="margin-top: 8px; font-size: 0.72rem; color: #94a3b8; text-align: right; font-style: italic;">
                👆 Click district to zoom & filter restaurants
            </div>
        </div>
    `;

    layer.bindTooltip(tooltipHtml, {
        sticky: true,
        className: 'custom-tooltip',
        offset: [15, 0]
    }).openTooltip();
}

function resetDistrictHighlight(e) {
    if (geoJsonLayer) {
        geoJsonLayer.resetStyle(e.target);
    }
}

function onDistrictClick(e) {
    const layer = e.target;
    const props = layer.feature.properties;
    const pc4 = props.pc4;
    const neighborhood = getNeighborhoodName(pc4);
    const rec = districtRecommendations[pc4] || {};

    // 1. Zoom into district smoothly
    map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 15 });

    // 2. Select district & filter restaurants
    filterByDistrict(pc4, neighborhood);

    // 3. Open rich interactive popup on district
    const sat = rec.saturation || (props.count > 40 ? 'High' : (props.count > 15 ? 'Moderate' : 'Opportunity'));
    const satClass = sat === 'High' ? 'sat-high' : (sat === 'Moderate' ? 'sat-mod' : 'sat-opp');
    const cuisines = props.top_cuisines && props.top_cuisines.length > 0 ? props.top_cuisines.join(', ') : 'Various';

    const popupHtml = `
        <div class="district-popup-card">
            <div class="district-popup-header">
                <h4>${escapeHtml(neighborhood)}</h4>
                <span class="district-pc4-badge">PC4 ${pc4}</span>
            </div>
            <div class="district-stats-row">
                <div class="d-stat">
                    <span class="d-val">${props.count || 0}</span>
                    <span class="d-lbl">Venues</span>
                </div>
                <div class="d-stat">
                    <span class="d-val">${props.avg_rating || 'N/A'}⭐</span>
                    <span class="d-lbl">Avg Rating</span>
                </div>
                <div class="d-stat">
                    <span class="d-val ${satClass}">${sat}</span>
                    <span class="d-lbl">Saturation</span>
                </div>
            </div>
            <div class="district-cuisines-box">
                <strong>🍽️ Top Cuisines:</strong>
                <p style="color: #4b5563; margin-top: 2px;">${escapeHtml(cuisines)}</p>
            </div>
            ${rec.recommendation ? `
            <div class="district-rec-box">
                <strong>💡 Market Opportunities:</strong>
                <p style="margin-top: 3px;">${escapeHtml(rec.recommendation)}</p>
            </div>` : ''}
            <div class="district-popup-actions">
                <button class="btn-filter-dist" onclick="filterByDistrict('${pc4}', '${escapeHtml(neighborhood)}')">
                    🔍 Filter ${props.count} Venues
                </button>
                <button class="btn-clear-dist" onclick="clearDistrictFilter()">
                    ✕ Reset Filter
                </button>
            </div>
        </div>
    `;

    L.popup({ maxWidth: 340 })
        .setLatLng(e.latlng)
        .setContent(popupHtml)
        .openOn(map);
}

function computePC4Stats(restaurants) {
    const stats = {};
    restaurants.forEach(r => {
        const address = r.address || '';
        const match = address.match(/\b(\d{4})\s*[A-Z]{2}\b/) || address.match(/\b(\d{4})\b/);
        if (match) {
            const pc4 = match[1];
            if (!stats[pc4]) {
                stats[pc4] = { count: 0, total_rating: 0, cuisines: {} };
            }
            stats[pc4].count++;
            if (r.rating) stats[pc4].total_rating += parseFloat(r.rating) || 0;
            const c = r.cuisine || r.category || 'Restaurant';
            stats[pc4].cuisines[c] = (stats[pc4].cuisines[c] || 0) + 1;
        }
    });

    Object.keys(stats).forEach(pc4 => {
        const s = stats[pc4];
        s.avg_rating = s.count > 0 ? (s.total_rating / s.count).toFixed(2) : 0;
        const sortedCuisines = Object.entries(s.cuisines).sort((a, b) => b[1] - a[1]).slice(0, 3).map(c => c[0]);
        s.top_cuisines = sortedCuisines;
        delete s.cuisines;
        delete s.total_rating;
    });

    return stats;
}

// ---------------------------------------------------------------------------
// DISTRICT FILTERING
// ---------------------------------------------------------------------------
function filterByDistrict(pc4, neighborhoodName) {
    selectedDistrict = pc4;

    if (districtFilter) {
        districtFilter.value = pc4;
    }

    if (activeDistrictBanner) {
        activeDistrictBanner.style.display = 'flex';
        activeDistrictTitle.textContent = `${neighborhoodName} (PC4: ${pc4})`;
        const count = allRestaurants.filter(r => (r.address || '').includes(pc4)).length;
        activeDistrictSubtitle.textContent = `Showing ${count} restaurants in this district`;
    }

    applyFilters();

    // Re-style geojson to highlight selected
    if (geoJsonLayer) {
        geoJsonLayer.setStyle(styleFeature);
    }
}
window.filterByDistrict = filterByDistrict;

function clearDistrictFilter() {
    selectedDistrict = null;

    if (districtFilter) {
        districtFilter.value = '';
    }

    if (activeDistrictBanner) {
        activeDistrictBanner.style.display = 'none';
    }

    map.closePopup();

    if (geoJsonLayer) {
        geoJsonLayer.setStyle(styleFeature);
    }

    // Reset view to city center
    if (currentCity === 'amsterdam') {
        map.flyTo([52.3676, 4.9041], 12);
    } else {
        map.flyTo([52.2215, 6.8937], 13);
    }

    applyFilters();
}
window.clearDistrictFilter = clearDistrictFilter;

// ---------------------------------------------------------------------------
// VENUE MARKERS & HEATMAP
// ---------------------------------------------------------------------------
function updateMapMarkers() {
    if (!map || !markersClusterGroup) return;

    markersClusterGroup.clearLayers();

    if (mapMode === 'districts') return; // Hide pins in Districts-only mode

    const markers = [];
    filteredRestaurants.forEach(v => {
        let lat = parseFloat(v.latitude);
        let lng = parseFloat(v.longitude);

        if ((isNaN(lat) || isNaN(lng)) && v.url) {
            const m = v.url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/) || v.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            if (m) { lat = parseFloat(m[1]); lng = parseFloat(m[2]); }
        }

        if (!isNaN(lat) && !isNaN(lng)) {
            const pinClass = currentCity === 'enschede' ? 'enschede-pin' : 'amsterdam-pin';
            const icon = L.divIcon({
                className: 'custom-pin-wrap',
                html: `<div class="custom-pin ${pinClass}"></div>`,
                iconSize: [14, 14],
                iconAnchor: [7, 7],
                popupAnchor: [0, -9]
            });

            const popupContent = `
                <div style="font-family: Inter, sans-serif; padding: 4px; color: #1d1d1f; min-width: 220px;">
                    <strong style="font-size: 0.95rem; color: #111827; display:block; margin-bottom: 4px;">${escapeHtml(v.name || 'Venue')}</strong>
                    <div style="font-size: 0.8rem; color: #6b7280; margin-bottom: 4px;">${escapeHtml(v.cuisine || v.category || 'Restaurant')}</div>
                    <div style="font-size: 0.85rem; color: #d97706; font-weight: 700; margin-bottom: 4px;">⭐ ${v.rating || 'N/A'} (${formatNumber(v.reviews || 0)} reviews)</div>
                    ${v.price_level ? `<div style="font-size: 0.8rem; color: #4b5563; margin-bottom: 4px;">💰 ${escapeHtml(v.price_level)}</div>` : ''}
                    <div style="font-size: 0.78rem; color: #6b7280; margin-bottom: 8px;">📍 ${escapeHtml(v.address || '')}</div>
                    <div style="display:flex; gap: 8px; margin-top: 6px;">
                        <a href="${v.url || `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}" target="_blank" style="font-size: 0.75rem; color: #2563eb; font-weight: 700; text-decoration: none;">View Maps &rarr;</a>
                        ${v.website ? `<a href="${escapeHtml(v.website)}" target="_blank" style="font-size: 0.75rem; color: #ea580c; font-weight: 700; text-decoration: none;">Website &rarr;</a>` : ''}
                    </div>
                </div>
            `;

            const m = L.marker([lat, lng], { icon: icon });
            m.bindPopup(popupContent);
            markers.push(m);
        }
    });

    markersClusterGroup.addLayers(markers);
}

function updateHeatmap() {
    if (!map) return;

    if (heatLayer && map.hasLayer(heatLayer)) {
        map.removeLayer(heatLayer);
    }

    if (mapMode !== 'heatmap') return;

    const heatPoints = [];
    filteredRestaurants.forEach(v => {
        let lat = parseFloat(v.latitude);
        let lng = parseFloat(v.longitude);

        if ((isNaN(lat) || isNaN(lng)) && v.url) {
            const m = v.url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/) || v.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            if (m) {
                lat = parseFloat(m[1]);
                lng = parseFloat(m[2]);
            }
        }

        if (!isNaN(lat) && !isNaN(lng)) {
            const reviews = parseInt(v.reviews) || 10;
            const intensity = Math.min(1.0, Math.max(0.3, Math.log10(reviews + 1) / 3));
            heatPoints.push([lat, lng, intensity]);
        }
    });

    heatLayer = L.heatLayer(heatPoints, {
        radius: 28,
        blur: 18,
        maxZoom: 16,
        max: 1.0,
        gradient: {
            0.2: '#4facfe',
            0.4: '#00f2fe',
            0.6: '#43e97b',
            0.8: '#ffd93d',
            1.0: '#ff3b30'
        }
    }).addTo(map);
}

// ---------------------------------------------------------------------------
// MAP MODE SWITCHING
// ---------------------------------------------------------------------------
function setMapMode(mode) {
    mapMode = mode;
    const btnAll = document.getElementById('btnTabAll');
    const btnDistricts = document.getElementById('btnTabDistricts');
    const btnHeatmap = document.getElementById('btnTabHeatmap');

    [btnAll, btnDistricts, btnHeatmap].forEach(b => {
        if (b) {
            b.style.background = 'transparent';
            b.style.color = '#a0aec0';
            b.style.boxShadow = 'none';
        }
    });

    const activeBtn = mode === 'all' ? btnAll : (mode === 'districts' ? btnDistricts : btnHeatmap);
    if (activeBtn) {
        activeBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        activeBtn.style.color = '#fff';
        activeBtn.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.4)';
    }

    if (mode === 'all') {
        if (geoJsonLayer && !map.hasLayer(geoJsonLayer)) map.addLayer(geoJsonLayer);
        if (geoJsonLayer) geoJsonLayer.setStyle(styleFeature);
        if (markersClusterGroup && !map.hasLayer(markersClusterGroup)) map.addLayer(markersClusterGroup);
        if (heatLayer && map.hasLayer(heatLayer)) map.removeLayer(heatLayer);
        updateMapMarkers();
    } else if (mode === 'districts') {
        if (geoJsonLayer && !map.hasLayer(geoJsonLayer)) map.addLayer(geoJsonLayer);
        if (geoJsonLayer) geoJsonLayer.setStyle(styleFeature);
        if (markersClusterGroup && map.hasLayer(markersClusterGroup)) map.removeLayer(markersClusterGroup);
        if (heatLayer && map.hasLayer(heatLayer)) map.removeLayer(heatLayer);
    } else if (mode === 'heatmap') {
        if (markersClusterGroup && map.hasLayer(markersClusterGroup)) map.removeLayer(markersClusterGroup);
        if (geoJsonLayer && !map.hasLayer(geoJsonLayer)) map.addLayer(geoJsonLayer);
        if (geoJsonLayer) {
            geoJsonLayer.setStyle({
                fillOpacity: 0.08,
                weight: 1.5,
                color: 'rgba(255, 255, 255, 0.25)',
                dashArray: '3'
            });
        }
        updateHeatmap();
    }
}
window.setMapMode = setMapMode;

// ---------------------------------------------------------------------------
// MULTI-CITY SWITCHER
// ---------------------------------------------------------------------------
async function selectCity(city) {
    if (currentCity === city && allRestaurants.length > 0) return;
    currentCity = city;
    selectedDistrict = null;

    if (activeDistrictBanner) activeDistrictBanner.style.display = 'none';

    const btnA = document.getElementById('btnCityAmsterdam');
    const btnE = document.getElementById('btnCityEnschede');
    if (btnA) btnA.classList.toggle('active', city === 'amsterdam');
    if (btnE) btnE.classList.toggle('active', city === 'enschede');

    const headerTitle = document.getElementById('appHeaderTitle');
    if (headerTitle) {
        headerTitle.textContent = city === 'amsterdam' ? 'Amsterdam Restaurants' : 'Enschede Restaurants & Food Spots';
    }

    showLoading();
    try {
        districtRecommendations = city === 'amsterdam' ? amsterdamDistrictRecs : enschedeDistrictRecs;

        if (city === 'amsterdam') {
            allRestaurants = amsterdamData;
            filteredRestaurants = allRestaurants;
            stats = amsterdamStats;
            updateStatsDisplay();
            await populateDistrictFilter();
            await loadCuisines();
            renderRestaurants();
            await loadDistrictGeoJSON();
            updateMapMarkers();
            updateHeatmap();
            map.flyTo([52.3676, 4.9041], 12);
        } else {
            if (enschedeData.length === 0) {
                await loadEnschedeData();
            }
            allRestaurants = enschedeData;
            filteredRestaurants = allRestaurants;
            stats = enschedeStats;
            updateStatsDisplay();
            await populateDistrictFilter();
            await loadCuisines();
            renderRestaurants();
            await loadDistrictGeoJSON();
            updateMapMarkers();
            updateHeatmap();
            map.flyTo([52.2215, 6.8937], 13);
        }
        hideLoading();
    } catch (err) {
        console.error('Error switching city:', err);
        hideLoading();
    }
}
window.selectCity = selectCity;

// ---------------------------------------------------------------------------
// DATA LOADING
// ---------------------------------------------------------------------------
async function loadRecommendations() {
    try {
        const respA = await fetch('./district_recommendations.json');
        if (respA.ok) amsterdamDistrictRecs = await respA.json();

        const respE = await fetch('./enschede_district_recommendations.json');
        if (respE.ok) enschedeDistrictRecs = await respE.json();

        districtRecommendations = currentCity === 'amsterdam' ? amsterdamDistrictRecs : enschedeDistrictRecs;
    } catch (e) {
        console.warn('Could not load district recommendations:', e);
    }
}

async function loadStats() {
    try {
        const response = await fetch('./restaurants_data.json');
        const data = await response.json();
        const restaurants = Array.isArray(data) ? data : (data.restaurants || []);

        const ratings = restaurants.filter(r => r.rating).map(r => r.rating);
        const reviews = restaurants.filter(r => r.reviews).map(r => r.reviews);

        amsterdamStats = {
            total_restaurants: restaurants.length,
            average_rating: ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2) : 0,
            total_reviews: reviews.reduce((a, b) => a + b, 0)
        };
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

async function loadEnschedeData() {
    try {
        const response = await fetch('./enschede_restaurants_data.json');
        const data = await response.json();
        enschedeData = (Array.isArray(data) ? data : []).map(r => {
            let lat = parseFloat(r.latitude);
            let lng = parseFloat(r.longitude);
            if ((isNaN(lat) || isNaN(lng)) && r.url) {
                const m = r.url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/) || r.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
                if (m) { lat = parseFloat(m[1]); lng = parseFloat(m[2]); }
            }
            return {
                name: r.name || 'Venue',
                rating: parseFloat(r.rating) || 0,
                reviews: parseInt(r.reviews) || 0,
                price_level: r.price_level || '',
                address: r.address || '',
                phone: r.phone || '',
                website: r.website || '',
                cuisine: r.cuisine || r.category || 'Restaurant',
                latitude: !isNaN(lat) ? lat : null,
                longitude: !isNaN(lng) ? lng : null,
                url: r.url || ''
            };
        });

        const ratings = enschedeData.filter(r => r.rating > 0).map(r => r.rating);
        const reviews = enschedeData.map(r => r.reviews);

        enschedeStats = {
            total_restaurants: enschedeData.length,
            average_rating: ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2) : 0,
            total_reviews: reviews.reduce((a, b) => a + b, 0)
        };
    } catch (e) {
        console.error('Error loading Enschede data:', e);
    }
}

async function loadRestaurants() {
    showLoading();
    try {
        const response = await fetch('./restaurants_data.json');
        const data = await response.json();
        const rawAmsterdam = Array.isArray(data) ? data : (data.restaurants || []);
        amsterdamData = rawAmsterdam.map(r => {
            let lat = parseFloat(r.latitude);
            let lng = parseFloat(r.longitude);
            if ((isNaN(lat) || isNaN(lng)) && r.url) {
                const m = r.url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/) || r.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
                if (m) {
                    lat = parseFloat(m[1]);
                    lng = parseFloat(m[2]);
                }
            }
            return {
                ...r,
                latitude: !isNaN(lat) ? lat : null,
                longitude: !isNaN(lng) ? lng : null
            };
        });
        allRestaurants = amsterdamData;
        filteredRestaurants = allRestaurants;
        stats = amsterdamStats;

        // Preload Enschede in background
        loadEnschedeData();

        await populateDistrictFilter();
        await loadCuisines();
        updateStatsDisplay();
        renderRestaurants();
        await loadDistrictGeoJSON();
        updateMapMarkers();
        updateHeatmap();
        hideLoading();
    } catch (error) {
        console.error('Error loading restaurants:', error);
        hideLoading();
        showEmpty();
    }
}

function updateStatsDisplay() {
    totalRestaurants.textContent = (stats.total_restaurants || 0).toLocaleString();
    avgRating.textContent = stats.average_rating ? `${stats.average_rating}⭐` : 'N/A';
    totalReviews.textContent = formatNumber(stats.total_reviews || 0);

    const lbl = document.querySelector('#totalRestaurants')?.parentElement?.querySelector('.stat-label');
    if (lbl) lbl.textContent = currentCity === 'amsterdam' ? 'Amsterdam Venues' : 'Enschede Venues';
}

async function populateDistrictFilter() {
    if (!districtFilter) return;

    districtFilter.innerHTML = '<option value="">All Districts</option>';

    const statsByPC4 = computePC4Stats(allRestaurants);
    const sortedPC4s = Object.keys(statsByPC4).sort((a, b) => (statsByPC4[b].count || 0) - (statsByPC4[a].count || 0));

    sortedPC4s.forEach(pc4 => {
        const name = getNeighborhoodName(pc4);
        const count = statsByPC4[pc4].count;
        const opt = document.createElement('option');
        opt.value = pc4;
        opt.textContent = `${name} (PC4 ${pc4}) [${count}]`;
        districtFilter.appendChild(opt);
    });

    if (selectedDistrict) {
        districtFilter.value = selectedDistrict;
    }
}

async function loadCuisines() {
    const cuisines = new Set();
    allRestaurants.forEach(r => {
        const c = r.cuisine || r.category;
        if (c) cuisines.add(c);
    });

    cuisineFilter.innerHTML = '<option value="">All Cuisines</option>';
    Array.from(cuisines).sort().forEach(cuisine => {
        const option = document.createElement('option');
        option.value = cuisine;
        option.textContent = cuisine;
        cuisineFilter.appendChild(option);
    });
}

// ---------------------------------------------------------------------------
// FILTERING & CARDS
// ---------------------------------------------------------------------------
function setupEventListeners() {
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);
    exportDataBtn.addEventListener('click', exportData);
    document.getElementById('reloadData')?.addEventListener('click', () => {
        if (currentCity === 'amsterdam') loadRestaurants();
        else loadEnschedeData().then(() => selectCity('enschede'));
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });

    if (districtFilter) {
        districtFilter.addEventListener('change', () => {
            const val = districtFilter.value;
            if (val) {
                filterByDistrict(val, getNeighborhoodName(val));
                // Zoom to district on map
                if (geoJsonLayer) {
                    geoJsonLayer.eachLayer(layer => {
                        if (layer.feature.properties.pc4 === val) {
                            map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 15 });
                        }
                    });
                }
            } else {
                clearDistrictFilter();
            }
        });
    }
}

function applyFilters() {
    showLoading();

    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCuisine = cuisineFilter.value;
    const selectedRating = parseFloat(minRating.value);
    const selectedSort = sortBy.value;

    filteredRestaurants = allRestaurants.filter(r => {
        const matchesDistrict = !selectedDistrict || (r.address || '').includes(selectedDistrict);

        const matchesSearch = !searchTerm ||
            (r.name && r.name.toLowerCase().includes(searchTerm)) ||
            (r.address && r.address.toLowerCase().includes(searchTerm)) ||
            (r.cuisine && r.cuisine.toLowerCase().includes(searchTerm));

        const matchesCuisine = !selectedCuisine || (r.cuisine === selectedCuisine || r.category === selectedCuisine);
        const matchesRating = !selectedRating || (r.rating && r.rating >= selectedRating);

        return matchesDistrict && matchesSearch && matchesCuisine && matchesRating;
    });

    // Sorting
    filteredRestaurants.sort((a, b) => {
        switch (selectedSort) {
            case 'rating':
                return (b.rating || 0) - (a.rating || 0);
            case 'reviews':
                return (b.reviews || 0) - (a.reviews || 0);
            case 'name':
                return (a.name || '').localeCompare(b.name || '');
            default:
                return 0;
        }
    });

    renderRestaurants();
    updateMapMarkers();
    updateHeatmap();
    hideLoading();
}

function resetFilters() {
    searchInput.value = '';
    cuisineFilter.value = '';
    minRating.value = '';
    sortBy.value = 'rating';
    selectedDistrict = null;
    if (districtFilter) districtFilter.value = '';
    if (activeDistrictBanner) activeDistrictBanner.style.display = 'none';

    filteredRestaurants = [...allRestaurants];
    renderRestaurants();
    updateMapMarkers();
    updateHeatmap();
    if (geoJsonLayer) geoJsonLayer.setStyle(styleFeature);
}

function renderRestaurants() {
    resultsCount.textContent = filteredRestaurants.length.toLocaleString();

    if (filteredRestaurants.length === 0) {
        showEmpty();
        return;
    }

    emptyState.style.display = 'none';
    restaurantsGrid.innerHTML = '';

    const displayCount = Math.min(filteredRestaurants.length, 100);
    const toRender = filteredRestaurants.slice(0, displayCount);

    toRender.forEach(r => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="restaurant-header">
                <div>
                    <h3 class="restaurant-name">${escapeHtml(r.name || 'Unnamed')}</h3>
                    <span class="restaurant-cuisine">${escapeHtml(r.cuisine || r.category || 'Restaurant')}</span>
                </div>
                ${r.price_level ? `<span class="price-level">${escapeHtml(r.price_level)}</span>` : ''}
            </div>
            <div class="restaurant-rating">
                <span class="rating-stars">${getStars(r.rating || 0)}</span>
                <span class="rating-score">${r.rating || 'N/A'}</span>
                <span class="reviews-count">(${formatNumber(r.reviews || 0)} reviews)</span>
            </div>
            ${r.address ? `<div class="restaurant-info"><span class="info-icon">📍</span><span class="info-text">${escapeHtml(r.address)}</span></div>` : ''}
            ${r.phone ? `<div class="restaurant-info"><span class="info-icon">📞</span><span class="info-text">${escapeHtml(r.phone)}</span></div>` : ''}
            <div class="restaurant-links">
                ${r.url ? `<a href="${r.url}" target="_blank" class="card-link primary">Google Maps &rarr;</a>` : ''}
                ${r.website ? `<a href="${escapeHtml(r.website)}" target="_blank" class="card-link secondary">Website &rarr;</a>` : ''}
            </div>
        `;
        restaurantsGrid.appendChild(card);
    });

    if (filteredRestaurants.length > 100) {
        const notice = document.createElement('div');
        notice.style.gridColumn = '1 / -1';
        notice.style.textAlign = 'center';
        notice.style.padding = '20px';
        notice.style.color = 'var(--text-secondary)';
        notice.style.fontSize = '0.9rem';
        notice.textContent = `Showing top 100 of ${filteredRestaurants.length.toLocaleString()} matching venues. Use filters to narrow down.`;
        restaurantsGrid.appendChild(notice);
    }
}

// ---------------------------------------------------------------------------
// UTILITIES
// ---------------------------------------------------------------------------
function showLoading() {
    if (loadingState) loadingState.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';
}

function hideLoading() {
    if (loadingState) loadingState.style.display = 'none';
}

function showEmpty() {
    if (restaurantsGrid) restaurantsGrid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (resultsCount) resultsCount.textContent = '0';
}

function formatNumber(num) {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    return stars || 'N/A';
}

function exportData() {
    if (filteredRestaurants.length === 0) {
        alert('No data to export');
        return;
    }

    const headers = ['Name', 'Cuisine', 'Rating', 'Reviews', 'Price Level', 'Address', 'Phone', 'Website', 'Google Maps URL'];
    const rows = filteredRestaurants.map(r => [
        `"${(r.name || '').replace(/"/g, '""')}"`,
        `"${(r.cuisine || r.category || '').replace(/"/g, '""')}"`,
        r.rating || '',
        r.reviews || '',
        `"${(r.price_level || '').replace(/"/g, '""')}"`,
        `"${(r.address || '').replace(/"/g, '""')}"`,
        `"${(r.phone || '').replace(/"/g, '""')}"`,
        `"${(r.website || '').replace(/"/g, '""')}"`,
        `"${(r.url || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${currentCity}_restaurants_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}
