import port01 from "../assets/img/5unwan.png";
import port02 from "../assets/img/project02.png";
import port03 from "../assets/img/project03.png";
// import port04 from "../assets/img/port04.jpg";
// import port05 from "../assets/img/port05.jpg";
// import port06 from "../assets/img/port06.jpg";
// import port07 from "../assets/img/port07.jpg";
// import port08 from "../assets/img/port08.jpg";
// import port09 from "../assets/img/port09.jpg";
// import port10 from "../assets/img/port10.jpg";

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

export const skillText = [
    {
        title: "꿈을 설계하고 디자인하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
    },
    {
        title: "열심히 할수록 기회는 따른다.",
        desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
    },
    {
        title: "나에게 정직하다.",
        desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    }
]

export const siteText = [
    {
        id: "personal-1",
        type: "PERSONAL",
        title: "요리조리",
        img: port01,
        imgName: "요리조리 프로젝트 썸네일",
        keyword: ["반응형", "TailwindCss", "백엔드 연동"],
        code: "https://github.com/webstoryboy/port2023-vite",
        view: "https://port2023-vite.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
        detailImg: [port02, port03],
        detailImgAlt: ["어주꼬","저쭈고"],
        meta: {
            oneLine: "요리로 이어지는 소셜 커뮤니티",
            period: "2025.06 ~ 2025.10",
            role: "기획 · 디자인 · 프론트엔드 개발 · 백엔드 연동 전담",
            contribution: "100%",
        }
    },
    {
        id: "team-1",
        type: "TEAM",
        title: "요리조리",
        img: port01,
        imgName: "요리조리 프로젝트 썸네일",
        keyword: ["반응형", "TailwindCss", "백엔드 연동"],
        code: "https://github.com/webstoryboy/port2023-vite",
        view: "https://port2023-vite.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
        detailImg: [port02, port03],
        detailImgAlt: ["어주꼬","저쭈고"],
        meta: {
            oneLine: "요리로 이어지는 소셜 커뮤니티",
            period: "2025.06 ~ 2025.10",
            role: "기획 · 디자인 · 프론트엔드 개발 · 백엔드 연동 전담",
            contribution: "100%",
        }
    },
];

export const portText = [
    {
        num: "01",
        title: "어워드에도 올라간 포트폴리오",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        // img: port01,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "KAKAO : webstupids",
    },
    {
        link: "mailto:webstoryboy@naver.com",
        title: "mail : webstoryboy@naver.com",
    },
];

export const footerText = [
    {
        title: "youtube",
        desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
        link: "https://www.youtube.com/@Webstoryboy",
    },
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/webstoryboy",
    }
];