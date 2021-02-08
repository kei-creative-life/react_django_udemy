import React from 'react'

const CountDisplay = ({name, count}) => {
	console.log(`display ${name}`)
	return (
		<>
			{count}
		</>
	)
}

export default React.memo(CountDisplay)
