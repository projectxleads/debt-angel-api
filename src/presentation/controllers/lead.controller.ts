export class LeadController {
  getAllLeads = (req: any, res: any) => {
    res.send('Get All Leads');
  }

  getLeadById = (req: any, res: any) => {
    res.send('Get Lead By Id');
  }

  addLead = (req: any, res: any) => {
    res.send('Add Lead');
  }

  updateLead = (req: any, res: any) => {
    res.send('Update Lead');
  }

  deleteLead = (req: any, res: any) => {
    res.send('Delete Lead');
  }
}