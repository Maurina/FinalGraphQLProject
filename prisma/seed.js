import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

const uvu_courses = fs.readFileSync('prisma/example_files/uvu_courses.json')

function loadNasaData() {
  const Nasa = JSON.parse(nasa)
  const allNasa = Nasa.nasaDataSets

    return {
      data: {
        title: crs.title._text,
        description: crs.description._text,
        image: crs.image._text,
        source: crs.source._text,
        keywords: crs.keywords._text || "None",
        dateCreated: crs.dateCreated._text
      },
  }
}

async function main() {
  try {
    const allNasa = loadNasaData()
    for (let crs of allNasa) {
      await prismaClient.course.create(crs)
      .catch(err => console.log(`Error trying to create Nasa Data: ${err} data ${crs}`))
    }
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })
