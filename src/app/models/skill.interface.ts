export interface SoftSkill {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface HardSkill {
    id: number;
    name: string;
    type: 'frontend' | 'backend' | 'tool';
    image: string;
    url: string;
}