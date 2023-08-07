import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList(props) {
  // 외부 컴포넌트로부터 prop으로 이벤트 데이터를 받아서 list 만드는 컴포넌트
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />;
      })}
    </ul>
  );
}
export default EventList;
