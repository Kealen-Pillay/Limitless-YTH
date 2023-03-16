"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var aboutSchema = new mongoose_1.Schema({
    body: {
        type: String,
        required: true,
    },
    verse: {
        type: String,
        required: true,
    },
    scripture: {
        type: String,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)("About", aboutSchema);
//# sourceMappingURL=about.js.map