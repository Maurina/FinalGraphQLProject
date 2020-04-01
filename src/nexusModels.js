import { objectType } from 'nexus'

const Card = objectType({
  name: 'Card',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.description()
    t.model.source()
    t.model.keywords()
    t.model.dateCreated()
    t.model.image()
  }
})

export const Models = [
  Card
]