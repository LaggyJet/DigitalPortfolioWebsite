const fs = require('fs').promises;
const path = require('path');

async function generateProjectsData() {
    const projectsDir = path.resolve(process.cwd(), 'app', 'Projects');
    const outputPath = path.resolve(process.cwd(), 'public', 'data', 'projects-data.json');
    const result = {};
    try {
        const entries = await fs.readdir(projectsDir, { withFileTypes: true });
        const validDirs = entries.filter(
        (e) => e.isDirectory() && /^[a-zA-Z0-9_-]+$/.test(e.name) && !e.name.startsWith('.')
        );
        for (const dir of validDirs) {
            const infoPath = path.resolve(projectsDir, dir.name, 'info.txt');
            try {
                const content = await fs.readFile(infoPath, 'utf-8');
                const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
                result[dir.name] = {
                mainFocus: lines[0] ?? '',
                tags: lines.slice(1)
                };
            } catch {}
        }
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, JSON.stringify(result, null, 2), 'utf-8');
        console.log('Projects data generated at', outputPath);
    } catch (error) {
        console.error('Failed to generate projects data:', error);
        process.exit(1);
    }
}

generateProjectsData();
