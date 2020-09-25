import Head from "next/head"
import { requestAllPosts } from "../lib/api"
import Link from "next/link"
import { useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const Blog = ({ posts }) => {
  const { data, isFetching, isLoading } = useQuery(["posts"], requestAllPosts, {
    initialData: posts,
    initialStale: true,
    refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  })

  return (
    <>
      <h1>Blog</h1>
      {/* {isFetching && "...fetching"} */}
      {data.posts.nodes?.map((post) => {
        const { title, excerpt, slug } = post
        return (
          <article key={slug}>
            <h2>
              <Link href={`posts/${slug}`}>
                <a>{title}</a>
              </Link>
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

// export const getServerSideProps = async () => {
//   const data = await requestAllPosts()

//   return {
//     props: {
//       posts: data.posts.nodes,
//     },
//   }
// }

export default Blog
