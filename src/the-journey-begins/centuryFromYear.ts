'use strict';

/**
 * getCenturyFromYear
 * @param year
 * @return {number}
 */

export function getCenturyFromYear(year: number): number {
  const remainder: number = year % 100;
  return remainder === 0 ? year / 100 : ((year + 100) - remainder) / 100
}
