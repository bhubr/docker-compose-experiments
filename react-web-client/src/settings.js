const apiServerOrigin =
  import.meta.env.VITE_API_SERVER_ORIGIN || "http://localhost:8000";

export const apiBaseUrl = `${apiServerOrigin}/api`;
