import { PrismaClient, Intervenant, Course, Specialty, Semester } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    // Résolveurs Intervenant
    intervenants: () => prisma.intervenant.findMany({
      include: { courses: true }
    }),
    intervenant: (_, { id }) => prisma.intervenant.findUnique({
      where: { id },
      include: { courses: true }
    }),

    // Résolveurs Course
    courses: () => prisma.course.findMany({
      include: { intervenant: true }
    }),
    course: (_, { id }) => prisma.course.findUnique({
      where: { id },
      include: { intervenant: true }
    }),
  },

  Mutation: {
    // Mutations Intervenant
    createIntervenant: (_, args) => prisma.intervenant.create({
      data: args,
      include: { courses: true }
    }),
    updateIntervenant: (_, { id, ...args }) => prisma.intervenant.update({
      where: { id },
      data: args,
      include: { courses: true }
    }),
    deleteIntervenant: (_, { id }) => prisma.intervenant.delete({
      where: { id }
    }),

    // Mutations Course
    createCourse: (_, args) => prisma.course.create({
      data: args,
      include: { intervenant: true }
    }),
    updateCourse: (_, { id, ...args }) => prisma.course.update({
      where: { id },
      data: args,
      include: { intervenant: true }
    }),
    deleteCourse: (_, { id }) => prisma.course.delete({
      where: { id }
    }),
  },

  // Relations
  Intervenant: {
    courses: (parent) => prisma.course.findMany({
      where: { intervenantId: parent.id }
    })
  },
  
  Course: {
    intervenant: (parent) => parent.intervenantId 
      ? prisma.intervenant.findUnique({
          where: { id: parent.intervenantId }
        })
      : null
  }
}

export default resolvers;