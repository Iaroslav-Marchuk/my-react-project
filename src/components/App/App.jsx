// import OrderForm from '../OrderForm/OrderForm'; // форма реєстрації

import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import css from './App.module.css';
import 'react-tabs/style/react-tabs.css';

import Active from '../Active/Active';
import Container from '../Container/Container';
import Completed from '../Comleted/Completed';
import FormSection from '../FormSection/FormSection';
import Section from '../Section/Section';

export default function App() {
  return (
    <Section>
      <Container>
        <FormSection className={css.formSection} />
        <Tabs className={css.tabsSection}>
          <TabList className={css.tabList}>
            <Tab className={css.tab}>ACTIVE</Tab>
            <Tab className={css.tab}>COMPLETED</Tab>
          </TabList>

          <TabPanel className={css.tab.Panel}>
            <Active />
          </TabPanel>
          <TabPanel className={css.tab.Panel}>
            <Completed />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
}
