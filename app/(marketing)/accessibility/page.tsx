import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function AccessibilityPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Accessibility at NeuroAssist"
        description="NeuroAssist is built for people who prefer to read, who rely on captions, and who navigate primarily with the keyboard."
      />

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardContent className="space-y-3 p-4 text-sm text-slate-700">
          <p>
            The interface is designed with WCAG guidance in mind: high contrast
            text, large tap targets, visible focus outlines, and layouts that
            adapt to different viewport sizes. Every interactive element is
            reachable with the keyboard.
          </p>
          <p>
            Captions prioritize legibility over decoration. You can adjust font
            size, line height, and color themes from the in-app settings. We
            avoid motion where possible and never rely on color alone to convey
            important information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
