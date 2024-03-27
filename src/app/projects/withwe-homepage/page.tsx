import FadeIn from '@/components/gasp/FadeIn';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectServiceLinkListArticle from '@/components/articles/project/ProjectServiceLinkArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import ProjectIntroductArticle from '@/components/articles/project/ProjectIntroductArticle';
import { links, skills, roles, workDetails } from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';

export default function WithweHomePage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <ProjectIntroductArticle
          content="회사를 대표하는 홈페이지이며 Next.js를 활용하여 개발하였습니다."
          projectName="Withwe 회사 홈페이지"
        />
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkListArticle links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectUseSkillArticle skills={skills} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectRoleArticle roles={roles} />
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectWorkDetailArticle title="💻 담당 업무" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={2.1}>
        <ProjectNumberOfPeopleArticle content="프론트엔드 1명" />
      </FadeIn>
    </ScrollTopSection>
  );
}
