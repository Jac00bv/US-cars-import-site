import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageCarousel2 = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "maincar5.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} />
}

export default ImageCarousel2
