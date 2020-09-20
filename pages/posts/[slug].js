import { requestPost, requestAllPostSlugs } from "../../lib/api"

const Post = ({ post }) => {
  return <h1>{post?.title}</h1>
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
      post: data.post,
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
