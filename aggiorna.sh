#!/usr/bin/env bash
# Sincronizza il vault e pubblica su GitHub Pages

VAULT="/media/vuser/HDD/Document/Obsidian/giappone-vault"
QUARTZ_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "→ Sincronizzazione vault..."
rsync -a --delete \
  --exclude='.obsidian' \
  --exclude='.trash' \
  --exclude='CLAUDE.md' \
  --exclude='memory/' \
  "$VAULT/" "$QUARTZ_DIR/content/"

echo "→ Commit e push..."
cd "$QUARTZ_DIR"
git add -A
git commit -m "aggiornamento vault $(date '+%d/%m/%Y %H:%M')"
git push

echo "✓ Fatto! Il sito si aggiorna in 1–2 minuti."
echo "  URL: https://vcioffi.github.io/giappone-2026"
