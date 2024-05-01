import { ComponentProps, ComponentPropsWithoutRef } from "react";
import { Section }  from "./Section";
import { cn } from "@/lib/utils";
import { Code } from "./Code";
import Image from "next/image";
import myImage from "@/public/IMG_2239.png";

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
        Student with a passion for computer science and <Code>IT</Code>, especially <Code>application development</Code>, new technologies and <Code>AI</Code>.
        </p>
    </div>
    <div className="flex-[2] max-md:m-auto ml-auto">
        <Image 
            src={myImage}
            alt="Josselin's picture" 
            width={500}
            height={500}
            className="w-full h-auto max-w-xs max-md:w-56" 
/>
    </div>     
    </Section>
    )
}
