import { IGalleryItem } from './Gallery.types'

export interface SliderProps
	extends Pick<IGalleryItem, 'id' | 'posterPath' | 'title'> {}
