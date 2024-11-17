import Link from "next/link";

export const FAQ = [
    {
        question: "What is WebJam?",
        answer: (
            <p>
                WebJam is a week-long team competition where teams of students
                will create fully functional web applications.
            </p>
        ),
    },
    {
        question: "Where is WebJam being held?",
        answer: (
            <p>
                WebJam is being held in a hybrid environment, consisting of both
                in-person and online elements. Correspondence and announcements
                throughout the duration of the event will happen primarily
                through the WebJam Discord. The ceremonies and workshops will
                all be in-person. Registered participants will receive an
                invitation to the WebJam Discord closer to the start date of
                WebJam.
            </p>
        ),
    },
    {
        question: "When is WebJam?",
        answer: <p>WebJam is happening between November 14 - November 18.</p>,
    },
    {
        question: "How much does it cost?",
        answer: <p>Nothing. Attending WebJam is free.</p>,
    },
    {
        question: "Who can participate?",
        answer: <p>All UC Irvine students are welcome to participate.</p>,
    },
    {
        question: "How many people can be on a team?",
        answer: <p>Teams can be up to a maximum of 4 people.</p>,
    },
    {
        question: "What if I don’t have a team?",
        answer: (
            <p>
                We will be assisting with team formations during the event by
                creating a Discord channel for team formations.
            </p>
        ),
    },
    {
        question: "How do I register?",
        answer: (
            <p>
                You can register by filling out the following RSVP form above.
            </p>
        ),
    },
    {
        question: "May I submit pre-existing projects for WebJam?",
        answer: (
            <p>
                Unfortunately, all design elements and code for your project
                must be created during the event. Pre-existing third party tools
                and frameworks are allowed. Coding in advance is not allowed,
                but planning and discussing with teammates prior to the event is
                allowed.
            </p>
        ),
    },
    {
        question:
            "What if I don’t have any prior experience with web development?",
        answer: (
            <p>
                Many ICS clubs will be hosting workshops throughout the week to
                assist participants get started with web development.
            </p>
        ),
    },
    {
        question: "What if my question isn’t answered here?",
        answer: (
            <p>
                If your question isn’t answered in the FAQ, please leave a
                question in the WebJam Discord or email us at icssc@uci.edu
            </p>
        ),
    },
    {
        question: "What are the rules?",
        answer: (
            <span className="block">
                The rules and code of conduct are available{" "}
                <Link
                    href="https://docs.google.com/document/d/1_U23ZyjZabqLTBR6RZiv0BR3yxp9nMmLsCbl6kRmG8c/edit?tab=t.0"
                    target="_blank"
                >
                    <span className="underline underline-offset-2">here</span>
                </Link>
                .
            </span>
        ),
    },
];
