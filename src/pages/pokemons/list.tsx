'use client'

import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { newResource, Resource } from '@models/resource'
import { Pokemon } from '@models/pokemon'
import useSWRAxios, { transformResponseWrapper } from '@hooks/useSWRAxios'
import Pagination from '@components/pagination/Pagination'
import PokemonList from '@components/pokemon/PokemonList'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AdminLayout from "@layouts/layout";
import { useEffect } from 'react';

export type Props = {
  props: {
    pokemonResource: Resource<Pokemon>;
    page: number;
    perPage: number;
    sort: string;
    order: string;
  };
}

export default function List(props: Props) {
        console.log(props);

    return (
        <AdminLayout>
            <Card>
                <Card.Header>Pokémon</Card.Header>
                <Card.Body>
                    <div className="mb-3 text-end">
                      <Button variant="success" onClick={() => router.push('/pokemons/create')}>
                        <FontAwesomeIcon icon={faPlus} fixedWidth />
                        Add new
                      </Button>
                    </div>
                    
                  </Card.Body>
            </Card>
        </AdminLayout>
    )
}
