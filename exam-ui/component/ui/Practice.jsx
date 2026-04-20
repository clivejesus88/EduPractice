import React, { useState, useRef, useEffect } from 'react';

// Custom Canvas Component for Drawing
const DrawingCanvas = ({ isReadOnly }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#f99c00"; // Signature Orange
    ctx.lineWidth = 3;
    ctxRef.current = ctx;

    // Handle window resize gracefully
    const handleResize = () => {
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#f99c00";
      ctx.lineWidth = 3;
      ctx.putImageData(data, 0, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    if (isReadOnly) return;
    const { x, y } = getCoordinates(e);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (isReadOnly) return;
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing || isReadOnly) return;
    const { x, y } = getCoordinates(e);
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const clearCanvas = () => {
    if (!canvasRef.current || !ctxRef.current) return;
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="relative w-full h-80 sm:h-96 md:h-112 rounded-xl overflow-hidden border border-white/10 bg-[#1A2234]">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onMouseLeave={finishDrawing}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onTouchMove={draw}
        className={`w-full h-full relative z-10 touch-none ${isReadOnly ? 'cursor-default' : 'cursor-crosshair'}`}
      />
      {!isReadOnly && (
        <button 
          onClick={clearCanvas}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-md bg-[#0B1120]/80 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default function Practice() {
  const [activeTab, setActiveTab] = useState('canvas');
  const [aiState, setAiState] = useState('idle'); // idle | analyzing | feedback
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hello Sarah! I'm Maestro. I'm here if you have any follow-up questions about this scenario or need a hint." }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const handleSubmit = () => {
    if (aiState !== 'idle') return;
    
    // Simulate submission and inline feedback
    setAiState('analyzing');

    setTimeout(() => {
      setAiState('feedback');
    }, 2000);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    setChatInput('');
    
    // Simulate AI thinking and follow-up response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "To find the final velocity, remember to use the kinematic equation v² = u² + 2as. Since it starts from rest, u = 0. Have you calculated the acceleration first?" 
      }]);
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row h-full relative overflow-hidden bg-[#0B1120] gap-4 lg:gap-0">
      
      {/* Main Full-Width Content Area */}
      <div className="flex-1 overflow-y-auto w-full p-4 sm:p-6 md:p-8 pb-32 sm:pb-24 lg:pb-8 h-full lg:pr-105">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#f99c00] text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
              <iconify-icon icon="solar:book-bookmark-linear" width="16" className="sm:hidden"></iconify-icon>
              <iconify-icon icon="solar:book-bookmark-linear" width="18" className="hidden sm:block"></iconify-icon>
              <span>Physics • Kinematics</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">Projectile Motion Scenario</h1>
          </div>

          {/* Scenario Details */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-4 sm:p-5 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A block of mass <span className="font-mono-custom text-[#f99c00]">m</span> is sliding down a frictionless incline angled at <span className="font-mono-custom text-[#f99c00]">θ</span> to the horizontal. Derive the equation for its acceleration and calculate its final velocity if it starts from rest and travels a distance <span className="font-mono-custom text-[#f99c00]">d</span>.
            </p>
            
            {/* Embedded Reference Image */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/fd86d650-37a4-4a87-a832-38f8d246494a/c1d8f4a0-dfec-4aba-8c26-7c9d7cb813e2-pr.png?v=1776510287457" 
                alt="Scenario Reference" 
                className="w-full object-cover max-h-64 sm:max-h-80"
              />
            </div>
          </div>

          {/* Answer Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-lg font-medium text-white">Your Solution</h3>
              
              {/* Tabs */}
              <div className="flex bg-[#111827] p-1 rounded-lg border border-white/5 self-start w-full xs:w-auto">
                <button 
                  onClick={() => setActiveTab('canvas')}
                  className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 sm:py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'canvas' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <iconify-icon icon="solar:pen-linear" width="20" style={{ strokeWidth: 1 }}></iconify-icon>
                  Draw
                </button>
                <button 
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 sm:py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'upload' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <iconify-icon icon="solar:gallery-linear" width="20" style={{ strokeWidth: 1 }}></iconify-icon>
                  Upload
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="animate-fade-in-up">
              {activeTab === 'canvas' ? (
                <DrawingCanvas isReadOnly={aiState === 'analyzing' || aiState === 'feedback'} />
              ) : (
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl border-2 border-dashed border-white/10 hover:border-[#f99c00]/50 bg-[#1A2234]/50 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#f99c00] group-hover:scale-110 transition-all duration-300 mb-4">
                    <iconify-icon icon="solar:upload-minimalistic-linear" width="24"></iconify-icon>
                  </div>
                  <p className="text-sm font-medium text-white mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500 max-w-xs">Upload a clear photo of your written solution. (PNG, JPG, PDF up to 10MB)</p>
                </div>
              )}
            </div>

            {/* Submit Action */}
            {aiState !== 'feedback' && (
              <div className="mt-4 sm:mt-6 flex flex-col-reverse sm:flex-row gap-3 justify-between">
                <button 
                  onClick={handleSubmit}
                  disabled={aiState !== 'idle'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f99c00] text-[#0B1120] px-4 sm:px-6 py-2.5 sm:py-2.5 rounded-lg text-sm font-medium hover:bg-[#f99c00]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {aiState === 'analyzing' ? (
                    <>
                      <iconify-icon icon="solar:loader-bold" width="20" className="animate-spin"></iconify-icon>
                      <span className="hidden xs:inline">Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                      <span className="hidden xs:inline">Submit for Evaluation</span>
                      <span className="xs:hidden text-sm">Submit</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Inline Feedback Section */}
            {aiState === 'feedback' && (
              <div className="mt-4 sm:mt-6 bg-[#111827] border border-emerald-500/20 rounded-2xl p-4 sm:p-5 md:p-6 animate-fade-in-up relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-emerald-500"></div>
                <div className="flex flex-col gap-3 sm:gap-4 md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-emerald-400 mb-2 sm:mb-3 flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-bold" width="20" className="sm:hidden"></iconify-icon>
                      <iconify-icon icon="solar:check-circle-bold" width="24" className="hidden sm:block"></iconify-icon>
                      Solution Evaluated
                    </h3>
                    <div className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 space-y-2 sm:space-y-3">
                      <p>Your approach to breaking down the vector components is correct and your derivation for the acceleration is flawless.</p>
                      <p>However, watch your units in the final substitution step. The final answer should be explicitly written in meters per second squared (<span className="font-mono-custom text-[#f99c00] bg-[#f99c00]/10 px-1 rounded">m/s²</span>).</p>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 self-center sm:self-auto">
                    <span className="text-2xl sm:text-3xl font-mono-custom font-bold text-emerald-400">85%</span>
                    <span className="text-xs font-medium text-emerald-500/80 uppercase tracking-wider mt-1">Score</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-white/5 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button onClick={() => setAiState('idle')} className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Try Again
                  </button>
                  <button onClick={() => setIsChatOpen(true)} className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#f99c00]/10 text-[#f99c00] border border-[#f99c00]/20 text-xs sm:text-sm font-medium hover:bg-[#f99c00]/20 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                    <iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
                    <span className="hidden xs:inline">Follow up with Maestro</span>
                    <span className="xs:hidden">Ask Maestro</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Floating Chat Toggle Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed lg:absolute right-4 bottom-24 lg:bottom-8 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-[#f99c00] rounded-full flex items-center justify-center text-[#0B1120] shadow-[0_4px_20px_rgba(249,156,0,0.4)] hover:scale-105 transition-all duration-300 ${isChatOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Tutor"
      >
        <iconify-icon icon="solar:magic-stick-3-bold" width="20" className="sm:hidden"></iconify-icon>
        <iconify-icon icon="solar:magic-stick-3-bold" width="28" className="hidden sm:block"></iconify-icon>
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-rose-500 border-2 border-[#f99c00] rounded-full"></span>
      </button>

      {/* Mobile Backdrop for Chat Panel */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 bg-[#0B1120]/60 backdrop-blur-sm z-55 lg:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}

      {/* Slide-over Maestro AI Chat Panel */}
      <div className={`fixed lg:absolute top-0 bottom-0 right-0 z-60 w-full sm:w-105 lg:w-100 h-dvh lg:h-full bg-[#0B1120] lg:bg-[#0B1120]/95 backdrop-blur-xl border-l border-white/5 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl ${isChatOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        
        {/* Panel Header */}
        <div className="p-4 md:p-5 border-b border-white/5 flex items-center justify-between bg-[#111827] pt-safe lg:pt-4 md:pt-5 shrink-0 z-10 relative shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f99c00] to-rose-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(249,156,0,0.2)]">
              <iconify-icon icon="solar:magic-stick-3-bold" width="22"></iconify-icon>
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tight text-white flex items-center gap-2">
                Maestro AI
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </h3>
              <p className="text-xs text-slate-400">Follow-up Assistant</p>
            </div>
          </div>
          <button 
            onClick={() => setIsChatOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors lg:hidden"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
          </button>
        </div>

        {/* Chat Conversation Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''} animate-fade-in-up`} style={{ animationDelay: `${Math.min(idx * 0.1, 0.3)}s` }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'border border-white/10 overflow-hidden' : 'bg-[#111827] text-[#f99c00] border border-white/5'}`}>
                {msg.role === 'user' ? (
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/fd86d650-37a4-4a87-a832-38f8d246494a/a14eeb81-d59e-4bcb-a228-5249b5a17192-pp.png?v=1776510809689" alt="Sarah K." className="w-full h-full object-cover" />
                ) : <iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>}
              </div>
              <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#f99c00] text-[#0B1120] rounded-tr-sm' : 'bg-[#111827] border border-white/5 text-slate-300 rounded-tl-sm'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} className="h-1" />
        </div>

        {/* Input Footer */}
        <form onSubmit={handleChatSubmit} className="p-3 sm:p-4 border-t border-white/5 bg-[#111827] pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-4 shrink-0 z-10 relative shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
          <div className="relative flex items-center gap-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask Maestro a follow-up..." 
              className="w-full bg-[#0B1120] border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#f99c00]/50 focus:ring-1 focus:ring-[#f99c00]/50 transition-all"
            />
            <button 
              type="submit"
              disabled={!chatInput.trim()}
              className="absolute right-2 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#f99c00] transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
            >
              <iconify-icon icon="solar:plain-bold" width="22"></iconify-icon>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}