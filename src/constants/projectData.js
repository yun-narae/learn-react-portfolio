// 득근득근
import ounwanWorkoutYoutube from "../assets/img/ounwan/workout-youtube.png";
import ounwanMyPage from "../assets/img/ounwan/my-page.png";
import ounwanWorkoutRecordModal from "../assets/img/ounwan/workout-record-modal.png";
import ounwanWorkoutCheck from "../assets/img/ounwan/workout-check.png";
import ounwanMapSearchFilter from "../assets/img/ounwan/map-search-filter.png";
import ounwanDarkMode from "../assets/img/ounwan/dark-mode.png";
import ounwanDesignSystem from "../assets/img/ounwan/design-system.png";
// 유튜브
import youtubeMain from "../assets/img/youtube/main.png";
import youtubeChannel from "../assets/img/youtube/channel.png";
import youtubeSearch from "../assets/img/youtube/search.png";
import youtubeDarkMode from "../assets/img/youtube/dark.png";
import youtubeMore from "../assets/img/youtube/more.gif";
import youtubeReaction from "../assets/img/youtube/reaction.gif";
import youtubeSkeleton from "../assets/img/youtube/skeleton.gif";
// 타잉
import taingMain from "../assets/img/taing/main.png";
import taingFindIdDisable from "../assets/img/taing/findId-disable.png";
import taingFindIdActive from "../assets/img/taing/findId-active.png";
import taingFindIdError from "../assets/img/taing/findId-error.png";
import taingProfileSelect from "../assets/img/taing/profile-select.png";
import taingSearch from "../assets/img/taing/search.png";
import taingReaction from "../assets/img/taing/reaction.gif";
import taingSkeleton from "../assets/img/taing/skeleton.gif";


