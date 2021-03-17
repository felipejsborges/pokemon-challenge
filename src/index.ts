import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import * as database from './database'
import bodyParser from 'body-parser'
import routes from './routes'

const { API_PORT } = process.env

class Server {
	constructor() {
		this.start()
	}

	async start() {
		try {
			await database.connect()

			const schema = await buildSchema({
				resolvers: [__dirname + "/graphql/resolvers/**/*.resolver.{ts,js}"]
			});

			const app = express();
			app.use(bodyParser.json({ limit: '50mb' }))

			app.use('graphql', graphqlHTTP({
				schema,
			}));

			app.use(routes)

			const apolloServer = new ApolloServer({
				schema
			})
			apolloServer.applyMiddleware({ app });

			const PORT = API_PORT;
			app.listen({ port: PORT }, () =>
				console.log(`Server running on http://localhost:${PORT}${apolloServer.graphqlPath}`)
			);
		} catch (err) {
			console.error('Error when starting server: ', err)
		}
	}
}

new Server()
