export interface IGalleryItem {
	id: number
	posterPath: string
	backdropPath?: string
	title: string
	url: string
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'horizontal' | 'vertical'
}
