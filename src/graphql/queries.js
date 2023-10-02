/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDonorProfile = /* GraphQL */ `
  query GetDonorProfile($id: ID!) {
    getDonorProfile(id: $id) {
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
export const listDonorProfiles = /* GraphQL */ `
  query ListDonorProfiles(
    $filter: ModelDonorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonorProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        totalRaised
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonorProfiles = /* GraphQL */ `
  query SyncDonorProfiles(
    $filter: ModelDonorProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonorProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        totalRaised
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFundraiser = /* GraphQL */ `
  query GetFundraiser($id: ID!) {
    getFundraiser(id: $id) {
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
export const listFundraisers = /* GraphQL */ `
  query ListFundraisers(
    $filter: ModelFundraiserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFundraisers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncFundraisers = /* GraphQL */ `
  query SyncFundraisers(
    $filter: ModelFundraiserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFundraisers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBoosterPass = /* GraphQL */ `
  query GetBoosterPass($id: ID!) {
    getBoosterPass(id: $id) {
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
export const listBoosterPasses = /* GraphQL */ `
  query ListBoosterPasses(
    $filter: ModelBoosterPassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoosterPasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncBoosterPasses = /* GraphQL */ `
  query SyncBoosterPasses(
    $filter: ModelBoosterPassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoosterPasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBusinessAdmin = /* GraphQL */ `
  query GetBusinessAdmin($id: ID!) {
    getBusinessAdmin(id: $id) {
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
export const listBusinessAdmins = /* GraphQL */ `
  query ListBusinessAdmins(
    $filter: ModelBusinessAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBusinessAdmins = /* GraphQL */ `
  query SyncBusinessAdmins(
    $filter: ModelBusinessAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinessAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
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
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCoupons = /* GraphQL */ `
  query SyncCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoupons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
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
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
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
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
