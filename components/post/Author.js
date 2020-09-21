/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "next/link"

export const Author = ({ post = {}, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <Link aria-label={`visit ${name} page`} href={`/author/${slug}`} {...props}>
      {name}
    </Link>
  )
}
