import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export type CVProps = {
    Logo: LucideIcon;
    title: string;
    url: string;
};

export const CVCard = (props: CVProps) => {
    return (
        <a
            href={props.url}
            download
            className="w-full"
        >
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                    <props.Logo size={16} />
                </span>
                <div>
                    <p className="text-lg font-semibold">{props.title}</p>
                </div>
            </Card>
        </a>
    );
};
