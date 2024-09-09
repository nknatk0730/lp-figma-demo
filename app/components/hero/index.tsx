import { Button } from "@/components/ui/button"
import Image from "next/image"
import  img  from './background.svg'

export const Hero = () => {
  return (
    <div className="max-w-[749px] p-3 text-center py-20">
      <h2 className="text-5xl font-bold leading-[60px]">Beautiful Landing Page Design for You</h2>
      <p className="mt-6 text-lg text-muted-foreground mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla est corporis tenetur similique sapiente reiciendis temporibus qui ducimus consectetur tempore cum amet placeat, voluptatem voluptas odio. Eum numquam porro natus!</p>
      <Button>Download Template</Button>
      <Image className="mt-20" src={img} alt="background" unoptimized/>
    </div>
  )
}