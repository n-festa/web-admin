import { GetServerSideProps, NextPage } from 'next';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import React from 'react';
import AdminLayout from "@layouts/layout";
import { PokemonModel } from '@models/pokemon';
import { newResource, Resource } from '@models/resource';
import { Pagination } from '@components/Pagination'
import { PokemonList } from '@components/Pokemon'
import { transformResponseWrapper, useSWRAxios } from '@hooks/useSWRAxios'

type Props = {
	pokemonResource: Resource<Pokemon>;
	page: number;
	perPage: number;
	sort: string;
	order: string;
}

const Pokemon: NextPage<Props> = (props) =>{
	const {
    	pokemonResource, page, perPage, sort, order,
  	} = props;

  	const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || '';

  	console.log(pokemonListURL);

	return(
		<AdminLayout>
            Pokemon
        </AdminLayout>
	)
}

export default Pokemon