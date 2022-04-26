import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CouponType {
  PRICE = "PRICE",
  ITEM = "ITEM"
}

export enum BusinessCategory {
  RESTAURANT = "RESTAURANT",
  SALON = "SALON",
  SERVICE = "SERVICE"
}



type BoosterPassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CouponMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BoosterPass {
  readonly id: string;
  readonly isUsed: boolean;
  readonly userSub: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BoosterPass, BoosterPassMetaData>);
  static copyOf(source: BoosterPass, mutator: (draft: MutableModel<BoosterPass, BoosterPassMetaData>) => MutableModel<BoosterPass, BoosterPassMetaData> | void): BoosterPass;
}

export declare class User {
  readonly id: string;
  readonly email?: string | null;
  readonly phonenumber?: string | null;
  readonly username?: string | null;
  readonly Coupons?: (Coupon | null)[] | null;
  readonly BoosterPass?: (BoosterPass | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Coupon {
  readonly id: string;
  readonly business: Business;
  readonly userID?: string | null;
  readonly couponType: CouponType | keyof typeof CouponType;
  readonly currentPrice?: number | null;
  readonly discountPrice?: number | null;
  readonly itemDescription: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Coupon, CouponMetaData>);
  static copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon, CouponMetaData>) => MutableModel<Coupon, CouponMetaData> | void): Coupon;
}

export declare class Business {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly coupons?: (Coupon | null)[] | null;
  readonly category: BusinessCategory | keyof typeof BusinessCategory;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}