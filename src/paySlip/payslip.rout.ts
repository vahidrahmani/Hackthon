// NPM Modules
import { Router } from 'express';
import { createPaySlip, getAllPaySlip } from './payslip.controller';

// Initialization
const router = Router();
// router.use("/:boardId/cards", cardsRoute);

router.route('/').post(createPaySlip);

router.route('/').get(getAllPaySlip);

export default router;
