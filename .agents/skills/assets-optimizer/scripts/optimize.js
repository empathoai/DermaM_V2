import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import sharp from 'sharp';

// Helper to run ffmpeg
function compressVideo(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    // -an removes audio, -crf 28 compresses video, -preset slow optimizes file size
    const cmd = `ffmpeg -y -i "${inputPath}" -vcodec libx264 -crf 28 -an -preset slow "${outputPath}"`;
    console.log(`Running video compression: ${cmd}`);
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Helper to compress image and keep under 200KB
async function compressImage(inputPath, outputPath) {
  let quality = 85;
  let width = null;
  
  // First read metadata to check width
  const metadata = await sharp(inputPath).metadata();
  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
  
  // If the image is extremely large (e.g. > 2000px), resize to a standard desktop width
  if (metadata.width > 2000) {
    width = 1920;
  }
  
  let buffer;
  let size = Infinity;
  const targetSize = 200 * 1024; // 200KB in bytes

  while (size > targetSize && quality >= 50) {
    let pipeline = sharp(inputPath);
    if (width) {
      pipeline = pipeline.resize({ width });
    }
    
    buffer = await pipeline
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
      
    size = buffer.length;
    console.log(`Attempted compression at quality ${quality}: ${(size / 1024).toFixed(2)} KB`);
    
    // Decrement quality for next iteration if still too large
    quality -= 5;
  }

  await fs.promises.writeFile(outputPath, buffer);
  console.log(`Successfully saved optimized image to ${outputPath} (${(size / 1024).toFixed(2)} KB)`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Usage: node optimize.js <file-path>");
    process.exit(1);
  }

  const filePath = path.resolve(args[0]);
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File does not exist at ${filePath}`);
    process.exit(1);
  }

  const ext = path.extname(filePath).toLowerCase();
  
  try {
    if (ext === '.png') {
      const dir = path.dirname(filePath);
      const name = path.basename(filePath, ext);
      const outputPath = path.join(dir, `${name}.jpg`);
      
      console.log(`Converting and compressing PNG to JPG...`);
      await compressImage(filePath, outputPath);
      
      // Delete original PNG if conversion succeeded and output file exists
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted original PNG: ${filePath}`);
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const tempPath = filePath + '.tmp.jpg';
      console.log(`Compressing existing JPG in place...`);
      await compressImage(filePath, tempPath);
      
      if (fs.existsSync(tempPath)) {
        fs.renameSync(tempPath, filePath);
        console.log(`Optimized image replaced in-place: ${filePath}`);
      }
    } else if (ext === '.mp4') {
      const tempPath = filePath + '.tmp.mp4';
      console.log(`Compressing video...`);
      await compressVideo(filePath, tempPath);
      
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`Optimized video replaced in-place: ${filePath}`);
      }
    } else {
      console.log(`Unsupported file extension: ${ext}`);
    }
  } catch (err) {
    console.error("Optimization failed:", err);
    process.exit(1);
  }
}

main();
