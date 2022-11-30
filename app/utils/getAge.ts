export const getAge = () => {
	const data = '2002-09-27'
	const res = data.split(' ')
	console.log('🚀 - res', res)

	const now = new Date() //Current date
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) // Current date time without time
	const dob = new Date(1988, 1, 1) //Br
	const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) // br in current year
	let age

	age = today.getFullYear() - dob.getFullYear()

	if (today < dobnow) {
		age = age - 1
	}

	return age
}
