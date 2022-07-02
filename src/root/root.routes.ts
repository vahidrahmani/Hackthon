// NPM Modules
import { Router } from 'express';

// File Modules
import { root } from './root.controller';

// Initialization
const router = Router();

// Routes
router.get('/', root);

export default router;
