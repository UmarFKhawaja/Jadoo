import { Request, Response } from 'express';
import { CONFIG } from '../config';
import { SESSION_COOKIE_NAME } from '../constants';

export async function unsetSessionCookie(req: Request, res: Response): Promise<void> {
  res.cookie(SESSION_COOKIE_NAME, '', {
    domain: CONFIG.session.domain,
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: -1
  });

  res.end();
}
