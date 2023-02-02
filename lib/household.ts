import prisma from "./prisma";

export const getHouseholds = async () => {
  try {
    return await prisma.household.findMany({
      include: { category: true },
    });
  } catch (error) {
    return { error };
  }
};
