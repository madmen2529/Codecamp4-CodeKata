
ReactDOM.render(
    <DashboardUnit data-index="2">
        <h1>Scores</h1>
        <Scoreboard className="results" scores={gameScores} />
    </DashboardUnit>,
    document.getElementById('container')
  );