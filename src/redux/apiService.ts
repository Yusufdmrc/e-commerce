import axios, { AxiosResponse } from "axios";
import { ProductData } from "../Types/Type";

export const getAllProducts = async (): Promise<ProductData[]> => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response: AxiosResponse<ProductData[]> = await axios.get<
      ProductData[]
    >(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};

export const getSortProducts = async (): Promise<ProductData[]> => {
  const url = "https:fakestoreapi.com/products?sort=desc";
  try {
    const response: AxiosResponse<ProductData[]> = await axios.get<
      ProductData[]
    >(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};

export const getAllCategories = async (): Promise<string[]> => {
  const url = "https://fakestoreapi.com/products/categories";
  try {
    const response: AxiosResponse<string[]> = await axios.get<string[]>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<ProductData[]> => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  try {
    const response: AxiosResponse<ProductData[]> = await axios.get<
      ProductData[]
    >(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category '${category}':`, error);
    return [];
  }
};

export const getProductById = async (
  id: number
): Promise<ProductData | null> => {
  const url = `https://fakestoreapi.com/products/${id}`;
  try {
    const response: AxiosResponse<ProductData> = await axios.get<ProductData>(
      url
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id '${id}':`, error);
    return null;
  }
};

export const deleteDataById = async (id: number): Promise<boolean> => {
  const url = `https://fakestoreapi.com/products/${id}`;
  try {
    await axios.delete(url);

    console.log(`Product with id ${id} is deleted.`);
    return true;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    return false;
  }
};
export const searchProducts = async (key: string): Promise<ProductData[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: ProductData[] = await response.json();

    const filteredData = data.filter(
      (item) =>
        item.title.includes(key) ||
        item.description.includes(key) ||
        item.category.includes(key)
    );

    return filteredData;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};
