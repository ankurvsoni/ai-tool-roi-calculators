import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'content/data/calculators.json');

export function getCalculators() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

export function getCalculator(slug) {
  return getCalculators().find((c) => c.slug === slug);
}
