import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/carousel';
import About from '../components/about';
import Work from '../components/work';
const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home"
      description="I'm a Software Developer currently working at PetExec. I've got more than 8 years of experience in a wide range of technologies. I've developed application programming interfaces (API), mobile applications, and web applications. If you have any cool projects or opportunities get in touch!"
      lang="en"
      keywords={['HTML', 'CSS', 'XML', 'JavaScript', 'ASU', 'Arizona State University', 'MySQL', 'PostgreSQL', 'CSS3', 'Bootstrap', 'ES6', 'React', 'AWS', 'API Gateway', 'Cognito', 'Lambda', 'S3', 'Serverless', 'GraphQL', 'NodeJS', 'PHP', 'RESTful', 'Java', 'Swift', 'React Native', 'PetExec', 'PetExec Mobile', 'PetExec API', 'Top Dog Daycare']} 
    />
    { /* Carousel */ }
    <Carousel />

    { /* About */ }
    <About />

    { /* Work */ }
    <Work />
  </Layout>
)

export default IndexPage
