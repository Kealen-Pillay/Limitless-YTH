import {Request, Response} from "express";
import {IAbout} from "../../types/about";
import About from "../../models/about";

const getAboutBody = async (req: Request, res: Response): Promise<void> => {
    try {
        const aboutBody: IAbout | null = await About.findOne();
        res.status(200).json({aboutBody});
    }
    catch (error) {
        throw error;
    }
}

export {getAboutBody};
