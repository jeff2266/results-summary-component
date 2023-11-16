type Params = {
	name: string
	icon: string
	color: string
	score: number
}

export default function Stat({ name, icon, color, score }: Params) {
	return (
		<div className="stat-wrapper" color={color}>
			<div className="flex-group">
				<img src={icon} />
				<p className="stat-name">{name}</p>
			</div>
			<div className="stat-score flex-group">
				<span>{score}</span> / 100
			</div>
		</div>
	)
}
