export default interface StressCheckTargetDeleteResult { 
  /**
   * 削除に成功したID
   */
  deletedTargetIds: Array<number>;
  /**
   * 削除されなかったID
   */
  skippedTargetIds: Array<number>;
}
