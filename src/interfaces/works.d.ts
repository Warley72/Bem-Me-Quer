export interface Iworks {
    listServices: IlistServices[]
}

export interface IlistServices {
    id: number;
    title: string;
    text: string;
    image: string;
    fone: number;
}
