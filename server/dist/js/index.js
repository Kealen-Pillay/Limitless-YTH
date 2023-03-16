"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var index = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
index.use((0, cors_1.default)());
index.use(routes_1.default);
var uri = "mongodb+srv://production:8qUHLItFypCQGtF1@cluster0.juadezf.mongodb.net/Limitless?retryWrites=true&w=majority";
var options = {
    useNewURLParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(uri, options)
    .then(function () {
    index.listen(PORT, function () {
        console.log("Server running on PORT ".concat(PORT));
    });
})
    .catch(function (error) {
    throw error;
});
//# sourceMappingURL=index.js.map