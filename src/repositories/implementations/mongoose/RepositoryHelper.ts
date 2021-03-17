import { IGenericObject } from '../../../interfaces'

export class RepositoryHelper {
	constructor() { }

	handleArrayInFilter(filters: IGenericObject): IGenericObject {
		let parsedFilters = filters

		Object.keys(filters).forEach(key => {
			if (Array.isArray(filters[key])) {
				parsedFilters[key] = { $all: filters[key] }
			} else {
				parsedFilters[key] = filters[key]
			}
		})

		return parsedFilters
	}
}
