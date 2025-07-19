# TikTok Downloader Backend - Railway Deploy

## 🚀 Deployment Talimatları

### 1. GitHub'a Yükleme:
```bash
git init
git add .
git commit -m "Railway deployment"
git remote add origin https://github.com/username/tiktok-backend.git
git push -u origin main
```

### 2. Railway Setup:
1. railway.app → New Project
2. Deploy from GitHub repo
3. Repository: tiktok-backend
4. Environment Variables:
   - `NODE_ENV=production`
   - `PORT=3000` (otomatik ayarlanır)

### 3. Environment Variables (Opsiyonel):
```
JWT_SECRET=your_secret_key_here
ALLOWED_ORIGINS=https://yourdomain.com
```

### 4. Deploy:
Railway otomatik olarak deploy eder.

## 📡 API Endpoints:

- `GET /api/health` - Health check
- `POST /api/download` - TikTok video download (demo)
- `GET /api/ads/left_sidebar` - Sol sidebar reklamları
- `GET /api/ads/right_sidebar` - Sağ sidebar reklamları
- `POST /api/admin/login` - Admin login (demo)

## 🔧 Demo Credentials:
- Username: `admin`
- Password: `admin123`

## 🌐 Test URL:
Railway deploy edildikten sonra:
`https://your-app.railway.app/api/health`
