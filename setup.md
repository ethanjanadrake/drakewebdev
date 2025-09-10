# Quick Setup Guide

## From Any Command Shell

### 1. Navigate to Project Directory
```bash
cd "C:\Users\Ethan Drake\Documents\Code\portfolio-website"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open Browser
Navigate to: `http://localhost:3000`

## Troubleshooting

### If Port 3000 is Busy
```bash
npm run dev -- -p 3001
```
Then go to: `http://localhost:3001`

### If Dependencies Are Corrupted
```bash
rm -rf node_modules package-lock.json
npm install
```

### If Build Fails
```bash
npm run build
```
