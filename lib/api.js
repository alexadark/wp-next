import { config } from "../config"
const API_URL = `${config.wpUrl}/graphql`
import { request } from "graphql-request"
import {
  GET_PAGE,
  GET_POST,
  ALL_PAGES_SLUGS,
  ALL_POSTS_SLUGS,
  GET_ALL_POSTS,
} from "./querys"

const requestAPI = async (query, variables = {}) => {
  return await request(API_URL, query, variables)
}

export const requestPage = async (slug) => {
  return await requestAPI(GET_PAGE, { id: slug })
}

export const requestAllPageSlugs = async () => {
  return await requestAPI(ALL_PAGES_SLUGS)
}

export const requestPost = async (slug) => {
  return await requestAPI(GET_POST, { id: slug })
}

export const requestAllPostSlugs = async () => {
  return await requestAPI(ALL_POSTS_SLUGS)
}

export const requestAllPosts = async () => {
  return await requestAPI(GET_ALL_POSTS)
}
