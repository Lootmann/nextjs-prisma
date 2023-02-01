import prisma from "./prisma";

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    return { categories };
  } catch (error) {
    return { error };
  }
};

export const getCategoryById = async (categoryId: number) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    return { category };
  } catch (error) {
    return { error };
  }
};

export const createCategory = async (category: string) => {
  try {
    const res = await prisma.category.create({
      data: { name: category },
    });
    return { category: res };
  } catch (error) {
    return { error };
  }
};
