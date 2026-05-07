import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const filesToRename = [
    { from: 'car_rental.png.jpg', to: 'car_rental.jpg' },
    { from: 'clinixpro.png.jpg', to: 'clinixpro.jpg' },
    { from: 'erp.png.jpg', to: 'erp.jpg' }
];

filesToRename.forEach(file => {
    const oldPath = path.join(publicDir, file.from);
    const newPath = path.join(publicDir, file.to);
    
    if (fs.existsSync(oldPath)) {
        try {
            fs.renameSync(oldPath, newPath);
            console.log(`Successfully renamed ${file.from} to ${file.to}`);
        } catch (err) {
            console.error(`Error renaming ${file.from}:`, err);
        }
    } else {
        console.warn(`File not found: ${file.from}`);
    }
});
