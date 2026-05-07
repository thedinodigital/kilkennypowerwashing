import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        <Accordion type="single" collapsible className="mt-6">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
              <AccordionContent>{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
