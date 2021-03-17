import { Router } from 'express'
import { PokemonsController } from '../controllers/PokemonsController'
import uploadHandler from '../middlewares/uploadHandler'

const routes = Router();
const pokemonsController = new PokemonsController()

routes.use('/graphql/pokemons/import', uploadHandler, pokemonsController.importPokemons)
routes.use('/graphql/pokemons/:pokemonId/avatar-upload', uploadHandler, pokemonsController.uploadPokemonAvatar)

export default routes
