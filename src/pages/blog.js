import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
    <Layout>
        <SEO 
            title="Blog"
            description="I'm a Software Developer currently working at PetExec. I've got more than 8 years of experience in a wide range of technologies. I've developed application programming interfaces (API), mobile applications, and web applications. If you have any cool projects or opportunities get in touch!"
            lang="en"
            keywords={['blog']} 
        />
        <h1 className="text-center" style={{ marginTop: '5rem' }}>Blog coming soon. Check back in a couple days.</h1>
    </Layout>
)

export default BlogPage
