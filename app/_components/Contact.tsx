import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import InstagramPicture from "@/public/IMG_2156-modified.png";
import LinkedInLogo from "@/public/LinkedinLogo.png";
import GmailLogo from "@/public/GmailLogo.png";

export const Contact = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Contact me</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be happy to chat with you.
        </h2>
        <div className="flex max-md:flex-col w-full gap-4">
            <ContactCard
                name="Josselin Didek" 
                image={InstagramPicture}
                mediumImage={LinkedInLogo}
                description="3"
                url="https://www.linkedin.com/in/josselin-didek-47a4aa22a/"
            />
            <ContactCard
                name="joss.ddk.jd@gmail.com" 
                image={InstagramPicture}
                mediumImage={GmailLogo}
                description="Email me for any inquiries"
                url="mailto:joss.ddk.jd@gmail.com"
            />
        </div>
    </Section>
    );
};