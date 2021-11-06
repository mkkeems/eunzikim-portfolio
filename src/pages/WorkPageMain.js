import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { PageContainer, Content } from "../components/PageContainer";
import Navbar from "../components/Navbar";
import TreeplePage from "./TreeplePage";
import FreshlyPage from "./FreshlyPage";
import GoodocPage from "./GoodocPage";
import KbBankPage from "./KbBankPage";

const WorkPageMain = () => {
  let { path } = useRouteMatch();

  return (
    <PageContainer>
      <Navbar className="work-nav" />
      <Content>
        <Switch>
          <Route exact path={`${path}/treeple`} component={TreeplePage} />
          <Route exact path={`${path}/freshly`} component={FreshlyPage} />
          <Route exact path={`${path}/goodoc`} component={GoodocPage} />
          <Route exact path={`${path}/kbbank`} component={KbBankPage} />
          <Redirect from="/work" to={`${path}/treeple`} />
        </Switch>
      </Content>
    </PageContainer>
  );
};

export default WorkPageMain;
