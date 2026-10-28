export type ResponseData = { greeting: string; author: string };

export const mode = process.env.NODE_ENV;
export const dataUrl = mode === 'development'
  ? 'http://localhost:3001/api/data'
  : 'https://raw.githubusercontent.com/makintosh1337/melnik-github-pages/gh-pages/static/db/data.json';

export async function getData(): Promise<ResponseData> {
  const response = await fetch(dataUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
