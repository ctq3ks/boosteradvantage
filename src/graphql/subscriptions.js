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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
  subscription OnUpdateOrder {
    onUpdateOrder {
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
  subscription OnDeleteOrder {
    onDeleteOrder {
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
