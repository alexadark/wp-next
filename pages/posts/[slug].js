import { requestPost, requestAllPostSlugs } from "../../lib/api"
import { PostEntry, PostEntryInfo } from "../../components/post"
import { useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const Post = ({ post = {}, slug }) => {
  const { data } = useQuery(["post", slug], () => requestPost(slug), {
    initialData: post,
    // refetchInterval: 1000,
  })

  return (
    <>
      <PostEntry location="single" post={data.post} />
      <ReactQueryDevtools />
    </>
  )
}

// export const getServerSideProps = async ({ params }) => {
//   const data = await requestPost(params.slug)

//   return {
//     props: {
//       post: data.post,
//     },
//   }
// }

export const getStaticProps = async ({ params }) => {
  const data = await requestPost(params.slug)

  return {
    props: {
      post: data,
      slug: params.slug,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allPosts = await requestAllPostSlugs()
  return {
    paths: allPosts?.nodes?.map((post) => `/${post?.slug}`) || [],
    fallback: true,
  }
}

export default Post
