import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import {
  projectName,
  introduction,
  roles,
  skills,
  workDetails,
  troubleShootings,
} from './constant/index';
import ScrollControlSection from '@/components/sections/ScrollControlSection';
import ProjectTroubleShootingArticle from '@/components/articles/project/ProjectTroubleShootingArticle';

export const metadata = {
  title: projectName,
  description: introduction,
};

export default function WegnalPage() {
  return (
    <ScrollControlSection>
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">{projectName}</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="mt-4">{introduction}</p>
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
