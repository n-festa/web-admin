'use client'
import AdminLayout from "@layouts/layout";
import { Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { PokemonModel } from '@models/pokemon';
import PokemonForm from '@components/pokemon/PokemonForm';
import { notFound } from 'next/navigation'
import Edit, { Props } from '@pages/pokemons/[id]/edit/edit'

export type Props = {
  pokemon: PokemonModel;
}

const fetchPokemon = async (params: { id: string }):Promise<Props> =>{
	console idQuery = params.id

	if(!idQuery){
		return notFound();
	}

	const id = Number(idQuery)

}

export default  function PokemonEdit({ params }: { params: { id: string } }) {
	console.log(params);
	return (
		<AdminLayout>
			Pokemon Edit
			<Edit/>
		</AdminLayout>
	)
}
