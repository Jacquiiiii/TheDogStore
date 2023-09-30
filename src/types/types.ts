// Button types
export interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  color: string;
  width?: string;
  dataCy?: string;
}

// Product types
export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  image: string;
  price: number;
  category: string;
}

export interface ProductProps {
  product: Product;
}

export type ProductsResponse = {
  productsData: Product[]
}

// Cart types
export interface CartItemObj {
  id: number
  name: string
  description: string
  brand: string
  image: string
  price: number
  category: string
}

// Theme types (TODO: Add theme into app)
export type Theme = "light" | "dark"

export interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}