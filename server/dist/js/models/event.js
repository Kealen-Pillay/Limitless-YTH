"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var eventSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    elapsed: {
        type: Boolean,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)("Event", eventSchema);
//# sourceMappingURL=event.js.map