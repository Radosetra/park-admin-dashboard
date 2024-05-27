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
import PrivateRoute from './routes/PrivateRoute.tsx';
import AuthProvider from './provider/AuthProvider.tsx';


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
      <AuthProvider>
      <Routes>
      <Route
        path="/auth/login"
        element={
          <>
            {/* <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> */}
            <SignIn />
          </>
        }
      />

      <Route element={<PrivateRoute />}>
      <Route
          path="/overview"
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
              <Feedback />
            </>
          }
        />
        <Route
          path="/species/animal"
          element={
            <>
              <AnimalSpecies />
            </>
          }
        />
        <Route
          path="/species/plant"
          element={
            <>
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
        <Route
          path="/activity"
          element={
            <>
              <Activity />
            </>
          }
        />
        <Route
          path="/landscape"
          element={
            <>
              <Landscape />
            </>
          }
        />
        <Route
          path="/message"
          element={
            <>
              <Message />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        />
      </Route>
        
      </Routes>

      <Toaster/>
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default App;
