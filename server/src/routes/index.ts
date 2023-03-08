import {Router} from "express";
import {getEvents} from "../controllers/events/index";

const router: Router = Router();

router.get("/events", getEvents);

export default router;
