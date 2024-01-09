
import { getClientsByTenant, getCurrentActivityByUser, getDailyActivitiesByUser, getProjectsByTenant } from "@/lib/db/track";
import { DailyActivities } from "./daily-activities";
import { NewActivity } from "./new-activity";

export default async function TrackPage() {
  const currentActivity = await getCurrentActivityByUser();
  const clients = await getClientsByTenant();
  const projects = await getProjectsByTenant();
  const activities = await getDailyActivitiesByUser();

  return (
    <div className="mx-auto container py-4 space-y-12">
      <NewActivity
        activity={currentActivity}
        clients={clients}
        projects={projects}
      />
      <DailyActivities activities={activities} />
    </div>
  );
}
