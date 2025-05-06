// import OrderForm from '../OrderForm/OrderForm'; // форма реєстрації

import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import css from './App.module.css';
import 'react-tabs/style/react-tabs.css';

import Active from '../Active/Active';
import Container from '../Container/Container';
import Completed from '../Comleted/Completed';
import FormSection from '../FormSection/FormSection';
import InProgress from '../InProgress/InProgress';
import Section from '../Section/Section';

export default function App() {
  const [activeOrders, setActiveOrders] = useState(() => {
    const saved = localStorage.getItem('activeOrders');
    return saved ? JSON.parse(saved) : [];
  });

  const [inProgressOrders, setInProgressOrders] = useState(() => {
    const saved = localStorage.getItem('inProgressOrders');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedOrders, setCompletedOrders] = useState(() => {
    const saved = localStorage.getItem('completedOrders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('activeOrders', JSON.stringify(activeOrders));
  }, [activeOrders]);

  useEffect(() => {
    localStorage.setItem('inProgressOrders', JSON.stringify(inProgressOrders));
  }, [inProgressOrders]);

  useEffect(() => {
    localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
  }, [completedOrders]);

  const addNewOrder = (newOrder) => {
    setActiveOrders((prevOrders) => {
      const existingOrder = prevOrders.find(
        (order) => order.EP === newOrder.EP,
      );

      if (existingOrder) {
        return prevOrders.map((order) => {
          if (order.EP === newOrder.EP) {
            return {
              ...order,
              pedidos: [...order.pedidos, ...newOrder.pedidos],
            };
          }
          return order;
        });
      } else {
        return [
          ...prevOrders,
          {
            ...newOrder,
            pedidos: newOrder.pedidos,
          },
        ];
      }
    });
  };

  const moveToInProgress = (orderId) => {
    const orderToMove = activeOrders.find((order) => order.id === orderId);
    if (!orderToMove) return;

    setActiveOrders((prevActiveOrders) =>
      prevActiveOrders.filter((order) => order.id !== orderId),
    );
    setInProgressOrders((prevInProgressOrders) => [
      ...prevInProgressOrders,
      orderToMove,
    ]);
  };

  const moveToCompleted = (orderId) => {
    const orderToMove = inProgressOrders.find((order) => order.id === orderId);
    if (!orderToMove) return;

    setInProgressOrders((prevInProgressOrders) =>
      prevInProgressOrders.filter((order) => order.id !== orderId),
    );
    setCompletedOrders((prevCompletedOrders) => [
      ...prevCompletedOrders,
      orderToMove,
    ]);
  };

  const deleteOrder = (orderId) => {
    setCompletedOrders((prevCompletedOrders) => {
      return prevCompletedOrders.filter(
        (prevCompletedOrder) => prevCompletedOrder.id !== orderId,
      );
    });
  };

  return (
    <Section>
      <Container>
        <FormSection className={css.formSection} onAddOrder={addNewOrder} />
        <Tabs className={css.tabsSection}>
          <TabList className={css.tabList}>
            <Tab className={css.tab}>ACTIVE</Tab>
            <Tab className={css.tab}>IN PROGRESS</Tab>
            <Tab className={css.tab}>COMPLETED</Tab>
          </TabList>

          <TabPanel className={css.tab.Panel}>
            <Active activeOrders={activeOrders} onMove={moveToInProgress} />
          </TabPanel>
          <TabPanel className={css.tab.Panel}>
            <InProgress
              inProgressOrders={inProgressOrders}
              onMove={moveToCompleted}
            />
          </TabPanel>
          <TabPanel className={css.tab.Panel}>
            <Completed
              completedOrders={completedOrders}
              onDelete={deleteOrder}
            />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
}
