"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var events_1 = require("../controllers/events");
var about_1 = require("../controllers/about");
var router = (0, express_1.Router)();
/**
 * **************** Event Routes ****************
 */
router.get("/events", events_1.getEvents);
/**
 * **************** About Routes ****************
 */
router.get("/about", about_1.getAboutBody);
exports.default = router;
//# sourceMappingURL=index.js.map