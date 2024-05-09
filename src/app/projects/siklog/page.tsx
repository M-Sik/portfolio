import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import ProjectServiceLinkList from '@/components/articles/project/ProjectServiceLinkArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import ProjectIntroductArticle from '@/components/articles/project/ProjectIntroductArticle';
import ProjectPreviewArticle from '@/components/articles/project/ProjectPreviewArticle';
import {
  introducts,
  links,
  previews,
  skills,
  workDetails,
  projectName,
  troubleShootings,
} from './constant/index';
import ScrollTopSection from '@/components/sections/ScrollTopSection';
import ProjectTroubleShootingArticle from '@/components/articles/project/ProjectTroubleShootingArticle';

export default function SiklogPage() {
  return (
    <ScrollTopSection>
      <FadeIn delay={0.3}>
        <ProjectIntroductArticle
          content={`개인 블로그를 가지고 싶어 Next.js App Route 방식을 이용하여 만든 블로그입니다.\n\nNext.js의 API Route와 MongoDB를 이용하여 데이터 관리를 하였으며, AWS를 이용하여 호스팅 및 배포 자동화를 진행하였으나 나 비용 문제로 인해 호스팅 서비스를 Vercel로 변경하였습니다.\n\n블로그라는 특성상 다른 사용자들에게 노출이 되어야 하기 때문에 어떻게 하면 검색엔진이 읽기 쉬운 블로그를 만들 수 있을지를 고민을 하였습니다.\n\nSEO에 대해 고민하고 적용한 결과는 아래와 같습니다.`}
          listContents={introducts}
          projectName={projectName}
        />
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
        <ProjectTroubleShootingArticle troubleShootings={troubleShootings} />
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
