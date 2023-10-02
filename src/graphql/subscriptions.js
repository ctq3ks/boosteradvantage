/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDonorProfile = /* GraphQL */ `
  subscription OnCreateDonorProfile(
    $filter: ModelSubscriptionDonorProfileFilterInput
  ) {
    onCreateDonorProfile(filter: $filter) {
      id
      userSub
      totalRaised
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDonorProfile = /* GraphQL */ `
  subscription OnUpdateDonorProfile(
    $filter: ModelSubscriptionDonorProfileFilterInput
  ) {
    onUpdateDonorProfile(filter: $filter) {
      id
      userSub
      totalRaised
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDonorProfile = /* GraphQL */ `
  subscription OnDeleteDonorProfile(
    $filter: ModelSubscriptionDonorProfileFilterInput
  ) {
    onDeleteDonorProfile(filter: $filter) {
      id
      userSub
      totalRaised
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFundraiser = /* GraphQL */ `
  subscription OnCreateFundraiser(
    $filter: ModelSubscriptionFundraiserFilterInput
  ) {
    onCreateFundraiser(filter: $filter) {
      id
      title
      dollarsRaised
      dollarsGoal
      raiseByDate
      businessBool
      businessPromo
      donors
      image
      fundee
      isActive
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFundraiser = /* GraphQL */ `
  subscription OnUpdateFundraiser(
    $filter: ModelSubscriptionFundraiserFilterInput
  ) {
    onUpdateFundraiser(filter: $filter) {
      id
      title
      dollarsRaised
      dollarsGoal
      raiseByDate
      businessBool
      businessPromo
      donors
      image
      fundee
      isActive
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFundraiser = /* GraphQL */ `
  subscription OnDeleteFundraiser(
    $filter: ModelSubscriptionFundraiserFilterInput
  ) {
    onDeleteFundraiser(filter: $filter) {
      id
      title
      dollarsRaised
      dollarsGoal
      raiseByDate
      businessBool
      businessPromo
      donors
      image
      fundee
      isActive
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBoosterPass = /* GraphQL */ `
  subscription OnCreateBoosterPass(
    $filter: ModelSubscriptionBoosterPassFilterInput
  ) {
    onCreateBoosterPass(filter: $filter) {
      id
      isUsed
      userID
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBoosterPass = /* GraphQL */ `
  subscription OnUpdateBoosterPass(
    $filter: ModelSubscriptionBoosterPassFilterInput
  ) {
    onUpdateBoosterPass(filter: $filter) {
      id
      isUsed
      userID
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBoosterPass = /* GraphQL */ `
  subscription OnDeleteBoosterPass(
    $filter: ModelSubscriptionBoosterPassFilterInput
  ) {
    onDeleteBoosterPass(filter: $filter) {
      id
      isUsed
      userID
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBusinessAdmin = /* GraphQL */ `
  subscription OnCreateBusinessAdmin(
    $filter: ModelSubscriptionBusinessAdminFilterInput
  ) {
    onCreateBusinessAdmin(filter: $filter) {
      id
      email
      phonenumber
      username
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBusinessAdmin = /* GraphQL */ `
  subscription OnUpdateBusinessAdmin(
    $filter: ModelSubscriptionBusinessAdminFilterInput
  ) {
    onUpdateBusinessAdmin(filter: $filter) {
      id
      email
      phonenumber
      username
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBusinessAdmin = /* GraphQL */ `
  subscription OnDeleteBusinessAdmin(
    $filter: ModelSubscriptionBusinessAdminFilterInput
  ) {
    onDeleteBusinessAdmin(filter: $filter) {
      id
      email
      phonenumber
      username
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onCreateBusiness(filter: $filter) {
      id
      name
      location
      coupons {
        items {
          id
          couponType
          currentPrice
          discountPrice
          itemDescription
          startDate
          expirationDate
          businessID
          termsAndConditions
          couponImage
          boosterDonation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      category
      adminSub
      contact
      logo
      fundraisers {
        items {
          id
          title
          dollarsRaised
          dollarsGoal
          raiseByDate
          businessBool
          businessPromo
          donors
          image
          fundee
          isActive
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onUpdateBusiness(filter: $filter) {
      id
      name
      location
      coupons {
        items {
          id
          couponType
          currentPrice
          discountPrice
          itemDescription
          startDate
          expirationDate
          businessID
          termsAndConditions
          couponImage
          boosterDonation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      category
      adminSub
      contact
      logo
      fundraisers {
        items {
          id
          title
          dollarsRaised
          dollarsGoal
          raiseByDate
          businessBool
          businessPromo
          donors
          image
          fundee
          isActive
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onDeleteBusiness(filter: $filter) {
      id
      name
      location
      coupons {
        items {
          id
          couponType
          currentPrice
          discountPrice
          itemDescription
          startDate
          expirationDate
          businessID
          termsAndConditions
          couponImage
          boosterDonation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      category
      adminSub
      contact
      logo
      fundraisers {
        items {
          id
          title
          dollarsRaised
          dollarsGoal
          raiseByDate
          businessBool
          businessPromo
          donors
          image
          fundee
          isActive
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onCreateCoupon(filter: $filter) {
      id
      couponType
      currentPrice
      discountPrice
      itemDescription
      startDate
      expirationDate
      businessID
      termsAndConditions
      couponImage
      boosterDonation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onUpdateCoupon(filter: $filter) {
      id
      couponType
      currentPrice
      discountPrice
      itemDescription
      startDate
      expirationDate
      businessID
      termsAndConditions
      couponImage
      boosterDonation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onDeleteCoupon(filter: $filter) {
      id
      couponType
      currentPrice
      discountPrice
      itemDescription
      startDate
      expirationDate
      businessID
      termsAndConditions
      couponImage
      boosterDonation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      title
      description
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      title
      description
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      title
      description
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onCreateCartProduct(filter: $filter) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onUpdateCartProduct(filter: $filter) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onDeleteCartProduct(filter: $filter) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onCreateOrderProduct(filter: $filter) {
      id
      quantity
      option
      productID
      product {
        id
        title
        description
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductProductId
      orderProductOrderId
    }
  }
`;
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onUpdateOrderProduct(filter: $filter) {
      id
      quantity
      option
      productID
      product {
        id
        title
        description
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductProductId
      orderProductOrderId
    }
  }
`;
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onDeleteOrderProduct(filter: $filter) {
      id
      quantity
      option
      productID
      product {
        id
        title
        description
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductProductId
      orderProductOrderId
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
