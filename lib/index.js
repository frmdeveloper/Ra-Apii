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
module.exports.RandomCerpen = RandomCerpen
module.exports.emoji = emoji
module.exports.stickerSearch = stickerSearch
module.exports.ManggaToon = ManggaToon
module.exports.RamalJadian = RamalJadian
module.exports.Pantun = Pantun
module.exports.trutdare = trutdare
module.exports.SearchFilm = SearchFilm
module.exports.infoFilm123 = infoFilm123
