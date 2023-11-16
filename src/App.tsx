import './App.css'
import Stat from './components/Stat'

function App() {
	return (
		<>
			<div className="rounded results section grid-flow gap-large">
				<h1 className="section-title">Your Result</h1>
				<div className="score-overall grid-flow">
					<span>76</span>of 100
				</div>
				<div className="results-description grid-flow">
					<h2>Great</h2>
					<p>You scored higher than 65% of the people who have taken these tests.</p>
				</div>
			</div>

			<div className="stat-summary grid-flow gap-large section">
				<h1 className="section-title">Summary</h1>
				<div className="grid-flow">
					<Stat name="Reaction" icon="assets/images/icon-reaction.svg" color="red" score={80} />
					<Stat name="Memory" icon="assets/images/icon-memory.svg" color="orange" score={92} />
					<Stat name="Verbal" icon="assets/images/icon-verbal.svg" color="green" score={61} />
					<Stat name="Visual" icon="assets/images/icon-visual.svg" color="blue" score={72} />
				</div>
				<button className='button' >Continue</button>
			</div>
		</>
	)
}

export default App
