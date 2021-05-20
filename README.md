<p align="center">
<img src="https://i.ibb.co/cwKfKsv/IMG-20210519-202626.jpg" width="240" height="240"/>
</p>
<p align="center">
<a href="https://github.com/rayyreall"><img title="Author" src="https://img.shields.io/badge/Author-rayyreall-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/rayyreall/Ra-Apii/network/members"><img title="Forks" src="https://img.shields.io/github/forks/rayyreall/Ra-Apii?color=red&style=flat-square"></a>
<a href="https://github.com/rayyreall/Ra-Apii/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/rayyreall/Ra-Apii?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/rayyreall/Ra-Apii"><img title="Followers" src="https://img.shields.io/github/followers/rayyreall?color=blue&style=flat-square"></a>
<a href="https://github.com/rayyreall/Ra-Apii/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/rayyreall/Ra-Apii?color=red&style=flat-square"></a>
</p>


# Ra-Apii
author: @rayyreall

## Install it

``` npm i ra-api ```

## Usage


- Random Cerpen

```
const Ra = require('ra-api')

(async () => {
  await Ra.RandomCerpeni().then(
		res => console.log(res)
	)
})()
```

- Emoji

```
const Ra = require('ra-api')

(async () => {
   await Ra.emoji('😍').then(
		res => console.log(res)
	)
})()
```

- Sticker Search

```
const Ra = require('ra-api')

(async () => {
 await Ra.stickerSearch('pentol').then(
	 res => console.log(res)
 )
})()
```

- Mangga Toon

```
const Ra = require('ra-api')

(async () => {
 await Ra.ManggaToon('Boss Nakal').then(
	 res => console.log(res)
 )
})()
```

- Ramal Jadian

```
const Ra = require('ra-api')

(async () => {
   await Ra.RamalJadian(tanggal, bulan, tahun).then(
	 res => console.log(res)
 )
})()
```

- Pantun

```
const Ra = require('ra-api')

(async () => {
   const pantun = await Ra.Pantun()
   console.log(pantun)
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
    const truth = await Ra.trutdare('truth id')
	console.log(trurh)
})()
```


- Info Film 123

```
const Ra = require('ra-api')
const url = `https://123movies.mom/film/impractical-jokers-after-party-season-2-xQ7ly/`

(async () => {
 await Ra.infoFilm123(url).then(
	 res => console.log(res)
 )
})()
```

- Info Film 123

```
const Ra = require('ra-api')
const judul = `joker`

(async () => {
await Ra.SearchFilm(judul).then(
	 res => console.log(res)
 )
})()
```

- Lirik Lagu

```
const Ra = require('ra-api')
const judul = `Surat cinta untuk starla`

(async () => {
	await Ra.Liriklagu(judul).then(
		res => console.log(res)
	)
})()
```

- Otaku desu

```
const Ra = require('ra-api')
const judul = `Love`


(async () => {
	await Ra.Otakudesu(judul).then(
		res => console.log(res)
	)
})()
```

- Wikipedia

```
const Ra = require('ra-api')
const judul = `singa`


(async () => {
	await Ra.wikipedia(judul).then(
		res => console.log(res)
	)
})()
```

- Corona

```
const Ra = require('ra-api')
const negara = `indonesia`


(async () => {
	await Ra.corona(negara).then(
		res => console.log(res)
	)
})()
```

- Cuaca

```
const Ra = require('ra-api')
const wilayah = `kalimantan selatan`


(async () => {
	await Ra.cuaca(wilayah).then(
		res => console.log(res)
	)
})()
```

- FilmApik23

```
const Ra = require('ra-api')
const namafilm = `bad boy`


(async () => {
	await Ra.FilmApik23(namafilm).then(
		res => console.log(res)
	)
})()
```

- Gempa

```
const Ra = require('ra-api')


(async () => {
	await Ra.Gempa().then(
		res => console.log(res)
	)
})()
```

- cnn

```
const Ra = require('ra-api')


(async () => {
	await Ra.cnn().then(
		res => console.log(res)
	)
})()
```

- tiktok downloader

```
const Ra = require('ra-api')

(async () => {
	const url = `https://www.tiktok.com/@khaby.lame/video/6963640889373723909?is_from_webapp=1&sender_device=pc&web_id6912436942198244866`
	await Ra.TiktokDownloader(url).then(
		res => console.log(res)
	)
})()
```

- Youtube Play

```
const Ra = require('ra-api')

(async () => {
	const judul = `Surat cinta untuk starla`
	await Ra.ytPlay(judul).then(
		res => console.log(res)
	)
})()
```

- File To Link

```
const Ra = require('ra-api')

(async () => {
	const path = `./storage.png`
	await Ra.uploadFile(path).then(
		res => console.log(res)
	)
})()
```

## thank you for visiting
* [`INSTAGRAM`](https://www.instagram.com/rayyreall/) 
* [`PAYPAL`](https://www.paypal.me/rayyreall) 
* [`SAWERIA`](https://saweria.co/RayyNihBOSS) 
