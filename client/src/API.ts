import axios, {AxiosResponse} from "axios";
import {ApiAboutDataType, ApiEventDataType} from "./type";

const baseUrl: string = "https://limitless-yth-git-development-kealen-pillay.vercel.app";
// const baseUrl: string = "http://localhost:5000";
export const getEvents = async (): Promise<AxiosResponse<ApiEventDataType>> => {
    try {
        return await axios.get(baseUrl + "/events");
    } catch (error) {
        throw error;
    }
}

export const getAbout = async (): Promise<AxiosResponse<ApiAboutDataType>> => {
    try {
        return await axios.get(baseUrl + "/about");
    } catch (error) {
        throw error;
    }
}
