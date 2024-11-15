import Image from "next/image";
import { SCHEDULE, type Schedule } from "@/data/schedule";
import { cn } from "@/lib/utils";

function getFormattedDate(date: string) {
    const dateObject = new Date(date + "T00:00:00").toLocaleDateString(
        "en-US",
        {
            timeZone: "America/Los_Angeles",
            weekday: "long",
            month: "long",
            day: "numeric",
        }
    );

    return dateObject;
}

function sortSchedule(schedule: Schedule[]) {
    const sortedSchedule: Record<string, Schedule[]> = {};

    schedule.forEach((event) => {
        const date = event.date;

        if (!sortedSchedule[date]) {
            sortedSchedule[date] = [];
        }

        sortedSchedule[date].push(event);
    });

    const sortedEvents = Object.values(sortedSchedule).map((date) =>
        date.sort((a, b) => {
            const timeA =
                parseInt(a.time, 10) + (a.time.includes("PM") ? 12 : 0);
            const timeB =
                parseInt(b.time, 10) + (b.time.includes("PM") ? 12 : 0);
            return timeA - timeB;
        })
    );

    return sortedEvents;
}

export function Schedule() {
    const events = sortSchedule(SCHEDULE);

    return (
        <div className="relative mx-auto flex w-[80%] flex-col space-y-8 pt-32 md:pt-48">
            <div className="flex text-7xl font-semibold">Schedule</div>

            {events.map((day) => (
                <div
                    className="flex flex-col space-y-8"
                    key={day[0].date}
                >
                    <div className="flex border-b-4 border-neutral-100 pb-2 text-4xl">
                        {getFormattedDate(day[0].date)}
                    </div>

                    <div className="space-y-8 md:space-y-16">
                        {day.map((event) => (
                            <div
                                className="flex flex-col items-start gap-4 lg:flex-row lg:justify-between"
                                key={event.title + event.time}
                            >
                                <div className="flex w-[600px] min-w-[500px] grow gap-8 xl:min-w-[600px]">
                                    <Image
                                        src={"/favicon.ico"}
                                        alt="club Logo"
                                        width={400}
                                        height={400}
                                        className={cn(
                                            "size-32 items-center rounded-2xl",
                                            "hidden md:flex"
                                        )}
                                    />

                                    <div className="flex flex-col space-y-1">
                                        <div className="flex flex-wrap text-3xl md:text-4xl">
                                            {event.title}
                                        </div>

                                        <div className="text-lg md:text-xl">
                                            {`${event.time} • ${event.club && event.club + " • "} ${
                                                event.location
                                            }`}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full text-pretty text-lg md:text-xl">
                                    {event.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
