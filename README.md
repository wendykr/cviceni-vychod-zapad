# Cvičení: Volání API

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Východ a západ slunce

Vytvořme webovou stránku, která bude zobrazovat čas, kdy dnes vyšlo a kdy zapadá slunce.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/daweb/js2/server-komunikace/cv-volani-api/cvlekce%3Evychod-zapad/ukazka.gif)

-  Založte si nový projekt příkazem

```javascript
npm init kodim-app@latest cviceni-vychod-zapad html-css-js
```

- Otevřete si ve VS Code vytvořenou složku `cviceni-vychod-zapad`.

- V souboru `index.js` pomocí funkce `fetch` získejte data z API na adrese

```javascript
https://api.sunrise-sunset.org/json?lat=50&lng=14.5
```
- Výsledný JSON zatím pouze vypište do konzole a prohlédněte si jeho strukturu.

- Místo do konzole vypište někam do stránky čas východu a západu slunce.

- Přidejte na stránku tlačítko. Když uživatel toto tlačítko stiskne, teprve pak zavolejte API a zobrazte čas východu a západu slunce.