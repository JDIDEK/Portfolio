import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { JavaLogo } from "./icons/JavaLogo";
import { Code } from "./Code";
import { OpenAILogo } from "./icons/OpenAILogo";
import { PythonLogo } from "./icons/PythonLogo";

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on...
        </h2>
        <div className="flex max-md:flex-col gap-2">
            <div className="flex flex-col gap-2 flex-1">
                <JavaLogo size={42} className="animate-pulse"/>
                    <h3 className="text-2xl font-semibold tracking-tight"> 
                        Java
                    </h3>
              <p className="text-sm text-muted-foreground">My main langage is <Code>Java</Code>. I also use <Code>JavaFX</Code> to make pretty interfaces</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <OpenAILogo size={42} className="animate-pulse"/>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        AI Integration
                    </h3>
              <p className="text-sm text-muted-foreground">I've just started to learn and become passionate about the subject of <Code>AI</Code> integration in applications/software</p>
            </div>
        
            <div className="flex flex-col gap-2 flex-1">
                <PythonLogo size={42} className="animate-pulse"/>
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Python
                    </h3>
              <p className="text-sm text-muted-foreground">I love using <Code>Python</Code>, especially to create <u>useless stuff...</u></p>
            </div>
        </div>
    </Section>
    );
};
