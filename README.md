# Ra-Apii
author: @rayyreall

## Install it

``` npm i ra-api ```

## Usage


- Random Cerpen

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.RandomCerpen();
   console.log(data)
})()
```

- Emoji

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.emoji('😂');
   console.log(data)
})()
```

- Sticker Search

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.stickerSearch('pentol');
   console.log(data)
})()
```

- Mangga Toon

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.ManggaToon('Boss Nakal');
   console.log(data)
})()
```

- Ramal Jadian

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.RamalJadian(tanggal, bulan, tahun);
   console.log(data)
})()
```

- Pantun

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.Pantun();
   console.log(data)
})()
```

- Truth Or Dare


```
querry: 
- truth id
- truth eng
- dare id
- dare eng
```

```
const Ra = require('ra-api')

(async () => {
   const data = await Ra.trutdare(querry);
   console.log(data)
})()
```


- Info Film 123

```
const Ra = require('ra-api')
const url = `https://123movies.mom/film/impractical-jokers-after-party-season-2-xQ7ly/`

(async () => {
   const data = await Ra.infoFilm123(url);
   console.log(data)
})()
```

- Info Film 123

```
const Ra = require('ra-api')
const judul = `joker`

(async () => {
   const data = await Ra.SearchFilm(judul);
   console.log(data)
})()
```

## thank you for visiting
* [`INSTAGRAM`](https://www.instagram.com/rayyreall/) 
* [`PAYPAL`](https://www.paypal.me/rayyreall) 
* [`SAWERIA`](https://saweria.co/RayyNihBOSS) 
