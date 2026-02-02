# 🎥 Hero Video Setup Guide

Your website is now ready to display a **video background** in the hero section instead of the solid color!

---

## 📁 Where to Add Your Video

Place your video file here:
```
public/hero-video.mp4
```

**Optional** (for better browser support):
```
public/hero-video.webm
```

---

## 📋 Video Specifications

For the best results, your video should meet these requirements:

| Specification | Recommendation |
|--------------|-----------------|
| **Format** | MP4 (primary) or WebM (fallback) |
| **Resolution** | 1920x1080 (Full HD) or 1280x720 (HD) |
| **Duration** | 10-20 seconds (will loop continuously) |
| **File Size** | Under 5MB for fast loading |
| **Aspect Ratio** | 16:9 widescreen |
| **Codec** | H.264 video, AAC audio |
| **Frame Rate** | 24-30 fps |
| **Content** | Dance, fitness, movement, spirituality related |

---

## 🎬 How to Prepare Your Video

### Option 1: Convert Existing Video Using FFmpeg

If you have a video file (`.mov`, `.avi`, `.mkv`, etc.), convert it using FFmpeg:

```bash
# Install FFmpeg (if not already installed)
brew install ffmpeg

# Convert to MP4
ffmpeg -i input-video.mov -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 192k hero-video.mp4

# Optional: Create WebM for better browser support
ffmpeg -i input-video.mov -c:v libvpx-vp9 -b:v 800k -c:a libopus hero-video.webm
```

### Option 2: Use Online Tools

- **CloudConvert**: https://cloudconvert.com/video-converter
- **Kapwing**: https://www.kapwing.com/
- **HandBrake**: https://handbrake.fr/ (free desktop app)

### Option 3: Use Adobe Tools

- **Adobe Premiere Pro**: Export → Format: H.264, Preset: High Quality
- **After Effects**: Composition → Add to Render Queue → Output Module: MP4

---

## 📤 Adding Your Video to the Project

1. **Prepare your video** (see options above)
2. **Place the file** in the `public` folder:
   ```
   /Users/reenasharma/Downloads/Magic_Ai_AY/public/hero-video.mp4
   ```
3. **Refresh your browser** at http://localhost:3000
4. Your video will appear as the background!

---

## 🎨 Video Tips for FLM Brand

Your hero video should visually represent:
- ✅ **Dance movements** (Bollywood, Bhangra, contemporary, hip-hop)
- ✅ **Fitness energy** (flowing movement, dynamic poses)
- ✅ **Spirituality** (meditation, breathwork, peaceful energy)
- ✅ **Transformation** (before/after, journey, growth)

### Content Ideas:
- Slow-motion dance sequences
- People in different dance poses/positions
- Movement transitions
- Studio or outdoor setting
- Soft, warm lighting
- No text overlays (text is on the page)

---

## ✅ Testing Your Video

Once you add the video file:

1. **Refresh the page** in your browser
2. **Check if video appears** as the background
3. **Test on mobile** to ensure it works on smaller screens
4. **Verify looping** - video should loop seamlessly
5. **Check performance** - page should load in under 2 seconds

---

## 🔧 Customizing the Video Display

If you want to adjust how the video appears, edit `app/page.tsx`:

### Change overlay darkness (currently 40% black):
```tsx
<div className="absolute inset-0 bg-black/40"></div>
{/* Change /40 to /30 (lighter) or /50 (darker) */}
```

### Adjust cover behavior:
```tsx
className="absolute inset-0 w-full h-full object-cover"
{/* Change object-cover to object-contain if video doesn't fill screen */}
```

---

## 📊 Performance Optimization

To ensure your page loads quickly:

1. **Compress your video** before uploading:
   ```bash
   ffmpeg -i hero-video.mp4 -c:v libx264 -crf 28 -preset fast -c:a aac hero-video-compressed.mp4
   ```

2. **Use WebM format** (smaller file size):
   ```bash
   ffmpeg -i hero-video.mp4 -c:v libvpx-vp9 -b:v 500k -c:a libopus hero-video.webm
   ```

3. **Monitor file size**:
   - Ideal: 2-4 MB
   - Maximum: 5 MB
   - If larger, re-encode or trim video

---

## 🌐 Deployment Note

When deploying to **Vercel**:
1. Ensure video file is in the `public` folder
2. Vercel will automatically serve static files
3. Video will be optimized for CDN delivery
4. Global users will experience faster loading

---

## 💡 Pro Tips

1. **Add captions** - If video has dance instruction, consider adding subtle captions
2. **Brand watermark** - Optional: add FLM logo in corner (semi-transparent)
3. **Call-to-action** - Text overlay already handles this (don't duplicate)
4. **Muted by default** - Video is muted (no audio) for auto-play compatibility
5. **Loop seamlessly** - Ensure your video has smooth transitions for looping

---

## 🐛 Troubleshooting

### Video doesn't appear:
- ✅ Check file is at `public/hero-video.mp4`
- ✅ Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Check browser console for errors
- ✅ Try WebM format as fallback

### Video lags/stutters:
- ✅ Check file size (reduce if > 5MB)
- ✅ Try lower resolution (720p instead of 1080p)
- ✅ Use faster codec (H.264 instead of VP9)

### Video doesn't loop smoothly:
- ✅ Trim silence at beginning/end
- ✅ Use consistent frame rate throughout
- ✅ Avoid hard cuts at loop points

### Audio is playing:
- ✅ Video is set to `muted` automatically
- ✅ If you want audio, remove `muted` attribute (not recommended for auto-play)

---

## 📞 Questions?

Refer to:
- `app/page.tsx` - Hero section code (lines 1-40)
- `public/` folder - Where to place video file
- `README_NEW.md` - General website documentation

---

**Status**: Video background system ready ✅  
**Next**: Add your video file and refresh!

