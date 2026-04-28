// Data arrays for locations
const MP = [
    {"id": "MP 90574", "lat": 40.2541957149049, "lng": -75.0880001725863},
    {"id": "MP 20723", "lat": 40.0080063085635, "lng": -75.1727176372791},
    {"id": "MP 20724", "lat": 39.9145452021085, "lng": -75.1554917030765},
    {"id": "MP 20673", "lat": 39.9951025705013, "lng": -75.0931737784802},
    {"id": "MP 20678", "lat": 40.0740141116265, "lng": -75.1575861121568},
    {"id": "MP 90577", "lat": 40.0873896110275, "lng": -74.9608339748005},
    {"id": "MP 91122", "lat": 40.2129635176821, "lng": -75.01195462589},
    {"id": "MP 94750", "lat": 39.9763606531953, "lng": -75.1194692650701},
    {"id": "MP 20693", "lat": 39.976494932146, "lng": -75.1580816265739},
    {"id": "MP 90582", "lat": 40.2322636001077, "lng": -74.9407894586644},
    {"id": "MP 21521", "lat": 39.9539052600824, "lng": -75.199227479263},
    {"id": "MP 21518", "lat": 39.9379431591009, "lng": -75.1667540382082},
    {"id": "MP 21520", "lat": 39.9186826142142, "lng": -75.1849716018374},
    {"id": "MP 20674", "lat": 40.0306914380818, "lng": -75.1034135383946},
    {"id": "MP 95024", "lat": 40.2459747070055, "lng": -74.7630541149707},
    {"id": "MP 20682", "lat": 40.2110783778632, "lng": -74.7552723000323},
    {"id": "MP 20697", "lat": 40.556294071305, "lng": -75.4896127978639},
    {"id": "MP 90560", "lat": 40.6748387513354, "lng": -75.3460137037353},
    {"id": "MP 21406", "lat": 40.5524942874463, "lng": -75.5923687183309},
    {"id": "MP 90522", "lat": 41.2584381158992, "lng": -75.901857032505},
    {"id": "MP 90566", "lat": 40.2393244476958, "lng": -75.242141743823},
    {"id": "MP 90570", "lat": 40.6788561788995, "lng": -75.1473909672058},
    {"id": "MP 91116", "lat": 40.6443483776485, "lng": -75.3470388503772},
    {"id": "MP 91118", "lat": 40.2647605615097, "lng": -75.3192244305822},
    {"id": "MP 94747", "lat": 40.3177636918695, "lng": -75.3076553069029},
    {"id": "MP 91120", "lat": 40.1165378059024, "lng": -75.2864770740739}
];

const BWW_PA = [
    {"name": "Buffalo Wild Wings - Downingtown", "address": "103 Quarry Road, Downingtown, PA 19335", "lat": 40.0066, "lng": -75.6922},
    {"name": "Buffalo Wild Wings - Easton", "address": "3798 Dryland Way, Easton, PA 18045", "lat": 40.6706, "lng": -75.2867},
    {"name": "Buffalo Wild Wings - Glen Mills", "address": "920 Baltimore Pike, Glen Mills, PA 19342", "lat": 39.8818, "lng": -75.531},
    {"name": "Buffalo Wild Wings - King of Prussia", "address": "690 West Dekalb Pike, King of Prussia, PA 19406", "lat": 40.0911, "lng": -75.3872},
    {"name": "Buffalo Wild Wings - Lancaster", "address": "2065 Fruitville Pike, Lancaster, PA 17601", "lat": 40.073, "lng": -76.3197},
    {"name": "Buffalo Wild Wings - Langhorne", "address": "2763 East Lincoln Highway, Langhorne, PA 19047", "lat": 40.1836, "lng": -74.8802},
    {"name": "Buffalo Wild Wings - Philadelphia Roosevelt Blvd.", "address": "9701 Roosevelt Road, Philadelphia, PA 19114", "lat": 40.0813, "lng": -75.0218},
    {"name": "Buffalo Wild Wings - Phoenixville", "address": "1510 Egypt Road, Phoenixville, PA 19460", "lat": 40.1334, "lng": -75.5329},
    {"name": "Buffalo Wild Wings - Quakertown", "address": "1465 West Broad Street, Suite 29, Quakertown, PA 18951", "lat": 40.441, "lng": -75.3609},
    {"name": "Buffalo Wild Wings - Scranton", "address": "100 Viewmont Mall, Suite 614, Scranton, PA 18508", "lat": 41.4596, "lng": -75.6555},
    {"name": "Buffalo Wild Wings - Warrington", "address": "201 Easton Road #118, Warrington, PA 18976", "lat": 40.2245, "lng": -75.141},
    {"name": "Buffalo Wild Wings - Whitehall", "address": "1225 Grape Street, Whitehall, PA 18052", "lat": 40.6321, "lng": -75.4877},
    {"name": "Buffalo Wild Wings - Wilkes-Barre", "address": "319 Bear Creek Blvd, Wilkes-Barre, PA 18702", "lat": 41.2444, "lng": -75.8366}
];

