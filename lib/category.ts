import prisma from "./prisma";

export const getCategories = async () => {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    return { error };
  }
};

export const getCategoryById = async (categoryId: number) => {
  try {
    return await prisma.category.findUnique({
      where: { id: categoryId },
    });
  } catch (error) {
    return { error };
  }
};

export const createCategory = async (category: string) => {
  try {
    return await prisma.category.create({
      data: { name: category },
    });
  } catch (error) {
    return { error };
  }
};
