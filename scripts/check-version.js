const fs = require('fs');
const { execSync } = require('child_process');

const baseSha = process.env.BASE_SHA;
const headSha = process.env.HEAD_SHA;

if (!baseSha || !headSha) {
    console.error('BASE_SHA and HEAD_SHA are required.');
    process.exit(1);
}

function readFileAt(ref, path) {
    try {
        return execSync(`git show ${ref}:${JSON.stringify(path).slice(1, -1)}`, {
            encoding: 'utf8'
        });
    } catch {
        return '';
    }
}

function getAppVersion(source) {
    const match = source.match(/const\s+APP_VERSION\s*=\s*['"]([^'"]+)['"]/);
    return match ? match[1] : null;
}

function getJsonVersion(source) {
    try {
        return JSON.parse(source).latestVersion || null;
    } catch {
        return null;
    }
}

const appPath = 'planner-v4.html';
const versionPath = 'version.json';

const beforeApp = readFileAt(baseSha, appPath);
const afterApp = readFileAt(headSha, appPath);

const beforeJson = readFileAt(baseSha, versionPath);
const afterJson = readFileAt(headSha, versionPath);

const beforeAppVersion = getAppVersion(beforeApp);
const afterAppVersion = getAppVersion(afterApp);

const beforeJsonVersion = getJsonVersion(beforeJson);
const afterJsonVersion = getJsonVersion(afterJson);

console.log({
    beforeAppVersion,
    afterAppVersion,
    beforeJsonVersion,
    afterJsonVersion
});

if (beforeApp !== afterApp) {
    if (beforeAppVersion === afterAppVersion) {
        console.error('App changed, but APP_VERSION did not change.');
        process.exit(1);
    }

    if (beforeJsonVersion === afterJsonVersion) {
        console.error('App changed, but version.json latestVersion did not change.');
        process.exit(1);
    }

    if (afterAppVersion !== afterJsonVersion) {
        console.error(`APP_VERSION (${afterAppVersion}) does not match version.json latestVersion (${afterJsonVersion}).`);
        process.exit(1);
    }
}