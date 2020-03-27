import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOneCard()
        
        t.field('createCard', {
            type: 'Card',
            args: {
                title: stringArg({ nullable: false }),
                description: stringArg(),
                date: stringArg(),
                image: stringArg(),
                source: stringArg(),
                keyword: stringArg(),
            },
            resolve: (parent, { name, description, date, image, source, keyword }, ctx) => {
                return ctx.prisma.card.create({
                    data: {
                        name,
                        description,
                        date,
                        image,
                        source,
                        keyword
                    }
                })
            }
        })

        t.field('updateCard', {
            type: 'Card',
            args: { id: idArg(),
                name: stringArg(),
                description: stringArg(),
                date: stringArg(),
                image: stringArg(),
                source: stringArg(),
                keyword: stringArg()
            },
            resolve: (parent, { id, name, description, date, image, source, keyword }, ctx) => {
                return ctx.prisma.course.update({
                    where: {
                        id
                    },
                    data: {
                        name,
                        description,
                        date,
                        image,
                        source,
                        keyword
                    }
                })
            }
        })
    }
})