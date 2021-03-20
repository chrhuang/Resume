import './Box.scss'
import Info from './Info/Info'

export default function Box (props) {
  const title = props.title
  const titleBis = props.titleBis
  const ressources = props.ressources
  console.log(ressources)

  return (
    <div className='Box'>
      <div className='title'>
        <b>{title}</b>{titleBis}
      </div>
      {
        ressources.map((value, index) => {
          return (
            <Info
              key={index}
              start={value.start}
              end={value.end}
              where={value.where}
              place={value.place}
              desc={value.desc}
              last={!ressources[index + 1]}
            />
          )
        })
      }
    </div>
  )
}
