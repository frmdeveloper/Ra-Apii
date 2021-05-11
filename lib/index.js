const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { spawn, exec } = require("child_process")
const print = (message) => {
	return console.log(message)
}

async function ManggaToon(judul) {
	try {
		const link = await axios.get(`https://mangatoon.mobi/id/search?word=${judul}`) 
		const c = cheerio.load(link.data)
		let id = c('#page-content').find('div.search-page > div > div.comics-result > div.recommended-wrap > div > div > a').attr('href') || 'undefined'
		if(id === 'undefined') {
			const link2 = await axios.get(`https://mangatoon.mobi/en/search?word=${judul}`)
			const C = cheerio.load(link2.data)
			let id2 = C('#page-content').find('div.search-page > div > div.comics-result > div.recommended-wrap > div > div:nth-child(1) > a').attr('href')
			const data = await axios.get(`https://mangatoon.mobi${id2}`)
			const $ = cheerio.load(data.data)
			var judul = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-title-bg > span').text().trim()
			var genre = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-tags-info > span').text().trim()
			var author = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-author-name > span').text().trim()
			var thumb = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-img > img.big-img').attr('src');
			var LinkKe = $('#page-content').find('div.detail-wrap > div.detail-interact > a').attr('href')
			var Link = `https://mangatoon.mobi${LinkKe}`
			let Author = author.replace('Nama Author: ', '');
			let hasil = {
				judul, thumb, genre, Author, Link
			}
			return hasil
		} else {
		const data = await axios.get(`https://mangatoon.mobi${id}`)
		const $ = cheerio.load(data.data)
		var judul = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-title-bg > span').text().trim()
		var genre = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-tags-info > span').text().trim()
		var author = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-author-name > span').text().trim()
		var thumb = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-img > img.big-img').attr('src');
		var LinkKe = $('#page-content').find('div.detail-wrap > div.detail-interact > a').attr('href')
		var Link = `https://mangatoon.mobi${LinkKe}`
		let Author = author.replace('Nama Author: ', '');
		let hasil = {
			judul, thumb, genre, Author, Link
		}
		return hasil
	}
		} catch (err) {
			return `Not Found 404`
		}
}
async function emoji(emoticon) {
	const emojii = encodeURI(`${emoticon}`)
	const link = await axios.get(`https://emojipedia.org/${emojii}/`)
	const $ = cheerio.load(link.data)
	var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	const result = {
		apple: apple.replace('120', '240'),
		google: google.replace('120', '240'),
		samsung: samsung.replace('120', '240'),
		microsoft: microsoft.replace('120', '240'),
		whatsapp: whatsapp.replace('120', '240'),
		twitter: twitter.replace('120', '240'),
		facebook: facebook.replace('120', '240'),
		jooxPixel: jooxpixel.replace('120', '240'),
		openemoji: openmoji.replace('120', '240'),
		emojidex: emojidex.replace('120', '240'),
		messanger: messager.replace('120', '240'),
		LG: LG.replace('120', '240'),
		HTC: HTC.replace('120', '240'),
		mozilla: mozilla.replace('120', '240'),
		softbank: softbank.replace('120', '240'),
		docomo: docomo.replace('120', '240'),
		KDDI: KDDI.replace('120', '240')
	}
	return result
}

