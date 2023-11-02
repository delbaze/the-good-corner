import { gql } from "@apollo/client";

export const LIST_ADS_BY_CATEGORY_ID = gql`
  query ListAdsByCategory($listAdsByCategoryId: String!) {
    listAdsByCategory(id: $listAdsByCategoryId) {
      id
      picture
      price
      title
    }
  }
`;

export const FIND_AD_BY_ID = gql`
  query FindAdById($findAdById: String!) {
    findAdById(id: $findAdById) {
      title
      description
      price
    }
  }
`;
