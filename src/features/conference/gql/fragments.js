const { gql } = require('@apollo/client')

const Fragments = {
  conference: gql`
    fragment conference on Conference {
      id
      name
      startDate
      endDate
      organizerEmail
    }
  `,
  speaker: gql`
    fragment speaker on Speaker {
      id
      name
    }
  `,
  location: gql`
    fragment location on Location {
      id
      city {
        id
        name
      }
      county {
        id
        name
      }
      country {
        id
        name
      }
    }
  `,
  type: gql`
    fragment type on Type {
      id
      name
    }
  `,
  category: gql`
    fragment category on Category {
      id
      name
    }
  `,
  status: gql`
    fragment status on Status {
      id
      name
    }
  `
}
export default Fragments
