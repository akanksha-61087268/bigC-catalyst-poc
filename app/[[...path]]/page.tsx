import { getSiteVersion } from "@makeswift/runtime/next/server"
import { notFound } from "next/navigation"
import { Page as MakeswiftPage } from "@makeswift/runtime/next"

import { client } from "../../makeswift/client"

type ParsedUrlQuery = { path?: string[] }

export async function generateStaticParams() {
  const pages = await client.getPages()

  return pages.map(page => ({
    path: page.path.split('/').filter(segment => segment !== ''),
  }))
}

export default async function Page({ params }: { params: ParsedUrlQuery }) {
  const path = "/" + (params?.path ?? []).join("/")
  const snapshot = await client.getPageSnapshot(path, {
    siteVersion: getSiteVersion(),
  })

  if (snapshot == null) return notFound()

  return <MakeswiftPage snapshot={snapshot} />
}