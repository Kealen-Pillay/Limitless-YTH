"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
var uri = "mongodb+srv://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@cluster0.juadezf.mongodb.net/").concat(process.env.MONGO_DB, "?retryWrites=true&w=majority");
var options = {
    useNewURLParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(uri, options)
    .then(function () {
    app.listen(PORT, function () {
        console.log("Server running on PORT ".concat(PORT));
    });
})
    .catch(function (error) {
    throw error;
});
//# sourceMappingURL=app.js.map