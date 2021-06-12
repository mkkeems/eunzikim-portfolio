import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PageContainer, Content } from "../components/PageContainer";
import TreeplePage from "./TreeplePage";

const WorkPageMain = () => {
  let { path, url } = useRouteMatch();

  return (
    <PageContainer>
      <Navbar />
      <Content>
        <TreeplePage />
        <Switch>
          <Route exact path={`${path}/treeple`} component={TreeplePage} />
          <Redirect from="/work" to={`${path}/treeple`} />
        </Switch>
      </Content>
    </PageContainer>
  );
};

export default WorkPageMain;
