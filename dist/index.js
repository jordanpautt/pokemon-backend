"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = parseInt(process.env.PORT || '4001', 10);
app.get('/', (req, res) => {
    res.send('Hello World..!!!');
});
function axiosRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        return data;
    });
}
axiosRequest().then(data => console.log(data));
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});
//# sourceMappingURL=index.js.map