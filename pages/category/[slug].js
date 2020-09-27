import { requestCategory, requestCatSlugs } from "../../lib/api"
import { PostEntry } from "../../components/post"
import { useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const Category = ({ category = {}, slug }) => {
  const { data } = useQuery(["cat", slug], () => requestCategory(slug), {
    initialData: category,
  })

  const { description, name, posts } = data?.category || {}
  return (
    <>
      <h1>Posts for {name}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      {posts?.nodes?.map((post) => (
        <PostEntry key={post.slug} post={post} />
      ))}
      <ReactQueryDevtools />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await requestCategory(params.slug)

  return {
    props: {
      category: data,
      slug: params.slug,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allCats = await requestCatSlugs()
  return {
    paths: allCats?.nodes?.map((cat) => `/${cat.slug}`) || [],
    fallback: true,
  }
}

export default Category
