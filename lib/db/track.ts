import { getUserSession } from "../auth";
import { prisma } from "../prisma";



export const updateActivity = async (data: FormData) => {
    const user = await getUserSession();
    const client = data.get("client") as string;
    const project = data.get("project") as string;

    await prisma.activity.upsert({
        where: {
            id: data.get("id") as string,
        },
        create: {
            user: { connect: { id: user.id } },
            tenant: { connect: { id: user.tenant.id } },
            name: data.get("name") as string,
            startAt: new Date(),
            client: !!client ? { connect: { id: client } } : undefined,
            project: !!project ? { connect: { id: project } } : undefined,
        },
        update: {
            name: data.get("name") as string,
            client: !!client ? { connect: { id: client } } : undefined,
            project: !!project ? { connect: { id: project } } : undefined,
        },
    });

    return true;
}


export const stopActivityInDB = async (data: FormData) => {
    const client = data.get("client") as string;
    const project = data.get("project") as string;

    await prisma.activity.update({
        where: {
            id: data.get("id") as string,
        },
        data: {
            endAt: new Date(),
            name: data.get("name") as string,
            client: !!client ? { connect: { id: client } } : undefined,
            project: !!project ? { connect: { id: project } } : undefined,
        },
    });
}


export const getClientsByTenant = async () => {
    const user = await getUserSession();
    const clients = await prisma.client.findMany({
        where: {
            tenantId: user.tenant.id,
        },
    });
    return clients;
}
export const getProjectsByTenant = async () => {
    const user = await getUserSession();
    const projects = await prisma.project.findMany({
        where: {
            tenantId: user.tenant.id,
        },
    });

    return projects;
}


export const getDailyActivitiesByUser = async () => {

    const user = await getUserSession();
    const now = new Date();
    const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
    const endOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
    );

    const dailyActivities = await prisma.activity.findMany({
        where: {
            tenantId: user.tenant.id,
            userId: user.id,
            startAt: {
                gte: startOfToday,
            },
            endAt: {
                lte: endOfToday,
            },
        },
        orderBy: {
            startAt: "asc",
        },
        include: {
            project: true,
            client: true,
        },
    });
    return dailyActivities;
}

export const getCurrentActivityByUser = async () => {
    const user = await getUserSession();

    const currentActivity = await prisma.activity.findFirst({
        where: {
            tenantId: user.tenant.id,
            userId: user.id,
            endAt: null,
        },
    });

    return currentActivity;
}