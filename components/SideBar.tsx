import Link from 'next/link'

export default function SideBar({ posts }) {
  //{% if item.url == page.url %}is-active{% endif %}

  return (
    <>
      <div className="grid__item grid__item--tablet-up-quarter" id="SidebarNav">
        <ul className="in-page-menu in-page-menu--vertical">
          {posts.map((i) => (
            <li key={i.id}>
              <Link href="/posts/[id]" as={`/posts/${i.id}`}>
                <a>{i.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <p>
          <a href="https://github.com/keidarcy/nextjs-blog" className="link--external">
            GitHub repository
          </a>
        </p>

        <p>
          <a href="https://shopify.dev/" className="link--external">
            Shopify Developer Docs
          </a>
          <br />
        </p>
      </div>
    </>
  )
}
