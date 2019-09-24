"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchStages = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const columns = parseInt(req.params.columns);
    if (isNaN(columns)) {
        return res.status(400).json({ message: "Invalid amount of columns passed. Parameter should be a number", code: 400 });
    }
    ;
    const query = new Parse.Query('Leads');
    console.log("Starting Stages Query");
    let stages = [];
    for (let i = 1; i <= columns; i++) {
        stages.push({
            stage: i,
            leads: yield query.equalTo('stage', i).find()
        });
    }
    res.send(stages);
});
exports.default = { fetchStages };
//# sourceMappingURL=stages.js.map