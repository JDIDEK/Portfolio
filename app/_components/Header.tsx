import { Section } from "./Section"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { cn } from "@/lib/utils"
import { InstagramIcon } from "./icons/InstagramIcon"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { LinkedinIcon } from "lucide-react"

export const Header = () =>{
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary-foreground">
                    didekjosselin.com
                </h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2"> 
                    <Link 
                    href="https://github.com/JDIDEK"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <GithubIcon size={12} className="text-foreground" />     
                    </Link>
                    <Link 
                    href="https://www.instagram.com/nilessojj/"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <InstagramIcon size={12} className="text-foreground" />     
                    </Link>
                    <Link 
                    href="https://www.linkedin.com/in/josselin-didek-47a4aa22a/"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <LinkedinIcon size={12} className="text-foreground" /> 
                    </Link>

                </ul>
            </Section>
        </header>
    )
}
