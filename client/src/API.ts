import axios, {AxiosResponse} from "axios";
import {ApiDataType} from "./type";

const baseUrl: string = "http://localhost:5000";

export const getEvents = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        return await axios.get(baseUrl + "/events");
    } catch(error) {
        throw error;
    }
}
