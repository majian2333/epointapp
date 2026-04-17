import { Shield, Verified, FileText, Landmark, Settings, ChevronRight, Crown, History, PlusCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

export default function Profile() {
  const handleAction = (action: string) => {
    toast.success(`正在进入: ${action}`);
  };

  const credentials = [
    { id: 1, title: '施工资质甲级', desc: '有效期至 2025年12月', status: '已认证', icon: FileText },
    { id: 2, title: '法定投标授权', desc: '国家级认证', status: '已认证', icon: Landmark },
    { id: 3, title: 'ISO 9001 合规', desc: '质量管理体系', status: '已认证', icon: Shield },
  ];

  return (
    <div className="px-4 py-8 space-y-8 pb-12">
      {/* Profile Header Block */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Info Card */}
        <div 
          onClick={() => handleAction('个人详情编辑')}
          className="md:col-span-4 bg-white p-8 rounded-3xl shadow-[0_4px_32px_rgba(13,94,250,0.03)] border border-blue-50/50 flex flex-col items-center text-center cursor-pointer hover:border-blue-200 transition-all"
        >
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full ring-8 ring-blue-50 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-blue-600 p-1.5 rounded-full text-white ring-4 ring-white shadow-md">
              <Verified className="w-4 h-4" />
            </div>
          </div>
          <h2 className="text-xl font-bold tracking-tight">陈伟杰 (Chen Weijie)</h2>
          <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest font-bold">机构投标总监</p>
          
          <div className="mt-8 pt-8 border-t border-gray-50 flex justify-around w-full">
            <div className="cursor-help" onClick={(e) => { e.stopPropagation(); handleAction('进行中投标列表'); }}>
              <p className="text-2xl font-black text-blue-600">128</p>
              <p className="text-[0.6rem] uppercase tracking-widest text-gray-400 font-bold mt-1">进行中投标</p>
            </div>
            <div className="cursor-help" onClick={(e) => { e.stopPropagation(); handleAction('中标率统计详情'); }}>
              <p className="text-2xl font-black text-blue-600">94%</p>
              <p className="text-[0.6rem] uppercase tracking-widest text-gray-400 font-bold mt-1">中标率</p>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div 
                key={cred.id} 
                onClick={() => handleAction(`资质核验: ${cred.title}`)}
                className="bg-white p-6 rounded-3xl flex items-start gap-4 hover:shadow-xl transition-all cursor-pointer border border-gray-100/50 group"
              >
                <div className="p-4 bg-blue-50 rounded-2xl text-[#0D5EFA] group-hover:bg-[#0D5EFA] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base">{cred.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{cred.desc}</p>
                  <span className="inline-block mt-4 px-3 py-1 bg-green-50 text-green-700 text-[0.6rem] font-black rounded-lg uppercase tracking-widest">
                    {cred.status}
                  </span>
                </div>
              </div>
            );
          })}
          
          <div 
            onClick={() => handleAction('添加新资质')}
            className="bg-gradient-to-br from-[#0048c8] to-[#0d5efa] p-6 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:shadow-blue-200 transition-all shadow-xl shadow-blue-500/10 group active:scale-95"
          >
            <PlusCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white font-black tracking-tight">添加资质</span>
          </div>
        </div>
      </section>

      {/* Settings & Subscriptions */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold mb-8 flex items-center gap-3">
          <Settings className="w-5 h-5 text-blue-600" />
          交易与内容偏好
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Notifications */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-gray-300 uppercase tracking-[0.2em] border-b border-gray-50 pb-2">通知设置</h3>
            <div className="flex items-center justify-between group cursor-pointer" onClick={() => handleAction('投标状态提醒设置')}>
              <div>
                <p className="font-bold text-gray-700">投标状态提醒</p>
                <p className="text-xs text-gray-400 mt-1">实时获取活动交易的更新</p>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between group cursor-pointer opacity-50" onClick={() => handleAction('开启市场分析报告')}>
              <div>
                <p className="font-bold text-gray-700">市场分析报告</p>
                <p className="text-xs text-gray-400 mt-1">每周建筑行业简报</p>
              </div>
              <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
              </div>
            </div>
          </div>
          
          {/* Subscriptions */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-gray-300 uppercase tracking-[0.2em] border-b border-gray-50 pb-2">行业订阅</h3>
            <div onClick={() => handleAction('公共基础设施订阅管理')} className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-xl">
                  <Landmark className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-sm">公共基础设施</p>
                  <p className="text-[0.6rem] text-gray-300 font-bold uppercase tracking-widest">高级会员权限</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </div>
            
             <div onClick={() => handleAction('绿色能源交易订阅管理')} className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-50 rounded-xl">
                  <Verified className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-sm">绿色能源交易</p>
                  <p className="text-[0.6rem] text-green-600 font-bold uppercase tracking-widest">已激活</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & FAQ Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        {/* Points Display */}
        <div className="bg-gradient-to-br from-[#00174d] to-[#0048c8] p-8 rounded-[2rem] text-white relative overflow-hidden group">
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-sm font-bold opacity-60 flex items-center gap-2">
                <Crown className="w-4 h-4" /> 可用服务积分
              </p>
              <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-5xl font-black tracking-tighter">24,500</h3>
                <span className="text-[0.6rem] font-black bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md border border-white/10">黄金会员</span>
              </div>
              <p className="text-blue-100 text-xs mt-6 leading-relaxed opacity-70 max-w-[240px]">
                兑换积分以获取 AI 高级投标洞察、技术标书自动生成或 1v1 专家咨询服务。
              </p>
            </div>
            <button 
              onClick={() => handleAction('积分兑换商城')}
              className="mt-10 bg-white text-blue-900 px-8 py-3.5 rounded-2xl font-black text-sm shadow-2xl hover:bg-blue-50 transition-all active:scale-95 self-start"
            >
              立即兑换权益
            </button>
          </div>
          {/* Subtle bg art */}
          <History className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12 pointer-events-none group-hover:scale-110 group-hover:rotate-0 transition-all duration-1000" />
        </div>

        {/* Support Grid */}
        <div className="bg-gray-100 p-8 rounded-[2rem] space-y-6">
          <h2 className="text-lg font-bold">支持与常见问题</h2>
          <div className="space-y-3">
            {[
              '如何续订交易资质？',
              '了解投标评分逻辑',
              '2024 年积分兑换政策'
            ].map((q, i) => (
              <div key={i} onClick={() => handleAction(`帮助: ${q}`)} className="bg-white p-5 rounded-2xl flex items-center justify-between hover:bg-blue-50 transition-all cursor-pointer shadow-sm group">
                <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{q}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
              </div>
            ))}
          </div>
          <button 
            onClick={() => handleAction('查看所有帮助主题')}
            className="w-full pt-4 text-[0.6rem] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:underline"
          >
            查看所有帮助主题 <PlusCircle className="w-3 h-3" />
          </button>
        </div>
      </section>
    </div>
  );
}
