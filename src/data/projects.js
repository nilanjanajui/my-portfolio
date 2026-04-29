import roamRadarImg from '../assets/Roamradar.png'
import jobImg from '../assets/job.png'
import issueImg from '../assets/issue.png'

export const projects = [
    {
        id: 'roamradar',
        title: 'RoamRadar',
        tag: 'JavaScript',
        description: 'A responsive travel dashboard to explore destinations, check weather, discover attractions, save favorites, and plan trips with AI assistance.',
        highlight: 'Dynamic weather updates, interactive Leaflet maps, dark/light mode, and full mobile responsiveness.',
        image: roamRadarImg,
        link: 'https://roamradar.netlify.app/',
        github: 'https://github.com/nilanjanajui/RoamRadar-Travel-Guide',
        techStack: ['JavaScript', 'Tailwind CSS', 'DaisyUI', 'Leaflet.js', 'OpenWeather API', 'Font Awesome'],
        challenges: [
            'Integrating Leaflet.js maps with dynamic markers that update based on user-selected destinations.',
            'Handling API rate limits from OpenWeather while keeping the UI feel instant and responsive.',
            'Building a dark/light mode toggle that persisted across page reloads using localStorage.',
        ],
        improvements: [
            'Add user authentication so saved favorites persist across devices.',
            'Integrate a flight/hotel search API for full trip planning.',
            'Add an itinerary builder with drag-and-drop day planning.',
        ],
    },
    {
        id: 'job-tracker',
        title: 'Job Tracker',
        tag: 'JavaScript',
        description: 'A serverless job application tracker that helps users manage their job search with ease — track status, deadlines, and notes all in one place.',
        highlight: 'Dynamic UI rendering, state management, filtering logic, and responsive design using Vanilla JavaScript and ES6.',
        image: jobImg,
        link: 'https://job-application-tracker1443.netlify.app/',
        github: 'https://github.com/nilanjanajui/Job-Application-Tracker',
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'ES6'],
        challenges: [
            'Managing complex state (add, edit, delete, filter) entirely in Vanilla JS without a framework.',
            'Keeping the UI in sync with localStorage on every state change without re-rendering the whole page.',
            'Building a clean filter system that combined multiple criteria (status, date, company) simultaneously.',
        ],
        improvements: [
            'Migrate to React for cleaner state management.',
            'Add email reminders for upcoming interview deadlines.',
            'Export job list to CSV or PDF for offline tracking.',
        ],
    },
    {
        id: 'issues-tracker',
        title: 'Issues Tracker',
        tag: 'JavaScript',
        description: 'A GitHub Issues Tracker that allows users to view, create, and manage issues for any public GitHub repository using the GitHub REST API.',
        highlight: 'API integration, dynamic UI updates, and state management using Vanilla JavaScript, DOM manipulation, and ES6.',
        image: issueImg,
        link: 'https://github-issues-tracker-ph-a5.netlify.app/',
        github: 'https://github.com/nilanjanajui/GitHub-Issues-Tracker',
        techStack: ['JavaScript', 'GitHub REST API', 'HTML5', 'CSS3', 'ES6'],
        challenges: [
            'Handling GitHub API pagination to load issues in batches without overwhelming the UI.',
            'Managing unauthenticated API rate limits (60 req/hour) gracefully with user feedback.',
            'Parsing and displaying markdown content from issue bodies cleanly in plain HTML.',
        ],
        improvements: [
            'Add OAuth login to increase API rate limit to 5000 req/hour.',
            'Support creating and closing issues directly from the UI.',
            'Add label filtering and milestone tracking.',
        ],
    },
]

export const featuredProject = {
    id: 'database-design-studio',
    title: 'Database Design Studio',
    tag: 'Full Stack',
    description: 'A full-stack web application built with Flask and React.js that automates the entire database design workflow — from raw data upload to fully normalized schemas.',
    image: null,
    link: 'https://database-design-studio.netlify.app/',
    github: 'https://github.com/nilanjanajui/Project--DataBase-Design-Studio',
    techStack: ['React.js', 'Flask', 'Python', 'Graphviz', 'Pandas', 'SQLAlchemy'],
    challenges: [
        'Implementing automatic functional dependency detection from raw CSV/Excel data — this required building a custom algorithm from scratch.',
        'Rendering interactive ER diagrams dynamically using Graphviz on the backend and passing SVG output to the React frontend.',
        'Ensuring lossless join and dependency preservation during 3NF decomposition, which involved complex set theory logic in Python.',
    ],
    improvements: [
        'Support more file formats (JSON, XML) as input sources.',
        'Add BCNF and 4NF decomposition stages beyond 3NF.',
        'Allow users to export the final normalized schema as SQL CREATE statements.',
    ],
}