import React from 'react';
import { useParams } from "react-router-dom";

const withRouter = (Component: any) => (props: any) => {
  const params = useParams();
  return <Component {...props} {...params} />;
};

export default withRouter;