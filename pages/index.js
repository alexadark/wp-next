import Head from "next/head"
import { requestAllPosts } from "../lib/api"
import Link from "next/link"
import { useQuery } from "react-query"
import { PostEntry } from "../components"
import { ReactQueryDevtools } from "react-query-devtools"

const Blog = ({ posts = {} }) => {
  const { data } = useQuery(["posts"], requestAllPosts, {
    initialData: posts,
    // refetchInterval: 1000,
  })
  console.log("posts", posts.posts.nodes)

  return (
    <>
      {data?.posts?.nodes?.map((post) => (
        <PostEntry key={post.slug} post={post} />
      ))}
      <ReactQueryDevtools />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await requestAllPosts()

  return {
    props: {
      posts: data,
    },
    revalidate: 1,
  }
}

export default Blog