const BWW_NJ = [
    {"name": "Buffalo Wild Wings - Princeton, NJ", "address": "Princeton, NJ", "lat": 40.3573, "lng": -74.6672},
    {"name": "Buffalo Wild Wings GO - Voorhees, NJ - Echelon Village", "address": "1120 White Horse Road, Voorhees, NJ 08043", "lat": 39.8466, "lng": -74.994},
    {"name": "Buffalo Wild Wings - Watchung, NJ", "address": "1599 US Highway 22 West, Watchung, NJ 07069", "lat": 40.637, "lng": -74.4406},
    {"name": "Buffalo Wild Wings GO - Sparta, NJ", "address": "4 N Village Blvd STE A, Sparta, NJ", "lat": 41.0334, "lng": -74.6399},
    {"name": "Buffalo Wild Wings - Flemington, NJ", "address": "144 NJ-31 #100, Flemington, NJ 08822", "lat": 40.521, "lng": -74.8592},
    {"name": "Buffalo Wild Wings - Moorestown, NJ", "address": "1598 Nixon Dr, Moorestown, NJ 08054", "lat": 39.9444, "lng": -74.963}
];

// Combined array of all locations with type and color
const ALL = [
    ...MP.map(x => ({ ...x, type: 'MP', color: '#1e3a8a' })),
    ...BWW_PA.map(x => ({ ...x, type: 'BWW PA', color: '#dc2626' })),
    ...BWW_NJ.map(x => ({ ...x, type: 'BWW NJ', color: '#c2410c' }))
];

// Initialize the map centered on the area
const map = L.map('map').setView([40.25, -75.05], 8);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Array to hold markers
const markers = [];

