import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function hander(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    await serverAuth(req);

    const songs = await prismadb.video.findMany();

    return res.status(200).json(songs);
  } catch (e) {
    console.log(e);
    return res.status(400).end();
  }
}
