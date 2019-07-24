import Link from 'next/link';

export default function Jumbotron({ imgSrc, mainHeader, subHeader}) {
  // const [addressInput, setAddressInput] = useState("");

  return (
    <div>
      <div className="jumbotron-container" style={{backgroundImage: `url('${imgSrc}')`}}>
        <h1>{mainHeader}</h1>
        <p>{subHeader}</p>
        <Link href={{ pathname: '/deals/' }} as='/deals'>
          <a className="link-option">Find Places Near Me</a>
        </Link>
      </div>
    </div>
  )
}