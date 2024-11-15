import Image from "next/image";
import { Hero } from "@/components/ui/hero/hero";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="relative flex min-h-[2000px] w-full flex-col items-center bg-gradient-to-b from-[#D451F4] via-[#EB2D51] via-10% to-[#47065E] pt-16 text-neutral-100">
                <div className="mt-32 flex max-w-[60%] flex-col items-center justify-center space-y-8 text-center text-2xl">
                    <h1 className="text-7xl font-semibold">About WebJam</h1>

                    <div className="space-y-4">
                        <p>
                            WebJam is a week-long event where students come
                            together to create fully functional web
                            applications. Whether you&apos;ve never heard of web
                            applications or built many, WebJam is here to give
                            you a platform to learn, build, and create!
                        </p>
                        <p>
                            Over the past 4 years, WebJam has focused on
                            encouraging beginners and people who are curious
                            about web technologies — from frontend to backend!
                            Our goal is to provide learning and networking
                            opportunities for our community of developers,
                            especially ones that come from underrepresented
                            backgrounds in the tech space.
                        </p>
                    </div>
                </div>

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
