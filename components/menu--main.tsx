import { DrupalMenuLinkContent } from "next-drupal"
import Link from "next/link"

interface MenuMainProps {
    items: DrupalMenuLinkContent[]
  }
  
  export function MenuMain({ items }: MenuMainProps) {
    console.log(items)
    return (
        <nav>
        <ul className="flex flex-col items-center justify-center w-full pt-8 space-y-6 md:pt-0 md:space-y-0 md:flex-row md:space-x-14">
          {items.map((item) => {
  
            return (
              <li key={item.id}>
                <Link href={item.url} passHref>
                    {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
}
