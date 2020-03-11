import { objectType } from 'nexus'

const Data = objectType({
  name: 'Course',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.description()
    t.model.imageUrl()
  }
})

export const Models = [
  Data
]