import { ProfileHeader } from "@/components/portfolio/profile-header";
import { ProofList } from "@/components/portfolio/proof-list";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="m-6 flex flex-col gap-10">
        <ProfileHeader />
        <ProofList />
        <ProjectGrid />
        <ContactSection />
      </div>
    </div>
  );
}
