import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Sample project data - you would replace this with your actual projects
const projects = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    category: "Branding",
    client: "Local Coffee Shop",
    year: "2023",
    tools: "Adobe Illustrator, Adobe Photoshop, Adobe InDesign",
    thumbnail: "/branding/cover.png?height=600&width=800",
    images: [
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
    ],
    description:
      "Katya comprehensive brand identity design for a local coffee shop, including logo, color palette, and brand guidelines.",
    header: "Coping with the pandemic",
    subheader: "A brand identity design for a local coffee shop",
    challenge:
      "The client needed a complete brand refresh that would appeal to a younger demographic while maintaining their established customer base.",
    solution:
      "I developed a versatile identity system that balanced modern aesthetics with warm, inviting elements that reflected the shop's community-focused values.",
    process:
      "The process began with extensive research into the coffee industry and the local market. I conducted interviews with the owners and customers to understand their needs and preferences. After developing multiple concepts, we refined the chosen direction through several iterations before finalizing the brand system.",
  },
  {
    id: "packaging-design",
    title: "Product Packaging",
    category: "Packaging",
    client: "Eco Beauty",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "Innovative packaging design for an eco-friendly cosmetics line, focusing on sustainability and visual appeal.",
    challenge:
      "Create packaging that communicated the brand's commitment to sustainability while standing out in a crowded market.",
    solution:
      "Designed a packaging system using recycled and biodegradable materials with a minimalist aesthetic that highlighted the natural ingredients.",
    process:
      "The design process involved researching sustainable materials, creating multiple prototypes, and testing different printing techniques to achieve the desired look while minimizing environmental impact.",
  },
  {
    id: "editorial-design",
    title: "Magazine Layout",
    category: "Editorial",
    client: "Fashion Forward Magazine",
    year: "2022",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description: "Editorial design for a fashion magazine, featuring custom typography and dynamic layouts.",
    challenge: "Redesign the magazine to increase reader engagement while maintaining its recognizable identity.",
    solution:
      "Created a flexible grid system that allowed for more dynamic layouts while developing a custom typeface that became a signature element of the publication.",
    process:
      "The redesign began with an audit of the existing publication and competitor analysis. I developed multiple concepts for the new direction, refined the chosen approach, and created comprehensive style guidelines for the editorial team.",
  },
  {
    id: "web-design",
    title: "E-commerce Website",
    category: "UI/UX",
    client: "Modern Apparel",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "User interface and experience design for an online clothing store, optimized for conversion and usability.",
    challenge: "Design an e-commerce experience that simplified the shopping process and increased conversion rates.",
    solution:
      "Developed a clean, intuitive interface with streamlined navigation and checkout process, focusing on mobile-first design principles.",
    process:
      "The project began with user research and journey mapping. I created wireframes and prototypes that were tested with users, iterating based on feedback before finalizing the design system.",
  },
  {
    id: "poster-series",
    title: "Event Poster Series",
    category: "Print",
    client: "Summer Music Festival",
    year: "2022",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "A series of posters designed for a music festival, featuring vibrant colors and experimental typography.",
    challenge:
      "Create a cohesive series of posters that captured the energy of different music genres while maintaining a unified visual identity.",
    solution:
      "Developed a system that used color and typography to differentiate genres while maintaining consistent layout and structural elements.",
    process:
      "The design process involved exploring various typographic treatments and color palettes, creating multiple concepts, and refining the chosen direction to ensure each poster worked individually and as part of the series.",
  },
  {
    id: "mobile-app",
    title: "Fitness App Design",
    category: "UI/UX",
    client: "FitTrack",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "Mobile application design for a fitness tracking app, focusing on clean interfaces and intuitive navigation.",
    challenge: "Design an app that made fitness tracking simple and motivating for users of all experience levels.",
    solution:
      "Created a clean, visually engaging interface with gamification elements to encourage consistent use and progress tracking.",
    process:
      "The design process included competitive analysis, user interviews, wireframing, and prototyping. Multiple iterations were tested with users to refine the experience before finalizing the design system.",
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-600 dark:text-gray-300">
          <div>
            <span className="font-medium">Category:</span> {project.category}
          </div>
          <div>
            <span className="font-medium">Client:</span> {project.client}
          </div>
          <div>
            <span className="font-medium">Year:</span> {project.year}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 px-6 md:px-[46px]">
            <h1 className="text-xl font-semibold mt-6">DATE</h1>
            <p className="text-gray-600 dark:text-gray-300">{project.year}</p>
            
            <h1 className="text-xl font-semibold mt-6">TOOLS</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {project.tools}
            </p>

            <h1 className="text-xl font-semibold mt-6">DESCRIPTION</h1>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-xl font-semibold mb-3">{project.header}</h1>
            
            <p className="mb-3 italic">{project.subheader}</p>
            
            <p className="text-gray-600 dark:text-gray-300 mt-8">{project.challenge}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-8">{project.challenge}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-8">{project.challenge}</p>

          </div>
        </div>
{/* 
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Solution</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{project.solution}</p>

          <h2 className="text-xl font-semibold mb-3">Process</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.process}</p>
        </div> */}

        <div>
          {/* <h2 className="text-xl font-semibold mb-6">Project Gallery</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
