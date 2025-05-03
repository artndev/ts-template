import type { Request, Response } from 'express'

export async function Test(_: Request | undefined, res: Response) {
  res.status(200).json({
    message: 'You have successfully tested the route',
    answer: true,
  })
}
