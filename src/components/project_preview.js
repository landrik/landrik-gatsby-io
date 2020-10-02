import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'


const ProjectPreview = ({ title, imageData, slug  }) => (
    <li className="shot col-md-4">
        <figure>
        <Image 
        fluid={imageData} 
        alt={title} 
        style={{ minHeight: '100%', minWidth:'100%' }}
        imgStyle={{ objectFit: 'cover' }} 
        />    
            <figcaption>
                <div className="caption-content">
                    <h3 className="entry-title">{title}</h3>
                    <ul className="portfolio-navigation">
                        <li className="portfolio-trigger" data-folder="proj1">
                            <Link to={`/${slug}/`}><i className="icon-eye"></i></Link>
                            
                        </li>
                    </ul>
                </div>
            </figcaption>
        </figure>
    </li>    
)

export default ProjectPreview;
