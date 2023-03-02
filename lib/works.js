import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const worksDirectory = path.join(process.cwd(), 'works');

export function getWorksData() {
  // Get file names under /works
  const fileNames = fs.readdirSync(worksDirectory);
  const allWorksData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  
  // Return Data
  return allWorksData
}
