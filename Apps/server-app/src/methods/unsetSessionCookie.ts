import { Request, Response } from 'express';
import { CONFIG } from '@jadoo/data-module';
import { SESSION_COOKIE_NAME } from '../constants';

export async function unsetSessionCookie(req: Request, res: Response): Promise<void> {
  res.cookie(SESSION_COOKIE_NAME, '', {
    domain: CONFIG.session.domain,
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: -1
  });

  // @ts-ignore
  req.session.passport = {};

  res.end();
}
