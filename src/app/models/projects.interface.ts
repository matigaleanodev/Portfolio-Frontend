interface Image {
    id: number;
    name: string;
    url: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    date: Date;
    repositoryUrl: string[];
    url: string;
    images: Image[];    
}