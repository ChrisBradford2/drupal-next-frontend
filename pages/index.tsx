import Head from "next/head"
import { DrupalMenuLinkContent, DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeBasicPage } from "components/node--basic-page"
import { getSession } from "next-auth/react"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"

interface IndexPageProps {
  node: DrupalNode[]
  three_last_adds: DrupalNode[]
  isAuth: boolean
  menu: DrupalMenuLinkContent
  account: DrupalMenuLinkContent
}

export default function IndexPage({ node, isAuth, menu, account }) {
  return (
    <Layout menu={menu} account={account}>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      {isAuth ? <h1>Authenticated</h1> : <h1 className="text-red-500 text-2xl">Not Authenticated</h1>}
      <NodeBasicPage node={node} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // Check if user is authenticated.
  const session = await getSession({ ctx: context })
  
  // Fetch the node from Drupal.
  const node = await drupal.getResource(
    "node--page",
    "7acbbc7a-e35c-4d4e-a3a8-43b45ef392ca"
  )

  const menu = await drupal.getMenu("main")

  const account = await drupal.getMenu("account")

  // Return isAuth true if user is authenticated, false otherwise.
  return {
    props: {
      node: node,
      isAuth: session ? true : false,
      menu: menu.items,
      account: account.items
    },
  }
}
