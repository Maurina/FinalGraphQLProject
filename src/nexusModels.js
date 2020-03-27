import { objectType } from 'nexus'

const Card = objectType({
  name: 'Card',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.description()
    t.model.image()
    t.model.dateCreated()
    t.model.source()
    t.model.keywords()
  }
})

export const Models = [
  Card
]