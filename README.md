# GoogleChat Chrome Extension

Tämä on Chrome-laajennus, joka käyttää OpenAI API:a keskustelujen automatisointiin.

## Asennusohjeet

1. **Kloonaa tai lataa tämä repositorio** koneellesi.
2. **Poista mahdolliset salaiset avaimet** (API-avaimet) koodista ennen käyttöä.
3. Avaa Chrome ja siirry kohtaan `chrome://extensions/`.
4. Ota kehittäjätila käyttöön oikeasta yläkulmasta.
5. Valitse "Lataa purettu laajennus" ja valitse tämän projektin kansio.

## OpenAI API -avaimen lisääminen

1. Luo tiedosto `config.js` (jos sitä ei ole).
2. Lisää seuraava rivi ja korvaa `YOUR_OPENAI_API_KEY_HERE` omalla OpenAI API -avaimellasi:

```js
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";
```

3. Varmista, että `config.js` on lisätty `.gitignore`-tiedostoon, jotta avain ei päädy GitHubiin.

## Käyttö

- Avaa laajennuksen popup-ikkuna Chromessa.
- Syötä kysymyksesi ja paina lähetä.
- Vastaus näkyy popupissa.

## Turvallisuus
- Älä koskaan tallenna oikeaa API-avainta julkiseen repositorioon.
- Käytä `.gitignore`-tiedostoa estääksesi avaimen päätymisen versionhallintaan.


