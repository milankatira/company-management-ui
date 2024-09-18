import React, { useState } from 'react';
import { Container, TextInput, Button } from '@mantine/core';
import toast from 'react-hot-toast';

const AddCompanyPage: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [companyAddress, setCompanyAddress] = useState<string>('');

  const handleAddCompany = () => {
    // Logic to add a company goes here
    console.log(`Company Name: ${companyName}, Address: ${companyAddress}`);
    toast.success("company added successfully");
  };

  return (
    <Container style={{ textAlign: 'left' }}>
      <h1>Add Company</h1>
      <TextInput
        label="Company Name"
        placeholder="Enter company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.currentTarget.value)}
      />
      <TextInput
        label="Company Address"
        placeholder="Enter company address"
        value={companyAddress}
        onChange={(e) => setCompanyAddress(e.currentTarget.value)}
        mt="sm"
      />
      <Button mt="md" onClick={handleAddCompany}>Add Company</Button>
    </Container>
  );
}

export default AddCompanyPage;
