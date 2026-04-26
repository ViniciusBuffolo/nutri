import {
  Users,
  CalendarDays,
  ClipboardList,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

import Card from "@ui/shared/Card";

const nutritionistItems = [
  {
    title: "Patients",
    description: "Gerencie seus pacientes ativos.",
    icon: Users,
  },
  {
    title: "Appointments",
    description: "Veja sua agenda de consultas.",
    icon: CalendarDays,
  },
  {
    title: "Evaluations",
    description: "Acesse avaliações recentes.",
    icon: ClipboardList,
  },
  {
    title: "Messages",
    description: "Responda conversas pendentes.",
    icon: MessageCircle,
  },
  {
    title: "Progress",
    description: "Acompanhe a evolução dos pacientes.",
    icon: TrendingUp,
  },
];

export default function DashboardNutritionist({ user }) {
  return (
    <div className="dashboardStack">
      <div className="cardGrid cardGridTwo">
        {nutritionistItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="contentCard cardGridItem">
              <div className="contentCardBody">
                <div className="dashboardFeature">
                  <span className="dashboardFeatureIcon">
                    <Icon size={22} />
                  </span>

                  <div>
                    <h2 className="sectionTitle">{item.title}</h2>
                    <p className="sectionTextMuted">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}