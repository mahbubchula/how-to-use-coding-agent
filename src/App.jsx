import React, { useState } from 'react';
import Instructor from './components/Instructor';
import './index.css';

function App() {
  const [currentModule, setCurrentModule] = useState('welcome');

  const modules = [
    { id: 'welcome', title: 'Welcome' },
    { id: 'cli-intro', title: '1. Why CLI Tools?' },
    { id: 'claude-code', title: '2. Using Claude Code' },
    { id: 'gemini-cli', title: '3. Using Gemini CLI' },
    { id: 'prompting', title: '4. Prompting Secret' },
  ];

  const renderContent = () => {
    switch (currentModule) {
      case 'welcome':
        return (
          <div>
            <h1>Mastering CLI Coding Agents</h1>
            <p>Welcome to the complete guide for non-technical creators. Learn how to leverage terminal-based AI agents to build software without the complexity of traditional environments.</p>
            <button onClick={() => setCurrentModule('cli-intro')}>Start Learning</button>
            <Instructor />
          </div>
        );
      case 'cli-intro':
        return (
          <div className="animate-in">
            <h2>What are CLI Coding Agents?</h2>
            <div className="card">
              <p>CLI (Command Line Interface) agents like <strong>Claude Code</strong> and <strong>Gemini CLI</strong> allow you to interact with AI directly where your code lives.</p>
              <p>For non-tech people, this might seem scary at first, but it's actually the fastest way to get things done once you know the basic commands.</p>
              <h3>Why use them?</h3>
              <ul>
                <li><strong>No context switching:</strong> Stay in your code folder.</li>
                <li><strong>Proactive assistance:</strong> The agent can read your files and suggest fixes.</li>
                <li><strong>Automation:</strong> Run complex tasks with simple English commands.</li>
              </ul>
            </div>
            <button onClick={() => setCurrentModule('claude-code')}>Next: Claude Code</button>
          </div>
        );
      case 'claude-code':
        return (
          <div className="animate-in">
            <h2>Setting up Claude Code</h2>
            <div className="card">
              <p>Claude Code is a high-performance CLI tool that lets you build and debug apps using Anthropic's Claude 3.7 Sonnet model.</p>
              <h3 style={{ marginTop: '1rem' }}>How to install:</h3>
              <pre style={{ background: '#000', padding: '1rem', borderRadius: '4px', color: '#0f0', margin: '1rem 0' }}>
                npm install -g @anthropic-ai/claude-code
              </pre>
              <p>Once installed, just type <code>claude</code> in your terminal to start a conversation.</p>
            </div>
            <button onClick={() => setCurrentModule('gemini-cli')}>Next: Gemini CLI</button>
          </div>
        );
      case 'gemini-cli':
        return (
          <div className="animate-in">
            <h2>Using Gemini CLI</h2>
            <div className="card">
              <p>Gemini CLI brings the power of Google's Gemini models directly to your terminal. It's perfect for quick code questions and file analysis.</p>
              <h3 style={{ marginTop: '1rem' }}>How to start:</h3>
              <p>Search for <code>gemini-cli</code> on GitHub or use the Google AI SDK to script your own commands.</p>
              <p>Tip: Use <strong>multimodal</strong> features to send images of your UI bugs directly to the agent!</p>
            </div>
            <button onClick={() => setCurrentModule('prompting')}>Next: Prompting Secrets</button>
          </div>
        );
      case 'prompting':
        return (
          <div className="animate-in">
            <h2>The Secret of Effective Prompting</h2>
            <div className="card">
              <p>When talking to CLI agents, clarity is key. Here's a simple formula for non-techies:</p>
              <blockquote style={{ borderLeft: '4px solid var(--primary-orange)', paddingLeft: '1rem', fontStyle: 'italic', margin: '1rem 0' }}>
                "Goal + Context + Format"
              </blockquote>
              <p>Example: <em>"Add a button (Goal) to my landing page (Context). Make it orange and rounded (Format)."</em></p>
            </div>
            <button onClick={() => setCurrentModule('welcome')}>Back to Start</button>
            <Instructor />
          </div>
        );
      default:
        return <div>Content coming soon...</div>;
    }
  };

  return (
    <div className="container">
      <nav style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {modules.map(mod => (
          <span
            key={mod.id}
            onClick={() => setCurrentModule(mod.id)}
            style={{
              cursor: 'pointer',
              color: currentModule === mod.id ? 'var(--primary-orange)' : 'var(--text-gray)',
              borderBottom: currentModule === mod.id ? '2px solid var(--primary-orange)' : 'none',
              paddingBottom: '4px'
            }}
          >
            {mod.title}
          </span>
        ))}
      </nav>

      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
