export type Category = "학교" | "개인" | "공부" | "기타";

export const CATEGORIES: Category[] = ["학교", "개인", "공부", "기타"];

export type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  date: number; // getTime() 결과는 number
  category: Category;
};
