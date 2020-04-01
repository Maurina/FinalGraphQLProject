import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const nasa_card = fs.readFileSync('prisma/example_files/nasa.json')

function loadCard() {
  const cardInfo = JSON.parse(nasa_card)
  const allCardInfo = cardInfo.nasaDataSets
/*   console.log(allCardInfo) */
  return allCardInfo.map(crs => {
    return {
    data: {
    title: crs.title,
    description: crs.description,
    source: crs.source,
    /* keywords: {
      set: crs.keywords
      }, */

    },
    }
    })
}

async function main() {
  try{
    const allCardInfo = loadCard()
    for (let crs of allCardInfo){
      await prismaClient.card.create(crs)
      .catch(err => console.log(`Error trying to create Nasa card: ${err} card ${crs}`))
    }
  }
  catch (err) {
    console.log(err)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })


/* async function createCard() {
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
 */

