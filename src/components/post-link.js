import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className='blog-link'>
    <h3>{post.frontmatter.title}</h3>
    <p>{post.frontmatter.date}</p>
  </Link>
)

export default PostLink
