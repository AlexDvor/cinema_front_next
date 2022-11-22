import { IGalleryItem } from './gallery.types'

export interface SliderProps
	extends Pick<IGalleryItem, 'id' | 'posterPath' | 'title'> {}
