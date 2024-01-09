import { Activity, Client, Project } from "@prisma/client";
import { create } from "zustand";

type State = {
    clients?: Client[];
    projects?: Project[];
    activities?: Activity[];
    currentActivity?: Activity
    setClients: (clients: Client[]) => void
    setProjects: (projects: Project[]) => void
    setActivities: (activities: Activity[]) => void
    setCurrentActivity: (activity: Activity) => void
}


export const useTrackStore = create<State>((set) => ({
    clients: [],
    projects: [],
    activities: [],
    currentActivity: undefined,
    setClients: (clients) => { set(() => ({ clients: clients })) },
    setProjects: (projects) => { set(() => ({ projects: projects })) },
    setActivities: (activities) => { set(() => ({ activities: activities })) },
    setCurrentActivity: (activity) => { set(() => ({ currentActivity: activity })) },
}))