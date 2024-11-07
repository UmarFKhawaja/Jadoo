import { Request, Response } from 'express';

export async function sendProfile(req: Request, res: Response): Promise<void> {
  const { saltHash, ...user } = req.user as any;

  res.json(user);
}
