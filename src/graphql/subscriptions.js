/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon {
    onCreateCoupon {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon {
    onUpdateCoupon {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon {
    onDeleteCoupon {
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
