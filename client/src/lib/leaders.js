import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ resquest, params }) => {
  const res = await apiRequest("/posts" + params.id);
};
