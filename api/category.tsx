import prisma from "../lib/prisma";

export const getCategories = async () => {
  return await prisma.category.findMany();
};

export const createCategory = async (category: string) => {
  await prisma.category.create({
    data: { name: category },
  });
};

export const getHouseholds = async () => {
  return await prisma.household.findMany({
    include: { category: true },
  });
};
