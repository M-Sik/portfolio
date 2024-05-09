import FadeIn from '@/components/gasp/FadeIn';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import {
  introduction,
  projectName,
  roles,
  skills,
  troubleShootings,
  workDetails,
} from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';
import ProjectIntroductArticle from '@/components/articles/project/ProjectIntroductArticle';
import ProjectTroubleShootingArticle from '@/components/articles/project/ProjectTroubleShootingArticle';

export default function ChiumPage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <ProjectIntroductArticle content={introduction} projectName={projectName} />
      </FadeIn>
      <FadeIn delay={0.6}>
        <ProjectUseSkillArticle skills={skills} />
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectRoleArticle roles={roles} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectWorkDetailArticle title="💻 담당 업무" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectTroubleShootingArticle troubleShootings={troubleShootings} />
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectNumberOfPeopleArticle content="Front-End 2명, Back-End 2명 (참여율 Front-End 기준 70%)" />
      </FadeIn>
    </ScrollTopSection>
  );
}
