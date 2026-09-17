import { Link } from "react-router-dom";
import Page from "../components/Page";

const NotFound = () => (
  <Page title="Page Not Found" prev={{ to: "/", title: "Home" }}>
    <p>
      Sorry, but the page you were trying to view does not exist. Head back{" "}
      <Link to="/">home</Link>.
    </p>
  </Page>
);

export default NotFound;
