export class Product {

	constructor(public sku: string,
				public name: string,
				public description: string,
				public unitPrice: number,
				public imageUrl: number,
				public active: boolean,
				public unitsInStock: number,
				public dateCreated: Date,
				public lastUpdated: Date
	) {
	
	

	}
}
