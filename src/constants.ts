import { Project, BidStatus } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '大都市大桥建设工程二期项目',
    category: '基础设施',
    budget: '5,000 万人民币',
    description: '全规模基础设施开发，包括结构加固及景观亮化工程。',
    status: 'active',
    deadline: '2024.12.15',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: '市政府办公设备年度采购项目',
    category: '城市更新',
    budget: '1,250 套/件',
    description: '标准供应合同，包含高端人体工程学工作站及数字化基础设施。',
    status: 'active',
    deadline: '2024.11.30',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: '4号工业园区土地出让拍卖',
    category: '土地流转',
    budget: '1,280 万人民币',
    description: '物流枢纽附近优质开发地块，50年商业使用权转让。',
    status: 'active',
    deadline: '2024.10.20',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c14b?q=80&w=800&auto=format&fit=crop',
  },
];

export const BID_STATUSES: BidStatus[] = [
  {
    id: '1',
    title: '水净化处理工程 B 标段',
    code: '2024-XP-09',
    status: '已中标',
    time: '05-12 14:30',
    color: '#00c853',
  },
  {
    id: '2',
    title: '公路铺装材料供应项目',
    code: '2024-XP-11',
    status: '待开标',
    time: '05-14 09:00',
    color: '#0D5EFA',
  },
];
