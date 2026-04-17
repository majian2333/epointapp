import { Search, SlidersHorizontal, Download, Cpu, ChevronRight, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

const PROJECTS_EXTENDED = [
  // ... (existing data)
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
            <div className="relative h-56 overflow-hidden">
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
                <h3 className="text-lg font-bold leading-tight flex-1 mr-4">{p.title}</h3>
                <span className="text-[#0D5EFA] font-black text-xl">{p.price}</span>
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
