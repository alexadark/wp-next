import { requestUser, requestUserSlugs } from "../../lib/api"
import { PostEntry } from "../../components/post"
import { useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const User = ({ user = {}, slug }) => {
  const { data } = useQuery(["user", slug], () => requestUser(slug), {
    initialData: user,
  })

  const { description, name, posts, avatar } = data?.user || {}
  return (
    <>
      <h1>Posts from {name}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <img src={avatar?.url} alt="" />
      {posts?.nodes?.map((post) => (
        <PostEntry key={post.slug} post={post} location="archive" />
      ))}
      <ReactQueryDevtools />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await requestUser(params.slug)

  return {
    props: {
      user: data,
      slug: params.slug,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allUsers = await requestUserSlugs()
  return {
    paths: allUsers?.nodes?.map((cat) => `/${cat.slug}`) || [],
    fallback: true,
  }
}

export default User
