import dayjs from 'dayjs';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { CONFIG, User } from '@jadoo/data-module';
import { SESSION_COOKIE_NAME } from '../constants';

export async function setSessionCookie(req: Request, res: Response): Promise<void> {
  const {
    id,
    displayName,
    userName,
    emailAddress
  } = req.user as unknown as User;

  const token = sign({
    id,
    displayName,
    userName,
    emailAddress
  }, CONFIG.session.secret, {
    expiresIn: '1d'
  });

  const expireDate = dayjs().add(1, 'day').toDate();

  res.cookie(SESSION_COOKIE_NAME, {
    token
  }, {
    domain: CONFIG.session.domain,
    path: '/',
    httpOnly: true,
    secure: true,
    expires: expireDate
  });

  res.end();
}
