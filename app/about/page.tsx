import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Your Name - Portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Hello, I'm Your Name</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a graphic designer who recently graduated with a Bachelor of Fine Arts in Graphic Design. My passion
            lies in creating meaningful visual experiences that communicate effectively and leave a lasting impression.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            During my studies, I focused on developing a versatile skill set across various design disciplines,
            including branding, typography, editorial design, packaging, and digital interfaces. I believe in a
            research-driven approach to design, where understanding the context and audience is just as important as the
            visual execution.
          </p>

          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            <li className="text-gray-600 dark:text-gray-300">Brand Identity</li>
            <li className="text-gray-600 dark:text-gray-300">Typography</li>
            <li className="text-gray-600 dark:text-gray-300">Editorial Design</li>
            <li className="text-gray-600 dark:text-gray-300">Packaging Design</li>
            <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
            <li className="text-gray-600 dark:text-gray-300">Print Production</li>
            <li className="text-gray-600 dark:text-gray-300">Adobe Creative Suite</li>
            <li className="text-gray-600 dark:text-gray-300">Figma</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <div className="mb-6">
            <div className="font-medium">Bachelor of Fine Arts in Graphic Design</div>
            <div className="text-gray-600 dark:text-gray-300">Your University Name</div>
            <div className="text-gray-500 dark:text-gray-400">2019 - 2023</div>
          </div>

          <h3 className="text-xl font-semibold mb-3">Interests</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Outside of design, I enjoy photography, hiking, and exploring new coffee shops. I'm also an avid reader and
            constantly seek inspiration from art, architecture, and nature.
          </p>
        </div>
      </div>
    </div>
  )
}
