import { IGalleryItem } from './gallery.types'
import { SliderProps } from './slider.types'

export interface IHome {
	actors: IGalleryItem[]
	movies: IGalleryItem[]
	slider: SliderProps[]
}
