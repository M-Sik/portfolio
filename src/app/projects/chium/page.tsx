import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectServiceLinkList from '@/components/articles/project/ProjectServiceLinkArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import { links, roles, skills, workDetails } from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';

export default function ChiumPage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Chium</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Chium은 폐기물 배출자와 수거업체를 연결해 주는 폐기물 안전처리 서비스 입니다. 배출자와
          수거업체간의 입찰 과정을 통하여 폐기물을 처리하며, 배출자는 가장 저렴한 가격에 폐기물을
          배출할 수 있습니다.
        </p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
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
        <ProjectNumberOfPeopleArticle content="Front-End 2명, Back-End 2명 (참여율 Front-End 기준 70%)" />
      </FadeIn>
    </ScrollTopSection>
  );
}
