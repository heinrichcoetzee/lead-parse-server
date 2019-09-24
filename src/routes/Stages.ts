import { Stages } from "../interfaces/Stages.interface";
import * as Parse from 'parse/node';


const fetchStages = async (req,res)=>{
    const columns:number = parseInt(req.params.columns);
    if(isNaN(columns)){
        return res.status(400).json({message:"Invalid amount of columns passed. Parameter should be a number",code:400});
    };

    const query = new Parse.Query('Leads');
    console.log("Starting Stages Query");
    let stages:Stages[] = []
    for(let i = 1;i<=columns;i++){
        stages.push({
            stage:i,
            leads: await query.equalTo('stage',i).find()
        });
      }
      res.send(stages);
}

export { fetchStages }