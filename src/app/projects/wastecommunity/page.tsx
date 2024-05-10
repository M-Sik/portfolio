import FadeIn from '@/components/gasp/FadeIn';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import {
  roles,
  skills,
  workDetails,
  projectName,
  introduction,
  troubleShootings,
} from './constant/index';
import ScrollControlSection from '@/components/sections/ScrollControlSection';
import ProjectIntroductArticle from '@/components/articles/project/ProjectIntroductArticle';
import ProjectTroubleShootingArticle from '@/components/articles/project/ProjectTroubleShootingArticle';

export const metadata = {
  title: projectName,
  description: introduction,
};

export default function WastecommunityPage() {
  return (
    <ScrollControlSection>
      <FadeIn delay={0.3}>
        <ProjectIntroductArticle content={introduction} projectName={projectName} />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ProjectUseSkillArticle skills={skills} />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ProjectRoleArticle roles={roles} />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ProjectWorkDetailArticle title="💻 담당 업무" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ProjectTroubleShootingArticle troubleShootings={troubleShootings} />
      </FadeIn>
      <FadeIn delay={0.3}>
        <ProjectNumberOfPeopleArticle content="프론트엔드 1명, 백엔드 1명" />
      </FadeIn>
    </ScrollControlSection>
  );
}
