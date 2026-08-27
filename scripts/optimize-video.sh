#!/usr/bin/env bash
# Re-encodes the hero video so scroll-scrubbing is smooth.
#
# Why this matters: seeking an H.264 video means decoding forward from the
# nearest keyframe. The original file is 1080p @ 9.3 Mbps with keyframes ~8s
# apart and B-frames enabled — every scroll seek forces the decoder to chew
# through hundreds of frames. That is the freezing you see.
#
#   -g 10 -keyint_min 10   keyframe every 0.4s  -> seeks land almost instantly
#   -bf 0                  no B-frames          -> no out-of-order decoding
#   -tune fastdecode       cheaper decode path
#
# Requires ffmpeg:  brew install ffmpeg

set -e
cd "$(dirname "$0")/.."

SRC="public/video/one-original.mp4"
OUT="public/video/one.mp4"

# Keep the untouched original once
if [ ! -f "$SRC" ]; then
  cp "$OUT" "$SRC"
  echo "Original saved to $SRC"
fi

ffmpeg -y -i "$SRC" -an \
  -vf "scale=1280:-2,fps=25" \
  -c:v libx264 -profile:v high -crf 25 -preset slow \
  -g 10 -keyint_min 10 -sc_threshold 0 -bf 0 \
  -tune fastdecode -pix_fmt yuv420p -movflags +faststart \
  "$OUT"

echo ""
echo "Done:"
ls -lh "$SRC" "$OUT"