async function RandomCerpen() {
	try{
	const link = await axios.get(`http://cerpenmu.com/`)
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)

	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	const data = {
		status: 200,
		author: 'RA BOT',
		result: {
			Judul: judul,
			Penulis: karangan,
			sumber: Acak,
			cerita: cerita
		}
	}
	return data
} catch (err) {
	const res404 = {
		status: 500,
		author: 'RA BOT',
		Pesan: 'Udah Ga work?:/ cp: 082149344210'
	}
	return res404
}
}
async function stickerSearch(querry) {
	const link = await axios.get(`https://getstickerpack.com/stickers?query=${querry}`);
	const $ = cheerio.load(link.data)
	let sticker1 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > img').attr('src'),
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > span.title').text().trim(),
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > span.username').text().trim()
	}
	let sticker2 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > span.username').text().trim() 
	}
	let sticker3 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > span.username').text().trim() 
	}
	let sticker4 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > span.username').text().trim() 
	}
	let sticker5 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > span.username').text().trim() 
	}
	let sticker6 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > span.username').text().trim() 
	}
	let sticker7 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > span.username').text().trim() 
	}
	let sticker8 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > span.username').text().trim() 
	}
	let sticker9 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > span.username').text().trim() 
	}
	let sticker10 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > span.username').text().trim() 
	}
	let sticker11 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > span.username').text().trim() 
	}
	let sticker12 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > span.username').text().trim() 
	}
	let stickerlop =  [
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > img').attr('src')
	]
let data = {
		sticker: stickerlop, sticker1, sticker2, sticker3, sticker4, sticker5, sticker6, sticker7, sticker8, sticker9, sticker10, sticker11, sticker12
	}
	return data
}

