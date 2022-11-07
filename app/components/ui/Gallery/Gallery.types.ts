export interface IGalleryItem {
	id: number
	name: string
	url: string
	link: string
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'horizontal' | 'vertical'
}
