import React from "react"

import Link from "../Link"

import Icon from "../../icons/Icon"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import MDXDocs from "./Link.docs.mdx"

export default {
  title: "Actions/Link",
  component: Link,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const basicLink = () => (
  <p>
    Hello world. <Link href="#">This is a link.</Link>
  </p>
)

export const externalLink = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Link href="/test">Internal Link</Link>
    <Link href="https://www.exygy.com" hideExternalLinkIcon>
      External Link (Same Window)
    </Link>
    <Link href="https://www.exygy.com" newWindowTarget>
      External Link (New Window)
    </Link>
  </div>
)

export const linksWithIcons = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Link href="/test" leadIcon={<Icon icon={faHeart} />}>
      Lead Icon
    </Link>
    <Link href="/test" tailIcon={<Icon icon={faHeart} />}>
      Tail Icon
    </Link>
  </div>
)
