import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { MainPage } from "pages/MainPage/LazyMainPage"

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={"/all"} />} />
        <Route path="/*" element={<MainPage />} />
      </Route>
    </Routes>
  )
}
