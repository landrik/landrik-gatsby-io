import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectPreview from '../components/project_preview'



const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
      {
        allProjectsJson {
          edges {
            node {
              title
              slug
              thumbnailImage {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  `);

    const projects = data.allProjectsJson.edges;

    return (
        <Layout>
            <SEO title="Page two" />
            <h2 className="section-title">Selected Projects</h2>
            <div className="row">
                <div className="col-md">
                    <ul className="projects grids">
                        {projects.map(({ node:project }) => {
                            const title = project.title;
                            const slug = project.slug;
                            const imageData = project.thumbnailImage.childImageSharp.fluid;
                            return(
                                <ProjectPreview 
                                    title={title}
                                    imageData={imageData} 
                                    slug={slug}
                                />
                            )
                        })}
                    </ul>
                </div>   
            </div>    
        </Layout>
    );
}

export default ProjectsPage;
