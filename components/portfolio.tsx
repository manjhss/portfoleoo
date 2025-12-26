import { ProfileHeader } from "@/components/portfolio/profile-header";
import { SocialLinks } from "@/components/portfolio/social-links";
import { ProofList } from "@/components/portfolio/proof-list";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mx-8">
        <ProfileHeader />
        <SocialLinks />
        <Separator />
        <ProofList />
        <Separator />
        <ProjectGrid />
        <Separator />
        <ContactSection />
      </div>
    </div>
  );
}
