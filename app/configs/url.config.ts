export const getMovieUrl = (id: string | number): string => `/movie/${id}`
export const getGenreUrl = (id: string | number): string => `/genres/${id}`
export const getActorUrl = (id: string | number): string => `/actor/${id}`
export const getTvUrl = (id: string | number): string => `/tv/${id}`

// export const getAdminUrl = (url: string) => `/manage/${url}`
// export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)

export const getYouTubeUrl = (idTrailer: string | number): string =>
	`https://www.youtube.com/watch?v=${idTrailer}`

export const getOriginalBackdrop = (image: string | number) =>
	`https://image.tmdb.org/t/p/original${image}`

export const getPosterImage = (image: string | number) => {
	return `https://image.tmdb.org/t/p/w500${image}`
}
