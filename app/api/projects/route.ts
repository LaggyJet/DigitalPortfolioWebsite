import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const projectsDir = path.join(process.cwd(), 'app', 'Projects');
        const entries = await fs.readdir(projectsDir, { withFileTypes: true });
        const result: Record<string, string[]> = {};
        for (const entry of entries) {
            if (!entry.isDirectory()) continue;
            const folderName = entry.name;
            const tagsPath = path.join(projectsDir, folderName, 'tags.txt');
            let tags: string[] = [];
            try {
                const content = await fs.readFile(tagsPath, 'utf-8');
                tags = content
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
            } catch {}
            result[folderName] = tags;
        }
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error in /api/projects:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
