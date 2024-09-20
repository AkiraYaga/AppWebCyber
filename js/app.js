// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Order',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		  {
			path: '/categorias/',
			url: 'categorias.html',
			name: 'categorias',
			  },
			  {
				path: '/ram/',
				url: 'ram.html',
				name: 'ram',
				  },
				  {
					path: '/compraproducto/',
					url: 'compraproducto.html',
					name: 'compraproducto',
					  },
					  {
						path: '/sobrenosotros/',
						url: 'sobrenosotros.html',
						name: 'sobrenosotros',
						  },
						  {
							path: '/comprahecha/',
							url: 'comprahecha.html',
							name: 'comprahecha',
							  },
							  {
								path: '/carrito/',
								url: 'carrito.html',
								name: 'carrito',
								  },
								  {
									path: '/pago/',
									url: 'pago.html',
									name: 'pago',
									  },
	],
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});
