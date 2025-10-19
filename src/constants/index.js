import ounwanthumbnail from "../assets/img/ounwan/ounwanthumbnail.png";
import youtubethumbnail from "../assets/img/youtube/youtubethumbnail.png";
import taingthumbnail from "../assets/img/taing/taingthumbnail.png";

export const headerNav = [
    { title: "intro", url: "#intro" },
    { title: "skill", url: "#skill" },
    { title: "project", url: "#project" },
    { title: "contact", url: "#contact" },
];

export const introText = {
    title: "Front-End",
    desc: ["프론트엔드 개발자", " 윤나래입니다."],
    text: ["꺼지지 않는 불꽃으로 사용자 경험을 빚는 개발자입니다."],
}

// ---- 이력 데이터 ----
export const resumeData = {
    career: [
        {
            from: "2022.08",
            to:   "2023.03",
            company: "주식회사 비엠스마일",
            role: "개발팀 UX/UI 디자이너",
            desc: "UX/UI 디자인 및 마케팅 콘텐츠 디자인"
        },
        {
            from: "2022.01",
            to:   "2022.07",
            company: "닥터이레이저피부과의원",
            role: "마케팅팀 디자이너",
            desc: "원내 전반 마케팅 콘텐츠 디자인"
        },
    ],
    education: [
        {
            from: "2024.04.22",
            to:   "2024.09.25",
            school: "멋쟁이사자처럼 부트캠프",
            course: "프론트엔드 10기",
            desc: "React·Tailwind·SCSS·웹접근성 기반 팀 프로젝트 경험"
        },
        {
            from: "2023.06.12",
            to:   "2023.12.11",
            school: "이젠컴퓨터아카데미",
            course: "[디지털디자인] 모바일 웹 & 앱디자인(프론트엔드)",
            desc: "HTML/CSS 클론코딩으로 퍼블리싱 기초 강화"
        },
    ],
};

export const Interview = [
    {
        title: "프론트엔드 개발자가 되기로 한 계기",
        desc: `디자인만으로는 표현할 수 없는 **인터랙션과 사용자 경험의 '완성'**을 직접 구현하고 싶었습니다.

                디자이너로 일하며 시각적인 완성도뿐 아니라 사용자가 실제로 느끼는 흐름과 반응에 더 깊이 끌렸습니다. 그 열정은 마치 **'꺼지지 않는 불꽃'**처럼 저를 코드 세계로 이끌었습니다.

                이제는 디자인 감각을 토대로 사용자 중심의 화면을 직접 구현하고, 더 나은 사용성을 만들어가는 프론트엔드 개발자로 성장하고 있습니다.`
    },
    {
        title: "프론트엔드 개발자로서 중요하게 생각하는 것",
        desc: `프론트엔드는 사용자와 서비스가 만나는 첫 번째 지점이라고 생각합니다. 따라서 단순히 화면을 만드는 것이 아니라, 사용자가 느끼는 **속도·흐름·피드백**까지 고려한 경험을 구현하는 것이 가장 중요하다고 봅니다. 
        
        코드 측면에서는 **일관된 구조와 명확한 컴포넌트 설계**, 디자인 측면에서는 **사용성을 해치지 않는 심미성**, 팀워크 측면에서는 **협업이 쉬운 코드와 커뮤니케이션**을 항상 염두에 둡니다.

        결국 프론트엔드 개발자의 역할은 "보이는 것" 그 이상이라 생각합니다. **UI와 UX를 연결하는 다리**로서, 사용자의 경험을 더 나은 방향으로 확장시키는 개발자가 되고자 합니다.`
    },
    {
        title: "프론트엔드 개발자로서 성장하기 위해 노력한 것",
        desc: `프론트엔드의 기본기를 다지기 위해 **이젠컴퓨터아카데미**에서 퍼블리싱 과정을 수료하고,
            HTML/CSS의 구조적 설계와 클론 코딩으로 기초를 다졌습니다.

            이후 **멋쟁이사자처럼 프론트엔드 부트캠프**에서 React, Tailwind, SCSS, 웹 접근성 등 실무 중심의 기술을 배우며 팀 프로젝트를 통해 기획·디자인·개발 전 과정을 경험했습니다.

            개인적으로는 여러 프로젝트를 직접 설계·구현하며 컴포넌트 구조화, PocketBase 연동, 반응형/다크모드, 성능 최적화 등 디자인 감각과 개발 사고를 함께 성장시켜 왔습니다.`
    }
]

export const siteText = [
    {
        id: "personal-1",
        type: "PERSONAL",
        title: "요리조리",
        img: ounwanthumbnail,
        imgName: "요리조리 프로젝트 썸네일",
        keyword: ["반응형", "TailwindCss", "백엔드 연동"],
        code: "https://github.com/yun-narae/yorijori-project",
        view: "https://yorijori-project.netlify.app/",
    },
    {
        id: "team-1",
        type: "TEAM",
        title: "득근득근",
        img: ounwanthumbnail,
        imgName: "득근득근 프로젝트 썸네일",
        keyword: ["퍼블리싱", "TypeScript", "module.css"],
        code: "https://github.com/FRONTENDSCHOOL10/5unwan",
        view: "https://dgdg-ooo.netlify.app/",
    },
    {
        id: "personal-2",
        type: "PERSONAL",
        title: "유튜브 사이트",
        img: youtubethumbnail,
        imgName: "유튜브 사이트 썸네일",
        keyword: ["반응형", "유튜브API", "SCSS"],
        code: "https://github.com/yun-narae/youtube-project",
        view: "https://narae-youtube.netlify.app/",
    },
    {
        id: "team-2",
        type: "TEAM",
        title: "타잉",
        img: taingthumbnail,
        imgName: "타잉 프로젝트 썸네일",
        keyword: ["반응형", "퍼블리싱", "웹접근성", "SCSS"],
        code: "https://github.com/FRONTENDSCHOOL10/Trinity",
        view: "https://trinitytaing.netlify.app/",
    },
];