import { Activity } from "@prisma/client";
import { ActivityItemRow } from "./activity-item-row";

type DailyActivitiesProps = {
  activities: Activity[];
};
export const DailyActivities = ({ activities }: DailyActivitiesProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-2">What you&apos;ve done today.</h2>
      <ul>
        {activities.map((activity) => (
          <ActivityItemRow activity={activity} key={activity.id} />
        ))}
      </ul>
    </div>
  );
};