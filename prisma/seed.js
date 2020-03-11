import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createData() {
  try {
    await prismaClient.data.create({
      data: {
        title: 'Earth and ',
        description: 'Earth and moon',
        imageUrl: 'image here',
        date: '2006'
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createData()
  } catch(err) {
    console.log(err)
  }
}

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})