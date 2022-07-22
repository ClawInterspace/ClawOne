/**
 * CheckNote
 * @export
 * @class CheckNote
 */


export default class CheckNote {
  public isChecked: boolean = false
  public title: string = ''

  public constructor(fields?: {
    title?: string,
  }) {
    if (fields) {
      Object.assign(this, fields)
    }
  }
}
