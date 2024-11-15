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
                    className={cn(
                        "absolute w-[200%] min-w-[200%] object-cover"
                    )}
                />

                <About />
                <Schedule />
                <Prizes />
                <Faq />

                <div className="h-[200px] w-full sm:h-[300px] md:h-[500px] lg:h-[600px]">
                    <Image
                        src={"/layer-two/Stars.svg"}
                        alt={"stars"}
                        width={400}
                        height={100}
                        className={cn(
                            "absolute bottom-0 w-[2000px] min-w-[500px] -scale-x-100 object-cover"
                        )}
                    />

                    <Image
                        src={"/layer-two/BackmostTreesBackground.svg"}
                        alt={"backmost trees background"}
                        width={1000}
                        height={4000}
                        className={cn("absolute bottom-0 w-full")}
                    />

                    <Image
                        src={"/layer-two/GroundBackground.svg"}
                        alt={"ground background"}
                        width={400}
                        height={100}
                        className={cn("absolute bottom-0 w-full")}
                    />

                    <Image
                        src={"/layer-two/TentsAndGroundDetails.svg"}
                        alt={"tents and ground details"}
                        width={400}
                        height={100}
                        className={cn("absolute bottom-0 w-full")}
                    />

                    <Image
                        src={"/layer-two/StargazingAnteaters.svg"}
                        alt={"stargazing anteaters"}
                        width={800}
                        height={400}
                        className={cn(
                            "absolute bottom-0 left-1/2 w-[50%] -translate-x-1/2"
                        )}
                    />
                </div>
            </div>
        </>
    );
}
