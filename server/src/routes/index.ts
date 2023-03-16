import {Router} from "express";
import {getEvents} from "../controllers/events";
import {getAboutBody} from "../controllers/about";

const router: Router = Router();

/**
 * **************** Event Routes ****************
 */

router.get("/events", getEvents);

/**
 * **************** About Routes ****************
 */
router.get("/about", getAboutBody);

export default router;
