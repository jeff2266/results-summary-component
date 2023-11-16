import './App.css'

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
					<div className="stat-wrapper" color="red">
						<div className="stat-name flex-group">
							<img src="assets/images/icon-reaction.svg" />
							<p className="">Reaction</p>
						</div>
						<div className="flex-group">
							<span>80</span> / 100
						</div>
					</div>
					<div className="stat-wrapper" color="orange">
						<div className="stat-name flex-group">
							<img src="assets/images/icon-memory.svg" />
							<p className="">Memory</p>
						</div>
						<div className="flex-group">
							<span>92</span> / 100
						</div>
					</div>
					<div className="stat-wrapper" color="green">
						<div className="stat-name flex-group">
							<img src="assets/images/icon-verbal.svg" />
							<p className="">Verbal</p>
						</div>
						<div className="flex-group">
							<span>61</span> / 100
						</div>
					</div>
					<div className="stat-wrapper" color="blue">
						<div className="stat-name flex-group">
							<img src="assets/images/icon-visual.svg" />
							<p className="">Visual</p>
						</div>
						<div className="flex-group">
							<span>72</span> / 100
						</div>
					</div>
				</div>
				<button>Continue</button>
			</div>
		</>
	)
}

export default App
