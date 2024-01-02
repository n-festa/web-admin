import { Card } from 'react-bootstrap'
import PokemonForm from '@components/pokemon/PokemonForm'
import { PokemonModel } from '@models/pokemon'

type Props = {
	pokemon: Pokemon;
}

const Edit = (props:Props ) =>{
	//const {	pokemon} = props;
	console.log("pokemon")

	return(
		<Card>
      		<Card.Header>Edit Pokémon</Card.Header>
      		<Card.Body>
      		</Card.Body>
    	</Card>
	)
}

export default Edit