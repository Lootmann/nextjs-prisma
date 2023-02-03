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

export const createHousehold = async (amount: number, categoryId: number) => {
  try {
    return await prisma.household.create({
      data: {
        amount: amount,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
  } catch (error) {
    return { error };
  }
};
