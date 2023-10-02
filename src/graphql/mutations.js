/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonorProfile = /* GraphQL */ `
  mutation CreateDonorProfile(
    $input: CreateDonorProfileInput!
    $condition: ModelDonorProfileConditionInput
  ) {
    createDonorProfile(input: $input, condition: $condition) {
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
export const updateDonorProfile = /* GraphQL */ `
  mutation UpdateDonorProfile(
    $input: UpdateDonorProfileInput!
    $condition: ModelDonorProfileConditionInput
  ) {
    updateDonorProfile(input: $input, condition: $condition) {
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
export const deleteDonorProfile = /* GraphQL */ `
  mutation DeleteDonorProfile(
    $input: DeleteDonorProfileInput!
    $condition: ModelDonorProfileConditionInput
  ) {
    deleteDonorProfile(input: $input, condition: $condition) {
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
export const createFundraiser = /* GraphQL */ `
  mutation CreateFundraiser(
    $input: CreateFundraiserInput!
    $condition: ModelFundraiserConditionInput
  ) {
    createFundraiser(input: $input, condition: $condition) {
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
export const updateFundraiser = /* GraphQL */ `
  mutation UpdateFundraiser(
    $input: UpdateFundraiserInput!
    $condition: ModelFundraiserConditionInput
  ) {
    updateFundraiser(input: $input, condition: $condition) {
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
export const deleteFundraiser = /* GraphQL */ `
  mutation DeleteFundraiser(
    $input: DeleteFundraiserInput!
    $condition: ModelFundraiserConditionInput
  ) {
    deleteFundraiser(input: $input, condition: $condition) {
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
export const createBoosterPass = /* GraphQL */ `
  mutation CreateBoosterPass(
    $input: CreateBoosterPassInput!
    $condition: ModelBoosterPassConditionInput
  ) {
    createBoosterPass(input: $input, condition: $condition) {
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
export const updateBoosterPass = /* GraphQL */ `
  mutation UpdateBoosterPass(
    $input: UpdateBoosterPassInput!
    $condition: ModelBoosterPassConditionInput
  ) {
    updateBoosterPass(input: $input, condition: $condition) {
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
export const deleteBoosterPass = /* GraphQL */ `
  mutation DeleteBoosterPass(
    $input: DeleteBoosterPassInput!
    $condition: ModelBoosterPassConditionInput
  ) {
    deleteBoosterPass(input: $input, condition: $condition) {
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
export const createBusinessAdmin = /* GraphQL */ `
  mutation CreateBusinessAdmin(
    $input: CreateBusinessAdminInput!
    $condition: ModelBusinessAdminConditionInput
  ) {
    createBusinessAdmin(input: $input, condition: $condition) {
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
export const updateBusinessAdmin = /* GraphQL */ `
  mutation UpdateBusinessAdmin(
    $input: UpdateBusinessAdminInput!
    $condition: ModelBusinessAdminConditionInput
  ) {
    updateBusinessAdmin(input: $input, condition: $condition) {
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
export const deleteBusinessAdmin = /* GraphQL */ `
  mutation DeleteBusinessAdmin(
    $input: DeleteBusinessAdminInput!
    $condition: ModelBusinessAdminConditionInput
  ) {
    deleteBusinessAdmin(input: $input, condition: $condition) {
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
export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
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
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
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
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
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
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
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
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
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
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
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
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
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
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
