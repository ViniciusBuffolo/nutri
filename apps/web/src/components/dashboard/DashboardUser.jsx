import {
  BookOpen,
  CalendarDays,
  MessageCircle,
  ClipboardList,
  Utensils,
  NotebookPen,
  Target,
} from "lucide-react";

import Card from "@ui/shared/Card";
import Button from "@ui/shared/Button";

const quickAccessItems = [
  {
    label: "Materials",
    icon: BookOpen,
  },
  {
    label: "Recipes",
    icon: BookOpen,
  },
  {
    label: "Chat",
    icon: MessageCircle,
  },
  {
    label: "Prescriptions",
    icon: ClipboardList,
  },
];

export default function DashboardUser({ user }) {
  return (
    <div className="dashboardStack">
      <Card className="contentCard">
        <div className="contentCardBody">
          <h2 className="sectionTitle">Quick access</h2>

          <div className="quickAccessGrid">
            {quickAccessItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  type="button"
                  className="quickAccessItem"
                >
                  <span className="quickAccessIcon">
                    <Icon size={22} />
                  </span>

                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="contentCard">
        <div className="contentCardBody">
          <div className="dashboardFeature">
            <span className="dashboardFeatureIcon">
              <Utensils size={22} />
            </span>

            <div>
              <h2 className="sectionTitle">Meal plan</h2>
              <p className="sectionTextMuted">
                Veja suas refeições planejadas para hoje.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Button className="dashboardScheduleButton" variant="secondary">
        <CalendarDays size={18} />
        Schedule an appointment
      </Button>

      <Card className="contentCard">
        <div className="contentCardBody">
          <div className="dashboardFeature">
            <span className="dashboardFeatureIcon">
              <NotebookPen size={22} />
            </span>

            <div>
              <h2 className="sectionTitle">Your diary updates</h2>
              <p className="sectionTextMuted">
                Registre como foi seu dia alimentar.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="contentCard">
        <div className="contentCardBody">
          <div className="dashboardFeature">
            <span className="dashboardFeatureIcon">
              <Target size={22} />
            </span>

            <div>
              <h2 className="sectionTitle">Track your goals</h2>
              <p className="sectionTextMuted">
                Acompanhe seu progresso e suas metas.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
