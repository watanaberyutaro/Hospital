import * as Holidays from '@holiday-jp/holiday_jp';

export interface Holiday {
  date: string; // YYYY-MM-DD形式
  name: string;
}

/**
 * 指定された年の日本の祝日を取得
 */
export function getJapaneseHolidays(year: number): Holiday[] {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  
  const holidays = Holidays.between(startDate, endDate);
  
  return holidays.map(holiday => ({
    date: formatDate(holiday.date),
    name: holiday.name
  }));
}

/**
 * 指定された月の日本の祝日を取得
 */
export function getMonthlyHolidays(year: number, month: number): Holiday[] {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  
  const holidays = Holidays.between(startDate, endDate);
  
  return holidays.map(holiday => ({
    date: formatDate(holiday.date),
    name: holiday.name
  }));
}

/**
 * 指定された日付が祝日かどうかをチェック
 */
export function isHoliday(date: Date): boolean {
  return Holidays.isHoliday(date);
}

/**
 * 指定された日付の祝日名を取得
 */
export function getHolidayName(date: Date): string | null {
  if (isHoliday(date)) {
    const holidays = Holidays.between(date, date);
    return holidays.length > 0 ? holidays[0].name : null;
  }
  return null;
}

/**
 * Date型をYYYY-MM-DD形式の文字列に変換
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * YYYY-MM-DD形式の文字列をDate型に変換
 */
export function parseDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}