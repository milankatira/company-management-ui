import { useState } from 'react';
import { TextInput, PasswordInput, Button, Card, Container, Title, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/companies');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container size={420} my={40}>
      <Card shadow="sm" padding="lg">
        <Title >Company Management</Title>
        <Text color="dimmed" size="sm" >
          Please login with static credentials (admin/admin)
        </Text>

        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          mt="sm"
        />
        <Button fullWidth mt="md" onClick={handleLogin}>
          Login
        </Button>
      </Card>
    </Container>
  );
}

export default LoginPage;
