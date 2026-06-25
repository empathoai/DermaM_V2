---
name: assets-optimizer
description: Converts PNG images to web-optimized JPGs (under 200KB) and compresses MP4 background videos using FFmpeg for web performance.
---

# Assets Optimizer Skill

## Purpose

Automate image conversion (PNG to JPG) and compression to target sizes under 200KB, as well as MP4 background video optimization using system tools (FFmpeg and Node/Sharp).

## Trigger

Use this skill when:
- The user uploads or specifies new images (especially `.png` files) that need to be optimized or converted to `.jpg`.
- The user requests background video compression (e.g. `.mp4`).
- Any asset file sizes exceed performance limits (e.g. images over 200KB, videos over 3MB).

## Workflow

1. **Verify Dependencies**
   - Ensure `sharp` is available in `node_modules`.
   - Ensure `ffmpeg` is available on the system path.

2. **Run the Optimizer Script**
   - Execute the optimizer script on the target file:
     ```bash
     node .agents/skills/assets-optimizer/scripts/optimize.js "/path/to/asset.png"
     ```
   - For images, the script converts PNG to JPG, resizes large dimensions, dynamically decreases quality to fit under 200KB, and cleans up the original PNG.
   - For videos, the script recompresses the MP4 with x264, CRF 28, preset slow, removes the audio stream, and replaces the file in-place.

3. **Verify Output**
   - Confirm that the output files exist, are of reasonable size, and are properly referenced in the codebase.

## Rules / Constraints

- **No Quality Destruction:** Keep image compression quality above 50 (target 70-85%).
- **Reference Cleanliness:** Ensure that if a PNG was deleted, the code matches the new `.jpg` filename (though typical page templates and components already reference `.jpg`).
- **No Audio in Background Videos:** Background videos must always be muted (`-an`) to save bandwidth and prevent autoplay blocks.
