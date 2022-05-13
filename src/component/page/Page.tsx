import "./_page.scss";

import React from "react";

interface PageProps {
  children: React.ReactNode;
}

function Page({children}: PageProps) {
  return <div className={"page"}>{children}</div>;
}

export default Page;
