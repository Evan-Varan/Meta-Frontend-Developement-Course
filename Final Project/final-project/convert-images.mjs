import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets";       // folder containing original images
const outputDir = "./src/assets/webp"; // output folder

// make sure output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// loop through all files in the folder
fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if ([".webp", ".webp", ".png"].includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .webp({ quality: 75, effort: 6 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`))
      .catch(err => console.error(`❌ Error converting ${file}:`, err));
  }
});
