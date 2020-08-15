import SideBar from './SideBar'
import Footer from './Footer'
import Header from './Header'

const TopHero = () => (
  <section className="section section--tight section-padding section--padding-top-only ui-hero">
    <div className="grid">
      <div className="grid__item">
        <p className="section-heading__kicker heading--5 hide--mobile">
          Shopify Open Source
        </p>
        <h1 className="section-heading__heading heading--2 ui-hero__header gutter-bottom--reset--mobile">
          Shopify App CLI
        </h1>
        <p className="text-major hide--mobile ui-hero__header">
          Build Shopify apps faster
        </p>
      </div>
    </div>
  </section>
)

const Layout = ({
  children,
  posts
}: {
  children: React.ReactNode
  posts: { id: string; title: string; date: string }[]
}) => {
  return (
    <>
      <Header />
      <div id="PageContainer">
        <TopHero />
        <section id="Content">
          <div className="grid">
            <SideBar posts={posts} />
            {children}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Layout
