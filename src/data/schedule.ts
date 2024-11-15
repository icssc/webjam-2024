export type Schedule = {
    title: string;
    time: string;
    club?: string;
    logo: string;
    location: string;
    date: string;
    desc: string;
    rsvp?: string;
    recording?: string;
};

export const SCHEDULE: Schedule[] = [
    {
        title: "Opening Ceremony",
        time: "6PM",
        club: "",
        logo: "/favicon.ico",
        location: "DBH 3011",
        date: "2023-11-13",
        desc: "Come out to our opening ceremony to learn about the schedule, rules, and resources for WebJam! As part of opening ceremony, we'll also be having a social where you can meet other WebJam participants and also meet teammates if you're looking for a team!",
        rsvp: "",
        recording: "",
    },
    {
        title: "Intro to HTML/CSS",
        time: "7PM",
        club: "Hack at UCI",
        logo: "/assets/img/clubs/hack.png",
        location: "DBH 3011",
        date: "2023-11-13",
        desc: "Interested in learning about web development but don't know where to start? Join HackUCI for our to learn about basic web development in HTML/CSS!",
        rsvp: "",
        recording: "",
    },
    {
        title: "Choosing a Tech Stack",
        time: "6PM",
        club: "Commit the Change",
        logo: "/assets/img/clubs/ctc.svg",
        location: "DBH 3011",
        date: "2023-11-14",
        desc: "Interested in learning how to make informed decisions about the languages and technology stacks for your projects? Curious about adapting your project scope as you make progress? Join us for the CTC Project Planning and Adaptation Workshop!",
        rsvp: "",
        recording: "",
    },
    {
        title: "Work Time",
        time: "7PM",
        club: "",
        logo: "/favicon.ico",
        location: "DBH 3011",
        date: "2023-11-14",
        desc: "This is dedicated time for you to work on your projects with your team! You can work on your project anytime throughout the week as your schedule allows, but we'll be providing a friendly space, tasty snacks, and wise mentors during these specific times to help you with your projects!",
        rsvp: "",
        recording: "",
    },
    {
        title: "Designing an Appealing Website",
        time: "6PM",
        club: "Design at UCI",
        logo: "/assets/img/clubs/design.webp",
        location: "DBH 6011",
        date: "2023-11-15",
        desc: "Dive into the depths of what makes a visually captivating website! Join Design@UCI as we discuss the core principles of web design, from mastering user-friendly interfaces, to creating capitvating layouts that engage your audience. We will cover design fundamentals, color theory, and typography. This workshop is perfect for elevating your project to the next level of an engaging website.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Work Time",
        time: "7PM",
        club: "",
        logo: "/favicon.ico",
        location: "DBH 6011",
        date: "2023-11-15",
        desc: "More time to work with your team!",
        rsvp: "",
        recording: "",
    },
    {
        title: "Web Accessibility",
        time: "6PM",
        club: "ICSSC Projects",
        logo: "/icssc_logo.svg",
        location: "DBH 4011",
        date: "2023-11-16",
        desc: "Building a better web means ensuring people from all walks of life and abilities can participate. Learn why web accessibility is important and what it entails.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Work Time",
        time: "7PM",
        club: "",
        logo: "/favicon.ico",
        location: "DBH 4011",
        date: "2023-11-16",
        desc: "This is our last work time session of the week, but you can still keep working on your projects afterwards up until the final submission deadline at 5:30pm on Friday!",
        rsvp: "",
        recording: "",
    },
    {
        title: "Closing Ceremony",
        time: "6PM",
        club: "",
        logo: "/favicon.ico",
        location: "DBH 6011",
        date: "2023-11-17",
        desc: "WebJam comes to a close with our prize ceremony! Dinner will be provided at 6pm, and then starting 6:30pm present your projects in front of our esteemed professor judges and audience, then the winning teams will be announced and presented with some cool prizes!",
        rsvp: "",
        recording: "",
    },
];
