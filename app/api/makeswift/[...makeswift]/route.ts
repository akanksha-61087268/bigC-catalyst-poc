import { MakeswiftApiHandler } from "@makeswift/runtime/next/server"
import { strict } from "assert"

import { runtime } from "../../../../makeswift/runtime"

strict(process.env.MAKESWIFT_SITE_API_KEY, "4327896a-9649-4ef2-ba82-45eebffb3cd7")


const handler = MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
  runtime,
})

export { handler as GET, handler as POST }
