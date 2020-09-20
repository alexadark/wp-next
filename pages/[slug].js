import { request, gql } from "graphql-request"

const Page = ({ page }) => {
  return <h1>{page?.title}</h1>
}

const API_URL = "https://starter.gatsby-wp.com/graphql"

const GET_PAGE = gql`
  query pageBySlug($id: ID!) {
    page(id: $id, idType: URI) {
      title
      slug
      databaseId
      content
    }
  }
`

const ALL_PAGES_SLUGS = gql`
  query allPagesSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`

export const getStaticProps = async ({ params }) => {
  const data = await request(API_URL, GET_PAGE, { slug: params.slug })

  return {
    props: {
      page: data.page,
    },
  }
}

export const getStaticPaths = async () => {
  const allPages = await request(API_URL, ALL_PAGES_SLUGS)

  return {
    paths: allPages?.nodes?.map((page) => `/${page?.slug}`) || [],
    fallback: true,
  }
}

export default Page
