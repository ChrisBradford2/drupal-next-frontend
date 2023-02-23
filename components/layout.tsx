import Link from "next/link"

import { PreviewAlert } from "components/preview-alert"
import { MenuMain } from "./menu--main"
import { MenuAccount } from "./menu--account"

export function Layout({ children, menu, account }) {
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <header>
          <div className="container flex items-center justify-between py-6 mx-auto">
            <MenuMain items={menu} />
            |
            <MenuAccount items={account} />
          </div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  )
}
