import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Card, Grid, Loader, Alert, Text, Group, Badge, Anchor, Button } from '@mantine/core';
import { Company, fetchCompanies } from '../api/companyService';
import { Link } from 'react-router-dom';

const ListCompaniesPage: React.FC = () => {
  const query = useQuery({
    queryKey: ['companies'],
    queryFn: () => fetchCompanies(1, 10),
  });

  if (query.isLoading) return <Loader size="lg" variant="dots" />;
  if (query.isError) return <Alert color="red">Error: {query.error.message}</Alert>;

  return (
    <Container>
      <Card padding="lg" radius="md" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>

        <h1>Companies</h1>
        <Link to="/add-company">
          <Button >Add Company</Button>
        </Link>
      </Card>
      <Grid>
        {query.data?.data?.map((company) => (
          <Grid.Col key={company.id}>
            <CompanyCard company={company} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};


const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group mt="md" mb="xs">
        <Text >{company.name}</Text>
        <Badge color="blue" variant="light">
          {"software engineering"}
        </Badge>
      </Group>
      <Group mt="md" mb="xs" align='start'>
        <Text size="sm" style={{ textAlign: 'left' }}>
          {company?.description && `${company?.description?.substring(0, 200)}...`}
          {company?.description &&
            <Anchor component={Link} to={`/companies/${company.id}`} mt="md" style={{ textAlign: 'right' }}>
              Read More
            </Anchor>
          }
        </Text>
      </Group>
    </Card>
  );
};

export default ListCompaniesPage;
