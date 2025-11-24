import { JSX } from "react";

type OfferInsideProps = {
  names: string[];
}

function OfferInside({ names }: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {names.map((item) => (
          <li key={item} className="offer__inside-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { OfferInside };