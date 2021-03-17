import { IPokemon } from '../'

export interface IFindRandomProps {
	filters: Partial<IPokemon>;
	quantity: number
}
