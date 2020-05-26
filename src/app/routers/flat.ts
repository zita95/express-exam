import { Router } from 'express';
import * as flatController from '../controllers/flat';

export const router: Router = Router({ mergeParams: true });

router.get('/flat', flatController.index);
router.post('/flat', flatController.create);
router.get('/flat/:id', flatController.show);
router.put('/flat/:id', flatController.update);
router.delete('/flat/:id', flatController.destroy);