// Function to create a custom icon for markers
function icon(p) {
    let iconClass = '';
    let color = p.color;

    if (p.type === 'MP') {
        iconClass = 'fas fa-building';
    } else if (p.name && p.name.includes('GO')) {
        iconClass = 'fas fa-star';
    } else {
        iconClass = 'fas fa-utensils';
    }

    return L.divIcon({
        className: '',
        html: `<i class="${iconClass}" style="color: ${color}; font-size: 18px;"></i>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });
}

// Function removed - no longer needed with new icon system

// Function to generate popup content for a location
function popup(p) {
    return `<b>${p.id || p.name}</b><br>${p.type}<br>${p.address || ''}<br>${p.lat.toFixed(6)}, ${p.lng.toFixed(6)}`;
}

// Function to add markers to the map
function addMarkers() {
    // Remove existing markers
    markers.forEach(m => map.removeLayer(m));
    markers.length = 0;

    // Add new markers
    ALL.forEach((p, i) => {
        const m = L.marker([p.lat, p.lng], { icon: icon(p) }).addTo(map).bindPopup(popup(p));
        // When marker is clicked, set it as start point in dropdown and radius center
        m.on('click', () => {
            document.getElementById('from').value = i;
            document.getElementById('radiusCenter').value = i;
        });
        markers.push(m);
    });

    // Fit map to bounds of all markers
    map.fitBounds(L.latLngBounds(ALL.map(p => [p.lat, p.lng])), { padding: [30, 30] });
}

// Function to populate select dropdowns with locations
function fillSelects() {
    ['from', 'to', 'radiusCenter'].forEach(id => {
        const sel = document.getElementById(id);
        sel.innerHTML = '';
        ALL.forEach((p, i) => {
            const o = document.createElement('option');
            o.value = i;
            o.textContent = `${p.type} - ${p.id || p.name}`;
            sel.appendChild(o);
        });
    });

    // Default end point to first BWW
    document.getElementById('to').value = MP.length;

    // Update pin counts display
    document.getElementById('counts').innerHTML = `${MP.length} MP pins<br>${BWW_PA.length} PA BWW pins<br>${BWW_NJ.length} NJ BWW pins`;
}

// Variables for radius circle and route line
let radiusCircle = null, routeLine = null;

// Function to draw radius circle around selected center
function drawRadius() {
    clearRadius();
    const p = ALL[+document.getElementById('radiusCenter').value];
    const miles = parseFloat(document.getElementById('radiusMiles').value) || 0;
    radiusCircle = L.circle([p.lat, p.lng], {
        radius: miles * 1609.344, // Convert miles to meters
        color: '#111827',
        fillColor: '#60a5fa',
        fillOpacity: 0.12,
        weight: 2
    }).addTo(map);
    map.fitBounds(radiusCircle.getBounds());
}

// Function to clear the radius circle
function clearRadius() {
    if (radiusCircle) {
        map.removeLayer(radiusCircle);
        radiusCircle = null;
    }
}

// Function to clear the route line and reset result text
function clearRoute() {
    if (routeLine) {
        map.removeLayer(routeLine);
        routeLine = null;
    }
    document.getElementById('routeResult').textContent = 'No route calculated yet.';
}

// Function to calculate straight-line distance using Haversine formula
function haversine(a, b) {
    const R = 3958.8; // Earth's radius in miles
    const dLat = (b.lat - a.lat) * Math.PI / 180;
    const dLon = (b.lng - a.lng) * Math.PI / 180;
    const lat1 = a.lat * Math.PI / 180;
    const lat2 = b.lat * Math.PI / 180;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
}

// Function to calculate driving route using OSRM
async function routeDrive() {
    clearRoute();
    const a = ALL[+document.getElementById('from').value];
    const b = ALL[+document.getElementById('to').value];
    const straight = haversine(a, b);
    const out = document.getElementById('routeResult');
    out.innerHTML = 'Calculating...';

    try {
        // Fetch route from OSRM API
        const url = `https://router.project-osrm.org/route/v1/driving/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`;
        const r = await fetch(url);
        if (!r.ok) throw new Error('route failed');
        const data = await r.json();
        const rt = data.routes[0];
        const mi = rt.distance / 1609.344; // Convert meters to miles
        const min = rt.duration / 60; // Convert seconds to minutes

        // Add route line to map
        routeLine = L.geoJSON(rt.geometry, { style: { color: '#111827', weight: 4 } }).addTo(map);
        map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });

        // Display results
        out.innerHTML = `<b>Driving:</b> ${mi.toFixed(1)} miles · ${Math.round(min)} minutes<br><b>Straight-line:</b> ${straight.toFixed(1)} miles`;
    } catch (e) {
        // Fallback to straight line if routing fails
        routeLine = L.polyline([[a.lat, a.lng], [b.lat, b.lng]], {
            color: '#111827',
            dashArray: '6,6',
            weight: 3
        }).addTo(map);
        map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
        out.innerHTML = `Routing service unavailable.<br><b>Straight-line distance:</b> ${straight.toFixed(1)} miles`;
    }
}

// Function to geocode a single address using Nominatim
async function geocodeOne(p) {
    const q = encodeURIComponent(p.address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`;
    const r = await fetch(url, { headers: { 'Accept': 'application/json' } });
    const d = await r.json();
    if (d && d[0]) {
        p.lat = parseFloat(d[0].lat);
        p.lng = parseFloat(d[0].lon);
        return true;
    }
    return false;
}

// Function to geocode all BWW locations and update markers
async function geocodeBWW() {
    const status = document.getElementById('geoStatus');
    let ok = 0;
    const total = BWW_PA.length + BWW_NJ.length;
    for (const p of [...BWW_PA, ...BWW_NJ]) {
        status.textContent = `Geocoding ${ok + 1} of ${total}...`;
        try {
            if (await geocodeOne(p)) ok++;
        } catch (e) {}
        // Rate limit to avoid hitting API limits
        await new Promise(res => setTimeout(res, 1100));
    }
    status.textContent = `Updated ${ok} of ${total} BWW coordinates.`;
    // Refresh markers and selects with new coordinates
    addMarkers();
    fillSelects();
}

// Initialize the map with markers and selects
addMarkers();
fillSelects();