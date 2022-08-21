export interface Carbohydrates {
	total: number,
	sugar: number,
}
export interface Fat {
	total: number,
	saturated: number,
}

export interface Nutrition {
	fat: Fat,
	carbohydrates: Carbohydrates,
	protein: number,
	salt: number,
}

export interface Prices {
	price: number,
	shop: String,
	link: String,
	unit: String,
	amount: number,
}

export interface Data {
	id: String,
	name: String,
	brand: String,
	currency: String,
	prices: Prices[],
	nutrition: Nutrition,
}

export interface Pagination {
	offset: number,
	limit: number,
	total: number,
}

export interface ChocolateData {
	pagination: Pagination,
	data: Data[],
}
