/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "next/link"

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Link href={`${item.uri}`}>
    <a
      aria-label={`visit ${taxName} ${item.name} page`}
      sx={{ mr: `xxs`, mb: `xs`, variant: `buttons.primary.small` }}
      {...props}
    >
      {item.name}
    </a>
  </Link>
)
