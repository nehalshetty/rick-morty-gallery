export interface LocationInterface{
    name:string;
    dimension: string;
    id:number;
    residents: string[]
}


export interface LocationStateInterface{
    isKnown: boolean;
    name: string;
    dimension: string;
    residents?: number;
    isLoaded: boolean;
    id?: number;
}


export interface LocationResp {
    status: number;
    data: LocationInterface | null;
  }