import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum CouponType {
  PRICE = "PRICE",
  ITEM = "ITEM"
}

export enum BusinessCategory {
  RESTAURANT = "RESTAURANT",
  WELLNESS = "WELLNESS",
  SERVICE = "SERVICE"
}

type EagerPaymentIntent = {
  readonly clientSecret: string;
}

type LazyPaymentIntent = {
  readonly clientSecret: string;
}

export declare type PaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagerPaymentIntent : LazyPaymentIntent

export declare const PaymentIntent: (new (init: ModelInit<PaymentIntent>) => PaymentIntent)

type DonorProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FundraiserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoosterPassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessAdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CouponMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDonorProfile = {
  readonly id: string;
  readonly userSub?: string | null;
  readonly totalRaised?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonorProfile = {
  readonly id: string;
  readonly userSub?: string | null;
  readonly totalRaised?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DonorProfile = LazyLoading extends LazyLoadingDisabled ? EagerDonorProfile : LazyDonorProfile

export declare const DonorProfile: (new (init: ModelInit<DonorProfile, DonorProfileMetaData>) => DonorProfile) & {
  copyOf(source: DonorProfile, mutator: (draft: MutableModel<DonorProfile, DonorProfileMetaData>) => MutableModel<DonorProfile, DonorProfileMetaData> | void): DonorProfile;
}

type EagerFundraiser = {
  readonly id: string;
  readonly title?: string | null;
  readonly dollarsRaised?: number | null;
  readonly dollarsGoal?: number | null;
  readonly raiseByDate?: string | null;
  readonly businessBool?: boolean | null;
  readonly businessPromo?: string | null;
  readonly donors?: string | null;
  readonly image?: string | null;
  readonly fundee?: string | null;
  readonly isActive?: boolean | null;
  readonly businessID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFundraiser = {
  readonly id: string;
  readonly title?: string | null;
  readonly dollarsRaised?: number | null;
  readonly dollarsGoal?: number | null;
  readonly raiseByDate?: string | null;
  readonly businessBool?: boolean | null;
  readonly businessPromo?: string | null;
  readonly donors?: string | null;
  readonly image?: string | null;
  readonly fundee?: string | null;
  readonly isActive?: boolean | null;
  readonly businessID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fundraiser = LazyLoading extends LazyLoadingDisabled ? EagerFundraiser : LazyFundraiser

export declare const Fundraiser: (new (init: ModelInit<Fundraiser, FundraiserMetaData>) => Fundraiser) & {
  copyOf(source: Fundraiser, mutator: (draft: MutableModel<Fundraiser, FundraiserMetaData>) => MutableModel<Fundraiser, FundraiserMetaData> | void): Fundraiser;
}

type EagerBoosterPass = {
  readonly id: string;
  readonly isUsed: boolean;
  readonly userID: string;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoosterPass = {
  readonly id: string;
  readonly isUsed: boolean;
  readonly userID: string;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BoosterPass = LazyLoading extends LazyLoadingDisabled ? EagerBoosterPass : LazyBoosterPass

export declare const BoosterPass: (new (init: ModelInit<BoosterPass, BoosterPassMetaData>) => BoosterPass) & {
  copyOf(source: BoosterPass, mutator: (draft: MutableModel<BoosterPass, BoosterPassMetaData>) => MutableModel<BoosterPass, BoosterPassMetaData> | void): BoosterPass;
}

type EagerBusinessAdmin = {
  readonly id: string;
  readonly email?: string | null;
  readonly phonenumber?: string | null;
  readonly username?: string | null;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessAdmin = {
  readonly id: string;
  readonly email?: string | null;
  readonly phonenumber?: string | null;
  readonly username?: string | null;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessAdmin = LazyLoading extends LazyLoadingDisabled ? EagerBusinessAdmin : LazyBusinessAdmin

export declare const BusinessAdmin: (new (init: ModelInit<BusinessAdmin, BusinessAdminMetaData>) => BusinessAdmin) & {
  copyOf(source: BusinessAdmin, mutator: (draft: MutableModel<BusinessAdmin, BusinessAdminMetaData>) => MutableModel<BusinessAdmin, BusinessAdminMetaData> | void): BusinessAdmin;
}

type EagerBusiness = {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly coupons?: (Coupon | null)[] | null;
  readonly category: BusinessCategory | keyof typeof BusinessCategory;
  readonly adminSub?: string | null;
  readonly contact?: string | null;
  readonly logo?: string | null;
  readonly fundraisers?: (Fundraiser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusiness = {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly coupons: AsyncCollection<Coupon>;
  readonly category: BusinessCategory | keyof typeof BusinessCategory;
  readonly adminSub?: string | null;
  readonly contact?: string | null;
  readonly logo?: string | null;
  readonly fundraisers: AsyncCollection<Fundraiser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business, BusinessMetaData>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}

type EagerCoupon = {
  readonly id: string;
  readonly couponType?: CouponType | keyof typeof CouponType | null;
  readonly currentPrice?: number | null;
  readonly discountPrice?: number | null;
  readonly itemDescription: string;
  readonly startDate: string;
  readonly expirationDate: string;
  readonly businessID: string;
  readonly termsAndConditions: string;
  readonly couponImage?: string | null;
  readonly boosterDonation?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoupon = {
  readonly id: string;
  readonly couponType?: CouponType | keyof typeof CouponType | null;
  readonly currentPrice?: number | null;
  readonly discountPrice?: number | null;
  readonly itemDescription: string;
  readonly startDate: string;
  readonly expirationDate: string;
  readonly businessID: string;
  readonly termsAndConditions: string;
  readonly couponImage?: string | null;
  readonly boosterDonation?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coupon = LazyLoading extends LazyLoadingDisabled ? EagerCoupon : LazyCoupon

export declare const Coupon: (new (init: ModelInit<Coupon, CouponMetaData>) => Coupon) & {
  copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon, CouponMetaData>) => MutableModel<Coupon, CouponMetaData> | void): Coupon;
}

type EagerProduct = {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product, ProductMetaData>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

type EagerCartProduct = {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product?: Product | null;
  readonly productTitle?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartProductProductId?: string | null;
}

type LazyCartProduct = {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly productTitle?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartProductProductId?: string | null;
}

export declare type CartProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProduct : LazyCartProduct

export declare const CartProduct: (new (init: ModelInit<CartProduct, CartProductMetaData>) => CartProduct) & {
  copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct, CartProductMetaData>) => MutableModel<CartProduct, CartProductMetaData> | void): CartProduct;
}

type EagerOrderProduct = {
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID?: string | null;
  readonly product?: Product | null;
  readonly orderID?: string | null;
  readonly order?: Order | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductProductId?: string | null;
  readonly orderProductOrderId?: string | null;
}

type LazyOrderProduct = {
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID?: string | null;
  readonly product: AsyncItem<Product | undefined>;
  readonly orderID?: string | null;
  readonly order: AsyncItem<Order | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductProductId?: string | null;
  readonly orderProductOrderId?: string | null;
}

export declare type OrderProduct = LazyLoading extends LazyLoadingDisabled ? EagerOrderProduct : LazyOrderProduct

export declare const OrderProduct: (new (init: ModelInit<OrderProduct, OrderProductMetaData>) => OrderProduct) & {
  copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct, OrderProductMetaData>) => MutableModel<OrderProduct, OrderProductMetaData> | void): OrderProduct;
}

type EagerOrder = {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order, OrderMetaData>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}