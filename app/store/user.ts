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
			{
				adult: false,
				backdrop_path: '/53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
				belongs_to_collection: null,
				budget: 0,
				genres: [
					{
						id: 14,
						name: 'Fantasy',
					},
					{
						id: 28,
						name: 'Action',
					},
					{
						id: 12,
						name: 'Adventure',
					},
				],
				homepage: 'https://www.netflix.com/title/81245455/',
				id: 736526,
				imdb_id: 'tt11116912',
				original_language: 'no',
				original_title: 'Troll',
				overview:
					'Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?',
				popularity: 2159.342,
				poster_path: '/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
				production_companies: [
					{
						id: 108394,
						logo_path: '/d4k0i3TpLTxiJ4ZtOYftE5vL91Z.png',
						name: 'Motion Blur',
						origin_country: 'NO',
					},
				],
				production_countries: [
					{
						iso_3166_1: 'NO',
						name: 'Norway',
					},
				],
				release_date: '2022-12-01',
				revenue: 0,
				runtime: 104,
				spoken_languages: [
					{
						english_name: 'English',
						iso_639_1: 'en',
						name: 'English',
					},
					{
						english_name: 'Norwegian',
						iso_639_1: 'no',
						name: 'Norsk',
					},
				],
				status: 'Released',
				tagline: 'Mountains will move.',
				title: 'Troll',
				video: false,
				vote_average: 6.904,
				vote_count: 418,
				images: {
					backdrops: [],
					logos: [],
					posters: [],
				},
			},
		],
		tv: [],
	},
}

export const staticData = {
	authUsers: 25,
	guests: 40,
	users: [
		{
			_id: '1',
			editUrl: 'test',
			items: ['test@gmail.com', '29/01/2022'],
		},
		{
			_id: '2',
			editUrl: 'test',
			items: ['test2@gmail.com', '29/12/2022'],
		},
		{
			_id: '3',
			editUrl: 'tests',
			items: ['tsest2@gmail.com', '29/12/2022'],
		},
		{
			_id: '4',
			editUrl: 'testsd',
			items: ['tsestd2@gmail.com', '29/12/2022'],
		},
	],
}
