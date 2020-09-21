/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Link from "next/link"

export const PostEntryTitle = ({ post = {}, location, ...props }) => {
  const { title, slug } = post

  return (
    <>
      {location === "single" ? (
        <h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        // eslint-disable-next-line react/jsx-pascal-case
        <Styled.h1 as="h2" className="entry-title" {...props}>
          <Link
            href={`posts/${slug}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Styled.h1>
      )}
    </>
  )
}
