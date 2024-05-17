import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./website/layout/Master";
import Home from "./website/main/pages/Home";
import { About } from "./website/main/pages/About";
import Bride from "./website/main/pages/Bride";
import Grooms from "./website/main/pages/Grooms";
import Search from "./website/main/pages/Search";
import MemberShip from "./website/main/pages/MemberShip";
import Contact from "./website/main/pages/Contact";
import GroomList from "./website/main/pages/GroomList";
import Login from "./website/authentication/Login";
import Register from "./website/authentication/Register";
import Groomcast from "./website/main/pages/Groomcast";
import Brideview from "./website/main/pages/Brideview";
import BrideCast from "./website/main/pages/BrideCast";
import Profile from "./website/main/pages/Profile";
import Dashboard from "./website/main/pages/Dashboard";
import PartnerRef from "./website/main/pages/PartnerRef";

import Shortlisted from "./website/main/pages/Shortlisted";

import ViewProfile from "./website/main/pages/ViewProfile";
import whovisit from "./website/main/pages/whovisit";
import Ivisited from "./website/main/pages/Ivisited";
import View_by_matri_id from "./website/main/pages/View_by_matri_id";
import Membersow from "./website/main/pages/Membersow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master Rcf={Home} />} />
          <Route path="/about" element={<Master Rcf={About} />} />
          <Route path="/groom" element={<Master Rcf={Grooms} />}></Route>
          <Route path="/bride" element={<Master Rcf={Bride} />} />
          <Route path="/search" element={<Master Rcf={Search} />} />
          <Route path="/membership" element={<Master Rcf={MemberShip} />} />
          <Route path="/contact-us" element={<Master Rcf={Contact} />} />
          <Route path="/groomlist" element={<Master Rcf={GroomList} />} />
          <Route path="/brideview" element={<Master Rcf={Brideview} />} />
          <Route path="/bridecast" element={<Master Rcf={BrideCast} />} />
          <Route path="/buymember" element={<Master Rcf={Membersow} />} />

          <Route path="/login" element={<Master Rcf={Login} />} />
          <Route path="/register" element={<Master Rcf={Register} />} />
          <Route
            path="/groomcast/:caste_id"
            element={<Master Rcf={Groomcast} />}
          ></Route>
          <Route path="/profile" element={<Master Rcf={Profile} />} />
          <Route path="/dashboard" element={<Master Rcf={Dashboard} />} />

          <Route path="/partnerref" element={<Master Rcf={PartnerRef} />} />

          <Route path="/shortlisted" element={<Master Rcf={Shortlisted} />} />

          <Route path="/whovisit" element={<Master Rcf={whovisit} />} />
          <Route path="/Ivisited" element={<Master Rcf={Ivisited} />} />
          <Route
            path="/viewProfile/:id"
            element={<Master Rcf={ViewProfile} />}
          />

          <Route
            path="/shortlisted/:id/:user_id"
            element={<Master Rcf={Shortlisted} />}
          />
          <Route
            path="/shortlisted/:id"
            element={<Master Rcf={Shortlisted} />}
          />
          <Route
            path="/View_by_matri_id"
            element={<Master Rcf={View_by_matri_id} />}
          />
          <Route path="/whovisit" element={<Master Rcf={whovisit} />} />
          <Route path="/Ivisited" element={<Master Rcf={Ivisited} />} />
          <Route
            path="/viewProfile/:member_id"
            element={<Master Rcf={ViewProfile} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
