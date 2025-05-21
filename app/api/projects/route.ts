import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const projectsDir = path.join(process.cwd(), 'app', 'Projects');
        const stat = await fs.stat(projectsDir);
        if (!stat.isDirectory()) {
            throw new Error(`'${projectsDir}' is not a directory`);
        }
        const entries = await fs.readdir(projectsDir, { withFileTypes: true });
        const folders = entries
            .filter((entry) => entry.isDirectory())
            .map((dir) => dir.name);
        return NextResponse.json(folders);
    } catch (error) {
        console.error('Failed to read Projects folder:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
