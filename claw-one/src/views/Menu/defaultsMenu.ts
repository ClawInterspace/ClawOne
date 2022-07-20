import MenuNode from './models/MenuNode'
import MenuNodeMeta from './models/MenuNodeMeta'

const HOME_MENU: MenuNode = new MenuNode({
  id: 1,
  name: 'home',
  meta: new MenuNodeMeta({
    icon: 'school',
    title: '首頁',
  }),
})


export const MENUS: MenuNode[] = [
  {
    id: 100,
    name: 'time_management',
    meta: new MenuNodeMeta({ icon: 'o_event_available', title: '時間管理' }),
    children: [
      {
        id: 110,
        name: 'to_do_list',
        meta: { icon: '', title: '待辦事項' },
      },
      {
        id: 120,
        name: 'long_term_plan',
        meta: { icon: '', title: '長期計畫' },
      },
    ] as MenuNode[],
  },
  {
    id: 200,
    name: 'information_center',
    meta: new MenuNodeMeta({ icon: 'o_assignment', title: '資訊中心' }),
    children: [
      {
        id: 210,
        name: 'seminar_info',
        meta: { icon: '', title: '研討會資訊' },
      },
    ] as MenuNode[],
  },
  {
    id: 800,
    name: 'Settings',
    meta: new MenuNodeMeta({ icon: 'o_settings', title: '設定' }),
    children: [
      {
        id: 810,
        name: 'account_setting',
        meta: { icon: '', title: '帳戶設定' },
      },
      {
        id: 820,
        name: 'security_setting',
        meta: { icon: '', title: '安全設定' },
      },
    ] as MenuNode[],
  },
]

export default {
  /**
   * @description default menu
   */
  MENUS,

  /**
   * @description default home menu
   */
  HOME_MENU,

}

export const getPageNameById = (id: number): string => {
  const pageStr = id.toString()
  let pos = 0
  let currentNode: MenuNode = new MenuNode(HOME_MENU)
  currentNode.children = MENUS
  while (pageStr.charAt(pos) !== '0') {
    const index = currentNode.children.findIndex((w: MenuNode): boolean => w.id.toString().charAt(pos) === pageStr.charAt(pos))
    currentNode = currentNode.children[index]
    pos++
  }
  // return page id if the page is not show up in the defaultMenu.
  if (!currentNode) { return String(id) }
  return currentNode.name
}
