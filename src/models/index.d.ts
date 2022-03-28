import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CouponCategory {
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
  readonly isUsed?: boolean | null;
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
  readonly BoosterPass?: BoosterPass | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBoosterPassId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Coupon {
  readonly id: string;
  readonly description?: string | null;
  readonly business?: Business | null;
  readonly userID?: string | null;
  readonly userSelected?: boolean | null;
  readonly category?: CouponCategory | keyof typeof CouponCategory | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Coupon, CouponMetaData>);
  static copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon, CouponMetaData>) => MutableModel<Coupon, CouponMetaData> | void): Coupon;
}

export declare class Business {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly coupons?: (Coupon | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}