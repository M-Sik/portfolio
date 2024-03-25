import MainPageGif from '../../../../../public/images/projects/diary/diary_main.gif';
import AddPostGif from '../../../../../public/images/projects/diary/diary_add_diary.gif';
import UpdatePostGif from '../../../../../public/images/projects/diary/diary_update_diary.gif';
import DeleteGif from '../../../../../public/images/projects/diary/diary_delete_diary.gif';

export const links = [
  {
    url: 'https://devsik-diary.netlify.app/',
    label: 'diary web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/react-diary',
    label: 'diary github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
export const skills = ['React.js 18', 'Typescript', 'Zustand', 'Scss', 'Git', 'Github'];
export const workDetails = [
  {
    content: '함수형 컴포넌트 기반의 반응형 UI 구현',
    contentDetails: [],
  },
  {
    content: 'Zustand와 LocalStorage를 이용한 데이터 관리',
    contentDetails: [],
  },
  {
    content: '다이어리 조회, 생성, 수정, 삭제',
    contentDetails: [],
  },
];
export const previews = [
  {
    title: '메인화면 타이핑 효과 👇👇',
    gifSrc: [MainPageGif],
    alt: 'main page gif',
  },
  {
    title: '다이어리 작성 👇👇',
    gifSrc: [AddPostGif],
    alt: '다이어리 등록 gif',
  },
  {
    title: '다이어리 수정 👇👇',
    gifSrc: [UpdatePostGif],
    alt: '다이어리 수정 gif',
  },
  {
    title: '다이어리 삭제 👇👇',
    gifSrc: [DeleteGif],
    alt: '다이어리 삭제 gif',
  },
];
