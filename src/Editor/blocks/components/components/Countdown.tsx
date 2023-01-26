import { useEffect, useMemo, useState } from 'react'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import differenceInHours from 'date-fns/differenceInHours'
import differenceInDays from 'date-fns/differenceInDays'
import formatTZ from 'date-fns-tz/format'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'

const treatTimestamp = (timestamp: string | number) => {
	if (typeof timestamp === 'string') {
		if (!/^\d+$/.test(timestamp)) return timestamp
	}

	return Number(timestamp)
}

// This method will convert the date into a format with timezone passed.
const formatInTimeZone = (date, dateFormat, timeZone) => {
	return formatTZ(utcToZonedTime(date, timeZone), dateFormat, { timeZone })
}

function useCountdown(date) {
	const dateFormat = "yyyy-MM-dd'T'HH:mm:ss'Z'"
	const timeZone = 'UTC'

	const [nowDate, setNowDate] = useState(new Date(formatInTimeZone(new Date(), dateFormat, timeZone)))
	const endDate = useMemo(() => {
		return new Date(formatInTimeZone(treatTimestamp(date), dateFormat, timeZone))
	}, [date])
	const [ended, setEnded] = useState(nowDate > endDate)

	const values = useMemo(() => {
		const seconds = differenceInSeconds(endDate, nowDate)
		const minutes = differenceInMinutes(endDate, nowDate)
		const hours = differenceInHours(endDate, nowDate)
		const days = differenceInDays(endDate, nowDate)

		return {
			d: Math.abs(days),
			h: Math.abs(hours) % 24,
			m: Math.abs(minutes) % 60,
			s: Math.abs(seconds) % 60,
		}
	}, [nowDate, endDate])

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date(formatInTimeZone(new Date(), dateFormat, timeZone))

			setNowDate(now)
			setEnded(now > endDate)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [endDate])

	return { ended, values }
}

export function Countdown(props) {
	const { values } = useCountdown(new Date(props.date))
	const fields = {
		day: {
			name: 'Days',
			value: values.d,
		},
		hour: {
			name: 'Hours',
			value: values.h,
		},
		minute: {
			name: 'Minutes',
			value: values.m,
		},
		second: {
			name: 'Seconds',
			value: values.s,
		},
	}

	return (
		<div id={props.id} className={props.className}>
			<div className="flex gap-px-12">
				{Object.keys(fields).map((key) => {
					const field = fields[key]
					return (
						<div key={key} className="flex flex-col gap-px-8 text-center">
							<h3 className={props.titleClass} style={{ color: props.titleColor }} contentEditable>
								{field.name}
							</h3>
							<p className={props.valueClass} style={{ color: props.valueColor }}>
								{field.value}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Countdown.editor = {
	name: 'Countdown',
	classes: ['text-px-32', 'inline-flex', 'font-primary', 'font-normal'],
	style: {
		'background-color': '#ccc',
		'max-width': 'auto',
	},
	attributes: {
		date: new Date(),
		titleClass: '',
		titleColor: '',
		valueClass: '',
		colorPicker: '',
	},
	traits: [
		{
			type: 'datetime-local',
			label: 'Date',
			name: 'date',
		},
		{
			type: 'text',
			label: 'Title Class selector',
			name: 'titleClass',
		},
		{
			type: 'custom-color',
			label: 'Title Color',
			name: 'titleColor',
		},
		{
			type: 'custom-color',
			label: 'Value Color',
			name: 'valueColor',
		},
		{
			type: 'text',
			label: 'Value Class selector',
			name: 'valueClass',
		},
	],
}
