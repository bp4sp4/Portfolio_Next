import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FileCheck } from "lucide-react";
import PaletteIcon from "@mui/icons-material/Palette";

export const DATA = {
  name: "SangHun",
  initials: "SH",
  url: "https://dillion.io",
  location: "Gangseo-gu,  Seoul, Republic of Korea",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "안녕하세요! 배움에 겁이 없는 웹 개발자,QA(테스터) 박상훈입니다! 좋아하는것이기에 재미있게 항상 웹 개발을 진행해왔습니다.",
  summary:
    "17년도 부터 22년까지 대림대학교를 전문학사를 졸업후 6개월간 와이즈스톤티에서 테스터업무로 진행했습니다. 이후 진로 재정비를 위해 7개월간 한국 한국 ICT인재 개발원에서 교육을 받은후 23년도에 새롬정보시스템에서 웹개발 인턴 3개월 진행했습니다. ",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "AWS",
    "SpringBoot",
    "HTML5",
    "CSS3",
    "Mysql",
    "Oracle",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://frontdevpark.tistory.com",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "bp4sp4@naver.com",
    tel: "010-4710-9210",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bp4sp4",
        icon: Icons.github,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "T멤버쉽",
      href: "",
      badges: [],
      location: "Gangnam",
      title: "QA App Tester",
      logoUrl: "/tmembership.png",
      start: "2021 10",
      end: "2022 01",
      description:
        "티멤버쉽 앱검증을 진행했으며 앱의 각종 기능을 테스트하여 사용자 경험을 최적화하고, 모든 기능이 예상대로 동작하는지 점검했습니다. 특히, 혜택 쿠폰함, 룰렛 돌리기, 다양한 혜택 확인 기능에 대한 철저한 검증을 진행했습니다. ",
    },
    {
      company: "테이블링",
      badges: [],
      href: "",
      location: "Gangnam",
      title: "QA App Tester",
      logoUrl: "/tabling.png",
      start: "2022 01",
      end: "2022 04",
      description:
        "테이블링 웹,앱 검증을 진행했으며 인트로, 홈 검증을 테스트케이스를 설계하고 실행하고, 버그를 식별하고 보고하는등 또 근무하면서 장애 발생 시 즉각 처리하면서 고객사의 요청 하나도 빠짐없이 꼼꼼히 확인했습니다.",
    },
    {
      company: "새롬정보시스템",
      href: "",
      badges: [],
      location: "GaSan",
      title: "Web Developer",
      logoUrl: "/searom.jpg",
      start: "2023 02",
      end: "2023 05",
      description:
        "과학기사뉴스를 파이선을 사용해 크롤링해 IBM Watson Studio을 통해 기사들을 가져온 후 비정형데이터로 만든후 IBM검색기술을 통해 최신과학기술 트렌드와 산업협력관계를 분석해, 분석한 내용 토대로 CSV형태로 만들어 D3.JS API를 사용해 워드클라우드 형태로 보여주는 사이트를 만들었습니다.",
    },
  ],

  projects: [
    {
      title: "T멤버쉽",
      href: "https://docs.google.com/spreadsheets/d/18VKk3mZAMBw4urr8ZgOMfqCM_zKsNrbMq6JaFkkUano/edit#gid=0",
      dates: "2021 10 - 2022 01",
      caution:
        "*해당 TC는 실제 업무에 사용된 파일이 아닌 임시로 제작된 파일입니다.",
      active: true,
      description:
        "와이즈스톤에서 6개월 동안 SKM 1팀의 연구원으로 활동하였습니다. 입사 당시에는 티멤버쉽 앱의 검증을 주도적으로 진행하였습니다. 앱의 출시 당일부터 이후에도 지속적으로 사후 검증을 진행하여 사용자 경험을 개선하고 앱의 안정성을 유지하는 데 기여하였습니다.",
      technologies: ["Jira", "Excel"],
      links: [
        {
          type: "TestCase",
          href: "https://chatcollect.com",
          icon: <FileCheck className="size-3" />,
        },
      ],
      image: "/tmembership.png",
      image2: "",
    },
    {
      title: "테이블링",
      href: "https://docs.google.com/spreadsheets/d/1XSh-IOTxpKB3Ke0gzqLPEfhZusnqMOclKhfQbAf3dnc/edit",
      dates: "22.01 - 22.04",
      caution:
        "*해당 TC는 실제 업무에 사용된 파일이 아닌 임시로 제작된 파일입니다.",
      active: true,
      description:
        "와이즈스톤에서 6개월 동안 SKM 1팀의 연구원으로 활동하였습니다. 테이블링 앱/웹 검증을 진행하였습니다. 테이블링 인트로/홈 담당 검증을 마치고, 사장님보드 웹겁증을 진행 했습니다.",
      technologies: ["Jira", "Excel"],
      links: [
        {
          type: "TestCase",
          href: "https://chatcollect.com",
          icon: <FileCheck className="size-3" />,
        },
      ],
      image: "/tabling.png",
      image2: "",
    },
    {
      title: "WeddingLery",
      href: "https://bp4sp4.github.io/WeddingVideoPage/",
      dates: "23.11 - 23.12",
      caution: "",
      active: true,
      description:
        "웨딩러리는 웨딩관련팁, 계획, 영상을 통해 제공하여 방문자들이 웨딩을 더 효율적으로 준비할 수 있도록 도움을 줄 수 있는 사이트 입니다. UX/UI를 디자인을 논의하기 위해 Figma를 활용했으며, Java, swiper.js, Html5/Css3 이용하여 UI 개발을 진행했습니다.",
      technologies: [
        "Publishing",
        "SpringBoot",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Oracle",
      ],
      links: [
        {
          type: "Website",
          href: "https://bp4sp4.github.io/WeddingVideoPage/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Figma",
          icon: <PaletteIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/ShCgLKcrh1RjeZv4DnSUYb/%EC%9B%A8%EB%94%A9%EB%9F%AC%EB%A6%AC?node-id=0-1&p=f&t=Grc4Vp3bSTwaJea6-0",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/WeddingVideoPage",
        },
      ],
      image: "",
      image2: "/wedding-main.gif",
    },
    {
      title: "Relux",
      href: "http://3.36.98.75:8080/main/list-view",
      dates: "24.09 - 24.11",
      caution: "",
      active: true,
      description:
        "개인 프로젝트로 리럭스 홈페이지는 명품 소개 사이트이고, 명품에 조금 더 관심을 줄 수 있는 사이트 입니다. UX/UI를 디자인을 논의하기 위해 Figma를 활용했으며, Java, swiper.js, Html5/Css3 이용하여 UI 개발을 진행했습니다.",
      technologies: ["SpringBoot", "HTML5", "CSS3", "JavaScript", "AWS"],
      links: [
        {
          type: "Website",
          href: "http://3.36.98.75:8080/main/list-view",
          icon: <Icons.globe className="size-3" />,
        },

        {
          type: "Figma",
          icon: <PaletteIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/OlX9bcW7SySE93HnEr58QZ/ReLux",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/ReLux",
        },
      ],
      image: "",
      image2: "/relux.gif",
    },
    {
      title: "HtmlStudy",
      href: "https://htmlstudy.co.kr/",
      dates: "23.11 ~ 23.12",
      caution: "",
      active: true,
      description:
        "개인 프로젝트로 HtmlStudy는 HTML과 CSS에 대한 소개를 제공하는 React 기반 웹 페이지입니다. 이 사이트는 웹 개발을 처음 접하는 사람들에게 HTML과 CSS의 기초 개념과 사용 방법을 쉽게 설명하고, 예제를 통해 더 깊이 이해할 수 있도록 돕는 것이 목표입니다",
      technologies: ["React", "HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://htmlstudy.co.kr/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/HtmlStudy",
        },
      ],
      image: "",
      image2: "/htmlstudy.gif",
    },
    {
      title: "(주)TM media",
      href: "https://tmmedia.co.kr/",
      dates: "23.11 - 23.12",
      caution: "",
      active: true,
      description:
        "TM 미디어 퍼블리싱은 HTML, CSS, JavaScript를 활용하여 사용자 친화적이고 기능적인 웹페이지를 제작했습니다. 반응형 디자인을 통해 다양한 디바이스 환경에서도 최적의 사용자 경험을 제공합니다.",
      technologies: ["Publishing", "HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://tmmedia.co.kr/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/TM-Media",
        },
      ],
      image: "",
      image2: "/tmgif.gif",
    },
    {
      title: "Gallery",
      href: "https://bp4sp4.github.io/CSSGrid/",
      dates: "23.11 - 23.12",
      caution: "",
      active: true,
      description:
        "CSS Grid를 활용해 이미지뿐만 아니라 다양한 콘텐츠를 효율적으로 배치하는 갤러리 홈페이지를 퍼블리싱한 미니프로젝트입니다. HTML5, CSS3, JavaScript를 사용하여 동적 이미지 로딩과 레이아웃을 구현하며, 사용자 경험을 고려한 디자인을 완성했습니다. 반응형 디자인을 통해 다양한 디바이스 환경에서도 최적의사용자 경험을 제공합니다.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://bp4sp4.github.io/CSSGrid/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/CSSGrid",
        },
      ],
      image: "",
      image2: "/grid.gif",
    },
    {
      title: "GPT-3.5",
      href: "",
      dates: "23.11 - 23.12",
      caution: "",
      active: true,
      description:
        "GPT API를 이용해 감정 있는 말투로 대화하고, 원하는 이미지 이름을 입력하면 해당 이미지를 확인할 수 있는 혁신적인 홈페이지를 만들었습니다. React, HTML, CSS를 사용하여 이 웹 애플리케이션을 개발했으며, 이를 통해 사용자에게 더욱 생동감 있고 직관적인 상호작용 경험을 제공합니다.",
      technologies: ["React", "HTML5", "CSS3", "JavaScript"],
      links: [
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/cheapchatgpt",
        },
      ],
      image: "",
      image2: "/cheapsite.gif",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
