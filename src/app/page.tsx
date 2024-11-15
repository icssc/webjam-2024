import Image from "next/image";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Prizes } from "@/components/prizes";
import { Schedule } from "@/components/schedule";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <>
            <Hero />

            <div className="relative flex min-h-[2000px] w-full flex-col items-center space-y-32 overflow-hidden bg-gradient-to-b from-[#D451F4] via-[#EB2D51] via-10% to-[#47065E] pt-16 text-neutral-100 md:space-y-48">
                <Image
                    src={"/layer-two/TreesForeground.svg"}
                    alt={"trees foreground"}
                    width={2000}
                    height={100}
                    className={cn("absolute bottom-0 w-full")}
                />

                <Image
                    src={"/layer-two/Stars.svg"}
                    alt={"stars"}
                    width={400}
                    height={100}
                    className={cn("absolute top-[300px] w-full")}
                />

                <About />
                <Schedule />
                <Prizes />
                <Faq />

                <div>foo</div>
                <div>foo</div>
            </div>
        </>
    );
}
