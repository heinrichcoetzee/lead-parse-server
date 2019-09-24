"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import parseServer from "parse-server";
var ParseServer = require('parse-server').ParseServer;
const path_1 = __importDefault(require("path"));
const Leads_1 = __importDefault(require("./src/routes/Leads"));
const environment_1 = require("./env/environment");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Stages_1 = __importDefault(require("./src/routes/Stages"));
const app = express_1.default();
const port = process.env.PORT || 1337;
// Serve static assets from the /public folder
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '/public')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
var api = new ParseServer({
    databaseURI: process.env.DATABASE_URI || environment_1.environment.databseUrl,
    appId: process.env.APP_ID || environment_1.environment.appId,
    masterKey: process.env.MASTER_KEY || environment_1.environment.masterkey,
    serverURL: environment_1.environment.serverUrl || 'http://localhost:1337/parse',
});
app.use('/parse', api);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/test', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'test.html'));
});
app.get('/leads', Leads_1.default.getLeads);
app.get('/lead/:id', Leads_1.default.getLeadById);
app.post('/lead', Leads_1.default.createLead);
app.get('/stages/:columns', Stages_1.default.fetchStages);
app.listen(port, () => {
    console.log(`Lead server running on ${port}`);
});
//# sourceMappingURL=index.js.map