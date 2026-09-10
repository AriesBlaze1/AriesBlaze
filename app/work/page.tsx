import { ContactBand, PageIntro } from '@/components/ui';
import { WorkBrowser } from '@/components/work-browser';
import { allProjects, ndaWork } from '@/data/projects';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Work',
  'Products, software, and selected client work by John Oyekunle, building as AriesBlaze.',
  '/work',
);
export default function WorkPage() {
  return (
    <div className="container">
      <PageIntro
        label="The work / Products & platforms"
        title="Built to be used."
      >
        <p>
          Every product starts in the lab: a collection of products, tools, and
          client work, from the first interface to the systems that make it
          work.
        </p>
      </PageIntro>
      <WorkBrowser projects={allProjects} ndaCount={ndaWork.count} />
      <ContactBand />
    </div>
  );
}
