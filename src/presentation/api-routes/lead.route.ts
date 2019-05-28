import express from 'express';

export const leadRouter = express.Router();
const uri = '/lead';

leadRouter.get(uri, (req, res) => res.send('Get Leads'));
leadRouter.get(`${uri}/:id`, (req, res) => res.send('Get by Id'));
leadRouter.post(uri, (req, res) => res.send('POST Lead'));
leadRouter.put(`${uri}/:id`, (req, res) => res.send('PUT Lead'));
leadRouter.delete(`${uri}/:id`, (req, res) => res.send('Delete Lead'));
