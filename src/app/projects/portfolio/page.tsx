import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import ProjectServiceLinkList from '@/components/articles/project/ProjectServiceLinkArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import ProjectPreviewArticle from '@/components/articles/project/ProjectPreviewArticle';
import { links, previews, skills, workDetails, projectName, introduction } from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';
import ProjectIntroductArticle from '@/components/articles/project/ProjectIntroductArticle';

export const metadata = {
  title: projectName,
  description: introduction,
};

export default function PortFolioPage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <ProjectIntroductArticle content={introduction} projectName={projectName} />
      </FadeIn>
      <FadeIn delay={0.6}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectUseSkillArticle skills={skills} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectWorkDetailArticle title="💻 작업 내용" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectNumberOfPeopleArticle content="개인 프로젝트" />
      </FadeIn>
      <BottomToTopFadeIn delay={0}>
        <ProjectPreviewArticle title="📺 미리 보기" previews={previews} />
      </BottomToTopFadeIn>
    </ScrollTopSection>
  );
}
