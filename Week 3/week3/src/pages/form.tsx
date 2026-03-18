import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import "@/styles/register.module.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const formData = {
      name,
      email,
      password,
    };

    localStorage.setItem("registerFormData", JSON.stringify(formData));

    alert(`Registered: ${name}\n${email}`);
  }

  return (
    <Flex direction="column" minH="100vh" className="page">
      <Box className="header">
        <Heading size="lg">My Website</Heading>
      </Box>

      <Flex className="nav" gap={6}>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Register</Link>
      </Flex>

      <Flex flex="1" justify="center" align="center" className="main">
        <Box className="form-box">
          <Heading size="md" mb={4} textAlign="center">
            Register
          </Heading>

          <Text mb={6} textAlign="center" color="gray.600">
            Please fill in the form below to create an account.
          </Text>

          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            {error && <Text className="error-text">{error}</Text>}

            <Button colorScheme="blue" type="submit" w="100%">
              Sign up
            </Button>
          </form>
        </Box>
      </Flex>

      <Box className="footer">
        <Text>© 2026 My Website. All rights reserved.</Text>
      </Box>
    </Flex>
  );
}