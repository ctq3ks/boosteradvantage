/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      description
      coupons {
        items {
          id
          description
          createdAt
          updatedAt
          businessCouponsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      description
      business {
        id
        name
        description
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      businessCouponsId
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        business {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        businessCouponsId
      }
      nextToken
    }
  }
`;
