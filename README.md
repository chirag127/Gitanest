# Gitanest

[![CI](https://github.com/chirag127/Gitanest/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/Gitanest/actions/workflows/ci.yml)
[![Stars](https://img.shields.io/github/stars/chirag127/Gitanest?style=flat)](https://github.com/chirag127/Gitanest/stargazers)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A Manifest V3 browser extension that shows a random **Bhagavad Gita** verse —
its chapter, verse number, and English meaning — every time you click it.

> **Install (unpacked):** download the
> [latest ZIP](https://github.com/chirag127/Gitanest/archive/refs/heads/main.zip),
> unzip, open `chrome://extensions`, enable **Developer mode**, click
> **Load unpacked**, and select the folder. Pin the extension to use it.

## How it works

On click, the popup fetches a random verse from
[vedicscriptures.github.io](https://vedicscriptures.github.io) and renders the
Sanskrit `slok` plus its English meaning. Chapters 1–18 and their exact verse
counts are covered.

## Files

| File | Purpose |
|---|---|
| `manifest.json` | MV3 manifest (action popup, `host_permissions` for the verse API) |
| `popup.html` / `style.css` | Popup UI |
| `script.js` | Fetch + render a random verse (with error handling) |

## Develop

No build step — it's a static extension. `ci.yml` validates `manifest.json`,
checks required files, and packages a `gitanest.zip` artifact on each push.

## License

[MIT](LICENSE)
