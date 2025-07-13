export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Welcome to Talkist
            </h2>
            <p className="text-gray-600">
              Your AI-powered meeting assistant is ready to help you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Recent Meetings
            </h2>
            <p className="text-gray-600">
              No recent meetings found. Start your first meeting!
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              AI Agents
            </h2>
            <p className="text-gray-600">
              Manage your AI agents and their configurations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
