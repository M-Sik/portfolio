import React from 'react';
import Underline from '../gasp/UnderLine';
import ScrollTriggerFadeIn from '../gasp/ScrollTriggerFadeIn';
import TopToBottomFadeIn from '../gasp/TopToBottomFadeIn';

export default function SkillSection() {
  return (
    <section className="h-screen w-full bg-red-400 pt-[20vh]">
      <div className="bg-blue-300 max-w-screen-lg mx-auto">
        <Underline
          delay={0.2}
          duration={2}
          color="rgb(248, 205, 7)"
          className="text-7xl mobile:text-4xl w-full block"
        >
          <p>잘되나 보자</p>
        </Underline>
      </div>
      <div>
        <ScrollTriggerFadeIn delay={0.5}>
          <div>faenfilaenfliefnlaif3212312</div>
        </ScrollTriggerFadeIn>
      </div>
      <div>
        <TopToBottomFadeIn delay={0.5}>
          <div>3142412312312313</div>
        </TopToBottomFadeIn>
      </div>
    </section>
  );
}
