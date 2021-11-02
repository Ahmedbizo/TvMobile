export interface Show {
        id: number,
        url: string,
        name: string,
        type: string,
        language: string,
        status: string,
        runtime: number,
        averageRuntime: number,
        premiered: number,
        ended: number,
        officialSite: string,

}

export interface Schedule {

    
        time: number,
        days: string,

}

export interface Rating {

    rating: object

}

export interface Network { 

    id: number,
    name:string,
    country: object


}


        
        
       
        
    


