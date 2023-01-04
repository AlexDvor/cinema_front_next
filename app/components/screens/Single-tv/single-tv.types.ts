import { IGalleryItem } from '@/interfaces/gallery.types'
import { IDescriptionTvItem } from '@/interfaces/tv.types'

export interface ISingleTvProps {
	tv: IDescriptionTvItem
	similarTv: IGalleryItem[]
	cast: IGalleryItem[]
}
