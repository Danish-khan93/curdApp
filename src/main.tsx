import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./feature/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home,Layout,NotFound ,CreatePost} from "./pages/index.ts";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
    element: <Home/>,
      },
      {
        path: "*",
    element: <NotFound/>,
      },
      {
        path: "/create",
    element: <CreatePost/>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StyledEngineProvider>
);
