import axios from "axios";
import { BASE_URL_FROM_ENV } from "@env";
import { store } from "../app/store";
import { deleteToken } from "../features/AuthSlice";

const api = axios.create({
  baseURL: BASE_URL_FROM_ENV,
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if the error is from axios
    if (axios.isAxiosError(error)) {
      const { response } = error;

      // Check if response status is 500 or error message indicates unauthorized access
      if (
        response &&
        (response.status === 500 ||
          response.data?.desc === "You are not authorized to access this API.")
      ) {
        handleUnauthorizedAccess();
      }
    }

    // Reject the promise to propagate the error further
    return Promise.reject(error);
  }
);

// Function to handle unauthorized access
const handleUnauthorizedAccess = () => {
  // Perform logout or other necessary actions
  store.dispatch(deleteToken());
};

export default api;
