import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinnedIcon } from "lucide-react";

export default function Home() {
    return (
        <div className="h-[100dvh] bg-red-400 text-neutral-100">
            <div className="grid h-[100dvh] grid-cols-11 grid-rows-11">
                <div className="z-10 col-start-6 row-start-5 flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="col-span-7 col-start-4 w-fit whitespace-nowrap text-9xl font-bold">
                            WebJam 2024
                        </h1>
                        <p className="w-[80%] text-center text-2xl font-semibold">
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

            <div className="absolute top-0 h-[100dvh] w-[100dvw]">
                <Image
                    src={"/layer-one/L1_MountainBackground.svg"}
                    alt={""}
                    width={2000}
                    height={100}
                    className="absolute bottom-0 w-[55%]"
                />
                <Image
                    src={"/layer-one/L1_MountainForeground.svg"}
                    alt={"mountain foreground"}
                    width={2000}
                    height={100}
                    className="absolute bottom-0 w-full"
                />
                <Image
                    src={"/layer-one/L1_Sun.svg"}
                    alt={""}
                    width={400}
                    height={100}
                    className="absolute right-[8%] top-[8%] w-[12.5%]"
                />
                <Image
                    src={"/layer-one/L1_SweatyAnteater.svg"}
                    alt={""}
                    width={400}
                    height={100}
                    className="absolute bottom-[14%] left-[16%] w-[15%]"
                />
                <Image
                    src={"/layer-one/L1_HelpfulAnteater.svg"}
                    alt={""}
                    width={400}
                    height={100}
                    className="absolute bottom-[18%] left-[32%] w-[12.5%]"
                />
                <Image
                    src={"/layer-one/L1_BuffAnteater.svg"}
                    alt={""}
                    width={400}
                    height={100}
                    className="absolute bottom-[36%] right-[12%] w-[12.5%]"
                />
            </div>
        </div>
    );
}
