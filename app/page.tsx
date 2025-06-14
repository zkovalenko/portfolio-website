import ProjectCard from "@/components/project-card"

// Sample project data - you would replace this with your actual projects
const projects = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    category: "Branding",
    thumbnail: "/branding/cover.png?height=600&width=800",
    description:
      "A comprehensive brand identity design for a local coffee shop, including logo, color palette, and brand guidelines.",
  },
  {
    id: "packaging-design",
    title: "Product Packaging",
    category: "Packaging",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "Innovative packaging design for an eco-friendly cosmetics line, focusing on sustainability and visual appeal.",
  },
  {
    id: "editorial-design",
    title: "Magazine Layout",
    category: "Editorial",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description: "Editorial design for a fashion magazine, featuring custom typography and dynamic layouts.",
  },
  {
    id: "web-design",
    title: "E-commerce Website",
    category: "UI/UX",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "User interface and experience design for an online clothing store, optimized for conversion and usability.",
  },
  {
    id: "poster-series",
    title: "Event Poster Series",
    category: "Print",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "A series of posters designed for a music festival, featuring vibrant colors and experimental typography.",
  },
  {
    id: "mobile-app",
    title: "Fitness App Design",
    category: "UI/UX",
    thumbnail: "/placeholder.svg?height=600&width=800",
    description:
      "Mobile application design for a fitness tracking app, focusing on clean interfaces and intuitive navigation.",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hello, I'm <span className="text-gray-900 dark:text-white">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
          A graphic designer passionate about creating meaningful visual experiences through thoughtful design
          solutions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              thumbnail={project.thumbnail}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
