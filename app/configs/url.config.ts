export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genres/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)

export const getOriginalBackdrop = (image: string) =>
	`https://image.tmdb.org/t/p/original${image}`

export const getPosterImage = (image: string) => {
	return `https://image.tmdb.org/t/p/w500${image}`
}
