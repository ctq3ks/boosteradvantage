// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CouponCategory = {
  "RESTAURANT": "RESTAURANT",
  "SALON": "SALON",
  "SERVICE": "SERVICE"
};

const { BoosterPass, User, Coupon, Business } = initSchema(schema);

export {
  BoosterPass,
  User,
  Coupon,
  Business,
  CouponCategory
};