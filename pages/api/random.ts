import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    await serverAuth(req);

    const videoCount = await prismadb.video.count();
    const randomIndex = Math.floor(Math.random() * videoCount);

    const randomVideo = await prismadb.video.findMany({
      take: 1,
      skip: randomIndex
    });

    return res.status(200).json(randomVideo[0]);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
