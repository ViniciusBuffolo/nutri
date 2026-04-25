"use client";

import AppLayout from "@/components/layout/AppLayout";
import Card from "@ui/shared/Card";
import Button from "@ui/shared/Button";

function DemoCard({ title }) {
  return (
    <Card className="contentCard">
      {/* Header */}
      <div className="contentCardHeader">
        <p className="sectionEyebrow">Demo</p>
        <h3 className="sectionTitle">{title}</h3>
      </div>

      {/* Body */}
      <div className="contentCardBody">
        <p className="sectionText sectionTextDefault">
          This is a sample card to visualize Normal Text layout behavior. It can
          be used for any content, such as forms, metrics, or other information.
        </p>

        <p className="sectionText sectionTextMuted">
          This is a secondary/helper text example.
        </p>
      </div>

      {/* Footer */}
      <div className="contentCardFooter">
        <Button variant="secondary">Action</Button>
      </div>
    </Card>
  );
}

export default function GridDemoPage() {
  return (
    <AppLayout>
      <section className="content">
        {/* 1 CARD */}
        <h2>1 Card</h2>
        <div className="cardGrid cardGridOne">
          <DemoCard title="Single Card" />
        </div>

        {/* 2 CARDS */}
        <h2>2 Cards (50/50)</h2>
        <div className="cardGrid cardGridTwo">
          <DemoCard title="Card 1" />
          <DemoCard title="Card 2" />
        </div>

        {/* 3 CARDS */}
        <h2>3 Cards</h2>
        <div className="cardGrid cardGridThree">
          <DemoCard title="Card 1" />
          <DemoCard title="Card 2" />
          <DemoCard title="Card 3" />
        </div>

        {/* WIDE LEFT */}
        <h2>Wide Left</h2>
        <div className="cardGrid cardGridWideLeft">
          <DemoCard title="Main (bigger)" />
          <DemoCard title="Secondary" />
        </div>

        {/* WIDE RIGHT */}
        <h2>Wide Right</h2>
        <div className="cardGrid cardGridWideRight">
          <DemoCard title="Secondary" />
          <DemoCard title="Main (bigger)" />
        </div>

        {/* COLUMN */}
        <h2>Column Layout</h2>
        <div className="cardGrid cardGridTwo">
          <DemoCard title="Left" />

          <div className="cardGridColumn">
            <DemoCard title="Top Right" />
            <DemoCard title="Bottom Right" />
          </div>
        </div>

        {/* CENTER SMALL */}
        <h2>Centered Small Card (Login)</h2>
        <div className="cardCenterWrap">
          <div className="cardCenterSmall">
            <DemoCard title="Centered Card" />
          </div>
        </div>
      </section>
    </AppLayout>
  );
}