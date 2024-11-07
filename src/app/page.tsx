import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPinnedIcon } from "lucide-react";

export default function Home() {
    return (
        <div className="relative flex h-[100dvh] max-h-[1000px] items-center justify-center bg-red-400 text-neutral-100">
            <div className="grid h-[100dvh] grid-cols-11 grid-rows-11">
                <div className="z-10 col-start-6 row-start-5 flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="col-span-7 col-start-4 w-fit whitespace-nowrap text-[11rem] font-bold leading-none tracking-tight">
                            WebJam 2024
                        </h1>
                        <p className="w-[50%] text-center text-2xl font-semibold">
                            ICS Student Council&apos;s week-long web application
                            competition — no experience necessary!
                        </p>
                    </div>

                    <div className="flex w-[400%] flex-row justify-center space-x-8">
                        <div className="flex min-w-fit items-center space-x-2 text-2xl font-semibold">
                            <CalendarIcon />

                            <p>Nov. 18 - 22</p>
                        </div>

                        <div className="flex min-w-fit items-center space-x-2 text-2xl font-semibold">
                            <MapPinnedIcon />

                            <p>Donald Bren Hall</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 text-2xl font-semibold">
                        <Button className="border-2 bg-red-400 px-3 py-4 text-2xl font-semibold text-white hover:bg-red-300">
                            Apply
                        </Button>

                        <p>or</p>

                        <Button className="border-2 bg-red-400 px-3 py-4 text-2xl font-semibold text-white hover:bg-red-300">
                            Mentor
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 h-[100dvh] max-h-[1000px] w-full">
                <Image
                    src={"/layer-one/L1_Sun.svg"}
                    alt={"sun"}
                    width={400}
                    height={100}
                    className={cn(
                        "absolute",
                        "right-[4%] top-[4%] md:right-[8%] md:top-[8%]",
                        "w-[25%] md:w-[12.5%]"
                    )}
                />

                <Image
                    src={"/layer-one/L1_MountainBackground.svg"}
                    alt={"mountain background"}
                    width={2000}
                    height={100}
                    className="absolute bottom-0 right-0 w-[1000px] min-w-[700px] md:right-auto"
                />

                <Image
                    src={"/layer-one/L1_MountainForeground.svg"}
                    alt={"mountain foreground"}
                    width={2000}
                    height={100}
                    className="absolute bottom-0 right-0 w-[1728px] min-w-[1000px]"
                />

                <Image
                    src={"/layer-one/L1_SweatyAnteater.svg"}
                    alt={"sweaty anteater"}
                    width={400}
                    height={100}
                    className={cn(
                        "absolute bottom-16 w-[20%] xl:w-[15%]",
                        "left-6 lg:left-14",
                        "hidden md:flex"
                    )}
                />
                <Image
                    src={"/layer-one/L1_HelpfulAnteater.svg"}
                    alt={"helpful anteater"}
                    width={400}
                    height={100}
                    className={cn(
                        "absolute bottom-20 w-[20%] xl:w-[15%]",
                        "left-52 lg:left-80",
                        "hidden md:flex"
                    )}
                />

                <Image
                    src={"/layer-one/L1_BuffAnteater.svg"}
                    alt={"buff anteater"}
                    width={400}
                    height={100}
                    className={cn(
                        "absolute w-[200px]",
                        "bottom-[12%] md:bottom-[20%] xl:bottom-64 2xl:bottom-80",
                        "-right-8 md:right-8 lg:right-16"
                    )}
                />
            </div>
        </div>
    );
}
