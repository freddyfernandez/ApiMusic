export interface Coleccion{
    resultCount:number;
    result : Cancion[];
    
}

export interface Cancion{
    artistName:string;
    trackName : string;
    collectionName: string;
    country:string;
    trackNumber:number;
    primaryGenreName:string;
    
}