import { requestPage, requestAllPageSlugs } from "../lib/api"

const Page = ({ page }) => {
  return <h1>{page?.title}</h1>
}
// export const getServerSideProps = async ({ params }) => {
//   const data = await requestPage(params.slug)

//   return {
//     props: {
//       page: data.page,
//     },
//   }
// }

export const getStaticProps = async ({ params }) => {
  const data = await requestPage(params.slug)

  return {
    props: {
      page: data.page,
    },
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
