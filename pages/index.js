import Head from "next/head"
import { requestAllPosts } from "../lib/api"
import Link from "next/link"

const Blog = ({ posts }) => {
  console.log("posts", posts)
  return (
    <>
      <h1>Blog</h1>
      {posts?.map((post) => {
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
    </>
  )
}

export const getStaticProps = async () => {
  const data = await requestAllPosts()

  return {
    props: {
      posts: data.posts.nodes,
    },
  }
}

export default Blog
