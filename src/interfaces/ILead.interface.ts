
export interface ILead{
    name:string;
    feeValue:number;
    startDate:Date;
    duration:number;
    probability:number;
    notes:string;
    stage:number;
    createdAt?: string;
    updatedAt?: string;
    objectId?: string;
}