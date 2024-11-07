import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPinnedIcon } from "lucide-react";

export default function Home() {
    return (
        <div className="relative flex h-[100dvh] max-h-[1000px] items-center justify-center overflow-hidden bg-red-400 text-neutral-100">
            <div className="grid h-[100dvh] grid-cols-11 grid-rows-11">
                <div
                    className={cn(
                        "z-10 col-start-6 flex w-full flex-col items-center justify-center space-y-8",
                        "row-start-5"
                    )}
                >
                    <div className="flex flex-col items-center space-y-2">
                        <h1
                            className={cn(
                                "col-span-7 col-start-4 w-fit whitespace-nowrap font-bold tracking-tight",
                                "text-[clamp(2rem,14vw,11rem)] leading-none"
                            )}
                        >
                            WebJam 2024
                        </h1>
                        <p
                            className={cn(
                                "text-center font-semibold",
                                "w-[90%] md:w-[75%] lg:w-[75%]",
                                "text-[clamp(1.25rem,3vw,1.5rem)]"
                            )}
                        >
                            ICS Student Council&apos;s week-long web application
                            competition — no experience necessary!
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center space-x-8 space-y-2 md:flex-row">
                        <div
                            className={cn(
                                "flex min-w-fit items-center space-x-2 font-semibold",
                                "text-[clamp(1.25rem,3vw,1.5rem)]"
                            )}
                        >
                            <CalendarIcon />

                            <p className="whitespace-nowrap">Nov. 18 - 22</p>
                        </div>

                        <div
                            className={cn(
                                "flex min-w-fit items-center space-x-2 font-semibold",
                                "text-[clamp(1.25rem,3vw,1.5rem)]"
                            )}
                        >
                            <MapPinnedIcon />

                            <p className="whitespace-nowrap">
                                Donald Bren Hall
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 text-2xl font-semibold">
                        <Button className="border-2 bg-red-400 bg-opacity-60 px-3 py-4 text-2xl font-semibold text-white backdrop-blur-lg hover:bg-red-300 hover:bg-opacity-70">
                            Apply
                        </Button>

                        <div className="flex items-center">
                            <p className="whitespace-nowrap">or be a &nbsp;</p>
                            <Button
                                className="p-0 text-2xl font-semibold text-white underline hover:decoration-red-300"
                                variant={"link"}
                            >
                                Mentor!
                            </Button>
                        </div>
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
