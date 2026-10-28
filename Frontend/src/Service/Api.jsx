import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000" });

export async function addProductAxiosFunction(data) {
  return api.post("/services", data);
}

export function createOrder(data) {
  return api.post("/orders", data);
}

export function updateOrderStatus(orderId, status) {
  return api.patch(`/orders/${orderId}/status`, { status });
}

export default api;