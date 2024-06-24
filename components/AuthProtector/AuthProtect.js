// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { getSession, useSession } from "next-auth/react";

// function AuthProtect() {
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async ({ children }) => {
//       const session = await getSession();
//       if (!session) {
//         router.push("/login");
//       }
//     };
//     fetchData();
//   }, [router]);

//   return children ? <>{children}</> : null;
// }

// export default AuthProtect;
