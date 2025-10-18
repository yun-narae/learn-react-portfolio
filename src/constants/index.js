import ounwanthumbnail from "../assets/img/ounwan/thumbnail.png";
import youtubethumbnail from "../assets/img/youtube/thumbnail.png";
import taingthumbnail from "../assets/img/taing/thumbnail.png";

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