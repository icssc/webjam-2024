import Image from "next/image";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Schedule } from "@/components/schedule";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="relative flex min-h-[2000px] w-full flex-col items-center overflow-hidden bg-gradient-to-b from-[#D451F4] via-[#EB2D51] via-10% to-[#47065E] pt-16 text-neutral-100">
                <About />
                <Schedule />

                <Image
                    src={"/layer-two/Stars.svg"}
                    alt={"stars"}
                    width={400}
                    height={100}
                    className={cn("w-full")}
                />

                <Image
                    src={"/layer-two/TreesForeground.svg"}
                    alt={"trees foreground"}
                    width={2000}
                    height={100}
                    className={cn("absolute bottom-0 w-full")}
                />
            </div>
        </>
    );
}
