const fs = require('fs');
const path = require('path');

const API_DIR = path.join(__dirname, 'public', 'api');

const products = JSON.parse(fs.readFileSync(path.join(API_DIR, 'products.json'), 'utf8'));

const templates = {
  'fridges': {
    sizeAvailable: ["340L", "385L", "400L"],
    colorsAvailable: ["silver", "white", "black", "inox"],
    images: ["img/no-image.svg", "img/no-image.svg", "img/no-image.svg"],
    description: [
      { title: "Smart Cooling", text: ["Maintains optimal temperature everywhere. Reduces energy consumption and keeps food fresh longer."] },
      { title: "No Frost", text: ["No need to defrost manually ever again. Prevents ice buildup inside the fridge."] }
    ],
    dimensions: "200 x 60 x 65 cm",
    weight: "70 kg",
    noiseLevel: "37 dB",
    features: ["No Frost", "LED Display", "Fast Freeze"]
  },
  'washing-machines': {
    sizeAvailable: ["6kg", "7kg", "9kg"],
    colorsAvailable: ["white", "black", "silver"],
    images: ["img/no-image.svg", "img/no-image.svg", "img/no-image.svg"],
    description: [
      { title: "Inverter Motor", text: ["Quiet and energy-efficient washing. Provides long-lasting durability and reduces noise during the spin cycle."] },
      { title: "Steam Wash", text: ["Removes 99.9% of bacteria and allergens. Perfect for baby clothes and sensitive skin."] }
    ],
    dimensions: "85 x 60 x 45 cm",
    weight: "60 kg",
    noiseLevel: "55 dB",
    features: ["Steam Control", "Quick Wash 15'", "Child Lock"]
  },
  'robot-vacuums': {
    sizeAvailable: ["Standard", "Plus Base"],
    colorsAvailable: ["white", "black", "grey"],
    images: ["img/no-image.svg", "img/no-image.svg", "img/no-image.svg"],
    description: [
      { title: "Laser Navigation", text: ["Scans the room to create optimal cleaning paths. Avoids obstacles and never misses a spot."] },
      { title: "App Control", text: ["Start, stop, and schedule cleaning from your smartphone, even when you are not at home."] }
    ],
    dimensions: "35 x 35 x 9.5 cm",
    weight: "3.5 kg",
    noiseLevel: "60 dB",
    features: ["LDS Navigation", "Wet Cleaning", "Auto-return to Base"]
  }
};

const detailedData = {
  'fridges': [],
  'washing-machines': [],
  'robot-vacuums': []
};

products.forEach(p => {
  const template = templates[p.category];

  const detail = {
    id: p.itemId,
    category: p.category,
    namespaceId: p.itemId.split('-').slice(0, 2).join('-'),
    name: p.name,
    sizeAvailable: template.sizeAvailable,
    size: template.sizeAvailable[0],
    priceRegular: p.fullPrice,
    priceDiscount: p.price,
    colorsAvailable: template.colorsAvailable,
    color: p.color,
    images: template.images,
    description: template.description,
    country: p.country,
    dimensions: template.dimensions,
    warranty: p.warranty,
    power: p.power,
    weight: template.weight,
    noiseLevel: template.noiseLevel,
    features: template.features
  };

  detailedData[p.category].push(detail);
});

fs.writeFileSync(path.join(API_DIR, 'fridges.json'), JSON.stringify(detailedData['fridges'], null, 2));
fs.writeFileSync(path.join(API_DIR, 'washing-machines.json'), JSON.stringify(detailedData['washing-machines'], null, 2));
fs.writeFileSync(path.join(API_DIR, 'robot-vacuums.json'), JSON.stringify(detailedData['robot-vacuums'], null, 2));
