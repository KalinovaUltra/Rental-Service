import { OffersList } from "../../types/offer"
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList: OffersList[];
    onListItemHover?: (offerId: string) => void;
}

function CitiesCardList({offersList, onListItemHover}: CitiesCardListProps){
    
    const handleMouseEnter = (offerId: string) => {
        if (onListItemHover) {
            onListItemHover(offerId);
        }
    };

    const handleMouseLeave = () => {
        if (onListItemHover) {
            onListItemHover(''); 
        }
    };

    return(
        <div className="cities__places-list places__list tabs__content">
            {offersList.map((item) => (
                <CitiesCard 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    type={item.type} 
                    price={item.price} 
                    previewImage={item.previewImage} 
                    isPremium={item.isPremium} 
                    isFavorite={item.isFavorite}
                    rating={item.rating}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
}

export {CitiesCardList};