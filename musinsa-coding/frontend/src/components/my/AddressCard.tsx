import type { UserAddress } from "@/types";
import {
  addressCard,
  cardTop,
  addressName,
  defaultBadge,
  addressPhone,
  addressText,
  addressZip,
  cardActions,
  actionBtn,
} from "./AddressCard.css";

interface Props {
  address: UserAddress;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function AddressCard({ address, onEdit, onDelete }: Props) {
  return (
    <article className={addressCard}>
      <div className={cardTop}>
        <span className={addressName}>{address.name}</span>
        {address.isDefault && <span className={defaultBadge}>기본</span>}
      </div>
      <div className={addressPhone}>{address.phone}</div>
      <div className={addressText}>
        {address.address1}
        {address.address2 && ` ${address.address2}`}
        <span className={addressZip}>({address.zipCode})</span>
      </div>
      <div className={cardActions}>
        <button
          type="button"
          className={actionBtn}
          onClick={() => onEdit?.(address.id)}
        >
          수정
        </button>
        <button
          type="button"
          className={actionBtn}
          onClick={() => onDelete?.(address.id)}
        >
          삭제
        </button>
      </div>
    </article>
  );
}
