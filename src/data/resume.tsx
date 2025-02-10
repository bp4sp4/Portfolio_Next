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
      company: "T멤버십",
      href: "",
      badges: [],
      location: "Gangnam",
      title: "QA App Tester",
      logoUrl: "/tmembership.png",
      start: "2021 10",
      end: "2022 01",
      description:
        "티멤버십 앱검증을 진행했으며 앱의 각종 기능을 테스트하여 사용자 경험을 최적화하고, 모든 기능이 예상대로 동작하는지 점검했습니다. 특히, 혜택 쿠폰함, 룰렛 돌리기, 다양한 혜택 확인 기능에 대한 철저한 검증을 진행했습니다. ",
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
        "와이즈스톤티에서 6개월 동안 SKM 1팀의 연구원으로 활동하였습니다. 입사 당시에는 티멤버쉽 앱의 검증을 주도적으로 진행하였습니다. 앱의 출시 당일부터 이후에도 지속적으로 사후 검증을 진행하여 사용자 경험을 개선하고 앱의 안정성을 유지하는 데 기여하였습니다.",
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
      dates: "2022.01 - 2022.04",
      caution:
        "*해당 TC는 실제 업무에 사용된 파일이 아닌 임시로 제작된 파일입니다.",
      active: true,
      description:
        "와이즈스톤티에서 6개월 동안 SKM 1팀의 연구원으로 활동하였습니다. 테이블링 앱/웹 검증을 진행하였습니다. 테이블링 인트로/홈 담당 검증을 마치고, 사장님보드 웹겁증을 진행 했습니다.",
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
      dates: "2023.11 - 2023.12",
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
      dates: "2024.09 - 2024.11",
      caution: "*아이디 : user001, 비밀번호 : user001!",
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
      dates: "2023.11 ~ 2023.12",
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
      dates: "2023.11 - 2023.12",
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
      dates: "2023.11 - 2023.12",
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
      dates: "2023.11 - 2023.12",
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
      title: "Project2020",
      dates: "2020.04 - 2020.06",
      location: "Daelim University",
      description:
        "대학 시절 처음 HTML5, CSS, Bootstrap, JavaScript DOM을 배우면서 웹 개발에 입문했습니다. 그 과정에서 웹 페이지가 원하는 대로 동작하는 걸 보며 재미를 느끼고, jQuery를 통해 더 간편하게 요소 조작도 익혔습니다.",
      image: "https://www.icia.co.kr/upload/editor/tmpphp5vH0bCbsh.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/Project2020/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/Project2020",
        },
      ],
    },
    {
      title: "movie_app_2020",
      dates: "2020.09 - 2020.11",
      location: "Daelim University",
      description:
        "대학 시절 React를 처음 배우며 JSX, 컴포넌트 개념, props 전달 등을 익혔습니다. 생명주기 함수, 데이터 상태 관리, 라우터 설정도 학습하며 HashRouter 문제나 key props 설정의 중요성도 경험했습니다.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/movie_app_2020",
        },
      ],
    },
    {
      title: "Musiclog",
      dates: "2021.10 - 2021.11",
      location: "Daelim University",
      description:
        "대학 시절 동기들과 협업한 팀 프로젝트에서 프론트엔드 메인 및 사이드바 영역을 담당했습니다. UI 구성과 기능 구현에 집중했습니다.",
      icon: "public",
      image:
        "https://github.com/bp4sp4/musiclog/blob/main/img/logo.png?raw=true",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/musiclog/",
        },
      ],
    },
    {
      title: "T멤버십 - QA(테스터)",
      dates: "2021.10 - 2022.01",
      location: "와이즈스톤티",
      description:
        "와이즈스톤티에서 6개월 동안 SKM 1팀의 연구원으로 활동하였습니다. 입사 당시에는 티멤버쉽 앱의 검증을 주도적으로 진행하였습니다. 앱의 출시 당일부터 이후에도 지속적으로 사후 검증을 진행하여 사용자 경험을 개선하고 앱의 안정성을 유지하는 데 기여하였습니다.",
      icon: "public",
      image: "/tmembership.png",
      links: [],
    },
    {
      title: "테이블링 - QA(테스터)",
      dates: "2022.01 - 2022.04",
      location: "와이즈스톤티",
      description:
        "와이즈스톤티에서 6개월 동안 SKM 1팀의 연구원으로 활동하였습니다. 테이블링 앱/웹 검증을 진행하였습니다. 테이블링 인트로/홈 담당 검증을 마치고, 사장님보드 웹겁증을 진행 했습니다.",
      icon: "public",
      image: "/tabling.png",
      links: [],
    },
    {
      title: "지능형영상/이미지 처리를 위한 컴퓨터 비전",
      dates: "2022.05 - 2022.12",
      location: "한국ICT인재개발원",
      description:
        "7개월간 3개의 Spring 웹 프로젝트를 통해 기획의 중요성, 디자인, 프론트엔드 기술 스킬 상승과 팀원과의 의사소통의 중요성을 알게되었습니다.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNTlgel-WzWpXGKYwMW4XZumxWzx8IiaUiw&s",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/AugustvonMackensen/finalProject",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/s-sangwon/deebBlue_springSecondProject",
        },
      ],
    },
    {
      title: "새롬정보시스템 웹개발 인턴",
      dates: "2023.02 - 2023.05",
      location: "Searom",
      description:
        "과학기사뉴스를 파이선을 사용해 크롤링해 IBM Watson Studio을 통해 기사들을 가져온 후 비정형데이터로 만든후 IBM검색기술을 통해 최신과학기술 트렌드와 산업협력관계를 분석해, 분석한 내용 토대로 CSV형태로 만들어 D3.JS API를 사용해 워드클라우드 형태로 보여주는 사이트를 만들었습니다.",
      image: "/searom.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [],
    },
    {
      title: "MoviePlaza - Publishing",
      dates: "2023.06 - 2023.11",
      location: "",
      description:
        "영화와 OTT 트렌드를 분석한 사이트 개발에 참여하여 다양한 데이터를 시각적으로 제공했습니다. 프론트엔드와 어드민 페이지를 통해 유지보수가 용이하도록 구성하였으며, 이 과정에서 HTML과 CSS 실력이 더욱 향상되었습니다.",
      image: "https://bp4sp4.github.io/MoviePlazaDemoSite/images/banner.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/MoviePlazaDemoSite/",
        },
        {
          title: "Figma",
          icon: <PaletteIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/hG4KAIo0PVI0ZOLqZMIQyT/MoviePlaza?node-id=0-1&p=f&t=mPRk4qO69AtKSCnX-0",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/MoviePlaza",
        },
      ],
    },
    {
      title: "WeddingLery - Publishing",
      dates: "23.11.01 - 23.12.06",
      location: "",
      description:
        "웨딩러리는 처음으로 진행한 퍼블리싱 프로젝트로, 많은 아쉬움이 남지만 성장의 계기가 된 소중한 경험입니다. 사용자 경험(UX)을 중심으로 설계된 홈페이지였기에 실제로 제가 직접 사용해보면서 불편한 점도 여러 가지 발견할 수 있었습니다.",
      image: "https://bp4sp4.github.io/WeddingVideoPage/img/back.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/WeddingVideoPage/",
        },
        {
          title: "Figma",
          icon: <PaletteIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/ShCgLKcrh1RjeZv4DnSUYb/%EC%9B%A8%EB%94%A9%EB%9F%AC%EB%A6%AC?node-id=0-1&p=f&t=Lb8SZvO9ISn9mYLK-0",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/WeddingVideoPage",
        },
      ],
    },
    {
      title: "SkeletonUIPractice",
      dates: "2023.12.15",
      location: "",
      description:
        "개인 프로젝트로 React로 진행하게된 SkeletonUI 웹사이트 입니다.이전의 진행하게된 WeddingLery 소스를 가지고 json으로 파싱하여 웹에 뿌려지게 한 후 로딩전에는 스켈레톤 모양의 UI 나타나고 로딩이 완료되면 스켈레톤 UI 대로 화면에 노출되게 합니다.",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/SkeletonUIPractice/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/SkeletonUIPractice",
        },
      ],
    },
    {
      title: "웹퍼블리싱 - K-Digital 기초역량 훈련",
      dates: "2024.01.24 - 2024.03.20",
      location: "",
      description:
        "여러 프로젝트를 진행하면서 기존에 보유하고 있던 퍼블리싱 역량을 더욱 강화하고, 실무에서 필요한 웹 기술들을 깊이 있게 익혔습니다. 다양한 웹 페이지를 직접 만들며 HTML, CSS, JavaScript 등의 기초적인 기술을 활용한 경험을 쌓았고, 이를 통해 퍼블리싱 작업을 더욱 효율적으로 할 수 있는 스킬을 키울 수 있었습니다. ",
      image:
        "data:image/png;base64,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",
      win: "",
      links: [
        {
          title: "air-bnb : Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/airbnb",
        },
        {
          title: "404-page : Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/404Page",
        },
        {
          title: "Parallax-scrolling : Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/Parallax-scrolling",
        },
        {
          title: "NextLevelFairs: Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/NextLevelFairs",
        },
        {
          title: "KakaoBank : Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/KakaoBank",
        },
      ],
    },
    {
      title: "LostArk-Open-API",
      dates: "24.03.26 - 24.04.02",
      location: "",
      description:
        "이 프로젝트는 내가 좋아하는 게임인 로스트아크를 주제로 만들어서 더욱 즐거웠습니다. Postman을 활용해 로스트아크 OpenAPI에서 데이터를 가져오고, 이를 JSON 형식으로 가공하여 React로 웹페이지에 동적으로 표시했습니다. 모바일 웹 형식으로 제작하여 사용자들이 휴대폰이나 브라우저를 통해 언제 어디서나 쉽게 정보를 확인할 수 있도록 구현했습니다.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Lost_Ark_logo.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/LostArk-Open-API/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/LostArk-Open-API",
        },
      ],
    },
    {
      title: "HtmlStudy",
      dates: "2024.06.27 - 24.08.22",
      location: "",
      description:
        "개인 프로젝트로 HtmlStudy는 HTML과 CSS에 대한 소개를 제공하는 React 기반 웹 페이지입니다. 이 사이트는 웹 개발을 처음 접하는 사람들에게 HTML과 CSS의 기초 개념과 사용 방법을 쉽게 설명하고, 예제를 통해 더 깊이 이해할 수 있도록 돕는 것이 목표입니다",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAYAAAD32pUcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wNi0yN1QwMTowMjoyNCswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOC0wNVQwMTo0NTozMSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDgtMDVUMDE6NDU6MzErMDk6MDAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdjNzEwODMtM2U4OS04YjQzLWJjNGMtNDFjZmZhMDNlNDNjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWJlOTI4ZjAtNzljYi1jZDQ4LWIyODEtYzg1MjJlNGVjY2ZlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YThiZDljNDItNDQwMS0wMzRiLTkxMjItYTk3ZmEzMmM1NGZkIj4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJodG1sVEUiIHBob3Rvc2hvcDpMYXllclRleHQ9IiZsdDtIdG1sc3R1ZHkvJmd0OyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThiZDljNDItNDQwMS0wMzRiLTkxMjItYTk3ZmEzMmM1NGZkIiBzdEV2dDp3aGVuPSIyMDI0LTA2LTI3VDAxOjAyOjI0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0YjViMTlkLWQ4YTQtMWU0MC1hZTA4LTY5ODk0YzNlODFiOSIgc3RFdnQ6d2hlbj0iMjAyNC0wOC0wMVQwMDo1ODozNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZDUzODQzZC05ZTRjLWNlNGQtODUxNS03NTk2MjY1ZTg0N2YiIHN0RXZ0OndoZW49IjIwMjQtMDgtMDVUMDE6NDU6MzErMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODdjNzEwODMtM2U4OS04YjQzLWJjNGMtNDFjZmZhMDNlNDNjIiBzdEV2dDp3aGVuPSIyMDI0LTA4LTA1VDAxOjQ1OjMxKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZkNTM4NDNkLTllNGMtY2U0ZC04NTE1LTc1OTYyNjVlODQ3ZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDphOGJkOWM0Mi00NDAxLTAzNGItOTEyMi1hOTdmYTMyYzU0ZmQiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphOGJkOWM0Mi00NDAxLTAzNGItOTEyMi1hOTdmYTMyYzU0ZmQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43Mf7uAAARwUlEQVR4nO2dS4wcx33Gv5mdmX0/uOLK+6DkpXYlixBXCqkwiOxR4odgH5xLEDmHHAIEMIzQ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",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://htmlstudy.co.kr/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/HtmlStudy",
        },
      ],
    },
    {
      title: "Relux",
      dates: "24.09.27 - 24.11.03",
      location: "",
      description:
        "개인 프로젝트로 리럭스 홈페이지는 명품 소개 사이트이고, 명품에 조금 더 관심을 줄 수 있는 사이트 입니다. UX/UI를 디자인을 논의하기 위해 Figma를 활용했으며, Java, swiper.js, Html5/Css3 이용하여 UI 개발을 진행했습니다.",
      image: "http://3.36.98.75:8080/main/list-view",
      win: "1st Place Winner",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://3.36.98.75:8080/main/list-view",
        },
        {
          title: "Figma",
          icon: <PaletteIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/OlX9bcW7SySE93HnEr58QZ/ReLux?node-id=0-1&p=f&t=avLsjcxiQ2i4dD0Q-0",
        },
        {
          title: "github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/ReLux",
        },
      ],
    },
    {
      title: "(주)TM 미디어 - Publishing",
      dates: "2024.12.10 - 2024.12.17일",
      location: "",
      description:
        "TM 미디어 퍼블리싱은 HTML, CSS, JavaScript를 활용하여 사용자 친화적이고 기능적인 웹페이지를 제작했습니다. 반응형 디자인을 통해 다양한 디바이스 환경에서도 최적의 사용자 경험을 제공합니다",
      image:
        "https://github.com/bp4sp4/TM-Media/blob/main/resources/icons/TMLOGO.png?raw=true",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://tmmedia.co.kr/",
        },
        {
          title: "github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/TM-Media",
        },
      ],
    },
    {
      title: "Gallery",
      dates: "2025.01.03 - 2025.01.06",
      location: "",
      description:
        "CSS Grid를 활용해 이미지뿐만 아니라 다양한 콘텐츠를 효율적으로 배치하는 갤러리 홈페이지를 퍼블리싱한 미니프로젝트입니다. HTML5, CSS3, JavaScript를 사용하여 동적 이미지 로딩과 레이아웃을 구현하며, 사용자 경험을 고려한 디자인을 완성했습니다. 반응형 디자인을 통해 다양한 디바이스 환경에서도 최적의사용자 경험을 제공합니다.",
      image: "https://bp4sp4.github.io/CSSGrid/images/1.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bp4sp4.github.io/CSSGrid/",
        },
        {
          title: "github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bp4sp4/CSSGrid",
        },
      ],
    },
  ],
} as const;
