import express from 'express';

import { LeadController } from '../controllers/lead.controller';

export const leadRouter = express.Router();
const uri = '/lead';
const controller = new LeadController();

leadRouter.get(uri, controller.getAllLeads);
leadRouter.get(`${uri}/:id`, controller.getLeadById);
leadRouter.post(uri, controller.addLead);
leadRouter.put(`${uri}/:id`, controller.updateLead);
leadRouter.delete(`${uri}/:id`, controller.deleteLead);
