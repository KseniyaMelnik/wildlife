export interface IAnimal {
    id: string,
    image: string,
    description: string,
    body: string,
    title: string
}

export interface IPost {
    id: string,
    title: string,
    body: string
}

export interface IUser {
    _id: string,
    email: string,
    username: string,
    image: string,
    animals: IAnimal[]
}