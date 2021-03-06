const data = {
	products: [
		{
			key: 'adobo',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679617/kutchinarapp/adobo_f7szti.jpg',
			prodAlt: 'Adobo',
			prodName: 'Chicken Adobo',
			prodType: 'main' ,
			prodPrice: '130.00' ,
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false,
			pick: 'yes'
		},
		{
			key: 'arozcaldo',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679620/kutchinarapp/arozcaldo_wijif1.jpg',
			prodAlt: 'Arozcaldo',
			prodName: 'Arozcaldo',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'bbq',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679620/kutchinarapp/bbq_mdoer3.jpg',
			prodAlt: 'BBQ',
			prodName: 'BBQ (3 sticks)',
			prodType: 'main' ,
			prodPrice: '90.00',
			prodQTY: 1 ,
			transPrice: 90,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'bistektagalog',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679620/kutchinarapp/bistektagalog_eysurc.jpg',
			prodAlt: 'BistekTagalog',
			prodName: 'Bistek Tagalog',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'bulalo',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679618/kutchinarapp/bulalo_ujp6hi.jpg',
			prodAlt: 'Bulalo',
			prodName: 'Bulalo',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'chickeninasal',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679621/kutchinarapp/chickeninasal_jpyfjf.jpg',
			prodAlt: 'ChickenInasal',
			prodName: 'Chicken Inasal',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'dinuguan',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679621/kutchinarapp/dinuguan_mxkqls.jpg',
			prodAlt: 'Dinuguan',
			prodName: 'Dinuguan',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'ginataanggulay',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679630/kutchinarapp/ginataanggulay_hpq9lf.jpg',
			prodAlt: 'GinataangGulay',
			prodName: 'Ginataang Gulay',
			prodType: 'main' ,
			prodPrice: '90.00',
			prodQTY: 1 ,
			transPrice: 90,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'liempoinihaw',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679622/kutchinarapp/inihawnaliempo_bkycbh.jpg',
			prodAlt: 'LiempoInihaw',
			prodName: 'Liempo Inihaw',
			prodType: 'main' ,
			prodPrice: '170.00',
			prodQTY: 1 ,
			transPrice: 170,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'kaldereta',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679629/kutchinarapp/kaldereta_hrjo1o.jpg',
			prodAlt: 'Kaldereta',
			prodName: 'Kaldereta',
			prodType: 'main' ,
			prodPrice: '180.00',
			prodQTY: 1 ,
			transPrice: 180,
			triggered: false,
			pick: 'yes'
		},
		{
			key: 'karekare',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679625/kutchinarapp/karekare_dz49b5.jpg',
			prodAlt: 'KareKare',
			prodName: 'Kare-kare',
			prodType: 'main' ,
			prodPrice: '180.00',
			prodQTY: 1 ,
			transPrice: 180,
			triggered: false,
			pick: 'yes'
		},
		{
			key: 'kilawin',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679625/kutchinarapp/kilawin_sqpkvr.jpg',
			prodAlt: 'Kilawin',
			prodName: 'Kilawin',
			prodType: 'main' ,
			prodPrice: '90.00',
			prodQTY: 1 ,
			transPrice: 90,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'krispipata',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679636/kutchinarapp/krispipata_m7xqth.jpg',
			prodAlt: 'KrispiPata',
			prodName: 'Krispi Pata',
			prodType: 'main' ,
			prodPrice: '170.00',
			prodQTY: 1 ,
			transPrice: 170,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'lechonkawali',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679633/kutchinarapp/lechonkawali_wanqbj.jpg',
			prodAlt: 'LechonKawali',
			prodName: 'Lechon Kawali',
			prodType: 'main' ,
			prodPrice: '210.00',
			prodQTY: 1 ,
			transPrice: 210,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'lumpia',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679628/kutchinarapp/lumpia_gdapxo.jpg',
			prodAlt: 'Lumpia',
			prodName: 'Lumpia (4 pcs)',
			prodType: 'siesta' ,
			prodPrice: '120.00',
			prodQTY: 1 ,
			transPrice: 120,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'palabok',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679627/kutchinarapp/palabok_lrjex5.jpg',
			prodAlt: 'Palabok',
			prodName: 'Palabok',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'pancitguisado',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679638/kutchinarapp/pancitguisado_rtyy6t.jpg',
			prodAlt: 'PancitGuisado',
			prodName: 'Pancit Guisado',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'sinigang',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679636/kutchinarapp/sinigang_z7ousy.jpg',
			prodAlt: 'Sinigang',
			prodName: 'Sinigang',
			prodType: 'main' ,
			prodPrice: '210.00',
			prodQTY: 1 ,
			transPrice: 210,
			triggered: false,
			pick: 'yes'
		},
		{
			key: 'sisig',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679629/kutchinarapp/sisig_bqmwt8.jpg',
			prodAlt: 'Sisig',
			prodName: 'Sisig',
			prodType: 'main' ,
			prodPrice: '210.00',
			prodQTY: 1 ,
			transPrice: 210,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'sopas',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679641/kutchinarapp/sopas_xzobqw.jpg',
			prodAlt: 'Sopas',
			prodName: 'Sopas',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false,
			pick: 'no'
		},
		{
			key: 'tinola',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633681483/kutchinarapp/tinola_yoec8r.jpg',
			prodAlt: 'Tinola',
			prodName: 'Tinola',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false,
			pick: 'no'
		}
	]
}

export default data