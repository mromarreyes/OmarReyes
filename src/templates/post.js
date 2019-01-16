import React from 'react'
//import Helmet from 'react-helmet';
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({data}) {
    const { markdownRemark: post } = data;
    
    return (
        <Layout>
            <SEO 
                title={post.frontmatter.title}
                description="I'm a Software Developer currently working at PetExec. I've got more than 8 years of experience in a wide range of technologies. I've developed application programming interfaces (API), mobile applications, and web applications. If you have any cool projects or opportunities get in touch!"
                lang="en"
                keywords={['blog']} 
            />
            <div className="text-center" style={{ marginTop: '5rem' }}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`