import { gql } from "graphql-request"

export const GET_PAGE = gql`
  query($id: ID!) {
    page(id: $id, idType: URI) {
      title
      slug
      databaseId
      content
    }
  }
`

export const ALL_PAGES_SLUGS = gql`
  query {
    pages {
      nodes {
        slug
      }
    }
  }
`

export const GET_POST = gql`
  fragment postFragment on Post {
    id
    uri
    slug
    title
    excerpt
    date
    content

    featuredImage {
      node {
        sourceUrl
        srcSet
        altText
      }
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }

    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
      }
    }
    tags {
      nodes {
        name
        slug
        uri
      }
    }
  }
  query($id: ID!) {
    post(id: $id, idType: SLUG) {
      ...postFragment
    }
  }
`

export const ALL_POSTS_SLUGS = gql`
  query {
    posts {
      nodes {
        slug
      }
    }
  }
`

export const ALL_CATS_SLUGS = gql`
  query {
    categories {
      nodes {
        slug
      }
    }
  }
`

export const ALL_TAGS_SLUGS = gql`
  query {
    tags {
      nodes {
        slug
      }
    }
  }
`

export const ALL_USERS_SLUGS = gql`
  query {
    users {
      nodes {
        slug
      }
    }
  }
`

export const GET_ALL_POSTS = gql`
  query {
    posts(first: 10) {
      nodes {
        id
        uri
        slug
        title
        excerpt
        date

        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            slug
            name
            uri
          }
        }

        author {
          node {
            name
            slug
            uri
            avatar {
              url
            }
          }
        }
        tags {
          nodes {
            name
            slug
            uri
          }
        }
      }
    }
  }
`

export const GET_CATEGORY = gql`
  query($id: ID!) {
    category(id: $id, idType: SLUG) {
      uri
      name
      description
      posts(first: 10) {
        nodes {
          id
          uri
          slug
          title
          excerpt
          date

          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              id
              slug
              name
              uri
            }
          }

          author {
            node {
              name
              slug
              uri
              avatar {
                url
              }
            }
          }
          tags {
            nodes {
              name
              slug
              uri
            }
          }
        }
      }
    }
  }
`

export const GET_TAG = gql`
  query($id: ID!) {
    tag(id: $id, idType: SLUG) {
      uri
      name
      description
      posts(first: 10) {
        nodes {
          id
          uri
          slug
          title
          excerpt
          date

          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              id
              slug
              name
              uri
            }
          }

          author {
            node {
              name
              slug
              uri
              avatar {
                url
              }
            }
          }
          tags {
            nodes {
              name
              slug
              uri
            }
          }
        }
      }
    }
  }
`

export const GET_USER = gql`
  query($id: ID!) {
    user(id: $id, idType: SLUG) {
      uri
      name
      description
      avatar {
        url
      }
      posts(first: 10) {
        nodes {
          id
          uri
          slug
          title
          excerpt
          date

          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              id
              slug
              name
              uri
            }
          }

          author {
            node {
              name
              slug
              uri
              avatar {
                url
              }
            }
          }
          tags {
            nodes {
              name
              slug
              uri
            }
          }
        }
      }
    }
  }
`
