interface AssetProps {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: HealthHistory[];
  healthscore: number;
  id: number;
  image: string;
  metrics: {
    lastUptimeAt: string;
    totalCollectsUptime: number;
    totalUptime: number;
  };
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number;
  };
  status: AssetStatusProps;
  unitId: number;
}

interface WorkordersProps {
  assetId: number;
  assignedUserIds: number[];
  checklist: [
    {
      completed: boolean;
      task: string;
    }
  ];
  description: string;
  id: number;
  priority: "high" | "medium" | "low";
  status: "in progress" | "completed" | "not started";
  title: string;
}

interface HealthHistoryProps {
  status: AssetStatusProps;
  timestamp: string;
}

interface UserProps {
  companyId: number;
  email: string;
  id: number;
  name: string;
  unitId: number;
}

interface UnitProps {
  companyId: number;
  id: number;
  name: string;
}

interface CompanyProps {
  companyId: number;
  id: number;
  name: string;
}

type AssetStatusProps =
  | "inAlert"
  | "inOperation"
  | "inDowntime"
  | "plannedStop"
  | "unplannedStop";
