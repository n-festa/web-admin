'use client'
import AdminLayout from "@layouts/layout";
import {Card } from 'react-bootstrap';
import PokemonForm from '@components/pokemon/PokemonForm';
import { useRouter } from 'next/router'

export default function PokemonCreate() {
	const router = useRouter();
	return (
		<AdminLayout>
			<button type="button" onClick={() => router.back()}>
     	 		Click here to go back
    		</button>
			<Card>
				<Card.Header>Add new Pokemon</Card.Header>
				<Card.Body>
					<PokemonForm />
				</Card.Body>
			</Card>
		</AdminLayout>
	)
}
