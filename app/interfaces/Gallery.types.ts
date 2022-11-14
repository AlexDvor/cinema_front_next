export interface IGalleryItem {
	id: number
	posterPath: string
	title: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGallery {
	items: IGalleryItem[]
}
export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'horizontal' | 'vertical'
}
