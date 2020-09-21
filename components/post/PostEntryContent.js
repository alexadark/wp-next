/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { gutenbergStyles } from "../../styles"

export const PostEntryContent = ({ post = {}, location, ...props }) => {
  const content = location === "single" ? post?.content : post?.excerpt
  const attributes = location === "single" ? { id: "content" } : {}
  return (
    <Box {...attributes} sx={{ ...gutenbergStyles }} {...props}>
      <Box className="entry-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  )
}
