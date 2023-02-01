import prisma from "./prisma";

export const getHouseholds = async () => {
  return await prisma.household.findMany({
    include: { category: true },
  });
};
