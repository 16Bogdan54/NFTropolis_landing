import styles from "./card.module.css";

console.log(typeof styles);

type TypeOfCard =
  | "inspiration"
  | "event"
  | "member"
  | "collab"
  | "collection"
  | "contact";

interface ICard {
  type: TypeOfCard;
  img?: string;
  heading: string;
  subHeading?: string;
  paragraph?: string;
}

const cardStyle = {
  inspiration: "inspiration_card",
  event: "event_card",
  member: "member_card",
  collab: "collab_card",
  collection: "collection_card",
  contact: "contact_card",
};

const imgStyle = {
  inspiration: "img_small",
  event: "img_big",
  member: "img_big",
  collection: "img_big",
};

const cardPadding = {
  collection: "px-6 py-3",
  event: "px-0 py-0 dark:px-6 dark:py-3",
};

const Card = ({ type, img, heading, subHeading, paragraph }: ICard) => {
  return (
    <div
      className={`dark:text-text-dark dark:bg-background-dark dark:border-2 dark:border-gray-200 ${styles[cardStyle[type]]}`}
    >
      {type !== "collab" && type !== "contact" && (
        <img
          className={`dark:rounded-b-none ${styles[imgStyle[type]]}`}
          src={img}
          alt=""
        />
      )}
      <div
        className={
          type === "collection" || type === "event"
            ? `${cardPadding[type]}`
            : ""
        }
      >
        <h3 className={styles.heading}>{heading}</h3>
        {type !== "collab" && (
          <span className={styles.subheading}>{subHeading}</span>
        )}
        {type !== "member" && type !== "contact" && (
          <p className={styles.paragraph}>{paragraph}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
