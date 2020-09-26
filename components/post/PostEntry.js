/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  // ReadMoreButton,
  // PrevNextPostNavigation,
} from "./index"

export const PostEntry = ({ post = {}, location, ...props }) => {
  return (
    <article
      className="entry"
      sx={{
        //   ...articleStyles,
        ".entry-content": {
          pb: `m`,
          borderBottom: (t) => `1px solid ${t.colors.border}`,
        },
      }}
      {...props}
    >
      <PostEntryMedia location={location} post={post} className="entry-media" />

      <div className={`content`}>
        <PostEntryTitle
          location={location}
          post={post}
          className="entry-title"
        />
        <PostEntryInfo className="entry-info" post={post} />

        <PostEntryContent location={location} post={post} />

        <div className="entry-footer" sx={{ mt: `xl` }}>
          <PostEntryMeta className="entry-meta" post={post} />
          {/* <ReadMoreButton location={location} post={post} /> */}
        </div>
        {/* {location === 'single' && (
            <>
              <SocialShare
                url={normalize(`/${post.uri}`)}
                title={post.title}
                media={media}
              />
              <PrevNextPostNavigation ctx={ctx} />
            </>
          )} */}
      </div>
    </article>
  )
}
