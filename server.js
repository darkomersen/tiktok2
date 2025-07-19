import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// CORS ayarları
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://yourdomain.com',
    /\.railway\.app$/,
    /\.vercel\.app$/,
    /\.render\.com$/
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'TikTok Backend API çalışıyor',
    timestamp: new Date().toISOString()
  });
});

// Demo TikTok download endpoint
app.post('/api/download', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'URL gerekli' });
    }

    // Demo response - gerçek API entegrasyonu eklenebilir
    const demoResponse = {
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      title: 'Demo TikTok Video',
      thumbnail: 'https://via.placeholder.com/300x400/ff69b4/ffffff?text=TikTok+Video',
      author: 'Demo User',
      authorUsername: 'demouser',
      duration: 15,
      playCount: 1000000,
      downloadCount: 50000
    };

    console.log(`TikTok indirme isteği: ${url}`);
    res.json(demoResponse);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Video indirilemedi' });
  }
});

// Demo ads endpoints
app.get('/api/ads/left_sidebar', (req, res) => {
  const ads = [
    {
      id: 1,
      title: 'Sol Reklam 1',
      description: 'Demo reklam açıklaması',
      image_url: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Sol+Reklam+1',
      link_url: 'https://example.com',
      priority: 10
    },
    {
      id: 2,
      title: 'Sol Reklam 2',
      description: 'Demo reklam açıklaması 2',
      image_url: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Sol+Reklam+2',
      link_url: 'https://example.com',
      priority: 5
    }
  ];
  
  console.log('Sol sidebar reklamları istendi');
  res.json(ads);
});

app.get('/api/ads/right_sidebar', (req, res) => {
  const ads = [
    {
      id: 3,
      title: 'Sağ Reklam 1',
      description: 'Demo reklam açıklaması',
      image_url: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Sag+Reklam+1',
      link_url: 'https://example.com',
      priority: 10
    },
    {
      id: 4,
      title: 'Sağ Reklam 2',
      description: 'Demo reklam açıklaması 2',
      image_url: 'https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Sag+Reklam+2',
      link_url: 'https://example.com',
      priority: 5
    }
  ];
  
  console.log('Sağ sidebar reklamları istendi');
  res.json(ads);
});

// Demo admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  // Demo credentials
  if (username === 'admin' && password === 'admin123') {
    res.json({ 
      success: true, 
      token: 'demo_token_12345',
      message: 'Giriş başarılı'
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Geçersiz kullanıcı adı veya şifre' 
    });
  }
});

// Ad click tracking (demo)
app.post('/api/ads/:id/click', (req, res) => {
  const adId = req.params.id;
  console.log(`Reklam tıklandı: ${adId}`);
  res.json({ success: true });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Hata:', err);
  res.status(500).json({ error: 'Sunucu hatası' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint bulunamadı' });
});

// Server başlatma
app.listen(PORT, () => {
  console.log(`🚀 TikTok Backend API ${PORT} portunda çalışıyor`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
