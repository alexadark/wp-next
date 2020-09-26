/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "gatsby"

const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `${prev}`
  }

  return (
    <Link href={previousLink}>
      <a className="left">
        <span>Previous</span>
      </a>
    </Link>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link hreg={`${next}`}>
        <a className="right">
          <span>Next</span>
        </a>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}
