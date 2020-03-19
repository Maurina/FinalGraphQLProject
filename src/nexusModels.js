import { objectType } from 'nexus'

const Data = objectType({
  name: 'Data',
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
  Data
]