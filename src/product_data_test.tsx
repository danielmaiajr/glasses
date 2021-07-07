interface ProductType {
	id: number;
	images: string[];
	colors: string[];
	price: number;
	descountPrice: number;
	debitPrice: number;
	inventory: number;
}
export interface ProductsType {
	product_id: string;
	brand: string;
	model: string;
	name: string;
	description: string;
	measures: string;
	size: string;
	products: ProductType[];
}

export const data: ProductsType[] = [
	{
		product_id: '9752183',
		brand: 'HUBO BOSS',
		model: 'HG 0184',
		name: 'Óculos de Grau Hugo Boss Hugo',
		description:
			'BOSS Eyewear é a expressão máxima da estética elegante e do design inovador: novas combinações de materiais de alta tecnologia e detalhes elaborados sublinham o caráter sofisticado de cada coleção. A coleção variada de óculos de sol e óculos de grau combina de forma inteligente, qualidade e funcionalidade, garantindo um ajuste confortável.',
		measures: 'M',
		size: '52-16-135',
		products: [
			{
				id: 1,
				images: [
					'https://image-tool.eotica.com.br/?d=eo&w={width}&q=75&f=catalog/product/h/u/hugo_hg_0184___tartaruga___0t4_52_0.jpg',
					'https://image-tool.eotica.com.br/?d=eo&w={width}&q=75&f=catalog/product/h/u/hugo_hg_0184___tartaruga___0t4_52_1.jpg'
				],
				colors: [ 'Tartaruga - 0T4/52' ],
				price: 1000,
				descountPrice: 900,
				debitPrice: 800,
				inventory: 10
			}
		]
	}
];
