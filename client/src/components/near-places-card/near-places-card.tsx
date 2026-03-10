
import { CitiesCard } from "../cities-card/cities-card";
import { OffersList } from "../../types/offer";

type NearPlacesCardProps = {
  offer: OffersList;
}

function NearPlacesCard({ offer }: NearPlacesCardProps) {
  return (
    <CitiesCard
      id={offer.id}
      title={offer.title}
      type={offer.type}
      price={offer.price}
      isPremium={offer.isPremium}
      previewImage={offer.previewImage}
      isFavorite={offer.isFavorite}
      rating={offer.rating}
    />
  );
}

export { NearPlacesCard };