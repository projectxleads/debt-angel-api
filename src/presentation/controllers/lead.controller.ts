import LeadLogic from "../../application/logics/lead/lead.logic";
import LeadDto from "../../application/models/dtos/lead.dto";

const leadLogic = new LeadLogic();

export class LeadController {
  public getAllLeads = (req: any, res: any) => {
    res.send("Get All Leads");
  }

  public getLeadById = (req: any, res: any) => {
    res.send("Get Lead By Id");
  }

  public addLead = (req: Request, res: any) => {
    console.log("controller", req.body);
    leadLogic.addLead(req.body).then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send();
    });
    
  }

  public updateLead = (req: any, res: any) => {
    res.send("Update Lead");
  }

  public deleteLead = (req: any, res: any) => {
    res.send("Delete Lead");
  }
}
