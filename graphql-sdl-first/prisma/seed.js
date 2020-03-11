import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createCourse() {
  try {
    await prismaClient.course.create({
      data: {
        title: 'Venus - Fractured Somerville Crater in Beta Regio',
        description: 'This radar image from NASA Magellan spacecraft is of a half crater located in the rift between Rhea and Theia Montes in Beta Regio on Venus and has been cut by many fractures or faults since it was formed by the impact of a large asteroid.',
        date: 9-2-2019,
        imageUrl:'http://images-assets.nasa.gov/image/PIA00100/PIA00100~orig.jpg'
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createCourse()
  } catch(err) {
    console.log(err)
  }
}

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})