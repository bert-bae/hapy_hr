export default function Jumbotron({ imgSrc}) {
  return (
    <div className="jumbotron-container" style={{backgroundImage: `url('${imgSrc})`}}></div>
  )
}