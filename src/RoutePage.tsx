import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Blog } from "./pages/Blog"
import { BlogItem } from "./pages/BlogItem"

export default function RoutePage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/posts/:id" element={<BlogItem />} />
                </Routes>
            </Router>
        </>
    )
}