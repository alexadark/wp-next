import { requestTag, requestTagSlugs } from "../../lib/api"
import { PostEntry } from "../../components/post"
import { useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const Category = ({ tag = {}, slug }) => {
  const { data } = useQuery(["tag", slug], () => requestCategory(slug), {
    initialData: tag,
  })

  const { description, name, posts } = data?.tag || {}
  return (
    <>
      <h1>Posts for {name}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      {posts?.nodes?.map((post) => (
        <PostEntry key={post.slug} post={post} location="archive" />
      ))}
      <ReactQueryDevtools />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await requestTag(params.slug)

  return {
    props: {
      tag: data,
      slug: params.slug,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allTags = await requestTagSlugs()
  return {
    paths: allTags?.nodes?.map((tag) => `/${tag.slug}`) || [],
    fallback: true,
  }
}

export default Category
