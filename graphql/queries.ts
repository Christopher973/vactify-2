import { gql } from '@apollo/client';

// Queries Intervenants
export const GET_INTERVENANTS = gql`
  query GetIntervenants {
    intervenants {
      id
      name
      bio
      email
      specialty
      phone
      courses {
        id
        name
        code
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_INTERVENANT = gql`
  query GetIntervenant($id: Int!) {
    intervenant(id: $id) {
      id
      name
      bio
      email
      specialty
      phone
      courses {
        id
        name
        code
        creditUnit
        hours
        semester
      }
      createdAt
      updatedAt
    }
  }
`;

// Queries Courses
export const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      name
      description
      code
      creditUnit
      hours
      semester
      intervenant {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_COURSE = gql`
  query GetCourse($id: Int!) {
    course(id: $id) {
      id
      name
      description
      code
      creditUnit
      hours
      semester
      intervenant {
        id
        name
        email
        specialty
      }
      createdAt
      updatedAt
    }
  }
`;

// Mutations Intervenants
export const CREATE_INTERVENANT = gql`
  mutation CreateIntervenant(
    $name: String!
    $bio: String
    $email: String!
    $specialty: Specialty!
    $phone: String!
  ) {
    createIntervenant(
      name: $name
      bio: $bio
      email: $email
      specialty: $specialty
      phone: $phone
    ) {
      id
      name
      bio
      email
      specialty
      phone
    }
  }
`;

export const UPDATE_INTERVENANT = gql`
  mutation UpdateIntervenant(
    $id: Int!
    $name: String
    $bio: String
    $email: String
    $specialty: Specialty
    $phone: String
  ) {
    updateIntervenant(
      id: $id
      name: $name
      bio: $bio
      email: $email
      specialty: $specialty
      phone: $phone
    ) {
      id
      name
      bio
      email
      specialty
      phone
    }
  }
`;

export const DELETE_INTERVENANT = gql`
  mutation DeleteIntervenant($id: Int!) {
    deleteIntervenant(id: $id) {
      id
    }
  }
`;

// Mutations Courses
export const CREATE_COURSE = gql`
  mutation CreateCourse(
    $name: String!
    $description: String
    $code: String!
    $creditUnit: Int!
    $hours: Int!
    $semester: Semester!
    $intervenantId: Int
  ) {
    createCourse(
      name: $name
      description: $description
      code: $code
      creditUnit: $creditUnit
      hours: $hours
      semester: $semester
      intervenantId: $intervenantId
    ) {
      id
      name
      description
      code
      creditUnit
      hours
      semester
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation UpdateCourse(
    $id: Int!
    $name: String
    $description: String
    $code: String
    $creditUnit: Int
    $hours: Int
    $semester: Semester
    $intervenantId: Int
  ) {
    updateCourse(
      id: $id
      name: $name
      description: $description
      code: $code
      creditUnit: $creditUnit
      hours: $hours
      semester: $semester
      intervenantId: $intervenantId
    ) {
      id
      name
      description
      code
      creditUnit
      hours
      semester
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DeleteCourse($id: Int!) {
    deleteCourse(id: $id) {
      id
    }
  }
`;

export const ASSIGN_INTERVENANT_TO_COURSE = gql`
  mutation AssignIntervenantToCourse($courseId: Int!, $intervenantId: Int!) {
    assignIntervenantToCourse(courseId: $courseId, intervenantId: $intervenantId) {
      id
      name
      intervenant {
        id
        name
        email
      }
    }
  }
`;

export const UNASSIGN_INTERVENANT_FROM_COURSE = gql`
  mutation UnassignIntervenantFromCourse($courseId: Int!) {
    unassignIntervenantFromCourse(courseId: $courseId) {
      id
      name
      intervenant {
        id
        name
        email
      }
    }
  }
`;