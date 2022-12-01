import { IGalleryItem } from './gallery.types'
import { SliderProps } from './slider.types'
import { ITvItem } from './tv.types'

export interface IHome {
	actors: IGalleryItem[]
	movies: IGalleryItem[]
	slider: SliderProps[]
	tvSerials: IGalleryItem[]
}
