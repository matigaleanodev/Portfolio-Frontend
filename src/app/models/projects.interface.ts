interface Image {
    id: number;
    name: string;
    url: string;
}
interface Technologie{
    id: number;
    name: string;
    icon: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    repositoryUrl: string;
    technologies: Technologie[];
    images: Image[];    
}