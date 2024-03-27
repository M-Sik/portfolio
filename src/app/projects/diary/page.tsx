import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import ProjectServiceLinkList from '@/components/articles/project/ProjectServiceLinkArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import ProjectPreviewArticle from '@/components/articles/project/ProjectPreviewArticle';
import { links, previews, skills, workDetails } from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';

export default function DiaryPage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Diary</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          My Diary는 나의 일상을 기록하는 서비스입니다. Vue만 이용하여 서비스를 구현해보니 React에
          대해 궁금하여 공부하고자 작은 프로젝트를 진행하였습니다. 프로젝트를 진행하며 Vue와
          비슷하다는 생각이 들었으며 Hooks에 대해 공부할 수 있었습니다.
        </p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectUseSkillArticle skills={skills} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectWorkDetailArticle title="💻 작업 내용" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectNumberOfPeopleArticle content="개인 프로젝트" />
      </FadeIn>
      <BottomToTopFadeIn delay={0}>
        <ProjectPreviewArticle title="📺 미리 보기" previews={previews} />
      </BottomToTopFadeIn>
    </ScrollTopSection>
  );
}
