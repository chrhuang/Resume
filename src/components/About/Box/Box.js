import './Box.scss'

export default function Box (props) {
  const title = props.title
  const titleBis = props.titleBis
  return (
    <div className='Box'>
      <div className='title'>
        <b>{title}</b>{titleBis}
      </div>
      <div className='row'>
        <div className='col-4 d-flex flex-column'>
          <p>date</p>
          <p>Quelque chose</p>
        </div>
        <div className='col-8'>
          Coucou
        </div>
      </div>
    </div>
  )
}
