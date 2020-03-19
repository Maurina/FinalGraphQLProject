import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('Data', {
      type: 'Data',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.data.findOne({
          where: {
            id,
          },
        })
      }
    })

    t.list.field('Data', {
      type: 'Data',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.data.findMany({
          where: {
            OR: [
              { title: { contains: searchString }},
              { description: { contains: searchString }},
              {keywords: {contains: searchString}},
              {source: {contains: searchString}}
            ],
          },
        })
      }
    })

  }
})