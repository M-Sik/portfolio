import OAtuhGif from '../../../../../public/images/projects/sikstagram/sikstagram_Oauth.gif';
import AddPostGif from '../../../../../public/images/projects/sikstagram/sikstagram_addpost.gif';
import LikeBookmarkCommentGif from '../../../../../public/images/projects/sikstagram/sikstagram_like_bookmark_comment.gif';
import SearchUserGif from '../../../../../public/images/projects/sikstagram/sikstagram_user_search.gif';
import FollowUnfollowGif from '../../../../../public/images/projects/sikstagram/sikstagram_user_follow_unfollow.gif';
import FollowUserInfoGif from '../../../../../public/images/projects/sikstagram/sikstagram_followuser_info.gif';
import MyPostedBookmarkLikeGif from '../../../../../public/images/projects/sikstagram/sikstagram_mypost_bookmarked_liked.gif';

export const links = [
  {
    url: 'https://sikstagram.vercel.app',
    label: 'sikstagram web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/sikstagram',
    label: 'sikstagram github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
export const skills = ['Next.js 13', 'Typescript', 'Swr', 'Tailwindcss', 'Git', 'Github'];
export const workDetails = [
  {
    content: { type: 'text', href: '', text: 'Lighthouse를 이용한 웹 성능 및 웹 접근성 검사' },
    contentDetails: [],
  },
  {
    content: { type: 'text', href: '', text: 'Sanity를 이용한 서버 데이터 관리' },
    contentDetails: [],
  },
  {
    content: { type: 'text', href: '', text: '회원 관련 기능 구현' },
    contentDetails: [
      'OAuth 로그인(구글, 카카오), Next Meddleware를 이용한 User Session에 따른 처리, 마이페이지',
    ],
  },
  {
    content: { type: 'text', href: '', text: '게시글 관련 기능 구현' },
    contentDetails: ['게시글 작성•조회, 좋아요, 북마크, 댓글 작성'],
  },
  {
    content: { type: 'text', href: '', text: '기타 기능 구현' },
    contentDetails: [
      'File Drag and Drop, Swr을 이용한 데이터 동기화, 유저 팔로우•언팔로우, 사용자 검색',
    ],
  },
];
export const previews = [
  {
    title: 'OAuth 로그인 👇👇',
    gifSrc: [OAtuhGif],
    alt: 'oauth login gif',
  },
  {
    title: '게시글 등록 👇👇',
    gifSrc: [AddPostGif],
    alt: '게시글 등록 gif',
  },
  {
    title: '게시글 및 게시글 상세화면 좋아요, 북마크, 댓글 작성 👇👇',
    gifSrc: [LikeBookmarkCommentGif],
    alt: '게시글 및 게시글 상세화면 좋아요, 북마크, 댓글 작성 gif',
  },
  {
    title: 'Debounce를 이용한 유저 검색 👇👇',
    gifSrc: [SearchUserGif],
    alt: 'Debounce를 이용한 유저 검색 gif',
  },
  {
    title: '유저 팔로우, 언팔로우 👇👇',
    gifSrc: [FollowUnfollowGif],
    alt: '유저 팔로우, 언팔로우 gif',
  },
  {
    title: '팔로우한 유저 정보보기 👇👇',
    gifSrc: [FollowUserInfoGif],
    alt: '팔로우한 유저 정보보기 gif',
  },
  {
    title: '해당 유저가 쓴 게시글, 북마크한 글, 좋아요한 글 조회 👇👇',
    gifSrc: [MyPostedBookmarkLikeGif],
    alt: '해당 유저가 쓴 게시글, 북마크한 글, 좋아요한 글 조회 gif',
  },
];
