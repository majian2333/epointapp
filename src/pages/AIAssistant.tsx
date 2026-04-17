import { useState } from 'react';
import { Send, PlusCircle, User, Bot, CheckCircle, Clock, HardHat, ShieldCheck, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

const DATA_PROBABILITY = [
  // ...
];

export default function AIAssistant() {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '您好！我是您的智能交易助理。我可以帮您分析项目、检查合规性或生成工程建议。今天有什么可以帮您的？',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      role: 'user',
      content: '分析当前高新区智慧园区建设招标项目的成功概率。',
      timestamp: '09:12',
    },
    {
      role: 'assistant',
      content: '根据近期市场数据及历史类似招标项目分析，该项目的成功中标概率估算如下。竞争对手包括3家甲级资质企业，您的技术得分项优势明显。',
      showStats: true,
      timestamp: '09:13',
    }
  ]);

  const handleAction = (action: string) => {
    toast.success(`AI 助理已响应: ${action}`);
  };

  const simulateResponse = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let response = {
        role: 'assistant',
        content: '',
        showStats: false,
        showSteps: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      if (userText.includes('方案') || userText.includes('工程')) {
        response.content = '已为您生成初步工程方案。基于 BIM 模型分析，建议在 A 区增加 3% 的冗余配置以应对极端工况。';
        response.showSteps = true;
      } else if (userText.includes('概率') || userText.includes('分析')) {
        response.content = '深度分析完成。您的企业在同类项目中得分为 92/100，当前条件下建议报价浮动控制在 0.5% 以内。';
        response.showStats = true;
      } else {
        response.content = '收到您的消息。正在调取相关历史投标数据与政策法规进行交叉验证中，请稍候。';
      }

      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg = {
      role: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    simulateResponse(inputValue);
  };

  return (
    <div className="min-h-screen pb-48">
      {/* Chat Canvas */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {messages.map((msg, i) => (
          <div key={i} className={cn(
            "flex items-start gap-4",
            msg.role === 'user' ? "justify-end" : "justify-start"
          )}>
            {msg.role === 'assistant' && (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0048c8] to-[#0d5efa] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0 cursor-help" onClick={() => handleAction('查看 AI 状态')}>
                <Bot className="w-6 h-6" />
              </div>
            )}
            
            <div className={cn(
              "max-w-[85%] space-y-4",
              msg.role === 'user' ? "bg-[#0D5EFA] text-white rounded-3xl rounded-tr-none p-4 shadow-sm" : "w-full"
            )}>
              {msg.role === 'user' ? (
                <div className="space-y-1">
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                  <p className="text-[0.6rem] opacity-60 text-right">{msg.timestamp}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Assistant Text Box */}
                  <div className="bg-white rounded-3xl rounded-tl-none p-6 shadow-[0_4px_24px_rgba(13,94,250,0.04)] border border-gray-100">
                    <p className="text-sm leading-relaxed mb-6">{msg.content}</p>
                    
                    {msg.showStats && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="bg-[#f6f9ff] p-5 rounded-2xl relative overflow-hidden group cursor-pointer" onClick={() => handleAction('分析中标概率数据')}>
                          <h4 className="text-[0.65rem] font-black text-gray-400 uppercase tracking-widest mb-4">中标概率预测</h4>
                          <div className="h-32 flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: 'success', value: 82 },
                                    { name: 'others', value: 18 },
                                  ]}
                                  innerRadius={35}
                                  outerRadius={45}
                                  startAngle={90}
                                  endAngle={450}
                                  dataKey="value"
                                  stroke="none"
                                >
                                  {[0, 1].map((index) => (
                                    <Cell key={`cell-${index}`} fill={['#0048c8', '#e2e9f1'][index % 2]} />
                                  ))}
                                </Pie>
                              </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-x-0 bottom-4 flex flex-col items-center">
                               <span className="text-2xl font-black text-[#0048c8]">82%</span>
                               <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest">置信度</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-[#f6f9ff] p-5 rounded-2xl flex flex-col justify-between cursor-pointer" onClick={() => handleAction('查看核心评分详情')}>
                          <h4 className="text-[0.65rem] font-black text-gray-400 uppercase tracking-widest mb-4">核心评分维度</h4>
                          <div className="space-y-4">
                            {[
                              { label: '技术匹配', value: 92, color: '#0048c8' },
                              { label: '行业口碑', value: 88, color: '#0D5EFA' },
                              { label: '合规安全', value: 95, color: '#0048c8' },
                            ].map((factor, i) => (
                              <div key={i} className="space-y-1.5">
                                <div className="flex justify-between items-center text-[0.65rem] font-bold">
                                  <span>{factor.label}</span>
                                  <span className="text-gray-400">{factor.value}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${factor.value}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full"
                                    style={{ backgroundColor: factor.color }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => handleAction('查看同类案例')}
                          className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          查看同类案例
                        </button>
                        <button 
                          onClick={() => handleAction('调整预算参数')}
                          className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          调整参数
                        </button>
                      </div>
                      <p className="text-[0.6rem] text-gray-400 font-mono">{msg.timestamp}</p>
                    </div>
                  </div>

                  {msg.showSteps && (
                    <div className="ml-5 pl-8 border-l-2 border-dashed border-gray-200 space-y-8 py-4">
                      <div className="relative group cursor-pointer" onClick={() => handleAction('合规初验')}>
                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <h4 className="text-sm font-bold">已通过合规性扫描</h4>
                        <p className="text-xs text-gray-400 mt-1">系统已核对全部 14 项必要申报文件。</p>
                      </div>
                      
                      <div className="relative group cursor-pointer" onClick={() => handleAction('查看资源详情')}>
                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-100 text-[#0048c8] flex items-center justify-center">
                          <Clock className="w-3 h-3" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-800">资源分配计划建议书</h4>
                        <p className="text-xs text-gray-400 mt-1">方案已生成，点击可下载详细设备部署清单。</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {msg.role === 'user' && (
              <div className="w-10 h-10 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 shadow-sm flex-shrink-0 cursor-pointer" onClick={() => handleAction('个人资料')}>
                <User className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-4 animate-pulse">
            <div className="w-10 h-10 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div className="bg-white rounded-3xl rounded-tl-none p-4 shadow-sm border border-gray-100">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 w-full z-40">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="flex gap-2 p-1 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { icon: HardHat, label: '生成工程方案' },
              { icon: ShieldCheck, label: '合规性检查' },
              { icon: Wallet, label: '价值评估' },
            ].map((tool, i) => (
              <button 
                key={i} 
                onClick={() => handleAction(tool.label)}
                className="flex-shrink-0 bg-white shadow-sm border border-gray-100 px-4 py-3 rounded-2xl text-xs font-black flex items-center gap-2 text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <tool.icon className="w-4 h-4" />
                {tool.label}
              </button>
            ))}
          </div>
          
          <div className="bg-white/90 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-center gap-2 group focus-within:ring-4 ring-blue-500/10 transition-all">
            <button 
              onClick={() => handleAction('添加附件')}
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <PlusCircle className="w-6 h-6" />
            </button>
            <input 
               className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-4 h-full placeholder:text-gray-400 font-medium" 
               placeholder="向 AI 助理提问关于项目的问题..." 
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={(e) => {
                 if (e.key === 'Enter') handleSend();
               }}
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-12 h-12 bg-gradient-to-br from-[#0048c8] to-[#0d5efa] rounded-[1.5rem] flex items-center justify-center text-white shadow-lg active:scale-95 transition-all disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
