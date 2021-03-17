import { IGenericObject } from '../../interfaces'

export interface ICSVFile {
	csvFilePath: string;
}

export interface ICsvParserProvider {
	turnCsvIntoJSArray(data: ICSVFile): Promise<IGenericObject>
}
