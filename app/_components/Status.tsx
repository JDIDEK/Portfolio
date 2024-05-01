import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, Home, Network, Plane, SquareMousePointer } from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";
import InstagramPicture from "@/public/IMG_2156-modified.png";
import InstagramLogo from "@/public/InstagramLogo.jpg";
import LinkedInLogo from "@/public/LinkedinLogo.png";
import LyceeLogo from "@/public/LycéeDuGrésivaudanLogo.png";


export const Status = () =>    {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
    <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
            <p className="text-lg text-muted-foreground">Side, school projects</p>
            <div className="flex flex-col gap-4">
                {SIDE_PROJECTS.map((project, index) =>(
                    <SideProject
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                    />
                ))}
            </div>
        </Card>
    </div>
    <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Study</p>
            <div className="flex flex-col gap-4">
            {WORKS.map((work, index) =>(
                <Work key={index} {...work}/>
            ))}
        </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col ">
            <p className="text-lg text-muted-foreground">Contact me</p>
            <ContactCard
                name="@nilessojj" 
                image={InstagramPicture}
                mediumImage={InstagramLogo}
                description="325"
                url="https://www.instagram.com/nilessojj/"
            />
            <ContactCard
                name="Josselin Didek" 
                image={InstagramPicture}
                mediumImage={LinkedInLogo}
                description="3"
                url="https://www.linkedin.com/in/josselin-didek-47a4aa22a/"
            />
        </Card>
    </div>
    </Section>
    );  
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Sasomapp",
        description: "Aircraft maintenance operation management interface with blockchain",
        url:"/"
    },
    {
        Logo: Network,
        title: "Secure, automatic authentication system"
        description: "Creation of an authentication system via RADIUS server and certificates for a customer's meeting room (carried out during an internship)",
        url:"/"
    },
    {
        Logo: SquareMousePointer,
        title: "Autoclicker",
        description: "Creation of an auto-clicker (script to click a certain number of times, choosing a period and the desired number of clicks during that period)",
        url:"/"
    },
]


const WORKS: WorkProps[] = [
    {
        image: LyceeLogo,
        title: "Lycée du Grésivaudan",
        role: "Student",
        date: "sept. 2022 - present",
        url: "http://www.lgm.ac-grenoble.fr",
    },
]

