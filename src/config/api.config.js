const API_CONFIG_DEV = {
  baseUrl: process.env.REACT_APP_BASE_URL,
};

const API_CONFIG_PROD = {
  baseUrl: process.env.REACT_APP_BASE_URL,
};

export const API_CONFIG =
  process.env.NODE_ENV !== "production" ? API_CONFIG_DEV : API_CONFIG_PROD;
