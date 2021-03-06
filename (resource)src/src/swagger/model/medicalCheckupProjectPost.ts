// @ts-ignore
import Period from './period';
export default interface MedicalCheckupProjectPost { 
  /**
   * 名称（例：2018年度健康診断）
   */
  name: string;
  period: Period;
  /**
   * 年度
   */
  year: number;
}
