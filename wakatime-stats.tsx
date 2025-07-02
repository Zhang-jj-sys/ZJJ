import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API密钥未配置";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "数据获取失败";
    }

    const stats = await response.json();
    return stats.data?.text || "暂无活动记录";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "服务器错误";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p className="stats-text">
          编码时长: <span className="stats-value">{stats}</span>
        </p>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} PixelCode学习平台
        </p>
        <Suspense fallback={
          <p className="loading-text">
            [加载编码数据中...]
          </p>
        }>
          <WakaTimeData />
        </Suspense>
      </div>
    </footer>
  );
} 