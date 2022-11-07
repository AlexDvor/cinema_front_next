import { StaticImageData } from 'next/image'

export interface IGalleryItem {
	id: number
	name: string
	url: StaticImageData | string
	link: string
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'horizontal' | 'vertical'
}
