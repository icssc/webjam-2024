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
        time: "6PM - 7PM",
        club: "",
        logo: "/icon.png",
        location: "Student Center - Pacific Ballroom C",
        date: "2024-11-18",
        desc: "Come out to our opening ceremony to learn about the schedule, rules, and resources for WebJam! As part of opening ceremony, we'll also be having a social where you can meet other WebJam participants and also meet teammates if you're looking for a team!",
        rsvp: "",
        recording: "",
    },
    {
        title: "ICSSC Projects - Intro to Web Dev",
        time: "7PM - 8PM",
        club: "ICSSC Projects",
        logo: "/clubs/projects.svg",
        location: "Student Center - Pacific Ballroom C",
        date: "2024-11-18",
        desc: "Learn the basics of web development, including foundational concepts of HTML and CSS, to get your projects started.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Hack Workshop - Intro to Git",
        time: "6PM - 7PM",
        club: "HackUCI",
        logo: "/clubs/hack.png",
        location: "DBH 4011",
        date: "2024-11-19",
        desc: "Discover how to use Git for version control in your web development projects. Essential for team collaboration and code management.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Work Time",
        time: "7PM - 8PM",
        club: "",
        logo: "/icon.png",
        location: "DBH 4011",
        date: "2024-11-19",
        desc: "Dedicated time to work with your team. Mentors will be available to assist you with any challenges you encounter.",
        rsvp: "",
        recording: "",
    },
    {
        title: "CTC - TypeScript Basics",
        time: "6PM - 7PM",
        club: "Commit the Change",
        logo: "/clubs/ctc.svg",
        location: "DBH 4011",
        date: "2024-11-20",
        desc: "Learn TypeScript fundamentals to enhance your JavaScript projects and gain more control over your code.",
        rsvp: "",
        recording: "",
    },
    {
        title: "ICSSC Projects - Intro to Web APIs",
        time: "7PM - 8PM",
        club: "ICSSC Projects",
        logo: "/clubs/projects.svg",
        location: "DBH 6011",
        date: "2024-11-20",
        desc: "Get introduced to the world of Web APIs and learn how to integrate them into your applications.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Design - Intro to UI Principles",
        time: "6PM - 7PM",
        club: "Design at UCI",
        logo: "/clubs/dauci.svg",
        location: "DBH 6011",
        date: "2024-11-21",
        desc: "Understand the core principles of UI design, including layout, color theory, and typography, to elevate your web projects.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Work Time",
        time: "7PM - 8PM",
        club: "",
        logo: "/icon.png",
        location: "DBH 4011",
        date: "2024-11-21",
        desc: "Final work session to prepare your project. Utilize our mentors' guidance and make the most out of this time.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Presentations / Deliberation",
        time: "6PM - 7:30PM",
        club: "",
        logo: "/icon.png",
        location: "Student Center - Pacific Ballroom C",
        date: "2024-11-22",
        desc: "Present your completed projects in front of our judges and audience. The judges will then deliberate to select the winners.",
        rsvp: "",
        recording: "",
    },
    {
        title: "Closing Ceremony",
        time: "7:30PM - 8PM",
        club: "",
        logo: "/icon.png",
        location: "Student Center - Pacific Ballroom C",
        date: "2024-11-22",
        desc: "Celebrate the end of WebJam with the announcement of winners and prize distribution. Thank you for participating!",
        rsvp: "",
        recording: "",
    },
];
