/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "next/link"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link href={`/posts/${post.url}`}>
      <a aria-label="View the entire post">{children}</a>
    </Link>
  )

export const PostEntryMedia = ({ post = {}, location, ...props }) => {
  const img = post?.featuredImage?.node
  console.log("img", img)
  return (
    <>
      {img && (
        <WithLink location={location} post={post}>
          <div className="entry-media" {...props}>
            <img srcset={img.srcSet} src={img.sourceURL} alt={img.altText} />
          </div>
        </WithLink>
      )}
    </>
  )
}