import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return (
        <div className="card mb-4">
            <Link to={slug}><Img className="card-image-top" fluid={fluid} /></Link>
            <div className="card-body">
            <h5 className="card-title"><Link to={slug}>{title}</Link></h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span className="text-info">{date}</span> by 
                    <span className="text-info"> {author}</span>
                </h6>
                <ul style={{ padding: 0, display: 'inline-flex', listStyle: 'none' }}>
                    {tags.map(tag => (
                        <li className="mr-2" key={tag}>
                            <Link to={`/tags/${slugify(tag)}`}><span className="badge badge-primary text-uppercase">{tag}</span></Link>
                        </li>
                    ))}
                </ul>
                <p className="card-text">
                    {body}
                </p>
                <Link to={slug}><button className="btn btn-primary float-right">Read more</button></Link>
            </div>
        </div>
    )
}

export default Post;