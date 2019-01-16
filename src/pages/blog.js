import React from 'react'
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/Post';
import Sidebar from '../components/sidebar';

const BlogPage = () => (
    <Layout>
        <SEO 
            title="Blog"
            description="I'm a Software Developer currently working at PetExec. I've got more than 8 years of experience in a wide range of technologies. I've developed application programming interfaces (API), mobile applications, and web applications. If you have any cool projects or opportunities get in touch!"
            lang="en"
            keywords={['blog']} 
        />
        <div className="container">
            <div className="row" style={{ marginTop: '8rem' }}>
                <div className="col-12">
                    <h1 className="my-4 text-center">Blog</h1>
                </div>
                <div className="col-md-8">
                    <StaticQuery query={blogQuery} render={data => (
                        <>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Post
                                    key={node.id}
                                    title={node.frontmatter.title} 
                                    author={node.frontmatter.author}
                                    slug={node.fields.slug}
                                    date={node.frontmatter.date}
                                    body={node.excerpt}
                                    fluid={node.frontmatter.image.childImageSharp.fluid}
                                    tags={node.frontmatter.tags}
                                />
                            ))}
                        </>
                    )} />
                </div>
                <div className="col-md-4">
                    <Sidebar />
                </div>
            </div>
        </div>
    </Layout>
)

const blogQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges{
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        author
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

export default BlogPage
