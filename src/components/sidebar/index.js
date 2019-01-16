import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

const SideBar = () => (
    <>
        <div className="card mb-4">
            <div className="card-body">
                <div className="card-title text-center text-uppercase mb-3">
                    Newsletter
                </div>
                <div className="form-group text-center">
                    <input className="form-control" type="email" name="email" placeholder="Your email address" />
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success text-uppercase">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="card-title text-center text-uppercase mb-3">
                    Advertisement
                </div>
                <img src="https://via.placeholder.com/320x200" alt="advertisement" style={{ width: '100%' }} />
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="card-title text-center text-uppercase mb-3">
                    Recent Posts
                </div>
                <StaticQuery query={sidebarQuery} render={data => (
                    <div>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id} className="card">
                                <Link to={node.fields.slug}><Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} /></Link>
                                <div className="card-body">
                                    <div className="card-title text-center text-uppercase mb-3">
                                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}/>
            </div>
        </div>
    </>
)

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                fluid (maxWidth: 300) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default SideBar;