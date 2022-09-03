import { IBlog } from "../@types"
import { callAPI } from "./base";

export const getBlogs = () => callAPI<IBlog[]>("blogs", "GET", {});

export const getBlog = (slug: string) => callAPI<IBlog>(`blogs/${slug}`, "GET", {});