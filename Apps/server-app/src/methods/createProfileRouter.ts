import { Router } from 'express';
import { authorize } from './authorize';
import { sendProfile } from './sendProfile';

export async function createProfileRouter(): Promise<Router> {
  const router: Router = Router();

  router.get('/', authorize, sendProfile);

  return router;
}