async function RamalJadian(tanggal, bulan, tahun) {
	if(isNaN(tanggal) && isNaN(bulan) && isNaN(tahun)) return `Tanggal bulan tahun harus berupa angka`
	const link = await axios.get(`https://www.primbon.com/tanggal_jadian_pernikahan.php?tgl=${tanggal}&bln=${bulan}&thn=${tahun}&proses=+Submit%21+`)
	const $ = cheerio.load(link.data)
	let tanggall = $('#body').text().trim()
	let a = tanggall.replace('MAKNA TANGGAL JADIAN, PERNIKAHAN', '').replace('Karakteristik:', '\nKarakteristik : ').replace('< Hitung Kembali', '')
	return a
}
function Pantun() {
	const pantun = fs.readFileSync('./database/pantun.json')
	const data = JSON.parse(pantun)
	const acak = data[Math.floor(Math.random() * (data.length))]
	return acak
}
function trutdare(querry) {
	const trdr = fs.readFileSync('./database/truthdare.json') // tempat simpen file lu
	const result = JSON.parse(trdr)
	if(querry === 'truth id') {
		let res = result.Truth.id[Math.floor(Math.random() * result.Truth.id.length)]
	return res
	} else if (querry === 'truth eng') {
		let res = result.Truth.eng[Math.floor(Math.random() * result.Truth.eng.length)]
		return res
	} else if(querry === 'dare id') {
		let res = result.Dare.id[Math.floor(Math.random() * result.Dare.id.length)]
		return res
	} else if(querry === 'dare eng') {
		let res = result.Dare.eng[Math.floor(Math.random() * result.Dare.eng.length)]
		return res
	} else {
		return `Querry tidak terdaftar dimenu harap masukkan dengan benar.\n\ncara pakai :\n1. trutdare('truth id')\n2. trutdare('truth eng')\n3. trutdare('dare id')\n4. trutdare('dare eng')`
	}
}
async function SearchFilm(querry) {
	const link =  await axios.get(`https://123movies.mom/search/?keyword=${querry}`)
	const $ = cheerio.load(link.data)
	let hasil = []
	let result = []
	$('#main').each(function (a, b) {
			 $(b).find('div').each(function (c, d) {
				let url = $(d).find('a').attr('href')
				let img = $(d).find('a > img').attr('src')
				let judul = $(d).find('a > img').attr('alt')
				let data = {
					judul: judul,
					thumb: img,
					url: url
				}
				result.push(data)
			})
			for (let i = 29; i < result.length; i++) {
			hasil.push(result[i])
			}
	})
	return hasil
}
function FaktaUnik() {
	const fakta = fs.readFileSync('./database/faktaunik.json')
	const data = JSON.parse(fakta)
	const acak = data[Math.floor(Math.random() * (data.length))]
	return acak
}
async function Liriklagu(querry) {
	try{
	const link = await axios.get(`https://www.musixmatch.com/search/${querry.toLocaleLowerCase()}`)
	const c = cheerio.load(link.data)
	let a = c('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href');
	let thumb = c('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-picture > img').attr('srcset')
	let Link = await axios.get(`https://www.musixmatch.com${a}`)
	const $ = cheerio.load(Link.data)
	let lirik = $('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > div > p > span').text().trim()
	let judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim()
	let penyanyi = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h2 > span > a').text().trim()
	var result = {
		author: 'Ra-bot',
		status: Link.status,
		result: {
			judul: judul.replace('Lyrics', ''),
			penyanyi: penyanyi,
			Sticker: thumb.split(' 320w')[0],
			lirik: lirik
		}
	}
	return result
} catch (err) {
	var notFound = {
		author: 'Ra-bot',
		status: Link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFound
}
}
async function infoFilm123(url) {
	try{
	const link =  await axios.get(`${url}`)
	const $ = cheerio.load(link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h1').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1) > a').text().trim()
	let aktor = []
	$('div.mvi-content').each(function (a, b) {
		let res = $(b).find('div.mvic-desc > div.mvic-info > div.mvici-left > p > a').text().trim()
		aktor.push(res)
	})
	let country = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(4) > a').attr('title')
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > strong').text().trim()
	let kualitas = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let publish = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(4) > a').text().trim()
	let tag = []
	$('#mv-keywords').each(function (c, d) {
		let res = $(d).find('a').text().trim()
		tag.push(res)
	})
	let thumb = $('#mv-info').find('div.player-holder > a').attr('style')
	let video = $('#mv-info').find('div.player-holder > a').attr('href')
	var result = {
		judul: judul,
		thumbail: thumb.replace('background-image: url', '').replace('(', '').replace(')', ''),
		genre: genre,
		video: video,
		negara: country,
		durasi: durasi,
		quality: kualitas,
		rilis: publish,
		aktor: aktor,
		hastag: tag
	}
	return result
} catch (err) {
	return `Judul tidak ditemukan`
}
} 

async function Otakudesu(querry) {
	try {
	const link = await axios.get(`https://otakudesu.moe/?s=${querry}&post_type=anime`)
	const c = cheerio.load(link.data)
	let id = c('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
	const Link = await axios.get(id)
	const $ = cheerio.load(Link.data)
	let judul = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().trim()
	let judulJpn = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().trim()
	let score = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().trim()
	let Produser = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().trim()
	let Type = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().trim()
	let Status = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().trim()
	let TotalEpisode = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().trim()
	let durasi = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().trim()
	let Rilis = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().trim()
	let studio = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().trim()
	let genre = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(11) > span').text().trim()
	let thumb = $('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
	let Sinopsis = $('#venkonten > div.venser > div.fotoanime > div.sinopc').find('p').text().trim()
	let LinkDown = $('#venkonten').find('div.venser > div:nth-child(8) > ul > li:nth-child(4) > span:nth-child(1) > a').attr('href')
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			japan: judulJpn,
			rating: score,
			produser: Produser,
			type: Type,
			status: Status,
			episode: TotalEpisode,
			durasi: durasi,
			rilis: Rilis,
			studio: studio,
			genre: genre,
			LinkDown: LinkDown,
			sinopsis: Sinopsis
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function wikipedia(querry) {
	try {
	const link =  await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
	const $ = cheerio.load(link.data)
	let judul = $('#firstHeading').text().trim()
	let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
	let isi = []
	$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
		let penjelasan = $(Ra).find('p').text().trim()
		isi.push(penjelasan)
	})
	for(let i of isi) {
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			judul: judul,
			thumb: 'https:'+thumb,
			isi: i
		}
	}
	return data
}
	} catch (err) {
		var notFond = {
			author: 'Ra bot',
			status: link.status,
			Pesan: 'ERROR HUBUNGI OWNER 082149344210'
		}
		return notFond
	}
}
async function corona(negara) {
	try{
	const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${negara}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			kasus: kasus,
			meninggal: mati,
			sembuh: sembuh
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function cuaca(wilayah) {
	try {
	function Cuaca(daerah) {
		const listcuaca = fs.readFileSync('./database/cuaca.json')
		const data = JSON.parse(listcuaca)
		if(daerah.toLowerCase() === 'aceh'){
			return data[0]
		} else if (daerah.toLowerCase() === 'bali') {
			return data[1]
		} else if (daerah.toLowerCase() === 'bangka belitung') {
			return data[2]
		} else if (daerah.toLowerCase() === 'banten') {
			return data[3]
		} else if (daerah.toLowerCase() === 'yogyakarta' || daerah.toLowerCase() === 'jogja') {
			return data[4]
		} else if (daerah.toLowerCase() === 'jakarta')  {
			return data[5]
		} else if (daerah.toLowerCase() === 'gorontalo') {
			return data[6]
		} else if (daerah.toLowerCase() === 'jambi') {
			return data[7]
		} else if (daerah.toLowerCase() === 'jawa barat') {
			return data[8]
		} else if (daerah.toLowerCase() === 'jawa tengah') {
			return data[9]
		} else if (daerah.toLowerCase() === 'jawa timur') {
			return data[10]
		} else if (daerah.toLowerCase() === 'kalimantan barat') {
			return data[11]
		} else if (daerah.toLowerCase() === 'kalimantan selatan') {
			return data[12]
		} else if (daerah.toLowerCase() === 'kalimantan tengah') {
			return data[13]
		} else if (daerah.toLowerCase() === 'kalimantan timur') {
			return data[14]
		} else if (daerah.toLowerCase() === 'kalimantan utara') {
			return data[15]
		} else if (daerah.toLowerCase() === 'riau') {
			return data[16]
		} else if (daerah.toLowerCase() === 'lampung') {
			return data[17]
		} else if (daerah.toLowerCase() === 'maluku') {
			return data[18]
		} else if (daerah.toLowerCase() === 'maluku utara') {
			return data[19]
		} else if (daerah.toLowerCase() === 'ntb') {
			return data[20]
		} else if (daerah.toLowerCase() === 'ntt') {
			return data[21]
		} else if (daerah.toLowerCase() === 'papua') {
			return data[22]
		} else if (daerah.toLowerCase() === 'papua barat') {
			return data[23]
		} else if (daerah.toLowerCase() === 'riau') {
			return data[24]
		} else if (daerah.toLowerCase() === 'sulawesi barat') {
			return data[25]
		} else if (daerah.toLowerCase() === 'sulawesi selatan') {
			return data[26]
		} else if (daerah.toLowerCase() === 'sulawesi tengah') {
			return data[27]
		} else if (daerah.toLowerCase() === 'sulawesi tenggara') {
			return data[28]
		} else if (daerah.toLowerCase() === 'sulawesi utara') {
			return data[29]
		} else if (daerah.toLowerCase() === 'sumatra barat') {
			return data[30]
		} else if (daerah.toLowerCase() === 'sumatra selatan') {
			return data[31]
		} else if (daerah.toLowerCase() === 'sumatra utara') {
			return data[32]
		} else if (daerah.toLowerCase() === 'indonesia') {
			return data[33]
		} else {
			return `undefined`
		}
	}
	const link = await axios.get(`https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg${Cuaca(wilayah)}`)
	const $ = cheerio.load(link.data)
	let hasil = []
	$('#TabPaneCuaca2 > div.table-responsive > table > tbody').each(function (a, b) {
		$(b).find('tr').each(function (c, d) {
			let nama = $(d).find('td > a').text().trim()
			let cuaca = $(d).find('td > span').text().trim()
			let suhu = $(d).find('td:nth-child(6)').text().trim()
			let kelembapan = $(d).find('td:nth-child(7)').text().trim()
			let data = {
				daerah: nama,
				cuaca: cuaca,
				suhu: suhu + ' °C',
				kelembapan: kelembapan + '%'
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function FilmApik23(querry) {
	try{
	const link = await axios.get(`https://filmapik.website/?s=${querry}`);
	const c = cheerio.load(link.data)
	let Id = []
	c('#main > div > div.main-content.main-category > div.movies-list-wrap.mlw-category > div.movies-list.movies-list-full ').each(function (a, b) {
		c(b).find('div').each(function (e, d) {
			let id = c(d).find('a').attr('href')
			Id.push(id)
		})
	})
	let Random = Id[Math.floor(Math.random() * (Id.length))]
	const Link = await axios.get(Random)
	const $ = cheerio.load(Link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h3').text().trim()
	let view = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1)').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(2)').text().trim()
	let studio = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(3) > span').text().trim()
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > span').text().trim()
	let TvStatus = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let network = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > div > p:nth-child(5) > a').text().trim()
	let thumb = $('#mv-info').find('div.mvi-content > div.thumb.mvic-thumb > img').attr('src')
	let BintangFilm = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > p > span').text().trim()
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			Link: Random,
			penonton: view.replace('Views: ', ''),
			durasi: durasi,
			genre: genre.replace('Genre: ', ''),
			studio: studio,
			TV: TvStatus,
			network: network,
			bintangFilm: BintangFilm
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function Gempa() {
	try{
	const link = await axios.get(`https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg`)
	const $ = cheerio.load(link.data)
	let hasil = []
	$('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody').each(function (a, b) {
	    $(b).find('tr').each(function (c, d) {
			let tanggal = $(d).find('td:nth-child(2)').text().trim()
			let koordinat = $(d).find('td:nth-child(3)').text().trim()
			let magnitudo = $(d).find('td:nth-child(4)').text().trim()
			let kedalaman = $(d).find('td:nth-child(5)').text().trim()
			let skala = $(d).find('td:nth-child(6) > a').text().trim()
			const data = {
				author: 'Ra bot',
				status: link.status,
				result: {
					tanggal: tanggal,
					koordinat: koordinat,
					getaran: magnitudo,
					kedalaman: kedalaman,
					skala: skala
				}
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function cnn() {
	try {
	const link = await axios.get('https://www.cnnindonesia.com/')
	const $ = cheerio.load(link.data)
	let hasil = []
	$('#content > div > div.l_content > div.box.feed.berita_terbaru_lst > div.list.media_rows.middle').each(function (a, b) {
		$(b).find('article').each(function (c, d) {
			let judul = $(d).find('a > span.box_text > h2').text().trim() || '-' 
			let tema = $(d).find('a > span.box_text > span.kanal').text().trim() || '-'
			let publik = $(d).find('a > span.box_text > span.date').text().trim() || '-'
			let thumb = $(d).find('a > span.ratiobox.ratio_16_9.box_img > span > img').attr('src') || '-'
			let url = $(d).find('a').attr('href') || '-'
			const data = {
				author: 'Ra bot',
				status: link.status,
				result: {
					judul: judul,
					tema: tema,
					rilis: publik,
					thumb: thumb,
					url: url
				}
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}

module.exports.RandomCerpen = RandomCerpen
module.exports.emoji = emoji
module.exports.stickerSearch = stickerSearch
module.exports.ManggaToon = ManggaToon
module.exports.RamalJadian = RamalJadian
module.exports.Pantun = Pantun
module.exports.trutdare = trutdare
module.exports.SearchFilm = SearchFilm
module.exports.infoFilm123 = infoFilm123
module.exports.FaktaUnik = FaktaUnik
module.exports.Liriklagu = Liriklagu
module.exports.Otakudesu = Otakudesu
module.exports.wikipedia = wikipedia
module.exports.corona =  corona
module.exports.cuaca = cuaca
module.exports.FilmApik23 = FilmApik23
module.exports.Gempa = Gempa
module.exports.cnn = cnn