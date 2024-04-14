import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectRoleArticle from '@/components/articles/project/ProjectRoleArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import { roles, skills, workDetails } from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';

export default function WegnalPage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Wegnal-Business</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Wegnal Business는 폐기물 수거∙처리업체를 위한 서비스입니다. 선결제 시스템을 도입하여
          폐기물 수거비용 지급 문제로 인한 혼란을 최소화하고, 거래의 안정성을 높여 폐기물
          수거∙처리업체에게 도움을 줄 수 있습니다.
        </p>
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
        <ProjectNumberOfPeopleArticle content="프론트엔드 1명, 백엔드 1명" />
      </FadeIn>
    </ScrollTopSection>
  );
}
