import React from 'react'
//import Helmet from 'react-helmet';
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import SEO from '../components/seo'
import { slugify } from '../util/utilityFunctions'

export default function SinglePost({ data }) {
    const post = data.markdownRemark.frontmatter;
    
    return (
        <Layout>
            <SEO 
                title={post.title}
                description="I'm a Software Developer currently working at PetExec. I've got more than 8 years of experience in a wide range of technologies. I've developed application programming interfaces (API), mobile applications, and web applications. If you have any cool projects or opportunities get in touch!"
                lang="en"
                keywords={['blog']} 
            />
            <div className="container">
                <div className="row" style={{ marginTop: '8rem' }}>
                    <div className="col-12">
                        <h1 className="my-4 text-center">{post.title}</h1>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                            <div className="card-body">
                                <div className="card-subtitle">
                                    <span className="text-info">{post.date}</span> by 
                                    <span className="text-info"> {post.author}</span>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
                                <ul style={{ padding: 0, display: 'inline-flex', listStyle: 'none' }}>
                                    {post.tags.map(tag => (
                                        <li className="mr-2" key={tag}>
                                            <Link to={`/tags/${slugify(tag)}`}><span className="badge badge-primary text-uppercase">{tag}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }) {
            id
            html
            frontmatter {
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image {
                    childImageSharp {
                        fluid (maxWidth: 700) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`