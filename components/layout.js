import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from "next/router";

export default function Layout({children, title}) {
  const router = useRouter()
  
  const isMenuActive = (menu) => {
    if (router.pathname === '/' && menu === 'home') return 'nav-link active'
    return router.pathname.includes(menu) ? 'nav-link active' : 'nav-link'
  }
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title}/>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand js-in-css">Next101</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link href="/">
                  <li className="nav-item">
                    <a className={isMenuActive('home')} aria-current="page">Home</a>
                  </li>
                </Link>
                <Link href="/teams">
                  <li className="nav-item">
                    <a className={isMenuActive('teams')} aria-current="page">Teams</a>
                  </li>
                </Link>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer>place footer...</footer>
      
      <style jsx>{`
        .js-in-css {
          color: red;
          pointer-events: none;
          cursor: default;
        }

        footer {
          margin-top: 500px;
        }
      `}</style>
    </>
  )
}