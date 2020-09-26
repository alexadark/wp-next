import { requestPage, requestAllPageSlugs } from "../lib/api"
import { useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

const Page = ({ page = {}, slug }) => {
  const { data } = useQuery(["page", slug], () => requestPage(slug), {
    initialData: page,
    // refetchInterval: 1000,
  })
  return (
    <>
      <h1>{data?.page?.title}</h1>
      <ReactQueryDevtools />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await requestPage(params.slug)

  return {
    props: {
      page: data,
      slug: params.slug,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allPages = await requestAllPageSlugs()
  return {
    paths: allPages?.nodes?.map((page) => `/${page?.slug}`) || [],
    fallback: true,
  }
}

export default Page
