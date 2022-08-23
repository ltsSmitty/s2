import { error } from '@sveltejs/kit';

import type { LoadEvent } from '@sveltejs/kit';
export type Guide = { title: string; id: number };
export async function load({ fetch }: LoadEvent) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const guides = (await res.json()) as Guide[];
	if (res.ok) {
		return {
			guides
		};
	}
	throw error(500, 'Could not fetch the guides');
}
