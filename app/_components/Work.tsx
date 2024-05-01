import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type WorkProps = {
    image: StaticImageData;
    title: string;
    role: string;
    date: string;
    url: string;
};
export const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">

            <Image
                src={props.image}
                alt={props.title}
                className="w-10 h-10 object-contain rounded-md" 
                width={500}
                height={500}
                />

            <div className="mr-auto">
                <p className="text-lg font-semibold">{props.title}</p>

                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
};
