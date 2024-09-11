import { gql } from '@apollo/client'
import Fragments from './fragments'

export const CONFERENCE_LIST_QUERY = gql`
  query conferenceListQuery($filters: ConferenceFilterInput, $userEmail: String!) {
    conferenceList(filters: $filters, userEmail: $userEmail) {
      ...conference
      speakers {
        ...speaker
      }
      location {
        ...location
      }
      type {
        ...type
      }
      category {
        ...category
      }
      status(userEmail: $userEmail) {
        ...status
      }
    }
  }
  ${Fragments.conference}
  ${Fragments.speaker}
  ${Fragments.location}
  ${Fragments.type}
  ${Fragments.category}
  ${Fragments.status}
`
export const CONFERENCE_QUERY = gql`
  query conference($id: Int!, $isNew: Boolean!) {
    conference(id: $id) @skip(if: $isNew) {
      ...conference
      speakers {
        ...detailedSpeaker
      }
      location {
        ...detailedLocation
      }
      type {
        ...type
      }
      category {
        ...category
      }
    }
    typeList {
      ...type
    }
    categoryList {
      ...category
    }
    cityList {
      id
      name
    }
    countyList {
      id
      name
    }
    countryList {
      id
      name
    }
  }
  ${Fragments.conference}
  ${Fragments.detailedSpeaker}
  ${Fragments.detailedLocation}
  ${Fragments.type}
  ${Fragments.category}
`
