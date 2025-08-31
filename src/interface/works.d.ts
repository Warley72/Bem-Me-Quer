export interface WorksProps {
    title: string;
    text: string;
    highlight: string
    listServices: ListServicesProps[]
}

export interface ListServicesProps {
    id: number;
    title: string;
    text: string;
    image: string
}
