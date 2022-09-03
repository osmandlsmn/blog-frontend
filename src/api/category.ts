import { callAPI } from "./base";

export const getCategories = () => callAPI("/blogs", "GET");