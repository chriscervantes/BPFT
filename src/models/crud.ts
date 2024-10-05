import pool from "../config/database";

export interface Example {
  id: number;
  name: string;
}

let data: Example[] = [];
export const getAll = async (): Promise<Example[]> => {
  return data;
  // const [rows] = await pool.query("SELECT * FROM examples");
  // return rows as Example[];
};

export const create = async (name: string): Promise<Example | boolean> => {
  // const [result] = await pool.query("INSERT INTO examples (name) VALUES (?)", [
  //   name,
  // ]);
  //   const id = (result as any).insertId;

  if (name.length === 0) {
    return false;
  }
  const id = data.length + 1;

  data.push({ id, name });
  return { id, name };
};
