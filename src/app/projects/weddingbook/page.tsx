import FadeIn from '@/components/gasp/FadeIn';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import {
  roles,
  skills,
  workDetails,
  introduction,
  projectName,
  troubleShootings,
} from './constant/index';
import ProjectIntroductArticle from '@/components/articles/project/ProjectIntroductArticle';
import ProjectTroubleShootingArticle from '@/components/articles/project/ProjectTroubleShootingArticle';
import { Suspense } from 'react';
import MoveScroll from '@/components/etc/MoveScroll';

export const metadata = {
  title: projectName,
  description: introduction,
};

export default function WeddingBookPage() {
  return (
    <section>
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
        <ProjectNumberOfPeopleArticle content="프론트엔드 4명, 백엔드 5명" />
      </FadeIn>
      <Suspense>
        <MoveScroll />
      </Suspense>
    </section>
  );
}
