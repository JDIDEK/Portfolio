import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

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
                image="https://i.ibb.co/9TVctnK/IMG-2156-modified.png"
                mediumImage="data:image/png;base64,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"
                description="3"
                url="https://www.linkedin.com/in/josselin-didek-47a4aa22a/"
            />
            <ContactCard
                name="joss.ddk.jd@gmail.com" 
                image="https://i.ibb.co/9TVctnK/IMG-2156-modified.png"
                mediumImage="data:image/png;base64,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"
                description="Email me for any inquiries"
                url="mailto:joss.ddk.jd@gmail.com"
            />
        </div>
    </Section>
    );
};