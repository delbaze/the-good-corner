import { gql } from "@apollo/client";

export const CREATE_AD = gql`
  mutation CreateAd($data: CreateAdInput!) {
    createAd(data: $data) {
      category {
        id
      }
    }
  }
`;
