import { ComponentProps, ComponentPropsWithoutRef } from "react";
import { Section }  from "./Section";
import { cn } from "@/lib/utils";
import { Code } from "./Code";

export const Hero = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
    <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
            Josselin DIDEK
        </h2>
        <h3 className="text-3xl font-caption">
            IT Student
        </h3>
        <p>
        Étudiant passionné par le domaine de
        l’informatique et de l’ <Code>IT</Code> notamment par
        le <Code>développement d'applications</Code>, les
        nouveautés technologiques et le
        domaine de l’ <Code>IA</Code>.

        </p>
    </div>
    <div className="flex-[2] max-md:m-auto ml-auto">
        <img 
            src="https://i.ibb.co/YRbq6Q7/IMG-2239.png" 
            className="w-full h-auto max-w-xs max-md:w-56" 
            alt="Josselin's picture"/>
    </div>     
    </Section>
    )
}