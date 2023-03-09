import {Router} from "express";
import {getEvents} from "../controllers/events";

const router: Router = Router();

router.get("/events", getEvents);

export default router;
