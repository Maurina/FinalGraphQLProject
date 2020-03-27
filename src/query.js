import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('Card', {
      type: 'Card',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.card.findOne({
          where: {
            id,
          },
        })
      }
    })

    t.list.field('Card', {
      type: 'Card',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.card.findMany({
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