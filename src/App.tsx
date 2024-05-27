import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

import Event from './pages/Event';

// add
import Overview from './pages/Overview';
import Feedback from './pages/Feedback';
import AnimalSpecies from './pages/Species/Animal.species';
import VegetalSpecies from './pages/Species/PlantSpecies.tsx';
import Activity from './pages/Activity';
import Landscape from './pages/Landscape';
import Message from './pages/Message';
import ReactQueryProvider from './provider/reactQuery.provider.tsx';
import { Toaster } from '../@/components/ui/toaster.tsx';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ReactQueryProvider>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Tsingy Dashboard" />
              <Overview />
            </>
          }
        />
        <Route
          path="/feedback"
          element={
            <>
              {/* <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Feedback />
            </>
          }
        />
        <Route
          path="/species/animal"
          element={
            <>
              {/* <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <AnimalSpecies />
            </>
          }
        />
        <Route
          path="/species/plant"
          element={
            <>
              {/* <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <VegetalSpecies />
            </>
          }
        />
        <Route
          path="/event"
          element={
            <>
              {/* <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              {/* <DemoApp /> */}
              <Event />
            </>
          }
        />
        {/* <Route
          path="/event-demo"
          element={
            <>
              <DemoApp />
            </>
          }
        /> */}
        <Route
          path="/activity"
          element={
            <>
              {/* <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Activity />
            </>
          }
        />
        <Route
          path="/landscape"
          element={
            <>
              {/* <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Landscape />
            </>
          }
        />
        <Route
          path="/message"
          element={
            <>
              {/* <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Message />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              {/* <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              {/* <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              {/* <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              {/* <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              {/* <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              {/* <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              {/* <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              {/* <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              {/* <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              {/* <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
              <SignUp />
            </>
          }
        />
      </Routes>
      <Toaster/>
    </ReactQueryProvider>
  );
}

export default App;
