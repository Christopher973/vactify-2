const typeDefs = `#graphql
enum Semester {
    Y2024_2025
    Y2025_2026
    Y2026_2027
    Y2027_2028
    Y2028_2029
    Y2029_2030
  }

  enum Specialty {
    MATH
    PHYSICS
    CHEMISTRY
    BIOLOGY
    GEOLOGY
    COMPUTER_SCIENCE
    ELECTRONICS
    MECHANICS
    CIVIL_ENGINEERING
    ELECTRICAL_ENGINEERING
    TELECOMMUNICATION
    NETWORKING
    SOFTWARE_ENGINEERING
  }

  type Intervenant {
    id: Int!
    name: String!
    bio: String
    email: String!
    specialty: String!
    phone: String!
    courses: [Course!]
  }

  type Course {
    id: Int!
    name: String!
    description: String
    code: String!
    creditUnit: Int!
    hours: Int!
    semester: String!
    intervenant: Intervenant
  }

  type Query {
    intervenants: [Intervenant!]!
    intervenant(id: Int!): Intervenant

    courses: [Course!]!
    course(id: Int!): Course
  }

  type Mutation {
    createIntervenant(
      name: String!
      bio: String
      email: String!
      specialty: Specialty!
      phone: String!
    ): Intervenant!

    updateIntervenant(
      id: Int!
      name: String
      bio: String
      email: String
      specialty: Specialty
      phone: String
    ): Intervenant!

    deleteIntervenant(id: Int!): Intervenant!
    
    createCourse(
      name: String!
      description: String
      code: String!
      creditUnit: Int!
      hours: Int!
      semester: Semester!
      intervenantId: Int
    ): Course!

    updateCourse(
      id: Int!
      name: String
      description: String
      code: String
      creditUnit: Int
      hours: Int
      semester: Semester
      intervenantId: Int
    ): Course!

    deleteCourse(id: Int!): Course!

    assignIntervenantToCourse(
      courseId: Int!
      intervenantId: Int!
    ): Course!

    unassignIntervenantFromCourse(
      courseId: Int!
    ): Course!
  }
`;

export default typeDefs;
