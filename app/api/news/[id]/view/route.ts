import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // ビューカウントの実装は省略（将来的にデータベースで管理する場合に使用）
  return NextResponse.json({ success: true });
}