/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aniket's Portfolio",
  description:
    "A self-taught software developer who loves building products that impact people's life. A developer keen to learn new tools and technologies and loves mentoring folks in tech.",
  og: {
    title: "Aniket Singh's Portfolio",
    type: "website",
    url: "https://aniketsingh98571.github.io",
  },
};

//Home Page
const greeting = {
  title: "Aniket Singh",
  logo_name: "AniketSingh",
  nickname: "Ash99",
  subTitle:
    "A self-taught software developer who loves building products that impact people's life. A developer keen to learn new tools and technologies and loves mentoring folks in tech.",
  resumeLink:
    "https://drive.google.com/file/d/10s0UN1l4oC3PoqB9u9x6Zov7bYcKtx60/view?usp=drive_link",
  portfolio_repository: "https://github.com/aniketsingh98571/",
  githubProfile: "https://github.com/aniketsingh98571",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/aniketsingh98571",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aniketsingh98571/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCzsA4W47OzXmExYixkWUj3Q",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "dev.to",
    link: "https://dev.to/aniketsingh98571",
    fontAwesomeIcon: "fa-dev", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:aniketsingh.career@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front-end using React.",
        "⚡ Building static website using Gatsby.",
        "⚡ Developing standalone applications using Tkinter.",
        "⚡ Version Control using GitHub.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡ Designing scalable database based on products requirements.",
        "⚡ Setting CI/CD pipeline for deployment using GitHub Actions.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing Desktop and Mobile Screens. ",
        "⚡ Exploring concepts of Emphathetic and clean designs.",
        "⚡ Understanding Laws of UX.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/aniket98571",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/aniket98571",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sandip Institute of Technology and Research Center",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "sitrc.png",
      alt_name: "SITRC",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Apart from this, I have done courses on Web Development, UX/UI, Programming Languages and Cloud Computing.",
      ],
      website_link: "https://sitrc.sandipfoundation.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Git & Github Master Course 2021",
      subtitle: "- Mohit Uniyal",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-662d40ad-8cab-4c2f-95c8-a3d74bfe1f4e/",
      alt_name: "Udemy",
      color_code: "#FFF",
    },
    {
      title: "Google Digital Marketing",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1lHOxjr8c5dSmKuBxUI-lB0AUOrMvJ_YN/view?usp=sharing",
      alt_name: "Learn With Google",
      color_code: "#00000099",
    },
    {
      title: "Accenture Nordic Developer Program",
      subtitle: "- Accenture",
      logo_path: "accenture.png",
      certificate_link:
        "https://drive.google.com/file/d/1UZNWAcdFfbmMVi2UN1oBjsQgnrNMXvtL/view?usp=sharing",
      alt_name: "Accenture",
      color_code: "#FFF",
    },
    {
      title: "IEEE Post-Covid19 Rehabilitation Hackathon",
      subtitle: "- SF IEEE SB",
      logo_path: "ieee.png",
      certificate_link:
        "https://drive.google.com/file/d/1nrc5iqhwyEsrLRGN8K9wr9ROWBhVJKMz/view?usp=sharing",
      alt_name: "IEEE",
      color_code: "#FFF",
    },
    {
      title: "Learn SQL",
      subtitle: "- One Month",
      logo_path: "onemonth.ico",
      certificate_link:
        "https://drive.google.com/file/d/13bm31thCLXrhhrNP0JOYJiHjDMQbjCFC/view?usp=sharing",
      alt_name: "One Month",
      color_code: "#FFF",
    },
    {
      title: "Career Edge - Knock the lockdown",
      subtitle: "- TCS ION",
      logo_path: "tcs.png",
      certificate_link:
        "https://drive.google.com/file/d/1FNpeVLfMb4AN8_bPOuWuncfW6SQaq391/view?usp=sharing",
      alt_name: "TCS",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked at a startup as a developer intern and now working there as a full-time developer. I have also volunteered as Campus Ambassadors at many organizations. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Development Engineer",
          company: "Weboasis",
          company_url: "https://weboasis.io/",
          logo_path: "weboasis.png",
          duration: "July 2022 - PRESENT",
          location: "Remote",
          description:
            "(1) Architected and Developed frontend of NFT Gallery, Custom Contract builder platform, and Open AI custom model builder platform. (2) Contributed to the German-based fan-fan ticket booking platform, Thailand-based home renovation and construction platform, in-house bug reporting tool, and Max Cap NFT Minting platform as a front-end developer. (3) Developed some custom components in React like CustomSelect, Tags, Progress Bar, Full-Screen Image Viewer, etc. (4) Designed NoSql DB Schema for the NFT Gallery platform. (5) Developed APIs for the NFT Gallery Platform using nodejs. (6) Hosting NFT gallery platform on AWS Lambda using serverless framework. (7) Used AWS Cloud formation for image optimization and CDN.",

          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Developer Intern",
          company: "Weboasis.",
          company_url: "https://weboasis.io/",
          logo_path: "weboasis.png",
          duration: "March 2022 - May 2022",
          location: "Remote",
          description:
            "(1) Developed frontend for Thailand-based Construction and Home Services website. (2) Responsible for laying out folder structure of the frontend application. (3) Collaborated with team members using version control systems such as Git to organize modifications. (4) Translated the designs provided by the designer into code.",
          color: "#ee3c26",
        },
        {
          title: "Frontend Developer Intern",
          company: "Weboasis",
          company_url: "https://weboasis.io/",
          logo_path: "weboasis.png",
          duration: "August 2021 - October 2021",
          location: "Remote",
          description:
            "(1) Solved front-end related bugs of a fan-based ticket booking platform. (2) Developed frontend of 2 decentralized applications. (3) Collaborated with the senior developer for developing the portfolio website of WebOasis.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developers Student Club Lead",
          company: "Google",
          company_url:
            "https://gdsc.community.dev/sandip-institute-of-technology-and-research-center-nashik/",
          logo_path: "google_developers.png",
          duration: "July 2021 - June 2022",
          location: "Remote",
          description:
            "Google Developer Student Club Leads are passionate leaders at their university who are dedicated to helping their peers learn and connect. We are the leaders who believe in building and growing the community. Our role is to guide and provide proper resources to peers so that they can flourish in their respective fields. We also build solutions to solve real worlds problems.",
          color: "#4285F4",
        },

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Remote",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like DSC JSS_Noida, EddieHubCommunity, eduAlgo, AlgoPhantoms, MLH, PyContributors etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
        {
          title: "Campus Lead",
          company: "Scaler",
          company_url: "https://www.scaler.com/",
          logo_path: "scaler.jpeg",
          duration: "March 2020 - March 2021",
          location: "Remote",
          description:
            "The student club of India's first online tech academy. Scaler Achievers learn lifelong transferable skills, develop as future leaders, and help their peers in college gain high-quality technical skills. Scaler Achievers are the face of Scaler Academy at their college campuses and will help their peers get access to the best tech education at India's first online tech academy.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My majority of projects revolve around web development although in between I explored python's tkinter to built standalone desktop applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have published some review papers which I have written during my university curriculum.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Indian Education: Ancient, Medieval and Modern",
      createdAt: "2020-03-07",
      description:
        "Paper Written for Education at the Intersection of Globalization and Technology ",
      url: "https://www.intechopen.com/chapters/73290",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Review on Role of Semantic Technologies in Various Domains",
      createdAt: "2022-07-05T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://drive.google.com/file/d/1_KXUKFZYgytoOzMyhf0tldkQGTSvUcOQ/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aniket.png",
    description:
      "Looking for some help? Need to revamp your website ? Need someone to develop a website for you or for your business? Shoot me an email, as simple as that!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I believe in helping the developer community by sharing my knowledge in the form of blogs. I always make sure that whichever tools I am learning, I am documenting it in a blog.",
    link: "https://dev.to/aniketsingh98571",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
