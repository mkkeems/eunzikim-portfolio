import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { PageContainer, Content } from "../components/PageContainer";
import Navbar from "../components/Navbar";
import TreeplePage from "./TreeplePage";
import FreshlyPage from "./FreshlyPage";

const WorkPageMain = () => {
  let { path, url } = useRouteMatch();

  return (
    <PageContainer>
      <Navbar className="work-nav" />
      <Content>
        <Switch>
          <Route exact path={`${path}/treeple`} component={TreeplePage} />
          <Route exact path={`${path}/freshly`} component={FreshlyPage} />
          <Redirect from="/work" to={`${path}/treeple`} />
        </Switch>
      </Content>
    </PageContainer>
  );
};

export default WorkPageMain;
