import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeBasicPage } from "components/node--basic-page"
import { NodeAnnonceTeaser } from "components/node--annonce--teaser"

interface IndexPageProps {
  node: DrupalNode[]
  three_last_adds: DrupalNode[]
}

export default function IndexPage({ node, three_last_adds }) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <NodeBasicPage node={node} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Fetch the node from Drupal.
  const node = await drupal.getResource(
    "node--page",
    "7acbbc7a-e35c-4d4e-a3a8-43b45ef392ca"
  )

  // Pass the node as props to the AboutPage.
  return {
    props: {
      node,
    },
  }
}
