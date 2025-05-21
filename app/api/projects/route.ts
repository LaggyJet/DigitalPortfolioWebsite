import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const projectsDir = path.join(process.cwd(), 'app', 'Projects');
        const entries = await fs.promises.readdir(projectsDir, { withFileTypes: true });
        const folders = entries.filter(e => e.isDirectory()).map(d => d.name);
        return NextResponse.json(folders);
    } catch (error) {
        console.error('Failed to read Projects folder', error);
        return NextResponse.json([], { status: 500 });
    }
}
