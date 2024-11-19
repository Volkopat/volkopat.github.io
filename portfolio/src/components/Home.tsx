import { Box, Container, Heading, Text, VStack, HStack, Icon, Tag, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

function Home() {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} align="start">
        <Box>
          <Heading size="2xl" mb={4}>Your Name</Heading>
          <Text fontSize="xl" color={textColor}>
            Machine Learning Engineer & Software Developer
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>About Me</Heading>
          <Text color={textColor}>
            A passionate ML Engineer and Software Developer with expertise in building 
            scalable machine learning solutions and robust software systems. 
            Experienced in DevOps practices and deploying ML models to production.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Expertise</Heading>
          <VStack align="start" spacing={4}>
            <HStack wrap="wrap" spacing={4}>
              <Tag size="lg" colorScheme="blue">Machine Learning</Tag>
              <Tag size="lg" colorScheme="green">Deep Learning</Tag>
              <Tag size="lg" colorScheme="purple">MLOps</Tag>
              <Tag size="lg" colorScheme="orange">Software Engineering</Tag>
              <Tag size="lg" colorScheme="cyan">DevOps</Tag>
            </HStack>
            <HStack wrap="wrap" spacing={4}>
              <Tag size="md">Python</Tag>
              <Tag size="md">PyTorch</Tag>
              <Tag size="md">TensorFlow</Tag>
              <Tag size="md">Docker</Tag>
              <Tag size="md">Kubernetes</Tag>
            </HStack>
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Connect</Heading>
          <HStack spacing={6}>
            <Icon 
              as={FaGithub} 
              w={8} 
              h={8} 
              cursor="pointer" 
              _hover={{ color: 'blue.500' }}
              onClick={() => window.open('https://github.com/yourusername')} 
            />
            <Icon 
              as={FaLinkedin} 
              w={8} 
              h={8} 
              cursor="pointer" 
              _hover={{ color: 'blue.500' }}
              onClick={() => window.open('https://linkedin.com/in/yourusername')} 
            />
            <Icon 
              as={FaTwitter} 
              w={8} 
              h={8} 
              cursor="pointer" 
              _hover={{ color: 'blue.500' }}
              onClick={() => window.open('https://twitter.com/yourusername')} 
            />
            <Icon 
              as={SiHuggingface} 
              w={8} 
              h={8} 
              cursor="pointer" 
              _hover={{ color: 'blue.500' }}
              onClick={() => window.open('https://huggingface.co/yourusername')} 
            />
          </HStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default Home