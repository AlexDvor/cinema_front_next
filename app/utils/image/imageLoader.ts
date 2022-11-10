import { ImageLoaderProps } from 'next/image'

export const myLoader = ({ src }: ImageLoaderProps) => {
	return `https://image.tmdb.org/t/p/w500${src}`
}
