import type { Item } from "../data/items";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className={`item-card item-card--${item.tier}`}>
      <div className="item-image-placeholder">
        {item.name.charAt(0)}
      </div>

      <span className="item-name">
        {item.name}
      </span>
    </div>
  );
}

export default ItemCard;