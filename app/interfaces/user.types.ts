export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
	favorite: {
		movies: []
		actors: []
	}
}
