import axios from "axios";

// returns the character location from the given URL
export const getLocation= async(link:string)=>{
    return await axios.get(link);
}