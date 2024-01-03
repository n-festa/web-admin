import { Dropdown, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@models/pokemon';
import THSort from '@components/tableSort/THSort';
import PokemonTypeLabel from '@components/pokemon/PokemonTypeLabel'

type Props = {
  	pokemons: Pokemon[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>

export default function PokemonList(props: Props) {
	const { pokemons, setSort, setOrder } = props;

	return (
		<Table responsive bordered hover>
			<thead className="bg-light">
				<tr>
					<th><THSort name="id" setSort={setSort} setOrder={setOrder}>#</THSort></th>
					<th aria-label="Photo" />
					<th><THSort name="name"></THSort></th>
					<th>Type</th>
					<th className="text-center"> Egg group</th>
					<th className="text-end"><THSort name="hp" setSort={setSort} setOrder={setOrder}>Hp</THSort></th>
			        <th className="text-end"><THSort name="attack" setSort={setSort} setOrder={setOrder}>Atk</THSort></th>
			        <th className="text-end"><THSort name="defense" setSort={setSort} setOrder={setOrder}>Def</THSort></th>
			        <th className="text-end"><THSort name="special_attack" setSort={setSort} setOrder={setOrder}>SpA</THSort></th>
			        <th className="text-end"><THSort name="special_defense" setSort={setSort} setOrder={setOrder}>SpD</THSort></th>
			        <th className="text-end"><THSort name="speed" setSort={setSort} setOrder={setOrder}>Spd</THSort></th>
          			<th className="text-end"><THSort name="total" setSort={setSort} setOrder={setOrder}>Total</THSort></th>
					<th aria-label="Action" />
				</tr>
			</thead>
			<tbody>
			{pokemons.map((pokemon) =>(
				<tr key={pokemon.id}>
					<td>{pokemon.id}</td>
					<td></td>
					<td>{pokemon.name}</td>
					<td className="text-center" style={{ whiteSpace: 'pre' }}>{pokemon.egg_groups.join('\n')}</td>
					<td className="text-end">{pokemon.hp}</td>
		            <td className="text-end">{pokemon.attack}</td>
		            <td className="text-end">{pokemon.defense}</td>
		            <td className="text-end">{pokemon.special_attack}</td>
		            <td className="text-end">{pokemon.special_defense}</td>
		            <td className="text-end">{pokemon.speed}</td>
		            <td className="text-end">{pokemon.total}</td>
		            <td> Action Pokemon List</td>
				</tr>
			))}
			</tbody>
		</Table>
	)
}













