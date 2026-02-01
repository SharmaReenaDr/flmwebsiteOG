#!/bin/bash

# This script creates a simple hero video background
# You can replace this with your own video file

echo "Hero video should be placed at: public/hero-video.mp4"
echo ""
echo "Video Requirements:"
echo "  - Format: MP4 or WebM"
echo "  - Recommended resolution: 1920x1080 or 1280x720"
echo "  - Recommended duration: 10-20 seconds (looping)"
echo "  - File size: Keep under 5MB for fast loading"
echo ""
echo "How to add your video:"
echo "  1. Create or download a dance/fitness related video"
echo "  2. Export as MP4 format"
echo "  3. Place the file as: public/hero-video.mp4"
echo "  4. Optionally create WebM version for better browser support"
echo ""
echo "Recommended tools for video creation/conversion:"
echo "  - FFmpeg: ffmpeg -i input.mov -c:v libx264 -c:a aac hero-video.mp4"
echo "  - Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve"
echo "  - Online tools: CloudConvert, Kapwing, or Handbrake"
