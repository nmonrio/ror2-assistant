import type { Item } from "../data/items";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className={`item-card item-card--${item.tier}`}>
      <div className="item-image-container">
        <img
            src={item.image}
            alt={item.name}
            className="item-image"
        />
        </div>

      <span className="item-name">
        {item.name}
      </span>
    </div>
  );
}

export default ItemCard;