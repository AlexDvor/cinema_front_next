export const user = {
	isAuthUser: true,
	isAdmin: true,
	name: 'Alex',
	email: 'test@gmail.com',
	favorite: {
		actors: [],
		movies: [
			{
				adult: false,
				backdrop_path: '/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg',
				homepage: 'https://www.avatar.com/movies/avatar',
				genres: [
					{ id: 28, name: 'Action' },
					{ id: 12, name: 'Adventure' },
					{ id: 14, name: 'Fantasy' },
					{ id: 878, name: 'Science Fiction' },
				],
				id: 19995,
				imdb_id: 'tt0499549',
				original_language: 'en',
				original_title: 'Avatar',
				overview:
					'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
				popularity: 760.013,
				poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
				release_date: '2009-12-15',
				revenue: 2920357254,
				runtime: 162,
				status: 'Released',
				tagline: 'Enter the world of Pandora.',
				title: 'Avatar',
				video: false,
				vote_average: 7.533,
				vote_count: 26693,
			},
		],
		tv: [],
	},
}

export const staticData = {
	quantityUsers: 15,
	users: [
		{
			_id: '1',
			editUrl: 'test',
			items: ['fsdfsdf'],
		},
		{
			_id: '2',
			editUrl: 'test',
			items: [],
		},
	],
}
