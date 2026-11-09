#!/bin/zsh
set -e
cd "$(dirname "$0")"
mkdir -p Evidencias
echo "Abra o aplicativo na aba Sobre e pressione Enter."
read
screencapture -i "Evidencias/sobre_mac.png"
if [[ ! -s "Evidencias/sobre_mac.png" ]]; then
  echo "A captura foi cancelada."
  exit 1
fi
(cd Evidencias && zip -j -q prints_sobre.zip sobre_mac.png)
echo "Arquivo criado: Evidencias/prints_sobre.zip"
