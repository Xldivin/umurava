import Mock from "fake-db/mock";
import { banks } from "./banks";
import { brands } from "./brand";
import { categories } from "./categories";
import { customers } from "./customers";
import { cardList, recentPurchase, stockOutProducts } from "./data";
import { degrees } from "./degrees";
import { earningHistory } from "./earning-history";
import { orders } from "./orders";
import { packagePayments } from "./package-payments";
import { payoutRequests } from "./payout-requests";
import { payouts } from "./payouts";
import { products } from "./products";
import { refundRequest } from "./refundRequests";
import { reviews } from "./reviews";
import { sellers } from "./sellers";
import { services } from "./services";
import { skills } from "./skills";
import { titles } from "./titles";
import { user_degrees } from "./user-degree";
import { user_skills } from "./user-skills";
import { user_titles } from "./user-titles";

Mock.onGet("/api/dashboard-cards").reply(() => {
  try {
    return [200, cardList];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/recent-purchase").reply(() => {
  try {
    return [200, recentPurchase];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/stock-out-products").reply(() => {
  try {
    return [200, stockOutProducts];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/products").reply(() => {
  try {
    return [200, products];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/titles").reply(() => {
  try {
    return [200, titles];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
Mock.onGet("/api/degrees").reply(() => {
  try {
    return [200, degrees];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/skills").reply(() => {
  try {
    return [200, skills];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/user-skills").reply(() => {
  try {
    return [200, user_skills];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/user-degrees").reply(() => {
  try {
    return [200, user_degrees];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/user-titles").reply(() => {
  try {
    return [200, user_titles];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/services").reply(() => {
  try {
    return [200, services];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/banks").reply(() => {
  try {
    return [200, banks];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/category").reply(() => {
  try {
    return [200, categories];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/brands").reply(() => {
  try {
    return [200, brands];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/reviews").reply(() => {
  try {
    return [200, reviews];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/orders").reply(() => {
  try {
    return [200, orders];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/customers").reply(() => {
  try {
    return [200, customers];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/refund-requests").reply(() => {
  try {
    return [200, refundRequest];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/sellers").reply(() => {
  try {
    return [200, sellers];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/package-payments").reply(() => {
  try {
    return [200, packagePayments];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/earning-history").reply(() => {
  try {
    return [200, earningHistory];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/payouts").reply(() => {
  try {
    return [200, payouts];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/payout-requests").reply(() => {
  try {
    return [200, payoutRequests];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
