import fs from 'fs';
import path from 'path';

// Read .env manually
const envPath = path.resolve('.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ .env file not found!');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...vals] = trimmed.split('=');
    if (key && vals.length) {
      env[key.trim()] = vals.join('=').trim().replace(/^["']|["']$/g, '');
    }
  }
});

const cloudName = env.VITE_CLOUDINARY_CLOUD_NAME;
const apiKey = env.VITE_CLOUDINARY_API_KEY;
const apiSecret = env.CLOUDINARY_API_SECRET;

if (!cloudName || cloudName === 'your_cloud_name_here') {
  console.error('❌ Please enter your VITE_CLOUDINARY_CLOUD_NAME in .env');
  process.exit(1);
}
if (!apiKey || apiKey === 'your_api_key_here') {
  console.error('❌ Please enter your VITE_CLOUDINARY_API_KEY in .env');
  process.exit(1);
}
if (!apiSecret || apiSecret === 'your_api_secret_here') {
  console.error('❌ Please enter your CLOUDINARY_API_SECRET in .env');
  process.exit(1);
}

console.log(`Connecting to Cloudinary (${cloudName})...`);

const authHeader = 'Basic ' + Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/video?max_results=100`;

try {
  const res = await fetch(url, {
    headers: {
      Authorization: authHeader,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error('❌ Cloudinary API error:', data.error?.message || data);
    process.exit(1);
  }

  console.log(`\n✅ Found ${data.resources.length} videos on Cloudinary:\n`);
  data.resources.forEach((item, idx) => {
    console.log(`[${idx + 1}] Public ID: ${item.public_id}`);
    console.log(`    URL: ${item.secure_url}`);
    console.log(`    Size: ${(item.bytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log('---');
  });

  // Save list to a JSON file for easy reference
  const outputPath = path.resolve('cloudinary-videos.json');
  fs.writeFileSync(outputPath, JSON.stringify(data.resources, null, 2), 'utf-8');
  console.log(`\nSaved video list to ${outputPath}`);
} catch (err) {
  console.error('❌ Network error connecting to Cloudinary:', err.message);
  process.exit(1);
}
