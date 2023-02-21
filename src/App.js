import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoBody from "./components/VideoBody";
import WatchPage from "./components/WatchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<Header />,<Body />],
      children: [
        {
          path: "/",
          element: <VideoBody />,
        },
        {
          path: "watch",
          element: <WatchPage/>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div >
        
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
