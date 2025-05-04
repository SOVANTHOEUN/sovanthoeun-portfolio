const fs = require('fs');
const path = require('path');
const { Font } = require('three/examples/jsm/loaders/FontLoader');
const { create } = require('three/examples/jsm/geometries/TextGeometry');

// Path to the .ttf font file
const ttfPath = path.resolve(__dirname, 'public/fonts/Inter/static/Inter_18pt-Bold.ttf');

// Path to save the generated JSON file
const outputPath = path.resolve(__dirname, 'public/fonts/Inter/Inter_18pt-Bold.json');

try {
  // Read the .ttf file
  const ttfData = fs.readFileSync(ttfPath);

  // Convert the .ttf data to JSON
  const font = new Font(ttfData);
  const fontData = create(font);

  // Write the JSON font data to the output file
  fs.writeFileSync(outputPath, JSON.stringify(fontData, null, 2));

  console.log('Font successfully converted to JSON:', outputPath);
} catch (error) {
  console.error('Error during font conversion:', error.message);
}