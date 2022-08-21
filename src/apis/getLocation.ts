import axios from "axios";
import { LocationResp } from "../types/location";

// returns the character location from the given URL
export const getLocation = async (link: string): Promise<LocationResp> => {
    const resp = await axios.get(link);
    return resp;
};
