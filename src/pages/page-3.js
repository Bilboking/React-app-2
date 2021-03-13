import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <div className="Hero">
      <div className="HeroGroup">
          <h1>React.js Project Assignment App for Kingsland University</h1>
          <p><b>WELCOME TO PAGE 3</b></p>
         
        
          <Link to="/page-2/">Watch video demo of project</Link> 
           <p><b>GATSBY explanation from Net Ninja</b></p>
    
    <StaticImage
      src="../images/net-ninja-SSG-pic.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Gatsby Explanation from net ninja"
      style={{ marginBottom: `1.45rem` }}
    />

      </div>
      <div className="Cards">
      <h2>Cards to demo components</h2>
      <div className="CardGroup">
      <Card 
        title="Components and props"
        text="What you are seeing here involves components and props"
         />
      <Card 
        title="Reusing the Card component"
        text="What you are seeing here involves components and props"
         />
      <Card 
        title="Reusing Card component"
        text="What you are seeing here involves components and props"
         />
      <Card 
        title="Reusing Card component"
        text="What you are seeing here involves components and props"
         />
      <Card 
        title="Reusing Card component"
        text="What you are seeing here involves components and props"
         />
      <Card 
        title="Reusing Card component"
        text="What you are seeing here involves components and props"
         />
        </div>
      </div>
    </div>   
  </Layout>
)

export default ThirdPage