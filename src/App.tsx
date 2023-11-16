import data from './data.json'
import Stat from './components/Stat'

const colors = [
	{
		category: 'Reaction',
		color: 'red'
	},
	{
		category: 'Memory',
		color: 'orange'
	},
	{
		category: 'Verbal',
		color: 'green'
	},
	{
		category: 'Visual',
		color: 'blue'
	}
]

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
					{data.map(stat => ({ ...stat, color: colors.find(o => o.category === stat.category)?.color })).map(stat => (
						<Stat key={stat.category} name={stat.category} icon={stat.icon} color={stat.color ?? ''} score={stat.score} />
					))}
				</div>
				<button className="button">Continue</button>
			</div>
		</>
	)
}

export default App
