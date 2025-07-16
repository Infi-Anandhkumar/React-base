// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.tsx
import React from 'react';
import { Routes, Route, useNavigate, useLocation, BrowserRouter } from 'react-router-dom';
import { Form, Input, DatePicker, Select, Button, message, Descriptions } from 'antd';
import dayjs from 'dayjs';
import 'antd/dist/reset.css';
import ItineraryConfirm from './pages/ItineraryConfirm/ItineraryConfirm';

const { Option } = Select;

const BookingForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    message.success('Booking submitted!');
    navigate(`/confirm?` + new URLSearchParams({
      from: values.from,
      to: values.to,
      depart: values.depart.format('YYYY-MM-DD'),
      return: values.return?.format('YYYY-MM-DD') || '',
      tripType: values.tripType,
      passengers: values.passengers,
    }).toString());
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ tripType: 'oneway', depart: dayjs(), passengers: 1 }}
      onFinish={onFinish}
      onFinishFailed={() => message.error('Please check the form fields')}
      style={{ maxWidth: 600, margin: 'auto', padding: 24 }}
    >
      <Form.Item name="tripType" label="Trip Type">
        <Select>
          <Option value="oneway">One‑Way</Option>
          <Option value="roundtrip">Round‑Trip</Option>
        </Select>
      </Form.Item>

      <Form.Item name="from" label="From" rules={[{ required: true, message: 'Departure city is required' }]}>
        <Input placeholder="City or Airport" />
      </Form.Item>

      <Form.Item name="to" label="To" rules={[{ required: true, message: 'Destination is required' }]}>
        <Input placeholder="City or Airport" />
      </Form.Item>

      <Form.Item name="depart" label="Depart Date" rules={[{ required: true }]}>
        <DatePicker disabledDate={d => d && d.isBefore(dayjs(), 'day')} style={{ width: '100%' }} />
      </Form.Item>

      {form.getFieldValue('tripType') === 'roundtrip' && (
        <Form.Item
          name="return"
          label="Return Date"
          dependencies={['depart']}
          rules={[
            { required: true, message: 'Return date is required' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || value.isAfter(getFieldValue('depart'))) return Promise.resolve();
                return Promise.reject(new Error('Return must be after departure'));
              },
            }),
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
      )}

      <Form.Item name="passengers" label="Passengers" rules={[{ required: true, type: 'number', min: 1, max: 6 }]}>
        <Input type="number" min={1} max={6} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Search Flights
        </Button>
      </Form.Item>
    </Form>
  );
};

const Confirmation: React.FC = () => {
  const { search } = useLocation();
  const params = Object.fromEntries(new URLSearchParams(search));

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 24 }}>
      <h2>Booking Confirmation</h2>
      <Descriptions bordered column={1}>
        {Object.entries(params).map(([k, v]) => (
          <Descriptions.Item key={k} label={k}>
            {v}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <Button style={{ marginTop: 16 }} onClick={() => history.back()}>
        Book Another
      </Button>
    </div>
  );
};


// const App: React.FC = () => {
//   const isStorybook = !!import.meta.env.STORYBOOK;
//   const content = (
//     <Routes>
//       <Route path="/" element={<BookingForm />} />
//       <Route path="/confirm" element={<Confirmation />} />
//     </Routes>
//   )
//     return isStorybook ? content : <BrowserRouter>{content}</BrowserRouter>;
// }

const App: React.FC = () => (
  // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<BookingForm />} />
    //   <Route path="/confirm" element={<Confirmation />} />
    // </Routes>
    <ItineraryConfirm />
  // </BrowserRouter>
);

export default App