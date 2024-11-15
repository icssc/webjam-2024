import Link from "next/link";

export function Rules() {
    return (
        <div className="z-10 w-[80%] space-y-8">
            <div className="flex text-7xl font-semibold">
                Rules & Code of Conduct
            </div>

            <span className="block text-2xl">
                By participating in WebJam, you agree to abide by&nbsp;
                <Link
                    href="https://docs.google.com/document/d/1_U23ZyjZabqLTBR6RZiv0BR3yxp9nMmLsCbl6kRmG8c/edit?tab=t.0"
                    target="_blank"
                >
                    <span className="underline underline-offset-2">
                        our rules & code of conduct
                    </span>
                </Link>
                .
            </span>
        </div>
    );
}
