import './App.css'

function App() {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "2px solid black",
        margin: "20px auto",
        textAlign: "center",
        backgroundColor: "#f0f0f0"
      }}
    >
      <h3>Бинарное дерево</h3>

      <div>Root</div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <div>Left</div>
        <div>Right</div>
      </div>
    </div>
  )
}

export default App