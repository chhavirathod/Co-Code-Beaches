import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import "./StudentDashboard.css"

const mockData = [
  { day: "Mon", score: 85 },
  { day: "Tue", score: 78 },
  { day: "Wed", score: 92 },
  { day: "Thu", score: 88 },
  { day: "Fri", score: 95 },
  { day: "Sat", score: 86 },
  { day: "Sun", score: 90 },
]

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <div className="dashboard-grid">
        <div className="score-card semantic">
          <h2>Semantic Score</h2>
          <p className="score">92%</p>
        </div>
        <div className="score-card literal">
          <h2>Literal Score</h2>
          <p className="score">88%</p>
        </div>
        <div className="swot-analysis">
          <h2>SWOT Analysis</h2>
          <div className="swot-grid">
            <div className="swot-item strengths">
              <h3>Strengths</h3>
              <ul>
                <li>Strong analytical skills</li>
                <li>Excellent in mathematics</li>
              </ul>
            </div>
            <div className="swot-item weaknesses">
              <h3>Weaknesses</h3>
              <ul>
                <li>Needs improvement in writing</li>
                <li>Time management issues</li>
              </ul>
            </div>
            <div className="swot-item opportunities">
              <h3>Opportunities</h3>
              <ul>
                <li>Upcoming science fair</li>
                <li>Advanced placement classes</li>
              </ul>
            </div>
            <div className="swot-item threats">
              <h3>Threats</h3>
              <ul>
                <li>Increasing competition</li>
                <li>Balancing extracurriculars</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="score-graph">
          <h2>Score Summary</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="graph-inference">
            <p>Your scores show an upward trend. Keep up the good work!</p>
          </div>
        </div>
        <div className="daily-streak">
          <h2>Daily Streak</h2>
          <p className="streak-count">7 days</p>
          <p>Great job maintaining your study routine!</p>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
