import { error } from '@sveltejs/kit';

import type { LoadEvent } from '@sveltejs/kit';
type Guide = { title: string; id: number; body: string };
export async function load({ fetch, params }: LoadEvent) {
	const id = params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const guide = (await res.json()) as Guide[];
	if (res.ok) {
		return {
			guide
		};
	}
	throw error(500, 'Could not fetch the guide');
}
