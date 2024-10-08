import * as React from 'react'

import classes from './index.module.css'

export const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.heading}>
				<h1>Сотрудники</h1>
				<p>Выберите подходящий период</p>
			</div>

			<div className={classes.container_calendar}>
				<div className={classes.calendar_day}>
					<button className={classes.calendar_day_btn__left}></button>
					<div>
						<span>16 Сентябрь</span>
					</div>
					<button className={classes.calendar_day_btn__right}></button>
				</div>
				<button className={classes.calendar_week}>Неделя</button>
				<button className={classes.calendar_month}>Месяц</button>
				<button className={classes.calendar_year}>Год</button>
				<button className={classes.calendar_select_period}>Выбрать период</button>
			</div>
		</header>
	)
}