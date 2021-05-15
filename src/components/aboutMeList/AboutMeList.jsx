import "./aboutMeList.scss";

export default function aboutMeList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "aboutMeList active" : "aboutMeList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
