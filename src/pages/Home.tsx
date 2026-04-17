import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gavel, ShoppingCart, Landmark, ArrowRight, Ruler, FileCheck, Calculator } from 'lucide-react';
import { PROJECTS, BID_STATUSES } from '../constants';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

const CAROUSEL_SLIDES = [
  {
    tag: '行业动态',
    title: '2024年度基础设施项目工程技术新标准发布',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    tag: '政策导向',
    title: '数字化转型补贴政策正式进入申请阶段',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  },
  {
    tag: '热门招标',
    title: '新区智慧交通系统建设项目已开启预报名',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAction = (action: string) => {
    toast.success(`您点击了: ${action}`);
  };

  return (
    <div className="px-4 py-6 space-y-10">
      {/* News Carousel Section */}
      <section className="relative overflow-hidden rounded-2xl h-48 md:h-64 shadow-sm group cursor-pointer">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            onClick={() => handleAction(CAROUSEL_SLIDES[currentSlide].title)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url('${CAROUSEL_SLIDES[currentSlide].image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-[#0D5EFA] px-2 py-1 text-[0.625rem] font-bold text-white rounded uppercase tracking-widest">
                {CAROUSEL_SLIDES[currentSlide].tag}
              </span>
              <h2 className="text-white text-xl md:text-2xl font-bold mt-2 leading-tight">
                {CAROUSEL_SLIDES[currentSlide].title}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-4 right-6 flex gap-2 z-10 transition-opacity">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              className={cn(
                "h-1.5 transition-all rounded-full",
                currentSlide === idx ? "w-8 bg-white" : "w-1.5 bg-white/40"
              )}
            />
          ))}
        </div>
      </section>

      {/* AI Recommendations Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-end px-1">
          <div>
            <h3 className="text-xl font-bold tracking-tight">AI 推荐项目</h3>
            <p className="text-gray-500 text-sm mt-1">基于您的企业投标历史精准推送</p>
          </div>
          <button 
            onClick={() => handleAction('查看全部推荐项目')}
            className="text-[#0D5EFA] font-bold text-sm hover:underline flex items-center gap-1 group"
          >
            查看全部 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => handleAction(`项目详情: ${project.title}`)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "p-3 rounded-xl transition-colors duration-300",
                    project.id === '1' ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" :
                    project.id === '2' ? "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white" :
                    "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
                  )}>
                    {project.id === '1' && <Gavel className="w-6 h-6" />}
                    {project.id === '2' && <ShoppingCart className="w-6 h-6" />}
                    {project.id === '3' && <Landmark className="w-6 h-6" />}
                  </div>
                  <span className={cn(
                    "text-[0.65rem] font-bold px-2 py-1 rounded",
                    project.id === '1' ? "bg-blue-50 text-blue-600" :
                    project.id === '2' ? "bg-gray-50 text-gray-500" :
                    "bg-red-50 text-red-600"
                  )}>
                    {project.id === '1' ? '正在招标' : project.id === '2' ? '剩余 7 天' : '高优先级'}
                  </span>
                </div>
                <h4 className="text-lg font-bold group-hover:text-[#0D5EFA] transition-colors">{project.title}</h4>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{project.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-[0.65rem] uppercase tracking-wider font-bold">
                    {project.id === '2' ? '采购规模' : '起拍价'}
                  </span>
                  <span className="text-xl font-black">{project.budget.split(' ')[0]} <span className="text-xs font-medium text-gray-500">{project.budget.split(' ')[1]}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operations Grid */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">企业常用操作</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div 
            onClick={() => handleAction('工程类投标')}
            className="p-[1px] rounded-2xl bg-gradient-to-br from-[#0048c8] to-[#0d5efa] shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="bg-white w-full h-full p-5 rounded-[15px] group-hover:bg-transparent transition-colors duration-300">
              <div className="flex items-center gap-4">
                <Ruler className="text-[#0D5EFA] group-hover:text-white transition-colors" />
                <div>
                  <p className="font-bold group-hover:text-white transition-colors">工程类投标</p>
                  <p className="text-[0.7rem] text-gray-500 group-hover:text-white/80 transition-colors">提交技术方案及蓝图</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            onClick={() => handleAction('采购类报价')}
            className="bg-white p-5 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-blue-100 transition-all cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-4">
              <FileCheck className="text-blue-500" />
              <div>
                <p className="font-bold">采购类报价</p>
                <p className="text-[0.7rem] text-gray-500">提交成本分析数据</p>
              </div>
            </div>
          </div>
          
          <div 
            onClick={() => handleAction('资产估值')}
            className="bg-white p-5 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-blue-100 transition-all cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-4">
              <Calculator className="text-blue-500" />
              <div>
                <p className="font-bold">资产估值</p>
                <p className="text-[0.7rem] text-gray-500">申请专业资产评估</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bid Status Section */}
      <section className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">近期投标状态</h3>
          <button 
            onClick={() => handleAction('查看筛选选项')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          {BID_STATUSES.map((bid) => (
            <div 
              key={bid.id} 
              onClick={() => handleAction(`投标状态详情: ${bid.title}`)}
              className="bg-white p-4 rounded-xl flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:bg-blue-50/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-1.5 h-10 rounded-full"
                  style={{ backgroundColor: bid.color }}
                ></div>
                <div>
                  <p className="text-sm font-bold group-hover:text-[#0D5EFA] transition-colors">{bid.title}</p>
                  <p className="text-[0.7rem] text-gray-400 mt-0.5">招标编号: {bid.code}</p>
                </div>
              </div>
              <div className="text-right">
                <span 
                  className="text-[0.65rem] font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${bid.color}15`, color: bid.color }}
                >
                  {bid.status}
                </span>
                <p className="text-[0.7rem] text-gray-400 mt-1 font-mono">{bid.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
