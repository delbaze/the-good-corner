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
