import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export interface ProjectCardProps {
  id: string
  title: string
  category: string
  thumbnail: string
  description: string
}

export default function ProjectCard({ id, title, category, thumbnail, description }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="custom-card-size relative overflow-hidden">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{category}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {/* <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p> */}
        </CardContent>
      </Card>
    </Link>
  )
}
