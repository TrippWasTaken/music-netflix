import { PrismaClient } from '@prisma/client'

declare global {
  namespace globalThis{
    var prismadb: prismaClient
  }
}


type videoType = {
  id: number,
  source: string,
  description: string,
  translatedName?: string,
  name: string,
  genre: string,
  author: string,
  likes: number,
  likeyBy: array[]
}