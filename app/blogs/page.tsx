"use client"


import ConstructionBlog from "@/components/blog-page/blog/blogs"
import BlogsHero from "@/components/blog-page/hero/blog-hero"


export default function BlogsPage() {
  return (
    <div className="relative">

      <BlogsHero />
      <ConstructionBlog />

    </div>
  )
}
