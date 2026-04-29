import { tokens } from "@/styles/tokens"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background-default p-8 text-text-default">
      <div className="mx-auto max-w-5xl space-y-16">
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Design System Showcase</h1>
          <p className="text-text-secondary text-lg">
            A showcase of the design tokens and components extracted from Figma.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-border-default pb-2">Semantic Colors</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ColorSwatch name="Brand Default" className="bg-brand-default" />
            <ColorSwatch name="Brand Hover" className="bg-brand-hover" />
            <ColorSwatch name="Brand Tertiary" className="bg-brand-tertiary" />
            <ColorSwatch name="Neutral Default" className="bg-neutral-default" />
            <ColorSwatch name="Neutral Sec." className="bg-neutral-secondary" />
            <ColorSwatch name="Danger Default" className="bg-danger-default" />
            <ColorSwatch name="Danger Hover" className="bg-danger-hover" />
            <ColorSwatch name="Danger Sec." className="bg-danger-secondary" />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-border-default pb-2">Buttons</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-medium text-text-secondary">Medium Size</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="neutral">Neutral</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium text-text-secondary">Small Size</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="small">Primary</Button>
                <Button variant="neutral" size="small">Neutral</Button>
                <Button variant="subtle" size="small">Subtle</Button>
                <Button variant="danger" size="small">Danger</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-border-default pb-2">Input Fields</h2>
          <div className="grid max-w-sm gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default State</label>
              <Input placeholder="Enter something..." />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Error State</label>
              <Input state="error" placeholder="Invalid input" defaultValue="wrong value" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled State</label>
              <Input state="disabled" placeholder="Cannot type here" />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex items-center gap-3 overflow-hidden rounded-200 border border-border-default p-2 shadow-sm">
      <div className={`h-10 w-10 shrink-0 rounded-full border border-border-default/50 ${className}`} />
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}
