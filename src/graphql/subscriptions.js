/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoosterPass = /* GraphQL */ `
  subscription OnCreateBoosterPass {
    onCreateBoosterPass {
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
  subscription OnUpdateBoosterPass {
    onUpdateBoosterPass {
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
  subscription OnDeleteBoosterPass {
    onDeleteBoosterPass {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon {
    onCreateCoupon {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon {
    onUpdateCoupon {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon {
    onDeleteCoupon {
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
