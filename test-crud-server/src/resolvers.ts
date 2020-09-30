import { Op } from "sequelize";
import { Product } from "./models/product";

interface AddProductInput {
  title: string;
  description: string;
  price: number;
}

interface UpdateProductInput {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface DeleteProductInput {
  id: string;
}

interface GetProductInput {
  id: string;
}

const addProduct = async (args: AddProductInput) => {
  const product = new Product({
    title: args.title,
    description: args.description,
    price: args.price,
  });
  await product.save();

  return product;
};

const updateProduct = async (args: UpdateProductInput) => {
  const product = await Product.update(
    {
      title: args.title,
      description: args.description,
      price: args.price,
    },
    { where: { id: args.id } }
  );

  return product[0] === 1;
};

const deleteProduct = async (args: DeleteProductInput) => {
  const isDeleted = await Product.destroy({ where: { id: args.id } });
  return isDeleted === 1;
};

const getProducts = async () => {
  return await Product.findAll();
};

const getProduct = async (args: GetProductInput) => {
  const product = await Product.findOne({
    where: {
      id: {
        [Op.eq]: args.id,
      },
    },
  });

  return product;
};

export const resolvers = {
  Query: {
    getProducts: () => getProducts(),
    getProduct: async (_: any, args: GetProductInput) => getProduct(args),
  },
  Mutation: {
    addProduct: (_: any, args: AddProductInput) => addProduct(args),
    updateProduct: (_: any, args: UpdateProductInput) => updateProduct(args),
    deleteProduct: (_: any, args: DeleteProductInput) => deleteProduct(args),
  },
  Product: {},
};
