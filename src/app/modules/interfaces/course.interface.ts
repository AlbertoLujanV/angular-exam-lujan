export interface Imagen {
    url: string;
}

export interface Class {
    description: string;
}


export interface Detail {
    
    section: string;
    title: string;
    classes: Class[];
}

export interface Course {
    id: string;
    images: string;
    instructor: string;
    progress: string;
    qualification: string;
    title: string;
};