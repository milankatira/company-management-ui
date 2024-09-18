// CompanyPage.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Title, Text, Card, Image, Divider, Anchor, Stack, Loader, Alert } from '@mantine/core';
import { fetchCompanyDetails } from '../api/companyDetailsService'; // Adjust path as needed
import { useParams } from 'react-router-dom';

interface Company {
  id: string;
  reference: string;
  name: string;
  imageUrl: string | null;
  description: string;
  headOffice: {
    address: {
      cityName: string;
      regionName: string;
      countryName: string;
    }
  };
  website: string;
  email: string;
  phone: string;
  linkedIn: string;
  sectors: { name: string }[];
  industries: { name: string }[];
  ownerName: string;
  // Add other fields as necessary
}

const CompanyPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  // Query for company details, but only if companyId is defined
  const query = useQuery({
    queryKey: ['companyDetails', companyId],
    queryFn: () => {
      if (!companyId) {
        return Promise.reject('Company ID is required');
      }
      return fetchCompanyDetails(companyId);
    },
    enabled: !!companyId, // Only run the query if companyId exists
  });

  if (query.isLoading) return <Loader size="lg" variant="dots" />;
  if (query.isError) return <Alert color="red">Error: {query.error.message}</Alert>;

  const company: Company = query.data;

  return (
    <Container>
      <Title order={1} mb="md">{company.name}</Title>
      {company.imageUrl && <Image src={company.imageUrl} alt={company.name} radius="md" />}

      <Card shadow="sm" padding="lg" mt="md">
        <Stack style={{ textAlign: 'left' }}>
          <Title order={2}>Description</Title>
          <Text>{company.description}</Text>

          <Divider />

          <Title order={2}>Contact Information</Title>
          <Text>Email: {company.email || 'N/A'}</Text>
          <Text>Phone: {company.phone || 'N/A'}</Text>
          <Text>
            Website: {company.website ? <Anchor href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</Anchor> : 'N/A'}
          </Text>
          <Text>
            LinkedIn: {company.linkedIn ? <Anchor href={company.linkedIn} target="_blank" rel="noopener noreferrer">{company.linkedIn}</Anchor> : 'N/A'}
          </Text>

          <Divider />

          <Title order={2}>Location</Title>
          <Text>{company.headOffice.address.cityName}, {company.headOffice.address.regionName}, {company.headOffice.address.countryName}</Text>

          <Divider />

          <Title order={2}>Sectors</Title>
          <Text>{company.sectors.map(sector => sector.name).join(', ') || 'N/A'}</Text>

          <Divider />

          <Title order={2}>Industries</Title>
          <Text>{company.industries.map(industry => industry.name).join(', ') || 'N/A'}</Text>

          <Divider />

          <Title order={2}>Owner</Title>
          <Text>{company.ownerName}</Text>
        </Stack>
      </Card>
    </Container>
  );
};

export default CompanyPage;
