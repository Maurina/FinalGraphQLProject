import { objectType } from 'nexus'

const Card = objectType({
  name: 'Card',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.description()
    t.model.source()
  }
})

export const Models = [
  Card
]