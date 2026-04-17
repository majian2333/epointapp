import { CheckCircle2, AlertCircle, Clock, Plus, ChevronRight, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

export default function MyBids() {
  return (
    <div className="px-4 py-8 space-y-8">
      {/* Header & Tabs */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">投标管理</h1>
          <p className="text-gray-500 text-sm">管理您正在参与的资源交易项目与历史投标记录</p>
        </div>
        <div className="flex bg-gray-100 p-1.5 rounded-2xl w-fit">
          <button className="px-6 py-2 rounded-xl bg-white text-[#0D5EFA] font-bold text-sm shadow-sm">
            进行中 (4)
          </button>
          <button className="px-6 py-2 rounded-xl text-gray-500 font-medium text-sm hover:bg-gray-200 transition-colors">
            历史记录
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {/* Active Bids List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ongoing Bid Card 1 */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <span className="inline-flex px-2 py-0.5 rounded text-[0.65rem] font-bold bg-blue-50 text-[#0D5EFA] uppercase tracking-wider">
                  工程类
                </span>
                <h2 className="text-lg font-bold">朝阳区数字孪生城市建设项目 (第一标段)</h2>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-[0.7rem] font-bold">
                技术评审中
              </span>
            </div>
            
            {/* Step Progress */}
            <div className="relative py-8 px-4">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-2/3 h-[2px] bg-blue-500 -translate-y-1/2 rounded-full"></div>
              
              <div className="relative flex justify-between items-center z-10">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="mt-2 text-[0.65rem] font-bold">已提交</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/30">2</div>
                  <span className="mt-2 text-[0.65rem] font-black text-blue-600">专家评审</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold">3</div>
                  <span className="mt-2 text-[0.65rem] font-medium text-gray-400">结果公示</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-gray-400 text-[0.65rem] uppercase tracking-wider font-bold">当前出价</p>
                <p className="text-2xl font-black text-blue-600 font-mono">¥4,820,000.00</p>
              </div>
              <button className="bg-gradient-to-br from-[#0048c8] to-[#0d5efa] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:shadow-lg active:scale-95 transition-all">
                查看详情
              </button>
            </div>
          </div>

          {/* Ongoing Bid Card 2 */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <span className="inline-flex px-2 py-0.5 rounded text-[0.65rem] font-bold bg-orange-50 text-orange-600 uppercase tracking-wider">
                  采购类
                </span>
                <h2 className="text-lg font-bold">海淀区政务云服务升级采购计划</h2>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-[0.7rem] font-bold">
                待完善报价
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl">
              <div className="space-y-1">
                <p className="text-gray-400 text-[0.65rem] uppercase tracking-wider font-bold">截标时间</p>
                <p className="text-sm font-bold">2023-11-28 10:00</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-[0.65rem] uppercase tracking-wider font-bold">投标倒计时</p>
                <p className="text-sm font-bold text-red-600 animate-pulse">02天 : 14时 : 45分</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-gray-100 text-blue-600 px-5 py-3 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-all">
                更新报价
              </button>
              <button className="flex-1 bg-gradient-to-br from-[#0048c8] to-[#0d5efa] text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-95">
                完善附件
              </button>
            </div>
          </div>
        </div>

        {/* Wizard Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-blue-100/50 shadow-sm border-dashed border-2 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-blue-50/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0D5EFA] group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mt-4">创建新投标</h3>
            <p className="text-gray-400 text-sm mt-2">AI 智能辅助全流程引导</p>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">AI 优化助手</h3>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed opacity-80">
                根据历史成交数据深度学习，为您提升 15% 以上的中标概率。
              </p>
              <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-all">
                立即开始投标
              </button>
            </div>
            {/* Background design elements */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               < LandMark className="w-48 h-48" />
            </div>
          </div>

          <section className="space-y-4">
            <h3 className="text-lg font-bold">最近成交</h3>
            <div className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                   <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=200" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold truncate max-w-[120px]">通州区智慧医疗...</p>
                  <p className="text-[0.65rem] text-gray-400">2023-10-15</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-2">
                <div>
                  <p className="text-xs font-medium text-gray-400">中标价</p>
                  <p className="text-sm font-black text-blue-600">¥12.4M</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Landmark as LandMark } from 'lucide-react';
