import Head from "next/head"
import { requestAllPosts } from "../lib/api"
import Link from "next/link"
import { useQuery, usePaginatedQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const Blog = ({ posts }) => {
  const { data } = useQuery(["posts"], requestAllPosts(), {
    initialData: posts,
    staleTime: 0,
  })

  return (
    <>
      <h1>Blog</h1>
      {data?.map((post) => {
        const { title, excerpt, slug } = post
        return (
          <article key={slug}>
            <h2>
              <Link href={`posts/${slug}`}>{title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </article>
        )
      })}
      <ReactQueryDevtools />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await requestAllPosts()

  return {
    props: {
      posts: data.posts.nodes,
    },
    revalidate: 1,
  }
}

export default Blog
