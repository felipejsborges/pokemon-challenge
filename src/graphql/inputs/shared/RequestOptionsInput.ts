import { InputType, Field, Int } from 'type-graphql';
import { Min } from 'class-validator'
import { IRequestOptions } from '../../../interfaces';

@InputType()
export class RequestOptionsInput implements IRequestOptions {
	@Field(() => Int, { nullable: true })
	@Min(0)
	page: number;

	@Field(() => Int, { nullable: true })
	@Min(1)
	perPage: number;
}
