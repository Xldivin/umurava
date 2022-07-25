import axios from "axios";

const getAllCard = async () => {
  const response = await axios.get("/api/dashboard-cards");
  return response.data;
};

const recentPurchase = async () => {
  const response = await axios.get("/api/recent-purchase");
  return response.data;
};

const stockOutProducts = async () => {
  const response = await axios.get("/api/stock-out-products");
  return response.data;
};

const products = async () => {
  const response = await axios.get("/api/products");
  return response.data;
};

const categories = async () => {
  const response = await axios.get("/api/categories");
  return response.data;
};

const services = async () => {
  const response = await axios.get("/api/services");
  return response.data;
};

const companies = async () => {
  const response = await axios.get("/api/companies");
  return response.data;
};

const jobs = async () => {
  const response = await axios.get("/api/jobs");
  return response.data;
};

const applications = async () => {
  const response = await axios.get("/api/applications");
  return response.data;
};

const talents = async () => {
  const response = await axios.get("/api/talents");
  return response.data;
};

const skills = async () => {
  const response = await axios.get("/api/skills");
  return response.data;
};
const degrees = async () => {
  const response = await axios.get("/api/degrees");
  return response.data;
};

const titles = async () => {
  const response = await axios.get("/api/titles");
  return response.data;
};

const userTitles = async () => {
  const response = await axios.get("/api/user-titles");
  return response.data;
};

const userSkills = async () => {
  const response = await axios.get("/api/user-skills");
  return response.data;
};

const userDegrees = async () => {
  const response = await axios.get("/api/user-degrees");
  return response.data;
};

const category = async () => {
  const response = await axios.get("/api/category");
  return response.data;
};

const brands = async () => {
  const response = await axios.get("/api/brands");
  return response.data;
};

const reviews = async () => {
  const response = await axios.get("/api/reviews");
  return response.data;
};

const orders = async () => {
  const response = await axios.get("/api/orders");
  return response.data;
};

const customers = async () => {
  const response = await axios.get("/api/customers");
  return response.data;
};

const refundRequests = async () => {
  const response = await axios.get("/api/refund-requests");
  return response.data;
};

const sellers = async () => {
  const response = await axios.get("/api/sellers");
  return response.data;
};

const packagePayments = async () => {
  const response = await axios.get("/api/package-payments");
  return response.data;
};

const earningHistory = async () => {
  const response = await axios.get("/api/earning-history");
  return response.data;
};

const payouts = async () => {
  const response = await axios.get("/api/payouts");
  return response.data;
};

const payoutRequests = async () => {
  const response = await axios.get("/api/payout-requests");
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  brands,
  orders,
  reviews,
  sellers,
  payouts,
  products,
  category,
  customers,
  getAllCard,
  payoutRequests,
  recentPurchase,
  refundRequests,
  earningHistory,
  packagePayments,
  stockOutProducts,
  services,
  companies,
  jobs,
  applications,
  talents,
  skills,
  titles,
  userTitles,
  userSkills,
  degrees,
  userDegrees,
  
};
