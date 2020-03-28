import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
    return (
        <Layout>
            <Metadata title="About" description="About Me" />
            <h1>About</h1>
            <h2>Well, this is me!</h2>
        </Layout>
    )
}

export default About