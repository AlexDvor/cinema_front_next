import { IGalleryItem } from './Gallery.types'
import { SliderProps } from './slider.types'

export interface IHome {
	actors: IGalleryItem[]
	movies: IGalleryItem[]
	slider: SliderProps[]
}
