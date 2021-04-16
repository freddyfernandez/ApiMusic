export interface Coleccion{
    total: number; 
    data : Cancion[];
    
}

export interface Cancion{
    title:string;
    link : string;
    duration: number;
    country:string;
    type:string;
    md5_image:string;
    
}