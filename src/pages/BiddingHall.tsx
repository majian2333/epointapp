import { Search, SlidersHorizontal, Download, Cpu, ChevronRight, FileText, Ruler, Landmark, HeartPulse, Cloud, ShoppingCart, Gavel } from 'lucide-react';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

const PROJECTS_EXTENDED = [
  {
    id: 'hall-1',
    title: 'G320国道高架快速化改造工程二期项目',
    icon: Ruler,
    price: '¥1.2B',
    description: '本项目包含全长12公里的高架路段建设及底层道路修复，涉及复杂的地下管线迁改与多节点桥梁施工。',
    deadline: '2024.12.15',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop',
    tags: ['正在招标', '基础设施'],
    file: '招标技术规范书_V2.1.pdf',
    fileSize: '42.5 MB'
  },
  {
    id: 'hall-2',
    title: '高新科技园区智慧化运营系统二期集成项目',
    icon: ShoppingCart,
    price: '¥45.8M',
    description: '针对核心区30万平米办公楼宇进行物联网升级，实现全域能耗监控与AI辅助运维管理系统集成。',
    deadline: '2024.11.30',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    tags: ['新招标', '城市更新'],
    file: '系统拓扑结构及预算明细.xlsx',
    fileSize: '12.8 MB'
  },
  {
    id: 'hall-3',
    title: '新城区中心医院医疗影像设备采购项目',
    icon: HeartPulse,
    price: '¥85.0M',
    description: '采购包含3.0T核磁共振、超高端CT在内的全套影像设备，需负责后续5年的维保服务。',
    deadline: '2025.01.10',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    tags: ['医疗设备', '公开招标'],
    file: '采购清单及性能指标要求.pdf',
    fileSize: '8.4 MB'
  },
  {
    id: 'hall-4',
    title: '沿海防灾减灾生态修复三期工程',
    icon: Gavel,
    price: '¥320.0M',
    description: '涵盖8公里的海岸线红树林种植、海堤加固及生态景观廊道建设，强调生物多样性保护。',
    deadline: '2024.12.28',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    tags: ['生态环境', '绿色项目'],
    file: '生态评估报告及施工导则.zip',
    fileSize: '156.0 MB'
  },
  {
    id: 'hall-5',
    title: '智慧政务云平台大数据算力节点扩容',
    icon: Cpu,
    price: '¥12.5M',
    description: '为满足政务大模型运行需求，对现有云算力中心进行硬件扩容及网络带宽升级。',
    deadline: '2024.11.25',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    tags: ['算力扩容', '紧急采购'],
    file: '硬件规格说明书.docx',
    fileSize: '5.2 MB'
  },
  {
    id: 'hall-6',
    title: '历史文化街区古建筑修缮与数字化存档',
    icon: Landmark,
    price: '¥68.4M',
    description: '对34处重点文保单位进行修缮，并利用激光雷达扫描技术建立高精度3D数字档案馆。',
    deadline: '2025.02.15',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    tags: ['文化保护', '数字遗产'],
    file: '文保修缮规范及扫描要求.pdf',
    fileSize: '24.1 MB'
  }
];

export default function BiddingHall() {
  const handleAction = (action: string) => {
    toast.success(`您点击了: ${action}`);
  };

  return (
    <div className="px-4 py-8 space-y-8">
      {/* Search & Filter Section */}
      <section className="bg-white rounded-3xl p-6 shadow-[0_8px_32px_rgba(13,94,250,0.04)] border border-blue-50">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
          <input 
            type="text" 
            placeholder="搜索全球招标项目、关键词或编号..." 
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAction(`搜索: ${e.currentTarget.value}`);
            }}
            className="w-full bg-[#f6f9ff] border-none focus:ring-2 focus:ring-blue-500/20 rounded-2xl py-4 pl-12 pr-4 text-sm placeholder:text-gray-400 font-medium"
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#f6f9ff] p-3 rounded-2xl" onClick={() => handleAction('筛选: 项目类型')}>
            <label className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest block mb-1">项目类型</label>
            <select className="bg-transparent border-none p-0 focus:ring-0 text-sm font-bold w-full cursor-pointer" readOnly>
              <option>基础设施建设</option>
              <option>能源与资源</option>
              <option>信息技术服务</option>
            </select>
          </div>
          <div className="bg-[#f6f9ff] p-3 rounded-2xl" onClick={() => handleAction('筛选: 所属区域')}>
            <label className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest block mb-1">所属区域</label>
            <select className="bg-transparent border-none p-0 focus:ring-0 text-sm font-bold w-full cursor-pointer" readOnly>
              <option>华东地区</option>
              <option>华南地区</option>
              <option>华中地区</option>
            </select>
          </div>
          <div className="bg-[#f6f9ff] p-3 rounded-2xl" onClick={() => handleAction('筛选: 预算范围')}>
            <label className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest block mb-1">预算范围</label>
            <select className="bg-transparent border-none p-0 focus:ring-0 text-sm font-bold w-full cursor-pointer" readOnly>
              <option>¥1000万-¥5000万</option>
              <option>¥5000万-¥2亿</option>
              <option>¥2亿以上</option>
            </select>
          </div>
          <div className="bg-[#f6f9ff] p-3 rounded-2xl flex items-center justify-between cursor-pointer" onClick={() => handleAction('筛选: 截止日期')}>
            <div>
              <label className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest block mb-1">截止日期</label>
              <span className="text-sm font-bold">未来30天</span>
            </div>
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Heading */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-xl font-black tracking-tight">招标大厅</h2>
          <p className="text-sm text-gray-400">为您匹配了 128 个符合条件的项目</p>
        </div>
        <button 
          onClick={() => handleAction('更改排序方式')}
          className="flex items-center gap-2 text-[#0D5EFA] font-bold text-sm"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>综合排序</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
        {PROJECTS_EXTENDED.map((p) => (
          <div 
            key={p.id} 
            onClick={() => handleAction(`查看项目详情: ${p.title}`)}
            className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100/50 cursor-pointer"
          >
            {/* ... card content ... */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src={p.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {p.tags.map((tag, i) => (
                  <span key={i} className={cn(
                    "px-3 py-1 backdrop-blur-md text-[0.6rem] font-bold tracking-widest rounded-full",
                    i === 0 ? "bg-blue-600/90 text-white" : "bg-white/90 text-gray-800"
                  )}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-600 mt-0.5 flex-shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold leading-tight line-clamp-2">{p.title}</h3>
                </div>
                <span className="text-[#0D5EFA] font-black text-xl whitespace-nowrap ml-4">{p.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.description}</p>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/30">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate">{p.file}</p>
                  <p className="text-[0.6rem] text-gray-400">{p.fileSize} • 附件文件</p>
                </div>
                <Download 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" 
                  onClick={(e) => { e.stopPropagation(); handleAction(`下载附件: ${p.file}`); }}
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[0.7rem] font-medium">截止: {p.deadline}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAction(`AI 解析: ${p.title}`); }}
                    className="bg-gray-100 text-[#0D5EFA] px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Cpu className="w-3 h-3" />
                    AI 解析
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAction(`立即投标: ${p.title}`); }}
                    className="bg-gradient-to-br from-[#0048c8] to-[#0d5efa] text-white px-6 py-2 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
                  >
                    立即投标
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
