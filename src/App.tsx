import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            안녕하세요! 👋
          </h1>
          <p className="text-xl text-white/90 mb-12">
            Lovable로 만든 첫 번째 프로젝트입니다
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-md mx-auto">
            <p className="text-white">
              이제 GitHub에 연결할 준비가 되었습니다!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;