export class Customer {
	
	constructor(
		public id: number,
		public select: boolean,
		public firstName: string, 
		public lastName: string,
		public address: string, 
		public city: string,
		public state: string,
		public dateOfBirth: string,
		public gender: string
	) {}

}