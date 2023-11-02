import { gql } from "@apollo/client";


export const LIST_CATEGORIES = gql`
  query ListCategories {
    listCategories {
      name
      id
    }
  }
`;
