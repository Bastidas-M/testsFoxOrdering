import React, { useState } from 'react';
import eliminarVocales from './eliminarVocales';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcesar = () => {
    //Add processing effect
    setIsProcessing(true);
    
    //Simulate processing with timeout for visual effect
    setTimeout(() => {
      setResultado(eliminarVocales(texto));
      setIsProcessing(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
            Frontend technical test Marino Bastidas Rosero 
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Point 1: Vowel elimination function */}
        <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700/50 mb-8 hover:shadow-cyan-500/10 transition duration-300">
          <h2 className="text-2xl font-semibold mb-6 flex items-center text-cyan-300">
            <span className="inline-block w-8 h-8 bg-cyan-500 rounded-lg mr-3 text-center text-white flex items-center justify-center font-bold">1</span>
            Delete vowels
          </h2>
          
          <div className="mb-6 space-y-4">
            <label htmlFor="textoInput" className="block text-lg text-slate-300">
              Enter a text:
            </label>
            <input 
              type="text" 
              id="textoInput" 
              className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
              placeholder="Write something here..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleProcesar}
            disabled={isProcessing}
            className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold 
            transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyan-500/40 
            active:translate-y-0 transition-all duration-300 ${isProcessing ? 'opacity-80' : ''}`}
          >
            {isProcessing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Process'}
          </button>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-slate-300">Result:</p>
              {resultado && (
                <span className="text-xs text-slate-400">
                  {resultado.length} chars
                </span>
              )}
            </div>
            <div className={`font-mono bg-slate-900/80 p-4 rounded-xl border border-slate-700 min-h-16 flex items-center
            ${resultado ? 'text-cyan-300' : 'text-slate-500'} transition-all duration-300`}>
              {resultado || "The result will be displayed here"}
            </div>
          </div>
        </div>
        
        {/* Point 3: Layout */}
        <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:shadow-purple-500/10 transition duration-300">
          <h2 className="text-2xl font-semibold mb-6 flex items-center text-purple-300">
            <span className="inline-block w-8 h-8 bg-purple-500 rounded-lg mr-3 text-center text-white flex items-center justify-center font-bold">3</span>
            Layout
          </h2>
          
        
          <div className="border-2 border-slate-600 rounded-xl p-6 bg-slate-900/30 backdrop-blur">
            {/* First row: 3 columns */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="border-2 border-purple-500/30 p-6 flex-1 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-purple-500/20 transition duration-300 hover:scale-105">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Columna 1</p>
              </div>
              <div className="border-2 border-cyan-500/30 p-6 flex-1 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-cyan-500/20 transition duration-300 hover:scale-105">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Columna 2</p>
              </div>
              <div className="border-2 border-blue-500/30 p-6 flex-1 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-blue-500/20 transition duration-300 hover:scale-105">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Columna 3</p>
              </div>
            </div>
            
            {/* Second row: 2 columns */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="border-2 border-cyan-500/30 p-6 flex-1 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-cyan-500/20 transition duration-300 hover:scale-105">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Columna 1</p>
              </div>
              <div className="border-2 border-purple-500/30 p-6 flex-1 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-purple-500/20 transition duration-300 hover:scale-105">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Columna 2</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>Developed with React and TailwindCSS</p>
          <p className="mt-1">© {new Date().getFullYear()} Frontend F.O. Test</p>
        </div>
      </div>
    </div>
  );
}

export default App;