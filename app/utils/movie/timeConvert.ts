export function timeConvert(minutes: number) {
	var num = minutes
	var hours = num / 60
	var rhours = Math.floor(hours)
	var minutes = (hours - rhours) * 60
	var rminutes = Math.round(minutes)

	// return (
	// 	num + ' minutes = ' + rhours + ' hour(s) and ' + rminutes + ' minute(s).'
	// )
	return `${rhours}:${rminutes}`
}
