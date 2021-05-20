// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { SpaceProps } from "@chakra-ui/styled-system";

export type User = {
  id: number
  name: string
}

export interface Property {
  id: string
  isNew: boolean
  imageUrl: string
  imageAlt: string
  beds: number
  baths: number
  title: string
  formattedPrice: string
  reviewCount: number
  rating: number
  description: string
}

export interface Professor {
  id: number
  name: string
  title: string
  address: string
  tel: string
  fax?: string
  email: string
  site?: string
  publications: string
  education?: string
  research?: string
  topicTags?: string
  skillsTags?: string
}

export interface IResearchTags {
  tags: Array<string>
}

export interface ITechniqueTags {
  tags: Array<string>
}