import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const projectsDir = path.join(process.cwd(), 'app', 'Projects');
        const entries = await fs.readdir(projectsDir, { withFileTypes: true });
        const result: Record<string, { tags: string[]; mainFocus: string }> = {};
        for (const entry of entries) {
            if (!entry.isDirectory()) continue;
            const folderName = entry.name;
            const infoPath = path.join(projectsDir, folderName, 'info.txt');
            try {
                const content = await fs.readFile(infoPath, 'utf-8');
                const lines = content
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
                const mainFocus = lines[0] || '';
                const tags = lines.slice(1);
                result[folderName] = { tags, mainFocus };
            } catch (error) {
                console.error(`Error reading info.txt for ${folderName}:`, error);
            }
        }
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error in /api/projects:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
