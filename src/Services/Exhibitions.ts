import { Exhibitions } from '../Model/Exhibitions';

const getApiUrl = (value: string) => `https://api.artic.edu/api/v1/exhibitions/search?q={${value}}`;

export const mapDataToExhibitions = (data: any[]): Exhibitions[] => {
    return data.map(data => 
         data.title,
           )
}

  
export const getAPIData = async (search:string):Promise<Exhibitions[]> => {
    try {
      const apiResponse = await fetch(getApiUrl(search));
      const json = await apiResponse.json();
      return mapDataToExhibitions(json.data);
    } catch (error) {
       return []
    }
  };