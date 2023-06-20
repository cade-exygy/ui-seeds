import React from "react"
import { Story } from "@storybook/react"

import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

import Icon, { IconProps } from "../Icon"

import MDXDocs from "./Icon.docs.mdx"

export default {
  title: "Icons/Icon",
  component: Icon,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
  argTypes: {
    size: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: {
        labels: {
          undefined: "Default (undefined)",
        },
      },
    },
  },
}

const Template: Story<IconProps> = ({ size }) => (
  <>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faHouseChimney} size={size} /> house-chimney
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faEnvelope} size={size} /> envelope
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faDoorOpen} size={size} /> door-open
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faPhone} size={size} /> phone
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faCircleUser} size={size} /> circle-user
    </div>
  </>
)

export const icons: Story<IconProps> = Template.bind({})
// es-ignore-next-line
icons.args = {
  size: undefined,
}

export const containerBasedSizes = () => (
  <>
    <div style={{ fontSize: "var(--seeds-font-size-sm)" }}>
      <Icon icon={faDoorOpen} /> door-open
    </div>
    <div style={{ fontSize: "var(--seeds-font-size-lg)" }}>
      <Icon icon={faDoorOpen} /> door-open
    </div>
    <div style={{ fontSize: "var(--seeds-font-size-2xl)" }}>
      <Icon icon={faDoorOpen} /> door-open
    </div>
  </>
)

export const presetSizes = () => (
  <>
    <div>
      <Icon icon={faHouseChimney} size={"sm"} /> house-chimney (sm)
    </div>
    <div>
      <Icon icon={faHouseChimney} size={"md"} /> house-chimney (md)
    </div>
    <div>
      <Icon icon={faHouseChimney} size={"lg"} /> house-chimney (lg)
    </div>
    <div>
      <Icon icon={faHouseChimney} size={"xl"} /> house-chimney (xl)
    </div>
  </>
)

const customSVG = (
  <svg viewBox={"0 0 34 32"}>
    <path
      fill="#ecba16"
      d="M0 17.714c0 2.606 0.87 5.030 2.363 7.053-0.197 2.338-0.76 5.629-2.363 7.232 0 0 4.898-0.688 8.216-2.691 1.843 0.776 3.899 1.213 6.070 1.213 7.89 0 14.286-5.734 14.286-12.808s-6.397-12.808-14.286-12.808c-7.89 0-14.286 5.734-14.286 12.808z"
    ></path>
    <path
      fill="#dd691d"
      d="M33.142 12.808c0-7.074-6.397-12.808-14.286-12.808-5.698 0-10.614 2.99-12.907 7.317 2.347-1.515 5.224-2.41 8.336-2.41 7.89 0 14.286 5.734 14.286 12.808 0 2.706-0.938 5.214-2.536 7.282 3.2 1.546 7.107 2.098 7.107 2.098-1.603-1.603-2.166-4.896-2.363-7.232 1.491-2.022 2.363-4.446 2.363-7.053z"
    ></path>
  </svg>
)

const CustomTemplate: Story<IconProps> = ({ size }) => (
  <div style={{ fontSize: "1.5em" }}>
    <Icon size={size}>{customSVG}</Icon> Chat
  </div>
)

export const customIconUsingSvg: Story<IconProps> = CustomTemplate.bind({})
// es-ignore-next-line
customIconUsingSvg.args = {
  size: undefined,
}
