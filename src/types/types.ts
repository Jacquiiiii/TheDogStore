export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  image: string;
  price: number;
  category: string;
}

export interface CartItemObj {
  id: number
  name: string
  description: string
  brand: string
  image: string
  price: number
  category: string
}

export interface ProductProps {
  product: Product;
}

export type ProductsResponse = {
  productsData: Product[]
}

export type Theme = "light" | "dark"

export interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}