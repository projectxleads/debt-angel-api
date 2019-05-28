import express from 'express';

import { leadRouter} from '../api-routes/lead.route';

export const middlewareRouter = express.Router();

middlewareRouter.use(leadRouter);

