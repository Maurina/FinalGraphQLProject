import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOneCard()
        t.crud.updateOneCard()
        t.crud.deleteOneCard()

      /*   
       t.field('createCard', {
            type: 'Card',
            args: {
                title: stringArg({ nullable: false }),
                description: stringArg(),
                source: stringArg(),
            },
            resolve: (parent, { title, description, source}, ctx) => {
                return ctx.prisma.card.create({
                    data: {
                        title,
                        description,
                        source,
                       
                    }
                })
            }
        })

        t.field('updateCard', {
            type: 'Card',
            args: { id: idArg(),
                title: stringArg(),
                description: stringArg(),
                source: stringArg(),
            },
            resolve: (parent, { id, title, description, source }, ctx) => {
                return ctx.prisma.course.update({
                    where: {
                        id
                    },
                    data: {
                        title,
                        description,
                        source,
                    }
                })
            }
        }) */
    }
}) 