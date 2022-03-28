/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
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
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
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
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
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
