import Link from "next/link";
import classes from "./EventItem.module.css";
import DateIcon from "../icons/dateIcon";
import AddressIcon from "../icons/addressIcon";
import ArrowRightIcon from "../icons/arrowRightIcon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "/n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Link href={exploreLink}>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
