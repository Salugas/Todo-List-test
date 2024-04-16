import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import Header from "../../models/Header/Header"
import Container from "components/Container/Container"

const Layout = () => {
  return (
    <Container>
      <header>
        <Header />
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}

export default Layout
