// import logo from './logo.svg';
import {
  Routes,
  Route,
} from "react-router-dom";
import 'App.scss';
// import 'assets/scss/style.scss';
// import "swiper/css/bundle";
import { Header } from "components/layout/Header";
import { Caraousel } from "components/home/Caraousel";
import { FilterableTable } from "components/home/FilterableTable";
// import { LandingPage } from "components/LandingPage";
import { AutoComplete } from "components/home/AutoComplete";
import { SignIn } from "components/user/SignIn";
import { NotFound } from "components/error-page/NotFound";
import { LandingPage } from "components/Landing-page/LandingPage";
import { QrCode } from "components/home/QrCode";

function App() {
  return (
    <>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<SignIn />} />
        <Route path="/" element={<Header />}>
          <Route index path="slider"  element={<Caraousel />} />
          <Route path="signin"  element={<SignIn />} />
          <Route path="autocomplete" element={<AutoComplete />} />
          <Route path="filterable-table" element={<FilterableTable />} />
          <Route path="qr-code" element={<QrCode />} />
          <Route path="landing-page" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
    </Routes>
  </>
  );
}

export default App;
