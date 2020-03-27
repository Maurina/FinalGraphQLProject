import { PrismaClient } from '@prisma/client'


const prismaClient = new PrismaClient()

async function createCard() {
  try {
    await prismaClient.Card.create({
      ctx: {
        title: "Earth and Moon",
        description: "During its flight, NASA\u2019s Galileo spacecraft returned images of the Earth and Moon. Separate images of the Earth and Moon were combined to generate this view. ",
        image: "http://images-assets.nasa.gov/image/PIA00342/PIA00342~orig.jpg",
        source: "NASA/JPL/USGS",
        dateCreated: "1998:06:04 18:10:28",
        keywords: ["Earth", "Galileo"]
      },
    })
  } catch (err) {
    console.log(err)
  }
} 


createCard()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })
