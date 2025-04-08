const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Calculate days until summit
const calculateCountdown = () => {
  const targetDate = new Date('2025-06-05T00:00:00Z');
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Home Endpoint
app.get('/api/v1/summit/home', (req, res) => {
  const homeData = {
    hero: {
      title: "FUTURE FORWARD SUMMIT",
      tagline: "Redefining Work for the AI Era",
      edition: "1st edition: HUMANS AT THE CORE: Designing Work That Works",
      date: "June 5-6, 2025",
      location: "Casablanca",
      cta: {
        text: "Register Now",
        link: "/register"
      }
    },
    whyAttend: {
      points: [
        "Global Insights: Engage with 150+ leaders shaping work's evolution across continents",
        "Practical Frameworks: Take home actionable strategies for human-AI collaboration",
        "Unconventional Formats: Experience debate-driven sessions and hands-on workshops"
      ]
    }
  };
  res.json(homeData);
});

// About Endpoint
app.get('/api/v1/summit/about', (req, res) => {
  const aboutData = {
    mission: "Future Forward Summit confronts work's greatest disruption since industrialization. As AI redefines roles, we convene cross-sector pioneers to architect intentional systems where technology elevates human potential. This is about creation, not adaptation.",
    whoWeAre: {
      description: "Born from UNE's vision for African leadership in the digital economy, Future Forward Summit bridges boardrooms, classrooms, and policy circles. The UNE Career Center—our anchor—operates as an innovation lab anticipating workforce needs through academic-industry partnerships.",
      link: {
        text: "Explore UNE Career Center",
        url: "/UNE-career-center"
      }
    },
    segments: [
      {
        title: "The Disruption Dialogues",
        description: "Provocative dinner debates where attendees vote to retire outdated work concepts (e.g., annual reviews, fixed office hours)",
        format: "Interactive voting with real-time data visualization"
      },
      {
        title: "Strategy Labs",
        description: "Executive masterclasses tackling AI's impact through scenario planning",
        tracks: [
          "Leadership in Algorithmic Organizations",
          "Talent Ecosystems Beyond Employment",
          "Ethical AI Implementation Frameworks"
        ]
      },
      {
        title: "The Flip Debate",
        description: "Students grill executives on workplace realities in no-holds-barred sessions",
        format: "Anonymous live polling exposes perception gaps"
      }
    ],
    codeOfConduct: "We enforce strict anti-harassment policies and Chatham House Rule for open dialogue."
  };
  res.json(aboutData);
});

// Agenda Endpoint
app.get('/api/v1/summit/agenda', (req, res) => {
  const agendaData = {
    overview: {
      downloadLink: "/agenda.pdf"
    },
    days: [
      {
        date: "June 5, 2025 | Casablanca",
        events: [
          { time: "3:30 PM", title: "Registration at Casablanca Finance City" },
          { time: "5:45 PM", title: "Opening Keynote: African Perspectives on Global Work Trends" },
          { time: "6:30 PM", title: "Disruption Dialogues: The End of Jobs: From Roles to Projects" },
          { time: "8:15 PM", title: "Networking Dinner" }
        ]
      },
      {
        date: "June 6, 2025",
        events: [
          { time: "9:00 AM", title: "Strategy Labs (Parallel Sessions)", 
            sessions: [
              "AI-Augmented Leadership",
              "Skills-Based Hiring Revolution",
              "Bias-Free Algorithms"
            ] 
          },
          { time: "12:45 PM", title: "Lunch with Tech Demos" },
          { time: "2:15 PM", title: "The Flip Debate: Degree vs. Skills: The Great Hiring Divide" },
          { time: "4:30 PM", title: "Closing Commitments" }
        ]
      }
    ]
  };
  res.json(agendaData);
});

// Countdown Endpoint
app.get('/api/v1/summit/countdown', (req, res) => {
  const countdown = calculateCountdown();
  res.json({
    targetDate: "2025-06-05T00:00:00Z",
    daysRemaining: countdown.days,
    hoursRemaining: countdown.hours,
    minutesRemaining: countdown.minutes,
    secondsRemaining: countdown.seconds
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
