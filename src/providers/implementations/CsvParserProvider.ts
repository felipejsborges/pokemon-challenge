import fs from 'fs'
import { ICsvParserProvider, ICSVFile } from '../interfaces/ICsvParserProvider'
import { IGenericObject } from '../../interfaces'

export class CsvParserProvider implements ICsvParserProvider {
	async turnCsvIntoJSArray({ csvFilePath }: ICSVFile) {
		const csvDataAsString = this.readFileFromPath(csvFilePath)

		const csvDataAsArray = this.convertDataToArrayOfRows(csvDataAsString)
		// each resulted row is a string

		const headers = this.getCsvHeaders(csvDataAsArray)

		let result: IGenericObject[] = []

		// map all rows starting at the 2nd line. The first one is the headers.
		for (let i = 1; i < csvDataAsArray.length - 1; i++) {
			let obj: IGenericObject = {}

			// if a comma is inside a column, it will be within a double quotes
			// Ex: "['Illuminate', 'Effect Spore', 'Rain Dish']"
			// So we have to check if the comma is inside double quotes
			// if true, keep as comma. If false, change to other separator
			const row = csvDataAsArray[i]

			let parsedRow = ''
			let isInsideDoubleQuotes = false

			for (let char of row) {
				if (char === '"' && !isInsideDoubleQuotes) {
					isInsideDoubleQuotes = true
				}
				else if (char === '"' && isInsideDoubleQuotes) isInsideDoubleQuotes = false
				if (char === ',' && !isInsideDoubleQuotes) char = '|||' // changing comma to other separator
				if (char !== '"') parsedRow += char
			}

			let properties = parsedRow.split("|||")

			// For each column, if the value contain comma, we have to change it to array
			// if it doesn't have comma, just store the value
			for (let header in headers) {
				if (properties[header].includes(",")) {
					obj[headers[header]] = properties[header]
						.replace(/[^a-z0-9","\s]/gmi, "")
						.split(",")
						.map(item => item.trim())
				}
				else obj[headers[header]] = properties[header]
			}

			// Add the object to the result array  
			result.push(obj)
		}

		console.log('imported', result.length, 'pokemons')
		return result
	}

	private readFileFromPath(csvFilePath: string): string {
		// private readFileFromPath(): string {
		const fileData = fs.readFileSync(csvFilePath, { encoding: 'utf8' })

		return fileData
	}

	private convertDataToArrayOfRows(data: string): string[] {
		const array = data.toString().split("\n")

		return array
	}

	private getCsvHeaders(csvDataAsArray: string[]) {
		const headers = csvDataAsArray[0].split(",")

		return headers
	}
}
