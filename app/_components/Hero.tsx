import { Section } from "./Section";
import { Code } from "./Code";
import Image from "next/image";
import myImage from "@/public/DIDEKJOSSELINPFP.jpg";
import { CVCard, CVProps } from "./CV";
import { Download } from "lucide-react";

export const Hero = () => {
    const cvProps: CVProps = {
        Logo: Download,
        title: "Curriculum Vitae - DIDEK Josselin",
        url: "/CvDidekJosselin.pdf",
    };

    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">
                    Josselin DIDEK
                </h2>
                <h3 className="text-3xl font-caption">
                    IT Student
                </h3>
                <p className="mb-6">
                    Étudiant passionné par le domaine de l'informatique et de l'<Code>IT</Code> notamment par le <Code>développement d'applications</Code>, les nouveautés technologiques et le domaine de l'<Code>IA</Code>.
                </p>
                <div>
                    <CVCard {...cvProps} />
                </div>
            </div>
            <div className="flex max-md:flex-col w-full gap-4">
                <Image
                    src={myImage}
                    alt="Josselin's picture"
                    width={500}
                    height={500}
                    className="w-full h-auto max-w-xs max-md:w-56"
                />
            </div>
        </Section>
    );
};
