type TGenres =
	| 'Action'
	| 'Adventure'
	| 'Animation'
	| 'Comedy'
	| 'Crime'
	| 'Documentary'
	| 'Drama'
	| 'Family'
	| 'Fantasy'
	| 'History'
	| 'Horror'
	| 'Music'
	| 'Mystery'
	| 'Romance'
	| 'Science Fiction'
	| 'TV Movie'
	| 'Thriller'
	| 'War'
	| 'Western'

interface IGenresData {
	id: number
	name: TGenres
}
