import { NextApiRequest, NextApiResponse } from 'next'

type ResponseError = {
  message: string;
}

export type Data = Record<string, any>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data| ResponseError>
) {

  // User with id exists
  const data = {
    url: req.url
  }
  return res.status(200).json(data)
}