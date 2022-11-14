import { IActor } from './actor.types'
import { IMovie } from './movie.types'

export interface IGallery {
	items: IMovie[] | IActor[]
}
export interface IGalleryItemProps {
	item: IGallery
	variant: 'horizontal' | 'vertical'
}
