import './ProgressBar.scss'

export default function ProgressBar (props) {
  const name = props.name
  const percentage = props.percentage + '%'
  const number = 100 - props.percentage + '%'
  // const number = props.percentage + '%'

  return (
    <div className='ProgressBar'>
      <p><b>{name}</b></p>
      <div className='progress'>
        <div className='progress-bar' style={{ width: percentage }}>
          <span className='number flex-center' style={{ right: number }}>{percentage}</span>
        </div>
      </div>
    </div>
  )
}
