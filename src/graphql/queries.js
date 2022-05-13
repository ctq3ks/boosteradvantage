/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phonenumber
        username
        Coupons {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
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
        Coupons {
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
      nextToken
      startedAt
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
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
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        business {
          id
          name
          location
          coupons {
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
        business {
          id
          name
          location
          coupons {
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
      nextToken
      startedAt
    }
  }
`;
