// import { AppProps } from "next/app";
// import "../styles/index.scss";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { Provider } from "react-redux";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { store } from "@/redux/store";
// import { Toaster } from "react-hot-toast";
// import BaseLayout from "@/dynamic_layouts/base.layout";
// import PrivateRoute from "@/dynamic_layouts/protected.layout";
// import { ExtendAppProps } from "@/types_and_interfaces/types";
// import {
//   check_notification_permission_toast,
//   notification_function,
// } from "@/utils/notification";

// import "react-phone-number-input/style.css";
// import { ReactNode, useEffect } from "react";

// if (typeof window !== "undefined") {
//   require("bootstrap/dist/js/bootstrap");
// }

// const queryClient = new QueryClient({
//   defaultOptions: {
//     // mutations: { onError: (error) => console.log(error) },
//     queries: {
//       refetchOnWindowFocus: false,
//       retry: 0,
//       // onError: (error) => console.log(error)
//     },
//   },
// });

// const Notification = ({ children }: { children: ReactNode }) => {
//   useEffect(() => {
//     // check_notification_permission_toast()
//     notification_function();
//   }, []);

//   return <>{children}</>;
// };

// export default function App({ Component, pageProps }: ExtendAppProps) {
//   const authProps = Component.authenticate;

//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <Provider store={store}>
//           <Notification>
//             <BaseLayout>
//               {authProps ? (
//                 <PrivateRoute authProps={authProps}>
//                   <Component {...pageProps} />
//                 </PrivateRoute>
//               ) : (
//                 <Component {...pageProps} />
//               )}
//               <Toaster />
//               <ReactQueryDevtools />
//             </BaseLayout>
//           </Notification>
//         </Provider>
//       </QueryClientProvider>
//     </>
//   );
// }

import "../styles/index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import BaseLayout from "@/dynamic_layouts/base.layout";
import PrivateRoute from "@/dynamic_layouts/protected.layout";
import { ExtendAppProps } from "@/types_and_interfaces/types";

import "react-phone-number-input/style.css";
import { ReactNode, useEffect, useState } from "react";
import {
  check_notification_permission_toast,
  notification_function,
} from "@/utils/notification";
import { getCookie } from "cookies-next";
import Head from "next/head";
import { set_home_mode } from "@/redux/features/global-slice";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const queryClient = new QueryClient({
  defaultOptions: {
    // mutations: { onError: (error) => console.log(error) },
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      // onError: (error) => console.log(error)
    },
  },
});

const Notification = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // check_notification_permission_toast()
    notification_function();
  }, []);

  return <>{children}</>;
};

export default function App({ Component, pageProps }: ExtendAppProps) {
  const _ca = getCookie("lang");

  const authProps = Component.authenticate;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Notification>
            <BaseLayout>
              {authProps ? (
                <PrivateRoute authProps={authProps}>
                  <Component {...pageProps} />
                </PrivateRoute>
              ) : (
                <Component {...pageProps} />
              )}
              <Toaster />
              <ReactQueryDevtools />
            </BaseLayout>
          </Notification>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
