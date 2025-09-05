import { put, list, del } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

const IS_VERCEL = process.env.VERCEL === '1';
const HAS_BLOB_TOKEN = !!process.env.BLOB_READ_WRITE_TOKEN;

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  content?: string;
  tags?: string[];
  isPinned?: boolean;
  isImportant?: boolean;
  createdAt?: string;
  updatedAt?: string;
  author?: string;
  viewCount?: number;
  summary?: string;
  thumbnail?: string;
}

export interface Holiday {
  date: string;
  reason: string;
}

export interface NewsData {
  news: NewsItem[];
}

export interface HolidayData {
  regularHolidays?: {
    weekdays: number[];
    description: string;
  };
  halfDayHolidays?: {
    weekdays: number[];
    description: string;
  };
  specialHolidays: Array<{
    id: string;
    date: string;
    reason: string;
    createdAt?: string;
  }>;
}

class StorageService {
  private useBlob: boolean;
  private newsFilePath: string;
  private holidaysFilePath: string;

  constructor() {
    this.useBlob = IS_VERCEL && HAS_BLOB_TOKEN;
    this.newsFilePath = path.join(process.cwd(), 'public', 'data', 'news.json');
    this.holidaysFilePath = path.join(process.cwd(), 'public', 'data', 'holidays.json');
  }

  // ニュースデータの読み取り
  async getNews(): Promise<NewsData> {
    try {
      if (this.useBlob) {
        // Vercel Blobから読み取り
        const { blobs } = await list({ prefix: 'news-' });
        if (blobs.length > 0) {
          const latestBlob = blobs.sort((a, b) => 
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
          )[0];
          const response = await fetch(latestBlob.url);
          return await response.json();
        }
      }
      
      // ローカルファイルまたはデフォルトデータ
      try {
        const data = await fs.readFile(this.newsFilePath, 'utf-8');
        return JSON.parse(data);
      } catch {
        // ファイルが存在しない場合はデフォルトデータを返す
        return { news: [] };
      }
    } catch (error) {
      console.error('Error reading news:', error);
      return { news: [] };
    }
  }

  // ニュースデータの保存
  async saveNews(data: NewsData): Promise<void> {
    try {
      if (this.useBlob) {
        // Vercel Blobに保存
        const fileName = `news-${Date.now()}.json`;
        await put(fileName, JSON.stringify(data, null, 2), {
          access: 'public',
          addRandomSuffix: false,
        });
        
        // 古いバージョンを削除（最新5件を保持）
        const { blobs } = await list({ prefix: 'news-' });
        const sortedBlobs = blobs.sort((a, b) => 
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
        
        for (let i = 5; i < sortedBlobs.length; i++) {
          await del(sortedBlobs[i].url);
        }
      } else {
        // ローカルファイルに保存
        await fs.writeFile(this.newsFilePath, JSON.stringify(data, null, 2));
      }
    } catch (error) {
      console.error('Error saving news:', error);
      throw new Error('Failed to save news data');
    }
  }

  // 休日データの読み取り
  async getHolidays(): Promise<HolidayData> {
    try {
      if (this.useBlob) {
        // Vercel Blobから読み取り
        const { blobs } = await list({ prefix: 'holidays-' });
        if (blobs.length > 0) {
          const latestBlob = blobs.sort((a, b) => 
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
          )[0];
          const response = await fetch(latestBlob.url);
          return await response.json();
        }
      }
      
      // ローカルファイルまたはデフォルトデータ
      try {
        const data = await fs.readFile(this.holidaysFilePath, 'utf-8');
        return JSON.parse(data);
      } catch {
        // ファイルが存在しない場合はデフォルトデータを返す
        return { 
          regularHolidays: { weekdays: [0, 3], description: "毎週水曜日・日曜日" },
          specialHolidays: [] 
        };
      }
    } catch (error) {
      console.error('Error reading holidays:', error);
      return { 
        regularHolidays: { weekdays: [0, 3], description: "毎週水曜日・日曜日" },
        specialHolidays: [] 
      };
    }
  }

  // 休日データの保存
  async saveHolidays(data: HolidayData): Promise<void> {
    try {
      if (this.useBlob) {
        // Vercel Blobに保存
        const fileName = `holidays-${Date.now()}.json`;
        await put(fileName, JSON.stringify(data, null, 2), {
          access: 'public',
          addRandomSuffix: false,
        });
        
        // 古いバージョンを削除（最新5件を保持）
        const { blobs } = await list({ prefix: 'holidays-' });
        const sortedBlobs = blobs.sort((a, b) => 
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
        
        for (let i = 5; i < sortedBlobs.length; i++) {
          await del(sortedBlobs[i].url);
        }
      } else {
        // ローカルファイルに保存
        await fs.writeFile(this.holidaysFilePath, JSON.stringify(data, null, 2));
      }
    } catch (error) {
      console.error('Error saving holidays:', error);
      throw new Error('Failed to save holiday data');
    }
  }

  // 環境情報を取得
  getEnvironmentInfo() {
    return {
      isVercel: IS_VERCEL,
      hasBlobToken: HAS_BLOB_TOKEN,
      useBlob: this.useBlob,
    };
  }
}

export const storage = new StorageService();