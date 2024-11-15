import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PRIZES } from "@/data/prizes";

export function Prizes() {
    return (
        <div className="z-10 w-[80%] space-y-8">
            <div className="flex text-7xl font-semibold">Prizes</div>

            <div className="flex flex-row flex-wrap justify-center gap-8">
                {PRIZES.map((prize) => (
                    <Card
                        className="w-fit border-neutral-100 bg-neutral-100"
                        key={prize.label}
                    >
                        <CardContent className="px-1 pb-3 pt-1">
                            <Link
                                href={prize.href}
                                target="_blank"
                            >
                                <Image
                                    src={prize.img}
                                    alt={prize.label}
                                    width={300}
                                    height={300}
                                    className="h-[300px] rounded-lg object-cover"
                                />
                            </Link>
                        </CardContent>

                        <CardFooter className="flex justify-center pb-3">
                            <p className="text-lg font-semibold">
                                {prize.label}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
