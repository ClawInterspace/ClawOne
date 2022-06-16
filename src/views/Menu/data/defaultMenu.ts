import MenuNode from '../models/MenuNode'
import MenuNodeMeta from '../models/MenuNodeMeta'

const HOME_MENU: MenuNode = new MenuNode({
  id: 1,
  name: 'home',
  meta: new MenuNodeMeta({
    icon: 'fas fa-home',
    title: '首頁',
  }),
});

const MENUS: MenuNode[] = [
  {
    id: 100,
    name: 'marketing',
    meta: new MenuNodeMeta({ icon: 'fas fa-bullhorn', title: '行銷管理' }),
    children: [
      {
        id: 110,
        name: 'marketing_campaign',
        meta: { icon: '', title: '行銷活動管理' },
      },
      {
        id: 120,
        name: 'marketing_rule',
        meta: { icon: '', title: '行銷規則管理' },
      },
      {
        id: 130,
        name: 'marketing_field_value',
        meta: { icon: '', title: '規則選項管理' },
      },
    ] as MenuNode[],
  },
  {
    id: 200,
    name: 'admin',
    meta: new MenuNodeMeta({ icon: 'fas fa-cog', title: '系統管理' }),
    children: [
      {
        id: 240,
        name: 'admin_home_edit',
        meta: { icon: '', title: '首頁管理' },
      },
      {
        id: 210,
        name: 'admin_account',
        meta: { icon: '', title: '帳號管理' },
      },
      {
        id: 220,
        name: 'admin_permission',
        meta: { icon: '', title: '權限管理' },
      },
      {
        id: 230,
        name: 'admin_auditlog',
        meta: { icon: '', title: '日誌查詢' },
      },
      {
        id: 250,
        name: 'admin_setting',
        meta: { icon: '', title: '系統設定' },
      },
      {
        id: 260,
        name: 'admin_api_token',
        meta: { icon: '', title: 'API token' },
      },
    ] as MenuNode[],
  },
  {
    id: 900,
    name: 'helpdesk',
    meta: new MenuNodeMeta({ icon: 'fas fa-question-circle', title: '服務中心' }),
    children: [
      {
        id: 910,
        name: 'helpdesk_guidebook',
        meta: { icon: '', title: '操作手冊' },
      },
    ] as MenuNode[],
  },
];

export default {
  /**
   * @description default menu
   */
  MENUS,

  /**
   * @description default home menu
   */
  HOME_MENU,

};
export const getPageNameById = (id: number): string => {
  const pageStr = id.toString();
  let pos = 0;
  let currentNode: MenuNode = new MenuNode(HOME_MENU);
  currentNode.children = MENUS;
  while (pageStr.charAt(pos) !== '0') {
    const index = currentNode.children.findIndex((w: MenuNode): boolean => w.id.toString().charAt(pos) === pageStr.charAt(pos));
    currentNode = currentNode.children[index];
    pos++;
  }
  // return page id if the page is not show up in the defaultMenu.
  if (!currentNode) { return String(id); }
  return currentNode.name;
};
