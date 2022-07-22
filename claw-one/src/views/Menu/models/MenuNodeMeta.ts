/**
 * MenuNode's metadata, including of
 * icon: can be font-awesome or ViewUI Icon styles
 * title: title is used for knowing this menu node's meaning, not for displaying
 * hideInBread: is allowed to hide this node in breadcrum
 * @export
 * @class MenuNodeMeta
 */
export default class MenuNodeMeta {
  public icon = ''
  public title = ''
  public hideInBread = false
  public constructor(fields?: {
    icon?: string,
    title?: string,
    hideInBread?: boolean,
  }) {
    if (fields) {
      Object.assign(this, fields)
    }
  }
}
