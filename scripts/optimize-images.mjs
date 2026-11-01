import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeMetaResults() {
  const dir = path.resolve('src/assets/meta results');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

  console.log('--- Optimizing Meta Results Screenshots ---');
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.png$/, '.webp'));
    const beforeSize = fs.statSync(inputPath).size;
    totalBefore += beforeSize;

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;
    totalAfter += afterSize;

    console.log(`✓ ${file}`);
    console.log(`  Before: ${(beforeSize / 1024).toFixed(1)} KB -> After: ${(afterSize / 1024).toFixed(1)} KB (${Math.round((1 - afterSize / beforeSize) * 100)}% reduction)`);
  }

  console.log(`Total Meta Results: ${(totalBefore / (1024*1024)).toFixed(2)} MB -> ${(totalAfter / (1024*1024)).toFixed(2)} MB\n`);
}

async function optimizeClientLogos() {
  const dir = path.resolve('src/assets/client-logo');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

  console.log('--- Optimizing Client Brand Logos ---');
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.png$/, '.webp'));
    const beforeSize = fs.statSync(inputPath).size;
    totalBefore += beforeSize;

    // Client logos are displayed at ~40px-60px height. Max width 300px preserves retina crispness!
    await sharp(inputPath)
      .resize({ width: 300, withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 90, effort: 6 })
      .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;
    totalAfter += afterSize;

    console.log(`✓ ${file}`);
    console.log(`  Before: ${(beforeSize / 1024).toFixed(1)} KB -> After: ${(afterSize / 1024).toFixed(1)} KB (${Math.round((1 - afterSize / beforeSize) * 100)}% reduction)`);
  }

  console.log(`Total Client Logos: ${(totalBefore / (1024*1024)).toFixed(2)} MB -> ${(totalAfter / (1024*1024)).toFixed(2)} MB\n`);
}

async function optimizeBrandLogos() {
  const dir = path.resolve('src/assets');
  const logos = ['logo-transparent.png', 'logo.png', 'logo-tight.png'];

  console.log('--- Optimizing Agency Logos ---');
  for (const file of logos) {
    const inputPath = path.join(dir, file);
    if (!fs.existsSync(inputPath)) continue;

    const outputPath = path.join(dir, file.replace(/\.png$/, '.webp'));
    const beforeSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize({ width: 400, withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 90 })
      .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;
    console.log(`✓ ${file}: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB`);
  }
}

async function run() {
  await optimizeMetaResults();
  await optimizeClientLogos();
  await optimizeBrandLogos();
}

run().catch(console.error);