export const projectData = {
    yorijori: {
        id: "personal-1",
        title: "요리조리",
        meta: {
            oneLine: "요리로 사람을 연결하는 모임 기반 커뮤니티 플랫폼",
            period: "2025.07 ~ 진행중",
            role: "기획 · 디자인 · 프론트엔드 개발 · 백엔드 연동",
            stack: ["React", "Vite", "TailwindCSS", "PocketBase"],
        },
        introduction: {
            title: "프로젝트 소개",
            description: [
                "요리조리는 요리를 매개로 사람들을 연결하는 모임 기반 커뮤니티 플랫폼입니다.",
                "사용자는 다양한 요리 모임을 등록하거나 참여할 수 있고, 서로의 레시피와 후기를 공유하면서 요리 경험을 나눌 수 있습니다.",
                "‘요리로 이어지는 소셜 커뮤니티’를 목표로 한 개인 프로젝트입니다."
            ],
        },
        features: [
            {
                title: "로그인 / 회원 관리",
                desc: [
                    "PocketBase의 Auth 기능을 활용해 이메일 기반 로그인과 로그아웃을 구현했습니다.",
                    "회원 탈퇴 시 사용자가 작성한 게시글, 댓글, 찜, 참여 기록 등 모든 관련 데이터가 자동으로 정리되도록 설계했습니다."
                ],
            },
            {
                title: "모임 등록 / 수정 / 삭제",
                desc: [
                    "사용자는 요리 모임을 직접 등록하고 이미지를 함께 업로드할 수 있습니다.",
                    "수정 및 삭제 시 UI와 DB가 동시에 반영되어 즉각적인 변화를 제공합니다."
                ],
            },
            {
                title: "관심 모임 저장",
                desc: [
                    "로컬스토리지 기반 스냅샷으로 서버 요청 없이 즉각적인 하트 토글 반응을 제공합니다.",
                    "PocketBase의 post_likes 컬렉션과 연동해 사용자 찜 상태를 저장하고, 데이터 일관성을 유지했습니다."
                ],
            },
            {
                title: "댓글 시스템",
                desc: [
                    "댓글 작성 즉시 렌더링되어 실시간 반영되며, 삭제 시 해당 게시글의 댓글 수가 자동으로 감소합니다.",
                    "비동기 처리 후 UI 업데이트까지 연결하여 자연스러운 인터랙션을 완성했습니다."
                ],
            },
            {
                title: "모임 예약 및 취소",
                desc: [
                    "사용자는 모임에 참여하거나 취소할 수 있으며, 인원 제한에 도달하면 자동으로 모집 마감 상태로 전환됩니다.",
                    "중복 요청 방지 로직을 추가해 여러 사용자가 동시에 클릭하더라도 데이터 불일치를 예방했습니다."
                ],
            },
            {
                title: "반응형 + 다크모드 + Skeleton",
                desc: [
                    "모바일, 태블릿, 데스크톱 해상도별로 레이아웃이 최적화되어 있습니다.",
                    "Skeleton 로딩 UI와 Tailwind 기반 다크모드를 통해 피드백 경험을 향상시켰습니다."
                ],
            },
            {
                title: "디자인 및 컴포넌트화 + Storybook",
                desc: [
                    "Figma로 디자인 시스템을 직접 설계하고, 컴포넌트를 세분화했습니다.",
                    "Storybook을 통해 문서화하여 재사용성과 유지보수성을 높였습니다."
                ],
            },
        ],
        troubleshooting: [
            {
                title: "댓글 수 실시간 반영 안됨",
                cause: "댓글 CRUD는 되었지만 post의 comments_count 필드 업데이트 누락",
                solution: "댓글 등록·삭제 시 pb.collection('post').update(id, { comments_count: … }) 로직 추가 후 setItems 동기화",
            },
            {
                title: "배포 환경에서 게시글 로드 실패",
                cause: "PocketBase URL을 상대경로(/api)로 지정해 빌드 환경에서 CORS 발생",
                solution: ".env에 절대 경로(VITE_PB_URL=https://y-narae.pockethost.io)로 고정하여 해결",
            },
            {
                title: "PostCard 클릭 시 Detail 페이지 이동 불가",
                cause: "카드 클릭 영역이 내부 버튼과 겹쳐 이벤트 버블링 차단됨",
                solution: "상위에서 onClick 처리, 내부 버튼에는 stopPropagation() 적용",
            },
        ],
        workScreen: {
            src: [taingMain, taingMain],
            alt: ["port02-이미지", "port03-이미지"],
        },
        retrospect: {
            quote: "“처음으로 완전한 CRUD + 사용자 흐름이 구현된 프로젝트였다.”",
            body: [
                "요리조리를 만들며 상태 관리보다 중요한 것은 ‘데이터 구조의 일관성’임을 배웠습니다.",
                "PocketBase로 관계형 데이터 설계와 실시간 동기화를 직접 체득했습니다.",
                "Skeleton, 다크모드, 버튼 상태 변화 등 작은 디테일이 사용자 경험을 풍부하게 만든다는 점을 깨달았습니다.",
                "기능을 쌓기보다 하나의 기능을 완성도 있게 구현하는 중요성을 느꼈습니다."
            ],
        },
    },

    ounwan: {
        id: "team-1",
        title: "득근득근",
        meta: {
            oneLine: "운동을 기록하고 성취를 시각적으로 확인할 수 있는 맞춤형 운동 관리 앱",
            period: "2024.08.26 ~ 2024.09.24",
            role: "기획 · 디자인 · 프론트엔드 개발",
            stack: ["React", "TypeScript", "Vite", "TailwindCSS", "PocketBase"],
            contribution: "30%",
        },
        contribution: [
            {
                title: "디자인 시스템 구축",
                desc: [
                    "버튼·인풋·모달 등 핵심 컴포넌트 상태(hover/active/disabled/error)와 인터랙션 가이드를 정의해 개발·디자인 핸드오프를 단순화했습니다.",
                    "라이트/다크 테마 기준 컬러 스타일을 Figma 스타일로 정리하고, 컴포넌트에 일관되게 적용했습니다.",
                    "재사용성을 위해 네이밍과 계층 구조를 문서화했습니다."
                ]
              },
              {
                title: "전반적인 컴포넌트 및 페이지 스타일링",
                desc: [
                    "공통 여백·폰트·아이콘 크기를 규칙으로 묶어 ‘통일감’을 최우선으로 유지했습니다.",
                    "컴포넌트 variant/size 규칙을 정의해 화면 간 스타일 일관성을 유지했습니다.",
                    "접근성(명도 대비·포커스 링·키보드 탐색)을 기본값으로 포함해 시각적 일관성과 사용성을 함께 확보했습니다."
                ]
              },
              {
                title: "다크모드 기능 구현",
                desc: [
                  "의미 기반 컬러 토큰(서피스/텍스트/보더)을 CSS 변수로 추상화해 라이트/다크 테마를 스위치만으로 전환 가능하게 설계했습니다.",
                  "`localStorage`로 사용자 선택을 영속화했습니다.",
                ]
              }
        ],
        introduction: {
            title: "프로젝트 소개",
            description: [
                "득근은 사용자가 자신의 운동 내역을 자유롭게 기록하고 관리할 수 있는 맞춤형 운동 기록 앱입니다.",
                "캘린더에서 출석률을 확인하고, 지도에서 근처 헬스장을 탐색하며, 유튜브 영상을 통해 운동 동기부여를 얻을 수 있습니다.",
                "‘꾸준한 운동을 돕는 기록 중심 앱’을 목표로 한 팀 프로젝트입니다."
            ],
        },
        features: [
            {
                title: "로그인 / 회원가입 / 탈퇴",
                desc: [
                    "PocketBase Auth로 이메일 로그인과 카카오 API 로그인을 지원합니다.",
                    "회원가입은 step-by-step 방식이며, 중단 후 재접속 시 임시 저장을 통해 이어서 진행할 수 있습니다.",
                    "회원탈퇴 시 관련 데이터(기록, 즐겨찾기 등)가 함께 삭제되어 데이터 일관성을 유지합니다."
                ],
            },
            {
                title: "운동 영상 리스트",
                desc: [
                    "YouTube API를 연동해 다양한 운동 영상을 불러오고, 종목별 카테고리 필터로 탐색할 수 있습니다.",
                    "사용자는 관심 있는 종목의 영상을 모아보며 루틴 참고 및 동기부여를 얻을 수 있습니다."
                ],
            },
            {
                title: "운동기록 캘린더",
                desc: [
                    "날짜별로 운동 기록을 등록하고, 기록된 날은 캘린더에 표시됩니다.",
                    "월별 출석률을 계산해 꾸준한 운동 습관 형성에 도움을 줍니다."
                ],
            },
            {
                title: "지도 페이지",
                desc: [
                    "카카오맵 API로 근처 헬스장을 검색하고, 즐겨찾기 기능을 통해 자주 방문하는 장소를 저장할 수 있습니다."
                ],
            },
            {
                title: "다크모드",
                desc: [
                    "전역 Context로 다크모드 상태를 관리하고, localStorage에 저장하여 새로고침 후에도 유지되도록 구현했습니다.",
                    "초기 로딩 시 FOUC 방지를 위해 index.html에서 테마 클래스를 미리 주입했습니다."
                ],
            },
            {
                title: "디자인 및 컴포넌트화",
                desc: [
                    "Figma로 다크모드를 고려한 디자인 시스템을 설계했습니다.",
                    "Header, GNB, SVG 아이콘 등 재사용 가능한 컴포넌트를 제작해 UI 일관성을 유지했습니다."
                ],
            },
        ],
        troubleshooting: [
            {
                title: "ReactDOM.createRoot 중복 호출 경고",
                cause: "HMR 시 main.tsx가 재평가되며 동일 컨테이너에 createRoot()가 중복 실행됨",
                solution: "HMR 시 root.unmount() 처리 추가로 중복 마운트를 방지",
            },
            {
                title: "다크모드 새로고침 시 초기화",
                cause: "테마 상태를 React state로만 관리하여 새로고침 시 소실됨",
                solution: "localStorage에 isDark 값을 저장하고, 초기 렌더 시 불러오는 로직 추가",
            },
            {
                title: "카카오맵 로드 오류",
                cause: "SDK 로드 시점이 늦어 초기 렌더 시 window.kakao 참조 에러 발생",
                solution: "SDK 로드 완료를 Promise로 감싸고 완료 후 지도 컴포넌트를 렌더링하도록 변경",
            },
        ],
        workScreen: {
            src: [ounwanWorkoutYoutube, ounwanMyPage, ounwanWorkoutRecordModal, ounwanWorkoutCheck, ounwanMapSearchFilter, ounwanDarkMode, ounwanDesignSystem],
            alt: ["유튜브 API", "마이페이지", "운동기록 모달창", "운동기록 확인", "지도 검색 및 필터", "다크모드", "디자인 시스템"],
        },
        retrospect: {
            quote: "“빠듯한 일정 속에서도 팀의 합을 맞추는 것이 곧 품질이었다.”",
            body: [
                "짧은 개발 기간 동안 기능과 디자인을 병행하며 협업의 중요성을 체감했습니다.",
                "매일 진행 상황을 공유하고 코드리뷰를 통해 스타일 일관성을 유지했습니다.",
                "시간 부족 속에서도 각자 맡은 기능을 끝까지 책임지고 완성하면서, 협업 프로젝트의 완성도를 높였습니다.",
                "다음 프로젝트에서는 초기 역할 분담과 일정 관리의 체계화를 더 강화할 계획입니다."
            ],
        },
    },

    youtube: {
        id: "personal-2",
        title: "유튜브 사이트",
        meta: {
            oneLine: "유튜브 영상 데이터를 기반으로 한 영상 검색 및 채널 관리 사이트",
            period: "2024.10 ~ 2025.01",
            role: "기획 · 디자인 · 프론트엔드 개발",
            stack: ["React", "Vite", "SCSS", "유튜브 API"],
            contribution: "100%",
        },
        introduction: {
            title: "프로젝트 소개",
            description: [
                "React 프레임워크와 YouTube API를 이용하여 제작한 개인 유튜브형 사이트입니다.",
                "React의 컴포넌트 구조화와 상태 관리 패턴을 실습하고, YouTube Data API/Raw RapidAPI 응답을 가공해 의미 있는 정보로 제공하는 전 과정을 구현했습니다.",
                "채널 · 영상 · 카테고리 페이지로 구성했으며, 스켈레톤 로딩, 다크 테마, 반응형, Swiper 커스텀 내비게이션 등 다양한 UI/UX 실험을 포함합니다."
            ]
        },
        features: [
            {
                title: "데이터 연동",
                desc: [
                    "YouTube Data API를 통해 채널/영상/검색 결과를 불러옵니다.",
                    "RapidAPI 소스도 함께 사용하여 특정 엔드포인트의 보조 데이터(예: 트렌딩/카테고리)를 보강했습니다."
                ]
            },
            {
                title: "검색 및 탐색",
                desc: [
                    "키워드 기반의 글로벌 검색을 지원합니다.",
                    "카테고리/채널별 필터로 원하는 영상을 빠르게 탐색할 수 있습니다.",
                    "목록형 ‘더보기’ 버튼으로 점진적 로딩을 제공합니다."
                ]
            },
            {
                title: "UI/UX",
                desc: [
                    "스켈레톤 로딩으로 데이터 지연 시 체감 시간을 줄였습니다.",
                    "ThemeProvider 기반 다크모드를 제공하며 사용자의 선택을 지속합니다.",
                    "반응형 레이아웃과 Swiper 커스텀 내비게이션(버튼/드래그)을 적용했습니다."
                ]
            }
        ],
        troubleshooting: [
            {
                title: "API 한도 및 지연 대응",
                cause: "YouTube API 쿼터 제한 및 응답 지연으로 첫 페인트 체감 저하",
                solution: "초기 진입 화면에 스켈레톤과 단계적 데이터 페칭(필수 → 보조)을 적용해 UX를 개선"
            },
            {
                title: "다크테마 초기 깜빡임(FOUC)",
                cause: "렌더 이전 테마 상태 반영 지연",
                solution: "초기 렌더 전에 저장된 테마를 읽어 HTML 루트에 즉시 클래스를 주입해 FOUC 방지"
            },
            {
                title: "Swiper 커스텀 내비게이션 접근성",
                cause: "기본 버튼 레이블/포커스 이동 부족",
                solution: "aria-label, tabindex, 키보드 제어를 추가하고 포커스 링을 명시적으로 스타일링"
            }
        ],
        workScreen: {
            src: [youtubeMain, youtubeChannel, youtubeSearch, youtubeDarkMode, youtubeMore, youtubeReaction, youtubeSkeleton],
            alt: ["메인 페이지", "채널 페이지", "검색", "다크모드", "더보기", "반응형", "스켈렉톤"],
        },
        retrospect: {
            quote: "“외부 API 중심 서비스에서 ‘느낌 좋은 속도’는 데이터 전략과 UI 스켈레톤의 합이었다.”",
            body: [
                "요청/응답 흐름을 단순화하고, 목록을 ‘필수 정보 → 부가 정보’ 순으로 채우는 전략이 UX에 큰 영향을 준다는 걸 확인했습니다.",
                "다크모드와 반응형을 초기에 구조화해두면 중후반 스타일 변경 비용이 크게 줄어듭니다.",
                "API 한도/지연 같은 외부 요인을 UI/UX로 완충하는 설계가 실서비스 품질에 직결됨을 배웠습니다."
            ]
        }
    },
    taing: {
        id: "team-2",
        title: "타잉 클론 코딩",
        type: "Team",
        meta: {
            oneLine: "팀 미션 요구사항에 맞춰 구현한 타잉 클론 코딩 – 첫 팀프로젝트에서 협업·퍼블리싱 중심 역할 수행",
            period: "2024.07.05 ~ 2024.07.19",
            role: "퍼블리싱 · UI 개발 (헤더, 아이디/비밀번호 찾기)",
            contribution: "20%",
            stack: ["HTML", "SCSS", "JavaScript", "PocketBase"],
        },
        introduction: {
            title: "프로젝트 소개",
            description: [
                "기존 타잉 서비스를 팀 미션 스펙에 맞춰 재구성한 클론 코딩 프로젝트입니다.",
                "첫 팀프로젝트로서 업무 분담·소통·깃 이슈/PR 중심 협업 사이클을 체득했고, 제가 구현한 영역(헤더·아이디/비밀번호 찾기)을 통해 마크업·스타일·유효성 검사·접근성 체크리스트 적용까지 전 과정을 경험했습니다."
            ]
        },
        contribution: [
            {
                title: "헤더 컴포넌트",
                desc: "HTML 구조·SCSS 설계, 반응형, 접근성(시맨틱 태그, aria, 포커스 링, 키보드 탐색)"
            },
            {
                title: "아이디/비밀번호 찾기 페이지",
                desc: "마크업·스타일, 아이디/이메일/패스워드 유효성 검사, 조건 충족 시 버튼 활성/비활성",
            },
            {
                title: "회원 데이터 통신 연동",
                desc: "입력값 검증 결과에 따른 안내/오류 메시지 제공"
            },
            {
                title: "마크업/스타일링 보조",
                desc: "프로필 선택·편집 페이지 등 마크업/스타일링 보조"
            }
        ],
        features: [
            {
                title: "웹 접근성",
                desc: [
                    "대체텍스트·키보드 조작·포커스 표시·페이지 제목/언어 등 필수 항목을 체크리스트로 점검했습니다.",
                    "레이블·오류 안내·오류 방지·입력 도움말·일관된 컴포넌트를 보완해 접근성을 강화했습니다."
                ]
            },
            {
                title: "반응형 레이아웃",
                desc: [
                    "브레이크포인트: 모바일(min-width: 320px), 태블릿(768px), 데스크탑(1920px) 기준으로 반응형을 구현했습니다.",
                    "터치/호버 상태 분기, 이미지 크롭 비율 유지(object-fit), 리스트 → 그리드 전환 등으로 해상도별 사용성을 최적화했습니다."
                ]
            },
            {
                title: "PocketBase 데이터 스키마 & CRUD",
                desc: [
                    "users · profiles · search_keywords(인기 검색어) 등 컬렉션을 설계하고 필드/관계/권한 규칙을 정의했습니다.",
                    "CRUD API 연동으로 검색 카운트 실시간 갱신과 계정 관련 데이터 관리를 구현했습니다."
                ]
            },
            {
                title: "인증 & 계정",
                desc: [
                    "로그인/로그아웃/회원가입/회원탈퇴 플로우, 아이디·비밀번호 찾기 상세 구현",
                    "정규식 기반 유효성 검사와 상태에 따른 버튼 활성/비활성 처리"
                ]
            },
            {
                title: "검색",
                desc: [
                    "검색어 카운트를 서버에 반영해 실시간 인기 검색어 제공"
                ]
            },
            {
                title: "UI/UX",
                desc: [
                    "반응형 레이아웃, 스켈레톤 및 로딩 스피너",
                    "웹 접근성 체크리스트 적용: 레이블 연결, 키보드 내비게이션, 명도 대비, 페이지 제목/언어 지정 등"
                ]
            }
        ],
        troubleshooting: [
            {
                title: "첫 팀프로젝트 협업 사이클 정립",
                cause: "작업 분담·진척 공유 부재로 충돌/대기 시간 발생",
                solution: "깃 이슈·브랜치 전략(feature/header, feature/find-account 등)과 PR 템플릿을 사용하고, 데일리 공유로 리스크를 조기 해소"
            },
            {
                title: "SCSS 구조화 & 우선순위 충돌",
                cause: "중복 규칙과 셀렉터 우선순위로 스타일 일관성 저하",
                solution: "BEM 네이밍과 파셜 분리(variables/mixins/components)로 7-1 유사 구조 도입, 공통 토큰화"
            },
            {
                title: "접근성 기본기 보강",
                cause: "초기 헤더/폼에 레이블, 포커스 표시, 키보드 흐름 미흡",
                solution: "label for, aria-* 속성 보강, 탭 순서 점검, 포커스 스타일 명시로 체크리스트 충족"
            }
        ],
        workScreen: {
            src: [taingMain, taingFindIdDisable, taingFindIdActive, taingFindIdError, taingProfileSelect, taingSearch, taingReaction, taingSkeleton],
            alt: ["메인 페이지", "아이디 찾기(버튼 비활성화)", "아이디 찾기(버튼 활성화)", "아이디 찾기(오류 페이지)", "프로필 선택 페이지", "검색", "반응형", "스켈렉톤"],
        },
        retrospect: {
            quote: "“협업에서는 코드보다 먼저 소통과 규칙이 성능을 만든다.”",
            body: [
                "이슈/PR 중심으로 상황을 투명하게 공유하며 작업 속도와 품질이 함께 개선되었습니다.",
                "SCSS와 BEM 기반 구조화를 통해 재사용성과 유지보수성이 크게 향상되었습니다.",
                "접근성 체크리스트를 실제 페이지에 적용하며 레이블·포커스·명도 대비 등 기본기를 체득했습니다."
            ]
        }
    },
};
