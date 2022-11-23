export const parseReleaseData = (
	date: string,
	initialIndex: number = 0,
	delay: number = 4
) => date.slice(initialIndex, delay)
