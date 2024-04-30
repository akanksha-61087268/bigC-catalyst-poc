import { ReactRuntime } from "@makeswift/runtime/react"
import { Style } from "@makeswift/runtime/controls"

function HelloWorld(props: any) {
  return <p {...props}>Hello, world!</p>
}

ReactRuntime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Hello, world!",
  props: {
    className: Style(),
  },
})
