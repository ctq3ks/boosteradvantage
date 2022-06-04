/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      phonenumber
      username
      Coupons {
        items {
          id
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          expirationDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      BoosterPass {
        items {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      phonenumber
      username
      Coupons {
        items {
          id
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          expirationDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      BoosterPass {
        items {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      phonenumber
      username
      Coupons {
        items {
          id
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          expirationDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      BoosterPass {
        items {
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
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          expirationDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      category
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
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          expirationDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      category
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
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          expirationDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      category
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
      business {
        id
        name
        location
        coupons {
          items {
            id
            userID
            couponType
            currentPrice
            discountPrice
            itemDescription
            expirationDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            businessCouponsId
          }
          nextToken
          startedAt
        }
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userID
      couponType
      currentPrice
      discountPrice
      itemDescription
      expirationDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      business {
        id
        name
        location
        coupons {
          items {
            id
            userID
            couponType
            currentPrice
            discountPrice
            itemDescription
            expirationDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            businessCouponsId
          }
          nextToken
          startedAt
        }
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userID
      couponType
      currentPrice
      discountPrice
      itemDescription
      expirationDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      business {
        id
        name
        location
        coupons {
          items {
            id
            userID
            couponType
            currentPrice
            discountPrice
            itemDescription
            expirationDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            businessCouponsId
          }
          nextToken
          startedAt
        }
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userID
      couponType
      currentPrice
      discountPrice
      itemDescription
      expirationDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      businessCouponsId
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
      image
      images
      options
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
      image
      images
      options
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
      image
      images
      options
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
        image
        images
        options
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
        image
        images
        options
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
        image
        images
        options
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
        image
        images
        options
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
        image
        images
        options
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
        image
        images
        options
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
